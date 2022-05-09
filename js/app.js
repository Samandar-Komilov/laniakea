window.addEventListener("scroll", function() {
  var navScroll = document.getElementById('nav');
  navScroll.classList.toggle("fixed", window.scrollY > 10); // navScrollga class qoshyapti
})

// Aynan menga kerak narsa! Page ning biror joyiga yetganda boladigan animatsiya
