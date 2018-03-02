$(function() {
	// Initialize collapse button
  $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();
});


$(function() {
    $(document).ready(function(){
      $('.slider').slider({full_width: true});
    });
});

$(function() {
    $(document).ready(function() {
      $('select').material_select();
    });
});

$(function() {
    $('.fixed-action-btn').openFAB();
    $('.fixed-action-btn').closeFAB();
    $('.fixed-action-btn.toolbar').openToolbar();
    $('.fixed-action-btn.toolbar').closeToolbar();
});

$(function() {
  $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });
  $('#modal1').modal('close');
});

$(function() {
  $('.carousel.carousel-slider').carousel({full_width: true});
  $(document).ready(function(){
      $('.parallax').parallax();
    });
        
});

$(function() { 
  $(document).ready(function() {
    Materialize.updateTextFields();
  });    
});

$(function() { 
   $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15,// Creates a dropdown of 15 years to control year
        format: 'yyyy/mm/dd',
        weekdaysLetter: ['日', '一', '二', '三', '四', '五', '六'],
        today: '今天',
        clear: '清除',
        close: '關閉',
        monthsFull: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        monthsShort: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        weekdaysFull: ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
    });    
});

$(function() { 
  $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 240
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    }
  );        
});
