$('.dropdown.notification-icon .dropdown-menu').on({
    "click": function(e) {
      e.stopPropagation();
    }
  });
  $('.notification-icon .dropdown-menu .unot-wrap .nlst, .notification-icon .dropdown-menu .unot-wrap .unlstb .unvall .vabtn').on('click', function() {
    $('.dropdown.notification-icon').removeClass('open');
  });
  
  $('.dropdown.message-icon .dropdown-menu').on({
    "click": function(e) {
      e.stopPropagation();
    }
  });
  $('.message-icon .dropdown-menu .mesnot-wrap .melst .mescont .topact a, .message-icon .dropdown-menu .mesnot-wrap .melst .mescont .botmact .bvactbtn, .message-icon .dropdown-menu .mesnot-wrap .melstb .mesvall .vabtn').on('click', function() {
    $('.dropdown.message-icon').removeClass('open');
  });
  function ReadCookie(cookieName) {
    var theCookie = " " + document.cookie;
    var ind = theCookie.indexOf(" " + cookieName + "=");
    if (ind == -1) ind = theCookie.indexOf(";" + cookieName + "=");
    if (ind == -1 || cookieName == "") return "";
    var ind1 = theCookie.indexOf(";", ind + 1);
    if (ind1 == -1) ind1 = theCookie.length;
    return unescape(theCookie.substring(ind + cookieName.length + 2, ind1));
  }
  
  function update_file() {
    var file_cookie = ReadCookie("FileDate");
    var cv_cookie = ReadCookie("TodaysDate");
    var file = document.getElementById("file");
  
    if (file_cookie.indexOf('+') > 0) {
      file_cookie = file_cookie.replace('+', ' ');
      file_cookie = file_cookie.replace('+', ' ');
    }
  var file_date = new Date(file_cookie);
  var cv_date = new Date(cv_cookie);
  
  if (cv_date > file_date) {
      $('#F_U_message').html("This section has been updated successfully.<br />To increase your chance of getting a perfect job,  <br />make sure other sections and uploaded resume are updated too.</p>");
      $('#myModal').modal('show');
      $('#myModal').css("left", "40%");
  
      $('#myModal').css("top", "30%");
      $(file).attr("title", "Make sure your uploaded resume is updated.");
      $(file).tooltip('show');
  
    } else {
      $('#F_U_message').html("This section has been updated successfully.<br> To increase your chance of getting a perfect job,<br> make sure other sections are also updated and upload an updated resume.");
      $('#myModal').modal('show');
      $('#myModal').css("left", "40%");
  
      $('#myModal').css("top", "30%");
      $(file).attr("title", "Upload your updated resume.");
      $(file).tooltip('show');
      javascript: parent.jQuery.fancybox({
        afterClose: parent.location.reload(true)
      });
    }
  }
  
  $(document).ready(function() {
    //Expand Menu Section
    expandLastVisitedMenuSection("");
  });
  
  
  
  
  $(document).on('click', '.promo-top .btn.close', function(e) {
    e.preventDefault();
    $('.promo-top').slideUp();
    $('.promo-minimized').removeClass('hidden');
    setAssessmentCookie('MyAssessmentTopbanner', 0);
  });
  
  $(document).ready(function() {
    if (screen.width < 768) {
      $('.promo-top').addClass('hidden');
    } else {
      setTimeout(function() {
        $('.promo-top').slideDown().removeClass('hidden');
      }, 500);
    }
  });
  $(document).on('click', '.promo-minimized a', function(e) {
    e.preventDefault();
  $('.promo-top').slideDown().removeClass('inactive');
  $('.promo-minimized').addClass('hidden').removeClass('active');
    setAssessmentCookie('MyAssessmentTopbanner', 1);
  });
  function checkAssessmentCookie(cookieName, show) {
  //console.log(user);
  if (show == 0) {
      //alert("Welcome again " + user);
      setAssessmentCookie(cookieName, 1);
    } else {
  
      delete_cookie(cookieName);
    }
  }
  function delete_cookie(name) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }
  
  function setAssessmentCookie(cname, cvalue) {
    console.log("y");
    var d = new Date();
    exdays = 1;
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
  }
  $(function() {
    $(document).on('scroll', function() {
      if ($(window).scrollTop() > 100) {
        $('.scroll-top-wrapper').addClass('show');
      } else {
        $('.scroll-top-wrapper').removeClass('show');
      }
    });
  });
  $(function() {
    $(document).on('scroll', function() {
      if ($(window).scrollTop() > 100) {
        $('.scroll-top-wrapper').addClass('show');
      } else {
        $('.scroll-top-wrapper').removeClass('show');
      }
    });
  
    $('.scroll-top-wrapper').on('click', scrollToTop);
  });
  function scrollToTop() {
    verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
    element = $('body');
    offset = element.offset();
    offsetTop = offset.top;
    $('html, body').animate({
      scrollTop: offsetTop
    }, 500, 'linear');
  }
  $(document).ready(function() {
    $('.intro-popup').parent().css({
      'position': 'relative',
      'display': 'inline-block',
    });
    $('.intro-popup').each(function() {
      var popupPlacement = $(this).attr(
        'popup-placement');
      if (popupPlacement == ('right' || 'Right')) {
        $(this).addClass('right');
      } else if (popupPlacement == ('top' || 'Top')) {
        $(this).addClass('top');
      } else if (popupPlacement == ('left' || 'Left')) {
        $(this).addClass('left');
      } else {
        $(this).addClass('bottom');
      }
    });
  if (readCookie('myBdjobsAriaExp') == "" || readCookie('myBdjobsAriaExp') == null) {
      //alert(readCookie('myBdjobsAriaExp'+"h111"));
      setTimeout(function() {
        $('.popup-wrap').addClass('in');
      }, 400);
    } else {
      $('.popup-wrap').removeClass('in');
    }
    //alert(readCookie('myBdjobsAriaExp')+"h222");
    $(document).on('click', '.intro-popup', function(e) {
      e.stopPropagation();
    });
    $(document).on('click', '.intro-popup .icon-close', function(e) {
      $(this).parents('.intro-popup').css({
        'transform': 'scale(0)',
        'transition': '1s linear',
      });
      $(this).parents('.popup-wrap').removeClass('in');
    });
  
  });
  function convert_word() {
    var str_html = document.getElementById("resume").innerHTML;
    document.getElementById("str_html").value = str_html;
    document.getElementById("form").submit();
  
  }
  function convert_pdf() {
    var MainCV_ = document.getElementById("resume").innerHTML;
    var MainCV_New = "<table width='100%' border='0'><tr><td align='right'><span class='style5'>Powered By <span class='style1'>B</span><span class='style2'>d</span><span class='style3'>jobs</span>.<span class='style4'>com</span></span></td></tr></table><div id='resume'>" + MainCV_ + "</div>";
    document.getElementById("MainCV_").value = MainCV_New;
    document.getElementById("form2").submit();
  }
  (function(h, e, a, t, m, p) {
    m = e.createElement(a);
    m.async = !0;
    m.src = t;
    p = e.getElementsByTagName(a)[0];
    p.parentNode.insertBefore(m, p);
  })(window, document, 'script', 'https://u.heatmap.it/log.js');
  (function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
      (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
      m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
  })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
  
  ga('create', 'UA-56024242-1', 'auto');
  ga('send', 'pageview');
  $(document).ready(function() {
    $('a[href*="#"]')
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
          location.hostname == this.hostname
        ) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                return false;
              } else {
                $target.attr('tabindex', '-1');
                $target.focus();
              };
            });
          }
        }
      });
  });
  function AccessibilityAffectedElementsRedefine() {
    //$affectedElements = $("h1,h2,h3,h4,h5,h6,ul,ol,input,div,p,a,button,span,li,strong,b,i,hr");
    $affectedElements = $("h1,h2,h3,h4,h5,h6,ul,ol,input,div,p,a,button,span,li,strong,b,i,hr,label,table,thead,tbody,th,tr,td,select,option,abbr");
  
    $affectedElements.each(function() {
      $(this).data("orig-size", $(this).css("font-size"));
    });
  
    console.log("$affectedElements");
    console.log($affectedElements);
    $affectedElements.each(function() {
      $(this).css("font-size", $(this).data("orig-size"));
    });
  
    $affectedElements.each(function() {
      $(this).css("font-size", parseInt($(this).css("font-size")) + $acccessibilityClick);
    });
  }
  
  function isBigCursorBtnClicked() {
    if ($("div.larrw-wrap #f-larrw").hasClass("bcursor")) {
      return true
    } else {
      return false;
    }
  }
  function reGenarateBigCursor_Old() {
    $bigaffectedElements = $("h1,h2,h3,h4,h5,h6,ul,ol,input,div,p,a,button,span,li,strong,b,i,hr,label,table,thead,tbody,th,tr,td,select,option,abbr");
    if ($("div.larrw-wrap #f-larrw").hasClass("bcursor")) {
      console.log("bcursor_1");
      // if(!$("td *").hasClass("bcursor")){
      //     console.log("bcursor_2");
      //     $("html *").removeClass('bcursor').addClass('bcursor');
      // }
      $bigaffectedElements.each(function() {
        console.log("bcursor_2");
        if (!$(this).hasClass("bcursor")) {
          console.log("bcursor_3");
          $(this).addClass("bcursor");
        }
      });
  
    }
  }
  function reGenarateBigCursorV1(affectedElements, isBigCursorClicked, isObjAffectedElement) {
    let $bigAff = "";
    if (isObjAffectedElement) {
      $bigAff = affectedElements;
    } else {
      $bigAff = $(affectedElements);
    }
  
    if (isBigCursorClicked) {
      console.log("bcursor_1");
      $bigAff.each(function() {
        console.log("bcursor_2");
        if (!$(this).hasClass("bcursor")) {
          console.log("bcursor_3");
          $(this).addClass("bcursor");
        }
      });
    }
  }
  function reGenarateBigCursor(isBigCursorClicked) {
    if (isBigCursorClicked) {
      $("html *").removeClass('bcursor').addClass('bcursor');
    }
  }
  
  function reGenerateHighlitedLink() {
    if ($("#f-linkh").hasClass("linkHighliedCls")) {
      $("a").addClass("lnk-highlited");
      $("button").addClass("lnk-highlited");
      $('input[type="submit"],input[type="button"]').addClass("lnk-highlited");
    }
  }
  function reGenerateHeadingHighlited() {
    if ($("#f-sheadns").hasClass("headingshighlitedCls")) {
      var $affectedElementsmms = $("h1, h2, h3, h4, h5, h6, [role=heading]");
      $affectedElementsmms.each(function() {
        $(this).addClass("headings-highlited");
      });
    }
  }
  $(document).ready(function() {
    setInterval(function() {
      console.log("bcursor");
      $bigaffectedElements = $("h1,h2,h3,h4,h5,h6,ul,ol,input,div,p,a,button,span,li,strong,b,i,hr,label,table,thead,tbody,th,tr,td,select,option,abbr");
      if ($("div.larrw-wrap #f-larrw").hasClass("bcursor")) {
        console.log("bcursor_1");
        $bigaffectedElements.each(function() {
          console.log("bcursor_2");
          if (!$(this).hasClass("bcursor")) {
            console.log("bcursor_3");
            $(this).addClass("bcursor");
          }
        });
  
      }
    }, 1000);
  });
  var $affectedElements = "";
  var $acccessibilityClick = 0;
  $(document).ready(function() {
    $("#accAdjustmentsTools").removeClass('hide');
    $(document).click(function() {
      if ($(".control-panel").hasClass("open")) {
        $(".control-panel").removeClass("open").removeAttr("tabindex");
        $(".control-panel").find(".btn").removeAttr("tabindex").removeAttr("role").removeAttr("aria-pressed");
        $(".control-panel").find(".acctoggle-btn").removeAttr("tabindex").removeAttr("role").removeAttr("aria-pressed");
      }
    });
    $(document).on("click", ".control-panel,.acad", function(e) {
      e.stopPropagation();
    });
  
    $(".acad").on("click", function() {
      $(".acctoggle-btn").trigger("click");
      $(".control-panel").focus();
    });
  
    $(".acctoggle-btn").on("click", function() {
      if ($(".control-panel").hasClass("open")) {
        $(".control-panel").removeClass("open").removeAttr("tabindex");
        $(".control-panel").find(".btn").removeAttr("tabindex").removeAttr("role").removeAttr("aria-pressed");
        $(".control-panel").find(".acctoggle-btn").removeAttr("tabindex").removeAttr("role").removeAttr("aria-pressed");
      } else {
        $(".control-panel").addClass("open").attr("tabindex", "0");
        $(".control-panel").find(".btn").attr("tabindex", "0").attr("role", "button").attr("aria-pressed", "false");
        $(".control-panel").find(".acctoggle-btn").attr("tabindex", "0").attr("role", "button").attr("aria-pressed", "false");
        isOffLayer = false;
      }
    });
    $(document).on("keypress", ".control-panel div[role=button]", function(e) {
      if (e.key === "Enter") {
        $(this).trigger("click");
      }
    });
  
    $(document).on("click", ".control-panel div[role=button]", function(e) {
      $(this).toggleAriaPressed();
    });
    console.log($affectedElements);
    //$affectedElements = $("h1,h2,h3,h4,h5,h6,ul,ol,input,div,p,a,button,span,li,strong,b,i,hr,label,th,td");
    $affectedElements = $("h1,h2,h3,h4,h5,h6,ul,ol,input,div,p,a,button,span,li,strong,b,i,hr,label,table,thead,tbody,th,tr,td,select,option,abbr");
    console.log($affectedElements);
  
    $affectedElements.each(function() {
      $(this).data("orig-size", $(this).css("font-size"));
    });
  
  
    $(document).on("click", "#btn-increase", function() {
      console.log($affectedElements)
      changeFontSize(1);
    });
    $(document).on("click", "#btn-decrease", function() {
      console.log($affectedElements)
      changeFontSize(-1);
    })
  
    $(document).on("click", "#btn-orig", function() {
      $acccessibilityClick = 0;
      $affectedElements.each(function() {
        $(this).css("font-size", $(this).data("orig-size"));
      });
    })
  
    function changeFontSize(direction) {
      $acccessibilityClick = $acccessibilityClick + direction;
      $affectedElements.each(function() {
        $(this).css("font-size", parseInt($(this).css("font-size")) + direction);
      });
    }
    $(document).on("click", "#f-monocclr", function() {
      $("html").toggleClass("monocclr");
    });
  
    $(document).on("click", "#f-invertclr", function() {
      $("html").toggleClass("invertclr");
    });
    $(document).on("click", "#f-larrw", function() {
      $("html").toggleClass("bcursor");
    });
    var isBCursorOn = false;
    $(document).on("click", "#f-larrw", function() {
      isBCursorOn = (isBCursorOn ? false : true);
    });
    $("html *").on("mouseover", function() {
      if (isBCursorOn) {
        $(this).addClass("bcursor");
      } else {
        $(this).removeClass("bcursor");
      }
    });
    $(document).on("click", "#f-linkh", function() {
      $("a").toggleClass("lnk-highlited");
      $("button").toggleClass("lnk-highlited");
      $('input[type="submit"],input[type="button"]').toggleClass("lnk-highlited");
      $(this).toggleClass("linkHighliedCls");
    });
    var $affectedElementsmm = $("h1, h2, h3, h4, h5, h6, [role=heading]");
    $(document).on("click", "#f-sheadns", function() {
      $affectedElementsmm.each(function() {
        $(this).toggleClass("headings-highlited");
      });
      $(this).toggleClass("headingshighlitedCls");
    });
    $(document).on("click", "#f-readgde", function() {
      console.log('Reading Guide');
      $(".rguide").toggleClass("shd");
      $(document).on('mousemove', function(e) {
        $('.rguide').css('top', e.pageY - 15);
      });
    });
    $.fn.toggleAriaPressed = function() {
      if ($(this).attr("aria-pressed") == "true") {
        $(this).attr("aria-pressed", "false");
      } else {
        $(this).attr("aria-pressed", "true");
      }
    }
  });
  var isWindowActiveForAll;
  $(window).blur(function() {
    isWindowActiveForAll = false;
  });
  $(window).focus(function() {
    isWindowActiveForAll = true;
  });
  setInterval(function() {
    if (window.isWindowActiveForAll)
      getNotification('mybdjobs', 'n', 'EN');
  
  }, 60000);
  setInterval(function() {
    if (window.isWindowActiveForAll)
  
      showMessage('mybdjobs', 'm', 'EN');
  }, 60000);
  $(function() {
    $('[data-toggle="popover"]').popover()
  });
  $(document).on("click", '.social-button .btn', function() {
    var $this = $(this);
    $this.button('loading');
    setTimeout(function() {
      $this.button('reset');
    }, 1000);
  });
  
  function getNotification(strSystemName, strType, strVersion) {
    $.ajax({
      type: "GET",
      url: "https://mybdjobs.bdjobs.com/mybdjobs/ajax-mybdjobs-notification.asp?v=" + strVersion + "&s=" + strSystemName + "&t=" + strType,
      contentType: "application/x-www-form-urlencoded; charset=utf-8",
      cache: false,
      data: {},
      success: function(strNotificationData) {
        if (strNotificationData != "") {
          var strArrayData = strNotificationData.split("#");
          var count = strArrayData[0];
          var strHtmlNotification = strArrayData[1];
          if (parseInt(count) > 0) {
            if (count.length > 2) {
              count = count.slice(0, 2) + "+"
            }
            var strHtml = "<span  class='nbdge'>" + count + "</span>";
            $("#notired").empty().append(strHtml);
            $("#notired").css('display', 'block');
            if (strHtmlNotification.trim() != "") {
              $("#notification").empty().append(strHtmlNotification);
            }
          } else {
            if (strHtmlNotification.trim() != "") {
              $("#notification").empty().append(strHtmlNotification);
            }
            $("#notired").empty();
          }
        } else {
           $("#notired").empty();
        }
      }
    })
  }
  function showMessage(strSystemName, strType, strVersion) {
    $.ajax({
      type: "GET",
      url: "https://mybdjobs.bdjobs.com/mybdjobs/ajax-mybdjobs-notification.asp?v=" + strVersion + "&s=" + strSystemName + "&t=" + strType,
      contentType: "application/x-www-form-urlencoded; charset=utf-8",
      cache: false,
      data: {},
      success: function(strMessageData) {
        if (strMessageData != "") {
          var strArrayData = strMessageData.split("#");
          var count = strArrayData[0];
          var strHtmlMessage = strArrayData[1];
          if (parseInt(count) > 0) {
            if (count.length > 2) {
              count = count.slice(0, 2) + "+"
            }
            var strHtml = "<span  class='mnbdge'>" + count + "</span>";
            $("#motired").empty().append(strHtml);
            $("#motired").css("display", "block");
            if (strHtmlMessage.trim() != "") {
              $("#message").empty().append(strHtmlMessage);
            }
          } else {
            if (strHtmlMessage.trim() != "") {
              $("#message").empty().append(strHtmlMessage);
            }
            $("#motired").empty();
          }
        } else {
          $("#motired").empty();
        }
      }
    })
  }
  function showNotification() {
    $("#notired").html("");
    $("#notired").css("display", "none");
  }
  function changeDate() {
    var d = new Date();
    var strDate = d.toLocaleDateString();
    var strTime = d.toLocaleTimeString();
    var fullDateTime = strDate + " " + strTime;
    SetCookieInDomain("MybdjobsJobDate", fullDateTime, 1);
  }
  function showReminderMessage() {
    $("#motired").empty();
  }
  function SetCookie(cookieName, cookieValue, nDays) {
    var today = new Date();
    var expire = new Date();
    if (nDays == null || nDays == 0) nDays = 1;
    expire.setTime(3600000 * 24 * nDays);
    document.cookie = cookieName + "=" + escape(cookieValue) + ";path=/";
  }
  function SetCookieInDomain(cookieName, cookieValue, nDays) {
    var today = new Date();
    var expire = new Date();
    if (nDays == null || nDays == 0) nDays = 1;
    expire.setTime(3600000 * 24 * nDays);
    document.cookie = cookieName + "=" + escape(cookieValue) + ";domain=.bdjobs.com;secure;path=/";
  }
  function ReadCookie(cookieName) {
    var theCookie = " " + document.cookie;
    var ind = theCookie.indexOf(" " + cookieName + "=");
    if (ind == -1) ind = theCookie.indexOf(";" + cookieName + "=");
    if (ind == -1 || cookieName == "") return "";
    var ind1 = theCookie.indexOf(";", ind + 1);
    if (ind1 == -1) ind1 = theCookie.length;
    return unescape(theCookie.substring(ind + cookieName.length + 2, ind1));
  }
  $(function() {
    var $vresp = $('.progress-pie-chart-cor'),
      percent = parseInt($vresp.data('percent')),
      deg = 360 * percent / 100;
    if (percent > 50) {
      $vresp.addClass('gd-50');
    }
    $('.coresume-progress-fill').css('transform', 'rotate(' + deg + 'deg)');
    $('.coresume-percent span').html(percent + '%');
  });
  $('.in-partners').click(function() {
    $('.all-partners').slideToggle();
    $(this).find('i').toggleClass('icon-angle-down icon-angle-up');
    if ($(this).attr('aria-expanded') === 'true') {
      $(this).attr('aria-expanded', 'false');
    } else {
      $(this).attr('aria-expanded', 'true');
    }
  });
  $('.ot-partners').click(function() {
    $('.oth-partners').slideToggle();
    $(this).find('i').toggleClass('icon-angle-down icon-angle-up');
    if ($(this).attr('aria-expanded') === 'true') {
      $(this).attr('aria-expanded', 'false');
    } else {
      $(this).attr('aria-expanded', 'true');
    }
  });
  $('.adeal').click(function() {
    $('.adeal-wrap').slideToggle();
    $(this).find('i').toggleClass('icon-angle-down icon-angle-up');
    if ($(this).attr('aria-expanded') === 'true') {
      $(this).attr('aria-expanded', 'false');
    } else {
      $(this).attr('aria-expanded', 'true');
    }
  });
  function warningQuit() {
    $('.warning-footer').slideUp();
  }
  $(document).on('click', '.dropdown-toggle', function() {
    let divId = $(this).parents('li').find('.dropdown-menu').attr("id");
    if ($(this).parents('li').hasClass('open')) {
      trapTab(divId);
    }
  });
  function trapTab(divId) {
    console.log(divId);
    var focusableElements = "a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), object, embed, [tabindex], [contenteditable], iframe";
  var elements = $("#" + divId).find("*").not(":hidden").filter(focusableElements);
     elements.get(0).focus();
    $(window).on("keydown", function(e) {
      if (e.which == 9 || e.which == 40 || e.which == 38) {
        var item = $(':focus');
        var index = elements.index(item);
        if (e.shiftKey) {
          if (index == 0) {
            elements.get(elements.length - 1).focus();
            e.preventDefault();
          }
        } else {
          if (index == (elements.length - 1)) {
            elements.get(0).focus();
            e.preventDefault();
          }
        }
      }
    });
  }
  $(document).ready(function() {
     expandLastVisitedMenuSection("");
  });
  $(function() {
    $('[data-toggle="tooltip"]').tooltip();
  })
  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
  $(document).on("click", ".icon-close", function() {
    setCookie("myBdjobsAriaExp", "1", 1)
  });