<template>
  <m-header></m-header>
  <m-content></m-content>
</template>
  
  <script>
import MHeader from "@/components/layout/TheHeader.vue";
import MContent from "@/components/layout/TheContent.vue";
export default {
  name: "App",
  components: {
    MHeader,
    MContent,
  },
};
</script>
  
  <style>
@import url(@/css/main.css);
</style>
  