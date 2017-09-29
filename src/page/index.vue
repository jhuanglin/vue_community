<template>
    <div class="index">
        <!-- 头部组件  -->
        <vue-header></vue-header>
        <!-- 尾部组件  -->
        <vue-footer></vue-footer>

    </div>
</template>

<script>
import vueHeader from '@/components/VueHeader'
import vueFooter from '@/components/VueFooter'

export default {
    data() {
        return {
            
        }
    },
    components: {
        // 导航
        vueHeader,
        // 底部
        vueFooter
    }
}
</script>

<style lang="scss">
    .index{
        height: 100vh;
    }
</style>
