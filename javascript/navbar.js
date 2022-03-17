
      const nav = document.getElementById('nav');
      let scrolled = false;

      window.onscroll = function () {
        if (window.pageYOffset > 400) {
          nav.classList.remove('top');
          if (!scrolled) {
            nav.style.transform = 'translateY(-70px)';
          }
          setTimeout(function () {
            nav.style.transform = 'translateY(0)';
            scrolled = true;
          }, 200);
        } else {
          nav.classList.add('top');
          scrolled = false;
        }
      };
    