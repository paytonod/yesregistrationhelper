// Send message via the extension
chrome.extension.sendMessage({}, function (response) {
    let readyStateCheckInterval = setInterval(function () {
        // Check document state and page contents for correct page
        if (document.readyState === "complete" && document.getElementsByTagName("h1")[2].innerText === "Enrolled") {
            // Clear interval
            clearInterval(readyStateCheckInterval);

            // Log when current page is done loading
            console.log("Page is done loading pre-injection");

            // Create div for schedule
            let wrapper = document.createElement('div');
            wrapper.setAttribute("id", "wrapper");
            wrapper.style.borderStyle = "inset";
            wrapper.style.borderColor = "grey";
            wrapper.style.overflow = "scroll";
            wrapper.style.height = "400px";

            // Create iFrame to house schedule div
            let iframe = document.createElement('iframe');
            iframe.style.width = "120%";
            iframe.style.height = "250%";
            iframe.style.marginLeft = "-45px";
            iframe.style.marginTop = "-300px";
            iframe.style.overflow = "hidden";
            iframe.style.scrolling = "no";
            iframe.src = 'https://acad.app.vanderbilt.edu/more/GetSchedule!input.action#scheduleTable';

            // fetch('/more/GetSchedule!input.action')
            //     .then(function (response) {
            //         return response.text();
            //     })
            //     .then(function (body) {
            //         // Replicate the other HTML page
            //         let x = document.createElement('html');
            //         let xBody = document.createElement('body');
            //         xBody.innerHTML = body;
            //         x.append(xBody);

            //         // Isolate the div
            //         let sched = x.getElementsByTagName("div")[52];

            //         console.log(sched);
            //         // x.body.innerHTML = body;
            //         // console.log(x.getElementsByClassName("scheduleTable"));
            //     });

            // Append wrapper div to page
            // document.body.appendChild(wrapper);
            // document.getElementById('wrapper').appendChild(iframe);
        }
    }, 0);
});