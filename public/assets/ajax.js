$(() => {
$("#btn btn-light .devour").on("click", function(e) {
    e.preventDefault();

    var id = $(this).data("id");
    var devoured = {
        devoured: true
}; 

$.ajax("/api/burgers/" + id, {
    type: "PUT",
    data: devoured 
}).then(() => {
    console.log("Ate le burger");
    location.reload();
});
});

$("#btn btn-lighty").on("click", function(e) {
    e.preventDefault();

    if($("#btn btn-ligh").val().trim() !== "") {
        var newBurger = {
            burger_name: $("#btn btn-ligh").val().trim(),
            devoured: false
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(() => {
            console.log("Ordered a new burgarr!");
        });
    }
});
});
