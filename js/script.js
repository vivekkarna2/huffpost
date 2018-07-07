// Strict Mode
"use strict";

// Window Load Event
$(window).on("load", function() {
    // Loader Fade Out
    $(".lx-loader").fadeOut();
    return false;
});

// Document Ready event
$(document).on("ready", function() {
	
	// Set Background Home
	if ($("*[data-background]").length) {
		$("*[data-background]").each(function(){
			$(this).css({"background": "url('" + $(this).attr("data-background") + "') no-repeat center center","background-size": "cover"});
		});	
	}
	
	// Carousel Set Up
	if($(".lx-carousel").length){
		$(".lx-carousel ul").each(function(){
			$(this).width(($(this).find("li").length+1)*$(this).find("li").outerWidth());
			$(this).css("left","-"+($(this).find("li").outerWidth())+"px");
		});				
	}
	if($(".lx-carousel-author").length){
		$(".lx-carousel-author").css("display","none")
	}
	
	// Resize Youtube Iframe
	if($("iframe[allowfullscreen]").length){
		$("iframe[allowfullscreen]").height($("iframe[allowfullscreen]").width() * 0.5625);
	}
	
	// Mini Slide Init
	if($(".lx-mini-slide").length){
		for(var i=0;i<$(".lx-mini-slide").length;i++){
			$(".lx-mini-slide:eq("+i+") ul li").css({"width":$(".lx-mini-slide:eq("+i+")").outerWidth()+"px"});
			$(".lx-mini-slide:eq("+i+") ul").css({"-webkit-transition":"all 0s","transition":"all 0s","left":"-"+$(".lx-mini-slide:eq("+i+") ul li").outerWidth()+"px"});		
		}		
	}
	
	return false;
});

var passed = "yes";
var timer;
$(".lx-carousel > .fa-angle-right").on("click",function(){
	var el = $(this);
	if(passed === "yes"){
		passed = "no";
		el.parent().find("ul").css({"-webkit-transition":"all 0.4s","transition":"all 0.4s","left":"-"+(el.parent().find("ul").find("li").outerWidth()*2)+"px"});
		window.setTimeout(function(){
			el.parent().find("ul").css({"-webkit-transition":"all 0s","transition":"all 0s","left":"-"+el.parent().find("ul").find("li").outerWidth()+"px"});
			var item = "<li>"+el.parent().find("ul").find("li:eq(0)").html()+"</li>";
			el.parent().find("ul").append(item);
			el.parent().find("ul").find("li:eq(0)").remove();
			passed = "yes";
		},500);
	}
});
$(".lx-carousel > .fa-angle-left").on("click",function(){
	var el = $(this);
	if(passed === "yes"){
		passed = "no";
		el.parent().find("ul").css({"-webkit-transition":"all 0.4s","transition":"all 0.4s","left":"0px"});
		window.setTimeout(function(){
			el.parent().find("ul").css({"-webkit-transition":"all 0s","transition":"all 0s","left":"-"+(el.parent().find("ul").find("li").outerWidth())+"px"});
			var item = "<li>"+el.parent().find("ul").find("li:last-child").html()+"</li>";
			el.parent().find("ul").prepend(item);
			el.parent().find("ul").find("li:last-child").remove();
			passed = "yes";
		},500);
	}
});

// Mini Slide Effect
var lx_passed = "yes";
$(".lx-mini-slide-nav > .fa-angle-right").on("click",function(){
	if(lx_passed === "yes"){
		lx_passed = "no";
		var ul = $(this).parent().parent().find("ul")
		ul.css({"-webkit-transition":"all 0.4s","transition":"all 0.4s","left":"-"+(ul.find("li").outerWidth()*2)+"px"});
		window.setTimeout(function(){
			ul.css({"-webkit-transition":"all 0s","transition":"all 0s","left":"-"+ul.find("li").outerWidth()+"px"});
			var item = "<li style='width:"+ul.find("li").outerWidth()+"px;'>"+ul.find("li:eq(0)").html()+"</li>";
			ul.append(item);
			ul.find("li:eq(0)").remove();
			lx_passed = "yes";
		},500);
	}
});
$(".lx-mini-slide-nav > .fa-angle-left").on("click",function(){
	if(lx_passed === "yes"){
		lx_passed = "no";
		var ul = $(this).parent().parent().find("ul")
		ul.css({"-webkit-transition":"all 0.4s","transition":"all 0.4s","left":"0px"});
		window.setTimeout(function(){
			ul.css({"-webkit-transition":"all 0s","transition":"all 0s","left":"-"+(ul.find("li").outerWidth())+"px"});
			var item = "<li style='width:"+ul.find("li").outerWidth()+"px;'>"+ul.find("li:last-child").prev(".lx-mini-slide ul li").html()+"</li>";
			ul.prepend(item);
			ul.find("li:last-child").prev(".lx-mini-slide ul li").remove();
			lx_passed = "yes";
		},500);
	}
});

// Share Popup
$('.popup').on("click",function() {
	var NWin = window.open($(this).attr('href'), '', 'scrollbars=1,height=300,width=600');
	if (window.focus){
		NWin.focus();
	}
	return false;
});	

// Responsive Menu Effect
$(".lx-main-menu-mobile > i").on("click", function() {
	if($(".lx-main-menu-mobile").css("left") === "-160px"){
		$(".lx-main-menu-mobile").css("left","0px");
		$(".lx-sidebar").css("right","-100%");
	}
	else{
		$(".lx-main-menu-mobile").css("left","-160px");
	}	
	return false;
});

// Submenu Show
$(".lx-main-menu-mobile ul li").on("click", function() {
	if($(this).find("ul").css("display") !== "block"){
		$(".lx-main-menu-mobile ul li ul").slideUp();
		$(this).find("ul").slideDown();
	}
	else{
		$(this).find("ul").slideUp();
	}	
	return false;
});

// Responsive Sidebar  Effect
$(".lx-add").on("click", function() {
	$(".lx-sidebar").css("right","0px");
	$(".lx-main-menu-mobile").css("left","-160px");
	return false;
});
$(".lx-sidebar > i").on("click", function() {
	$(".lx-sidebar").css("right","-100%");
	return false;
});

// Similar Article Effect
$(".lx-single-post-similar-head ul li a").on("click", function() {
	$(".lx-single-post-similar-head ul li a").removeClass("active");
	$(this).addClass("active");
	$(".lx-carousel").css("display","none");
	$("."+$(this).attr("data-bloc")).css("display","block");
	return false;
});

// Similar Article Navigation
$(".lx-single-post-similar-navigation .fa-angle-left").on("click", function() {
	if($(".lx-carousel-author").css("display") !== "block"){
		$(".lx-carousel-similar .fa-angle-left").trigger("click");
	}
	else{
		$(".lx-carousel-author .fa-angle-left").trigger("click");
	}
	return false;
});
$(".lx-single-post-similar-navigation .fa-angle-right").on("click", function() {
	if($(".lx-carousel-author").css("display") !== "block"){
		$(".lx-carousel-similar .fa-angle-right").trigger("click");
	}
	else{
		$(".lx-carousel-author .fa-angle-right").trigger("click");
	}
	return false;
});

// To top
$(".lx-footer-to-top").on("click", function() {
	$('html, body').animate({
		scrollTop: $("body").offset().top
	}, 1000);
	return false;
});	

// Show Demo events
$(".lx-show-demos").on("click", function() {
    $('html, body').animate({
        scrollTop: $(".lx-screenshots").offset().top
    }, 1000);
});