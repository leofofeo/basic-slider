//JS and jQuery for RQ
$('document').ready(function(){
 	setActiveImage(1);
 	var clearTimeoutId = window.setInterval(setIntervalSwitchImage, 3000);
 	storeClearTimeoutId(clearTimeoutId);
});

var GlobalClearTimeoutId = 0;

$('.switch-arrow').on('click', function(){
	var arrowId = $(this).attr('id');
	switchImage(arrowId);
	window.clearTimeout(GlobalClearTimeoutId);
});


var storeClearTimeoutId= function(clearTimeoutId){
	GlobalClearTimeoutId = clearTimeoutId;
}

var getNextImageId = function(arrowId, currentImageId){
	var newImageId = 0;
	if(arrowId === 'previous'){
		if(currentImageId === 1){
			newImageId = 9;
		} else {
			newImageId = currentImageId - 1;
		}
	} else {
		if(currentImageId === 9){
			newImageId = 1;
		} else {
			newImageId = currentImageId + 1;
		}	
	}
	
	return newImageId;

}


var setIntervalSwitchImage = function(){
	switchImage('next');
}

var switchImage = function(arrowId){
	var currentImageId = getCurrentImageId();
	var newImageId = getNextImageId(arrowId, currentImageId);
	setActiveImage(newImageId);
}

var getCurrentImageId = function(){
	for(var i = 1; i < 10; i++){
		if($('#slide-' + i).hasClass('active')){
			return i;
		}
	}
}


var setActiveImage = function(newImageId){
	$('.slide').removeClass('active');
	$('#slide-' + newImageId).addClass('active').show();
	for(var j = 1; j < 10; j++){
		if(!$('#slide-'+j).hasClass('active')){
			$('#slide-'+j).hide();
		}
	}
}
