<template>
  <m-loading v-if="isShowLoading"></m-loading>
  <div class="container">
    <div class="content__header">
      <div class="content__header--left">{{ $t('contentTitle.title') }}</div>
      <div class="content__header--right">
        <DxButton type="default" class="content__icon-button">
          <DxButton
            class="content__icon-button--left"
            :width="93"
            icon="add"
            type="success"
            :text="$t('textButton.iconButton')"
            @click="showDetail(formMode.addNew)"
          />
          <DxButton
            class="content__icon-button--right"
            id="back"
            icon="chevrondown"
          />
        </DxButton>
      </div>
    </div>
    <div class="content__body">
      <div class="content__body--function" v-if="!selectedRecord.length">
        <div class="content__function--left">
          <search-input @changeKeyWord="changeKeyWord"> </search-input>
        </div>
        <div class="content__function--right">
          <button class="ms-con-dropdown m-l-16">
            <div class="flex align-center m-r-48">
              <span class="content__status-selection--name">{{
                $t('contentFunctionName.status')
              }}</span>

              <m-dropdown
                :inputValue="statusSelection[0].value"
                :dataSource="statusSelection"
                :widthValue="116"
                @changeSelection="changeStatus"
              >
              </m-dropdown>
            </div>
          </button>

          <div class="content__department-selection mgr_8">
            <department-dropdown
              :paramsData="params"
              @changeDepartment="changeDepartment"
            >
            </department-dropdown>
          </div>

          


          <div class="content__function--icon mgr_8" id="refresh" @click="refreshData">
            <div class="content__refresh-icon"></div>
            <DxTooltip
              :hide-on-outside-click="false"
              target="#refresh"
              show-event="mouseenter"
              hide-event="mouseleave"
            >
              {{ $t('titleIcon.refresh') }}
            </DxTooltip>
          </div>
          <!-- <div class="content__function--icon mgr_8" id="filter">
            <div class="content__filter-icon"></div>
            <DxTooltip
              :hide-on-outside-click="false"
              target="#filter"
              show-event="mouseenter"
              hide-event="mouseleave"
            >
              {{ $t('titleIcon.filter') }}
            </DxTooltip>
          </div> -->
          <div class="content__function--icon mgr_8" id="export" @click="exportFilterData">
            <div class="content__export-icon"></div>
            <DxTooltip
              :hide-on-outside-click="false"
              target="#export"
              show-event="mouseenter"
              hide-event="mouseleave"
            >
              {{ $t('titleIcon.export') }}
            </DxTooltip>
          </div>

          <div class="content__function--icon" id="setting">
            <div class="content__setting-icon"></div>
            <dx-popover
              :width="350"
              target="#setting"
              show-event="click"
              hide-event="clickaway"
              position="top"
              v-model:visible="isSettingVisible"
            >
              <div class="setting-content--header">
                <div class="setting-header__title">
                  <div class="setting-header__title--text">
                    {{ $t('contentTitle.changeRow') }}
                  </div>
                  <div class="close-button" @click="hideSettingPopup"></div>
                </div>
                <!-- <search-input
                  @changeKeyWord="changeColumnKeyWord"
                  :widthValue="284"
                >
                </search-input> -->
              </div>
              <DxScrollView>
                <DxSortable
                  v-model="tableTitleClone"
                  group="tasksGroup"
                  @reorder="onTaskDrop($event)"
                  @add="onTaskDrop($event)"
                >
                  <div
                    v-for="item in tableTitleClone"
                    :key="item.dataField"
                    class="card dx-card dx-theme-text-color dx-theme-background-color hover-change-color"
                  >
                    <div class="setting-item">
                      <div class="setting-item__left">
                        <input type="checkbox" 
                        v-model="item.isDisplay"
                        :value="item.isDisplay"/>
                        <div class="card-subject">{{ item.caption }}</div>
                      </div>
                      <i class="mi-drag"></i>
                    </div>
                  </div>
                </DxSortable>
              </DxScrollView>
              <div class="setting-header__footer">
                <DxButton
                  class="m-sub-button w-90 mgr_8"
                  :text="$t('textButton.default')"
                  type="normal"
                  @click="resetColumn"
                />
                <DxButton
                  class="m-button w-90"
                  :text="$t('textButton.save')"
                  :use-submit-behavior="true"
                  @click="saveColumn"
                  type="normal"
                />
              </div>
            </dx-popover>
            <DxTooltip
              :hide-on-outside-click="false"
              target="#setting"
              show-event="mouseenter"
              hide-event="mouseleave"
            >
              {{ $t('titleIcon.setting') }}
            </DxTooltip>
          </div>
        </div>
      </div>
      
      <div class="content__body--function option" v-if="selectedRecord.length">
        <div class="content__function--left">
          <div>{{ $t('textButton.selected') }} <span style="font-weight: 600;">{{selectedRecord.length }}</span></div>
          <span style="padding-left: 8px; cursor: pointer; color: red; margin:0 24px;" @click="uncheckedSelectRows">{{ $t('textButton.unchecked') }}</span>
          <button class="denine-button" @click="changeMultipleStatus(status.deny)" v-if="showDenyButton && dataEmployee.IsAdmin"><i class="denine-icon"></i>
            <span>{{ $t('textButton.deny') }}</span></button>
          <button class="approve-button" @click="changeMultipleStatus(status.accept)" v-if="showAcceptButton && dataEmployee.IsAdmin"><i
              class="approve-icon"></i><span>{{ $t('textButton.accept') }}</span></button>
          <button @click="exportSelectedData" class="export-button"><i class="export-icon"></i> <span>{{ $t('textButton.export') }}</span></button>
          <button v-if="dataEmployee.IsAdmin" class="delete-all-button" @click="multipleDelete"><i
              class="delete-all-icon"></i><span>{{ $t('textButton.delete') }}</span></button>
          </div>
      </div>

      <div class="table__container">
        <m-table
          :dataSource="overTimeDataSource"
          :dataTitle="tableTitleArange"
          :selectedRowProps="selectedRecord"
          :changePage="params.offSet"
          :isUncheckedSelected="isUncheckedSelected"
          @showLoading="showLoading"
          @hideLoading="hideLoading"
          @showDetail="showDetail"
          @deleteOverTime="deleteOverTime"
          @addSelectedRecord="addSelectedRecord"
          @removeSelectedRecord="removeSelectedRecord"
        ></m-table>
      </div>
      <m-paging
        class="list__paging"
        :totalRecord="data?.TotalRecord"
        :beginRecord="data?.Begin"
        :endRecord="data?.End"
        :paramsWatched="params"
        @changePageSize="changePageSize"
        @changeOffSet="changeOffSet"
      ></m-paging>
    </div>
  </div>
  <employee-detail
    :formMode="mode"
    :idDataProp="selectedEmployeeId"
    @showLoading="showLoading"
    @hideLoading="hideLoading"
    @hideDetail="hideDetail"
    @reloadData="getOverTimeData"
    v-if="showForm"
  ></employee-detail>
