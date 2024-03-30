      //Display current time and date
      // create a function to update the date and time
      function updateDateTime() {
        // create a new `Date` object
        const now = new Date();

        // get the current date and time as a string
        const currentDateTime = now.toLocaleString();

        // update the `textContent` property of the `span` element with the `id` of `datetime`
        document.querySelector('#datetime').textContent = currentDateTime;
      }

      // call the `updateDateTime` function every second
      setInterval(updateDateTime, 1000);


      // Add Spinner to buttons
      function spinner() {
        document.getElementById("act-btn").innerHTML = `
        <span class="spinner-border spinner-border-sm"></span>
        `
        document.getElementById("ser-btn").innerHTML = `
        <span class="spinner-border spinner-border-sm"></span>
        `
        return;
        } 