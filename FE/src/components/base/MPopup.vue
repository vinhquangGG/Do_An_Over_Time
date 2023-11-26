<template lang="">
    <div>
      <DxPopup
        :visible="isVisible"
        :width="width"
        :height="height"
        :title="title"
        :min-width="minWidth"
        :min-height="minHeight"
        @hidden="onHidden"
      >
        <!-- <slot name="header"></slot> -->
        <slot name="content"></slot>
        <slot name="footer"></slot>
      </DxPopup>
    </div>
  </template>
  <script setup>
import { DxPopup } from "devextreme-vue/popup";

const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false,
  },
  width: {
    type: Number,
  },
  height: {
    type: Number,
  },
  title: {
    type: String,
  },
  minWidth: {
    type: Number,
  },
  minHeight: {
    type: Number,
  },
});

const emit = defineEmits();

/**
 * Đóng popup
 */
function onHidden() {
  emit("onHidden");
}
</script>
  <style scoped lang="scss">
.dx-icon-close {
  background: url("../../assets/images/ICON.svg") no-repeat -408px -841px;
  width: 15px !important;
  height: 14px !important;
  background-size: unset !important;
}

.dx-icon-close::before {
  content: "" !important;
}

.dx-popup-title {
  border: none;
}

.dx-popup-title.dx-toolbar {
  padding: 16px 24px;
}

.dx-popup-title.dx-toolbar .dx-toolbar-label {
  font-weight: 700;
  font-size: 24px;
  color: #1f1f1f;
}

.dx-overlay-shader {
  z-index: 100 !important;
  background-color: rgba(0, 0, 0, 0.45);
}
</style>
  