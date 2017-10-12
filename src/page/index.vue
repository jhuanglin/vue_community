<template>
    <div class="index">
        <!-- 头部组件  -->
        <vue-header></vue-header>
        <div class="list">
            <post-list :postList="item" v-for="(item, index) in postLists" :key="item.id"></post-list>
        </div>
        <!-- 尾部组件  -->
        <vue-footer></vue-footer>

    </div>
</template>

<script>
import vueHeader from '@/components/VueHeader'
import vueFooter from '@/components/VueFooter'
import postList from '@/components/PostList'
import { reqTopic, reqPostList } from '@/service/getData'

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
        this.reqTopicInfo(1, 'all');
    },
    watch: {
        $route(newValue, oldValue) {
            let tab = newValue.query.tab;
            this.reqTopicInfo(1,tab);
            // console.log(oldValue)
        }
    },
    methods: {
        reqTopicInfo(page, tab) {
            let reqInfo = {
                page,
                tab
            }

            reqTopic(reqInfo).then(res => {
                this.postLists = res.data;
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.index {
    height: 100vh;

    .list {
        box-sizing: border-box;
        padding-top: 4rem;
        padding-bottom: 4rem;
    }
}
</style>
