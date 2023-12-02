<template>
  <div class="register-container">
    <div class="register-content">
      <div class="login-header">
        <div class="app-logo"></div>
        <div class="title pl-px-8">Đăng ký tài khoản</div>
      </div>
      <div class="error-area" v-if="serviceError.length">
        <div class="icon-false"></div>
        <div class="error-area-text">
          <!-- <div v-for="(item, index) in serviceError" :key="index">
            {{ t(item.errorField) + " " + item.userMsg + "!" }}
          </div> -->
        </div>
      </div>
      <MTextbox
        :height="48"
        class="register-input"
        :place-holder="'Mã nhân viên'"
        :fieldName="'EmployeeCode'"
        :errorMessage="userData.EmployeeCodeErrorMsg"
        @onFocusIn="
          () => {
            userData.EmployeeCodeErrorMsg = '';
          }
        "
        @onValueChanged="
          (event) => {
            userData.EmployeeCode = event;
          }
        "
      ></MTextbox>
      <MTextbox
        class="register-input"
        :height="48"
        :place-holder="'Họ và tên'"
        :fieldName="userData.FullName"
        :errorMessage="userData.FullNameErrorMsg"
        @onFocusIn="
          () => {
            userData.FullNameErrorMsg = '';
          }
        "
        @onValueChanged="
          (event) => {
            userData.FullName = event;
          }
        "
      ></MTextbox>
      <MTextbox
        class="register-input"
        :height="48"
        :place-holder="'Nhập Email'"
        :fieldName="userData.Email"
        :errorMessage="userData.EmailErrorMsg"
        @onFocusIn="
          () => {
            userData.EmailErrorMsg = '';
          }
        "
        @onValueChanged="
          (event) => {
            userData.Email = event;
          }
        "
      ></MTextbox>
      <MTextbox
        class="register-input"
        :height="48"
        :place-holder="'Nhập số điện thoại'"
        :fieldName="userData.PhoneNumber"
        :errorMessage="userData.PhoneNumberErrorMsg"
        @onFocusIn="
          () => {
            userData.PhoneNumberErrorMsg = '';
          }
        "
        @onValueChanged="
          (event) => {
            userData.PhoneNumber = event;
          }
        "
      ></MTextbox>
      <MTextbox
        class="register-input"
        :height="48"
        :place-holder="'Nhập mật khẩu'"
        :mode="'password'"
        :fieldName="Password"
        :errorMessage="userData.PasswordErrorMsg"
        @onFocusIn="
          () => {
            userData.PasswordErrorMsg = '';
          }
        "
        @onValueChanged="
          (event) => {
            userData.Password = event;
          }
        "
      ></MTextbox>
      <MTextbox
        :height="48"
        class="register-input"
        :mode="'password'"
        :place-holder="'Nhập lại mật khẩu'"
        :fieldName="PrePassField"
        :errorMessage="userData.PrePasswordErrorMsg"
        @onFocusIn="
          () => {
            userData.PrePasswordErrorMsg = '';
          }
        "
        @onValueChanged="
          (event) => {
            userData.PrePassword = event;
          }
        "
      ></MTextbox>
      <DxSelectBox
        class="detail__dropdown pl-px-12 department"
        :class="!userData.DepartmentId && isSubmit ? 'border-error' : ''"
        :data-source="departmentDataSource"
        valueExpr="DepartmentId"
        displayExpr="DepartmentName"
        placeholder="Công ty"
        height="48"
        :searchEnabled="true"
        :searchExpr="['DepartmentName']"
        v-model="userData.DepartmentId"
        @value-changed="getSelectedOptionDepartment"
      >
      </DxSelectBox>
      <div class="mt-px-4 error-color error-font" v-if="!userData.DepartmentId && isSubmit">Công ty không được để trống</div>
      <DxSelectBox
        class="detail__dropdown mt-px-12 pl-px-12 position"
        :class="!userData.PositionId && isSubmit ? 'border-error' : ''"
        :data-source="positionDataSource"
        valueExpr="PositionId"
        height="48"
        displayExpr="PositionName"
        placeholder="Vị trí công việc"
        :searchEnabled="true"
        :searchExpr="['PositionName']"
        v-model="userData.PositionId"
        @value-changed="getSelectedOptionPosition"
      >
      </DxSelectBox>
      <div class="mt-px-4 error-color error-font" v-if="!userData.PositionId && isSubmit">Vị trí công việc không được để trống</div>
      <div class="d-flex align-items-center mt-px-16">
        <div>Đã có tài khoản?</div>
        <div
          class="primary-color pointer hover-underline ml-px-4"
          @click="onLogin"
        >
          Đăng nhập
        </div>
      </div>

      <MButton
        class="mt-px-24"
        text="Đăng ký"
        :width="404"
        :height="48"
        @onClick="onRegister"
      ></MButton>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import MTextbox from "@/components/base/MTextbox.vue";
