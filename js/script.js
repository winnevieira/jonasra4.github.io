// $( "button" ).mouseenter(function() {
// 	 $(this).find("circle").each(function() {
// 	    $(this).attr("stroke", "#715EEE"); 
// 	 });
// 	}).mouseleave(function() {
// 	  $(this).find("circle").each(function() {
// 	    $(this).attr("stroke", "#C4C4C4"); 
// 	 });
// });


 $(document).ready(function() {
    $('button').hover(
       function () {
         	$(this).find("circle").each(function() {
				$(this).attr("stroke", "#715EEE");
			});
       }, 
       function () {
 	        $(this).find("circle").each(function() {
				$(this).attr("stroke", "#C4C4C4");
			});
       }
    );

    $("button").click(function() {
    	//cor dos botoes
    	$( ".atv" ).removeClass("atv");
    	$( ".cirati" ).removeClass("cirati");


		$(this).addClass("atv");
		$(this).find("circle").each(function() {
			$(this).attr("stroke", "#C4C4C4");
    		$( this ).addClass("cirati");
		});

		// show hide divs

		var identificao = $(this).attr("tag");

		$(".show").addClass("hide");
		$(".show").removeClass("show");

		$("#"+ identificao).addClass("show");
		$("#"+ identificao).removeClass("hide");
	});


	var porcentagens = [];
    //pega todas as porcentagens no html
    $(".progress-bar").each( function(index, value) {
	 porcentagens.push($(this).css('width'));
	});

    //zera todas as porcentagens
	$( ".progress-bar" ).css("width", "0%");

	$( "#code" ).click(function() {
	    var j = 0;
	   	// seta as porcentagens	

		setTimeout(function(){
			$(".progress-bar").each( function(index, value) {
		    	$( this ).css("width",porcentagens[j] );
		    	console.log("asda");
			    j++;
			});
		}, 1);

	});

});

