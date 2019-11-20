<template>
  <div class="login-wrapper">
    <input type="text" v-model="signForm.username">
    <input type="text" v-model="signForm.password">
    <button @click="login">登录</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      signForm: {
        username: "admin",
        password: "123456"
      }
    };
  },
  mounted() {
  },
  methods: {
    login() {
      this.$http.post("/login").then(res => {
        let { username, password } = res.data;
        if (
          this.signForm.username == username &&
          this.signForm.password == password
        ) {
          alert("登陆成功");
          this.$router.push({ path: "home" });
        } else {
          alert("登录失败");
        }
      });
    }
  }
};
</script>
<style scoped>
</style>
