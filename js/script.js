function showData() {
    event.preventDefault();

    var country = document.getElementById("cname").value;


    var startingdate = document.getElementById("startdate").value;


    var endingdate = document.getElementById("enddate").value;


    var confirmed = document.getElementById("confirmed");


    var active = document.getElementById("active");


    var deaths = document.getElementById("deaths");

    console.log(startingdate);

    if (country == '' || startingdate == '' || endingdate == '') //checking if the input as well as dates are not empty
        alert("enter the required field");

    else {

        var url = "https://api.covid19api.com/country/" + country + "?from=" + startingdate + "T00:00:00Z&to=" + endingdate + "T00:00:00Z";

        // fetch data from the api 
        fetch(url)
            .then((res) => res.json()) // data to json parsing
            .then((res) => {
                console.log(res);

                var length = res.length;
                var index = length - 1;


                var c = res[index].Confirmed;
                var a = res[index].Active;
                var d = res[index].Deaths;

                confirmed.innerHTML = c;
                active.innerHTML = a;
                deaths.innerHTML = d;

                document.getElementById("res").style.display = "block";

            })
    }
}