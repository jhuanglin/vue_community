<template>
    <div class="warpper">
        <slot name="icon"></slot>
        <div class="nav">
            <a class="nav-tip" v-for="(item, index) in options" :key="item.value" @click="jumpTo(index,item.value,item.name)" :style="liStyle">{{ item.title }}</a>
            <span v-if="linkHighLight" class="link-highlight" ref="linkHighLight" :style="liStyle"></span>
        </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            liStyle: {
                width: 100 / this.options.length + '%'
            },
        }
    },
    props: {
        linkHighLight: {
            type: Boolean,
            default: false
        },
        options: {
            type: Array,
            default(){
                return [];
            }
        },
        position: {
            type: String,
            default: 'header'
        }
    },
    mounted(){
        this.calHighLightLeft();
    },
    computed: {
    },
    methods: {
        /**
         * 点击标签跳转
         * index--点击顺序
         * value--标签value值
         *          -- 若是头部,value为tab值
         *          -- 若是尾部，value为path
         * name--头部导航使用
         */
        jumpTo(index,value,name){
            if(this.linkHighLight){
                this.$refs.linkHighLight.style.left = index * 20 + '%';
            }
            if(this.position === 'header') {
                this.$router.push({
                    'name' : name,
                     query: {
                         tab : value
                     }
                })
            }else if(this.position === "footer") {
                this.$router.push('/' + value);
            }
        },
        /**
         * 头部导航下划线
         */
        calHighLightLeft() {
            if(this.linkHighLight) {
                let param = this.$route.query.tab;
                console.log(param)
                for(let i = 0, len = this.options.length; i < len; i++) {
                    if(this.options[i].value === param){
                        this.$refs.linkHighLight.style.left = i * 20 + '%';
                    }
                }
            }
        }
    }
}
</script>

<style lang='scss' scoped>
    @import '../assets/sass/warpper.scss';

    .warpper{
        @include warpper;

        .icon{
            width: 5rem;
            margin: 0 0.8rem;

            img{
                height: 100%;
            }
        }

        .link-highlight{
            height: 0.2rem;
            background-color: red;
            position: absolute;
            top: 4rem;
            left: 0%;     
            transition: left linear 200ms;           
        }

    }
</style>
