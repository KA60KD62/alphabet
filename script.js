$(function() {

  $('#login-show').click(function() {
    $('#login-modal').fadeIn();
  });

  $('.signup-show').click(function() {
    $('#signup-modal').fadeIn();
  });

  $('.close-modal').click(function() {
    $('#login-modal').fadeOut();
    $('#signup-modal').fadeOut();
  });
  
  $('.lesson-hover').hover(
    function() {
      $(this).find('.text-contents').addClass('text-active'); 
    },
    function() {
      $(this).find('.text-contents').removeClass('text-active');
    }
  );
    
  $('.member-hover').hover(
    function() {
      $(this).find('.member-comment').addClass('member-active'); 
    },
    function() {
      $(this).find('.member-comment').removeClass('member-active');
    }
  );    
    
/*メンバー写真変化*/     
  $('.member-hover').hover(
    function() {
      $(this).find('img[src="omoteyugi.jpg"]').attr('src','yugi.jpg'); 
    },
    function() {
      $(this).find('img[src="yugi.jpg"]').attr('src','omoteyugi.jpg');
    }
  ); 

  $('.member-hover').hover(
    function() {
      $(this).find('img[src="omotemariku.jpg"]').attr('src','mariku.png'); 
    },
    function() {
      $(this).find('img[src="mariku.png"]').attr('src','omotemariku.jpg');
    }
  );     
  $('.member-hover').hover(
    function() {
      $(this).find('img[src="kaiba.jpg"]').attr('src','shinkaiba.PNG'); 
    },
    function() {
      $(this).find('img[src="shinkaiba.PNG"]').attr('src','kaiba.jpg');
    }
  );       
  $('.member-hover').hover(
    function() {
      $(this).find('img[src="jono.jpeg"]').attr('src','outjono.jpg'); 
    },
    function() {
      $(this).find('img[src="outjono.jpg"]').attr('src','jono.jpeg');
    }
  );     
  $('.member-hover').hover(
    function() {
      $(this).find('img[src="2ichigo.PNG"]').attr('src','mugetsu.png'); 
    },
    function() {
      $(this).find('img[src="mugetsu.png"]').attr('src','2ichigo.PNG');
    }
  );     
  $('.member-hover').hover(
    function() {
      $(this).find('img[src="ul.jpg"]').attr('src','2ul.jpg'); 
    },
    function() {
      $(this).find('img[src="2ul.jpg"]').attr('src','ul.jpg');
    }
  );    
  $('.member-hover').hover(
    function() {
      $(this).find('img[src="2wichigo.PNG"]').attr('src','shirozangetsu.jpg'); 
    },
    function() {
      $(this).find('img[src="shirozangetsu.jpg"]').attr('src','2wichigo.PNG');
    }
  );    
  $('.member-hover').hover(
    function() {
      $(this).find('img[src="jobs1.jpg"]').attr('src','jobs2.jpg'); 
    },
    function() {
      $(this).find('img[src="jobs2.jpg"]').attr('src','jobs1.jpg');
    }
  );   
  $('.member-hover').hover(
    function() {
      $(this).find('img[src="zaq1.jpg"]').attr('src','zaq2.jpg'); 
    },
    function() {
      $(this).find('img[src="zaq2.jpg"]').attr('src','zaq1.jpg');
    }
  );   
  $('.member-hover').hover(
    function() {
      $(this).find('img[src="rally1.jpg"]').attr('src','rally2.jpg'); 
    },
    function() {
      $(this).find('img[src="rally2.jpg"]').attr('src','rally1.jpg');
    }
  );   
  $('.member-hover').hover(
    function() {
      $(this).find('img[src="jeff1.jpg"]').attr('src','jeff2.jpg'); 
    },
    function() {
      $(this).find('img[src="jeff2.jpg"]').attr('src','jeff1.jpg');
    }
  );
  $('.member-hover').hover(
    function() {
      $(this).find('img[src="Bill1.jpg"]').attr('src','bill2.jpg'); 
    },
    function() {
      $(this).find('img[src="bill2.jpg"]').attr('src','Bill1.jpg');
    }
  );
//-----------------------------------------------------------------------------//
    
  // FAQのアコーディオン
  $('.faq-list-item').click(function() {
    var $answer = $(this).find('.answer');
    if($answer.hasClass('open')) { 
      $answer.removeClass('open');
      // slideUpメソッドを用いて、$answerを隠してください
      $answer.slideUp();

      // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
      $(this).find("span").text("+");
      
    } else {
      $answer.addClass('open'); 
      // slideDownメソッドを用いて、$answerを表示してください
     $answer.slideDown();
      
      // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
      $(this).find("span").text("-");
      
    }
  });
});
