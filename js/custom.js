$(function(){
    var visualWrap=$("#brandVisual"),
    slide=visualWrap.find(".visual_slide>li"),
    slideCount=slide.length,
    stopTimer,
    leftBtn=visualWrap.find(".btnImg>.prev"),
    rightBtn=visualWrap.find(".btnImg>.next"),
    pager=visualWrap.find(".buttonList>li"),
    current=0;
    /*
    *슬라이드 위치 설정
    */
   var slidePos=slide.each(function(i){
    $(this).css("left",i*100+"%");
   });
  
  
   /**
    * 슬라이드 이미지 부분 - setinterval
    */
    timer();
  
  /* autoplay 함수 */
   function timer(){
    stopTimer = setInterval(function(){
        var prev=slide.eq(current);//0
        move(prev,0,"-100%");
        var prevPager=pager.eq(current);
        prevPager.removeClass("on");
        current++;
        if(current == slideCount){
            current=0;
        }
        var next=slide.eq(current);//1
        move(next,"100%","0%");
        var nextPager=pager.eq(current);
        nextPager.addClass("on")
    },3000);
   }
  
   /**
    * 이미지의 위치 이동 - 움직이는 함수
    * 슬라이드 애니메이트
    */
  
   function move(tg,start,end){
    tg.css("left",start).stop().animate({left:end},2000);
   }
  
   //마우스 호버시 멈춤
   visualWrap.hover(
       function(){
           $(this).addClass('on');
           clearInterval(stopTimer)
       },
       function(){
           $(this).removeClass('on');
           timer()
       }
   );
  
   /* 좌우버튼추가 */
   rightBtn.click(function(){
    var prev = slide.eq(current);//0
    move(prev,0,"-100%");
    var prevPager=pager.eq(current);
    prevPager.removeClass('on');
    current++;//1
    if(current == slideCount){
      current=0;
    }
    var next=slide.eq(current);//1
    move(next,"100%","0%");
    var nextPager=pager.eq(current);
    nextPager.addClass('on');
  });
  leftBtn.click(function(){
    var prev = slide.eq(current);//0
    move(prev,0,"100%");
    var prevPager=pager.eq(current);
    prevPager.removeClass('on');
    current--;//1
    if(current < 0){
      current=slideCount-1;
    }
    var next=slide.eq(current);//2
    move(next,"-100%","0%");
    var nextPager=pager.eq(current);
    nextPager.addClass('on');
  });
   pager.click(function(){
    var tg=$(this);
    var i=tg.index();
    pager.removeClass('on');
    tg.addClass('on');
    console.log(i);
   })
  
   function pagerMove(i){
  var currentEl=slide.eq(current);
  var nextEl=slide.eq(i);
  currentEl.css("left","0" ) .stop().animate({left:"-100%"},500);
  nextEl.css("left","100%").stop().animate({left:"0%"}, 500);
  current = i;
   
  }
  
  /* 카운터 동적생성 */
  
  var counterEl="<div class='counter'>1";
  $("#wrap").append(counterEl);
  
  });//jQeury