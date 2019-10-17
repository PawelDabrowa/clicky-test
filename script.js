//======== Responsive navigation ======//
const burgerMenu = document.querySelector('.burger');
const activeElement = document.querySelectorAll('.element');
const offButton = document.querySelector('.off');

function addMenu() {
    for (i = 0; i < activeElement.length; i++) {
        activeElement[i].classList.toggle('active-on');
    }

}
burgerMenu.addEventListener('click', addMenu);

//======== End of responsive navigation ======//

//======== Start owl carousel top ======//

$('.owl-carousel_img').owlCarousel({
    stagePadding: 200,
    loop: true,
    margin: 10,
    pagination: false,
    navigation: true,
    items: 1,
    lazyLoad: true,
    autoplay: 3000,
    smartSpeed: 1000,
    dots: true,
    responsive: {
        0: {
            items: 1,
            stagePadding: 60
        },
        600: {
            items: 1,
            stagePadding: 100
        },
        1000: {
            items: 1,
            stagePadding: 200
        },
        1200: {
            items: 1,
            stagePadding: 250
        },
        1400: {
            items: 1,
            stagePadding: 300
        },
        1600: {
            items: 1,
            stagePadding: 350
        },
        1800: {
            items: 1,
            stagePadding: 400
        }
    }
});

//======== End owl carousel ======//


/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 */


(function (window) {

    'use strict';

    // class helper functions from bonzo https://github.com/ded/bonzo

    function classReg(className) {
        return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
    }
    var hasClass, addClass, removeClass;

    if ('classList' in document.documentElement) {
        hasClass = function (elem, c) {
            return elem.classList.contains(c);
        };
        addClass = function (elem, c) {
            elem.classList.add(c);
        };
        removeClass = function (elem, c) {
            elem.classList.remove(c);
        };
    } else {
        hasClass = function (elem, c) {
            return classReg(c).test(elem.className);
        };
        addClass = function (elem, c) {
            if (!hasClass(elem, c)) {
                elem.className = elem.className + ' ' + c;
            }
        };
        removeClass = function (elem, c) {
            elem.className = elem.className.replace(classReg(c), ' ');
        };
    }

    function toggleClass(elem, c) {
        var fn = hasClass(elem, c) ? removeClass : addClass;
        fn(elem, c);
    }

    var classie = {
        hasClass: hasClass,
        addClass: addClass,
        removeClass: removeClass,
        toggleClass: toggleClass,
        has: hasClass,
        add: addClass,
        remove: removeClass,
        toggle: toggleClass
    };

    if (typeof define === 'function' && define.amd) {

        define(classie);
    } else {

        window.classie = classie;
    }

})(window);
var $ = function (selector) {
    return document.querySelector(selector);
}
var accordion = $('.acc');





accordion.addEventListener("click", function (e) {
    e.stopPropagation();
    e.preventDefault();
    if (e.target && e.target.nodeName == "A") {
        var classes = e.target.className.split(" ");
        if (classes) {
            for (var x = 0; x < classes.length; x++) {
                if (classes[x] == "acc_title") {
                    var title = e.target;

                    var content = e.target.parentNode.nextElementSibling;

                    classie.toggle(title, 'acc_title_active');

                    if (classie.has(content, 'acc_panel_col')) {
                        if (classie.has(content, 'anim_out')) {
                            classie.remove(content, 'anim_out');
                        }
                        classie.add(content, 'anim_in');

                    } else {
                        classie.remove(content, 'anim_in');
                        classie.add(content, 'anim_out');
                    }
                    classie.toggle(content, 'acc_panel_col');
                }
            }
        }

    }
});