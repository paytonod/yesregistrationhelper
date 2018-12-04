window.onload = function() {

    //Checks for right page
    if (document.getElementById("scheduleCarousel") != null)
    {
        //Creates and sets up hidden iframe
        let iframe = document.createElement("IFRAME"); 
        iframe.src = "https://acad.app.vanderbilt.edu/more/SearchClasses!input.action";
        iframe.style.height = "0px";
        iframe.style.width = "0px";
        iframe.style.border = "0px";
        iframe.setAttribute("id", "listPage");
        iframe.setAttribute("name", "site")
        document.body.appendChild(iframe);

        //add buttons to the page
        var readyStateCheckInterval = setInterval(function() {
            DROP = "DROP";
            WAITLIST = "WAITLIST-IF-FULL";
            ENROLL = "ENROLL";

            if (document.readyState === "complete") {

                let nextButton = iframe.contentDocument.getElementById("yui-pg0-0-next-link16");
                //click through page
                if (nextButton) {

                    setInterval(function () {
                        nextButton.click();
                    }, 3000);
                    
                }

                //finds class blocks on schedule
                let enrollButtons = document.getElementsByClassName("event eventEnrolled");
                let cartButtons = document.getElementsByClassName("event eventSaved");
                let waitButtons = document.getElementsByClassName("event eventWaiting");

                //creates and styles button by taking in button color, text, and text color
                // returns button
                function createButton(buttonColor, text, textColor){
                    let newButton = document.createElement("BUTTON");
                    let newText = document.createTextNode(text);
                    newButton.appendChild(newText);

                    newButton.style.backgroundColor = buttonColor;
                    newButton.style.borderColor = buttonColor;
                    newButton.style.color = textColor;
                    newButton.style.width = '20px';
                    newButton.style.height = '12px';
                    newButton.style.verticalAlign = "middle";
                    newButton.style.alignItems = "right";
                    newButton.style.fontSize = '12px';
                    newButton.style.textAlign = "center";

                    return newButton;
                }

                //adds button to the class button
                function addButtons(button, classButton)
                {
                    document.body.appendChild(button);
                    classButton.appendChild(button);

                    button.onmouseover = function() {
                        button.style.cursor = "pointer";
                    }
                }

                //set up onclick actions
                function setupAction(type, button)
                {
                    button.onclick = function(event) {
                        //stop class info popup
                        event.stopPropagation();

                        //message
                        console.log("clicked to " + type + "!");
                        let classNum = button.parentElement.id.split("_")[2];

                        //make sure page loaded
                        let list = iframe.contentDocument.getElementById("enrolledClassSections");
                        if (list == null || (list != null && list.getElementsByClassName("classSectionTableTag").length == 0)) {
                            alert("Try again in a moment.")
                        }
                        else {
                            if (type != DROP)
                            {
                                for (var i = 0, len = iframe.contentDocument.getElementById("StudentCartList_div").getElementsByClassName("classTable").length; i < len; i++)
                                {
                                    //get information
                                    let classes = iframe.contentDocument.getElementById("StudentCartList_div");
                                    let className = iframe.contentDocument.getElementById("studentCart").getElementsByClassName("classSectionTableTag")[0].children[i].getElementsByClassName("classHeader")[0].innerText;
                                    let classSel = classes.getElementsByClassName("classTable")[i].getElementsByClassName("classSelection")[0];

                                    //console.log(classSel);
                                    
                                    if (classSel.children[0].value == classNum)
                                    {
                                        //update to choose waitlist
                                        
                                        classSel.childNodes[1].removeAttribute("disabled");
                                        classSel.childNodes[3].removeAttribute("disabled");
                                        
                                        let buttonText = classSel.childNodes[5].firstChild.firstChild.firstChild;
                                        buttonText.textContent = "E▼";
                                        

                                        if (type == WAITLIST) {
                                            classSel.childNodes[3].value = "true";
                                            buttonText.textContent = "W▼";
                                        }

                                        let printText = className + " " + type + " action initiated."
                                        console.log(printText);
                                        //alert(printText);
                                        
                                        //click submit
                                        iframe.contentDocument.getElementById("enrollButton-button").click();

                                        i+=len;
                                    }
                                }
                            }
                            else //type == DROP
                            {
                                let ifr = document.getElementById("listPage");
                                let doc = ifr.contentDocument ? ifr.contentDocument : ifr.contentWindow.document;
                                let classList = doc.getElementById("enrolledClassSections").getElementsByClassName("classSectionTableTag");

                                //drop class
                                for (var i = 0, len = classList.item(0).children.length; i < len; i++)
                                {
                                    let className = classList.item(0).children.item(i).getElementsByClassName("classHeader")[0].innerText;
                                    let classSel = classList.item(0).children.item(i).getElementsByClassName("classRow");
                                    
                                    if (classSel[0].children.item(1).id.split("_")[1] == classNum)
                                    {
                                        
                                        classSel[0].children.item(0).getElementsByClassName("checkBoxDiv")[0].children.item(0).checked = true;
                                        
                                        let printText = className + " " + type + " action initiated."
                                        console.log(printText);
                                        //alert(printText);
                                        
                                        doc.getElementById("dropButton").click();
                                        let exists = doc.getElementsByClassName("yui-panel-container").length;
                                        while (exists == 0){
                                            exists = doc.getElementsByClassName("yui-panel-container").length;
                                        }

                                        setInterval(function()
                                        {
                                           try {
                                            document.getElementById("listPage").contentDocument.getElementsByClassName("yui-panel-container")[0].getElementsByClassName("buttons")[0].getElementsByClassName("yui-button yui-push-button")[0].click();
                                           }
                                           catch {}                  
                                        }, 2000);
                                        
                                        i+=len;
                                    }
                                }
                            } 
                        }
                    }
                }

                //CART CLASSES: creates and sets up actions for classes in cart
                for (var i = 0, len = cartButtons.length; i<len; i++)
                {
                    //creates a waitlist and enroll button per class
                    let enrollButton = createButton("green", "E", "white");
                    let waitlistButton = createButton("yellow", "W", "black");
                    
                    //add buttons and style mouse for button
                    if (cartButtons.item(i).children.length < 1)
                    {
                        addButtons(enrollButton, cartButtons.item(i));
                        addButtons(waitlistButton, cartButtons.item(i));
                    }  

                    //action for waitlist button once clicked - print to console and enroll
                    setupAction(WAITLIST, waitlistButton);
                    setupAction(ENROLL, enrollButton);
                }
                
                //ENROLLED CLASSES: creates and sets up actions for enrolled classes
                for (var i = 0, len = enrollButtons.length; i<len; i++)
                {
                    let dropButton = createButton("red", "--", "white");

                    //add drop button            
                    if (enrollButtons.item(i).children.length < 1)
                    {
                        addButtons(dropButton, enrollButtons.item(i));
                    }  

                    //action once clicked - print to console and drop
                    setupAction(DROP, dropButton);
                }

                //WAITLISTED CLASSES: creates and sets up actions for waitlisted classes
                for (var i = 0, len = waitButtons.length; i<len; i++)
                {
                    let dropButton = createButton("red", "--", "white");

                    //add drop button            
                    if (waitButtons.item(i).children.length < 1)
                    {
                        addButtons(dropButton, waitButtons.item(i));
                    }

                    //action once clicked - print to console and drop
                    setupAction(DROP, dropButton);                 
                }

                // grab notification and send to chrome as alert
                setInterval(function() {
                    if (iframe.contentDocument.getElementById("yui_notification_container") != null && iframe.contentDocument.getElementById("yui_notification_container").children.length != 0)
                    {
                        for (let i = 0; i < iframe.contentDocument.getElementById("yui_notification_container").children.length; i++) {
                            if (iframe.contentDocument.getElementById("yui_notification_container").children[0].id != "smoke-notification-0"){
                                let alertText = iframe.contentDocument.getElementById("yui_notification_container").children[0].getElementsByClassName("text")[0].innerText;
                                iframe.contentDocument.getElementById("yui_notification_container").removeChild(iframe.contentDocument.getElementById("yui_notification_container").children[0]);
                                location.reload();
                                alert(alertText);
                            } 
                        }
                    }
                }, 100);
            }
        }, 10);
    }
}

