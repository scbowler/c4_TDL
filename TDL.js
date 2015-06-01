var todo_items_list = [];
var todo_items_object = {
    title: null,
    details: null,
    timeStamp: null,
    id: null
};
var todo_items_array = [];

function todo_initialize() {
    var todo_initialize = Object.create(todo_items_object);
    todo_initialize.title = $('#title_LI').val();
    todo_initialize.details = $('#details_LI').val();
    todo_initialize.timeStamp = parseFloat($('#timeStamp_LI').val());
    console.log("todo_object: ", todo_items_object);
    todo_items_array.push(todo_initialize);
}

function populate_todo_list() {
    $('#display_list').empty();
    for (var i = 0; i < todo_items_array.length; i++) {
        var TD_item = $("<div>", {
            class: 'TD_item col-xs-12 col-md-12',
            id: i,
            data_index: i
        });
        var list_item_num = $("<div>", {
            class: 'list_item_num',
            text: "list item number: " + i
        });

        var timestamp = $("<div>", {
            class: 'to_do_timestamp',
            text: "time: " + todo_items_array[i].timeStamp,
        });

        var title = $("<div>", {
            class: 'to_do_title',
            text: "title: " + todo_items_array[i].title,
        });

        var details = $("<div>", {
            class: 'to_do_details',
            text: "details: " + todo_items_array[i].details,
        });

        $(TD_item).append(list_item_num, title, details, timestamp);
        $('#display_list').append(TD_item);
    }
}

function populate_todo_single() {
    var iLN = parseFloat($('#id_LI').val());
    console.log("item list number chosen: ", iLN);
    console.log("todo_items_array: ", todo_items_array);
    for (var i = iLN; i < (iLN+1); i++) {
        var TD_item = $("<div>", {
            class: 'TD_item col-xs-12 col-md-12',
            id: (i-1),
            data_index: (i-1)
        });
        var list_item_num = $("<div>", {
            class: 'list_item_num',
            text: "list item number: " + (i)
        });

        var timestamp = $("<div>", {
            class: 'to_do_timestamp',
            text: "time: " + todo_items_array[i-1].timeStamp,
        });

        var title = $("<div>", {
            class: 'to_do_title',
            text: "title: " + todo_items_array[i-1].title,
        });

        var details = $("<div>", {
            class: 'to_do_details',
            text: "details: " + todo_items_array[i-1].details,
        });

        $(TD_item).append(list_item_num, title, details, timestamp);
        $('#display_list').append(TD_item);
    }
}

function get_TDL_json_populate_multiple() {
    console.log("ajax call");
    $.ajax({
        dataType: 'json',
        url: 'get_todo_items.json',
        method: 'GET',
        cache: false,
        crossDomain: true,

        success: function(response) {
            todo_items_array = [];
            global_response = response;
            todo_items_array = todo_items_array.concat(global_response);
            console.log("response: ", response);
            console.log("response: ", global_response);
            console.log('todo_items_array: ', todo_items_array);
            populate_todo_list();
        }
    });
}

function get_TDL_json_populate_single() {
    console.log("ajax call");
    $.ajax({
        dataType: 'json',
        url: 'get_todo_items.json',
        method: 'GET',
        cache: false,
        crossDomain: true,

        success: function(response) {
            todo_items_array = [];
            global_response = response;
            todo_items_array = todo_items_array.concat(global_response);
            console.log("response: ", response);
            console.log("response: ", global_response);
            console.log('todo_items_array: ', todo_items_array);
            populate_todo_single();
        }
    });
}

$(document).ready(function() {
    $('#add_LI').click(function() {
        todo_initialize();
        populate_todo_list();
    });
    $('#pull_json').click(function() {
        get_TDL_json_populate_multiple();

    })
    $('#single_pull_json').click(function() {
        get_TDL_json_populate_single();

    })
});
