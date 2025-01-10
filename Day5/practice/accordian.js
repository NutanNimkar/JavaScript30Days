const accordianButtons = document.querySelectorAll('.accordion-title');
const allowMultipleCheckbox = document.getElementById("allowMultiple");
accordianButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
  
      if (allowMultipleCheckbox.checked) {
        // Allow multiple sections to be open
        content.classList.toggle('accordion-content-hidden');
      } else {
        // Only allow one section to be open at a time
        document.querySelectorAll('.accordion-content').forEach((el) => {
          if (el !== content) {
            el.classList.add('accordion-content-hidden');
          }
        });
        content.classList.toggle('accordion-content-hidden');
      }
    });
  });
  