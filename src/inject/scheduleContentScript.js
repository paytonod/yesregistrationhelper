window.onload = function() {
    var readyStateCheckInterval = setInterval(function() {
        if (document.readyState === "complete") {

            let buttons = document.getElementsByClassName("event eventEnrolled");
            for (var i = 0, len = buttons.length; i<len; i++)
            {
                let newBut2 = document.createElement("BUTTON");
                let newText2 = document.createTextNode("--");
                newBut2.appendChild(newText2);

                newBut2.style.backgroundColor = "red";
                newBut2.style.borderColor = "red";
                newBut2.style.color = "white";
                newBut2.style.width = '20px';
                newBut2.style.height = '12px';
                newBut2.style.verticalAlign = "middle";
                newBut2.style.alignItems = "right";
                newBut2.style.fontSize = '12px';
                newBut2.style.textAlign = "center";

                if (buttons.item(i).children.length < 1)
                {
                    document.body.appendChild(newBut2);
                    buttons.item(i).appendChild(newBut2);

                    newBut2.onmouseover = function() {
                        newBut2.style.cursor = "pointer";
                    }

                    newBut2.onclick = function(event) {
                        event.stopPropagation();
                        console.log("clicked!");
                        let classNum = newBut2.parentElement.id.split("_")[2];
                        console.log(classNum);

                        // let listPage = new XMLHttpRequest();
                        // function reqListener() {
                        //     console.log(this.responseXML.title);
                        // }
                        // listPage.addEventListener("load", reqListener);
                        // listPage.open("GET", "SearchClasses!input.action");
                        // listPage.responseType = "document";
                        // listPage.send(document); 

                        let classList = document.getElementById("EnrolledClassesList_div").children;
                        let checkbox;
                        for (var i = 0, len = classList.length; i < len; i++)
                        {
                            let classSel = classList.item(i).tBodies.item(0).children.item(2).children.item(0);
                            console.log(classSel.id.split("_"));
                            if (classSel.id.split("_")[1] == classNum)
                            {
                                checkbox = classList.item(i).tBodies.item(0).children.item(2).cells[0];
                                i+=len;
                            }
                        }

                        //click Order Books instead of drop
                        var submit = document.getElementById("bookNowIndicator").getElementsByClassName("first-child").item(0).children.item(0);
                        console.log(submit);
                        submit.click();
                    }
                }
            }
        }
    }, 10);
}

// window.onload = function() {
//     while (document.readyState != "complete"){
//         console.log("not ready");
//     }
//     let buttons = document.getElementsByClassName("event eventEnrolled");
//     for (var i = 0, len = buttons.length; i<len; i++)
//     {
//         console.log("add");
//         let newBut2 = document.createElement("BUTTON");
//         let newText2 = document.createTextNode("-");
//         newBut2.appendChild(newText2);
//         if (buttons.item(i).children.length < 1)
//         {
//             document.body.appendChild(newBut2);
//             buttons.item(i).appendChild(newBut2);
//         }
//     }
// }