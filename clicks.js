$(document).ready(function(){


$('#button').click(function() {
	console.log("smiec");
    $.post( "https://swiftscript.mybluemix.net/", $('#button').text(), function(data) {
    	$('#right').text(data);	
    });	
});
});
