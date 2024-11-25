document.getElementById("user-info").onsubmit = submitForm;

document.getElementById("add-me").onclick = function ()
{
    const mailing_list = document.getElementById("add-me");

    if (mailing_list.checked == true) {
        document.getElementById("email-type").style.display = "flex";
    }
    else {
        document.getElementById("email-type").style.display = "none";
    }
}

function submitForm()
{
    clearErrors()

    //Variables
    let isValid = true;
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let meet_select = document.getElementById("meet").value;
    let linkedUrl = document.getElementById("linkedin-url").value;
    let other = document.getElementById("other").value;
    const mailing_list = document.getElementById("add-me");


    if (fname == "") {

        document.getElementById("err-fname").style.display = "inline";

        isValid = false;
    }

    if (lname == "") {
        document.getElementById("err-lname").style.display = "inline";

        isValid = false;
    }

    if (!email == "") {

        if (validateEmail(email)) {
            if (meet_select == "none") {
                document.getElementById("err-meet").style.display = "inline";

                isValid = false;
            }

            if (meet_select == "other" && other == "")
                {
                    document.getElementById("err-other").style.display = "inline";
            
                    isValid = false;
                }

        }
        else {
            document.getElementById("err-address").style.display = "inline";

            isValid = false;
        }

        return isValid;
    }

    if (!linkedUrl == "") {
        if (validateUrl(linkedUrl)) {

        }
        else {
            document.getElementById("err-url").style.display = "inline";

            isValid = false;
        }
    }

    if (meet_select == "none") {
        document.getElementById("err-meet").style.display = "inline";

        isValid = false;
    }

    if (mailing_list.checked == true && email == "") {
        document.getElementById("err-address-selected").style.display = "inline";

        isValid = false;
    }

    if (meet_select == "other" && other == "")
    {
        document.getElementById("err-other").style.display = "inline";

        isValid = false;
    }

    return isValid;
}

document.getElementById("meet").onchange = function ()
{
    let meet_value = document.getElementById("meet").value;

    if (meet_value == "other") {
        document.getElementById("other-div").style.visibility = "visible";
    }
    else {
        document.getElementById("other-div").style.visibility = "hidden";
    }
}

function validateEmail(email)
{
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateUrl(url)
{
    return /https:\/\/linkedin\.com\/in\/.*/.test(url);
}

function clearErrors()
{

    let errors = document.getElementsByClassName("err");

    for (let i = 0; i < errors.length; i++) {
        errors[i].style.display = "none";
    }
}

