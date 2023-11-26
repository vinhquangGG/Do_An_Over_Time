<template>
  <employee-selectionTable
    v-if="showTable"
    :listEmployee="employeeData.OvertimeEmployee"
    @selectedEmployee="selectedEmployee"
    @closeTable="closeTable"
    @submit="onFormSubmit($event)"
    @showLoadingLayer="showLoadingLayer"
    @hideLoadingLayer="hideLoadingLayer"
  ></employee-selectionTable>
  <form
    action=""
    :useDefaultSubmitBehavior="false"
    @submit="onSubmit"
    @submit.prevent="onSubmit"
  >
    <div class="detail-dialog-layer" v-if="isShowDialog">
      <div class="detail-dialog__background"></div>
      <div class="detail-dialog">
        <div class="detail-dialog__header">
          <div class="detail-dialog__header--title">
            {{ $t("dialogText.notifyTitle") }}
          </div>
          <div class="detail-dialog__header--button" @click="hideDialog"></div>
        </div>
        <div class="detail-dialog__body">
          {{ $t("dialogText.changedMessage") }}
        </div>
        <div class="detail-dialog__footer">
          <DxButton
            class="m-sub-button mgr_8"
            :text="$t('textButton.cancel')"
            type="normal"
            @click="hideDialog"
          />
          <DxButton
            class="m-sub-button mgr_8"
            :text="$t('textButton.unsave')"
            type="normal"
            @click="hide"
          />
          <DxButton
            class="m-button w-80"
            ref="saveBtn"
            :text="$t('textButton.save')"
            :use-submit-behavior="true"
            @click="saveData"
            type="normal"
          />
        </div>
      </div>
    </div>
    <div class="detail__container">
      <div class="detail__header">
        <div class="detail__header--left">
          <div
            class="detail__header--icon"
            id="backButton"
            @click="hideDetail"
          ></div>
          <DxTooltip
            :hide-on-outside-click="false"
            target="#backButton"
            show-event="mouseenter"
            hide-event="mouseleave"
          >
            {{ $t("titleIcon.back") }}
          </DxTooltip>
          <div class="detail__header--title">
            {{ formTitle }}
          </div>
        </div>
        <div
          class="content__header--right"
          v-if="mode == formModeList.addNew || mode == formModeList.fix"
        >
          <DxButton
            class="m-sub-button mgr_8"
            :text="$t('textButton.cancel')"
            type="normal"
            @click="hideDetail"
          />
          <DxButton
            class="m-button w-80"
            ref="saveBtn"
            :text="$t('textButton.save')"
            :use-submit-behavior="true"
            @click="saveData"
            type="normal"
          />
        </div>
        <div class="content__header--right" v-if="mode == formModeList.detail">
          <DxButton
            icon="edit"
            class="m-button w-86"
            :text="$t('textButton.fix')"
            type="normal"
            @click="changeFixForm"
          />
        </div>
      </div>
      <div class="detail__content">
        <div class="detail__content--form">
          <div class="detail__form--body">
            <div class="detail__form--left">
              <div class="detail__form--field">
                <div class="detail__field--lable">
                  {{ $t("detailField.submitBy") }}
                  <span :style="'color: red; margin-left: 2px;'">*</span>
                </div>

                <DxSelectBox
                  v-if="mode == formModeList.addNew || mode == formModeList.fix"
                  id="status__combobox--id"
                  class="detail__dropdown"
                  :style="
                    mode == formModeList.fix
                      ? 'background:#ececec; border: 1px solid #ececec !important; cursor: default !important;'
                      : ''
                  "
                  :data-source="treeDataSource"
                  valueExpr="EmployeeId"
                  displayExpr="FullName"
                  :placeholder="
                    mode == formModeList.fix ? employeeData.FullName : ''
                  "
                  v-model:value="employeeData.EmployeeId"
                  :readOnly="mode == formModeList.fix ? true : false"
                  :searchEnabled="true"
                  :searchExpr="['FullName', 'EmployeeCode']"
                  @selection-changed="getSubmitBy($event)"
                >
                  <template #item="{ data }">
                    <detail-name :data="data"></detail-name>
                  </template>

                  <DxValidator @validated="onValidated">
                    <DxRequiredRule
                      :message="
                        detailField.submitBy + ' ' + validateMessage.required
                      "
                    />
                  </DxValidator>
                </DxSelectBox>

                <input
                  class="detail-input"
                  readonly="true"
                  v-if="mode == formModeList.detail"
                  :value="employeeData.FullName"
                />
              </div>

              <div class="detail__form--field">
                <div class="detail__field--lable">
                  {{ $t("detailField.department") }}
                </div>
                <input
                  class="detail-input"
                  readonly="true"
                  v-if="mode == formModeList.detail"
                  :value="employeeData.DepartmentName"
                />
                <DxTextBox
                  v-if="mode == formModeList.addNew || mode == formModeList.fix"
                  class="detail__input"
                  :disabled="true"
                  v-model:value="employeeData.DepartmentName"
                />
              </div>

              <div class="detail__form--field">
                <div class="detail__field--lable">
                  {{ $t("detailField.submitDate") }}
                  <span :style="'color: red; margin-left: 2px;'">*</span>
                </div>
                <input
                  class="detail-input"
                  readonly="true"
                  v-if="mode == formModeList.detail"
                  :value="formatDate(employeeData.ApplyDate)"
                />
                <DxDateBox
                  v-if="mode == formModeList.addNew || mode == formModeList.fix"
                  class="detail__date-picker"
                  v-model:value="employeeData.ApplyDate"
                  display-format="dd/MM/yyyy HH:mm"
                  type="datetime"
                  :applyButtonText="textButton.save"
                  :cancelButtonText="textButton.cancel"
                >
                  <DxValidator>
                    <DxRequiredRule
                      :message="
                        detailField.submitDate + ' ' + validateMessage.required
                      "
                    />
                  </DxValidator>
                </DxDateBox>
              </div>

              <div class="detail__form--field">
                <div class="detail__field--lable">
                  {{ $t("detailField.overTimeFrom") }}
                  <span :style="'color: red; margin-left: 2px;'">*</span>
                </div>
                <input
                  class="detail-input"
                  readonly="true"
                  v-if="mode == formModeList.detail"
                  :value="formatDate(employeeData.FromDate)"
                />
                <DxDateBox
                  v-if="mode == formModeList.addNew || mode == formModeList.fix"
                  class="detail__date-picker"
                  v-model:value="employeeData.FromDate"
                  display-format="dd/MM/yyyy HH:mm"
                  type="datetime"
                  :applyButtonText="textButton.save"
                  :cancelButtonText="textButton.cancel"
                >
                  <DxValidator>
                    <DxRequiredRule
                      :message="
                        detailField.overTimeFrom +
                        ' ' +
                        validateMessage.required
                      "
                    />
                  </DxValidator>
                </DxDateBox>
              </div>

              <div class="detail__form--field">
                <div class="detail__field--lable">
                  {{ $t("detailField.restTimeFrom") }}
                </div>
                <input
                  class="detail-input"
                  readonly="true"
                  v-if="mode == formModeList.detail"
                  :value="formatDate(employeeData.BreakTimeFrom)"
                />
                <DxDateBox
                  v-if="mode == formModeList.addNew || mode == formModeList.fix"
                  class="detail__date-picker"
                  placeholder="DD/MM/YYYY HH:mm"
                  display-format="dd/MM/yyyy HH:mm"
                  type="datetime"
                  v-model:value="employeeData.BreakTimeFrom"
                  :applyButtonText="textButton.save"
                  :cancelButtonText="textButton.cancel"
                >
                  <DxValidator>
                    <DxRequiredRule
                      v-if="employeeData.BreakTimeTo"
                      :message="
                        detailField.restTimeFrom +
                        ' ' +
                        $t('validateMessage.requiredIf') +
                        ' ' +
                        detailField.restTimeTo
                      "
                    />
                    <DxRangeRule
                      v-if="
                        employeeData.BreakTimeFrom && employeeData.BreakTimeTo
                      "
                      :min="
                        mode == formModeList.addNew ? employeeData.FromDate : ''
                      "
                      :message="
                        detailField.restTimeFrom +
                        ' ' +
                        validateMessage.min +
                        ' ' +
                        detailField.overTimeFrom
                      "
                    />
                  </DxValidator>
                </DxDateBox>
              </div>

              <div class="detail__form--field">
                <div class="detail__field--lable">
                  {{ $t("detailField.restTimeTo") }}
                </div>
                <input
                  class="detail-input"
                  readonly="true"
                  v-if="mode == formModeList.detail"
                  :value="formatDate(employeeData.BreakTimeTo)"
                />
                <DxDateBox
                  v-if="mode == formModeList.addNew || mode == formModeList.fix"
                  class="detail__date-picker"
                  placeholder="DD/MM/YYYY HH:mm"
                  display-format="dd/MM/yyyy HH:mm"
                  type="datetime"
                  v-model:value="employeeData.BreakTimeTo"
                  :applyButtonText="textButton.save"
                  :cancelButtonText="textButton.cancel"
                  @valueChanged="test"
                >
                  <DxValidator>
                    <DxRequiredRule
                      v-if="employeeData.BreakTimeFrom"
                      :message="
                        detailField.restTimeTo +
                        ' ' +
                        $t('validateMessage.requiredIf') +
                        ' ' +
                        detailField.restTimeFrom
                      "
                    />
                    <DxRangeRule
                      v-if="
                        employeeData.BreakTimeFrom && employeeData.BreakTimeTo
                      "
                      :min="
                        employeeData.BreakTimeFrom
                          ? employeeData.BreakTimeFrom
                          : ''
                      "
                      :message="
                        detailField.restTimeTo +
                        ' ' +
                        validateMessage.min +
                        ' ' +
                        detailField.restTimeFrom
                      "
                    />
                  </DxValidator>
                </DxDateBox>
              </div>

              <div class="detail__form--field">
                <div class="detail__field--lable">
                  {{ $t("detailField.overTimeTo") }}
                  <span :style="'color: red; margin-left: 2px;'">*</span>
                </div>
                <input
                  class="detail-input"
                  readonly="true"
                  v-if="mode == formModeList.detail"
                  :value="formatDate(employeeData.ToDate)"
                />
                <DxDateBox
                  v-if="mode == formModeList.addNew || mode == formModeList.fix"
                  class="detail__date-picker"
                  v-model:value="employeeData.ToDate"
                  display-format="dd/MM/yyyy HH:mm"
                  type="datetime"
                  :applyButtonText="textButton.save"
                  :cancelButtonText="textButton.cancel"
                >
                  <DxValidator>
                    <DxRequiredRule
                      :message="
                        detailField.overTimeTo + ' ' + validateMessage.required
                      "
                    />
                    <DxRangeRule
                      :min="
                        employeeData.BreakTimeTo ? employeeData.BreakTimeTo : ''
                      "
                      :message="
                        detailField.overTimeTo +
                        ' ' +
                        validateMessage.min +
                        ' ' +
                        detailField.restTimeTo
                      "
                    />
                  </DxValidator>
                </DxDateBox>
              </div>

              <div class="detail__form--field">
                <div class="detail__field--lable">
                  {{ $t("detailField.overTimeCase") }}
                  <span :style="'color: red; margin-left: 2px;'">*</span>
                </div>
                <input
                  class="detail-input"
                  readonly="true"
                  v-if="mode == formModeList.detail"
                  :value="employeeData.OverTimeInWorkingShift"
                />
                <DxSelectBox
                  v-if="mode == formModeList.addNew || mode == formModeList.fix"
                  id="status__combobox--id"
                  class="detail__dropdown"
                  :data-source="overTimeSelection"
                  valueExpr="value"
                  displayExpr="name"
                  placeholder=""
                  :searchEnabled="true"
                  v-model:value="employeeData.OverTimeInWorkingShiftName"
                >
                  <DxValidator>
                    <DxRequiredRule
                      :message="
                        detailField.overTimeCase +
                        ' ' +
                        validateMessage.required
                      "
                    />
                  </DxValidator>
                </DxSelectBox>
              </div>

              <div class="detail__form--field">
                <div class="detail__field--lable">
                  {{ $t("detailField.applicableCase") }}
                  <span :style="'color: red; margin-left: 2px;'">*</span>
                </div>
                <input
                  class="detail-input"
                  readonly="true"
                  v-if="mode == formModeList.detail"
                  :value="employeeData.WorkingShift"
                />
                <DxSelectBox
                  v-if="mode == formModeList.addNew || mode == formModeList.fix"
                  id="status__combobox--id"
                  class="detail__dropdown"
                  :data-source="caseSelection"
                  valueExpr="value"
                  displayExpr="name"
                  placeholder=""
                  :searchEnabled="true"
                  v-model:value="employeeData.WorkingShiftName"
                >
                  <DxValidator>
                    <DxRequiredRule
                      :message="
                        detailField.applicableCase +
                        ' ' +
                        validateMessage.required
                      "
                    />
                  </DxValidator>
                </DxSelectBox>
              </div>
            </div>

            <div class="detail__form--right">
              <div class="detail__form--text-area">
                <div class="detail__field--lable">
                  {{ $t("detailField.overTimeReason") }}
                  <span :style="'color: red; margin-left: 2px;'">*</span>
                </div>
                <input
                  class="detail-input"
                  readonly="true"
                  v-if="mode == formModeList.detail"
                  :value="employeeData.Reason"
                />
                <DxTextArea
                  v-if="mode == formModeList.addNew || mode == formModeList.fix"
                  :style="
                    mode == formModeList.detail
                      ? ''
                      : 'width: 100%; height: 90px;'
                  "
                  v-model:value="employeeData.Reason"
                  v-model:auto-resize-enabled="autoResizeEnabled"
                >
                  <DxValidator>
                    <DxRequiredRule
                      :message="
                        detailField.overTimeReason +
                        ' ' +
                        validateMessage.required
                      "
                    />
                  </DxValidator>
                </DxTextArea>
              </div>

              <div class="detail__form--field">
                <div class="detail__field--lable">
                  {{ $t("detailField.confirmBy") }}
                  <span :style="'color: red; margin-left: 2px;'">*</span>
                </div>
                <input
                  class="detail-input"
                  readonly="true"
                  v-if="mode == formModeList.detail"
                  :value="employeeData.ApprovalName"
                />
                <DxSelectBox
                  v-if="mode == formModeList.addNew || mode == formModeList.fix"
                  id="status__combobox--id"
                  class="detail__dropdown"
                  :data-source="treeDataSource"
                  valueExpr="EmployeeId"
                  displayExpr="FullName"
                  placeholder=""
                  :searchEnabled="true"
                  :searchExpr="['FullName', 'EmployeeCode']"
                  v-model:value="employeeData.ApprovalId"
                  @value-changed="getSelectedOption"
                >
                  <template #item="{ data }">
                    <detail-name :data="data"></detail-name>
                  </template>
                  <DxValidator>
                    <DxRequiredRule
                      :message="
                        detailField.confirmBy + ' ' + validateMessage.required
                      "
                    />
                  </DxValidator>
                </DxSelectBox>
              </div>

              <div class="detail__form--field">
                <div class="detail__field--lable">
                  {{ $t("detailField.relatedPeople") }}
                </div>
                <input
                  class="detail-input"
                  readonly="true"
                  v-if="mode == formModeList.detail"
                  :value="employeeData.RelationShipNames"
                />
                <DxTagBox
                  v-if="mode == formModeList.addNew || mode == formModeList.fix"
                  id="tagbox"
                  class="detail__dropdown"
                  :showSelectionControls="true"
                  :data-source="treeDataSource"
                  display-expr="FullName"
                  value-expr="EmployeeId"
                  placeholder=""
                  :searchEnabled="true"
                  :searchExpr="['FullName', 'EmployeeCode']"
                  :showCheckBoxesMode="'none'"
                  v-model:value="relationshipIDs"
                  @value-changed="getRelationShipNames($event)"
                >
                  <button style="width: 32px; background-color: #000">
                    Click
                  </button>
                  <template #item="{ data }">
                    <detail-name :data="data"></detail-name>
                  </template>
                </DxTagBox>
              </div>

              <div class="detail__form--field" id="test">
                <div class="detail__field--lable">
                  {{ $t("detailField.status") }}
                  <span :style="'color: red; margin-left: 2px;'">*</span>
                </div>
                <input
                  class="detail-input"
                  readonly="true"
                  v-if="mode == formModeList.detail"
                  :value="employeeData.StatusName"
                />
                <DxSelectBox
                  v-if="mode != formModeList.detail"
                  id="status__combobox--id"
                  class="detail__dropdown"
                  :data-source="statusSelection"
                  valueExpr="value"
                  displayExpr="name"
                  :searchEnabled="true"
                  v-model:value="employeeData.Status"
                  placeholder=""
                >
                  <DxValidator>
                    <DxRequiredRule
                      :message="
                        detailField.status + ' ' + validateMessage.required
                      "
                    />
                  </DxValidator>
                </DxSelectBox>
              </div>
            </div>
          </div>
          <div class="detail__content--list">
            <div class="detail__list--header">
              <div class="detail__list--title">
                {{ contentTitle.employeeList }}
                <div v-if="selectedRecord.length" style="padding-left: 16px">
                  {{ $t("textButton.selected") }}
                  <span style="font-weight: 600">{{
                    selectedRecord.length
                  }}</span>
                </div>
                <span
                  v-if="selectedRecord.length"
                  style="cursor: pointer; color: blue; margin: 0 24px"
                  @click="uncheckedSelectRows"
                  >{{ $t("textButton.unchecked") }}</span
                >
                <span
                  v-if="selectedRecord.length"
                  style="cursor: pointer; color: red"
                  @click="clearSelectRows"
                  >{{ $t("textButton.clear") }}</span
                >
              </div>
              <div
                class="detail__list--button"
                @click="opentTable"
                v-if="mode != formModeList.detail"
              >
                <div class="list__button--icon"></div>
                <div
                  class="list__button--text"
                  :style="'color: #ec5504; font-weight:600'"
                >
                  {{ $t("textButton.iconButton") }}
                </div>
              </div>
            </div>
            <DxTextBox
              v-if="
                mode == formModeList.detail &&
                employeeData.OvertimeEmployee.length &&
                false
              "
              class="content__search-input"
              :placeholder="$t('placeholderInput.searchInput')"
              @value-changed="changeKeyWord($event)"
            >
              <i class="dx-icon-search"></i>
            </DxTextBox>
            <div class="detail__list--body">
              <m-table
                v-if="employeeData.OvertimeEmployee.length && !isReload"
                v-model:dataSubTable="employeeData.OvertimeEmployee"
                :dataTitle="employeeSelectionTableTitle"
                :isUncheckedSelected="isUncheckedSelected"
                :modeProp="mode"
                @addSelectedRecord="addSelectedRecord"
                @removeSelectedRecord="removeSelectedRecord"
                @clearEmployee="clearSelectedEmployee"
              ></m-table>
              <div
                v-if="!employeeData.OvertimeEmployee.length"
                style="
                  padding-bottom: 24px;
                  font-style: italic;
                  color: #9fa4b4;
                  font-size: 14px;
                "
              >
                {{ $t("placeholderInput.noData") }}
              </div>
            </div>
            <div
              class="detail_list--footer"
              v-if="employeeData.OvertimeEmployee.length"
            >
              <div style="padding-left: 16px">
                {{ $t("textButton.selectedAmount") }}
                <span style="font-weight: 600">{{
                  employeeData.OvertimeEmployee.length
                }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="detail__content--note">
          <div class="note__title">
            {{ $t("pagingText.title") }}
          </div>
          <div class="note__content">
            <div class="note__content--avatar">PV</div>
            <div class="note__content--textfield">
              <input
                type="text"
                class="note__input"
                :placeholder="$t('placeholderInput.note')"
              />
              <div class="note__button">
                <div class="note__icon"></div>
              </div>
            </div>
          </div>
          <div class="note__text">
            <span :style="'opacity:0.5'">{{ $t("pagingText.text") }}</span
            ><span
              :style="'color:#ec5504; font-weight: 600; margin-left: 4px;'"
              >{{ $t("pagingText.cancel") }}</span
            >
          </div>
          <div class="note__option">
            <div
              class="note__option--item"
              :style="'color: #ec5504; margin-left: 24px;'"
            >
              {{ $t("pagingText.all") }}
              <div class="item__border"></div>
            </div>
            <div class="note__option--item">{{ $t("pagingText.title") }}</div>
            <div class="note__option--item">{{ $t("pagingText.history") }}</div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import {
  textButton,
  placeholderInput,
  pagingText,
  detailField,
  statusSelectionForm,
  validateMessage,
  overTimeSelection,
  caseSelection,
  titleIcon,
  employeeSelectionTableTitle,
  dialogText,
} from "@/js/resource.js";
import { Resource } from "@/js/language";

import { formMode, toastStatus } from "@/js/enum.js";
import { DxButton, DxTextBoxButton } from "devextreme-vue/button";
import DxSelectBox from "devextreme-vue/select-box";
import DxTextArea from "devextreme-vue/text-area";
import DxDateBox from "devextreme-vue/date-box";
import DxTextBox from "devextreme-vue/text-box";
import DxTagBox from "devextreme-vue/tag-box";
import notify from "devextreme/ui/notify";
import { locale } from "devextreme/localization";
import viMessages from "devextreme/localization/messages/vi.json";
import { custom } from "devextreme/ui/dialog";
// import notify from "devextreme/ui/notify";
import { format } from "date-fns";

import {
  DxValidator,
  DxRequiredRule,
  DxRangeRule,
} from "devextreme-vue/validator";
import { getAllEmployees } from "@/axios/controller/employee-controller.js";
import {
  getOverTimeById,
  addOverTime,
  putOverTime,
} from "@/axios/controller/overtime-controller.js";
import { DxTooltip } from "devextreme-vue/tooltip";
import {
  DxDataGrid,
  DxColumn,
  DxPaging,
  DxSelection,
} from "devextreme-vue/data-grid";
import DataSource from "devextreme/data/data_source";

export default {
  components: {
    DxTooltip,
    DxButton,
    DxSelectBox,
    DxTextArea,
    DxDateBox,
    DxDataGrid,
    DxRangeRule,
    DxColumn,
    DxPaging,
    DxSelection,
    DxTextBox,
    DxValidator,
    DxRequiredRule,
    DxTagBox,
    DxTextBoxButton,
  },
  created() {
    // Cấu hình ngôn ngữ mặc định cho ứng dụng
    locale("vi", viMessages);
    if (!this.employeeData.OvertimeEmployee) {
      this.employeeData.OvertimeEmployee = [];
      this.employeeDataClone.OvertimeEmployee = [];
    }
    if (!this.employeeData.ApplyDate) {
      this.employeeData.ApplyDate = new Date();
      this.employeeDataClone.ApplyDate = new Date();
    }
    if (!this.employeeData.FromDate) {
      const now = new Date();
      this.employeeData.FromDate = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        0,
        0,
        0,
        0
      );
      this.employeeDataClone.FromDate = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        0,
        0,
        0,
        0
      );
    }
    if (!this.employeeData.ToDate) {
      const now = new Date();
      this.employeeData.ToDate = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        0,
        0,
        0,
        0
      );
      this.employeeDataClone.ToDate = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        0,
        0,
        0,
        0
      );
    }
    if (!this.employeeData.Status) {
      this.employeeData.Status = 1;
      this.employeeDataClone.Status = 1;
    }
    this.mode = this.formMode;
    this.getEmployeeData();

    if (this.idDataProp) {
      this.getDataById(this.idDataProp);
    }
    if (this.$i18n.locale == "eng") {
      if (this.formMode == this.formModeList.addNew) {
        this.formTitle = Resource.messages.eng.contentTitle.title_add;
      } else if (this.formMode == this.formModeList.detail) {
        this.formTitle = Resource.messages.eng.contentTitle.title_detail;
      } else {
        this.formTitle = Resource.messages.eng.contentTitle.title_fix;
      }
    } else {
      if (this.formMode == this.formModeList.addNew) {
        this.formTitle = Resource.messages.vi.contentTitle.title_add;
      } else if (this.formMode == this.formModeList.detail) {
        this.formTitle = Resource.messages.vi.contentTitle.title_detail;
      } else {
        this.formTitle = Resource.messages.vi.contentTitle.title_fix;
      }
    }
  },
  props: {
    //kiểu form truyền từ EmployeeList
    formMode: {
      type: Number,
    },
    //Dữ liệu nhân viên được chọn
    idDataProp: {
      type: Object,
    },
  },
  watch: {
    employeeData: {
      handler() {
        if (
          !this.employeeData.OvertimeEmployee &&
          typeof this.employeeData.OvertimeEmployee != "undefined" &&
          this.employeeData.OvertimeEmployee.length == 0
        ) {
          this.selectedRecord = [];
        }
      },
      deep: true,
      immediate: true,
    },
    "employees.length": {
      handler() {
        this.treeDataSource = new DataSource({
          store: {
            type: "array",
            key: "EmployeeID",
            data: this.employees,
          },
          paginate: true,
          pageSize: 10,
        });
        //Loại bỏ trường rỗng trong object
        for (let item in this.treeDataSource) {
          for (let prop in this.treeDataSource[item]) {
            if (
              [null, undefined, "", {}].includes(
                this.treeDataSource[item][prop]
              )
            ) {
              delete this.treeDataSource[item][prop];
            }
          }
        }
      },
      deep: true,
      immediate: true,
    },
    "$i18n.locale": {
      handler() {
        if (this.$i18n.locale == "vi") {
          this.employeeSelectionTableTitle =
            Resource.messages.vi.employeeSelectionTableTitle;
          this.contentTitle = Resource.messages.vi.contentTitle;
          this.statusSelection = Resource.messages.vi.statusSelectionForm;
        } else {
          this.employeeSelectionTableTitle =
            Resource.messages.eng.employeeSelectionTableTitle;
          (this.contentTitle = Resource.messages.eng.contentTitle),
            (this.statusSelection = Resource.messages.eng.statusSelectionForm);
        }
      },
      deep: true,
      immediate: true,
    },
  },
  data() {
    const currentDate = new Date();
    return {
      isShowDialog: false,
      employeeClone: {},
      employeeSelectionTableTitle:
        Resource.messages.vi.employeeSelectionTableTitle,
      titleIcon: titleIcon,
      contentTitle: Resource.messages.vi.contentTitle,
      textButton: textButton,
      formModeList: formMode,
      mode: Number,
      placeholderInput: placeholderInput,
      pagingText: pagingText,
      formTitle: "",
      detailField: detailField,
      statusSelection: Resource.messages.vi.statusSelectionForm,
      showTable: false,
      employeeData: {},
      employeeDataClone: {},
      validateMessage: validateMessage,
      caseSelection: caseSelection,
      overTimeSelection: overTimeSelection,
      isUncheckedSelected: false,
      selectedRecord: [],
      treeDataSource: new DataSource({
        store: {
          type: "array",
          key: "EmployeeID",
          data: [],
        },
        paginate: true,
        pageSize: 10,
      }),
      departmentName: "",
      relationShipNames: [],
      relationshipIDs: [],
      isReload: false,
      employees: [],
      maxDate: new Date(
        currentDate.setFullYear(currentDate.getFullYear() + 9999)
      ),
    };
  },
  methods: {
    /**
     * Ẩn thông báo
     */
    hideDialog() {
      this.isShowDialog = false;
    },
    /**
     * Emit lên component cha gọi sự kiện ẩn form
     */
    hide() {
      this.$emit("hideDetail");
    },
    /**
     * Format hàng tháng dd/MM/yyyy
     * @param {*} value
     */
    formatDate: function (value) {
      if (!value) return "";
      const date = new Date(value);
      const day = date.getDate().toString().padStart(2, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const year = date.getFullYear();
      const hours = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");
      return `${day}/${month}/${year} ${hours}:${minutes}`;
    },
    /**
     * tìm kiếm nhân viên làm thêm
     * */
    changeKeyWord(data) {
      console.log(data.value);
    },
    /**
     * Hiển thị loading layer
     */
    showLoadingLayer() {
      this.$emit("showLoading");
    },
    /**
     * ẩn loading layer
     */
    hideLoadingLayer() {
      this.$emit("hideLoading");
    },
    /**
     * focus vào ô đầu tiên của bảng detail
     * @param {*} e
     */
    selectboxEmployeeReady(e) {
      this.$nextTick(() => e.component.focus());
    },
    /**
     * Chặn gửi form mặc định của thư viện
     * @param {*} event
     */
    onSubmit(event) {
      event.preventDefault();
    },

    /**
     * Lấy tên người duyệt
     */
    getSelectedOption() {
      let selectedOption = this.employees.find(
        (option) => option.EmployeeId === this.employeeData.ApprovalId
      )?.FullName;
      this.employeeData.ApprovalName = selectedOption;
    },

    /**
     * Lấy tên những người liên quan
     * @param {*} e
     */
    getRelationShipNames() {
      // debugger
      this.relationShipNames = [];
      this.relationshipIDs.forEach((id) => {
        let option = this.employees.find((option) => option.EmployeeId === id);
        if (option) {
          this.relationShipNames.push(option.FullName);
        }
      });
      this.employeeData.RelationShipNames = this.relationShipNames.toString();
    },

    /**
     * Lấy thông tin người nộp đơn
     */
    getSubmitBy() {
      // debugger
      if (this.treeDataSource._items.length > 0) {
        let fullName = this.treeDataSource._items.find(
          (option) => option.EmployeeId === this.employeeData.EmployeeId
        )?.FullName;
        let employeeCode = this.treeDataSource._items.find(
          (option) => option.EmployeeId === this.employeeData.EmployeeId
        )?.EmployeeCode;
        let employeeId = this.treeDataSource._items.find(
          (option) => option.EmployeeId === this.employeeData.EmployeeId
        )?.EmployeeId;
        let MISACode = this.treeDataSource._items.find(
          (option) => option.EmployeeId === this.employeeData.EmployeeId
        )?.MISACode;
        let positionName = this.treeDataSource._items.find(
          (option) => option.EmployeeId === this.employeeData.EmployeeId
        )?.PositionName;
        let positionId = this.treeDataSource._items.find(
          (option) => option.EmployeeId === this.employeeData.EmployeeId
        )?.PositionId;
        let departmentName = this.treeDataSource._items.find(
          (option) => option.EmployeeId === this.employeeData.EmployeeId
        )?.DepartmentName;
        let departmentId = this.treeDataSource._items.find(
          (option) => option.EmployeeId === this.employeeData.EmployeeId
        )?.DepartmentId;

        (this.employeeData.FullName = fullName),
          (this.employeeData.EmployeeCode = employeeCode),
          (this.employeeData.EmployeeId = employeeId),
          (this.employeeData.MISACode = MISACode),
          (this.employeeData.PositionId = positionId),
          (this.employeeData.PositionName = positionName),
          (this.employeeData.DepartmentId = departmentId),
          (this.employeeData.DepartmentName = departmentName);
      }
    },

    /**
     * Emit lên EmployeeList để đóng form
     */
    hideDetail() {
      //Loại bỏ trường rỗng trong object
      for (let prop in this.employeeData) {
        if ([null, undefined, "", {}].includes(this.employeeData[prop])) {
          delete this.employeeData[prop];
        }
      }
      for (let prop in this.employeeDataClone) {
        if ([null, undefined, "", {}].includes(this.employeeDataClone[prop])) {
          delete this.employeeDataClone[prop];
        }
      }
      if (
        JSON.stringify(this.employeeData) !=
        JSON.stringify(this.employeeDataClone)
      ) {
        this.isShowDialog = true;
      } else {
        this.$emit("hideDetail");
      }
    },

    /**
     * Mở bảng chọn nhân viên
     */
    opentTable() {
      this.showTable = true;
    },

    /**
     * Đóng bảng chọn nhân viên
     */
    closeTable() {
      this.showTable = false;
    },

    /**
     * Chuyển sang form sửa thông tin nhân viên
     */
    changeFixForm() {
      this.isReload = true;
      this.mode = this.formModeList.fix;
      this.formTitle = this.contentTitle.title_fix;
      setTimeout(() => {
        this.isReload = false;
      }, 0);
    },

    /**
     * thêm nhân viên làm thêm vào mảng
     * @param {*} listEmployee
     */
    selectedEmployee(listEmployee) {
      listEmployee.forEach((element) => {
        this.employeeData.OvertimeEmployee.push(element);
        // this.employeeClone.push(element)
      });
    },

    /**
     * Lưu form
     * @param {*} e
     */
    onFormSubmit(e) {
      // debugger
      e.preventDefault();
    },
    /**
     * Hàm call API lấy thông tin làm thêm theo ID
     * @param {selectedID} id
     */
    getDataById: async function (id) {
      // debugger
      try {
        this.$emit("showLoading");
        const res = await getOverTimeById(id);
        this.employeeData = res.data;
        this.relationshipIDs = this.employeeData.RelationShipIDs
          ? this.employeeData.RelationShipIDs.split(",")
          : [];
        this.employeeData.ApplyDate
          ? (this.employeeData.ApplyDate = new Date(
              this.employeeData.ApplyDate
            ))
          : "";
        this.employeeData.BreakTimeFrom
          ? (this.employeeData.BreakTimeFrom = new Date(
              this.employeeData.BreakTimeFrom
            ))
          : "";
        this.employeeData.BreakTimeTo
          ? (this.employeeData.BreakTimeTo = new Date(
              this.employeeData.BreakTimeTo
            ))
          : "";
        this.employeeData.FromDate
          ? (this.employeeData.FromDate = new Date(this.employeeData.FromDate))
          : "";
        this.employeeData.ToDate
          ? (this.employeeData.ToDate = new Date(this.employeeData.ToDate))
          : "";
        this.employeeDataClone = { ...this.employeeData };
        this.$emit("hideLoading");
      } catch (error) {
        console.log(error);
      }
      this.$emit("hideLoadingLayer");
    },

    /**
     * Hàm call api lấy toàn bộ nhân viên
     */
    getEmployeeData: async function () {
      try {
        // debugger
        this.$emit("showLoading");
        const res = await getAllEmployees();
        if (res != null) {
          this.employees = res.data;
          this.$emit("hideLoading");
        }
      } catch (error) {
        console.log(error);
        this.$emit("hideLoading");
      }
    },

    /**
     * Hàm call api thêm mới
     * @param {*} body
     */
    postData: async function (body) {
      // debugger
      try {
        this.$emit("showLoading");
        debugger
        const res = await addOverTime(body);
        if (res.status == 201) {
          this.notifyMsg(toastStatus.success, dialogText.addSuccess);
          this.$emit("reloadData");
          this.$emit("hideDetail");
        } else {
          this.$nextTick(function () {
            // tạo dialog
            let myDialog = custom({
              title: dialogText.warningTitlte,
              messageHtml: "lỗi",
              showCloseButton: true,
              buttons: [
                {
                  className: "cancel-button",
                  text: "Đóng",
                  type: toastStatus.default,
                  onClick: (e) => {
                    return { buttonText: e.component.option("text") };
                  },
                },
              ],
            });
            myDialog.show();
          });
          this.notifyMsg(toastStatus.error, dialogText.addFail);
          console.log("error");
          this.$emit("hideLoading");
        }
      } catch (error) {
        this.$nextTick(function () {
          // tạo dialog
          let myDialog = custom({
            title: dialogText.warningTitlte,
            messageHtml: error.response.data[0].UserMsg,
            showCloseButton: true,
            buttons: [
              {
                className: "cancel-button",
                text: "Đóng",
                type: toastStatus.default,
                onClick: (e) => {
                  return { buttonText: e.component.option("text") };
                },
              },
            ],
          });
          myDialog.show();
        });
        this.notifyMsg(toastStatus.error, dialogText.addFail);
        console.log(error);
        this.$emit("hideLoading");
      }
    },

    /**
     * Hàm call api sửa thông tin
     * @param {*} id
     * @param {*} body
     */
    updateOverTime: async function (id, body) {
      this.$emit("showLoading");
      try {
        const res = await putOverTime(id, body);
        if (res.status == 200) {
          this.notifyMsg(toastStatus.success, dialogText.updateSuccess);
          this.$emit("reloadData");
          this.$emit("hideDetail");
        } else {
          this.notifyMsg(toastStatus.error, dialogText.updateFail);
          console.log("error");
          this.$emit("hideLoading");
        }
      } catch (error) {
        this.$nextTick(function () {
          // tạo dialog
          let myDialog = custom({
            title: dialogText.warningTitlte,
            messageHtml: error.response.data[0].UserMsg,
            showCloseButton: true,
            buttons: [
              {
                className: "cancel-button",
                text: "Đóng",
                type: toastStatus.default,
                onClick: (e) => {
                  return { buttonText: e.component.option("text") };
                },
              },
            ],
          });
          myDialog.show();
        });
        this.notifyMsg(toastStatus.error, dialogText.updateFail);
        console.log(error);
        this.$emit("hideLoading");
      }
    },

    /**
     * click chọn button Lưu
     */
    saveData(e) {
      debugger
      this.isShowDialog = false;
      if (this.employeeData.OvertimeEmployee.length == 0) {
        this.$nextTick(function () {
          // tạo dialog
          let myDialog = custom({
            title: dialogText.warningTitlte,
            messageHtml:
              "Bạn phải chọn ít nhất 1 nhân viên làm thêm trên đơn. Vui lòng kiểm tra lại.",
            showCloseButton: true,
            buttons: [
              {
                className: "cancel-button",
                text: "Đóng",
                type: toastStatus.default,
                onClick: (e) => {
                  return { buttonText: e.component.option("text") };
                },
              },
            ],
          });
          myDialog.show();
        });
      } else {
        console.log("oke");

        this.employeeData.RelationShipIDs = this.relationshipIDs.toString();
        //Check validate
        setTimeout(() => {
          //Nếu hết lỗi thì thực hiện gửi form
          // if (e.validationGroup._validationInfo.result.brokenRules.length === 0) {
          if (this.mode == this.formModeList.addNew) {
            this.postData(this.employeeData);
          } else {
            this.updateOverTime(
              this.employeeData.OverTimeId,
              this.employeeData
            );
          }
          // }
        }, 0);
      }
    },

    /**
     * thêm id vào danh sách các bản ghi được chọn
     * @param {*} listIDs
     */
    addSelectedRecord(listIDs) {
      listIDs.forEach((element) => {
        if (!this.selectedRecord.includes(element)) {
          this.selectedRecord.push(element);
        }
      });
    },

    /**
     * xoá id trong danh sách các bản ghi được chọn
     * @param {*} listIDs
     */
    removeSelectedRecord(listIDs) {
      listIDs.forEach((element) => {
        let index = this.selectedRecord.findIndex((ele) => ele === element);
        if (index > -1) {
          this.selectedRecord.splice(index, 1);
        }
      });
    },
    /**
     * Bỏ chọn các bản ghi đang select
     */
    uncheckedSelectRows() {
      //Đổi cờ theo dõi ấn nút bỏ chọn để bắt sự kiện trong table
      this.isUncheckedSelected = !this.isUncheckedSelected;
    },

    /**
     * Loại bỏ các nhân viên làm thêm đã chọn
     */
    clearSelectRows() {
      this.employeeData.OvertimeEmployee =
        this.employeeData.OvertimeEmployee.filter((ele) => {
          return !this.selectedRecord.includes(ele);
        });
      this.selectedRecord = [];
    },

    /**
     * Loại bỏ nhân viên làm thêm khi ấn nút loại bỏ
     * @param {*} e
     */
    clearSelectedEmployee(e) {
      const index = this.employeeData.OvertimeEmployee.findIndex(
        (element) => element === e
      );
      this.employeeData.OvertimeEmployee.splice(index, 1);
      // this.employeeClone.splice(index,1);
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