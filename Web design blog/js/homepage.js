
function toggleDropdown (){var dropdown=
    document.getElementById("dropdown");
    if (dropdown.style.display==="block")
        {dropdown.style.display= "none";}
    else {dropdown.style.display= "block";}
}

function dev (){var navigation=
    document.getElementById("navigation");
    if (navigation.style.display==="block")
         {navigation.style.display= "none"}
    else {navigation.style.display= "block"}
} 

function test_btn () {
    let btn_id = document.getElementById("social_btn1");

    function changeButtonSize (buttonWidth, buttonHeight) {
        btn_id.style.height = buttonHeight;
        btn_id.style.width = buttonWidth;
    }

    let buttonSize = 0;
 
    btn_id.addEventListener('click', function() {
        let buttonWidth = "150px";
        let buttonHeight = "150px";

        if (buttonSize == 0) {
            changeButtonSize(buttonWidth, buttonHeight);
            buttonSize = 1;
        }
        else {
            let newButtonHeight = "50px";
            let ButtonWidh = "50px";

            changeButtonSize(ButtonWidh, newButtonHeight);
            buttonSize = 0;
        }
        
    });
}
test_btn();