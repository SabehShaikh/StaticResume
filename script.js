// TypeScript file: script.ts
document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('toggleProjectsBtn');
    var projectsList = document.getElementById('projectsList');
    var isVisible = false;
    toggleButton.addEventListener('click', function () {
        if (isVisible) {
            projectsList.style.display = 'none';
            toggleButton.textContent = 'Show More';
        }
        else {
            projectsList.style.display = 'block';
            toggleButton.textContent = 'Show Less';
        }
        isVisible = !isVisible;
    });
});
