$.ajax({
    type: "GET",
    url: "http://127.0.0.1:3001/getNews",
    success: function (response) {
        response.forEach(i=> {
            document.getElementById("kartyak").innerHTML += kartya(i.pName, i.pDescr, i.price, i.banner);
        });
    },
});


function kartya(name, des, price, banner){
    return `
    <div class="bg-secondary text-light col-md ms-3 mb-3">
        <img src="${banner}" style="width: 10%"/> 
        <p>${name}</p>
        <p>${des}</p>
        <p>${price}</p>
    <div>
    `;
}
