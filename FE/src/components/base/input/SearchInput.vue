<template>
  <DxTextBox
        class="content__search-input mgr_8"
        :placeholder="$t('placeholderInput.searchInput')"
        :width="widthValue"
        :height="36"
        @value-changed="changeKeyWord($event)"
    >
        <i class="dx-icon-search"></i>
    </DxTextBox>
</template>

<script>
import {placeholderInput} from '../../../js/resource.js';
import DxTextBox from 'devextreme-vue/text-box';

export default {
    props:{
        //Độ rộng textbox
        widthValue:Number
    },
    components:{
        DxTextBox
    },
    data() {
        return {
            placeholderInput:placeholderInput
        }
    },
    methods: {
        /**
         * chọn pageSize emit thay đổi params
         */
         changeKeyWord(data){
            this.$emit("changeKeyWord",data.value);
        },
    },
}
</script>

<style>
@import url(@/css/views/employee-selection-table.css);
</style>