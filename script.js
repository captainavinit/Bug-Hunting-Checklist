// script.js

document.addEventListener("DOMContentLoaded", function () {
    // JavaScript to dynamically style main title when all sub-checklist items are completed
    document.querySelectorAll('.sub-checklist input[type="checkbox"]').forEach(function (subCheckbox) {
        subCheckbox.addEventListener('change', function () {
            var mainTitle = this.closest('.sub-checklist').previousElementSibling;
            var subCheckboxes = this.closest('.sub-checklist').querySelectorAll('input[type="checkbox"]');
            var allSubCheckboxesChecked = Array.from(subCheckboxes).every(function (checkbox) {
                return checkbox.checked;
            });
            if (allSubCheckboxesChecked) {
                mainTitle.classList.add('completed');
            } else {
                mainTitle.classList.remove('completed');
            }
        });

        // Trigger the change event on page load to check the state of the main title
        subCheckbox.dispatchEvent(new Event('change'));
    });
});
