<template>
    <div class="post_list">
        <a :href="postList.listUrl">
            <div class="pull_left">
                <img :src="postList.author.avatar_url" alt="user_logo" class="user_logo" :title="postList.author.loginname">
                <span class="reply_count">
                    <span title="回复数" class="count_of_replies">{{ postList.reply_count }}</span>
                    <span class="count_seperator">/</span>
                    <span title="点击数" class="count_of_visits">{{ postList.visit_count }}</span>
                </span>
                <span class="list_status" :style="statusStyle">{{ postList.tab | filterTab }}</span>
                <p class="topci_title">{{ postList.title }}</p>
            </div>
            <div class="pull_right">
                <span title="发布时间" class="post_time">{{ postList.last_reply_at | formatDate }}</span>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    props: {
        postList: Object
    },
    computed: {
        statusStyle() {
            return this.postList.top ? {
                'backgroundColor': 'green',
            } : {
                'backgroundColor': 'gray',
            }

        }
    },
    mounted() {
        // console.log(this.postList);
    },
    filters: {
        filterTab(tab) {
            switch(tab) {
                case 'ask' : 
                    return '问答';
                    break;
                case 'share' :
                    return '分享';
                    break;
                case 'job' :
                    return '招聘';
                    break;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.post_list {

    width: 100%;
    border-bottom: 0.1rem solid #ccc;
    box-shadow: 0 0.2rem 0.2rem #ccc;


    a {
        display: flex;
        justify-content: space-between;
        color: black;
        text-decoration: none;
        padding: 1rem;
        height: 2rem;

        .pull_left {
            display: flex;
            flex-basis: 90%;
            align-items: center;

            .user_logo {
                height: 2rem;
                width: 2rem;
                overflow: hidden;
                border: 0.1rem solid #ccc;
                border-radius: 0.2rem;
            }

            .reply_count {
                margin: 0 0.5rem;
                flex-basis: 7%;
                text-align: center;

                .count_of_replies {
                    color: green;
                }
                .count_of_visits {
                    color: gray;
                }
            }

            .list_status {
                padding: 0.1rem 0.2rem;
                border: 0.1rem solid #ccc;
                border-radius: 0.2rem;
                align-self: flex-start;
                color: #fff
            }

            .topci_title {
                font-size: 1.5rem;
                margin: 0 0.5rem;
            }
        }


        .pull_right {
            display: flex;

            .post_time {
                align-self: flex-end;
                color: #888;
            }
        }
    } // color: 
    // width: 
}
</style>
