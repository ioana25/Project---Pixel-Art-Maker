// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    //defining variables
    var height = $("#input_height").val();
    var width = $("#input_width").val();

    var canvas = $("#pixel_canvas");

//reset tabele(grid)
    $("tbody").remove();

    //generate columns and lines
    for (var c = 0; c < height; c++) {
        canvas.append("<tr></tr>");
    }
    for (var r = 0; r < width; r++) {
        canvas.find('tr').append("<td></td>");
    }
}
//select color event
$("table").on("click", "td", function () {
    var color = $("#colorPicker").val();
    $(this).css("background-color", color);
});

//generate grid
$("form").on("submit", function(){
    event.preventDefault();
    makeGrid();
});
