<<<<<<< HEAD
window.onload = function() {

    //Checks for right page
    if (document.getElementById("scheduleCarousel") != null)
    {
        //Creates and sets up hidden iframe
        let iframe = document.createElement("IFRAME"); 
=======
window.onload = function () {
    //document.domain = "acad.app.vanderbilt.edu";

    if (document.getElementById("scheduleCarousel") != null) {
        let iframe = document.createElement("IFRAME");
>>>>>>> 340926cc3708f2f0c2454e108a6f9148194a1356
        iframe.src = "https://acad.app.vanderbilt.edu/more/SearchClasses!input.action";
        iframe.style.height = "500px";
        iframe.style.width = "500px";
        iframe.style.border = "0px";
        iframe.setAttribute("id", "listPage");
        iframe.setAttribute("name", "site")
        document.body.appendChild(iframe);

<<<<<<< HEAD
        //add buttons to the page
        var readyStateCheckInterval = setInterval(function() {
            if (document.readyState === "complete") {

                let enrollButtons = document.getElementsByClassName("event eventEnrolled");
                let cartButtons = document.getElementsByClassName("event eventSaved");
                //let waitButtons = document.getElementsByClassName("event eventWaitlisted");

                //creates and sets up actions for classes in cart
                for (var i = 0, len = cartButtons.length; i<len; i++)
                {
                    let newBut3 = document.createElement("BUTTON");
                    let newText3 = document.createTextNode("E");
                    newBut3.appendChild(newText3);

                    //styling buttons
                    newBut3.style.backgroundColor = "black";
                    newBut3.style.borderColor = "black";
                    newBut3.style.color = "white";
                    newBut3.style.width = '20px';
                    newBut3.style.height = '12px';
                    newBut3.style.verticalAlign = "middle";
                    newBut3.style.alignItems = "right";
                    newBut3.style.fontSize = '12px';
                    newBut3.style.textAlign = "center";

                    if (cartButtons.item(i).children.length < 1)
                    {
                        document.body.appendChild(newBut3);
                        cartButtons.item(i).appendChild(newBut3);

                        newBut3.onmouseover = function() {
                            newBut3.style.cursor = "pointer";
                        }
                    }

                    newBut3.onclick = function(event) {
                        event.stopPropagation();
                        console.log("clicked to enroll!");
                        let classNum = newBut3.parentElement.id.split("_")[2];
                        console.log(classNum);
                    }
                }
                
                //creates and sets up actions for enrolled classes
                for (var i = 0, len = enrollButtons.length; i<len; i++)
                {
=======
        var readyStateCheckInterval = setInterval(function () {
            if (document.readyState === "complete") {
                let buttons = document.getElementsByClassName("event eventEnrolled");

                for (var i = 0, len = buttons.length; i < len; i++) {
>>>>>>> 340926cc3708f2f0c2454e108a6f9148194a1356
                    let newBut2 = document.createElement("BUTTON");
                    let newText2 = document.createTextNode("--");
                    newBut2.appendChild(newText2);

                    //styling buttons
                    newBut2.style.backgroundColor = "red";
                    newBut2.style.borderColor = "red";
                    newBut2.style.color = "white";
                    newBut2.style.width = '20px';
                    newBut2.style.height = '12px';
                    newBut2.style.verticalAlign = "middle";
                    newBut2.style.alignItems = "right";
                    newBut2.style.fontSize = '12px';
                    newBut2.style.textAlign = "center";

<<<<<<< HEAD
                    
                    if (enrollButtons.item(i).children.length < 1)
                    {
=======
                    if (buttons.item(i).children.length < 1) {
>>>>>>> 340926cc3708f2f0c2454e108a6f9148194a1356
                        document.body.appendChild(newBut2);
                        enrollButtons.item(i).appendChild(newBut2);

                        newBut2.onmouseover = function () {
                            newBut2.style.cursor = "pointer";
                        }

                        newBut2.onclick = function (event) {
                            event.stopPropagation();
                            console.log("clicked!");
                            let classNum = newBut2.parentElement.id.split("_")[2];
                            console.log(classNum);

                            let ifr = document.getElementById("listPage");
                            let doc = ifr.contentDocument ? ifr.contentDocument : ifr.contentWindow.document;
                            let next1 = doc.getElementById("yui-pg0-0-next-link16");
                            let classList = doc.getElementById("enrolledClassSections").getElementsByClassName("classSectionTableTag");
                            if (next1) {
                                next1.click();
                                //make this work onload
                                setInterval(function () {
                                    next1.click();
                                }, 3000);
                                console.log("clicked");
                            }

                            //make this work onload
                            setInterval(function () {
                                ifr = document.getElementById("listPage");
                                doc = ifr.contentDocument ? ifr.contentDocument : ifr.contentWindow.document;
                                classList = doc.getElementById("enrolledClassSections").getElementsByClassName("classSectionTableTag").item(0).children;
                            }, 3000);

                            setTimeout(function () {

                                for (var i = 0, len = classList.item(0).children.length - 1; i < len; i++) {
                                    let className = classList.item(0).children.item(i).getElementsByClassName("classHeader")[0].innerText;
                                    let classSel = classList.item(0).children.item(i).getElementsByClassName("classRow");

                                    if (classSel[0].children.item(1).id.split("_")[1] == classNum) {

                                        classSel[0].children.item(0).getElementsByClassName("checkBoxDiv")[0].children.item(0).checked = true;
                                        i += len;
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