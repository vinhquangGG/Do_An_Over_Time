<template>
  <div class="flex cell-wrapper" @mouseenter="togglePinButton" @mouseleave="togglePinButton">
    <span>
      {{cellData.column.caption}}
    </span>
    <!-- <button class="pin-button" v-show="isShow || isPin" :class="{pinActive: isPin }" v-on:click.prevent.stop="pinColumn($event)"> -->
    <button class="pin-button" v-show="isShow || isPin" :class="{pinActive: isPin }" @click="pinColumn">

    </button>
  </div>
</template>

<script>
export default {
    props:{
      //Dữ liệu tên cột
        cellData: Object,
        //Cờ xác định có ghim hay không
        isPinProp: Boolean
    },
    watch:{
      employeeData: {
      handler() {
          this.isPin = this.isPinProp;
      },
      deep: true,
      immediate: true
    }
    },
    data() {
      return {
        isShow: false,
        isPin: false,
      }
    },
    methods: {
      /**
       * ẩn hiện icon pin
       */
      togglePinButton() {
        this.isShow = !this.isShow;
      },

      /**
       * Emit lên component cha để thực hiện ghim cột
       */
      pinColumn() {
        // console.log(this.cellData);
        if(!this.isPin) {
          this.$emit('pin-column', {index: this.cellData.columnIndex - 2, showPin: true});
        }
        else {
          this.$emit('pin-column', {index: this.cellData.columnIndex - 2 , showPin: false});
        }
      }
    },
}
</script>

<style>
.pin-button {
  cursor: pointer;
  width: 24px;
  height: 24px;
  position: absolute;
  transform: translate(100px, 0px) rotate(-45deg);
  background-color: #686c7b;
  -webkit-mask-image: url(../../assets/img/Icon.edb5c3d.svg);
  -webkit-mask-position: -216px -120px;
  outline: none;
}

.pinActive {
  background-color: #ec5504!important;
  cursor: pointer;
}

.cell-wrapper {
  min-width: 100px;
  height: 100%;
  align-items: center;
  
}
</style>