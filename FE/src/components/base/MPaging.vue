<template>
    <div class="page">
        <div class="page-left">{{ $t('pagingText.amount') }} <span class="amount-page">{{ totalRecord }}</span></div>
        <div class="page-right">
            <!-- <DxSelectBox 
                    class="status__combobox"
                    :data-source="pageSizeSelection"
                    valueExpr="value"
                    displayExpr="name"
                    :value="pageSizeSelection[2].value"
                    :width="78"
                    @selection-changed="changePageSize($event)"
            /> -->
            <m-dropdown
                :inputValue="pageSizeSelection[2].value"
                :dataSource="pageSizeSelection"
                :widthValue="78"
                @changeSelection="changePageSize"
            >
            </m-dropdown>
            <div class="page-range">{{ $t('pagingText.from') }}<span style="font-weight: 700;">{{ beginRecord }}</span> {{ $t('pagingText.to') }} <span style="font-weight: 700;">{{ endRecord }}</span> {{ $t('pagingText.record') }}</div>
            <div class="page-number">
                <div>
                    <div :title=titleIcon.previos class="pre-button" id="previos" @click="previousPage" :class="canBack?'':'disable-button'"></div>
                </div>
                <div>
                    <div :title=titleIcon.next class="next-button" @click="nextPage" :class="canNext?'':'disable-button'"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import{pagingText,titleIcon,pageSizeSelection} from '@/js/resource.js'
import { DxTooltip } from 'devextreme-vue/tooltip';
import MDropdown from './dropdown/MDropdown.vue';
export default {
    components:{
        MDropdown,DxTooltip
    },
    props:{
        //Số bản ghi trên trang
        totalRecord: Number,
        //Bản ghi đầu
        beginRecord:Number,
        //Bản ghi cuối
        endRecord:Number,
    },
    watch:{
        //Cập nhật giá trị bản ghi bắt đầu truyền từ component cha
        beginRecord: {
            handler(){
                // bản ghi đầu > 1 thì có thể back
                if(this.beginRecord > 1){
                    this.canBack = true;
                }
                else{
                    this.canBack = false;
                }

                //bản ghi cuối = tổng số bản ghi thì không thể next
                if(this.endRecord  >= this.totalRecord){
                    this.canNext = false;
                }
                else{
                    this.canNext = true;
                }
            },
            immediate: true,
            deep: true,
        },
        //Cập nhật tổng số bản ghi thoả mãn truyền từ component cha
        totalRecord: {
            handler(){
                // bản ghi đầu > 1 thì có thể back
                if(this.beginRecord > 1){
                    this.canBack = true;
                }
                else{
                    this.canBack = false;
                }

                //bản ghi cuối = tổng số bản ghi thì không thể next
                if(this.endRecord  >= this.totalRecord){
                    this.canNext = false;
                }
                else{
                    this.canNext = true;
                }
            },
            immediate: true,
            deep: true,
        },
        //Cập nhật giá trị bản ghi kết thúc truyền từ component cha
        endRecord: {
            handler(){
                // bản ghi đầu > 1 thì có thể back
                if(this.beginRecord > 1){
                    this.canBack = true;
                }
                else{
                    this.canBack = false;
                }

                //bản ghi cuối = tổng số bản ghi thì không thể next
                if(this.endRecord  >= this.totalRecord){
                    this.canNext = false;
                }
                else{
                    this.canNext = true;
                }
            },
            immediate: true,
            deep: true,
        }
    },
    data() {
        return {
            pagingText:pagingText,
            titleIcon:titleIcon,
            pageSizeSelection:pageSizeSelection,
            params:{
                keyWord:"",
                MISACode:"1",
                pageSize:50,
                offSet:0
            },
            canNext:true,
            canBack: true,
            pageSize:50,
        }
    },  
    methods: {
        /**
         * thay đổi số lượng bản ghi trên trang, Emit lên component EmployeeList cập nhật params 
         * @param {*} e 
         */
        changePageSize(data){
            this.pageSize = data.selectedItem.name;
            this.$emit("changePageSize",this.pageSize)
        },

        //Cập nhật giá trị param paging filter khi next trang
        nextPage(){
            if(this.canNext){
                this.$emit("changeOffSet",this.endRecord);
            }

        },

        //Cập nhật giá trị param paging filter khi back trang
        previousPage(){
            if(this.canBack){
                let offSet = this.beginRecord - this.pageSize - 1 >= 0? this.beginRecord - this.pageSize - 1: 0
                this.$emit("changeOffSet",offSet);
            }

        }
    },
}
</script>

<style>
    @import url(@/css/main.css);
    @import url(@/css/components/base/paging.css);
    .disable-button{
        opacity: 0.6;
        cursor: default;
    }
</style>