

const header = document.querySelector("header");


const sectionOne = document.querySelector(".main");

const sectionOneOptions = {};


const sectionOneObserver = new IntersectionObserver (function(
    entries,
     sectionOneObserver
     ) {
         entries.forEach(entry => {
             if (!entry.isIntersecting) {
                 header.classList.add("headerScrolled")
             } else {
                 header.classList.remove("headerScrolled")
             }

         });
     },
     sectionOneOptions);

     sectionOneObserver.observe(sectionOne);