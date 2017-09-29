<template>
    <warpper :options="footerOptions" class="footer" :position="footer"></warpper>
</template>

<script>
import warpper from '@/components/Warpper'

export default {
    data() {
        return {
            footerOptions: [
                {
                    title: '首页',
                    value: 'index'
                },{
                    title: '消息',
                    value: 'message'
                },{
                    title: '我的',
                    value: 'my'
                },{
                    title: '关于',
                    value: 'about'
                }
            ],
            footer:'footer'
        }
    },
    components: {
        warpper
    }
}
</script>

<style lang="scss" scoped>
    .footer{
        bottom: 0;
        box-shadow: 0 -0.2rem 0.2rem #ccc;
    }

    

</style>
