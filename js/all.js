$(document).ready(function () {

  //hamburger manu
$('#hamburgermanu').click(function (e) { 
  e.preventDefault();
  // $('body').delay(500).toggleClass('menu-show');
  $('.header-menu ul').slideToggle(600);
});

//scroll
  var showSkill = false;

  $('.scrollTop').click(function (e) {
    e.preventDefault();
    var target = $(this).attr('href');
    var targetPos = $(target).offset().top;
    $('html, body').animate({
      scrollTop: targetPos - 70
    }, 1000);
    //  targetPos-70 是因為要刪除最上面fixed的header高度
  });

  $(window).scroll(function () {
    var scrollPos = $(window).scrollTop();
    var windowHeight = $(window).height();
    // console.log(scrollPos, windowHeight);

    $('.scrollTop').each(function () {
      var target = $(this).attr('href');
      var targetPos = $(target).offset().top;
      var targetHeight = $(target).outerHeight();
      //   console.log(target,targetPos,targetHeight);

      if (targetPos - 70 <= scrollPos && (targetPos + targetHeight) > scrollPos) {
        // 同理這裡 targetPos -70 也要刪除最上面fixed的header高度
        // console.log(target,targetPos,targetHeight);
        $('.scrollTop').removeClass('active')
        $(this).addClass('active');
      } else {
        $(this).removeClass('active')
      }
    });
    // progress bar
    var skillTop = $('#skills').position().top;
    // console.log('skillTop', skillTop);
    if (skillTop <= (scrollPos + windowHeight * 0.8) && !showSkill) {
      showSkill = true;

      $('#skills .skills-progress-bar').each(function () {
        let thisValue = $(this).data('progress');
        $(this).css('width', thisValue + '%');
      });

      // $('#skills .skills-progress-bar-y').each(function () {
      //   let thisValue = $(this).data('progress');
      //   $(this).delay(5000).css('height', thisValue + '%');
      // });

      $('#skills .skills-chart-bar').each(function () {
        let thisValue = $(this).data('progress');
        // $(this).css('height', thisValue + '%');
        $(this).animate({
          height: thisValue + '%'
        }, 1000);
      });
    }

    // animated
    $('.animated').each(function () {
      var thisPos = $(this).offset().top;
      if ((windowHeight + scrollPos) >= thisPos) {
        $(this).addClass('fadeIn');
      }
    });
    // bg scroll
    //background-position-y是背景用的
    // $('#contact').css('background-position-y', -(scrollPos /5) + 'px');
    //transform用於元素物件
    // $('.section-img-maintitle').css('transform', 'translateY('+-(scrollPos)+'px)');
  });
});