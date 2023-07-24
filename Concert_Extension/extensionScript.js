async function fetchData() {
  const url =
    "https://concerts-artists-events-tracker.p.rapidapi.com/location?name=London&minDate=2023-07-25&maxDate=2023-07-28&page=1";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "20cb1ca371msh009ea5c24ce3149p1720dcjsncdfbc97339de",
      "X-RapidAPI-Host": "concerts-artists-events-tracker.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    document.getElementById("concerts").innerHTML = result.data
      .map((item) => `<li>${item.name}</li>`)
      .join("");
  } catch (error) {
    console.error(error);
  }
}

fetchData();
