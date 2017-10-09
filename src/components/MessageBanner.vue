<template>
  <div class="message-banner">
      <p class="banner">{{ banner }}</p>
      <div v-if="content.length > 0" class="content"></div>
      <div v-else class="content">
        {{ banner }}数目为0
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  props: {
    banner: {
      type: String,
      default: '文章title'
    },
    content: {
      type: Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>

  .message-banner{
    border: 0.1rem solid #ccc;
    border-radius: 0.3rem;
    font-size: 1.6rem;

    .banner{
      margin: 0;
      padding: 1rem;
      border-bottom: 1px solid #eee;
      box-shadow: 0 0.1rem 0.1rem #ccc;
    }
    
    .content{
      font-size: 1.3rem;
      padding: 1rem;
    }
  }

</style>
