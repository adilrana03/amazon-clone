var image = 0;
print(image);
function print(image) {
  var arr = [
    "<img src='https://m.media-amazon.com/images/I/61S6U1s59OL._SX3000_.jpg'></img>",
    "<img src='https://m.media-amazon.com/images/I/A1sRoq1kHdL._SX3000_.png'></img>",
    "<img src='https://m.media-amazon.com/images/I/71NCXxTGJCL._SX3000_.jpg'></img>",
    "<img src='https://m.media-amazon.com/images/I/71kiPjo0dnL._SX3000_.jpg'></img>",
    "<img src='https://m.media-amazon.com/images/I/71cac9idZML._SX3000_.jpg'></img>",
  ];

  let header = document.getElementById("show1"); //image append in this div
  header.innerHTML = arr[0];
  setInterval(function () {
    if (image == arr.length) {
      flag = 0;
    }
    header.innerHTML = arr[image];
    image++;
  }, 5000);
}