$(document).ready(function() {
    $(".elm p").contents().filter(function() {
        return this.nodeType === 3 && this.nodeValue.includes("Updated On:");
    }).wrap('<span class="date"></span>');
});


/***************************************** header code for those who hase no babymenu *****************************************/
$(document).ready(function() {

    $('#site-menu-sidebar #menu-item-products .custom-submenu-masonry1 .mega-link').each(function() {
        if ($(this).find('.babymenu').length === 0) {
            $(this).addClass('nochild');
            const anchorTag = $(this).find('a').first(); 
            $(this).closest('li').before(anchorTag.clone()); 
        }
    });
});

/******************************************  End ******************************************/


/******************************** for /blogs page ********************************/

if (window.location.href === "https://methyl-life.com/blogs" || window.location.href === "https://methyl-life.com/blogs/") {
    // Hide all sections first
    $('#404-not-found #main .shopify-section').addClass('hide').removeClass('active');
    
    // Make the second section active and visible
    $('#404-not-found #main .shopify-section:nth-child(2)').addClass('active').removeClass('hide');
    
    // Update the document title
    document.title = "Blogs | Methyl Life"; 
} else if (window.location.href === "https://methyl-life.com/products/all" || window.location.href === "https://methyl-life.com/products/all/") {
    // Hide all sections first
    $('#404-not-found #main .shopify-section').addClass('hide').removeClass('active');
    
    // Make the third section active and visible
    $('#404-not-found #main .shopify-section:nth-child(3)').addClass('active').removeClass('hide');
    
    // Update the document title
    document.title = "Products | Methyl Life"; 
} else {
    // Default behavior for other URLs
    $('#404-not-found #main .shopify-section:nth-child(1)').addClass('active').removeClass('hide');
    $('#404-not-found #main .shopify-section').not(':nth-child(1)').addClass('hide').removeClass('active');
}

/******************************** END ********************************/


/******************************** COLLECTION PAGE TAB WORKING ********************************/

// document.addEventListener('DOMContentLoaded', function() {
//   if (window.location.pathname === '/collections/all') {
//     var firstTabHandle = 'l-methylfolate'; 
//     window.location.href = '/collections/' + firstTabHandle;
//   }
//   else if (window.location.pathname === '/collections/') {
//     var firstTabHandle = 'l-methylfolate'; 
//     window.location.href = '/collections/' + firstTabHandle;
//   }

  
// });

document.addEventListener('DOMContentLoaded', function() {
  if (window.location.pathname === '/collections/all') {
    window.location.href = '/collections';
  } else if (window.location.pathname === '/collections/') {
    var firstTabHandle = 'l-methylfolate'; 
    window.location.href = '/collections/' + firstTabHandle;
  }
});

if (window.location.pathname === '/collections') {
  $(".tab-heading a.tab-title").append("Collections")
}



$('.tabs-title-wraper a').each(function(index) {
    if (index < $('.tabs-title-wraper a').length - 1) {
        $(this).after('<span> | </span>');
    }
});


// $(document).ready(function() {
//   // Target the active tab inside the h2 and change only its text
//   var activeTabInH2 = $('#tab-heading .tab-title.active[tab-label="vitamin-b12"]');
  
//   // If the tab is active, change the text to "B12 Supplements"
//   if (activeTabInH2.length > 0) {
//     activeTabInH2.text("B12 Supplements");
//   }
// });

/******************************** END ********************************/

/******************************** product thumbnail slider start ********************************/

$('.product-gallery__thumbnails-holder').slick({
  dots: false,
  vertical: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  verticalSwiping: true,
  arrows: true,
  prevArrow: '<img src="https://cdn.shopify.com/s/files/1/0264/6369/9018/files/arrow-up.png?v=1727602674" alt="Previous" class="p-arrow">',
  nextArrow: '<img src="https://cdn.shopify.com/s/files/1/0264/6369/9018/files/arrow-down.png?v=1727602674" alt="Next" class="n-arrow">',
  responsive:[
    {
      breakpoint: 1024, //YOUR MOBILE WIDTH
      settings: "unslick" //DISABLE SLIDER
    }
  ]
});


/******************************** END ********************************/


/******************************** PRODUCT PAGE DESCRIPTION TABS ********************************/

const newHeading = document.createElement('h2');
newHeading.textContent = 'Description';
newHeading.id = 'heading-description';

const toggleContent = document.querySelector('.toggle__content');
toggleContent.insertBefore(newHeading, toggleContent.firstChild);

const headings = toggleContent.querySelectorAll('h2');

const uniqueTabHeading = document.getElementById('unique-tab-heading');

