<template>
    <div class="login warpper">
        <div class="header">
            <span class="header-title">登录</span>
        </div>
        <div class="login-content">
            <input type="text" v-model="user_token" placeholder="请输入你的accesstoken" @keyup.enter="login">
            <button class="login-btn" @click="login">登录</button>
            <button class="nologin-btn" @click="noLogin">直接进入</button>
        </div>
        <transition name="warntip">
            <span v-if="tipShow" class="warntip" :style="isWraning ? {'color': 'red'}: ''">
                {{ tipmessage}}
            </span>
        </transition>
    </div>
</template>

<script>
import { login } from '@/service/getData'

export default {
    data() {
        return {
            user_token: '',
            tipmessage: 'qq',
            tipShow: false,
            isWraning: true
        }
    },
    methods: {
        login() {
            if(this.user_token.trim() === "") {
                this.tipmessage = '！accesstoken不能为空';
                this.triggerTip(false);
                return ;
            }
            let info = {
                accesstoken: this.user_token
            }
            login(info).then(res => {
                if (res.success) {
                    this.isWraning = false;
                    this.$setStore('username', res.loginname);
                    this.$setStore('accesstoken', this.user_token);
                    // 登录成功
                    this.tipmessage = "登录成功";
                    this.triggerTip(true);
                }
            }).catch(e => {
                // 登录失败
                this.tipmessage = '！登录失败，请重新输入accesstoken';
                this.triggerTip(false);
            })
        },
        noLogin() {
            this.$router.push('/index?tab=all');
        },
        triggerTip(status) {
            this.tipShow = !this.tipShow;
            setTimeout(() => {
                this.tipShow = false;
                if(status){
                    this.$router.push('/my');
                }
            }, 2000);
        }

    }
}
</script>

<style lang='scss' scoped>

@import '../assets/sass/warpper.scss';

.warpper {
    display: flex;
    flex-direction: column;
    height: 100vh;
    position: relative;

    .header {
        @include warpper;
        height: 5rem;
        top: 0;

        .header-title {
            line-height: 5rem;
            font-size: 2rem;
            color: #495060;
        }
    }

    .login-content {
        margin-top: 5rem;
        padding-top: 6rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        input {
            width: 70%;
            padding: 0.6rem 0.8rem;
            outline: none;
            border: none;
            border-bottom: 1px solid #ccc;
            text-align: center;
        }

        button {
            margin-top: 1.2rem;
            width: 70%;
            padding: 0.6rem 0.8rem;
            outline: none;
            border: 1px solid transparent;
            color: #fff;
            cursor: pointer;
        }

        .login-btn {
            background-color: #52bd87;
        }

        .nologin-btn {
            background-color: #f1a533;
        }
    }

    .warntip {
        position: absolute;
        top: 7rem;
        left: 20%;
        width: 60%;
        height: 2rem;
        line-height: 2rem;
        padding: 0.3rem 0.2rem;
        text-align: center;
        border: 1px solid #d5e3ef;
        border-radius: 0.7rem;
        box-shadow: 0.2rem 0.1rem 0.4rem 0.1rem #ccc;
    }
}

.warntip-enter-active {
    animation: warntip-in 2s;
}

.warntip-leave-active {
    transition: opacity 2s;
}

.warntip-leave-to {
    opacity: 0;
}

@keyframes warntip-in {
    0% {
        left: 0%;
    }
    100% {
        left: 20%;
    }
}
</style>
