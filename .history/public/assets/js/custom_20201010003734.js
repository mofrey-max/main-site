//	$(document).on("scroll", function(){
//		if
//      ($(document).scrollTop() > 50){
//		  $("header").addClass("shrink");
//		}
//		else
//		{
//			$("header").removeClass("shrink");
//		}
//	}); 
 $(function () { var shrinkHeader = 2; $(window).scroll(function () { var scroll = getCurrentScroll(); if (scroll >= shrinkHeader) { $('header').addClass('shrink'); } else { $('header').removeClass('shrink'); } }); function getCurrentScroll() { return window.pageYOffset || document.documentElement.scrollTop; } });

   $('.compny-slider').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true,
      responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        }
      },z
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
        }
      }
  ]
   });


$(document).ready(function(){$('.compny-slider').slick({
         infinite: true,
         slidesToShow: 6,
         slidesToScroll: 1,
         arrows: true,
    
   });
    $('.client_slider').slick({
          infinite: true,
          // slidesToShow: 2,
          slidesToScroll: 1,
          slidesToShow: 3,
          arrows: true,
          appendArrows: '.inBtns',
         responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
    ]
    });
       $('.bcome_slider').slick({
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 4,
          arrows: true,
          appendArrows: '.inBtns1',
         responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
     {
      breakpoint: 420,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
    ]
    });
 
});

$('.animate').scrolla({
       mobile: false,
       once: true
     });




var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2500;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 300;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 1px solid #fff}";
        document.body.appendChild(css);
    };
// document.getElementById("join-btn").addEventListener("click", function (event) {
//   event.preventDefault();
//   const formData = new FormData(document.getElementById("join-form"));
//   let xhr = new XMLHttpRequest();

// });
window.alert = function () { };

function submitForm(formElement) {
  
  event.preventDefault();
  
  if (grecaptcha.getResponse() == "") {
    noCaptcha();
  } else {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", transferComplete(formElement));
    xhr.addEventListener("error", transferFailed);
    // xhr.addEventListener("abort", transferCanceled);
    xhr.onload = function () { alert(xhr.responseText); }
    xhr.open(formElement.method, formElement.action, true);
    const formData = new FormData(formElement);
    let jsonObject = {};

    for (const [key, value] of formData.entries()) {
      jsonObject[key] = value;
    }
    xhr.send(JSON.stringify(jsonObject));
    return false;
  }
}
function transferComplete(formElement) {
  formElement.reset();
  Swal.fire(
    'Thank you!',
    `Your request has been submitted, and we'll be reaching out to you!`,
    'success'
  )
}
function transferFailed() {
  Swal.fire(
    'Ooops!',
    `There was an error sending your request please try again`,
    'error'
  )
}
function noCaptcha() {
  Swal.fire(
    'Ooops!',
    `You need to verify if you're a robot`,
    'error'
  )
}