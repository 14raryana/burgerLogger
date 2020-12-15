$(function() {
    $("#submitBtn").on("click", function(event) {
        event.preventDefault();
        var burgerName = $("#burgerNameInput").val();
        $.ajax({
            url: "/api/burgers",
            data: {burgerName},
            success: function(result) {
                alert(result);
            },
            error: function(result) {
                alert("error");
            }
        });
    });
});