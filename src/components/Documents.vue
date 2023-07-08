<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import api from '@/services/apiService'

const documentForm = reactive({
  documentName: '',
  documentId: null,
  price: '',
  isVoter: false,
  nonVoter: false
})
const formLabelWidth = '140px'
const tilteModal = ref('')
const documentDialog = ref(false)
const isEdit = ref(false)
const listOfDocuments = ref([])
const clearFields = () => {
  documentForm.documentName = ''
  documentForm.price = ''
  documentForm.isVoter = false
  documentForm.nonVoter = false
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
const handleAdd = () => {
  documentDialog.value = true
  tilteModal.value = 'Add'
  clearFields()
  isEdit.value = false
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

onMounted(async () => {
  getAllDocuments()
})
</script>

<template>
  <div class="main-content">
    <div
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
              </td>
            </tr>
          </template>
        </table>
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
