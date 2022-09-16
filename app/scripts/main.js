/****************************************

MAIN JS FILE


$(document).ready(function(){
	//run code on document ready
});

$(window).on('load', function() {
	//run code on window fully loaded
});


****************************************/
$(document).ready(function(){
	console.log('main.js connected');
});




/********************************************

FOUC [Flash Of Unstyled Content]

- <body> element gets an inline opacity: 0; that is overridden here

********************************************/
$(window).on('load', function() {
	$('body').css('transition', '.15s ease-in-out');
 	$('body').css('opacity', '1');
});


/********************************************

FORM BEHAVIOR

********************************************/

/***** Disable Submit Button While Submitting *****/
$(document).ready(function(){
	$('#cidbForm').on('submit', function() {
		//target = $('#cidbForm').find('input[type="submit"]');
		$('#cidbForm').find('input[type="submit"]').addClass('disable');
		$('#cidbForm').find('input[type="submit"]').attr('value', 'SUBMITTING');
		setTimeout(function() { 
		        $('#cidbForm').find('input[type="submit"]').removeClass('disable');
		        $('#cidbForm').find('input[type="submit"]').attr('value', 'SUBMIT');
		    }, 3000);
	});
});


/***** Character Count *****/
	$(document).ready(function(){
		function countChars(obj){
		    var maxLength = 200;
		    var strLength = obj.value.length;
		    
		    if(strLength >= maxLength){
		        document.getElementById('charNum').innerHTML = '<span style="color: red;">'+strLength+' out of '+maxLength+' characters</span>';
		    }else{
		        document.getElementById('charNum').innerHTML = strLength+' out of '+maxLength+' characters';
		    }
		}
	});
	

/***** Country Selection *****/  
	$(document).ready(function(){
		$("#CP_Country").change(function(){	
			$("#PR_4_92_1 option")		
			if ($("#CP_Country option:selected")[0].value === "GB") {
				$("#PR_4_92_1").val('75');
			} else if ($("#CP_Country option:selected")[0].value === "IE") {
				$("#PR_4_92_1").val('99');
			} else{
				//do nothing
				console.log("invalid country selection");
			}

			console.log($("#PR_4_92_1").val());
		})
	});

