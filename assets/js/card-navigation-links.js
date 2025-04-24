document.addEventListener('click', function (event) {
  // Check if the clicked element is a link with a specific id
  if (event.target.id === 'ocean-basket-link' || event.target.id === 'farm-fresh-link') {
    event.preventDefault(); // Prevent default behavior

    // Map link ids to their corresponding accordion and card ids
    const projectMap = {
      'ocean-basket-link': { accordionId: 'collapseTwo', cardId: 'ocean-basket' },
      'farm-fresh-link': { accordionId: 'collapseTwo', cardId: 'farm-fresh' },
    };

    // Get the corresponding accordion and card ids
    const { accordionId, cardId } = projectMap[event.target.id];

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