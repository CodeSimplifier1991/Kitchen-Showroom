// Getting all the elements with the class of '.collapsible'
const collapsible = document.querySelectorAll(".collapsible");

/* Loop through all the items with class of 'collapsible', 
On the 'click' event, go through the list of classes
if the 'collapsible--expanded' class exist, remove it
else add it
*/
collapsible.forEach((item) => {
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  });
});
