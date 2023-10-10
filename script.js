var today = dayjs();
$('#currentDay').text(today.format('dddd, MMMM D YYYY, h:mm:ss a'));

var timeBlockEl = document.querySelector('.container');

$('.saveBtn').on('click', function () {
 
  var textValue = $(this).siblings('.description').val();
 
  var timeKey = $(this).parent().attr('id');

  // save in local storage
  localStorage.setItem(timeKey, textValue);
});

// Get item from local storage if any
$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));

// Function to track tasks and make them change colors if they are in the past, present or future
function auditTask() {

  var currentHour = today.hours();


  $('.time-block').each(function () {
    var timeId = parseInt($(this).attr('id').split("hour")[1]);

    if (timeId < currentHour) {
      $(this).addClass('past');
    } 
    else if (timeId === currentHour) {
      $(this).removeClass('past');
      $(this).removeClass('future');
      $(this).addClass('present');
    } 
    else {
      $(this).removeClass('past');
      $(this).removeClass('present');
      $(this).addClass('future');
    }
  });
}

function auditTask() {


  $('.row-detail').each(function () {
    var timeId = parseInt($(this).attr('id').split("hour")[1]);

    if (timeId < currentHour) {
      $(this).addClass('past');
    } 
    else if (timeId === currentHour) {
      $(this).removeClass('past');
      $(this).removeClass('future');
      $(this).addClass('present');
    } 
    else {
      $(this).removeClass('past');
      $(this).removeClass('present');
      $(this).addClass('future');
    }
  });
}

setTimeout(function () {
  
  location = '';
}, 1000 * 60);