var todoObject = {
	id: '',
	user_id: 1,
	timeStamp: '', 
	details: ''
}

function get_todo(){
$.ajax({
	dataType: 'json',
	method: 'GET',
	url:'',
	crossDomain: true,
	cache: false,
	success: function(reponse){
		console.log("response ", response)
	}

})
} //end of function

$(document).ready(function(){
	get_todo();

$('#todo_item').focus(function() {
  $(this).val('');
})

$('.add').click(function(){
	var input = $('#todo_item').val();
	console.log("input ", input);

	if(input.length > 0){
		$('#list').append('<li class=' + 'remove' + '>' + input + '</li>');
		  } else {
    console.log("append ", append);
  }
	
	$('#todo_item').val(''); //resets to no text in input
});


//remove it
$('#list').on('click', '.remove', function(){
$(this).hide('2000', function(){
	$(this).remove();
});
});

});//don't touch

