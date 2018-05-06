$(document).ready(function () {

  //hamburger manu 漢堡選單
  $('#hamburgermanu').click(function (e) {
    e.preventDefault();
    // $('body').delay(500).toggleClass('menu-show');
    $('.header-menu ul').slideToggle(600);
  });

  //scroll menu移動效果
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

  //視窗滾動觸發效果
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
    // progress bar 技能屬性條效果
    var skillTop = $('#skills').position().top;
    // console.log('skillTop', skillTop);
    if (skillTop <= (scrollPos + windowHeight * 0.8) && !showSkill) {
      showSkill = true;

      //橫屬性條
      $('#skills .skills-progress-bar').each(function () {
        let thisValue = $(this).data('progress');
        $(this).css('width', thisValue + '%');
      });

      // $('#skills .skills-progress-bar-y').each(function () {
      //   let thisValue = $(this).data('progress');
      //   $(this).delay(5000).css('height', thisValue + '%');
      // });

      //直屬性條
      $('#skills .skills-chart-bar').each(function () {
        let thisValue = $(this).data('progress');
        // $(this).css('height', thisValue + '%');
        $(this).animate({
          height: thisValue + '%'
        }, 1000);
      });
    }

    // animated 淡入效果
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

 // gotop 置頂
  $('.top').click(function (e) { 
    e.preventDefault();
    $('html,body').animate({scrollTop:0},1300);
  });

  //Nivo slider
  $(window).on('load', function () {
    $('#slider').nivoSlider({
      effect: 'fade', // Specify sets like: 'fold,fade,sliceDown' 
      slices: 15, // For slice animations 
      boxCols: 8, // For box animations 
      boxRows: 4, // For box animations 
      animSpeed: 500, // Slide transition speed 
      pauseTime: 5000, // How long each slide will show 
      startSlide: 0, // Set starting Slide (0 index) 
      directionNav: false, // Next & Prev navigation 
      controlNav: true, // 1,2,3... navigation 
      controlNavThumbs: false, // Use thumbnails for Control Nav 
      pauseOnHover: true, // Stop animation while hovering 
      manualAdvance: false, // Force manual transitions 
      prevText: 'Prev', // Prev directionNav text 
      nextText: 'Next', // Next directionNav text 
      randomStart: false, // Start on a random slide 
      beforeChange: function () {}, // Triggers before a slide transition 
      afterChange: function () {}, // Triggers after a slide transition 
      slideshowEnd: function () {}, // Triggers after all slides have been shown 
      lastSlide: function () {}, // Triggers when last slide is shown 
      afterLoad: function () {} // Triggers when slider has loaded 
    });

  });
  //文字閃爍
  var i = 0;

  function blinker() {
    if (i == 0) {
      $('.blink').text('Welcome To My Work !!').fadeIn(800).delay(2000).fadeOut(800);
      i = i + 1;
    } else {
      $('.blink').text('Web Design - UI Design - FrontEnd Development').fadeIn(800).delay(2000).fadeOut(800);
      i = i - 1;
    }
  }
  setInterval(blinker, 4000);

});