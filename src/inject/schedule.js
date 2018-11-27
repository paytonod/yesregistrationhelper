chrome.extension.sendMessage({}, function (response) {
    let readyStateCheckInterval = setInterval(function () {
        if (document.readyState === "complete") {
            clearInterval(readyStateCheckInterval);

            // if the schedule is not already on the page, and you're on a YES page, add it
            if (document.getElementById("wrapper") === null &&
                document.getElementsByTagName("h1")[2] !== undefined &&
                document.getElementsByTagName("h1")[2].innerText === "Enrolled") {
                showSchedule();
            }
        }
    }, 10);

    let showSchedule = () => {
        // create a div to hold the schedule
        let wrapper = document.createElement('div');

        wrapper.setAttribute("id", "wrapper");
        wrapper.style.borderStyle = "inset";
        wrapper.style.borderColor = "grey";
        wrapper.style.overflow = "hidden";
        wrapper.style.height = "400px";
        wrapper.scrolling = "no";

        // create an iframe to show the schedule
        let iframe = document.createElement('iframe');

        // the iframe is styled such that it scrolls to focus on the schedule
        iframe.style.width = "100%";
        iframe.style.height = "1000%";
        iframe.style.marginLeft = "-45px";
        iframe.style.marginTop = "-300px";
        iframe.style.overflow = "hidden";
        iframe.style.pointerEvents = "none";
        iframe.src = 'https://acad.app.vanderbilt.edu/more/GetSchedule!input.action#scheduleTable';

        // add the wrapper to the page and the iframe to the wrapper
        document.body.appendChild(wrapper);
        (document.getElementById('wrapper')).appendChild(iframe);
<<<<<<< HEAD
    };
});

=======
    }
});
>>>>>>> 340926cc3708f2f0c2454e108a6f9148194a1356
