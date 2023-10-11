<script setup lang="ts">
import { reactive, ref, onMounted, watch } from 'vue'
import api from '@/services/apiService'
import { ElMessage, ElMessageBox } from 'element-plus'
import { v4 as uuidv4 } from 'uuid'

const requestData = reactive({
  userId: uuidv4,
  documentId: uuidv4,
  documentName: '',
  purpose: '',
  documentStatus: 0,
  dateRequested: null
})
const user = reactive({
  userId: null
})

const selectedDocument = ref(null)
const userData = ref([])
const requestedDocument = ref([])
const requestDialog = ref(false)
const documentsData = ref([])
const documentPurposes = ref([])

const handleRequest = () => {
  requestDialog.value = true
}

const getAllDocuments = async () => {
  const response = await api.get('/Documents')
  documentsData.value = response.data
}

const getDocumentPurpose = async () => {
  if (selectedDocument.value) {
    console.log('documentId', selectedDocument.value)
    const response = await api.get(`Documents/Purpose/${selectedDocument.value}`)
    documentPurposes.value = response.data
  } else {
    documentPurposes.value = []
  }
}

const getUsersById = async () => {
  const userId = sessionStorage.getItem('userId')

  if (userId) {
    user.userId = userId
    const response = await api.get(`CreateAccount/${user.userId}`)
    console.log('login user', response.data)
    userData.value = response.data
  }
}

const saveRequest = async () => {
  requestData.documentId = selectedDocument.value
  const date = new Date()
  const formdata = {
    userId: user.userId,
    documentId: requestData.documentId,
    purpose: requestData.purpose,
    dateRequested: date
  }
  console.log('formData', formdata)
  const response = await api.post('YourRequest', formdata)
}

const getRequestDocument = async () => {
  const userId = sessionStorage.getItem('userId')

  const response = await api.get(`YourRequest/${userId}`)

  requestedDocument.value = response.data

  console.log('request', response.data)
}
onMounted(() => {
  getRequestDocument()
  getUsersById()
  getAllDocuments()
  getDocumentPurpose()
})

</script>

<template>
  <div
    v-for="data in userData"
    :key="data.userId"
    class="main-content"
  >
    <div>
      <div class="header-profile">
        <div class="profile-picture">
          <img
            src="@/assets/img/left-image.png"
            P
            alt=""
          >
          <div class="holder-name">
            <span class="fullname">{{ data.firstname }}</span>
            <router-link to="/profile">
              <span class="manage-profile">Manage Profile</span>
            </router-link>
          </div>
        </div>
      </div>
      <div>
        <div class="request-document-wrapper">
          <div class="frequently-documents-wrapper">
            <div class="document-content">
              <span>Frequently Requested Documents</span>
            </div>
          </div>
          <div class="requirements-wrapper">
            <div class="requirements">
              <h2 class="requirement-name">
                Barangay Clearance
              </h2>
              <div class="requirements-desc">
                <span>Requirements</span>
                <span>
                  Lorem ipsum dolor sit amet, consectetur</span>
              </div>
              <div class="requirements-desc">
                <span>Fee</span>
                <span>
                  Php 12.34</span>
              </div>
              <button class="request-button">
                Request Now!
              </button>
            </div>
            <hr>
            <div class="requirements">
              <h2 class="requirement-name">
                Certificate of Indigency
              </h2>
              <div class="requirements-desc">
                <span>Requirements</span>
                <span>
                  Lorem ipsum dolor sit amet, consectetur</span>
              </div>
              <div class="requirements-desc">
                <span>Fee</span>
                <span>
                  Php 12.34</span>
              </div>
              <button class="request-button">
                Request Now!
              </button>
            </div>
          </div>
        </div>
        <div class="action-button-wrapper">
          <div class="button-content">
            <button @click="handleRequest()">
              Request Now!
            </button>
            <button>Upload Document</button>
            <button>Pay Here</button>
          </div>
        </div>
        <div class="booking-summary-wrapper">
          <div class="summary-title">
            <span>Booking Summary</span>
          </div>
          <div class="table-wrapper">
            <table>
              <tr>
                <th>Document</th>
                <th>Purpose</th>
                <th>Date Requested</th>
                <th>Transaction No</th>
                <th>Release Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
              <tr
                v-for="request in requestedDocument"
                :key="request.id"
              >
                <td>{{ request.documentName }}</td>
              </tr>
            </table>
          </div>
        </div>
        <el-dialog
          v-model="requestDialog"
          title="Request a Document"
        >
          <select
            v-model="selectedDocument"
            class="select-field"
            @change="getDocumentPurpose"
          >
            <option
              disabled
              selected
            >
              Select
            </option>
            <template
              v-for="documents in documentsData"
              :key="documents.documentId"
            >
              <option :value="documents.documentId">
                {{ documents.documentName }}
              </option>
            </template>
          </select>
          <select
            v-model="requestData.purpose"
            class="select-field"
          >
            <option
              disabled
              selected
            >
              Purpose
            </option>
            <option
              v-for="docpurpose in documentPurposes"
              :key="docpurpose.id"
            >
              {{ docpurpose.description }}
            </option>
          </select>
          <template #footer>
            <span class="dialog-footer">
              <el-button @click="requestDialog = false">Cancel</el-button>
              <el-button
                type="primary"
                @click="saveRequest()"
              >
                Confirm
              </el-button>
            </span>
          </template>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<style scoped>
