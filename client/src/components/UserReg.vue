<template>
  <div>
    <div style="margin-top: 100px;" class="container">
      <h1>User Registration</h1>
      <br />
      <p style="color:brown;">
        Please fill your details carefully, as they cannot be changed once registered.
        !!
      </p>
      <br />
      <form>
        <!-- First Row -->
        <div class="form-row">
          <div class="col-md-4 mb-3">
            <label for="validationServer01">First name</label>
            <input
              v-model="user_data.first_name"
              type="text"
              :class="fnameV"
              id="validationServer01"
              value="Mark"
              required
            />
          </div>
          <div class="col-md-4 mb-3">
            <label for="validationServer02">Last name</label>
            <input
              v-model="user_data.last_name"
              type="text"
              :class="lnameV"
              id="validationServer02"
              value
              required
            />
          </div>
          <div class="col-md-4 mb-3">
            <label for="validationServer03">Roll No</label>
            <input
              v-model="user_data.roll_no"
              type="text"
              :class="rollV"
              id="validationServer03"
              value
              required
            />
          </div>
        </div>

        <!-- Second Row -->
        <div class="form-row">
          <div class="col-md-5 mb-3">
            <label for="validationServerEmi">Official Email</label>
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroupPrepend3">@</span>
              </div>
              <input
                v-model="user_data.email"
                type="text"
                class="form-control"
                id="validationServerUsername"
                aria-describedby="inputGroupPrepend3"
                required
              />
            </div>
          </div>
          <div class="col-md-5 mb-3">
            <label for="validationServerEmi">Personal Email</label>
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroupPrepend3">@</span>
              </div>
              <input
                v-model="user_data.personal_email"
                type="text"
                class="form-control"
                id="validationServerUsername"
                aria-describedby="inputGroupPrepend3"
                required
              />
            </div>
          </div>
        </div>

        <!-- Third Row -->
        <div class="form-row">
          <div class="col-md-5 mb-3">
            <label for="validationServerEmi">Primary Mobile</label>
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroupPrepend3">+91</span>
              </div>
              <input
                v-model="user_data.mobile"
                type="text"
                class="form-control"
                id="validationServerUsername"
                aria-describedby="inputGroupPrepend3"
                required
              />
            </div>
          </div>
          <div class="col-md-5 mb-3">
            <label for="validationServerEmi">Secondary Mobile</label>
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroupPrepend3">+91</span>
              </div>
              <input
                v-model="user_data.mobile_secondary"
                type="text"
                class="form-control"
                id="validationServerUsername"
                aria-describedby="inputGroupPrepend3"
                required
              />
            </div>
          </div>
        </div>

        <!-- Fourth Row -->
        <div class="form-row">
          <div class="col-md-3 mb-3">
            <label for="validationServer04">Year</label>
            <select class="custom-select" v-model="user_data.year" id="validationServer04" required>
              <option selected disabled value>Choose...</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
          <div class="col-md-4 mb-3">
            <label for="validationServer04">Branch</label>
            <select
              class="custom-select"
              v-model="user_data.branch"
              id="validationServer04"
              required
            >
              <option selected disabled value>Choose...</option>
              <option>CSE</option>
              <option>ECE</option>
              <option>EEE</option>
              <option>IT</option>
              <option>MECH</option>
              <option>CHEM</option>
              <option>PROD</option>
              <option>BIO</option>
            </select>
          </div>
          <div class="col-md-3 mb-3">
            <label for="validationServer04">Section</label>
            <input
              type="text"
              v-model="user_data.section"
              class="form-control"
              id="validationServer02"
              value="1"
              required
            />
          </div>
        </div>

        <br />
        <br />
        <h3>Education</h3>
        <br />

        <!-- First Row -->
        <div class="form-row">
          <div class="col-md-5 mb-3">
            <label for="validationServer01">CGPA</label>
            <input
              v-model="user_data.cgpa"
              type="text"
              class="form-control"
              id="validationServer01"
              value="Mark"
              required
            />
          </div>
          <br />
          <div class="col-md-5 mb-3 custom-control custom-radio">
            <label for="validationServer01">Backlogs Any ?</label>
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              name="customRadio"
              v-model="user_data.backlogs"
              value="true"
              type="radio"
              id="customRadio1"
              class="custom-control-input"
            />
            <label class="custom-control-label" for="customRadio1">Yes</label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              name="customRadio"
              v-model="user_data.backlogs"
              value="false"
              type="radio"
              id="customRadio2"
              class="custom-control-input"
            />
            <label class="custom-control-label" for="customRadio1">No</label>
          </div>
        </div>

        <!-- Second Row -->
        <div class="form-row">
          <div class="col-md-5 mb-3">
            <label for="validationServer01">Intermediate / Diploma College</label>
            <input
              v-model="user_data.high_school_name"
              type="text"
              class="form-control"
              id="validationServer01"
              value
              required
            />
          </div>
          <div class="col-md-5 mb-3">
            <label for="validationServer02">Intermediate / Diploma Percentage</label>
            <input
              v-model="user_data.high_school_percentage"
              type="text"
              class="form-control"
              id="validationServer02"
              value
              required
            />
          </div>
        </div>

        <!-- Third Row -->
        <div class="form-row">
          <div class="col-md-5 mb-3">
            <label for="validationServer01">EMCET Rank (optional)</label>
            <input
              v-model="user_data.emcet_rank"
              type="text"
              class="form-control"
              id="validationServer01"
              value
            />
          </div>
          <div class="col-md-5 mb-3">
            <label for="validationServer02">Mains/Advanced Rank(optional)</label>
            <input
              v-model="user_data.mains_rank"
              type="text"
              class="form-control"
              id="validationServer02"
              value
            />
          </div>
        </div>

        <!-- Fourth Row -->
        <div class="form-row">
          <div class="col-md-5 mb-3">
            <label for="validationServer01">School</label>
            <input
              v-model="user_data.school_name"
              type="text"
              class="form-control"
              id="validationServer01"
              value
            />
          </div>
          <div class="col-md-5 mb-3">
            <label for="validationServer02">School Percentage</label>
            <input
              v-model="user_data.school_percentage"
              type="text"
              class="form-control"
              id="validationServer02"
              value
            />
          </div>
        </div>

        <br />
        <br />
        <h3>Personal Detils</h3>
        <br />

        <!-- First Row -->
        <div class="form-row">
          <div class="col-md-5 mb-3">
            <label for="validationServer01">Father / Mother / Guardian Name</label>
            <input
              v-model="user_data.father_name"
              type="text"
              class="form-control"
              id="validationServer01"
              value
              required
            />
          </div>
          <div class="col-md-5 mb-3">
            <label for="validationServer01">Address</label>
            <input
              v-model="user_data.address"
              type="text"
              class="form-control"
              id="validationServer01"
              value
              required
            />
          </div>
        </div>

        <!-- Second Row -->
        <div class="form-row">
          <div class="col-md-6 mb-3">
            <label for="validationServer03">City</label>
            <input
              v-model="user_data.city"
              type="text"
              class="form-control"
              id="validationServer03"
              required
            />
          </div>
          <div class="col-md-3 mb-3">
            <label for="validationServer04">State</label>
            <select
              v-model="user_data.state"
              class="custom-select"
              id="validationServer04"
              required
            >
              <option selected disabled value>Choose...</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
              <option value="Daman and Diu">Daman and Diu</option>
              <option value="Delhi">Delhi</option>
              <option value="Lakshadweep">Lakshadweep</option>
              <option value="Puducherry">Puducherry</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jammu and Kashmir">Jammu and Kashmir</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
            </select>
          </div>
          <div class="col-md-3 mb-3">
            <label for="validationServer05">Zip Code</label>
            <input
              v-model="user_data.zip_code"
              type="text"
              class="form-control"
              id="validationServer05"
              required
            />
          </div>
        </div>

        <div class="form-group">
          <div class="form-check">
            <input value class="form-check-input" type="checkbox" id="invalidCheck3" required />
            <label class="form-check-label" for="invalidCheck3">Agree to terms and conditions</label>
          </div>
        </div>
        <br />
        <button
          class="btn btn-primary"
          @click.prevent="postData(user_data)"
          type="submit"
        >Submit form</button>
        <br />
        <br />
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "UserReg",
  data() {
    return {
      user_data: {
        first_name: "",
        last_name: "",
        roll_no: "",
        email: "",
        personal_email: "",
        mobile: "",
        mobile_secondary: "",
        year: "",
        branch: "",
        section: "",
        cgpa: "",
        backlogs: false,
        high_school_name: "",
        high_school_percentage: "",
        emcet_rank: "",
        mains_rank: "",
        school_name: "",
        school_percentage: "",
        father_name: "",
        address: "",
        city: "",
        state: "",
        zip_code: "",
        date: new Date()
      }
    };
  },
  computed: {
    fnameV: function() {
      return this.validateMe(this.user_data.first_name);
    },
    lnameV: function() {
      return this.validateMe(this.user_data.last_name);
    },
    rollV: function() {
      return this.validateMe(this.user_data.roll_no);
    }
  },
  methods: {
    postData: function(user_data) {
      this.axios.post("http://localhost:3000/api/users", user_data);
    },
    validateMe: function(field) {
      if (field.length == 0) return "form-control";
      else if (field.length >= 2) return "form-control is-valid";
      else return "form-control is-invalid";
    }
  }
};
</script>