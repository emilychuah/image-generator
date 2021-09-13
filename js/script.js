const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

const getImage = async function () { //The async keyword enables asynchronous communication between my program and the API.
    const res = await fetch ("https://picsum.photos/v2/list?limit=100"); //The await keyword tells the program to wait on that line in the function until the API data are received.
    const images = await res.json(); //Calling the .json() method on the 'res' response transforms the JSON data into a proper JavaScript object, which can then be used in my code. Since calling .json() on the response is an asynchronous action, use the await keyword.
    console.log(images);
}

getImage();