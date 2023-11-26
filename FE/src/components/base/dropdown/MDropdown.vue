<template>
  <DxSelectBox
    id="status__combobox--id"
    class="status__combobox"
    :data-source="dataSource"
    valueExpr="value"
    displayExpr="name"
    :value="inputValue"
    :width="widthValue"
    @selection-changed="changeSelection($event)"
    >
    </DxSelectBox>
</template>

<script>
import DxSelectBox from "devextreme-vue/select-box";

export default {
    components: {
        DxSelectBox,
    },
    props:{
        //độ rộng dropdown
        widthValue:Number,
        //Toàn bộ dữ liệu
        dataSource:Object,
        //Dữ liệu hiển thị
        inputValue:String
    },
    methods: {
            /**
         * Chọn trạng thái cập nhật vào params
         * @param {*} e 
         */
         changeSelection(e){
            this.$emit("changeSelection",e);
        },
    },
}
</script>

<style>
@import url(@/css/main.css);
</style>