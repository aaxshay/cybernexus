!function(t,e){"use strict";var i={init:function(){var a={"boombasaskit-advance-accordion.default":i.Advanced_Accordion,"boombasaskit-advanced-toggle.default":i.Advanced_Toggle,"boombasaskit-tab.default":i.Advanced_Tab,"boombasaskit-gallery.default":i.Gallery,"boombasaskit-motion-text.default":i.MotionText,"boombasaskit-popup-modal.default":i.PopupModal,"boombasaskit-zoom.default":i.Zoom,"boombasaskit-unfold.default":i.Unfold,"boombasaskit-woo-product-carousel.default":i.Woo_Product_slider,"boombasaskit-woo-mini-cart.default":i.Mini_Cart,"boombasaskit-table.default":i.Table,"boombasaskit-timeline.default":i.TimeLine,"boombasaskit-creative-button.default":i.Creative_Button,"boombasaskit-hotspot.default":i.Hotspot,"ekit-vertical-menu.default":i.Vertical_Menu,"boombasaskit-video-gallery.default":i.Video_Gallery,"boombasaskit-facebook-feed.default":i.Facebook_Feed,"boombasaskit-facebook-review.default":i.Facebook_Review,"boombasaskit-yelp.default":i.Yelp_Review,"boombasaskit-trustpilot.default":i.Trustpilot_Review,"boombasaskit-blog-posts.default":i.BlogPosts};t.each(a,(function(t,i){e.hooks.addAction("frontend/element_ready/"+t,i)}))},WidgetAreaJSUpdate:function(){var e=t(this);e.find(".ekit-swiper-container").each((function(){this.swiper.update()})),e.find(".boombasaskit-image-comparison").trigger("resize.twentytwenty")},Social_Review_Slider:function(e){e.each((function(){let e=`\n\t\t\t\t\t<button type="button" class="slick-prev">\n\t\t\t\t\t\t<i class="${t(this).data("prevarrow")?t(this).data("prevarrow"):"icon icon-left-arrow2"}"></i>\n\t\t\t\t\t</button>\n\t\t\t\t`,i=`\n\t\t\t\t\t<button type="button" class="slick-next">\n\t\t\t\t\t\t<i class="${t(this).data("nextarrow")?t(this).data("nextarrow"):"icon icon-right-arrow2"}"></i>\n\t\t\t\t\t</button>\n\t\t\t\t`,a="yes"===t(this).data("showarrow"),n="yes"===t(this).data("showdot"),o=!(!t(this).data("autoplay")||"yes"!==t(this).data("autoplay")),s={autoplay:o,prevArrow:e,nextArrow:i,slidesToShow:"undefined"!==t(this).data("slidestoshow")?t(this).data("slidestoshow"):1,slidesToScroll:"undefined"!==t(this).data("slidestoscroll")?t(this).data("slidestoscroll"):1,autoplaySpeed:"undefined"!==t(this).data("speed")?t(this).data("speed"):1e3,arrows:"undefined"===t(this).data("showarrow")||a,dots:"undefined"===t(this).data("showdot")||n,pauseOnHover:"yes"==t(this).data("pauseonhover"),infinite:"undefined"===t(this).data("autoplay")||o,responsive:"[]"!==t(this).data("responsive")?t(this).data("responsive"):[]};t(this).slick(s)}))},Handle_Review_More:function(e){t(e).find(".more").each((function(){t(this).click((()=>{let e=t(t(this).parent().get(0)).find("span").first();!0===t(this).data("collapsed")?(t(e).text(t(this).data("text")),t(this).text("...Collapse")):(t(e).text(t(this).data("text").substr(0,120)),t(this).text("...More")),t(this).data("collapsed",!t(this).data("collapsed"))}))}))},ShowModal:function(e,i,a){if(a)return;t.find(".ekit-popup-modal.show").forEach((e=>t(e).removeClass("show")));let n=i.data("animation");e.addClass("show"),n&&i.addClass(n)},Advanced_Accordion:function(t){t.find(".boombasaskit-card > .collapse").on("shown.bs.collapse",i.WidgetAreaJSUpdate)},Advanced_Toggle:function(e){var a=e.find('[data-ekit-toggle="tab"]'),n=e.find(".ekit-custom-control-input");if(e.find(".elemenetskit-toggle-indicator").length>0){let i=e.find(".elemenetskit-toggle-indicator"),a=e.find(".boombasaskit-toggle-nav-link.active");function o(t,e){let n="click"===t?e.outerWidth():a.outerWidth(),o="click"===t?e.outerHeight():a.outerHeight(),s="click"===t?e.position().left:a.position().left,l="click"===t?e.position().top:a.position().top,r="click"===t?e.data("indicator-color"):a.data("indicator-color");i.css({width:n,height:o,left:s,top:l,backgroundColor:r})}o(),e.find(".elementkit-tab-nav > li > a").on("click",(function(e){o(e.type,t(this))}))}n.on("click",(function(){var e=this.checked?".boombasaskit-switch-nav-link-2":".boombasaskit-switch-nav-link-1";t(this).siblings(e).tab("show")})),a.on("shown.bs.tab",(function(){var a=e.find(t(this).attr("href"));n.length&&(n[0].checked=this.getAttribute("data-toggled")),i.WidgetAreaJSUpdate.call(a)}))},Advanced_Tab:function(e){var a=e.find('[data-ekit-toggle="tab"]'),n=e.data("settings");a.on("shown.bs.tab",(function(){var a=e.find(t(this).attr("href"));i.WidgetAreaJSUpdate.call(a),BoombasasKit_Helper.setURLHash(n,this,"ekit-handler-id")}))},Gallery:function(e){var i=e.find(".ekit_gallery_grid"),a=i.data("grid-config");i.imagesLoaded((function(){i.isotope(a)})),e.find(".filter-button-wraper").find("a").on("click",(function(e){e.preventDefault();var a=t(this);a.parents(".option-set").find(".selected").removeClass("selected"),a.addClass("selected"),i.isotope({filter:a.data("option-value")})}));var n=e.find(".ekit-gallery-portfolio-tilt"),o=i.data("tilt-config");n.tilt(o)},MotionText:function(e){var i=e.find(".ekit_motion_text_title");if(i.hasClass("ekit_char_based")){var a=i.children(".ekit_motion_text"),n=a.text().split(""),o=i.data("ekit-animation-delay-s"),s=o,l="";t.each(n,(function(t,e){l+=" "===e?e:'<span class="ekit-letter" style="animation-delay: '+o+"ms; -moz-animation-delay: "+o+"ms; -webkit-animation-delay: "+o+'ms;">'+e+"</span>",o+=s})),a.html(l)}i.boombasaWaypoint((function(){var t=this.adapter.$element.data("animate-class");this.adapter.$element.addClass(t).css("opacity",1),this.destroy()}),{offset:"100%"})},PopupModal:function(t){var e=t.data("id"),a=t.data("settings"),n=a&&"enable_cookie_consent"in a,o=n&&document.cookie.match("popup_cookie_"+e),s=t.find(".ekit-popup-modal"),l=t.find(".ekit-popup__content"),r=s.data("toggletype"),d=s.data("toggleafter");"time"===r&&d>0&&setTimeout((()=>{i.ShowModal(s,l,o)}),1e3*d);var c=t.find(".ekit-popup-modal__toggler-wrapper button, .ekit-popup-modal__toggler-wrapper img"),f=t.find(".ekit-popup__close, .ekit-popup-modal__close, .ekit-popup-footer__close");c.on("click",(function(t){t.preventDefault(),i.ShowModal(s,l)})),f.on("click",(function(t){t.preventDefault(),s.addClass("closing"),setTimeout((()=>{s.removeClass("show"),s.removeClass("closing")}),450),n&&(document.cookie="popup_cookie_"+e+"=1; path=/")}))},Zoom:function(t){var e=t.find(".ekit-zoom-counter"),i=t.find(".ekit-zoom-wrapper").data("settings");if(!e.length)return!1;var a=e.data("date"),n=new Date(a).getTime();n||(n=0);var o=setInterval((function(){var t=(new Date).getTime(),a=n-t,s=Math.floor(a/864e5),l=Math.floor(a%864e5/36e5),r=Math.floor(a%36e5/6e4),d=Math.floor(a%6e4/1e3),c="<ul><li><span class='number'>"+s+"</span><span class='text'>"+i.days+"</span></li><li><span class='number'>"+l+"</span><span class='text'>"+i.hours+"</span></li><li><span class='number'>"+r+"</span><span class='text'>"+i.minutes+"</span></li><li><span class='number'>"+d+"</span><span class='text'>"+i.seconds+"</span></li></ul>";e.html(c),a<0&&(clearInterval(o),e.html("EXPIRED"))}),1e3)},Unfold:function(e){var i=e.find(".ekit-unfold-btn"),a=e.find(".ekit-unfold-wrapper"),n=e.find(".ekit-unfold-data"),o=e.find(".ekit-unfold-data-inner"),s=a.data("config");s.collapse_height>=o.outerHeight()&&(i.hide(),n.addClass("active")),i.on("click",(function(){var e=this,i=t(this);e.style.display="none",n.hasClass("active")?(n.animate({height:s.collapse_height},parseInt(s.transition_duration,10)||0),i.html(s.expand_text)):(n.animate({height:o.outerHeight()},parseInt(s.transition_duration,10)||0),i.html(s.collapse_text)),n.toggleClass("active"),setTimeout((function(){e.style.display="block"}),300)}))},Woo_Product_slider:function(t){let e=t.find(".ekit-swiper-container"),i=e.data("autoplay"),a=e.data("loop"),n=e.data("speed"),o=e.data("space-between"),s=e.data("responsive-settings");new Swiper(e,{navigation:{nextEl:t.find(".ekit-navigation-next"),prevEl:t.find(".ekit-navigation-prev")},pagination:{el:t.find(".ekit-swiper-pagination"),type:"bullets",clickable:!0},autoplay:i&&i,loop:a&&Boolean(a),speed:n&&Number(n),slidesPerView:Number(s.ekit_columns_mobile),spaceBetween:o&&Number(o),breakpointsInverse:!0,breakpoints:{640:{slidesPerView:Number(s.ekit_columns_mobile),spaceBetween:o&&Number(o)},768:{slidesPerView:Number(s.ekit_columns_tablet),spaceBetween:o&&Number(o)},1024:{slidesPerView:Number(s.ekit_columns_desktop),spaceBetween:o&&Number(o)}}})},Mini_Cart:function(e){e.find(".ekit-dropdown-back").on("click mouseenter mouseleave",(function(e){var i=t(this),a=i.hasClass("ekit-mini-cart-visibility-click"),n=i.hasClass("ekit-mini-cart-visibility-hover"),o=i.find(".ekit-mini-cart-container");"click"===e.type&&a&&!t(e.target).parents("div").hasClass("ekit-mini-cart-container")?o.fadeToggle():"mouseenter"===e.type&&n?o.fadeIn():"mouseleave"===e.type&&n&&o.fadeOut()}))},Table:function(i){var a=i.data("settings");if(e.isEditMode()&&(a=e.config.elements.data[i.data("model-cid")].attributes),i.find(".ekit_table").length>0){var n=i.find(".ekit_table").data("settings"),o="text"===n.nav_style.trim()||"both"===n.nav_style.trim()?'<span class="ekit-tbl-pagi-nav ekit-tbl-pagi-prev">'+n.prev_text+"</span>":"",s="text"===n.nav_style.trim()||"both"===n.nav_style.trim()?'<span class="ekit-tbl-pagi-nav ekit-tbl-pagi-next">'+n.next_text+"</span>":"",l="arrow"===n.nav_style.trim()||"both"===n.nav_style.trim()?'<i class="ekit-tbl-pagi-nav-icon ekit-tbl-pagi-nav-prev-icon '+n.prev_arrow+'" aria-hidden="true"></i>':"",r="arrow"===n.nav_style.trim()||"both"===n.nav_style.trim()?'<i class="ekit-tbl-pagi-nav-icon ekit-tbl-pagi-nav-next-icon '+n.next_arrow+'" aria-hidden="true"></i>':"";t(window).trigger("resize");var d={buttons:!0===n.button?["copy","excel","csv"]:[],bFilter:n.search,autoFill:!0,pageLength:n.item_per_page?n.item_per_page:1,fixedHeader:n.fixedHeader,responsive:n.responsive,paging:n.pagination,ordering:n.ordering,info:n.info,language:{search:'<span class="ekit-table-search-label"><i class="fa fa-search" aria-hidden="true"></i></span>',searchPlaceholder:a.search_placeholder,info:a.info_text,infoEmpty:a.info_text?a.info_text.replace(/_START_|_END_|_TOTAL_/gi,"0"):"",lengthMenu:a.entries_text,paginate:{next:s+r,previous:l+o}}};!1===n.entries&&(d.dom="Bfrtip"),i.find(".ekit_table table").DataTable(d)}},TimeLine:function(e){e.find(".boombasaskit-invisible").boombasaWaypoint((function(){if(this.adapter.$element.hasClass("animated"))this.destroy();else{var t="animated "+this.adapter.$element.data("settings")._animation;this.adapter.$element.removeClass("boombasaskit-invisible").addClass(t)}}),{offset:"bottom-in-view"}),e.on("mouseenter",".horizantal-timeline > .single-timeline",(function(){t(this).addClass("hover").siblings().removeClass("hover")})).on("mouseleave",".horizantal-timeline > .single-timeline",(function(){t(this).removeClass("hover")}))},Creative_Button:function(e){var i=e.find(".ekit_position_aware_bg");e.on("mouseenter mouseleave",".ekit_position_aware",(function(e){var a=t(this).offset(),n=e.pageX-a.left,o=e.pageY-a.top;i.css({top:o,left:n})}))},Hotspot:function(e){var i=e.find(".ekit-location-on-click > .ekit-location_indicator, .ekit-location-on-hover.click > .ekit-location_indicator"),a=e.find(".ekit-location-on-hover:not(.click) > .ekit-location_indicator"),n=e.find(".ekit-location");function o(){let e=t(this).find(".ekit-location_outer"),i=t(this).find(".ekit-location_indicator"),a=i.width()/2+t(this).find(".ekit-hotspot-vertical-line").height(),n=i.width()+t(this).find(".ekit-hotspot-horizontal-line").height(),o=i.width()+t(this).find(".ekit-hotspot-horizontal-line").width();if(e.length)if(t(this).hasClass("ekit_hotspot_follow_line_top")?e.css({bottom:n,top:"auto"}):t(this).hasClass("ekit_hotspot_follow_line_bottom")?e.css({top:n,bottom:"auto"}):t(this).hasClass("ekit_hotspot_follow_line_right_top")||t(this).hasClass("ekit_hotspot_follow_line_left_top")?e.css("bottom",a):t(this).hasClass("ekit_hotspot_follow_line_right_bottom")||t(this).hasClass("ekit_hotspot_follow_line_left_bottom")?e.css("top",a):t(this).hasClass("ekit_hotspot_follow_line_right")?(e.css("top",-(e.height()/2-i.width()/2)),e.css("left",o)):t(this).hasClass("ekit_hotspot_follow_line_left")&&(e.css("top",-(e.height()/2-i.width()/2)),e.css("right",o)),e.offset().left<0)t(window).width()<=480&&t(this).find(".ekit-location_inner").css("max-width",t(window).width()),t(this).find(".ekit-location_inner").css("left",Math.abs(e.offset().left));else if(e.offset().left>0)if(t(window).width()<=480&&e.width()>t(window).width())t(this).find(".ekit-location_inner").css("max-width",t(window).width()),t(this).find(".ekit-location_inner").css("left",-Math.abs(e.offset().left));else if(e.offset().left+e.width()>t(window).width()){let i=Math.abs(e.offset().left+e.width()-t(window).width());t(this).find(".ekit-location_inner").css("left",-i)}else t(this).find(".ekit-location_inner").css("right",0)}t(window).resize((function(){t(window).width()<=480&&n.hasClass("hotspot-following-line-style")&&t(window).width()<=480&&n.removeClass("hotspot-following-line-style").addClass("hotspot-following-line-straight ekit_hotspot_follow_line_top"),e.find(".ekit-location_outer").each((function(){t(this).offset().top<0&&t(this).parents(".ekit-location-on-hover").addClass("bottom"),t(this).parent().hasClass("auto")&&t(this).offset().top<0&&t(this).parent().removeClass("ekit_hotspot_follow_line_top").addClass("ekit_hotspot_follow_line_bottom")})),n.each(o)})),t(window).trigger("resize"),i.on("click",(function(){e.find(".ekit-all-activated").length||t(this).parent().siblings().removeClass("active"),t(this).parent().toggleClass("active").removeClass("ekit-all-activated")})),a.on("mouseenter",(function(){n.removeClass("active")}))},Vertical_Menu:function(e){if(e.find(".ekit-vertical-main-menu-on-click").length>0){let t=e.find(".ekit-vertical-main-menu-on-click");e.find(".ekit-vertical-menu-tigger").on("click",(function(e){e.preventDefault(),t.toggleClass("vertical-menu-active")}))}if(e.find(".boombasaskit-megamenu-has").length>0){let i=e.find(".boombasaskit-megamenu-has"),a=e.parents(".boombasa-container"),n=e.find(".ekit-vertical-main-menu-wraper"),o=Math.floor(a.width()-n.width())+"px";i.on("mouseenter",(function(){let e=t(this).data("vertical-menu"),i=t(this).children(".boombasaskit-megamenu-panel");!e||e===undefined||o<=e?t(window).bind("resize",(function(){t(document).width()>1024?i.css({width:Math.floor(a.width()-n.width()-10)+"px"}):i.removeAttr("style")})).trigger("resize"):"string"==typeof e?/^[0-9]/.test(e)?i.css({width:e}):t(window).bind("resize",(function(){t(document).width()>1024?i.css({width:Math.floor(a.width()-n.width()-10)+"px"}):i.removeAttr("style")})).trigger("resize"):i.css({width:e+"px"})})),i.trigger("mouseenter")}},Video_Gallery:function(e){var i=e.find(".video-link.popup"),a=e.find(".video-link.inline"),n=(e.find(".ekit-video-gallery-wrapper.ekit-masonry"),e.find(".boombasaskit-main-filter>li>a")),o=e.find(".ekit-video-gallery.ekit-carousel"),s=o.data("config");i.length>0&&i.mysterypPopup({type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!0,fixedContentPos:!1,iframe:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allow="autoplay"></iframe></div>',patterns:{youtube:{index:"youtube.com/",id:"v=",src:"https://www.youtube.com/embed/%id%?autoplay=1&rel=0"}}}}),a.on("click",(function(e){e.preventDefault();var i=t(this).data("url");t(this).addClass("video-added").append('<iframe src="'+i+'" width="643" height="360" allow="autoplay" frameborder="0"></iframe>')})),n.on("click",(function(i){i.preventDefault();var a=t(this).data("value")?"."+t(this).data("value"):"";e.find("a").removeClass("selected"),t(this).addClass("selected"),e.find(".ekit-video-item").hide(),e.find(".ekit-video-item"+a).fadeIn()})),o.length&&(s.prevArrow='<button type="button" class="slick-prev"><i class="'+(s.prevArrow||"icon icon-left-arrow2")+'"></i></button>',s.nextArrow='<button type="button" class="slick-next"><i class="'+(s.nextArrow||"icon icon-right-arrow2")+'"></i></button>',o.slick(s)),jQuery(".ekit-video-gallery.ekit-masonry").isotope({percentPosition:!0,itemSelector:".ekit-video-item "})},Facebook_Feed:function(t){t.find(".ekit-fb-video-play-button").on("click",(()=>{let e=t.find(".video-container"),i=`\n                    <video controls autoplay>\n                        <source src="${e.data("src")}" type="video/mp4">\n                        Your browser does not support the video tag.\n                    </video>\n                `;e.html(i)}))},Facebook_Review:function(t){i.Social_Review_Slider(t.find(".ekit-review-slider-wrapper-facebook")),i.Handle_Review_More(t)},Yelp_Review:function(t){i.Social_Review_Slider(t.find(".ekit-review-slider-wrapper-yelp")),i.Handle_Review_More(t)},Trustpilot_Review:function(t){i.Social_Review_Slider(t.find(".ekit-review-slider-wrapper-trustpilot")),i.Handle_Review_More(t)},BlogPosts:function(e){var i=e.find(".ekit-blog-post-pagination-container"),a=e.data("id"),n={items:"#post-items--"+a,nagivation:"#post-nagivation--"+a};e.on("click",".ekit-blog-post-pagination-container a.page-numbers",(function(a){a.preventDefault();var o=t(this).attr("href");t.ajax({url:o}).done((function(a){var o=t(a),s=o.find(n.items).html(),l=o.find(n.nagivation).html();"loadmore"==i.data("ekit-blog-post-style")?e.find(n.items).append(s):e.find(n.items).html(s),e.find(n.nagivation).html(l)}))}))}};t(window).on("boombasa/frontend/init",i.init)}(jQuery,window.boombasaFrontend);