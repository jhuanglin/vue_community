<template>
    <warpper :options="navOptions" class="nav-header" :linkHighLight="true"></warpper>
       <!-- <div class="nav">
           <router-link class="nav-tip" v-for="(item, index) in navOptions" :key="item.value" @click.native="jumpTo(index)" :to="{'name': 'Index', query: {tab: item.value}}">{{ item.title }}</router-link>
           <span class="link-highlight" ref="linkHighLIght"></span>
       </div> -->
</template>

<script>
import warpper from '@/components/warpper'

export default {
    data(){
        return {
            navOptions: [
                {
                    title: '全部',
                    name: 'Index',
                    value: 'all'
                },{
                    title: '精华',
                    name: 'Index',
                    value: 'essence'
                },{
                    title: '分享',
                    name: 'Index',
                    value: 'share'
                },{
                    title: '问答',
                    name: 'Index',
                    value: 'ask'
                },{
                    title: '招聘',
                    name: 'Index',
                    value: 'job'
                }              
            ]
        }
    },
    methods: {
        jumpTo(index){
            this.$refs.linkHighLIght.style.left = index * 20 + '%';
        }
    },
    components: {
        warpper
    }
}
</script>

<style lang="scss" scoped>

    .nav-header{
        top: 0;
    }

</style>