import MButton from "@/components/base/MButton.vue";
import Users from "@/commons/models/Users.js";
import { responseStatus } from "@/commons/enums/api-response-status.js";
import ToastData from "@/commons/models/ToastData";
import { ToastType } from "@/commons/contants/toast-type.js";
import eventBus from "@/utils/event-bus/event-bus.js";
import {DxSelectBox, DxValidator, DxRequiredRule} from "devextreme-vue";
import ServiceError from "@/commons/models/ServiceError.js";
import { addNewEmployee, checkDuplicate } from "@/axios/controller/employee-controller";
import {addNewUser} from "@/axios/controller/account-controller";
import { getAllDepartments } from "@/axios/controller/department-controller";
import { getAllPositions } from "@/axios/controller/position-controller";
import {
  isEmailValid,
  containsOnlyNumbers,
  isNullOrEmpty,
} from "@/utils/functions/commonFns.js";
import { useRouter } from "vue-router";

const { emit } = eventBus();
const userData = ref(new Users());
const allowRegister = ref(false);
const router = useRouter();
const serviceError = ref(Array < ServiceError > []);
let departmentDataSource = ref([])
let positionDataSource = ref([])
let isSubmit = ref(false);
/**
 * Đăng nhập
 */
function onLogin() {
  router.push("/login");
}

initData();
async function initData() {
  const resDepartment = await getAllDepartments();
  if(resDepartment && resDepartment.data){
    departmentDataSource.value = resDepartment.data;
  }
  debugger
  const resPosition = await getAllPositions();
  if(resPosition && resPosition.data){
    positionDataSource.value = resPosition.data;
  }
}
/**
 * kiểm tra trường thông tin
 */
async function validateField() {
  // Mã
  if (isNullOrEmpty(userData.value.EmployeeCode)) {
    userData.value.EmployeeCodeErrorMsg = "Mã nhân viên không được để trống";
    allowRegister.value = false;
  } else {
    const res = await checkDuplicate(userData.value.EmployeeCode, '');
    if (res && res.data) {
      userData.value.EmployeeCodeErrorMsg = "Mã nhân viên đã tồn tại";
      allowRegister.value = false;
    }
  }
  if (isNullOrEmpty(userData.value.DepartmentId)){
    allowRegister.value = false;
  }
  if (isNullOrEmpty(userData.value.PositionId)){
    allowRegister.value = false;
  }
  //Họ tên
  if (isNullOrEmpty(userData.value.EmployeeCode)) {
    userData.value.FullNameErrorMsg = "Họ và tên không được để trống";
    allowRegister.value = false;
  } 
  //Mật khẩu
  if (isNullOrEmpty(userData.value.Password)) {
    userData.value.PasswordErrorMsg = "Mật khẩu không được để trống";
    allowRegister.value = false;
  } else if (userData.value.Password.length < 8) {
    userData.value.PasswordErrorMsg = "Chiều dài tối thiểu 8 kí tự";
    allowRegister.value = false;
  }

  //Xác nhận mật khẩu
  if (isNullOrEmpty(userData.value.PrePassword)) {
    userData.value.PrePasswordErrorMsg =
      "Mật khẩu nhập lại không được để trống";
    allowRegister.value = false;
  } else if (
    userData.value.PrePassword &&
    userData.value.Password != userData.value.PrePassword
  ) {
    userData.value.PrePasswordErrorMsg = "Mật khẩu không chính xác";
    allowRegister.value = false;
  }

  //Email
  if (isNullOrEmpty(userData.value.Email)) {
    userData.value.EmailErrorMsg = "Email không được để trống";
    allowRegister.value = false;
  } else if (!isEmailValid(userData.value.Email)) {
    userData.value.EmailErrorMsg = "Email không đúng định dạng";
    allowRegister.value = false;
  }

  //Số điện thoại
  if (isNullOrEmpty(userData.value.PhoneNumber)) {
    userData.value.PhoneNumberErrorMsg = "Số điện thoại không được để trống";
    allowRegister.value = false;
  } else if (!containsOnlyNumbers(userData.value.PhoneNumber)) {
    userData.value.PhoneNumberErrorMsg = "Số điện thoại trùng";
    allowRegister.value = false;
  }
}

