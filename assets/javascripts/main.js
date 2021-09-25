//Variables Declarions Goes Here!
flagHome = flagAbout = flagServices = flagSkills = flagWorks = flagContact = true;
var $window = $(window);

// Sections IDs Strings
var home = "#home";
var description = "#description";
var services = "#services";
var expertise = "#expertise";
var portfolio = "#portfolio";
var contact = "#contact";

$(document).ready(function () {
  //Top Menu Adding/Removing Bg Dark on Page Load
  if ($(this).scrollTop() > 1) {
    $("#top-menu").addClass("bg-dark");
  }else{
    $("#top-menu").removeClass("bg-dark");
  }

  gsap.to($(description).find('h3, h1, h4, p'), {duration: 0.5, opacity: 0});
  gsap.to($(description).find('.btn'), {duration: 0.5, opacity: 0});
  gsap.to($(description).find('.badge-alt'), {duration: 0.5, opacity: 0});

  gsap.to($(services).find('h3'), {duration: 0.5, opacity: 0});
  gsap.to($(services).find('h1'), {duration: 0.5, opacity: 0});
  gsap.to($(services).find('.card'), {duration: 0.5, opacity: 0});

  gsap.to($(expertise).find('h3'), {duration: 0.5, opacity: 0});
  gsap.to($(expertise).find('h1'), {duration: 0.5, opacity: 0});
  gsap.to($(expertise).find('h4'), {duration: 0.5, opacity: 0});
  gsap.to($(expertise).find('p'), {duration: 0.5, opacity: 0});
  gsap.to($(expertise).find('button'), {duration: 0.5, opacity: 0});
  gsap.to($(expertise).find('h5'), {duration: 0.5, opacity: 0});
  gsap.to($(expertise).find('.progress'), {duration: 0.5, opacity: 0});

  gsap.to($(portfolio).find('h3'), {duration: 0.5, opacity: 0});
  gsap.to($(portfolio).find('h1'), {duration: 0.5, opacity: 0});
  gsap.to($(portfolio).find('.nav-link'), {duration: 0.5, opacity: 0});
  gsap.to($(portfolio).find('.img-project'), {duration: 0.5, opacity: 0});

  gsap.to($(contact).find('.col-lg-5 h1'), {duration: 0.5, opacity: 0});
  gsap.to($(contact).find('.col-lg-5 p'), {duration: 0.5, opacity: 0});
  gsap.to($(contact).find('.col-lg-7'), {duration: 0.5, opacity: 0});

});

//Top Menu Removong Bg Dark on Scrolling
$(window).scroll(function () {
  if ($(this).scrollTop() > 1) {
    $("#top-menu").addClass("bg-dark");
  } else {
    $("#top-menu").removeClass("bg-dark");
  }
});

//Scroll Spy Funtion
$('body').scrollspy({ target: '#top-menu' })

//Generate Random Numbers
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// Add smooth scrolling on all links inside the navbar
$("#top-menu a").on('click', function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top - 97
    }, 800);
  }
});

  ///////////////////////////////////
 //  Sections Effect Starts Here  //
///////////////////////////////////

//Home Menu/Section Effect
function homeEffect(flagHome, spy) {
  if(flagHome && spy == "#home"){
    gsap.fromTo($(spy).find('img, svg'), {duration: 0.5, x: 100, opacity: 0}, {duration: 0.5, x: 0, opacity: 1, delay: 0.5});
    gsap.fromTo($(spy).find('h3'), {duration: 0.5, x: -100, opacity: 0}, {duration: 0.5, x: 0, opacity: 1, delay: 1});
    gsap.fromTo($(spy).find('h1'), {duration: 0.5, x: -100, opacity: 0}, {duration: 0.5, x: 0, opacity: 1, delay: 1.3});
    gsap.fromTo($(spy).find('p'), {duration: 0.5, x: -200, opacity: 0}, {duration: 0.5, x: 0, opacity: 1, delay: 1.5});
    gsap.fromTo($(spy).find('button'), {duration: 0.5, opacity: 0, scale: 0.5, stagger: 0.5}, {duration: 0.5, opacity: 1,scale: 1, delay: 1.8, stagger: 0.5});
  }
  this.flagHome = false;
}

//About Menu/Section Effect
function aboutEffect(flagAbout, spy) {
  //About Menu Click Effects
  if(flagAbout && spy == "#description"){
    gsap.fromTo($(spy).find('h3, h1, h4, p'), {duration: 1, y: 300, opacity: 0}, {duration: 1, ease: "circ.inOut", y: 0, opacity: 1, delay: 0.5});
    gsap.fromTo($(spy).find('.btn'), {duration: 1, x: -300, opacity: 0}, {duration: 1, x: 0, opacity: 1, delay: 1});
    gsap.fromTo($(spy).find('.badge-alt'), {duration: 1, opacity: 0, scale: 0.5, stagger: 0.5}, {duration: 1, opacity: 1, ease: "slow (0.7, 0.7, false)", scale: 1, stagger: 0.5});

    //Counter Function
    $('.badge-alt').each(function () {
      $(this).prop('counter',0).animate({
          counter: $(this).attr('counter')
      }, {
          duration: 5000,
          easing: 'swing',
          step: function (now) {
            $(this).attr('counter',Math.ceil(now))
          }
      });
    });

    this.flagAbout = false;
  }
}

