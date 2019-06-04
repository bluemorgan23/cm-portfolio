

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
  });

let options = {
  strings: ["Chris Blue Morgan", "Software Developer", "Nashville, Tennessee"],
  typeSpeed: 80,
  loop: true,
  backSpeed: 80,
  backDelay: 2000,
  startDelay: 500
};

let typed = new Typed(".mainHead", options);



