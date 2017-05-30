$(function(){
    var e = document.forms['form1'];
    e = e.getElementsByTagName('label');
    var num2 = e.length;

    var $checkboxes = $('#form1 input[type="checkbox"]');

    $checkboxes.change(function(){
        var countCheckedCheckboxes = $checkboxes.filter(':checked').length;
        $('#count-checked-checkboxes').text('Name of Section ' + countCheckedCheckboxes);

        //$('#edit-count-checked-checkboxes').val(countCheckedCheckboxes);
    });

    $('#numOfQuestions').append( "/" + e.length);


});