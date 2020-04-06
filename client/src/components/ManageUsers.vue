<template>
  <div>
    <div class="container md-5" style="margin-top: 50px;">
      <div class="card">
        <div class="card-header">Featured</div>
        <div class="card-body">
          <h5 class="card-title">Manage Users</h5>
          <p class="card-text">View, add, delete and update users.</p>
          <form>
            <div class="form-row">
              <div class="col">
                <input type="text" class="form-control" v-model="name" placeholder="Name" />
              </div>
              <div class="col">
                <input type class="form-control" v-model="roll_no" placeholder="Roll" />
              </div>
              <div class="col">
                <select class="custom-select" v-model="year">
                  <option selected disabled value>Year</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
              <div class="col">
                <select class="custom-select" v-model="branch">
                  <option selected disabled value>Branch</option>
                  <option value="CSE">CSE</option>
                  <option value="ECE">ECE</option>
                  <option value="EEE">EEE</option>
                  <option value="IT">IT</option>
                  <option value="MECH">MECH</option>
                  <option value="CHEM">CHEM</option>
                  <option value="PROD">PROD</option>
                  <option value="BIO">BIO</option>
                </select>
              </div>
              <div class="col">
                <!-- Section -->
                <input type="text" class="form-control" v-model="section" placeholder="Section" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="container md-5" style="margin-top: 50px;">
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Roll</th>
            <th scope="col">Name</th>
            <th scope="col">E-mail</th>
            <th scope="col">Mobile</th>
            <th scope="col">Year</th>
            <th scope="col">Branch</th>
            <th scope="col">Section</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.roll_no">
            <!-- v-if="filter(user)" -->
            <th scope="row">{{ user.roll_no }}</th>
            <td>{{ user.first_name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.mobile }}</td>
            <td>{{ user.year }}</td>
            <td>{{ user.branch }}</td>
            <th>{{ user.section }}</th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ManageUsers",
  data() {
    return {
      users: [],
      name: "",
      roll_no: "",
      year: "",
      branch: "",
      section: ""
    };
  },
  created: function() {
    this.getApiData();
  },
  methods: {
    getApiData: function() {
      axios
        .get("http://localhost:3000/api/users")
        .then(response => (this.users = response.data));
    },
    filter: function(user) {
      if (!user.first_name.toLowerCase().startsWith(this.name.toLowerCase()))
        return false;
      if (!user.roll_no.toLowerCase().startsWith(this.roll_no.toLowerCase()))
        return false;
      if (!user.section.startsWith(this.section)) return false;
      return true;
    }
  }
};
</script>

<style>
</style>
