<template>
    <div class="about">
        <!-- 头部组件  -->
        <title-header :title="headerTitle"></title-header>
        <div class="about_content">
            <div>
                <p class="list_title">项目简介</p>
                <p class="list_des">这是一个基于<a href="https://www.vue-js.com/api/">Vue社区API</a>，用Vue高仿社区的个人项目</p>
            </div>
            <div>
                <p class="list_title">项目地址</p>
                <a  class="list_des" href="https://github.com/mcmPan/vue_community">https://github.com/mcmPan/vue_community</a>
            </div>
            <div>
                 <p class="list_title">意见反馈</p>
                 <a  class="list_des" href="https://github.com/mcmPan/vue_community/issues">https://github.com/mcmPan/vue_community/issues</a>
            </div>
            <div>
                <p class="list_title">更新日期</p>
                <p  class="list_des">2017-10-11</p>
            </div>
        </div>
        <!-- 尾部组件  -->
        <vue-footer></vue-footer>
    </div>
</template>

<script>
import titleHeader from '@/components/TitleHeader'
import vueFooter from '@/components/VueFooter'

export default {
    data() {
        return {
            headerTitle: '关于',
        }
    },
    components: {
        titleHeader,
        vueFooter
    }
}
</script>

<style lang="scss" soped>
    .about{
        height: 100vh;
    
        .about_content{
            padding-top: 4rem;
            height: calc( 100% - 8rem );
            
            div{
                padding: 1rem 1rem;
                margin: 0 2rem;
                border-bottom: 1px solid #ccc;

                p, a{
                    margin: 0;
                }

                a{
                    color: green;
                    text-decoration: none;
                }

                .list_title{
                    font-weight: bold;
                    margin: 1rem 0;
                }

                .list_des{
                    display: block;
                    color: gray;
                    margin-top: 2rem;
                }
            }


        }

    }
</style>