.select-field {
  margin-bottom: 2rem;
  border-radius: 1rem;
  cursor: pointer;
  height: 50px;
  width: 700px;
  border: 1px solid #F48D2D;
  overflow: none;
  padding: 1rem;
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
  margin-left: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.button-content {
  display: flex;
  gap: 8rem;
}

.button-content button {
  width: 198px;
  height: 48px;
  border-radius: 10rem;
  font-size: 18px;
  color: #342474;
  background-color: #F48D2D;
  font-weight: 700;
  border: none;
}
.summary-title span {
  color: #F6F6F6;
}
.booking-summary-wrapper {
  background-color: #F6F6F6;
  width: 70vw;
  height: auto;
  box-shadow: 0px 4px 4px 0px #00000040;
  border-radius: 30px;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.action-button-wrapper {
  background-color: #F6F6F6;
  width: 70vw;
  height: 80px;
  box-shadow: 0px 4px 4px 0px #00000040;
  border-radius: 30px;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

hr {
  border: none;
  border-top: 3px solid #342474;
  width: 96%;
}
.request-button {
  margin-left: auto;
  margin-right: auto;
  width: 158px;
  height: 48px;
  border-radius: 10rem;
  font-size: 18px;
  color: #342474;
  background-color: #F48D2D;
  font-weight: 700;
  border: none;
}
.requirements-wrapper {
  width: 100%;
  padding: 0.9rem;
}
.requirement-name {
  font-size: 25px;
  color: #041C74;
  font-weight: 600;
  width: 25%;
}

.requirements-desc span:nth-child(1) {
  text-decoration: underline;
  font-size: 18px;
  color: #FB4C8E;
}
.requirements-desc span:nth-child(2) {
  font-size: 15px;
  color: #FB4C8E;
}
.requirements-desc {
  display: grid;
}
.requirements {
  display: flex;
  margin-left: 2rem;
  align-items: center;
  gap: 4rem;
  margin: 1rem;
}
.frequently-documents-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.document-content {
  background-color: #542B7C;
  width: 300px;
  height: 5vh;
  border-radius: 30px;
  margin-top: -20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
}
.document-content span {
  color: #F6F6F6;
}
.request-document-wrapper {
  background-color: #F6F6F6;
  width: 70vw;
  height: 200px;
  box-shadow: 0px 4px 4px 0px #00000040;
  border-radius: 30px;

}

.header-profile {
  width: 175px;
  height: 60px;
  background-color: #F48D2D;
  margin: 2rem 5rem;
  display: flex;
  justify-content: flex-end;
  border-radius: 30px;
  margin-left: auto;
}
.profile-picture {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
}
.profile-picture img {
  border-radius: 50%;
  background-color: #D9D9D9;
  max-width: 24%;
}
.holder-name {
  display: grid;
  gap: 0.2rem;
}

.holder-name a {
  text-decoration: none;
}
.fullname {
  font-size: 15px;
  font-weight: 600;
  line-height: 1;
  color: #FFFFFF;
}
.manage-profile {
  font-size: 10px;
  line-height: 1;
  color: #FFFFFF;
  width: 100%;
  cursor: pointer;
}

.main-content {
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
}
</style>
