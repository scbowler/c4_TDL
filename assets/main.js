var to_do_items = [];
function get_todo_items() {
        $.ajax({
            dataType: 'json',
            url: 'assets/get_todo_items.json',
            crossDomain: true,
            success: function(response) {
                window.response = response;
                console.log('loaded', response);
                to_do_items = to_do_items.concat(response.data);
                
            }
        })
    }