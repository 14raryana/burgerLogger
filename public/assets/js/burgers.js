// var selectedBurgerDivRow = $("<div class='row' style='background-color:red'></div>");
// var selectedBurgerCol = $("<div class='col' style='color:blue'></div>");
// var selectedBurgerColContent = $("<textarea readonly></textarea>");
// selectedBurgerColContent.append($("<button>Devour It!</button>"));
// selectedBurgerCol.append(selectedBurgerColContent);
// selectedBurgerColumn.append($("<div class='col' style='background-color:blue'></div>"));
// selectedBurgerCol.append($("<p>HELLO SHITBIRD FUCKFACE</p>"));
// selectedBurgerDivRow.append(selectedBurgerCol);
// $("#homeContainer").prepend(selectedBurgerDivRow);
// selectedBurgerColumn.append("<h1>SHITBIRD</h1>");

$(function() {
    $("#submitBtn").on("click", function(event) {
        event.preventDefault();
        var burgerName = $("#burgerNameInput").val();

        // var burgerDivRow = $("<div class='row' style='background-color:red'></div>");
        // var burgerDivCol = $("<div class='col' style='background-color:blue'></div>");
        // burgerDivCol.append($(`<textarea readonly>${burgerName}</textarea>`));
        // burgerDivCol.append($("<button>Devour It!</button>"))
        // burgerDivRow.append(burgerDivCol);



        // $("#homeContainer").prepend($("<div class='row'>HELLO</div>"))
        // var selectedBurgerDivRow = $("<div class='row' style='background-color:red'></div>");
        // var selectedBurgerCol = $("<div class='col' style='color:blue'></div>");
        // var selectedBurgerColContent = $("<textarea readonly></textarea>");
        // selectedBurgerColContent.append($("<button>Devour It!</button>"));
        // selectedBurgerCol.append(selectedBurgerColContent);
        // selectedBurgerDivRow.append(selectedBurgerCol);
        // $("#homeContainter").prepend(selectedBurgerDivRow);
        // console.log(selectedBurgerColContent);
        // console.log(selectedBurgerCol);
        // console.log(selectedBurgerDivRow);




        if(!burgerName) {
            alert("CANNOT HAVE EMPTY BURGER NAME");
        }
        else {
            alert("CORRECT")
            var burger = {
                burgerName: $("#burgerNameInput").val()
            }
        var burgerName = $("#burgerNameInput").val();
        $.ajax({
            url: "/api/burgers",
            type: "POST",
            data: {burgerName},
            // success: function(result) {
            //     console.log(result);
            //     location.reload();
            //     // alert("hello")
            //     // window.location.replace("/api/burgers");
            //     $("#burgerNameInput").val("");
            //     // $("#homeContainer").prepend($("<h1>HELLO</h1>"));
            //     // selectedBurgerColumn.append()
            //     // $("#homeContainer").append(selectedBurgerColumn);
            //     $("#homeContainer").append(burgerDivRow);
            //     // location.reload();
            //     // window.location.reload();
            //     // $("#homeContainer").append($("<h1>YOOOOOOO</h1>"));
            // },
            // error: function(result) {
            //     alert("error");
            // }
        }).then(function(response) {
            location.reload();
        });
        // .then(function(response) {
        //     console.log(response)
        //     // location.reload();
        // })

        // $.ajax({
        //     url: "/api/burgers",
        //     type: "GET",
        //     data: {
        //         burgerName: burgerName
        //     }
        //     // query: {
        //     //     burger: burgerName
        //     // }
        // });
        }
    });

    $(".devourBtn").on("click", function(event) {
        // alert(this.find(`.${this.}`))
        // var random = "SHit face";
        // alert(random)
        // var hello = random.replace(/\s+/g, '');
        // alert(hello);
        // var burgerName = this.value
        $(`.${this.value}`).hide();

        document.getElementById(`${this.value}`).disabled = true;

        // $(`#${this.value}`).disabled = true;





        // alert(this.value);
        // console.log($(`.${this.value}`));
        // $(`#`)
        // alert(this.id);
        // var hello = $(`div, #${this.id}`);
        // console.log($(`div[dataId=${this.burgerName}]`));
        // $(`div[dataId=${this.burgerName}]`).empty();
    })
});