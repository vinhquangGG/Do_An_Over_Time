<template>
  <div class="table__layer">
      <div class="selection-table__content">
          <div class="selection-table__header">
            <div class="selection-table__header--title">{{ $t('contentTitle.selectionTable') }}</div>
            <div class="icon">
              <div class="selection-table__header--icon" id="close" @click="closeTable"></div>
              <DxTooltip
                :hide-on-outside-click="false"
                target="#close"
                show-event="mouseenter"
                hide-event="mouseleave"
            >
                {{ $t('titleIcon.close') }}
            </DxTooltip>
            </div>
          </div>
          <div class="selection-table__body">
              <div class="selection-table__body--filter">
                <search-input
                :widthValue="240"
                @changeKeyWord="changeKeyWord"
                >
                </search-input>
                
                <department-dropdown
                  :paramsData="params"
                  @changeDepartment="changeDepartment"
                >
                </department-dropdown>

                <div v-if="selectedRecord.length" style="padding-left: 16px;">{{ $t('textButton.selected') }} <span style="font-weight: 600;">{{ selectedRecord.length }}</span></div>
                <span v-if="selectedRecord.length" style="cursor: pointer; color: red; margin:0 24px;" @click="uncheckedSelectRows">{{ $t('textButton.unchecked') }}</span>
              </div>
              <div class="selection-table__body--content">
                <m-table
                  :dataSource="employeeDataSource"
                  :dataTitle="employeeSelectionTableTitleClone"
                  :isUncheckedSelected="isUncheckedSelected"
                  @addSelectedRecord="addSelectedRecord"
                  @removeSelectedRecord="removeSelectedRecord"
                ></m-table>
                <div class="selection-table__body--paging">
                  <m-paging 
                  :totalRecord="data.TotalRecord"
                  :beginRecord="data.Begin"
                  :endRecord="data.End"
                  :paramsWatched="params"
                  @changePageSize="changePageSize"
                  @changeOffSet="changeOffSet"
                  class="selection-table__paging"
                  ></m-paging>
                </div>
              </div>
          </div>
          <div class="selection-table__footer">
            <DxButton
              class="m-table-sub-button mgr_8"
              :text="$t('textButton.cancel')"
              type="normal"
              @click="closeTable"
            />
            
            <DxButton
              :style="selectedRecord.length>0?'':'opacity:0.4; cursor:default'"
              class="m-table-button"
              :text="$t('textButton.select')"
              type="normal"
              @click="selectEmployee"
            />
          </div>
        </div>
  </div>  
</template>

<script>
import {contentTitle,placeholderInput,employeeSelectionTableTitle,textButton,titleIcon} from '../js/resource.js'
import DxButton from "devextreme-vue/button";
import { valueDefault } from "../js/enum.js";
import { DxTooltip } from 'devextreme-vue/tooltip';
import { Resource } from '@/js/language';


import {
  getEmployeeFilter
} from "@/axios/controller/employee-controller.js"
import DepartmentDropdown from '@/components/base/dropdown/DepartmentDropdown.vue';

