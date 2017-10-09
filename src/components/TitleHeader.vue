<template>
    <div class="warpper">
        <p>{{ title }}</p>
    </div>
</template>
<script>
export default {
    props: ['title']
}
</script>

<style lang='scss' scoped>
@import '../assets/sass/warpper.scss';

.warpper {
    height: 4rem;
    width: 100%;
    background-color: #fff;
    position: fixed;
    text-align: center;
    box-shadow: 0 0.3rem 0.6rem #ccc;
    top: 0;

    p {
        line-height: 4rem;
        margin: 0;
        font-size: 1.6rem;
    }
}
</style>
