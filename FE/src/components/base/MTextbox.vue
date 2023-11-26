<template lang="">
    <div :class="errorMessage ? 'error' : ''">
      <DxTextBox
        :class="isForm ? 'base-textbox' : ''"
        ref="textBox"
        :placeholder="placeHolder"
        :width="width"
        :height="height"
        :mode="mode"
        class='pl-px-12'
        v-model="textValue"
        @valueChanged="onValueChange($event)"
        @focusIn="onFocusIn($event)"
        @enterKey="onEnterKey($event)"
        @focusOut="onFocusOut($event)"
        @contentReady="onContentReady($event)"
      >
      </DxTextBox>
      <div class="mt-px-4 error-color error-font" v-if="errorMessage">
        {{ errorMessage }}
      </div>
    </div>
  </template>
  <script setup>
import DxTextBox from "devextreme-vue/text-box";
import { ref } from "vue";
import { keyCode } from "@/commons/enums/key-code.js";
import {
  isSpecialCharacter,
  isNonSpecialCharacter,
} from "@/utils/functions/commonFns.js";

const props = defineProps({
  placeHolder: {
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
  fieldName: {
    type: String,
  },
  errorMessage: {
    type: String,
  },
  isForm: {
    type: Boolean,
    default: false,
  },
  value: String,
  focusWhenReady: {
    type: Boolean,
    default: false,
  },
  newInput: Boolean,
});

const emit = defineEmits();
const textBox = ref();
const textValue = !props.newInput ? ref(props.value) : ref("");

/**
 * Khởi tạo
 */
function onContentReady(event) {
  if (event && props.focusWhenReady) {
    textBox.value.instance.focus();
  }
}

/**
 * Nhấn enter
 */
function onEnterKey(event) {
  if (event) {
    emit("onEnterKey", textValue.value);
  }
}

/**
 * Thay đổi giá trị ô input
 * @param {*} event
 */
function onValueChange(event) {
  if (event) {
    emit("onValueChanged", event.value);
  }
}

/**
 * focus in
 * @param {*} event
 */
function onFocusIn(event) {
  if (event) {
    emit("onFocusIn");
  }
}

function onFocusOut(event) {
  if (event) {
    emit("onFocusOut", textValue.value);
  }
}
</script>
  <style lang="scss" scoped>
.base-textbox {
  border-radius: 8px;
}
</style>
  <style lang="scss">
.error {
  .dx-texteditor.dx-editor-outlined {
    border: 1px solid red;
  }
}
</style>