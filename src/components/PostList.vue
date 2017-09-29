<template>
  <div class="post-list">
      <a href="listUrl">
          <img src="imgUrl" alt="user_logo" :title="postList.imgTitle">
          <span title="回复数" class="list-reply">{{ postList.user_reply }}</span>
          <span>/</span>
          <span title="点击数" class="list-click">{{ postList.user_click }}</span>
          <span class="list-status">{{ postList.status }}</span>
          <p>{{ postList.listMessage }}</p>
          <span title="发布时间">{{ postList.postTime }}</span>
      </a>
  </div>
</template>

<script>
export default {
    props: {
        postList : Object
    }
}
</script>

<style>

</style>
