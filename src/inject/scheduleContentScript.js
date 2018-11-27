window.onload = function() {

    //Checks for right page
    if (document.getElementById("scheduleCarousel") != null)
    {
        //Creates and sets up hidden iframe
        let iframe = document.createElement("IFRAME"); 
        iframe.src = "https://acad.app.vanderbilt.edu/more/SearchClasses!input.action";
        iframe.style.height = "500px";
        iframe.style.width = "500px";
        iframe.style.border = "0px";
        iframe.setAttribute("id", "listPage");
        iframe.setAttribute("name", "site")
        document.body.appendChild(iframe);

        //add buttons to the page
        var readyStateCheckInterval = setInterval(function() {
            if (document.readyState === "complete") {

                let enrollButtons = document.getElementsByClassName("event eventEnrolled");
                let cartButtons = document.getElementsByClassName("event eventSaved");
                //let waitButtons = document.getElementsByClassName("event eventWaitlisted");

                //creates and sets up actions for classes in cart
                for (var i = 0, len = cartButtons.length; i<len; i++)
                {
                    //create button
                    let enrollButton = document.createElement("BUTTON");
                    let enrollText = document.createTextNode("E");
                    enrollButton.appendChild(enrollText);

                    //styling buttons
                    enrollButton.style.backgroundColor = "green";
                    enrollButton.style.borderColor = "green";
                    enrollButton.style.color = "white";
                    enrollButton.style.width = '20px';
                    enrollButton.style.height = '12px';
                    enrollButton.style.verticalAlign = "middle";
                    enrollButton.style.alignItems = "right";
                    enrollButton.style.fontSize = '12px';
                    enrollButton.style.textAlign = "center";

                    //add and style mouse for button
                    if (cartButtons.item(i).children.length < 1)
                    {
                        document.body.appendChild(enrollButton);
                        cartButtons.item(i).appendChild(enrollButton);

                        enrollButton.onmouseover = function() {
                            enrollButton.style.cursor = "pointer";
                        }
                    }

                    //action once clicked - print to console and enroll
                    enrollButton.onclick = function(event) {
                        event.stopPropagation();
                        console.log("clicked to enroll!");
                        let classNum = enrollButton.parentElement.id.split("_")[2];
                        console.log(classNum);

                        //access iframe elements
                        let ifr = document.getElementById("listPage");
                        let doc = ifr.contentDocument? ifr.contentDocument : ifr.contentWindow.document;
                        let next1 = doc.getElementById("yui-pg0-0-next-link16");
                        let classList = doc.getElementById("studentCart");
                    
                        //click to cart
                        if (next1) {
                            next1.click();
                        }
                        
                        setTimeout(function() {
                            
                            for (var i = 0, len = classList.getElementsByClassName("classSectionTableTag").children.length; i < len; i++)
                            {
                                //get information
                                let className = classList.getElementsByClassName("classSectionTableTag").children.item(i).getElementsByClassName("classHeader")[0].innerText;
                                let classSel = classList.getElementsByClassName("classSectionTableTag").children.item(i).getElementsByClassName("classRow");
                                
                                if (classSel[0].children.item(0).children[0].value == classNum)
                                {
                                    //update 
                                    classSel[0].children.item(0).getElementsByClassName("first-child").item(0).children[0].click();
                                    console.log("clicked");
                                    i+=len;
                                    console.log(className.concat(" enrolled."));
                                    
                                    //****Uncomment to Make Drop Happen */
                                    //click submit
                                }
                            }
                        }, 1000);
                        
                    }
                }
                
                //creates and sets up actions for enrolled classes
                for (var i = 0, len = enrollButtons.length; i<len; i++)
                {
                    let dropButton = document.createElement("BUTTON");
                    let dropText = document.createTextNode("--");
                    dropButton.appendChild(dropText);

                    //styling buttons
                    dropButton.style.backgroundColor = "red";
                    dropButton.style.borderColor = "red";
                    dropButton.style.color = "white";
                    dropButton.style.width = '20px';
                    dropButton.style.height = '12px';
                    dropButton.style.verticalAlign = "middle";
                    dropButton.style.alignItems = "right";
                    dropButton.style.fontSize = '12px';
                    dropButton.style.textAlign = "center";

                    //action once clicked - print to console and drop
                    if (enrollButtons.item(i).children.length < 1)
                    {
                        document.body.appendChild(dropButton);
                        enrollButtons.item(i).appendChild(dropButton);

                        dropButton.onmouseover = function() {
                            dropButton.style.cursor = "pointer";
                        }

                        dropButton.onclick = function(event) {
                            event.stopPropagation();
                            console.log("clicked!");
                            let classNum = dropButton.parentElement.id.split("_")[2];
                            console.log(classNum);
                            
                            //access iframe elements
                            let ifr = document.getElementById("listPage");
                            let doc = ifr.contentDocument? ifr.contentDocument : ifr.contentWindow.document;
                            let next1 = doc.getElementById("yui-pg0-0-next-link16");
                            let classList = doc.getElementById("enrolledClassSections").getElementsByClassName("classSectionTableTag");
                            
                            //click through page
                            if (next1) {
                                next1.click();
                                //make this work onload
                                setInterval(function() {
                                    next1.click();
                                }, 3000);
                                console.log("clicked");
                            }
                            
                            //make this work onload
                            //click through page again
                            setInterval(function() {
                                ifr = document.getElementById("listPage");
                                doc = ifr.contentDocument? ifr.contentDocument : ifr.contentWindow.document;
                                classList = doc.getElementById("enrolledClassSections").getElementsByClassName("classSectionTableTag").item(0).children;
                            }, 3000);
                            

                            //drop class
                            setTimeout(function() {

                                for (var i = 0, len = classList.item(0).children.length; i < len; i++)
                                {
                                    let className = classList.item(0).children.item(i).getElementsByClassName("classHeader")[0].innerText;
                                    let classSel = classList.item(0).children.item(i).getElementsByClassName("classRow");
                                    
                                    if (classSel[0].children.item(1).id.split("_")[1] == classNum)
                                    {
                                        
                                        classSel[0].children.item(0).getElementsByClassName("checkBoxDiv")[0].children.item(0).checked = true;
                                        i+=len;
                                        console.log(className.concat(" dropped."));
                                        
                                        //****Uncomment to Make Drop Happen */
                                        doc.getElementById("dropButton").click();
                                        //doc.getElementsByClassName("yui-panel-container")[0].getElementsByClassName("buttons")[0].getElementById("yesButton").click();
                                    }
                                }
                            }, 1000);
                            
                        }
                    }
                }
            }
        }, 10);
    }
}