$(function (){ 

      const swiper = new Swiper('.main_swiper', {
        // Optional parameters
         direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.main-swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.main-swiper-button-next',
          prevEl: '.main-swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.main-swiper-scrollbar',
        },
      });
    
      const subSwiper1 = new Swiper('.sub1_swiper', {
        // Optional parameters
         direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.sub1-swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.sub1-swiper-button-next',
          prevEl: '.sub1-swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.sub1-swiper-scrollbar',
        },
      });

      const subSwiper2 = new Swiper('.sub2_swiper', {
        // Optional parameters
         direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.sub2-swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.sub2-swiper-button-next',
          prevEl: '.sub2-swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.sub2-swiper-scrollbar',
        },
      });

      const subSwiper3 = new Swiper('.sub3_swiper', {
        // Optional parameters
         direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.sub3-swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.sub3-swiper-button-next',
          prevEl: '.sub3-swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.sub3-swiper-scrollbar',
        },
      });


      const subSwiper4 = new Swiper('.sub4_swiper', {
        // Optional parameters
         direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.sub4-swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.sub4-swiper-button-next',
          prevEl: '.sub4-swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.sub4-swiper-scrollbar',
        },
      });


      //순차적 애니메이션을 위한 queue처리
      $('section.top h1').addClass('on').queue(function(next) {
        $('section.top p').delay(1000).queue(function(next) {
            $(this).addClass('on');
            $(this).dequeue();
        });
        $(this).dequeue();
    });

  

      $(window).on('scroll', function(){

        let innerH = $(window).height();
        let scrollT = $(document).scrollTop();


        //소개 인터렉션
        if(scrollT > (innerH * 0.6)) {
          $('section.about .section_inner .content h3').addClass('on')
          $('section.about .section_inner .content p').addClass('on');
        }else if(scrollT < (innerH * 0.6)){
           $('section.about .section_inner .content h3').removeClass('on');
           $('section.about .section_inner .content p').removeClass('on');  
        }

        //스택 인터렉션
        if(scrollT > (innerH + (innerH * 0.6))){
          $('section.stack h3').addClass('on');
          $('.stack_box').addClass('on');
        }else if(scrollT < (innerH + (innerH * 0.6))) {
          $('section.stack h3').removeClass('on');
          $('.stack_box').removeClass('on');
        }


        //프로젝트 인터렉션
        if(scrollT > ((innerH * 2) + (innerH * 0.6))){
          $('section.project h3').addClass('on');
          $('.project_view').addClass('on');
        }else {
          $('section.project h3').removeClass('on');
          $('.project_view').removeClass('on');
        }

      })

      $('header nav li a').click(function () {
        let val = $(this).attr("value");
        let scTop = $(`.${val}`).offset().top;

        console.log(scTop);

        $('html, body').animate({scrollTop: scTop}, 800);

      });

      $('header h2').click(function() {
        $('html, body').animate({scrollTop: 0}, 800);
      })

     
  
});

