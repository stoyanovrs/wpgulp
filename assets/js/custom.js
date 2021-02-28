"use strict";

/* global wp, jQuery */

/**
 * File customizer.js.
 *
 * Theme Customizer enhancements for a better user experience.
 *
 * Contains handlers to make Theme Customizer preview reload changes asynchronously.
 */
(function ($) {
  // Site title and description.
  wp.customize('blogname', function (value) {
    value.bind(function (to) {
      $('.site-title a').text(to);
    });
  });
  wp.customize('blogdescription', function (value) {
    value.bind(function (to) {
      $('.site-description').text(to);
    });
  }); // Header text color.

  wp.customize('header_textcolor', function (value) {
    value.bind(function (to) {
      if ('blank' === to) {
        $('.site-title, .site-description').css({
          clip: 'rect(1px, 1px, 1px, 1px)',
          position: 'absolute'
        });
      } else {
        $('.site-title, .site-description').css({
          clip: 'auto',
          position: 'relative'
        });
        $('.site-title a, .site-description').css({
          color: to
        });
      }
    });
  });
})(jQuery);
"use strict";

// /**
//  * File navigation.js.
//  *
//  * Handles toggling the navigation menu for small screens and enables TAB key
//  * navigation support for dropdown menus.
//  */
// ( function() {
// 	const siteNavigation = document.getElementById( 'site-navigation' );
// 	// Return early if the navigation don't exist.
// 	if ( ! siteNavigation ) {
// 		return;
// 	}
// 	const button = siteNavigation.getElementsByTagName( 'button' )[ 0 ];
// 	// Return early if the button don't exist.
// 	if ( 'undefined' === typeof button ) {
// 		return;
// 	}
// 	const menu = siteNavigation.getElementsByTagName( 'ul' )[ 0 ];
// 	// Hide menu toggle button if menu is empty and return early.
// 	if ( 'undefined' === typeof menu ) {
// 		button.style.display = 'none';
// 		return;
// 	}
// 	if ( ! menu.classList.contains( 'nav-menu' ) ) {
// 		menu.classList.add( 'nav-menu' );
// 	}
// 	// Toggle the .toggled class and the aria-expanded value each time the button is clicked.
// 	button.addEventListener( 'click', function() {
// 		siteNavigation.classList.toggle( 'toggled' );
// 		if ( button.getAttribute( 'aria-expanded' ) === 'true' ) {
// 			button.setAttribute( 'aria-expanded', 'false' );
// 		} else {
// 			button.setAttribute( 'aria-expanded', 'true' );
// 		}
// 	} );
// 	// Remove the .toggled class and set aria-expanded to false when the user clicks outside the navigation.
// 	document.addEventListener( 'click', function( event ) {
// 		const isClickInside = siteNavigation.contains( event.target );
// 		if ( ! isClickInside ) {
// 			siteNavigation.classList.remove( 'toggled' );
// 			button.setAttribute( 'aria-expanded', 'false' );
// 		}
// 	} );
// 	// Get all the link elements within the menu.
// 	const links = menu.getElementsByTagName( 'a' );
// 	// Get all the link elements with children within the menu.
// 	const linksWithChildren = menu.querySelectorAll( '.menu-item-has-children > a, .page_item_has_children > a' );
// 	// Toggle focus each time a menu link is focused or blurred.
// 	for ( const link of links ) {
// 		link.addEventListener( 'focus', toggleFocus, true );
// 		link.addEventListener( 'blur', toggleFocus, true );
// 	}
// 	// Toggle focus each time a menu link with children receive a touch event.
// 	for ( const link of linksWithChildren ) {
// 		link.addEventListener( 'touchstart', toggleFocus, false );
// 	}
// 	/**
// 	 * Sets or removes .focus class on an element.
// 	 */
// 	function toggleFocus() {
// 		if ( event.type === 'focus' || event.type === 'blur' ) {
// 			let self = this;
// 			// Move up through the ancestors of the current link until we hit .nav-menu.
// 			while ( ! self.classList.contains( 'nav-menu' ) ) {
// 				// On li elements toggle the class .focus.
// 				if ( 'li' === self.tagName.toLowerCase() ) {
// 					self.classList.toggle( 'focus' );
// 				}
// 				self = self.parentNode;
// 			}
// 		}
// 		if ( event.type === 'touchstart' ) {
// 			const menuItem = this.parentNode;
// 			event.preventDefault();
// 			for ( const link of menuItem.parentNode.children ) {
// 				if ( menuItem !== link ) {
// 					link.classList.remove( 'focus' );
// 				}
// 			}
// 			menuItem.classList.toggle( 'focus' );
// 		}
// 	}
// }() );
var toggleBtn = document.querySelector('.menu-toggle');
var mainNav = document.querySelector('.main-navigation');
var saitMain = document.querySelector('.site-main');
toggleBtn.addEventListener('click', function () {
  console.log('click hamburger');

  if (toggleBtn.classList.contains('cliked')) {
    mainNav.classList.remove('open');
    toggleBtn.classList.remove('cliked');
  } else {
    mainNav.classList.add('open');
    toggleBtn.classList.add('cliked');
  } // 	if(mainNav.classList.contains('open')){ // Close Hamburger Menu
  // 		mainNav.classList.remove('open');    
  // 		};
  // 	} else { // Open Hamburger Menu
  // 		body.classList.add('noscroll');
  // 		header.classList.add('open');
  // 		fadeElems.forEach(function(element){
  // 		  element.classList.remove('fade-out');
  // 		  element.classList.add('fade-in');
  // 		});
  // 	  }  
  // }

}); // const dropToggle = document.querySelector('.menu-item-has-children');
// dropToggle.addEventListener('click', function(){
// 	console.log('click drop');
// 	if (dropToggle.classList.contains('drop')) {
// 		dropToggle.classList.remove('drop');
// 	} else {
// 		dropToggle.classList.add('drop');
// 	}
// });

var dropToggle = document.querySelector('.menu-item-has-children');
dropToggle.addEventListener('click', function () {
  console.log('click drop');
  dropToggle.classList.toggle('drop');
}); // var acc = document.getElementsByClassName(".menu-item-has-children");
// var i;
// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     /* Toggle between adding and removing the "active" class,
//     to highlight the button that controls the panel */
//     this.classList.toggle("drop");
//     /* Toggle between hiding and showing the active panel */
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }