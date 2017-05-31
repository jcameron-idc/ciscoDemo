
// $(function () {
//     var $form = $(this).closest('form');
//     var formName = $form.attr('id');
//
//     // --- count the checkboxes for this form ---
//     var totalCheckboxes = $form.children('input[type="checkbox"]').length;
//
//     // --- place count value in the 'numOfQuestions' p ---
//     var $panel = $form.closest('.panel-default');
//     $panel.find('.numOfQuestions').text('/' + totalCheckboxes);
//
//     //$(this).closest('.panel-heading').find('.numOfQuestions').text('/' + e.length);
//
//     var $checkboxes = $('input[type="checkbox"]').on('change', function() {
//         var count = $(this).closest('.panel-body').find('input:checked').length;
//         $(this).closest('.panel').find('.count-checked-checkboxes').text('Name of Section ' + count);
//     });
//
//     // $checkboxes.change(function () {
//     //     var countCheckedCheckboxes = $checkboxes.filter(':checked').length;
//     //     $(this).siblings('.panel-heading').find('.count-checked-checkboxes').text('Name of Section ' + countCheckedCheckboxes);
//     //     // $('#count-checked-checkboxes, #count-checked-checkboxes2, #count-checked-checkboxes3').text('Name of Section ' + countCheckedCheckboxes);
//     // });
// });



// --- when user changes a checkbox ---
$(document).on('change', 'input[type="checkbox"]', function(e) {
    // --- get the form name ---
    var $form = $(this).closest('form');
    var formName = $form.attr('id');

    // --- count the checkboxes for this form ---
    var totalCheckboxes = $form.children('input[type="checkbox"]').length;

    // --- place count value in the 'numOfQuestions' p ---
    var $panel = $form.closest('.panel-default');
    $panel.find('.numOfQuestions').text('/' + totalCheckboxes);

    // --- count total checkboxes checked ---
    var countCheckedCheckboxes = $form.children('input[type="checkbox"]:checked').length;

    // --- place checked count in 'count-checked-checkboxes' p ---
    $panel.find('.count-checked-checkboxes').text('Name of Section '+countCheckedCheckboxes);

});