<template>
  <MPopup
    :width="900"
    :title="'Sửa thông tin'"
    :isVisible="isVisible"
    @onHidden="onHidden"
  >
    <template #content>
      <div class="pd-px-24">
        <MTextbox
          class="register-input"
          :height="48"
          :place-holder="'Họ và tên'"
          :fieldName="userData.FullName"
          :value="userData.FullName"
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
          :value="userData.Email"
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
          :value="userData.PhoneNumber"
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
        <DxSelectBox
          class="detail__dropdown pl-px-12 department register-input"
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
        <div
          class="mt-px-4 error-color error-font"
          v-if="!userData.DepartmentId && isSubmit"
        >
          Công ty không được để trống
        </div>
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
        <div
          class="mt-px-4 error-color error-font"
          v-if="!userData.PositionId && isSubmit"
        >
          Vị trí công việc không được để trống
        </div>
        <div class="d-flex justify-content-end">
          <MButton
            class="mt-px-24 pr-px-8 color-base"
            text="Hủy"
            :width="120"
            :height="48"
            @onClick="isVisible = false"
          ></MButton>
          <MButton
            class="mt-px-24 color-base"
            text="Lưu"
            :width="120"
            :height="48"
            @onClick="onSave"
          ></MButton>
        </div>
      </div>
    </template>
  </MPopup>
</template>
<script setup>
import MPopup from "@/components/base/MPopup.vue";
import MTextbox from "@/components/base/MTextbox.vue";
import MButton from "@/components/base/MButton.vue";
import { DxSelectBox, DxValidator, DxRequiredRule } from "devextreme-vue";
import { ref } from "vue";
import { putEmployee } from "@/axios/controller/employee-controller";
import { getAllDepartments } from "@/axios/controller/department-controller";
import { getAllPositions } from "@/axios/controller/position-controller";

const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['update:isVisible'])
let departmentDataSource = ref([]);
let positionDataSource = ref([]);
initData();
async function initData() {
  const resDepartment = await getAllDepartments();
  if (resDepartment && resDepartment.data) {
    departmentDataSource.value = resDepartment.data;
  }
  const resPosition = await getAllPositions();
  if (resPosition && resPosition.data) {
    positionDataSource.value = resPosition.data;
  }
}
let userData = ref(JSON.parse(localStorage.getItem("UserInfo")));

async function onSave() {
  const res = await putEmployee(userData.value.EmployeeId, userData.value);
  if (res.data == 1) {
  }
}
function onHidden() {
  emit('update:isVisible', false)
}
</script>
<style scoped>
.register-input {
  margin-top: 12px;
}
.color-base{
  background-color: #fff !important;
}
</style>