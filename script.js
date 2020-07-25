// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

document.getElementById('button').addEventListener('click',
function() {
	document.querySelector('.bg-modal').style.display = 'flex'
});

document.querySelector('.close').addEventListener('click',
	function(){
		document.querySelector('.bg-modal').style.display = 'none'
	});

function priceCalc() {
	var quantity = document.getElementById('quantity').value;
	var price1 = 550;
	var price2 = 500;
	var price3 = 450;
	var price4 = 400;
	var multiplier;
	var orderPrice;
	if (quantity == 1) {
		multiplier = price1;
		orderPrice = quantity * multiplier;
		document.getElementById('orderPrice').innerHTML = "The total price for your order is: ₱ <strong>" + orderPrice + "</strong> for <strong>" + quantity + "</strong> boxes of <strong><em>Uva Medicinal Tea</em></strong>.";
	} else if (quantity == 2) {
		multiplier = price2;
		orderPrice = quantity * multiplier;
		document.getElementById('orderPrice').innerHTML = "The total price for your order is: ₱ <strong>" + orderPrice + "</strong> for <strong>" + quantity + "</strong> boxes of <strong><em>Uva Medicinal Tea</em></strong>.";
	} else if (quantity >=3 && quantity <= 5) {
		multiplier = price3;
		orderPrice = quantity * multiplier;
		document.getElementById('orderPrice').innerHTML = "The total price for your order is: ₱ <strong>" + orderPrice + "</strong> for <strong>" + quantity + "</strong> boxes of <strong><em>Uva Medicinal Tea</em></strong>.";
	} else if (quantity > 5 && quantity <= 10) {
		multiplier = price4;
		orderPrice = quantity * multiplier;
		document.getElementById('orderPrice').innerHTML = "The total price for your order is: ₱ <strong>" + orderPrice + "</strong> for <strong>" + quantity + "</strong> boxes of <strong><em>Uva Medicinal Tea</em></strong>.";
	} else if (quantity > 10) {
		document.getElementById('orderPrice').innerHTML = "For ordering <strong>" + quantity + "</strong> boxes, please contact us directly on our and get a special discount!";
	}

document.getElementById('orderInstr').innerHTML = "Please make your order through our <a href='https://www.facebook.com/euroherbal/'>official Facebook page</a> or contact us."
	
}