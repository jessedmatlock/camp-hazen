$(document).foundation();
$('.colors:not(.manual)').each(function () {
    var str = $(this).find('a').text();
    str = '<span>' + str.split(/\s+(?!&)/).join('</span> <span>') + '</span>';
    $(this).find('a').html(str); 
});
$(".home #top-header").backstretch("http://camp-hazen.com/wp-content/themes/revive-master/img/slide.jpg");	
