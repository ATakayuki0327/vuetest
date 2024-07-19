<template>
  <div class="user-profile">
    <h1>{{ userName }}</h1>
    <p>{{ userEmail }}</p>
    <router-link to="/simpleform">入力</router-link>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    userName() {
      return this.user.name || 'testユーザー';
    },
    userEmail() {
      return this.user.email || 'test@example.co.jp';
    }
  }
}
</script>

<style scoped>
.user-profile {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}
</style>
