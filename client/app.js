
data = {
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
    date: new Date(),
}

validating_functions = {
    fnameV: function () {
        return this.validateMe(this.user_data.first_name);
    },
    lnameV: function () {
        return this.validateMe(this.user_data.last_name);
    },
    rollV: function () {
        return this.validateMe(this.user_data.roll_no);
    }
}

var vm = new Vue({
    el: '#vue-app',
    data: {
        user_data: data,
        valid_form: true,
    },
    computed: validating_functions,
    methods: {
        postData: function (user_data) {
            axios.post('http://localhost:3000/api/users', user_data).then(function (response) {
            }), (error) => {
                valid_form = true;
            }
        },
        validateMe: function (field) {
            if (field.length == 0)
                return "form-control";
            else if (field.length >= 2)
                return "form-control is-valid";
            else
                return "form-control is-invalid";
        }
    }
});
