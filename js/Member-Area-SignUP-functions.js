  let signupButton = document.getElementById("button")
  signupButton.addEventListener("click",verifications) 

function verifications() 
{
    let finalString = ""
    let arrayEmptiness = verifEmptiness()
    let arrayFullName = verifFullName()
    let arrayEmail = verifEmail()
    let arrayPassword = verifPassword()
    if ( arrayEmptiness[0] == true || arrayFullName[0] == true|| arrayEmail[0]== true || arrayPassword[0]== true ) 
    {
        if ( arrayEmptiness[0]) { finalString += arrayEmptiness[1] }
        if ( arrayFullName[0]) { finalString += arrayFullName[1] }
        if ( arrayEmail[0]) { finalString += arrayEmail[1] }
        if ( arrayPassword[0]) { finalString += arrayPassword[1] } 
        /*alert(finalString)*/
        document.getElementById("modal-text").innerHTML = finalString
        console.log(document.getElementById("modal-text"))
        document.getElementById("button").setAttribute("data-toggle", "modal");
        document.getElementById("button").setAttribute("data-target", "#exampleModalCenter");
        console.log(document.getElementById("button"))
        console.log(finalString)
        
    }
    else
    { return }
}

function verifEmptiness() 
{   
    let bool = true;
    let resultArray = []
    resultArray[0]=false
    let AlertString = "*Please fill all the inputs ya bro w yezi ble bleda :) :). \n <br>"
    let inputsArray = document.querySelectorAll('input')
    for (var i = 0, len = inputsArray.length; i < len; i++) {
        if (inputsArray[i].value == "") { 
            bool = false;
        }
    }
    if (bool == false) {
        /*alert(AlertString)*/
        resultArray[0] = true
    }
    resultArray[1]=AlertString
    return(resultArray)
}

function verifFullName() 
{
    let resultArray = []
    resultArray[0]=false
    let AlertString = "*Your name must have between 6 and 20 characters. \n <br>"
    let inputsArray = document.getElementById('input-name')
    if ( (inputsArray.value.length<6) || (inputsArray.value.length>20) )  { 
        /*alert(AlertString)*/
        resultArray[0] = true
        inputsArray.value = ""
    }
    resultArray[1]=AlertString
    return(resultArray)
}

function verifEmail() 
{  
    let resultArray = []
    resultArray[0]=false
    let AlertString = "*Your email is invalid ! \n <br>"
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-09]+\.)+[a-zA-Z]{2,}))$/ ; 
    let bool = re.test(document.getElementById("input-email").value.toLowerCase());
    if (!bool) { /*alert(AlertString) */
                 document.getElementById("input-email").value = ""
                resultArray[0]=true
               }
        resultArray[1]=AlertString
        return(resultArray)
}

function verifPassword() {
    let resultArray = []
    resultArray[0]=false
    let boolLength =true;
    let boolNumber = false;
    let boolCapital = false;
    let alertString = "*Your password is Invalid because of the following reason(s) : \n <br>"
    let passwordElement = document.getElementById('input-password')
    let password = passwordElement.value
    
    if ( password.length < 6 )  { boolLength=false; }
        for (let i = 0;i<password.length;i++) 
            {  
                if (!isNaN(password[i])) 
                {   
                    boolNumber=true 
                    
                } else if (password[i] == password[i].toUpperCase()) 
                    {
                        boolCapital=true 
                        
                    }
            }
                                
    if (boolCapital == false || boolLength == false || boolNumber == false)
                {if (boolCapital == false) { alertString += "-Does not contain at least a capital letter.\n <br>" }
                if (boolLength == false) { alertString += "  -Is not at least 6 characters long.\n <br>" }
                if (boolNumber == false) { alertString += "  -Does not contain a Number.\n <br>" }
                /*alert(alertString)*/
                passwordElement.value = ""
                resultArray[0]=true
                }
        else { 
                let confirmationPasswordElement = document.getElementById("input-password-confirmation")
                if (confirmationPasswordElement.value != password) {
                    resultArray[0]=true
                    alertString="Password verification went wrong, please retry! <br>"
                    passwordElement.value = ""
                    confirmationPasswordElement.value = ""
                }
        }
    resultArray[1]=alertString
    return(resultArray)
}





