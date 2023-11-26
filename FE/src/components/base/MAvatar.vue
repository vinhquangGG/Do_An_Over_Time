<template>
  <div class="parent" v-if="tableStyle">
    <div class="child" :style="{'padding-top':'1px','padding-left':'1px','font-size':'12px', 'font-weight':'600',backgroundColor:  backgroundColors[Math.floor(Math.random() * 6)]}">{{formatName(name)}}</div>
  </div>
  <div class="parent--detail-cell" v-if="!tableStyle">
    <div class="child--detail-cell" :style="{'font-weight':'600', backgroundColor:  backgroundColors[Math.floor(Math.random() * 6)]}">{{formatName(name)}}</div>
  </div>
</template>

<script>
export default {
    props:{
      //tên
        name: String,
      //Kiểu 
        tableStyle: Boolean
    },
    data() {
    return {
        nameData:this.name,
        backgroundColors: ['#ec5504', '#a3cf30', '#aa62e2','#e93850','#4186e1','#ff0000']
        };
    },
    methods: {
      /**
       * Chuyển tên về dạng chữ viết tắt tên
       * @param {*} name 
       */
        formatName(name){
            let array = name.toString().trim().split(" ");
            let length = array.length - 1;
            let s = array[0][0]+""+array[length][0];
            return s
        }
    },
}
</script>

<style>
.parent {
  width: 34px;
}
.child {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  text-transform: uppercase;
  color: #fff;
}

.parent--detail-cell {
  width: 40px;
  margin-right: 8px;
}
.child--detail-cell {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  width: 36px;
  border-radius: 50%;
  text-transform: uppercase;
  color: #fff;
}
</style>