$.ajax({
    url: "https://data.sfgov.org/resource/vmnk-skih.json",
    type: "GET",
    data: {
      "$limit" : 5000,
      "$$app_token" : "wezWlNDbYa280TiouIgUJC0Jq"
    }
}).done(function(data) {
  alert("Retrieved " + data.length + " records from the dataset!");
  console.log(data);
});
