
let minDateFilter = "2020";
let maxDateFilter = "2021";

$(function () {

    $(document).tooltip();

    $('.table-type-1').DataTable({
        "paging": false,
        "searching": false,
        "bInfo": false
    });

    let policyTable = $('.table-type-policy').DataTable({
        "paging": false,
        "searching": false,
        "bInfo": false
    });

    $("#datepicker").datepicker({
        "changeYear": true,
        //"dateFormat": "yy",
        "onSelect": function (date) {
            //minDateFilter = new Date(date).getTime();
            //policyTable.fnDraw();
        }
    }).change(function () {
        minDateFilter = new Date(this.value).getTime();
        //policyTable.fnDraw();
    });

    $("#datepicker-from").datepicker({
        "changeYear": true,
        //"dateFormat": "yy",
        "onSelect": function (date) {
            console.log('BETA: on select');

            //minDateFilter = new Date(date).getTime();
            //policyTable.fnDraw();
        }
    }).change(function () {
        minDateFilter = new Date(this.value).getTime();
        //policyTable.fnDraw();
    });

    $("#datepicker-to").datepicker({
        "changeYear": true,

        //"dateFormat": "yy",
        "onSelect": function (date) {
            console.log('ALPHA: on select');

            //maxDateFilter = new Date(date).getTime();
            //policyTable.fnDraw();
        }
    }).change(function () {
        maxDateFilter = new Date(this.value).getTime();
        //policyTable.fnDraw();
    });


    // Tooltip
    /*$(document).tooltip({
        position: {
            my: "center bottom-20",
            at: "center top",
            using: function (position, feedback) {
                $(this).css(position);
                $("<div>")
                    .addClass("arrow")
                    .addClass(feedback.vertical)
                    .addClass(feedback.horizontal)
                    .appendTo(this);
            }
        }
    });*/


    // init
    var t = setTimeout(function () {

    }, 900);



});

