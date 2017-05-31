// function myFunction() {
//     var x = document.forms[0];
//     var txt = "";
//     var i;
//     for (i = 0; i < x.length; i++) {
//         txt = txt + x.elements[i].value + "<br>";
//     }
//     document.getElementById("demo").innerHTML = txt;
// }
$(function () {
    var e = document.forms[0];
    var numQuestion;
    var i;
    var formName = $(this).e;
    for (i = 0; i < e.length; i++) {
        numQuestion = e.getElementsByTagName('label');
        console.log(numQuestion.length);
    }

    $('#' + formName).closest('.panel-heading').find('.numOfQuestions').text('/' + e.length);

    var $checkboxes = $('input[type="checkbox"], #form1');

    $checkboxes.change(function () {
        var countCheckedCheckboxes = $checkboxes.filter(':checked').length;
        $(this).siblings('.panel-heading').find('.count-checked-checkboxes').text('Name of Section ' + countCheckedCheckboxes);
        // $('#count-checked-checkboxes, #count-checked-checkboxes2, #count-checked-checkboxes3').text('Name of Section ' + countCheckedCheckboxes);
    });
});