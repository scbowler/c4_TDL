var todo_items_array = [];
var todo_items_object = {
    title: null,
    details: null,
    timeStamp: null
};

function get_todo_items() {
    $.ajax({
        dataType: 'json',
        url: 'assets/get_todo_items.json',
        crossDomain: true,
        success: function(response) {
            window.response = response;
            console.log('loaded', response);
            todo_items_array = response;
            list_items();
        }

    })

}

function add_list_item() {
    var add_item = Object.create(todo_items_object);
    add_item.title = $('#title').val();
    add_item.details = $('#details').val();
    add_item.timeStamp = $('#due_date').val();
    todo_items_array.push(add_item);
    list_items();
}

function list_items() {
    $('.list_of_items').empty();
    for (var i = 0; i < todo_items_array.length; i++) {
        var list_container = $('<div>').addClass('col-xs-12 well');
        var checkbox_container = $('<div>').addClass('col-xs-4');
        var checkbox = $('<i>').addClass('fa fa-square-o fa-2x');
        var title = $('<div>').addClass('col-xs-4').html(todo_items_array[i].title);
        var date = $('<div>').addClass('col-xs-4').html(todo_items_array[i].timeStamp);
        var details = $('<div>').addClass('col-xs-12').html(todo_items_array[i].details);


        checkbox_container.append(checkbox);
        list_container.append(checkbox_container, title, date, details);
        $('.list_of_items').append(list_container);


    }
}
// function search_autocomplete() {
//         var item_list = [];
//         var search_input = $('#search').val();
//         if (search_input != '') {
//                 if (todo_items_array[i].title.toLowerCase().indexOf(course_input) == 0) {
//                     item_list.push(todo_items_array[i].title);
//                 }
//             }
//              return item_list;
//         }
        // if (course_input == '' || course_list.length < 1) {
        //     $('ul').removeClass('course_border');
        // }
       


// function search_items() {
//     item_list = [];
//     var new_list_items = search_autocomplete();
//     for (var i = 0; i < new_list_items.length; i++) {
//         var list_item = $('<li>').html(new_list_items[i])
//         $('ul').append(list_item);

//     }
// }
$(document).ready(function() {
    $('.list_item').click(get_todo_items);
    $('.add_item').click(add_list_item);
    // $('#search').keydown(search_items);


});
