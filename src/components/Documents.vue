<script setup lang="ts">
import { ref, reactive, onMounted, watch } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import api from '@/services/apiService'

const documentDialog = ref(false)
const isEdit = ref(false)
const showPurpose = ref(false)
const showDocument = ref(true)
const formLabelWidth = '140px'
const tilteModal = ref('')
const listOfDocuments = ref([])
const listOfPurpose = ref([])
const purposeForm = reactive({
  description: '',
  id: null,
  documentId: null,
  purpose: [{ description: '' }]
})

const documentForm = reactive({
  documentName: '',
  documentId: null,
  price: '',
  isVoter: false,
  nonVoter: false
})

const clearFields = () => {
  documentForm.documentName = ''
  documentForm.price = ''
  documentForm.isVoter = false
  documentForm.nonVoter = false
}
const showDocumentTable = () => {
  showDocument.value = true
}

const addRow = () => {
  purposeForm.purpose.push({ description: '' })
}

const removeRow = async (desc: any, index: any) => {
  if (desc.id) {
    purposeForm.id = desc.id
    await deleteSpecificPurpose()
  } else {
    purposeForm.purpose.splice(index, 1)
  }
}

const addDocument = async () => {
  try {
    const response = await api.post('Documents', documentForm)
    if (response) {
      ElMessage({
        type: 'success',
        message: 'Successfully Added!'
      })
      documentDialog.value = false
      clearFields()
      getAllDocuments()
    }
  } catch (error) {
    console.log(error)
  }
}

const handlePurpose = (row: any) => {
  purposeForm.documentId = row.documentId
  showPurpose.value = true
  showDocument.value = false
  getSpecficPurpose()
}
const getSpecficPurpose = async () => {
  const response = await api.get(`Documents/Purpose/${purposeForm.documentId}`)
  listOfPurpose.value = response.data
  console.log('list of purpose', listOfPurpose.value)
}
const deleteSpecificPurpose = async () => {
  const response = await api.delete(`Documents/Purpose/${purposeForm.id}`)
  getSpecficPurpose()
}
const updateSpecificPurpose = async () => {
  const response = await api.put(`Documents/Purpose/${purposeForm.id}`)
}

const savePurpose = async () => {
  const isPurpose = purposeForm.purpose.map((desc) => {
    return { description: desc.description }
  })
  const formData = {
    description: isPurpose,
    documentId: purposeForm.documentId
  }
  try {
    const response = await api.post('Documents/Purpose', formData)
    if (response) {
      ElMessage({
        type: 'success',
        message: 'Successfully saved!'
      })
      purposeForm.purpose = []
      getSpecficPurpose()
    }
  } catch (error) {
    console.log(error)
  }
}

const handleAdd = () => {
  documentDialog.value = true
  tilteModal.value = 'Add'
  isEdit.value = false
  clearFields()
}

const handleEdit = (documents: any) => {
  tilteModal.value = 'Update'
  documentForm.documentId = documents.documentId
  documentForm.documentName = documents.documentName
  documentForm.price = documents.price
  documentForm.isVoter = documents.isVoter
  documentForm.nonVoter = documents.nonVoter
  documentDialog.value = true
  isEdit.value = true
}

const updateDocument = async () => {
  const response = await api.put(`Documents/${documentForm.documentId}`, {
    documentId: documentForm.documentId,
    documentName: documentForm.documentName,
    price: documentForm.price,
    isVoter: documentForm.isVoter,
    nonVoter: documentForm.nonVoter
  })
  if (response) {
    ElMessage({
      type: 'success',
      message: 'Successfully Added!'
    })
    clearFields()
    documentDialog.value = false
    getAllDocuments()
  }
}
const deleteDocument = (document: any) => {
  ElMessageBox.confirm(
    'This will permanently delete this card. Continue?',
    'Warning',
    {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning'
    }
  ).then(async () => {
    await api.delete(`Documents/${document.documentId}`).then((response) => {
      if (response) {
        ElMessage({
          type: 'success',
          message: 'Successfully Deleted'
        })
      }
      documentDialog.value = false
      getAllDocuments()
    })
  })
}
const getAllDocuments = async () => {
  try {
    const response = await api.get('Documents')
    if (response) {
      listOfDocuments.value = response.data
    }
  } catch (error) {
    console.log(error)
  }
}

const loadAll = async () => {
  getAllDocuments()
}

onMounted(async () => {
  loadAll()
})
</script>

