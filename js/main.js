$(function(){
    var e = document.forms['form'];
    e = e.getElementsByTagName('label');
    var num2 = e.length;

    var $checkboxes = $('#form1, #form2, #form3, input[type="checkbox"]');

    $checkboxes.change(function(){
        var countCheckedCheckboxes = $checkboxes.filter(':checked').length;
        $('#count-checked-checkboxes, #count-checked-checkboxes2, #count-checked-checkboxes3').text('Name of Section ' + countCheckedCheckboxes);
    });

    $('#numOfQuestions, #numOfQuestions2, #numOfQuestions3').append( "/" + e.length);

});