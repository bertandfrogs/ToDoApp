$('#allTodos').sortable();

$('#container').sortable();

// $('.todoInput').on("keydown", function(event){
//     if(event.which === 13){
//         addTodo();
//     }
// });

$(".xCircle").click(function(){
    $(this).parent().parent().remove();
});

function addList(){
    let currentCounter = Counter();
    $('#container').append("<div class='list' id='list" + currentCounter + "'>\n" +
        "            <div class='heading'>\n" +
        "                <input class='listTitle' placeholder='Write a title for your list...'>\n" +
        "                <i class='xCircle fas fa-times-circle'></i>\n" +
        "            </div>\n" +
        "            <div class='allTodos'>\n" +
        "                <div class='todo-container'>\n" +
        "                    <div class='todo-left'>\n" +
        "                        <i class='checkBox far fa-square' onclick='check(this)'></i>\n" +
        "                    </div>\n" +
        "                    <div class='todo-right'>\n" +
        "                        <input class='todoInput' type='text' placeholder='Write a to-do...'>\n" +
        "                        <i class='xCircle fas fa-times-circle'></i>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "            <div class='todo-add' id='add" + currentCounter + "' onclick='addTodo(this)'>\n" +
        "                <i class='fas fa-plus-square'></i>\n" +
        "                <p>Add a new task in this list</p>\n" +
        "            </div>\n" +
        "        </div>");

    $(".xCircle").click(function(){
        $(this).parent().parent().remove();
    });
}

function addTodo(specificList){
    let listId = ($(specificList).parent()[0].id);
    let listNum = Number(listId.replace('list', ''));

    $("#" + listId + " .allTodos").append("<div class='todo-container'>\n" +
       "                <div class='todo-left'>\n" +
       "                    <i class='checkBox far fa-square' onclick='check(this)'></i>\n" +
       "                </div>\n" +
       "                <div class='todo-right'>\n" +
       "                    <input class='todoInput' type='text' placeholder='Write a to-do...'>\n" +
       "                    <i class='xCircle fas fa-times-circle'></i>\n" +
       "                </div>\n" +
       "            </div>");

    $(".xCircle").click(function(){
       $(this).parent().parent().remove();
    });
}

function check(element){
    classValue = $(element).hasClass('fa-square');
    if(classValue === true){
        $(element).removeClass("fa-square");
        $(element).addClass("fa-check-square");
    }
    else{
        $(element).removeClass("fa-check-square");
        $(element).addClass("fa-square");
    }
}

function clearChecked(){
    $('.fa-check-square').parent().parent().remove();
}

let counter = 0;
function Counter(){
    counter++;
    return counter;
}