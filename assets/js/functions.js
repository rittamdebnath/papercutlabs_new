$( document ).ready(function() {

  // Get started!

  $("#faq-1-trigger").click(function(){
    $("#faq-1-content").toggle();
    var icon = $("#faq-1-icon")[0]
    var iconClass = icon.className.includes('down');
    if(iconClass) {
      iconClass = 'fas fa-chevron-up';
    } else {
      iconClass = 'fas fa-chevron-down';
    }    
    icon.className = iconClass;
  });

  $("#faq-2-trigger").click(function(){
    $("#faq-2-content").toggle();
    var icon = $("#faq-2-icon")[0]
    var iconClass = icon.className.includes('down');
    if(iconClass) {
      iconClass = 'fas fa-chevron-up';
    } else {
      iconClass = 'fas fa-chevron-down';
    }    
    icon.className = iconClass;
  });

  $("#faq-3-trigger").click(function(){
    $("#faq-3-content").toggle();
    var icon = $("#faq-3-icon")[0]
    var iconClass = icon.className.includes('down');
    if(iconClass) {
      iconClass = 'fas fa-chevron-up';
    } else {
      iconClass = 'fas fa-chevron-down';
    }    
    icon.className = iconClass;
  });

  $("#faq-4-trigger").click(function(){
    $("#faq-4-content").toggle();
    var icon = $("#faq-4-icon")[0]
    var iconClass = icon.className.includes('down');
    if(iconClass) {
      iconClass = 'fas fa-chevron-up';
    } else {
      iconClass = 'fas fa-chevron-down';
    }    
    icon.className = iconClass;
  });

});