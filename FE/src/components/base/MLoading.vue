<template>
    <div class="loading-container">
    </div>
    <span class="loader"></span>
</template>

<script>
export default {

}
</script>

<style>
.loading-container{
    position: fixed;
    left: 0;
    top: 0;
    background-color: #000;
    opacity: 0.4;
    width: 100%;
    height: 100vh;
    z-index: 1500;
}
.loading-icon{
    
    width: 60px;
    height: 60px;
    background-color: #fff;
}
.loader {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 1600;
    width: 48px;
    height: 48px;
    border: 5px solid #FFF;
    border-bottom-color: #FF3D00;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    } 
</style>