<template>
  <div class="main-content">
    <div
      class="back-wrapper"
      @click="showDocumentTable()"
    >
      <i
        class="fa fa-arrow-left"
        aria-hidden="true"
      />
    </div>

    <div
      v-if="showDocument"
      class="user-summary-wrapper"
    >
      <div class="header-documents">
        <div class="summary-title">
          <span>Documents List</span>
        </div>
        <div class="add-documents-wrapper">
          <el-button
            type="primary"
            @click="handleAdd()"
          >
            Add Documents
          </el-button>
        </div>
      </div>
      <div class="table-wrapper">
        <table>
          <tr>
            <th>Document Name</th>
            <th>Price</th>
            <th>IsVoter</th>
            <th>Non-Voter</th>
            <th />
          </tr>
          <template
            v-for="documents in listOfDocuments"
            :key="documents.documentId"
          >
            <tr>
              <td>{{ documents.documentName }}</td>
              <td>{{ documents.price }}</td>
              <td>{{ documents.isVoter ? 'Yes' : 'No' }}</td>
              <td>{{ documents.nonVoter ? 'Yes' : 'No' }}</td>
              <td>
                <el-button
                  type="primary"
                  @click="handleEdit(documents)"
                >
                  Edit
                </el-button>
                <el-button
                  type="danger"
                  @click="deleteDocument(documents)"
                >
                  Delete
                </el-button>
                <el-button
                  type="primary"
                  @click="handlePurpose(documents)"
                >
                  Add Purpose
                </el-button>
              </td>
            </tr>
          </template>
        </table>
      </div>
    </div>
    <div
      v-else
      class="user-summary-wrapper"
    >
      <div class="header-documents">
        <div class="summary-title">
          <span>Purpose List</span>
        </div>
        <!-- <div class="add-documents-wrapper">
          <el-button
            type="primary"
            @click="handleAdd()"
          >
            Add Documents
          </el-button>
        </div> -->
      </div>
      <div class="header-purpose-content">
        <div class="button-wrapper-purpose">
          <el-button
            type="primary"
            @click="addRow()"
          >
            + Add Row
          </el-button>
        </div>

        <div class="description-content">
          <div class="input-container">
            <template
              v-for="(desc, index) in listOfPurpose"
              :key="index"
            >
              <div class="button-header">
                <input
                  v-model="desc.description"
                  class="purpose-description"
                  type="text"
                >
                <div class="button-holder">
                  <el-button
                    type="danger"
                    class="remove-button"
                    @click="removeRow(desc, index)"
                  >
                    Remove
                  </el-button>
                </div>
              </div>
            </template>
            <template
              v-for="(desc, index) in purposeForm.purpose"
              :key="index"
            >
              <div class="button-header">
                <input
                  v-model="desc.description"
                  class="purpose-description"
                  type="text"
                >
                <div class="button-holder">
                  <el-button
                    type="danger"
                    class="remove-button"
                    @click="removeRow(desc, index)"
                  >
                    Remove
                  </el-button>
                </div>
              </div>
            </template>
          </div>
        </div>
        <div class="save-purpose-wrapper">
          <el-button
            type="primary"
            class="save-purpose"
            @click="savePurpose()"
          >
            Save
          </el-button>
        </div>
      </div>
    </div>
  </div>
  <el-dialog
    v-model="documentDialog"
    :title="`${tilteModal} Documents`"
  >
    <el-form :model="documentForm">
      <el-form-item
        label="Document Name"
        :label-width="formLabelWidth"
      >
        <el-input
          v-model="documentForm.documentName"
          autocomplete="off"
        />
      </el-form-item>

      <el-form-item
        label="Price"
        :label-width="formLabelWidth"
      >
        <el-input
          v-model="documentForm.price"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item :label-width="formLabelWidth">
        <el-checkbox
          v-model="documentForm.isVoter"
          label="Voter"
        />
        <el-checkbox
          v-model="documentForm.nonVoter"
          label="Non Voter"
        />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="documentDialog = false">Cancel</el-button>
        <el-button
          type="primary"
          @click="isEdit ? updateDocument() : addDocument()"
        >
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style scoped>

.save-purpose-wrapper {
  margin-bottom: 1rem;
  display: flex;
  justify-content: flex-end;
  padding-right: 2rem;
}
.button-wrapper-purpose {
  margin-bottom: 1rem;
}

.button-header {
  display: flex;
}

.button-holder {
  display: flex;
  justify-content: flex-end;
}
.remove-button {
  position: absolute;
  margin: 1rem;
}

.purpose-description {
  outline: none;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border: #ffff;
  width: 63vw;
  box-shadow: 0px 4px 4px 0px #00000040;
  border-radius: 1rem;
}
.header-purpose-content {
  display: flex;
  flex-direction: column;
  padding: 1rem 0 0 2rem;

}
.fa-arrow-left {
  color: #F6F6F6 !important;
}
.back-wrapper {
  position: absolute;
  cursor: pointer;
  top: 3rem;
  left: 22rem;
  background: #F48D2D;
  padding: 0.5rem 0.5rem;
}
.header-documents {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
}

.main-content {
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
}

.row-wrapper {
  width: 100%;
}
.table-wrapper {
  padding: 1rem;
}

table {
  width: 100%;
  border-collapse: collapse;
}
th {
  color: #00000080;
  border-bottom: 4px solid #ebedf2;
  padding: 1rem;
  text-align: left;
  font-weight: 700;
  background-color: rgba(234, 241, 255, 0.74);
}
td {
  color: #00000080;
  border-bottom: 4px solid #ebedf2;
  padding: 1rem;
}
.summary-title {
  background-color: #542B7C;
  width: 300px;
  height: 37px;
  border-radius: 30px;
  margin-left: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.summary-title span {
  color: #F6F6F6;
}
.user-summary-wrapper {
  background-color: #F6F6F6;
  width: 70vw;
  height: auto;
  box-shadow: 0px 4px 4px 0px #00000040;
  border-radius: 30px;
  margin-top: 5rem;
  margin-bottom: 2rem;
}
</style>
