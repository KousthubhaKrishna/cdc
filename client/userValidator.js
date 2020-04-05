const UV = {
    nameV: function (name) {
        for (var i = 0; i < name.length; i++) {
            if ('a' <= name[i] <= 'z' || 'A' <= name[i] <= 'Z')
                continue;
            else
                return "form-control is-invalid";
        }
        return "form-control is-valid";
    }
}
export default UV
