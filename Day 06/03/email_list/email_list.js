var $ = function (id) {
    return document.getElementById(id);
}
var stateCodeLookup = function (stateCode) {
    /* TODO */
    var states = ["CA", "WA", "OR", "NV", "AZ", "WY", "MT"];
    states.push("TX");
    stateCode = stateCode.toUpperCase();
    
    // for(let i=0;i<=states.length;i++)
    // {
    //     if(states[i] == stateCode){
    //         return true;
    //     }
    // }

    for (let index in states) {
        if (states[index] == stateCode) {
            return true;
        }
    }
}
var joinList = function () {
    /* TODO */
    var emailAddress1 = $("emailAddress1").value;
    var emailAddress2 = $("emailAddress1").value;
    var isValid = true;
    if (emailAddress1 == "") {
        $("emailAddress1Error").firstChild.nodeValue = "This Feild is required. ";

        isValid = false;
    } else {
        $("emailAddress1Error").firstChild.nodeValue = "";
    }

    if (emailAddress2 == "") {
        $("emailAddress2Error").firstChild.nodeValue = "This feild is required."
        isValid = false;
    } else if (emailAddress1 !== emailAddress2) {
        $("emailAddress2Error").firstChild.nodeValue = "Enter same E-mail address."
        isValid = false;
    } else {
        $("emailAddress2Error").firstChild.nodeValue = "";
    }

    if ($("firstName").value == "") {
        $("firstNameError").firstChild.nodeValue = "This feild is required."
        isValid = false;
    }
    else {
        $("firstNameError").firstChild.nodeValue = "";
    }

    var stateCode = $("stateCode").value;
    if (!stateCodeLookup(stateCode)) {
        $("stateCodeError").firstChild.nodeValue = "State code is invalid";
        isValid = false;
    }
    else {
        $("stateCodeError").firstChild.nodeValue = "";
    }
    if (isValid) {
        $("emailForm").submit();
    }
}
window.onload = function () {
    $("joinList").onclick = joinList;
    $("emailAddress1").focus();
}
