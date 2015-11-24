
//initialise page
var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
var api_search = "178.62.70.112/features?params=";
var api_features = "178.62.70.112/price?params=";

function callApi(url, obj, callback){
	var queryString = url + encodeURIComponent(JSON.stringify(obj));
	$.get(queryString, function(jsonData) {
		var data = JSON.parse(jsonData);
		callback(data);
	});
}

function bindAnimate(targetElement, animation, element, eventType){
	if(eventType == 'click'){
		$(element).click(function(){
			animate(targetElement, animation);
		});
	}
	else {
		$(element).change(function(){
			animate(targetElement, animation);
		});
	}
}

function animate(targetElement, animation){
	var className = "animated " + animation
	$(targetElement).addClass(className).one(animationEnd, function(){
		$(this).removeClass(className);
	});
}


$(document).ready(function(){
	ui.toggleResults();

	//Bind event handlers
	$('#search-box button').click(function(){
		ui.search.call(ui);
	});
	$('#features-box select').change(function(){
		ui.refine.call(ui);
	});

	//Bind keyup event handler to search box
	$("#search-box input").keyup(function(event){
		if(event.keyCode == 13){
			$("#search-box button").click();
		}
	});


	$("#search-box input").keyup(ui.autoSuggestControl.navigate);
	$("#suggested-box p").hover(ui.autoSuggestControl.hover);


});












