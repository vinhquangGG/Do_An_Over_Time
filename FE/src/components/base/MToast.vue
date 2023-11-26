<template lang="">
    <DxToast
      :visible="toastData.IsVisible"
      :message="toastData.Message"
      :type="toastData.Type"
      :displayTime="2000"
      :position="{ at: 'bottom right', my: 'bottom right', offset: '-20 -20' }"
      :width="'auto'"
    />
  </template>
  <script setup>
  import { DxToast } from "devextreme-vue/toast";
  import ToastData from "@/commons/models/ToastData";
  import eventBus from "@/utils/event-bus/event-bus.js";
  import { ref, onMounted, watch } from "vue";
  
  const { bus } = eventBus();
  const toastData = ref(new ToastData());
  
  // Bắt sự kiện hiển thị toast
  watch(
    () => bus.value.get("showToastMessage"),
    (val) => {
      if (val && val.length) {
        toastData.value = val[0];
      }
    }
  );
  </script>
  <style lang=""></style>
  