<template>
    <div class="avatar_container">
        <div class="avatar">
            <m-avatar :name="data.FullName"></m-avatar>
        </div>
        <div class="name">
            <div> <span style="font-weight:700">{{ data.FullName }}</span> ({{ data.EmployeeCode }})</div>
            <div>{{ data.PositionName }}</div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        //Dữ liệu nhân viên
        data:Object
    },
    created() {
        // console.log(this.data);
    },
}
</script>

<style>
.avatar_container{
    display: flex;
    text-align: center;
    justify-content: flex-start;
    padding: 8px;
}
.avatar{
    margin-left: 8px;
}
.name{
    display: flex;
    flex-direction: column;
    justify-self: start;
    align-items: flex-start;
}
</style>