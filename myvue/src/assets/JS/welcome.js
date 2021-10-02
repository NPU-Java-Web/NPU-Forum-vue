export default function drag (id) {
  //  代码内容
  window.onload = function () {
    Particles.init({
      selector: ".background"
    });
  };
  var particles = Particles.init({
    selector: ".background",
    color: ["#03dac6", "#ff0266", "#000000"],
    connectParticles: true,
    responsive: [
      {
        breakpoint: 768,
        options: {
          color: ["#faebd7", "#03dac6", "#ff0266"],
          maxParticles: 43,
          connectParticles: false
        }
      }
    ]
  });

  class NavigationPage {
    constructor() {
      this.currentId = null;
      this.currentTab = null;
      this.tabContainerHeight = 70;
      this.lastScroll = 0;
      let self = this;
      $(".nav-tab").click(function () {
        self.onTabClick(event, $(this));
      });
      $(window).scroll(() => {
        this.onScroll();
      });
      $(window).resize(() => {
        this.onResize();
      });
    }

    onTabClick(event, element) {
      event.preventDefault();
      let scrollTop =
        $(element.attr("href")).offset().top - this.tabContainerHeight + 1;
      $("html, body").animate({ scrollTop: scrollTop }, 600);
    }

    onScroll() {
      this.checkHeaderPosition();
      this.findCurrentTabSelector();
      this.lastScroll = $(window).scrollTop();
    }

    onResize() {
      if (this.currentId) {
        this.setSliderCss();
      }
    }

    checkHeaderPosition() {
      const headerHeight = 75;
      if ($(window).scrollTop() > headerHeight) {
        $(".header").addClass("header--scrolled");
      } else {
        $(".header").removeClass("header--scrolled");
      }
      let offset =
        $(".nav").offset().top +
        $(".nav").height() -
        this.tabContainerHeight -
        headerHeight;
      if (
        $(window).scrollTop() > this.lastScroll &&
        $(window).scrollTop() > offset
      ) {
        $(".header").addClass("et-header--move-up");
        $(".nav-container").removeClass("nav-container--top-first");
        $(".nav-container").addClass("nav-container--top-second");
      } else if (
        $(window).scrollTop() < this.lastScroll &&
        $(window).scrollTop() > offset
      ) {
        $(".header").removeClass("et-header--move-up");
        $(".nav-container").removeClass("nav-container--top-second");
        $(".et-hero-tabs-container").addClass(
          "et-hero-tabs-container--top-first"
        );
      } else {
        $(".header").removeClass("header--move-up");
        $(".nav-container").removeClass("nav-container--top-first");
        $(".nav-container").removeClass("nav-container--top-second");
      }
    }

    findCurrentTabSelector(element) {
      let newCurrentId;
      let newCurrentTab;
      let self = this;
      $(".nav-tab").each(function () {
        let id = $(this).attr("href");
        let offsetTop = $(id).offset().top - self.tabContainerHeight;
        let offsetBottom =
          $(id).offset().top + $(id).height() - self.tabContainerHeight;
        if (
          $(window).scrollTop() > offsetTop &&
          $(window).scrollTop() < offsetBottom
        ) {
          newCurrentId = id;
          newCurrentTab = $(this);
        }
      });
      if (this.currentId != newCurrentId || this.currentId === null) {
        this.currentId = newCurrentId;
        this.currentTab = newCurrentTab;
        this.setSliderCss();
      }
    }

    setSliderCss() {
      let width = 0;
      let left = 0;
      if (this.currentTab) {
        width = this.currentTab.css("width");
        left = this.currentTab.offset().left;
      }
      $(".nav-tab-slider").css("width", width);
      $(".nav-tab-slider").css("left", left);
    }
  }

  new NavigationPage();

  /* Credit:
  Matrix - Particles.js;
  Slider - Ettrics;
  Fonts - Google Fonts
  */

}
