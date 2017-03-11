$(document).ready(function() {

    $("ul").on("click", "li", function() {
        $(this).toggleClass("completed");
    });

    $("ul").on("click", "span", function(event) {
        $(this).parent().fadeOut(500, function() {
            $(this).remove();
        })
        event.stopPropagation();
    });

    $("input[type='text']").keypress(function(event) {

        if (event.keyCode === 13) {
            var newTodo = $(this).val();
            $(this).val("");
            //My Solution
            //$("li").last().after("<li><span>X</span> " + newTodo + "</li>");
            //Colt's Solution
            $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + newTodo + "</li>");
        }

    });

    $(".fa-plus").click(function() {
        $("input[type='text']").fadeToggle();
    });

}); //end of document rady