// Services Menu/Section Effects
function servicesEffects(flagServices, spy) {
  if(flagServices && spy == "#services"){
    gsap.fromTo($(spy).find('h3'), {duration: 1, x: -100, opacity: 0}, {duration: 0.5, x: 0, opacity: 1});
    gsap.fromTo($(spy).find('h1'), {duration: 1, y: 100, opacity: 0}, {duration: 0.5, y: 0, opacity: 1});
    gsap.fromTo($(spy).find('.card'), {duration: 1, y: 300, ease: "power4.out", opacity: 0, stagger: 0.5}, {duration: 1, y: 0, ease: "power4.out", opacity: 1, stagger: 0.5});
    
    this.flagServices = false;
  }
}

//Skills Menu/Section Effects
function skillsEffects(flagSkills, spy) {
  if(flagSkills && spy == "#expertise"){
    gsap.fromTo($(spy).find('h3'), {duration: 1, y: 100, opacity: 0}, {duration: 1, y: 0, opacity: 1, delay: 0.2});
    gsap.fromTo($(spy).find('h1'), {duration: 1, y: 100, opacity: 0}, {duration: 1, y: 0, opacity: 1, delay: 0.4});
    gsap.fromTo($(spy).find('h4'), {duration: 1, y: 100, opacity: 0}, {duration: 1, y: 0, opacity: 1, delay: 0.6});
    gsap.fromTo($(spy).find('p'), {duration: 1, y: 100, opacity: 0}, {duration: 1, y: 0, opacity: 1, delay: 0.8});
    gsap.fromTo($(spy).find('button'), {duration: 1, y: 100, opacity: 0}, {duration: 1, y: 0, opacity: 1, delay: 1});

    gsap.fromTo($(spy).find('h5'), {duration: 1, y: -100, opacity: 0}, {duration: 1, y: 0, opacity: 1, delay: 1.5, stagger: 0.2});
    gsap.fromTo($(spy).find('.progress'), {duration: 1, y: -100, opacity: 0}, {duration: 1, y: 0, opacity: 1, delay: 0.5, stagger: 0.5});
    gsap.fromTo($(spy).find('[data-name="skill-1"]'), {duration: 1, width: 0}, {duration: 1, width: '90%', ease: "bounce.out", delay: 2});
    gsap.fromTo($(spy).find('[data-name="skill-2"]'), {duration: 1, width: 0}, {duration: 1, width: '75%', ease: "bounce.out", delay: 2});
    gsap.fromTo($(spy).find('[data-name="skill-3"]'), {duration: 1, width: 0}, {duration: 1, width: '100%', ease: "bounce.out", delay: 2});
    gsap.fromTo($(spy).find('[data-name="skill-4"]'), {duration: 1, width: 0}, {duration: 1, width: '60%', ease: "bounce.out", delay: 2});
    gsap.fromTo($(spy).find('[data-name="skill-5"]'), {duration: 1, width: 0}, {duration: 1, width: '85%', ease: "bounce.out", delay: 2});

    this.flagSkills = false;
  }
}

//Portfolio Menu/Section Effects
function portfolioEffects(flagWorks, spy) {
  if(flagWorks && spy == "#portfolio"){
    gsap.fromTo($(spy).find('h3'), {duration: 1, x: -100, opacity: 0}, {duration: 1, x: 0, opacity: 1, delay: 0});
    gsap.fromTo($(spy).find('h1'), {duration: 1, x: -100, opacity: 0}, {duration: 1, x: 0, opacity: 1, delay: 0.5});
    gsap.fromTo($(spy).find('.nav-link'), {duration: 1, x: 100, opacity: 0}, {duration: 1, x: 0, opacity: 1, delay: 0.8, stagger: 0.3});
    gsap.fromTo($(spy).find('.img-project'), {duration: 1, y: 100, opacity: 0}, {duration: 1, y: 0, opacity: 1, delay: 0.9, stagger: 0.3});
    
    this.flagWorks = false;
  }
}

//Contact Menu/Section Effects
function contactEffects(flagContact, spy) {
  if(flagContact && spy == "#contact"){
    gsap.fromTo($(spy).find('.col-lg-5 img'), {duration: 1, scale: 0}, {duration: 1, scale: 1, delay: 0});
    gsap.fromTo($(spy).find('.col-lg-5 h1'), {duration: 1, y: 100, opacity: 0}, {duration: 1, y: 0, opacity: 1, delay: 1});
    gsap.fromTo($(spy).find('.col-lg-5 p'), {duration: 1, y: 100, opacity: 0}, {duration: 1, y: 0, opacity: 1, delay: 1});
    gsap.fromTo($(spy).find('.col-lg-7'), {duration: 1, opacity: 0}, {duration: 1.5, opacity: 1, delay: 1});

    this.flagContact = false;
  }
}

//Display Projects Infos on Hover
$('.img-project').hover(function () {
  // over
  $(this).find('.img-caption').css('transform','scale(1)')
}, function () {
  // out
  $(this).find('.img-caption').css('transform','scale(0)')
});

////////////////////////////////////////////////////////////////////////

//On Scroll Animations for sections
$(window).scroll(function(event) {
  var lastScrollTop = 0;

  var winTop = $(this).scrollTop();
  var $animation_elements = $('.section');
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  var top = $.grep($animation_elements, function(item) {
    var $element = $(item);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top + 250;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
      $section = $(item).last().attr('id');
      
      switch ($section) {
        case "home":
          homeEffect(flagHome, home);
          break;

        case "description":
          aboutEffect(flagAbout, description);
          break;
        
        case "services":
          servicesEffects(flagServices, services);
          break;

        case "expertise":
          skillsEffects(flagSkills, expertise);
          break;
        
        case "portfolio":
          portfolioEffects(flagWorks, portfolio);
          break;

        case "contact":
          contactEffects(flagContact, contact);
          break;
      
        default:
          break;
      }
    }
  });
});

$window.trigger('scroll');