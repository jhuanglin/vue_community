<template>
    <div class="warpper">
        <slot name="icon"></slot>
        <div class="nav">
            <a class="nav-tip" v-for="(item, index) in options" :key="item.value" @click="jumpTo(index,item.value,item.name)" :style="liStyle">{{ item.title }}</a>
            <span v-if="linkHighLight" class="link-highlight" ref="linkHighLIght" :style="liStyle"></span>
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
    computed: {
    },
    methods: {
        jumpTo(index,value,name){
            if(this.linkHighLight){
                this.$refs.linkHighLIght.style.left = index * ( 100 / this.options.length ) + '%';
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
