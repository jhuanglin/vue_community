<template>
    <div class="message">
        <!-- 头部组件  -->
        <title-header :title="headerTitle"></title-header>
        <div class="message_content">
            <div class="content_nav">
                <div class="navlist"> 
                    <span>未读消息</span>
                    <span>{{ hadNotReadMsg.length }}</span>
                </div>
                <div class="navlist"> 
                    <span>已读信息</span>
                    <span>{{ hadReadMsg.length }}</span>
                </div>
            </div>
            <div class="content_main" v-if="showMsg.length === 0">
                <p class="no_msg">
                    暂无消息
                </p>
            </div>
        </div>
        <!-- 尾部组件  -->
        <vue-footer></vue-footer>
    </div>
</template>

<script>    
import { getUserMsg } from '@/service/getData'
import titleHeader from '@/components/TitleHeader'
import vueFooter from '@/components/VueFooter'

export default {
    data() {
        return {
            headerTitle: "消息",
            hadReadMsg: [],
            hadNotReadMsg: [],
            showMsg: []
        }
    },
    created() {
        this.getMsg();
    },
    methods: {
        getMsg() {
            let accesstoken = this.$getStore('accesstoken');
            if (accesstoken) {
                getUserMsg({ accesstoken }).then(res => {
                    console.log(res);
                    this.hadReadMsg = res.has_read_messages;
                    this.hadNotReadMsg = res.hasnot_read_messages;
                })
            } else {
                alert('请先进行登录');
                this.$router.push('/');
            }
        }
    },
    components: {
        titleHeader,
        vueFooter,
    }
}
</script>

<style lang="scss" scoped>
.message {
    height: 100vh;
    
    .message_content{
        padding-top: 4rem;
        height: calc( 100vh - 8rem );
        display: flex;
        flex-direction: column;

        .content_nav{
            display: flex;
            
            .navlist{
                font-size: 1.6rem;
                flex-basis: 50%;
                text-align: center;
                padding: 0.7rem 0;
                border-bottom: 1px solid #ccc;
                cursor: pointer;

                &:nth-child(1){
                    border-right: 1px solid #ccc;
                }

                &:hover{
                    border-bottom-color: red;
                }            
            }
        }

        .content_main{
            flex-grow: 1;

            .no_msg{
                text-align: center
            }
        
        }
    }
    
}
</style>
