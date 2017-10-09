<template>
    <div class="index">
        <!-- 头部组件  -->
        <vue-header></vue-header>
        <div class="list">
            <post-list :postList="item" v-for="(item, index) in postLists" :key="item.topicTitle"></post-list>
        </div>
        <!-- 尾部组件  -->
        <vue-footer></vue-footer>

    </div>
</template>

<script>
import vueHeader from '@/components/VueHeader'
import vueFooter from '@/components/VueFooter'
import postList from '@/components/PostList'
import { reqTopic,reqPostList } from '@/service/getData'

export default {
    data() {
        return {
            postLists: [],
        }
    },
    components: {
        // 导航
        vueHeader,
        // 底部
        vueFooter,
        // 列表
        postList
    },
    created() {
        reqPostList().then(res => {
            console.log(res);
            this.postLists = res.postList;
        })
    },
    watch: {
        $route(newValue, oldValue) {
            // console.log(newValue)
            // console.log(oldValue)
        }
    }
}
</script>

<style lang="scss" scoped>
    .index{
        height: 100vh;

        .list {
            box-sizing: border-box;
            padding-top: 4rem;
            padding-bottom: 4rem;
        }

    }

    
</style>
