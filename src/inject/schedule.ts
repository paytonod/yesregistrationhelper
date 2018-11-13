chrome.runtime.sendMessage({}, function(res) {
  let readyStateCheckInterval: number = setInterval(function() {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);

      // Show schedule if on the correct page and schedule div doesn't yet exist
      if (
        document.getElementById("wrapper") === null &&
        document.getElementsByTagName("h1")[2].innerText === "Enrolled"
      ) {
        showSchedule();
      }
    }
  }, 0);

  /**
   * Function to render and display schedule
   */
  function showSchedule(): void {
    // Create a wrapper div for the schedule
    let wrapper: HTMLDivElement = document.createElement("div");

    // Name and style the wrapper div
    wrapper.setAttribute("id", "wrapper");
    wrapper.style.borderStyle = "inset";
    wrapper.style.borderColor = "grey";
    wrapper.style.overflow = "hidden";
    wrapper.style.height = "400px";

    // Disable scrolling in the wrapper div
    wrapper.scrollTop = 0;
    wrapper.scrollLeft = 0;

    // Create an iframe to display the schedule
    let iframe: HTMLIFrameElement = document.createElement("iframe");

    // Style the iframe so it focuses on the schedule
    iframe.style.width = "100%";
    iframe.style.height = "1000%";
    iframe.style.marginLeft = "-45px";
    iframe.style.marginTop = "-300px";
    iframe.style.overflow = "hidden";
    iframe.style.pointerEvents = "none";
    iframe.src = "https://acad.app.vanderbilt.edu/more/GetSchedule!input.action#scheduleTable";

    // Append the wrapper to the bottom of the page
    document.body.appendChild(wrapper);

    // Append the iframe to the wrapper
    document.getElementById("wrapper").appendChild(iframe);
  }
});
