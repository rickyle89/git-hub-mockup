$(document).ready(function() {
		var cID = client_ID || '';
		var cSECRET = client_Secret ||'';
		var template = _.template( $('#sidebar_template').html() );
		//.template is an actual function not a varible
		var template2 = _.template( $('#sidebar2_template').html() );
		var headtemplate = _.template( $('#header_template').html() );


		//will display all the info and without the id it will grab the data but only 60 times instead of 5000, when push, push it empty
		$.getJSON('https://api.github.com/users/thachmle', {client_id: cID, client_Secret: cSECRET}, function (data){
			//console.log(data;)
			//put info into html with id tag of sidebarh
				$('#sidebar').html(template(data));
					$('#header').html(headtemplate(data));

		});

		$.getJSON('https://api.github.com/users/thachmle/repos', {client_id: cID, client_Secret: cSECRET}, function (data){


			 _.each(data, function(a){	
			 	$("#sidebar2").append( template2(a) );


			 });
		});  

});




