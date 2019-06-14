$(document).ready(function () {

    $("h6").click(function () {
        if (!$(this).next().hasClass("stop")) {
            $(this).next().addClass("stop");
            $(this).next().hide(100);
            this.lastChild.children[0].classList.replace("fa-minus", "fa-plus")
        } else {
            $(this).next().removeClass("stop");
            $(this).next().show(100);
            this.lastChild.children[0].classList.replace("fa-plus", "fa-minus")
        }
    })


    $(window).scroll(function () {
        if (scrollY > 140) {
            $("header").css("boxShadow", "0 10px 20px #ccc");
        } else {
            $("header").css("boxShadow", "0px 0px 0px lightgray");
        }
    })




})
$(function() {
    $('input[name="daterange"]').daterangepicker({
      opens: 'left'
    }, function(start, end, label) {
      console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });



    $('input[name="datetimes"]').daterangepicker({
        timePicker: true,
        startDate: moment().startOf('hour'),
        endDate: moment().startOf('hour').add(32, 'hour'),
        locale: {
          format: 'M/DD hh:mm A'
        }
      });

      $(function() {
        $('input[name="daterange"]').daterangepicker({
          opens: 'left'
        }, function(start, end, label) {
          console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
        });
      });


      var start = moment().subtract(29, 'days');
      var end = moment();
  
      function cb(start, end) {
          $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
      }
  
      $('#reportrange').daterangepicker({
          startDate: start,
          endDate: end,
          ranges: {
             'Today': [moment(), moment()],
             'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
             'Last 7 Days': [moment().subtract(6, 'days'), moment()],
             'Last 30 Days': [moment().subtract(29, 'days'), moment()],
             'This Month': [moment().startOf('month'), moment().endOf('month')],
             'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
          }
      }, cb);
  
      cb(start, end);
  
  });
