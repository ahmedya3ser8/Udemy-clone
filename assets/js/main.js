let tabs = Array.from(document.querySelectorAll("button[data-tab]"));

tabs.map(tab => {
  tabs[0].click();
  tab.addEventListener("click", function() {
    let selector = `.feature-courses-${this.dataset.tab} .carousel-item`;
    let courses = document.querySelectorAll(selector);
    courses.forEach((el) => {
      const slideCount = 4;
      let next = el.nextElementSibling;
      for (let i = 0; i < slideCount; i++) {
        if (!next) {
          next = courses[0];
        }
        let cloneChild = next.cloneNode(true);
        el.appendChild(cloneChild.children[0]);
        next = next.nextElementSibling;
      }
    });
  })
});

