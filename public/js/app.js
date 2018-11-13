PR.prettyPrint();

var items = document.querySelectorAll('[class*="example-"] .item');

items.forEach(function(item) {
	var wrapper = document.createElement("div");
	wrapper.classList.add("item-wrapper");
	item.parentNode.insertBefore(wrapper, item);
	wrapper.appendChild(item);
});
