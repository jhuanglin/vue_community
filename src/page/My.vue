<template>
    <div class="my">
        <!-- 头部组件  -->
        <title-header :title="headerTitle"></title-header>
        <div class="my_content">
            <div class="personal_info">
                <img :src="userMsg.avatar_url" alt="user_logo" class="user_logo">
                <span>积分: {{userMsg.score}}</span>
                <span>注册时间: {{userMsg.create_at }}</span>
            </div>
            <div class="topic_info">
                <message-banner class="topic_content" banner="最近的话题" :content="userMsg.recent_topics"></message-banner>
                <message-banner class="topic_content" banner="最近的回复" :content="userMsg.recent_replies"></message-banner>
                <message-banner class="topic_content" banner="收藏的话题" :content="userMsg.collect_topics"></message-banner>
            </div>
        </div>
        <!-- 尾部组件  -->
        <vue-footer></vue-footer>
    </div>
</template>

<script>
import { getUserInfo } from "@/service/getData"
import titleHeader from '@/components/TitleHeader'
import vueFooter from '@/components/VueFooter'
import messageBanner from '@/components/MessageBanner'

export default {
    data() {
        return {
            headerTitle: "个人中心",
            userMsg: {}
        }
    },
    created() {
        this.getUser();
    },
    methods: {
        getUser() {
            let username = this.$getStore('username');
            if(username) {
                getUserInfo(username).then(res => {
                    this.userMsg = res.data;
                    // console.log(res);
                })
            }else {
                alert('请先进行登录');
                this.$router.push('/');
            }
        }
    },
    components: {
        titleHeader,
        vueFooter,
        messageBanner
    }
}
</script>

<style lang="scss" scoped>
    .my{
        height: 100vh;

        .my_content{
            padding-top: 4rem;   
            display: flex;
            height: calc(100% - 8rem);

            .personal_info{
                flex-basis: 15%;
                border-right: 0.1rem solid #ccc;
                display: flex;
                flex-direction: column;
                box-shadow: 0.2rem 0 0.2rem #ccc;
                
                .user_logo{
                    width: 25%;
                    margin: 2rem auto;
                    border-radius: 25%;
                }

                span{
                    font-size: 1.2rem;
                    color: #8991a9;
                    margin-bottom: 1rem; 
                    margin-left: 20%;
                }
            }

            .topic_info{
                flex-grow: 1;

                .topic_content{
                    width: 80%;
                    margin: 2rem auto 0;
                }
            }

        }
    }
</style>