export default {
  components:{
    DxButton,
    DepartmentDropdown,
    DxTooltip
  },
  created() {
    this.employeeSelectionTableTitleClone.splice(4,1);
    console.log(this.employeeSelectionTableTitleClone);
  },
  props:{
    //Danh sách các nhân viên đã chọn
    listEmployee:[]
  },
  watch:{
        //params thay đổi thì load lại dữ liệu
        params: {
            handler(){
              this.getEmployeeData();
            },
            immediate: true,
            deep: true,
        },
        '$i18n.locale': {
        handler() {
           if(this.$i18n.locale == "vi"){
            this.employeeSelectionTableTitleClone = JSON.parse(JSON.stringify(Resource.messages.vi.employeeSelectionTableTitle))
           }else{
            this.employeeSelectionTableTitleClone = JSON.parse(JSON.stringify(Resource.messages.eng.employeeSelectionTableTitle))
           }
        },
        deep: true,
        immediate: true
        }
    },
  data() {
    return {
      contentTitle:contentTitle,
      placeholderInput:placeholderInput,
      employeeSelectionTableTitle: Resource.messages.eng.employeeSelectionTableTitle,
      titleIcon:titleIcon,
      textButton:textButton,
      employeeDataSource:[],
      treeViewRefName: 'tree-view',
      isTreeBoxOpened: false,
      treeBoxValue: null,
      employeeSelectionTableTitleClone: JSON.parse(JSON.stringify(Resource.messages.vi.employeeSelectionTableTitle)),
      params:{
        keyWord:"",
        MISACode:"",
        pageSize:50,
        offSet:0
      },
      data:{},
      dataSource:[],
      selectedRecord:[],
      isUncheckedSelected: false
    }
  },
  methods: {
    /**
     * Emit lên EmployeeDetail đóng table
     */
     closeTable(){
      this.$emit("closeTable");
    },

    /**
     * Lưu giá trị id phòng ban vào params khi chọn item
     * @param {*} e 
     */
     changeDepartment(data) {
      this.params.MISACode = data;
      this.params.offSet = valueDefault.offset;
    },

    

    /**
     * Lấy thông tin nhân viên theo filter
     */
    getEmployeeData: async function(){
      try {
        this.$emit("showLoadingLayer")
        const res = await getEmployeeFilter(this.params);
        if (res.status == 200) {
          this.employeeDataSource = [];
          let removeRecord = 0;
          this.data = res.data
          this.dataSource = this.data.Data;
          this.dataSource.forEach( element =>{
            if(this.listEmployee.findIndex(e => e.EmployeeId === element.EmployeeId) === -1){
              this.employeeDataSource.push(element);
            }else{
              removeRecord++;
            }
          })
          // console.log(this.employeeDataSource.length);
          // console.log(this.data.TotalRecord);
          this.data.TotalRecord -= removeRecord;
          this.$emit("hideLoadingLayer")
        }
      } catch (error) {
        console.log(error);
        this.showLoading = false;
        this.$emit("hideLoadingLayer")
      }
    },

    /**
     * chọn pageSize thay đổi params
     */
     changePageSize(data){
      this.params.pageSize = data;
      this.params.offSet = valueDefault.offset;
    },

    /**
     * chuyển trang thay đổi params
     * @param {*} offset 
     */
    changeOffSet(offset){
      console.log(offset);
      this.params.offSet = offset;
    },

    /**
     * tìm kiếm thay đổi params
     */
     changeKeyWord(data){
      this.params.keyWord = data;
      this.params.offSet = valueDefault.offset;
     },

      /**
     * thêm id vào danh sách các bản ghi được chọn
     * @param {*} listIDs 
     */
    addSelectedRecord(listIDs){
      listIDs.forEach(element => {
        if(!this.selectedRecord.includes(element)){
          this.selectedRecord.push(element);
        }
      });
    },

    /**
     * xoá id trong danh sách các bản ghi được chọn
     * @param {*} listIDs 
     */
    removeSelectedRecord(listIDs){
      listIDs.forEach(element => {
          let index = this.selectedRecord.findIndex(ele => ele === element);
          if(index > -1){
            this.selectedRecord.splice(index,1);
          }
      });
    },

    /**
     * Bỏ chọn các bản ghi đang select
     */
    uncheckedSelectRows(){
      //Đổi cờ theo dõi ấn nút bỏ chọn để bắt sự kiện trong table
      this.isUncheckedSelected = !this.isUncheckedSelected
    },

    /**
     * chọn các nhân viên đã tick
     */
    selectEmployee(){
      if(this.selectedRecord.length>0){
        this.$emit("selectedEmployee",this.selectedRecord);
        this.$emit("closeTable");
      }
    }
  },
}
</script>

<style>
@import url(../css/views/employee-selection-table.css);
</style>