<template>
    <div class="login-container">
      <div class="login-content">
        <div class="login-header">
          <div class="app-logo"></div>
          <div class="title pl-px-8">Đăng Ký Làm Thêm</div>
        </div>
        <div class="error-area" v-if="showErrorArea">
          <div class="icon-false"></div>
          <div class="error-area-text">
            Không có tài khoản
          </div>
        </div>
        <MTextbox
          class="mb-px-12"
          :height="48"
          :placeHolder="'Tên đăng nhập'"
          :fieldName="EmployeeCode"
          :errorMessage="acc.UsernameErrorMsg"
          @onFocusIn="
            () => {
              acc.UsernameErrorMsg = '';
            }
          "
          @onValueChanged="
            (event) => {
              acc.EmployeeCode = event;
            }
          "
        ></MTextbox>
  
        <MTextbox
          :height="48"
          :placeHolder="'Nhập mật khẩu'"
          :fieldName="Password"
          :errorMessage="acc.PasswordErrorMsg"
          @onFocusIn="
            () => {
              acc.PasswordErrorMsg = '';
            }
          "
          mode="password"
          @onValueChanged="
            (event) => {
              acc.Password = event;
            }
          "
        ></MTextbox>
  
        <div class="d-flex align-items-center mt-px-16">
          <div
            class="primary-color pointer hover-underline ml-px-4"
            @click="register"
          >
            Đăng ký
          </div>
        </div>
  
        <MButton
          class="mt-px-24"
          text="Đăng nhập"
          :width="404"
          :height="48"
          @onClick="onClickLogin"
        ></MButton>
      </div>
    </div>
  </template>
  
  <script setup>
import { onBeforeMount, onBeforeUnmount, ref, watch } from "vue";
import MTextbox from "@/components/base/MTextbox.vue";
import {DxButton} from "devextreme-vue";
import MButton from "@/components/base/MButton.vue";
import eventBus from "@/utils/event-bus/event-bus.js";
import { isNullOrEmpty } from "@/utils/functions/commonFns.js";
import { responseStatus } from "@/commons/enums/api-response-status.js";
import { checkDuplicate } from "@/axios/controller/employee-controller";
import ToastData from "@/commons/models/ToastData";
import { ToastType } from "@/commons/contants/toast-type.js";
// import { onLogin } from "@/apis/user-service/user-service.js";
import Account from "@/commons/models/Account.js";
import {useRouter} from "vue-router";
import { useToast } from 'vue-toast-notification';
const { emit } = eventBus();
const router = useRouter();
var acc = ref(new Account());
const allowLogin = ref(false);
const showErrorArea = ref(false);
const toast = useToast();
/**
 * kiểm tra trường thông tin
 */
function validateField() {
  if (isNullOrEmpty(acc.value.EmployeeCode)) {
    acc.value.UsernameErrorMsg = "Không được để trống";
    allowLogin.value = false;
  } else {
    acc.value.UsernameErrorMsg = "";
  }
  if (isNullOrEmpty(acc.value.Password)) {
    acc.value.PasswordErrorMsg = "Không được để trống";
    allowLogin.value = false;
  } else {
    acc.value.PasswordErrorMsg = "";
  }
}

/**
 * Đăng ký
 */
function register() {
  router.push("/register");
}

/**
 * Xử lý trước khi đăng nhập
 */
function onBeforeLogin() {
  allowLogin.value = true;
  validateField();
  showErrorArea.value = false;
}

/**
 * Đăng nhập
 */
async function onClickLogin() {
  await onBeforeLogin();
  if (!allowLogin.value) {
    return;
  }
  try {
    debugger
    const res = await checkDuplicate(acc.value.EmployeeCode, acc.value.Password);
    if (res && res.status && res.data) {
      localStorage.setItem('UserInfo', JSON.stringify(res.data));
      // emit(
      //   "showToastMessage",
      //   new ToastData(true, ToastType.Success, "Đăng nhập thành công")
      // );
      toast.success('Đăng nhập thành công');
      router.push("/employee-list");
    } else {
      showErrorArea.value = true;
    }
  } catch (error) {
    showErrorArea.value = true;
  }
}
</script>
  <style lang="scss" scoped>
.login-container {
  position: relative;
  width: 100%;
  height: 100vh;
  background: url("@/assets/images/Login-img.jpg") no-repeat;
  background-size: cover;
  .login-content {
    position: absolute;
    width: 500px;
    min-height: 400px;
    background-color: var(--app-color-white);
    border-radius: 8px;
    padding: 48px 48px 40px 48px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.12);
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
  }
}
</style>
  
<style lang="scss">
.login-container {
  .dx-button-text {
    font-weight: 700;
  }
}
</style>
  