<template lang="">
    <div>
      <DxPopover
        :width="width"
        :height="height ? height : 'auto'"
        :target="`#${target}`"
        :visible="isVisible"
        :position="position"
        @hidden="onHidden"
      >
        <slot name="header"></slot>
        <slot name="content"></slot>
        <slot name="footer"></slot>
      </DxPopover>
    </div>
  </template>
<script setup>
import { DxPopover } from "devextreme-vue/popover";
const props = defineProps({
  width: {
    type: Number,
  },
  height: {
    type: Number,
  },
  target: {
    type: String,
  },
  position: {
    type: Object,
    default: "bottom",
  },
  isVisible: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits();

/**
 * Ẩn popover
 */
function onHidden() {
  emit("onHidden");
}
</script>
<style lang="scss"></style>
  