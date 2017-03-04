(function($) {

$('#button').on('click', function() {
	console.log("smiec");
    $.post( "https://swiftscript.mybluemix.net/", "test", function(data) {
    	$('#right').text("test");	
    });	
});
})(jQuery);