var vm = new Vue({
    el: '#vue-app',
    data: {
        users: [],
        name: "",
        roll_no: "",
        year: "",
        branch: "",
        section: ""
    },
    created: function () {
        this.getApiData();
    },
    methods: {
        getApiData: function () {
            axios.get("http://localhost:3000/api/users")
                .then(function (response) {
                    vm.users = response.data;
                })
        },
        filter: function (user) {
            if (!user.first_name.toLowerCase().startsWith(vm.name.toLowerCase()))
                return false;
            if (!user.roll_no.toLowerCase().startsWith(vm.roll_no.toLowerCase()))
                return false;
            if (!user.section.startsWith(vm.section))
                return false;
            return true;
        }
    }
});


