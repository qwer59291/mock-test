<template>
  <div class="home-wrapper">
    <h3>Home</h3>
    <table border="1">
      <tr>
        <th>编号</th>
        <th>姓名</th>
        <th>查看</th>
      </tr>
      <tr v-for="(item) in list" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>
          <router-link :to="newItem(item)"><img :src="item.src" alt=""></router-link>
        </td>

      </tr>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: ""
    };
  },
  mounted() {
    this.$http.get("/posts").then(res => {
      this.list = res.data.list;
    });
  },
  computed: {
    newItem: function() {
      return function(item) {
        return `user/${item.id}/${item.name}`;
      };
    }
  }
};
</script>
<style scoped lang="scss">
table {
  width: 100%;
  tr {
    td {
      img {
        width: 30px;
        height: 30px;
      }
    }
  }
}
</style>
