// CONTACT BUTTON POPUP
// ====================
$(document).ready(function(){
	$("#contact-button").click(function (e) {
	  e.preventDefault();
	  $(this).hide(); 
	  $("#contact-list").removeClass("hide").addClass("show"); 
	})


})