export const getErrorMsz = (type, value, value2) => {
    // console.log('type', type, value)
    if (type == "email") {
        const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-+]+@[a-zA-Z0-9.-]+\\.{1}[a-zA-Z]+$');
        return value == "" ? "Please enter email address" : (!validEmail.test(value) || (value.length > 40)) ? "Invalid email address" : ""
    }
    if (type == "password") {
        return value == "" ? "Please enter password"
            : ""
    }
    if (type == "conrfirm_password") {
        const validPassword = new RegExp("^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[@$!%*#?&])[A-Za-z0-9@$!%*#?&]{8,}$");
        return value == "" ? "Please enter password"
            : value == value2 ? "New password should not be same as old password"
                : !validPassword.test(value) ? "Password must be of 8 characters and combination of numbers, alphabets & special characters"
                    : ""
    }
    if (type == "mobile" || type == "phone_number") {
        return value == "" ? "Please enter mobile number" : isNaN(value) ? "Mobile number must be in digits" : value.length != 10 ? "Mobile number must be 10 digit" : ""
    }
    if (type == "resetP") {
        return value == "" ? "Enter resetP" : ""
    }
    if (type == "postal_code") {
        return value == "" ? "Please enter postal code" : isNaN(value) ? "Postal code must be in digits" : value.length != 6 ? "Postal code must be 6 digit" : ""
    }
    if (type == "student_school") {
        return value == "" ? "Please select the school" : ""
    }
    if (type == "student_class") {
        return value == "" ? "Please select the class" : ""
    }
    if (type == "student_section") {
        return value == "" ? "Please select the section" : ""
    }
    if (type == "fullname") {
        return value == "" ? "Please enter fullname"
            : ""
    }
    if (type == "dob") {
        return value == "" ? "Please enter date of birth"
            : ""
    }
    if (type == "gender") {
        return value == "" ? "Please select gender"
            : ""
    }
    if (type == "rollno") {
        return value == "" ? "Please enter rollno"
            : ""
    }
}

function isValidDate(d) {
    return d instanceof Date && !isNaN(d);
}