/**
 * Xử lý trước khi đăng ký
 */
async function onBeforeRegister() {
  allowRegister.value = true;
  await validateField();
  serviceError.value = [];
}

function getSelectedOptionDepartment(data){
  userData.value.DepartmentName = departmentDataSource.value.filter(x => x.DepartmentId == data.value).map(y => y.DepartmentName)[0] || '';
  userData.value.MISACode = departmentDataSource.value.filter(x => x.DepartmentId == data.value).map(y => y.MISACode)[0] || '';
}
function getSelectedOptionPosition(data){
  userData.value.PositionName = positionDataSource.value.filter(x => x.PositionId == data.value).map(y => y.PositionName)[0] || '';
}

/**
 * Đăng ký
 */
async function onRegister() {
  await onBeforeRegister();
  isSubmit.value = true;
  if (!allowRegister.value) {
    return;
  }
  try {
    const res = await addNewEmployee(userData.value);
    if (res && res.status && res.status == responseStatus.InsertSuccess) {
      emit(
        "showToastMessage",
        new ToastData(true, ToastType.Success, "Đăng ký thành công")
      );
      onLogin();
    } else {
      console.log(res);
      emit(
        "showToastMessage",
        new ToastData(true, ToastType.Error, "Đăng ký thất bại")
      );
    }
    const re = await addNewUser({
      AccountName: userData.value.EmployeeCode, 
      Password: userData.value.Password,
      Email: userData.value.Email,
      PhoneNumber: userData.value.PhoneNumber
    });
  } catch (error) {
    console.log(error);
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.length
    ) {
      serviceError.value = error.response.data;
    } else {
      emit(
        "showToastMessage",
        new ToastData(true, ToastType.Error, "Đăng ký thất bại")
      );
    }
  }
}
</script>
  <style lang="scss" scoped>
.register-container {
  position: relative;
  width: 100%;
  height: 100vh;
  background: url("@/assets/images/Login-img.jpg") no-repeat;
  background-size: cover;

  .register-content {
    position: absolute;
    width: 500px;
    min-height: 600px;
    background-color: var(--app-color-white);
    border-radius: 8px;
    padding: 48px 48px 40px 48px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.12);

    .login-header {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 36px;
      .app-logo {
        background: url("@/assets/images/ICON1.svg") no-repeat -1232px -1015px;
        width: 44px;
        height: 45px;
      }
    }

    .error-area {
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      border: 1px solid var(--app-color-danger);
      border-radius: 4px;
      padding: 8px 12px;
      background-color: #fff9fa;
      .error-area-text {
        margin-top: 2px;
        margin-left: 8px;
        font-size: 12px;
        color: var(--app-color-danger);
      }
    }

    .register-input {
      margin-bottom: 12px;
    }
  }
  .border-error{
    border: 1px solid var(--app-color-danger);
  }
}
</style>