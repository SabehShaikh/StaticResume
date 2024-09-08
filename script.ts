document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleProjectsBtn') as HTMLButtonElement;
    const projectsList = document.getElementById('projectsList') as HTMLDivElement;

    let isVisible = false;

    toggleButton.addEventListener('click', () => {
        if (isVisible) {
            projectsList.style.display = 'none';
            toggleButton.textContent = 'Show More';
        } else {
            projectsList.style.display = 'block';
            toggleButton.textContent = 'Show Less';
        }
        isVisible = !isVisible;
    });
});
