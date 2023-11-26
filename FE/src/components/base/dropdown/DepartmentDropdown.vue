<template>
    <DxDropDownBox
        v-model:value="params.MISACode"
        :show-clear-button="true"
        :data-source="treeDataSource"
        value-expr="MISACode"
        display-expr="DepartmentName"
        :placeholder="$t('placeholderInput.allDepartment')"
        :width="318"
    >
        <template #content="{ data }">
        <DxTreeView
            :ref="treeViewRefName"
            :data-source="treeDataSource"
            :select-by-click="true"
            :select-nodes-recursive="false"
            expandedExpr="Expanded"
            data-structure="plain"
            key-expr="MISACode"
            parent-id-expr="ParentId"
            selection-mode="multiple"
            display-expr="DepartmentName"
            @item-selection-changed="changeDepartment($event)"
        />
        <div style="display: none;">{{ data }}</div>
        </template>
    </DxDropDownBox>
  </template>
  
  <script>
import DxTreeView from 'devextreme-vue/tree-view';
import DxDropDownBox from 'devextreme-vue/drop-down-box';
import {placeholderInput} from '@/js/resource.js';
import {
  getAllDepartments
} from "@/axios/controller/department-controller.js";

  export default {
    components:{
        DxDropDownBox,DxTreeView
    },
    props:{
        //params filter trang
        paramsData: {}
    },
    created() {
        this.getDepartmentData();
    },
    data() {
        return {
            treeViewRefName: 'tree-view',
            isTreeBoxOpened: false,
            placeholderInput:placeholderInput,
            treeDataSource:[],
            params:this.paramsData
        }
    },
    methods: {
        /**
         * Hàm call api lấy toàn bộ danh sách đơn vị
         */
        getDepartmentData: async function () {
        try {
            const res = await getAllDepartments();
            if(res != null){
            this.treeDataSource = res.data;
            //Loại bỏ trường rỗng trong object
            for(let item in this.treeDataSource){
                for (let prop in this.treeDataSource[item]) {
                        if ([null, undefined, "", {}].includes(this.treeDataSource[item][prop])) {
                        delete this.treeDataSource[item][prop];
                        }
                }
            }
            }
        } catch (error) {
            console.log(error);
        }
        },

        /**
         * Lưu giá trị id phòng ban vào params khi chọn item
         * @param {*} e 
         */
         changeDepartment(e) {
            this.params.MISACode = e.itemData.MISACode;
            this.$emit("changeDepartment",this.params.MISACode);
        },

        /**
         * Đóng dropdown khi chọn xong item
         */
        onTreeItemClick() {
            this.isTreeBoxOpened = true;
        },
    },
  }
  </script>
  
  <style>
  
  </style>