headings.forEach((heading, index) => {
    if (!heading.id) {
        heading.id = `heading-${Math.random().toString(36).substr(2, 9)}`; // Generate unique ID
    }

    const link = document.createElement('a');
    link.href = `#${heading.id}`;
    link.textContent = heading.textContent;
    link.style.cursor = 'pointer';
    link.style.display = 'inline-block'; // Keep all links in the same line

    uniqueTabHeading.appendChild(link);

    // Add a separator '|' except after the last heading
    if (index < headings.length - 1) {
        const separator = document.createElement('span');
        separator.textContent = ' | ';
        uniqueTabHeading.appendChild(separator);
    }
});

const links = uniqueTabHeading.querySelectorAll('a');

// Function to set the active class based on clicked tab
links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        links.forEach(l => l.classList.remove('active'));

        this.classList.add('active');

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const yOffset = -150;
        const yPosition = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({
            top: yPosition,
            behavior: 'smooth'
        });
    });
});

// Function to handle the active class based on intersection
const observerOptions = {
    root: null, // Use the viewport as the root
    rootMargin: '-150px 0px -150px 0px', // Trigger when heading is 150px from the top
    threshold: 0 // Trigger as soon as the heading enters the viewport
};

const observerCallback = (entries) => {
    entries.forEach(entry => {
        const link = Array.from(links).find(l => l.getAttribute('href').substring(1) === entry.target.id);
        if (entry.isIntersecting) {
            links.forEach(l => l.classList.remove('active'));
            if (link) {
                link.classList.add('active');
            }
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

// Observe each heading
headings.forEach(heading => observer.observe(heading));



/******************************** END ********************************/


/******************************** PRODUCT PAGE DESCRIPTION TABS ******************************* MOBILE  ********************************/

const newHeadingMobile = document.createElement('h2');
newHeadingMobile.textContent = 'Description';
newHeadingMobile.id = 'heading-description-mobile';

const toggleContentMobile = document.querySelector('.toggle__content-mob');
toggleContentMobile.insertBefore(newHeadingMobile, toggleContentMobile.firstChild);

const headingsMobile = toggleContentMobile.querySelectorAll('h2');

const uniqueTabHeadingMobile = document.getElementById('unique-tab-heading-mob');

// Create links for mobile headings
headingsMobile.forEach((heading, index) => {
    if (!heading.id) {
        heading.id = `heading-${Math.random().toString(36).substr(2, 9)}`; // Generate unique ID
    }

    const link = document.createElement('a');
    link.href = `#${heading.id}`;
    link.textContent = heading.textContent;
    link.style.cursor = 'pointer';
    link.style.display = 'inline-block'; // Ensure all links stay on the same line

    uniqueTabHeadingMobile.appendChild(link);

    // Add a separator '|' except after the last heading
    if (index < headingsMobile.length - 1) {
        const separator = document.createElement('span');
        separator.textContent = ' | ';
        uniqueTabHeadingMobile.appendChild(separator);
    }
});

const linksMobile = uniqueTabHeadingMobile.querySelectorAll('a');

// Click event for mobile tabs
linksMobile.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        linksMobile.forEach(l => l.classList.remove('active'));
        this.classList.add('active');

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const yOffset = -120;
        const yPosition = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({
            top: yPosition,
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for mobile
const observerOptionsMobile = {
    root: null,
    rootMargin: '-150px 0px -150px 0px',
    threshold: 0 // Trigger as soon as the heading enters the viewport
};

const observerCallbackMobile = (entries) => {
    entries.forEach(entry => {
        const link = Array.from(linksMobile).find(l => l.getAttribute('href').substring(1) === entry.target.id);
        if (entry.isIntersecting) {
            linksMobile.forEach(l => l.classList.remove('active'));
            if (link) {
                link.classList.add('active');
            }
        }
    });
};

const observerMobile = new IntersectionObserver(observerCallbackMobile, observerOptionsMobile);
headingsMobile.forEach(heading => observerMobile.observe(heading));


/******************************** END ********************************/

/************************************ description tab slide down on sticky header *******************************************/

$(document).ready(function() {
    const $stickyHeader = $('.sticky-header');
    const $tabContainer = $('.tab-container');

    // Function to check the sticky header class
    const checkStickyHeaderClass = function() {
        if ($stickyHeader.hasClass('show')) {
            $tabContainer.addClass('header-sticky');
        } else {
            $tabContainer.removeClass('header-sticky');
        }
    };

    // Mutation observer for class changes
    const observer = new MutationObserver(checkStickyHeaderClass);
    observer.observe($stickyHeader[0], { attributes: true });

    // Initial check in case it already has the 'show' class
    checkStickyHeaderClass();
});

/******************************** END ********************************/

/*************************************** Auto muted video on page load ***************************************/

$(document).ready(function(){
  $('.menu-right-video video').prop('muted', true).prop('autoplay', false)[0].play();
});


if (window.location.href === 'https://methyl-life.com/pages/policies#shipping-policy') {
    $('html, body').animate({ scrollTop: 0 }, 'slow'); // Smooth scroll to the top
}


/******************************** END ********************************/




// $(document).ready(function() {
//         // Select all iframes that have a PDF as the source
//         $('iframe').each(function() {
//             var src = $(this).attr('src');

//             // Check if the src contains a .pdf file
//             if (src && src.includes('.pdf')) {
//                 // Create a download link
//                 var downloadLink = $('<a>', {
//                     text: 'Download PDF',
//                     href: src,
//                     download: '',  // This enables the download functionality
//                     class: 'pdf-download-link',
//                     css: {
//                         'font-size': '16px',
//                         'color': '#007bff',
//                         'text-decoration': 'underline',
//                         'display': 'none',  // Hide it initially, will be shown based on screen size
//                         'text-align': 'center',
//                         'margin-top': '10px'
//                     }
//                 });

//                 // Insert the download link after the iframe
//                 $(this).after(downloadLink);
//             }
//         });

//         // Show or hide download link based on screen size
//         function handleDownloadLinkVisibility() {
//             if ($(window).width() < 768) {
//                 $('.pdfIframe').hide(); // Hide iframe on mobile
//                 $('.pdf-download-link').show(); // Show the download link on mobile
//             } else {
//                 $('.pdfIframe').show(); // Show iframe on larger screens
//                 $('.pdf-download-link').hide(); // Hide download link on larger screens
//             }
//         }

//         // Handle window resize events
//         $(window).resize(function() {
//             handleDownloadLinkVisibility();
//         });

//         // Initial check on page load
//         handleDownloadLinkVisibility();
//     });

/********************************************* Add download button above the pdf in description *********************************************/


$(document).ready(function() {
    // Select all iframes that have a PDF as the source
    $('iframe').each(function() {
        var src = $(this).attr('src');

        // Check if the src contains a .pdf file
        if (src && src.includes('.pdf')) {
            // Create a download link
            var downloadLink = $('<a>', {
                text: 'Download PDF',
                href: src,
                download: '',  // This enables the download functionality
                class: 'pdf-download-link',
                css: {
                    'font-size': '12px',
                    'color': '#007bff',
                    'text-decoration': 'underline',
                    'display': 'none',  
                    'text-align': 'end',
                    'width':'100%',
                    'display': 'block',
                    'margin-top': '5px',
                    'margin-bottom': '10px',
                   'border-bottom': '0'
                }
            });

            // Insert the download link before the iframe
            $(this).before(downloadLink);
        }
    });

    // Show or hide download link based on screen size
    function handleDownloadLinkVisibility() {
        if ($(window).width() < 768) {
            $('.pdfIframe').hide(); // Hide iframe on mobile
            $('.pdf-download-link').show(); // Show the download link on mobile
        } else {
            $('.pdfIframe').show(); // Show iframe on larger screens
            $('.pdf-download-link').hide(); // Hide download link on larger screens
        }
    }

    // Handle window resize events
    $(window).resize(function() {
        handleDownloadLinkVisibility();
    });

    // Initial check on page load
    handleDownloadLinkVisibility();
});


$(document).ready(function() {
  function checkWindowSize() {
    if ($(window).width() <= 768) {
      // On mobile, replace iframe with an image
      if ($('#pdf-image').length === 0) {
        // If the image doesn't exist yet, insert it after the iframe
        $('#pdf-iframe').after('<img id="pdf-image" class="pdf-image" src="https://via.placeholder.com/600x400?text=PDF+Preview+Image" alt="PDF Preview Image">');
      }
      // Hide the iframe and show the image
      $('#pdf-iframe').hide();
      $('#pdf-image').show();
    } else {
      // On desktop, show iframe and hide the image
      $('#pdf-iframe').show();
      $('#pdf-image').hide();
    }
  }

  // Initial check when the page loads
  checkWindowSize();

  // Check the window size on resize
  $(window).resize(function() {
    checkWindowSize();
  });
});

/********************************************* END *********************************************/


/********************************************* Remove Wholesale product from slider into cart drawer *********************************************/

document.querySelectorAll('.product-item').forEach(function(item) {
  const productNameElement = item.querySelector('.product-item__text a span');
  
  // Check if the product name contains the word "Wholesale"
  if (productNameElement && productNameElement.innerText.includes('Wholesale')) {
    // Add 'hidden' class to the product item
    item.classList.add('hidden');
  }
});


/********************************************* END *********************************************/



$(window).on('scroll', function() {
    var element = $('#stopscrolling');
    var productText = $('.product-text');
    
    if (element.offset().top < $(window).scrollTop() + $(window).height()) {
        productText.addClass('stopnow');
    } else {
        productText.removeClass('stopnow');
    }
});


/********************************************* END *********************************************/

/********************************************* Remove date from blogs related posts *********************************************/



