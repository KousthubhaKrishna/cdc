<template>
  <div>
    <ManageUsers />
    <!-- <UserReg /> -->
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
// import UserReg from "./components/UserReg.vue";
import ManageUsers from "./components/ManageUsers.vue";

export default {
  name: "App",
  components: {
    // UserReg,
    ManageUsers
  }
};
</script>

<style>
</style>
