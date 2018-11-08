chrome.extension.sendMessage({}, function (response) {
    var readyStateCheckInterval = setInterval(function () {
        if (document.readyState === "complete") {
            clearInterval(readyStateCheckInterval);
            // ----------------------------------------------------------
            // This part of the script triggers when page is done loading
            console.log("Hello. This message was sent from scripts/inject.js");

            let wrapper = document.createElement('div');

            wrapper.setAttribute("id", "wrapper");
            wrapper.style.borderStyle = "inset";
            wrapper.style.borderColor = "grey";
            wrapper.style.overflow = "scroll";
            wrapper.style.height = "400px";

            let iframe = document.createElement('iframe');

            iframe.style.width = "100%";
            iframe.style.height = "1000%";
            iframe.style.marginLeft = "-45px";
            iframe.style.marginTop = "-300px";
            iframe.style.overflow = "hidden";

            iframe.src = 'https://acad.app.vanderbilt.edu/more/GetSchedule!input.action#scheduleTable';
            document.body.appendChild(wrapper);
            (document.getElementById('wrapper')).appendChild(iframe);
            // ----------------------------------------------------------
        }
    }, 0);
});