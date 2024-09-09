const search_bus = document.querySelector("#search_bus");

document.querySelector("#search_bus").addEventListener("click", (e) => {

    var departure = "";
    var destination = [];

    fetch("http://localhost:8000/search").then((res) => {
        return res.json();
    }).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log("error", err);
    })

})

