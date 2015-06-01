function add_LI_modal() {
    document.getElementById("title_LI").showModal();
}

var todo_items = [];

function get_TDL_json() {
        console.log("ajax call");


        $.ajax({
            dataType: 'json',
            url: 'http://localhost/lf_projects/sandbox/c4_TDL/get_todo_items.json',
            method: 'GET',
            cache: false,
            crossDomain: true,

            success: function(response) {

                global_response = response;
                console.log("response: ", response);
                console.log("response: ", global_response.data);
                for (var i = 0; i < global_response.length; i++) {
                    var TD_item = $("<div>", {
                        class: 'TD_item',
                        id: global_response[i].id,
                        data_index: i
                    });


                    var timestamp = $("<div>", {
                        class: 'to_do_timestamp',
                        text: global_response[i].timestamp
                    });

                    var title = $("<div>", {
                        class: 'to_do_title',
                        text: global_response[i].title
                    });

                    var details = $("<div>", {
                        class: 'to_do_details',
                        text: global_response[i].details
                    });


                    $(TD_item).append(timestamp, title, details);
                    $('#single_list').append(TD_item);
                }
            }
        });
}

        $(document).ready(function() {
            $('#add_LI').click(function() {
                get_TDL_json();
            });
        });
