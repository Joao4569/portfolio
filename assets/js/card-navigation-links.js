document.addEventListener('click', function (event) {
  // Check if the clicked element has a data-project-link attribute
  if (event.target.dataset.projectLink) {
    event.preventDefault(); // Prevent default behavior

    // Get the project key from the data attribute
    const projectKey = event.target.dataset.projectLink;

    // Map project keys to their corresponding accordion and card ids by creating a dictionary
    // This allows for easy access to the ids based on the project key
    const projectMap = {
      'ocean-basket': { accordionId: 'collapseTwo', cardId: 'ocean-basket' },
      'farm-fresh': { accordionId: 'collapseTwo', cardId: 'farm-fresh' },
    };

    // Get the corresponding accordion and card ids by destructuring the projectMap object
    // This allows us to easily access the ids without repeating the code
    const { accordionId, cardId } = projectMap[projectKey];

    // Open the corresponding accordion section
    const accordionSection = document.getElementById(accordionId);
    if (!accordionSection.classList.contains('show')) {
      const accordionButton = document.querySelector(`[data-bs-target="#${accordionId}"]`);
      accordionButton.click(); // Simulate a click to open the accordion

      // Wait for the accordion to finish opening
      accordionSection.addEventListener('transitionend', function onTransitionEnd() {
        // Scroll to the corresponding project card
        const projectCard = document.getElementById(cardId);
        projectCard.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Remove the event listener to avoid duplicate calls
        accordionSection.removeEventListener('transitionend', onTransitionEnd);
      });
    } else {
      // If the accordion is already open, scroll to the card immediately
      const projectCard = document.getElementById(cardId);
      projectCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
});