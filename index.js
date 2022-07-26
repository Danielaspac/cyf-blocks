var pictures, current;


pictures = ['https://www.tripsavvy.com/thmb/z-SvrgxOAdXfJaakmeeGuPtc-Mo=/375x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-458234687-5b48ce13c9e77c0037ad27b3.jpg', 'https://www.simplyrecipes.com/thmb/msM5TVo6eVt50ITnlzW63NYd_tc=/648x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Mint-ChocolateChip-LEAD-1-238fca38e0a14785b04c8754e438ef14.jpg', 'https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2022-04/kittens-cat-cat-puppy-rush-45170.jpeg?itok=NpmyBY9k'];
let element_list = document.getElementById('list');
let new_img = document.createElement('img');
let element_image = document.getElementById('image');
element_image.setAttribute("src", pictures.shift());

element_list.appendChild(new_img);


document.getElementById('button').addEventListener('click', (event) => {
  current = pictures.shift();
  let element_image2 = document.getElementById('image');
  element_image2.setAttribute("src", current);

});
