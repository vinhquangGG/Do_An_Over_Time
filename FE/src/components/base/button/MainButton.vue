<template>
    <button class="dialogButton" :title="title">{{ text }}</button>
  </template>
  
  <script>
  export default {
      name: "DialogButton",
      props:["text","title"]
  }
  </script>
  
  <style>
      @import url(@/css/main.css);
      .dialogButton:focus{
        background-color: #ec5504;
      }
  </style>