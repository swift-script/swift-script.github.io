$(document).ready(function(){


$('#button').click(function() {
	console.log("smiec");
    $.post( "https://swiftscript.mybluemix.net/", "test", function(data) {
    	$('#right').text("test");	
    });	
});
});
