var current, array;


array = ['https://oceanvisions.org/wp-content/uploads/2021/09/joseph-barrientos-oQl0eVYd_n8-unsplash-Custom.jpg', 'https://image.shutterstock.com/image-photo/beach-tropical-sea-600w-664029658.jpg', 'https://image.shutterstock.com/image-photo/coconut-palm-trees-grow-on-600w-723806818.jpg'];
let element_image = document.getElementById('image');
element_image.setAttribute("src", array.shift());


document.getElementById('button').addEventListener('click', (event) => {
  current = array.pop();
  let element_image2 = document.getElementById('image');
  element_image2.setAttribute("src", current);
  array.unshift(current);

});

document.getElementById('button2').addEventListener('click', (event) => {
  current = array.shift();
  let element_image3 = document.getElementById('image');
  element_image3.setAttribute("src", current);
  array.push(current);

});