var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}


var slideIndex1 = 0;
showSlide();

function showSlide() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex1++;
    if (slideIndex1 > slides.length) { slideIndex1 = 1 }
    slides[slideIndex1 - 1].style.display = "block";
    setTimeout(showSlide, 3500); 
}


document.getElementById("scrollButton").addEventListener("click", function() {
    
    const targetDiv = document.getElementById("video-section");
    
    
    targetDiv.scrollIntoView({
      behavior: "smooth"
    });
  });


  const image = document.getElementById("resizableImage");
  let currentSize = 80; 
  let isZoomed = false;
  
  function toggleZoom() {
      isZoomed = !isZoomed;
      resizeImage();
  }
  
  function resizeImage() {
      if (isZoomed) {
          currentSize += 10;
      } else {
          currentSize -= 10;
      }
      
      if (currentSize < 80) {
          currentSize = 80; 
          isZoomed = false;
      }
      
      image.style.width = currentSize + "%";
  }

  var menuItems = document.querySelectorAll('.menu a');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            var navi = document.querySelector('.navi');
            navi.classList.remove('active');
        });
    });



    document.getElementById('contactForm').addEventListener('submit', function (event) {
        
        event.preventDefault();

        
        var nameInput = this.elements['name'];
        var emailInput = this.elements['email'];
        var phoneInput = this.elements['phone'];
        var messageInput = this.elements['message'];

        
        if (!nameInput.value.trim()) {
            showAlert('Please enter your name.');
            nameInput.focus();
            return;
        }

        if (!emailInput.value.trim()) {
            showAlert('Please enter your email address.');
            emailInput.focus();
            return;
        } else if (!isValidEmail(emailInput.value)) {
            showAlert('Please enter a valid email address.');
            emailInput.focus();
            return;
        }

        if (!phoneInput.value.trim()) {
            showAlert('Please enter your phone number.');
            phoneInput.focus();
            return;
        } else if (!isValidPhone(phoneInput.value)) {
            showAlert('Please enter a valid phone number.');
            phoneInput.focus();
            return;
        }

        if (!messageInput.value.trim()) {
            showAlert('Please enter your message.');
            messageInput.focus();
            return;
        }

        
        this.submit();
    });

    
    function isValidEmail(email) {
        var emailRegex = /^\S+@\S+\.\S+$/;
        return emailRegex.test(email);
    }

    function isValidPhone(phone) {
        var phoneRegex = /^\d{10}$/; 
        return phoneRegex.test(phone);
    }


    function showAlert(message) {
        var alertDiv = document.createElement('div');
        alertDiv.classList.add('alert');
        alertDiv.textContent = message;

        var form = document.getElementById('contactForm');
        form.appendChild(alertDiv);

        
        setTimeout(function () {
            alertDiv.remove();
        }, 3000);
    }

    const carImage = document.querySelector('.car');
    const carContainer = document.querySelector('.car-container');
    let isMovingRight = false;
    
    carImage.addEventListener('click', () => {
      isMovingRight = !isMovingRight;
      moveCar();
    });
    
    function moveCar() {
      const carWidth = carImage.clientWidth;
      const containerWidth = carContainer.clientWidth;
    
      if (isMovingRight) {
        carImage.style.transform = `translateX(${containerWidth - carWidth}px)`;
      } else {
        carImage.style.transform = 'translateX(0)';
      }
    }
    


const scrollToTopBtn = document.getElementById('scrollToTopBtn');


window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
};

function scrollToTop() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}




const animateOnScroll = (element, animation) => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;
  
    if (elementPosition < screenPosition) {
      element.classList.add(animation);
    }
  };
  
  const animatedElements = document.querySelectorAll('.mid-section, .mid-section2, .post');
  
  const handleScroll = () => {
    animatedElements.forEach((element) => {
      if (!element.classList.contains('animated')) {
        animateOnScroll(element, 'fadeInUp');
        element.classList.add('animated');
      }
    });
  };
  
  
  window.addEventListener('load', handleScroll);
  window.addEventListener('scroll', handleScroll);
  
  
   





  
  
  

