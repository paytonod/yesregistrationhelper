// Define onload function to populate the schedule content
window.onload = () => {
  // Check that the page is correct
  if (document.getElementById("scheduleCarousel") != null) {
    // Create iframe element
    let iframe: HTMLIFrameElement = document.createElement("iframe");

    // Define and style iframe
    iframe.src = "https://acad.app.vanderbilt.edu/more/SearchClasses!input.action";
    iframe.style.height = "0px";
    iframe.style.width = "0px";
    iframe.style.border = "0px";
    iframe.setAttribute("id", "listPage");
    iframe.setAttribute("name", "site");

    // Append iframe to page
    document.body.appendChild(iframe);

    let readyStateCheckInterval: number = setInterval(() => {
      if (document.readyState === "complete") {
        // Store all buttons with the class 'event eventEnrolled'
        let buttons: HTMLCollectionOf<Element> = document.getElementsByClassName(
          "event eventEnrolled"
        );

        // Iterate over all existing buttons
        for (let button of buttons) {
          // Create new button and text node
          let newButton: HTMLButtonElement = document.createElement("button");
          let newTextNode: Text = document.createTextNode("--");

          // Append text node to button
          newButton.appendChild(newTextNode);

          // Style buttons
          newButton.style.backgroundColor = "red";
          newButton.style.borderColor = "red";
          newButton.style.color = "white";
          newButton.style.width = "20px";
          newButton.style.height = "12px";
          newButton.style.verticalAlign = "middle";
          newButton.style.alignItems = "right";
          newButton.style.fontSize = "12px";
          newButton.style.textAlign = "center";

          // Check if the current button in the iteration is childless
          if (button.children.length === 0) {
            // Append newButton
            document.body.appendChild(newButton);
            button.appendChild(newButton);

            /*
             * Define newButton behavior
             */

            newButton.onmouseover = () => {
              newButton.style.cursor = "pointer";
            };

            newButton.onclick = (event: Event) => {
              event.stopPropagation();

              // Get class number
              let classNum: string = newButton.parentElement.id.split("_")[2];

              // Get iframe on the page (need to cast the HTMLElement to the appropriate type)
              let iframe: HTMLIFrameElement = <HTMLIFrameElement>(
                document.getElementById("listPage")
              );

              // Get iframe Document
              let doc: Document = iframe.contentDocument
                ? iframe.contentDocument
                : iframe.contentWindow.document;

              // Get class list
              let classList: HTMLCollectionOf<HTMLDivElement> = <HTMLCollectionOf<HTMLDivElement>>(
                doc
                  .getElementById("enrolledClassSections")
                  .getElementsByClassName("classSectionTableTag")
              );

              // Get link to next page
              let nextLink: HTMLLinkElement = <HTMLLinkElement>(
                doc.getElementById("yui-pg0-0-next-link16")
              );

              // Click next link if it exists
              if (nextLink) {
                nextLink.click();

                // Set an interval for clicking
                setInterval(() => {
                  nextLink.click();
                }, 3000);
              }

              setInterval(() => {
                iframe = <HTMLIFrameElement>document.getElementById("listPage");
                doc = iframe.contentDocument
                  ? iframe.contentDocument
                  : iframe.contentWindow.document;
                classList = <HTMLCollectionOf<HTMLDivElement>>(
                  doc
                    .getElementById("enrolledClassSections")
                    .getElementsByClassName("classSectionTableTag")[0].children
                );
              }, 3000);

              setTimeout(() => {
                let classListChildren: HTMLCollection = classList[0].children;

                for (let i = 0; i < classListChildren.length - 1; ++i) {
                  let className: string = (<HTMLDivElement>(classListChildren[i].getElementsByClassName("classHeader")[0])).innerText;
                  let classSel: HTMLCollection = classListChildren[i].getElementsByClassName("classRow");

                  let classSelChildren: HTMLCollection<HTMLButtonElement> = classSel[0].children;

                  if (classSelChildren[1].id.split("_")[1] == classNum) {
                    classSelChildren[0].getElementsByClassName("checkBoxDiv")[0].children[0].checked = true;
                  }
                }

                // for (var i = 0, len = classList.item(0).children.length - 1; i < len; i++) {
                //   let className = classList
                //     .item(0)
                //     .children.item(i)
                //     .getElementsByClassName("classHeader")[0].innerText;
                //   let classSel = classList
                //     .item(0)
                //     .children.item(i)
                //     .getElementsByClassName("classRow");

                //   if (classSel[0].children.item(1).id.split("_")[1] == classNum) {
                //     classSel[0].children
                //       .item(0)
                //       .getElementsByClassName("checkBoxDiv")[0]
                //       .children.item(0).checked = true;
                //     i += len;
                //     console.log(className.concat(" dropped."));

                    //****Uncomment to Make Drop Happen */
                    //doc.getElementById("dropButton").click();
                  }
                }
              }, 1000);
            };
          }
        }
      }
    }, 10);
  }
};
