class UI {
  constructor() {
    this.uiContainer = document.getElementById("content");
    this.city;
    this.defaultCity = "Tanta";
    //const feel = document.getElementById("feelings");


  }

  populateUI(data) {
    const feel = document.getElementById("feelings");

    let unix_timestamp = data.dt
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var date = new Date(unix_timestamp * 1000);
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();
    var month = date.getMonth()
    var day = date.getDay()
    var year = date.getFullYear()
    
    // Will display time in 10:30:23 format
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2) +",  " + month + "/" +day + "/" + year;
    
    this.uiContainer.innerHTML = `
        
        <div id = "entryHolder" >
            <div class="card-body">
                <h3 class="card-title">${data.name}</h3>
                <div id="temp">
                <h4 class=" text-muted"> High: ${data.main.temp_max}<h4>
                <h4> Low: ${data.main.temp_min}</h4></div>
                <div id="date">
                <p class="card-text ">Timezone: ${formattedTime}</p></div>
                <div id = "content">
                <p class="card-text ">Weather conditions are described as: ${data.weather[0].description}</p>
               
                 
                <p class="card-text ">You are feeling: ${feel.value}</p> <div>               
            </div>
        </div>
        
        
        `;
  }

  clearUI() {
    uiContainer.innerHTML = "";
  }

  saveToLS(data) {
    localStorage.setItem("city", JSON.stringify(data));
  }

  getFromLS() {
    if (localStorage.getItem("city" == null)) {
      return this.defaultCity;
    } else {
      this.city = JSON.parse(localStorage.getItem("city"));
    }

    return this.city;
  }

  clearLS() {
    localStorage.clear();
  }
}
