<template>
  <div class="status-cell" :class="className(cellData.value)">
    <div>{{cellData.value}}</div>
  </div>
  <!-- <div>Hello</div> -->
</template>
<script>
import {status} from '../../js/resource.js'
export default {
  props: {
    cellData: {
      type: Object,
      default: () => { },
    },
  },
  methods: {
    /**
     * Xác định trạng thái để đổi css
     * @param {*} value 
     */
    className(value) {
      if (value === status.deny) {
        return "status-denined";
      } else if (value === status.wait) {
        return "status-waiting";
      } else {
        return "status-approved";
      }
    }
  },
};
</script>
<style>
.status-cell {
  height: 33px;
  padding: 6px 8px;
  border-radius: 4px;
  text-align: center;
  width: fit-content;
}

.status-waiting {
  border: 1px solid #6153df;
  color: #6153df;
  background-color: #ebe9fb;
}

.status-denined {
  border: 1px solid #ef292f;
  color: #ef292f;
  background-color: #fee8e7;
}

.status-approved {
  border: 1px solid #11aa7a;
  color: #11aa7a;
  background-color: #b9f8e4;
}
</style>