</template>

<script>
import {
  dialogText,
  contentTitle,
  textButton,
  placeholderInput,
  contentFunctionName,
  statusSelection,
  titleIcon,
  tableTitle,
} from "@/js/resource";

import { Resource } from '@/js/language';

import _ from "lodash";
import {formMode, status} from '@/js/enum.js'
import DxButton from "devextreme-vue/button";
import { DxTooltip } from 'devextreme-vue/tooltip';
import { DxSortable } from 'devextreme-vue/sortable';
import { DxScrollView } from 'devextreme-vue/scroll-view';
import { DxPopover } from 'devextreme-vue/popover';
import MDropdown from '@/components/base/dropdown/MDropdown.vue';
import { custom } from 'devextreme/ui/dialog';
import notify from "devextreme/ui/notify";

import { 
  getOverTimeFilter, 
  deleteEmoloyeeByID, 
  multipleDelete, 
  changeMultiple, 
  exportFilterData,
  exportSelectedData 
} from "@/axios/controller/overtime-controller.js";
import { valueDefault, toastStatus } from "../js/enum.js";
import MLoading from '@/components/base/MLoading.vue';
import lodash from "lodash";

export default {
  components: {
    DxButton,
    DxTooltip,
    DxSortable,
    DxScrollView,
    DxPopover,
    MDropdown,
    MLoading,
    custom,
    notify
  },
  created() {
    console.log(JSON.parse(localStorage.getItem('UserInfo')));
    this.dataEmployee = JSON.parse(localStorage.getItem('UserInfo'));
    this.params.employeeID = this.dataEmployee.EmployeeId;
    //tạo bản sao title
    this.tableTitleArange = []
    if(this.$i18n.locale == "vi"){
      this.tableTitleClone = JSON.parse(localStorage.getItem('tableTitle'));
      this.tableTitleClone = Resource.messages.vi.tableTitle;
    }
    else{
      this.tableTitleClone = JSON.parse(localStorage.getItem('tableTitleEnglish'));
      this.tableTitleClone = Resource.messages.eng.tableTitle;
    }
    if(this.tableTitleClone){
      this.tableTitleClone.forEach(element =>{
        if(element.isDisplay){
          this.tableTitleArange.push(element);
        }
      })
    }
  },
  watch:{
        //params thay đổi thì load lại dữ liệu
        params: {
            handler(val){
              debugger
              val.employeeID = this.dataEmployee.EmployeeId;
              this.getOverTimeData();
            },
            deep: true,
        },
        //theo dõi đổi ngôn ngữ
        '$i18n.locale': {
        handler() {
          this.showLoading();
          this.tableTitleArange = []
          if(this.$i18n.locale == "vi"){
            this.tableTitleClone = JSON.parse(localStorage.getItem('tableTitle'));
            this.tableTitleClone = Resource.messages.vi.tableTitle;
            this.statusSelection = Resource.messages.vi.statusSelection;
          }
          else{
            this.tableTitleClone = JSON.parse(localStorage.getItem('tableTitleEnglish'));
            this.tableTitleClone = Resource.messages.eng.tableTitle;
            this.statusSelection = Resource.messages.eng.statusSelection;
          }
          if(this.tableTitleClone){
            this.tableTitleClone.forEach(element =>{
              if(element.isDisplay){
                this.tableTitleArange.push(element);
              }
            })
          }
          this.hideLoading();
        },
        deep: true,
        immediate: true
        }
    },
  data() {
    return {
      tableTitleClone:[],
      tableTitleArange:[],
      status:status,
      contentTitle: contentTitle,
      textButton: Resource.messages.eng.textButton,
      isChangePage: false,
      toastStatus:Resource.messages.eng.toastStatus,
      dialogText:Resource.messages.eng.dialogText,
      placeholderInput: placeholderInput,
      contentFunctionName: contentFunctionName,
      statusSelection: Resource.messages.vi.statusSelection,
      titleIcon:titleIcon,
      formMode:formMode,
      showForm: false,
      mode: 1,
      treeDataSource: [],
      treeViewRefName: 'tree-view',
      isTreeBoxOpened: false,
      selectedEmployeeId:"",
      // tableTitle:tableTitle,
      isSettingVisible:false,
      treeBoxValue: null,
      overTimeDataSource:{},
      selectedRecord:[],
      params:{
        keyWord:'',
        status:0,
        MISACode:'',
        pageSize: 50,
        offSet: 0
      },
      isShowLoading:true,
      closeButtonOptions: {
        text: 'Close',
        onClick: () => {
          this.popupVisible = false;
        },
      },
      popupVisible: true,
      showAcceptButton: false,
      showDenyButton: false,
      isUncheckedSelected:false,
      dataEmployee: [],
    };
  },
  methods: {
    /**
     * Đổi vị trí cột
     * author: (5/5/2023)
     * @param {*} e 
     */
    onTaskDrop(e) {
      var temp = this.tableTitleClone[e.fromIndex];
      this.tableTitleClone[e.fromIndex] = this.tableTitleClone[e.toIndex];
      this.tableTitleClone[e.toIndex] = temp;
    },

    /**
     * Lưu lại thay đổi của các cột
     */
    saveColumn(){
      this.tableTitleArange = []
      if(this.tableTitleClone){
        this.tableTitleClone.forEach(element => {
          if(element.isDisplay){
            this.tableTitleArange.push(element)
          }
        })
      }
      if(this.$i18n.locale == "vi"){
        localStorage.setItem('tableTitle', JSON.stringify(this.tableTitleClone));
      }
      else{
        localStorage.setItem('tableTitleEnglish', JSON.stringify(this.tableTitleClone));
      }
      this.isSettingVisible = false
    },
    
    /**
     * Đặt lại mặc định các cột
     */
    resetColumn(){
      this.tableTitleArange = []
      // this.tableTitleClone = lodash.cloneDeep(tableTitle);
      if(this.$i18n.locale == "vi"){
        this.tableTitleClone = Resource.messages.vi.tableTitle;
      }
      else{
        this.tableTitleClone = Resource.messages.eng.tableTitle;
      }
      if(this.tableTitleClone){
        this.tableTitleClone.forEach(element =>{
          if(element.isDisplay){
            this.tableTitleArange.push(element);
          }
        })
      }
      if(this.$i18n.locale == "vi"){
        localStorage.setItem('tableTitle', JSON.stringify(this.tableTitleClone));
      }
      else{
        localStorage.setItem('tableTitleEnglish', JSON.stringify(this.tableTitleClone));
      }
      this.isSettingVisible = false
    },

    /**
     * Xuất khẩu danh sách đơn làm thêm được chọn
     */
    exportSelectedData: async function(){
      try {
        this.showLoading();
        let listIDs = [];
        this.selectedRecord.forEach(element => {
          listIDs.push(element.OverTimeId);
        })
        var header = this.tableTitleArange.map(element => {
            return {
                alignment: element.alignment,
                caption: element.caption,
                dataField: element.dataField,
                isDisplay: element.isDisplay
            };
        });
        const response = await exportSelectedData(listIDs,header); 
        const url = URL.createObjectURL(
          new Blob([response.data],
          {type:"application/vnd.ms-excel"}) 
          
        );
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `Danh sách đơn đăng ký làm thêm_${Date.now()}.xlsx`);
        document.body.appendChild(link);
        link.click();
        this.hideLoading();
      } catch (error) {
        this.hideLoading();
        console.log(error);
      }
      finally{
        this.selectedRecord = [];
      }
    },

    /**
     * Xuất khẩu đơn đăng ký làm thêm theo filter
     */
    exportFilterData: async function(){
      try {
        this.showLoading();
        const params = {
          keyword: this.params.keyWord,
          MISACode: this.params.MISACode,
          status: this.params.status,
          total: this.data.TotalRecord,
        }
        var header = this.tableTitleArange.map(element => {
            return {
                alignment: element.alignment,
                caption: element.caption,
                dataField: element.dataField,
                isDisplay: element.isDisplay
            };
        });
        const response = await exportFilterData(params,header); 
        const url = URL.createObjectURL(
          new Blob([response.data],
          {type:"application/vnd.ms-excel"}) 
          
        );
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `Danh sách đơn đăng ký làm thêm_${Date.now()}.xlsx`);
        document.body.appendChild(link);
        link.click();
        this.hideLoading();
      } catch (error) {
        this.hideLoading();
        console.log(error);
      }
    },
    /**
     * Hiển thị loading layer
     */
    showLoading(){
      this.isShowLoading = true;
    },

    /**
     * Ẩn loading layer
     */
    hideLoading: _.debounce(function (){
      this.isShowLoading = false;
    },50),

    /**
     * Hiển thị form
     */
    showDetail(mode,data){
      this.selectedEmployeeId = data;
      this.mode = mode
      this.showForm = true
    },

    /**
     * Đóng form
     */
     hideDetail(){
      this.showForm = false
      this.mode = formMode.addNew
    },

    /**
     * Ẩn tuỳ chỉnh cột
     */
    hideSettingPopup(){
      this.isSettingVisible = false
    },

    /**
     * Chọn trạng thái cập nhật vào params
     * @param {*} data
     */
    changeStatus(data){
      this.params.status = data.selectedItem.value;
      this.params.offSet = valueDefault.offset;
    },

    /**
     * Chọn số bản ghi trên trang cập nhật params
     * @param {*} data
     */
    changePageSize(data){
      this.params.pageSize = data;
      this.params.offSet = valueDefault.offset;
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
     * chuyển trang thay đổi params
     * @param {*} offset
     */
     changeOffSet(offset){
      this.params.offSet = offset;
      this.isChangePage = true;
    },

    /**
     * đổi keyword cập nhật params
     * @param {*} data
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
      this.showDenyButton = false;
      this.showAcceptButton = false;
      listIDs.forEach(element => {
        let index = this.selectedRecord.findIndex(item => JSON.stringify(item) === JSON.stringify(element));
          if(index == -1){
            this.selectedRecord.push(element);
          }
      });
      for(let i in this.selectedRecord){
        //Hiển thị nút từ chối nếu có phần tử có trạng thái duyệt
        if(this.selectedRecord[i].Status == status.accept){
          this.showDenyButton = true;
        }
        //Hiển thị nút duyệt nếu có phần tử có trạng thái từ chối
        else if(this.selectedRecord[i].Status == status.deny){
          this.showAcceptButton = true;
        }
        //Hiển thị cả 2 nút nếu có phần tử có trạng thái chờ duyệt
        else{
          this.showDenyButton = true;
          this.showAcceptButton = true;
        }
      }
    },

    /**
     * xoá id trong danh sách các bản ghi được chọn
     * @param {*} listIDs 
     */
    removeSelectedRecord(listIDs){
      this.showDenyButton = false;
      this.showAcceptButton = false;
      listIDs.forEach(element => {
          let index = this.selectedRecord.findIndex(item => JSON.stringify(item) === JSON.stringify(element));
          if(index > -1){
            this.selectedRecord.splice(index,1);
          }
      });
      for(let i in this.selectedRecord){
        //Hiển thị nút từ chối nếu có phần tử có trạng thái duyệt
        if(this.selectedRecord[i].Status == status.accept){
          this.showDenyButton = true;
        }
        //Hiển thị nút duyệt nếu có phần tử có trạng thái từ chối
        else if(this.selectedRecord[i].Status == status.deny){
          this.showAcceptButton = true;
        }
        //Hiển thị cả 2 nút nếu có phần tử có trạng thái chờ duyệt
        else{
          this.showDenyButton = true;
          this.showAcceptButton = true;
        }
      }
    },

    /**
     * Làm mới dữ liệu và quay về đầu trang\
     */
    refreshData(){
      this.params.offSet = valueDefault.offset;
      this.getOverTimeData();
    },

    /**
     * Lấy thông tin làm thêm theo filter
     */
     getOverTimeData: async function(){
      try {
        debugger
        this.showLoading();
        const res = await getOverTimeFilter(this.params);
        if (res.status == 200) {
          this.data = res.data
          this.overTimeDataSource = this.data.Data;
          // localStorage.setItem('tableTitle', JSON.stringify(this.tableTitleClone));
          this.hideLoading();
        }
        else{
          console.log("error");
          this.hideLoading();
        }
      } catch (error) {
        console.log(error);
        this.showLoading = false;
        this.hideLoading();
      }
    },

    /**
     * Xoá thông tin làm thêm theo id
     */
    deleteOverTime(id){
      this.$nextTick(function() {
        // tạo dialog
            let myDialog = custom({
                title: dialogText.warningTitlte,
                messageHtml: dialogText.deleteMessage,
                showCloseButton: true,
                buttons: [{
                  className: "cancel-button",
                    text: textButton.cancel,
                    onClick: (e) => {
                        return { buttonText: e.component.option("text") }
                    }
                },
                {
                    text: textButton.delete,
                    type: toastStatus.danger,
                    onClick: (e) => {
                        return { buttonText: e.component.option("text") }
                    }
                },
                ]
            });
            //Hiển thị dialog và bắt các sự kiện
            myDialog.show().then(async (dialogResult) => {
              if (dialogResult.buttonText === textButton.delete) {
                this.showLoading();
                try {
                  const res = await deleteEmoloyeeByID(id);
                  this.getOverTimeData();
                  if (res.status === 200) {
                    this.notifyMsg(toastStatus.success, dialogText.deleteSuccess);
                  } else {
                    console.log(res);
                    this.notifyMsg(toastStatus.error, dialogText.deleteFail);
                  }
                } catch (error) {
                  console.log(error);
                  this.notifyMsg(toastStatus.error, dialogText.deleteFail);
                } finally {
                  this.hideLoading();
                }
              } else {
                return;
              }
            });
        })
    },

    /**
     * Xoá các bản ghi được chọn
     */
    multipleDelete(){
      this.$nextTick(function() {
        //Tạo dialog
            let myDialog = custom({
                title: dialogText.warningTitlte,
                messageHtml: this.selectedRecord.length>1? dialogText.multipleDeleteMessage: dialogText.deleteMessage,
                showCloseButton: true,
                buttons: [{
                  className: "cancel-button",
                    text: textButton.cancel,
                    onClick: (e) => {
                        return { buttonText: e.component.option("text") }
                    }
                },
                {
                    text: textButton.delete,
                    type: toastStatus.danger,
                    onClick: (e) => {
                        return { buttonText: e.component.option("text") }
                    }
                },
                ]
            });
            //Hiển thị dialog và bắt các sự kiện
            myDialog.show().then(async (dialogResult) => {
              if (dialogResult.buttonText === textButton.delete) {
                this.showLoading();
                try {
                  // debugger
                 var listIDs = this.selectedRecord.map(element => element.OverTimeId);
                  const res = await multipleDelete(listIDs);
                  this.getOverTimeData();
                  if (res.status === 200) {
                    this.selectedRecord = []
                    this.notifyMsg(toastStatus.success, dialogText.deleteSuccess);
                  } else {
                    console.log(res);
                    this.notifyMsg(toastStatus.error, dialogText.deleteFail);
                  }
                } catch (error) {
                  console.log(error);
                  this.notifyMsg(toastStatus.error, dialogText.deleteFail);
                } finally {
                  this.hideLoading();
                }
              } else {
                return;
              }
            });
        })
    },

    /**
     * Chuyển trạng thái nhiều bản ghi
     * @param {*} status 
     */
    changeMultipleStatus(status){
      this.$nextTick(function() {
        //Tạo dialog
            let myDialog = custom({
                title: dialogText.warningTitlte,
                messageHtml: status == this.status.accept? dialogText.acceptStatusMessage: dialogText.denyStatusMessage,
                showCloseButton: true,
                buttons: [{
                  className: "cancel-button",
                    text: textButton.cancel,
                    onClick: (e) => {
                        return { buttonText: e.component.option("text") }
                    }
                },
                {
                    text: status == this.status.accept? textButton.accept: textButton.deny,
                    type: status == this.status.accept? toastStatus.success: toastStatus.danger,
                    onClick: (e) => {
                        return { buttonText: e.component.option("text") }
                    }
                },
                ]
            });
            //Hiển thị dialog và bắt các sự kiện
            myDialog.show().then(async (dialogResult) => {
              if (dialogResult.buttonText === textButton.accept || dialogResult.buttonText === textButton.deny) {
                this.showLoading();
                try {
                  console.log(status);
                var IDs=[]
                this.selectedRecord.forEach(element =>{
                  if(element.Status != status){
                    IDs.push(element);
                  }
                })
                var listIDs = IDs.map(element => element.OverTimeId);
                  const res = await changeMultiple(listIDs,status);
                  this.getOverTimeData();
                  //toast message TH duyệt
                  if(status == this.status.accept){
                    if (res.status === 200) {     
                      this.selectedRecord = []             
                      this.notifyMsg(toastStatus.success, dialogText.acceptSuccess);
                    } else {
                      console.log(res);
                      this.notifyMsg(toastStatus.error, dialogText.acceptFail);
                    }
                  }
                  //toast message TH từ chối
                  else{
                    if (res.status === 200) {     
                      this.selectedRecord = []             
                      this.notifyMsg(toastStatus.success, dialogText.denySuccess);
                    } else {
                      console.log(res);
                      this.notifyMsg(toastStatus.error, dialogText.denyFail);
                    }
                  }
                } catch (error) {
                  console.log(error);
                  status == this.status.accept?
                  this.notifyMsg(toastStatus.error, dialogText.acceptFail)
                  : this.notifyMsg(toastStatus.error, dialogText.deleteFail)
                  ;
                } finally {
                  this.hideLoading();
                }
              } else {
                return;
              }
            });
        })
    },

    /**
     * Bỏ chọn các bản ghi đã chọn
     */
    uncheckedSelectRows(){
      this.isUncheckedSelected = !this.isUncheckedSelected;
      this.selectedRecord = [];
    },

    /**
     * Toast message
     * @param {*} type 
     * @param {*} message 
     */
    notifyMsg(type, message) {
      notify(
        {
          message: message,
          width: 230,
          height: 40,
          position: {
            at: "bottom right",
            my: "bottom right",
          },
        },
        type,
        500
      );
    },

  },
};
</script>

<style>
@import url(@/css/main.css);
</style>
