<template lang="">
    <div class="add-button pointer" v-if="type == ButtonType.AddButton">
      <div class="left-button d-flex align-items-center" @click="onClick($event)">
        <div class="white-add-icon ml-px-16 mr-px-8"></div>
        <div>{{ text }}</div>
      </div>
      <div
        class="right-button flex-1 d-flex center-center"
        id="moreFns"
        @click="togglePopover"
      >
        <div class="white-arrow-down-icon"></div>
      </div>
      <MPopover
        :position="position"
        :width="184"
        :target="'moreFns'"
        :isVisible="isVSB"
        @onHidden="
          () => {
            isVSB = false;
          }
        "
      >
        <template v-slot:content>
          <div class="more-funtion-item" @click="selectItem">
            <div class="project-icon mr-px-12"></div>
            <div>{{ t("AddNewProject") }}</div>
          </div>
        </template>
      </MPopover>
    </div>
  
    <div v-else>
      <DXButton
        class="btn"
        :class="buttonClass"
        :text="text"
        :width="width"
        :height="height"
        :type="type"
        @click="onClick($event)"
      ></DXButton>
    </div>
  </template>
  <script setup>
import DXButton from "devextreme-vue/button";
import { ButtonType } from "@/commons/contants/button-type";
import MPopover from "@/components/base/MPopover.vue";
import { onBeforeMount } from "vue";
import { ref } from "vue";

const position = {
  at: "top",
  my: "right bottom",
  offset: "22 0",
};

const props = defineProps({
  text: {
    type: String,
  },
  width: {
    type: Number,
  },
  height: {
    type: Number,
  },
  mode: {
    type: String,
  },
  type: {
    type: String,
    default: "normal",
  },
});
//hiển thị popover để xem thêm chức năng
const isVSB = ref(false);
const buttonClass = ref("");
const emit = defineEmits();

onBeforeMount(() => {
  if (props.type == ButtonType.PriButton) {
    buttonClass.value = "primary-button";
  } else if (props.type == ButtonType.SubButton) {
    buttonClass.value = "sub-button";
  } else {
    buttonClass.value = "primary";
  }
});

/**
 * Đóng mở popover
 */
function togglePopover() {
  isVSB.value = !isVSB.value;
}

/**
 * Click nút
 * @param {*} event
 */
function onClick(event) {
  if (event) {
    emit("onClick");
  }
}

/**
 * Chọn Item trong popover
 */
function selectItem() {
  emit("itemSelected");
  isVSB.value = false;
}
</script>
  <style lang="scss" scoped>
.btn {
  min-width: 80px;
  font-size: 16px;
}
.primary {
  background-color: var(--app-color-primary);
  color: var(--app-color-white);
}

.primary-button {
  background-color: var(--app-button-primary);
  color: var(--app-color-white);
  border-radius: 8px;
}

.sub-button {
  color: var(--app-button-primary);
  background-color: var(--app-color-white);
  border-radius: 8px;
}

.sub-button:hover {
  border-color: var(--app-button-primary);
}

.sub-button:active {
  background-color: #f2f2f2;
}

.primary-button:hover,
.primary:hover {
  background-color: var(--app-color-primary-hover);
}

.primary-button:active,
.primary:active {
  background-color: var(--app-color-primary-active);
}

.more-funtion-item {
  cursor: pointer;
  height: 40px;
  padding: 0 12px;
  color: var(--app-color-black);
  display: flex;
  align-items: center;
}

.more-funtion-item:hover {
  background-color: var(--app-items-hover);
}

.more-funtion-item:active {
  background-color: var(--app-items-active);
}

.add-button {
  border: 1px solid var(--app-color-primary);
  width: 178.48px;
  height: 32px;
  border-radius: 24px !important;
  background: var(--app-color-primary);
  display: flex;
  align-items: center;

  .left-button {
    display: flex;
    align-items: center;
    width: 144px;
    height: 32px;
    border-right: 1px solid var(--app-color-white);
    border-radius: 24px 0 0 24px !important;
    color: var(--app-color-white);
    font-size: 13px;
    font-weight: 600;
  }

  .right-button {
    border-radius: 0 24px 24px 0;
    height: 32px;
  }

  .right-button:hover,
  .left-button:hover {
    background-color: var(--app-color-primary-hover);
  }

  .right-button:active,
  .left-button:active {
    background-color: var(--app-color-primary-active);
  }
}
</style>
  <style lang="scss">
.dx-popup-content {
  padding: 4px 0 !important;
}
</style>
  