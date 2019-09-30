/*global $, document, window*/

$(function () {
    'use strict';

    $(document).ready(function () {
        $('.nav-item').click(function () {
        
            $('.active').toggleClass('active');
    
        });
    });
 
//Adjust slider height
    var winh   = $(window).height(),
        upperh = $('.upper-bar').innerHeight(),
        navh   = $('.navbar').innerHeight();
    
    $('.slider').height(winh - (upperh + navh));
    
    //featured  work shuffle
    $('.features-work ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class') === 'all') {
            $('.shuffle-images .col-md').css('opacity', 1);
        } else {
            $('.shuffle-images .col-md').css('opacity', '0.08');
            $($(this).data('class')).parent().css('opacity', 1);
            
        }
    });
    // our auto slider code    
    $(function autoslider() {
            
        $('.logo .active').each(function () {
                
            if (!$(this).is(':last-Child')) {
                    
                $(this).delay(3000).fadeOut(1000, function () {
                    
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    
                    autoslider();
                        
                });
                    
            } else {
                    
                
                $(this).delay(3000).fadeOut(1000, function () {
                
                
                    $(this).removeClass('active');
                
                
                    $('.logo div').eq(0).addClass('active').fadeIn();
                
                    autoslider();
            
                });
        
            }
    
        });

    });
});