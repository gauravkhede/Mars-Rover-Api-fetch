
var input=$('#datepicker').datepicker({dateFormat:'yy-mm-dd'});
var nasaImage=$('#mars-image-container');
$('form button').click(function(e){
	e.preventDefault();
	var date=input.val();
	if(date===""){
		alert('Please fil the date field');
		return;
	}
	let url="https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date="+date+"&api_key=DEMO_KEY";
	$.get(url,function(data){
		let photos=data.photos;
		if(photos.length===0){
			alert("No photos available for this date.");
            return;		
		}
		$('#mars-image-container img').remove();
		for(let photo of photos){
			let imageSrc=photo.img_src;
			$('#mars-image-container').append('<img src="'+imageSrc+'">');
		}

	});


});