chrome.extension.sendMessage({}, () => {
  const showSchedule = () => {
    // create a div to hold the schedule
    const wrapper = document.createElement('div');

    wrapper.setAttribute('id', 'wrapper');
    wrapper.style.borderStyle = 'inset';
    wrapper.style.borderColor = 'grey';
    wrapper.style.overflow = 'hidden';
    wrapper.style.height = '400px';
    wrapper.scrolling = 'no';

    // create an iframe to show the schedule
    const iframe = document.createElement('iframe');

    // the iframe is styled such that it scrolls to focus on the schedule
    iframe.style.width = '100%';
    iframe.style.height = '1000%';
    iframe.style.marginLeft = '-45px';
    iframe.style.marginTop = '-300px';
    iframe.style.overflow = 'hidden';
    iframe.style.pointerEvents = 'none';
    iframe.src = 'https://acad.app.vanderbilt.edu/more/GetSchedule!input.action#scheduleTable';

    // add the wrapper to the page and the iframe to the wrapper
    document.body.appendChild(wrapper);
    document.getElementById('wrapper').appendChild(iframe);
  };

  const readyStateCheckInterval = setInterval(() => {
    if (document.readyState === 'complete') {
      clearInterval(readyStateCheckInterval);

      // if the schedule is not already on the page, and you're on a YES page, add it
      if (
        document.getElementById('wrapper') === null
        && document.getElementsByTagName('h1')[2] !== undefined
        && document.getElementsByTagName('h1')[2].innerText === 'Enrolled'
      ) {
        showSchedule();
      }
    }
  }, 10);
});
