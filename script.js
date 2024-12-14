$.validator.addMethod(
    "customEmail",
    function (value, element) {
        return this.optional(element) || /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value);
    },
    "Please enter a valid email address."
);

$("#form").validate({
    rules: {
        name: {
            required: true,
            minlength: 3,
            maxlength: 50
        },
        email: {
            required: true,
            customEmail: true
        },
        phone: {
            required: true,
            minlength: 10,
            maxlength: 14
        },
        age: {
            required: true,
            min : 18,
            max : 120
        },
        gender: {
            required: true,
            minlength: 4,
            maxlength: 15
        },
        address: {
            maxlength: 50
        }

    },
    messages: {
        name: {
            required: "name is required.",
            minlength: "Minumum 3 characters required",
            maxlength: "Maximum 50 characters."
        },
        email: {
            required: "Email is required.",
            customEmail: "Please enter a valid email address."
        },
        phone: {
            required: "Phone number is required.",
            minlenght: "Minumum 10 characters required",
            maxlength: "Maximum 14 characters."
        },
        age: {
            required: "Age is required.",
            min: "Minumum 18 ",
            max: "Maximum 120"
        },
        gender: {
            required: "Gender is required.",
            minlength: "Minumum 4 characters required",
            maxlength: "Maximum 15 character"
        },
        address: {
            maxlength: "Maximum 15 character only"
        }
    }
});
