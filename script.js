var g_current_step=1;

//next step
$(document).ready(function(){
		  var current = 1,current_step,next_step,steps;
		  steps = $("fieldset").length;
		  $(".next").click(function(){
			if(checkForm()){
				current_step = $(this).parent();
				next_step = $(this).parent().next();
				next_step.show();
				current_step.hide();				
				current+=1;
				g_current_step+=1;
			}			
		  });
		  $(".previous").click(function(){
			current_step = $(this).parent();
			next_step = $(this).parent().prev();
			next_step.show();
			current_step.hide();
			current-=1;
			g_current_step-=1;			
		  });
		});



//CHECKS
function checkForm(){
	var out=true;	
	var Postcode=$("#Postcode").val();
	var Position=$("select[id=Position]").val();
	var Bedrooms=$("select[id=Bedrooms]").val();
	var Email=$("#Email").val();
	var Telephone=$("#Telephone").val();	
	var FirstNames=$("#FirstNames").val();
	var LastName=$("#LastName").val();	
	var agree=$("#agree").prop("checked",true);
	steps = $("fieldset").length;
	if(g_current_step==1)
	{
		if(!Postcode.length>0){
			$("#Postcode_error").css("visibility","visible");
			out=false;
		}else{
			$("#Postcode_error").css("visibility","hidden");
		}
		if(Position==null){
			$("#Position_error").css("visibility","visible");
			out=false;
		}else{
			$("#Position_error").css("visibility","hidden");
		}
		if(Bedrooms==null){
			$("#Bedrooms_error").css("visibility","visible");
			out=false;
		}else{
			$("#Bedrooms_error").css("visibility","hidden");
		}
	} 
	else if(g_current_step==2)
	{
		if(!FirstNames.length>0){
			$("#FirstNames_error").css("visibility","visible");
			out=false;
		}else{
			$("#FirstNames_error").css("visibility","hidden");
		}
		if(!/^([0-9])*$/.test(Telephone)||(!Telephone.length>0)){
			$("#Telephone_error").css("visibility","visible");
			out=false;
		}else{
			$("#Telephone_error").css("visibility","hidden");
		}
		if(!LastName.length>0){
			$("#LastName_error").css("visibility","visible");
			out=false;
		}else{
			$("#LastName_error").css("visibility","hidden");
		}
		if(!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(Email)){
			$("#Email_error").css("visibility","visible");
			out=false;
		}else{
			$("#Email_error").css("visibility","hidden");
		}
	}
	else if(g_current_step==3)
	{
		if(!agree){
			$("#Agree_error").css("visibility","visible");
			out=false;
		}else{
			$("#Agree_error").css("visibility","hidden");
		}
	}
	return out;
}