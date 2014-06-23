$(document).ready(function() {
		var cID = client_ID || '';
		var cSECRET = client_Secret ||'';
		var template = _.template( $('#sidebar_template').html() );
		var template2 = _.template( $('#sidebar2_template').html() );

		//will display all the info and without the id it will grab the data but only 60 times instead of 5000, when push, push it empty
		$.getJSON('https://api.github.com/users/thachmle', {client_id: cID, client_Secret: cSECRET}, function (data){
			//console.log(data;)
			//put info into html with id tag of sidebarh
				$('#sidebar').html(template(data));

		});

		$.getJSON('https://api.github.com/users/thachmle/repos', {client_id: cID, client_Secret: cSECRET}, function (data){


			 _.each(data, function(a){	
			 	$(".crc").append( template2(a) );
			 });

		});

});

/*
$(document).ready(function() {

var image, title, moneyCode, price;

//run through data and for each elements it finds...the items will be define by the last line
//In this case jQuery will place all of them using .append in the targeted area ".final"
//each element contain '' even if it's inside cource

etsyitems.results.forEach(function(a) {
     image = '<div class="images">' + '<img src="' + a.Images[0].url_570xN + '" style="width: 250px; height: 200px;"/></div>';
     title = '<div class="title">' + a.title + '</div>';
     moneyCode = '<div class="moneyCode">' + a.currency_code + '</div>';
     price = '<div class="price">' + '$' + a.price + '</div>';

//will place items in block title .final in html
//will also add properties of image, title, moneyCode and price
//this div will go into scss and won't show in html, don't mix this up
     $('.final').append('<div class="etsy">' + image + title + moneyCode + price  + '</div>');
});

});
*/




