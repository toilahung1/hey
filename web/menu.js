document.addEventListener('DOMContentLoaded', () => {
    const toggleLinks = document.querySelectorAll('.toggle-link');
    const submenus = document.querySelectorAll('.submenu');

    // Add event listener to all toggle links
    toggleLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-target');
            const targetMenu = document.getElementById(targetId);

            // Toggle visibility of the clicked submenu
            if (targetMenu.classList.contains('show')) {
                targetMenu.classList.remove('show');
            } else {
                // Hide all other submenus
                submenus.forEach(menu => menu.classList.remove('show'));
                targetMenu.classList.add('show');
            }
        });
    });

    // Hide submenu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('nav')) {
            submenus.forEach(menu => menu.classList.remove('show'));
        }
    });

    // Add active class to submenu items
    const submenuLinks = document.querySelectorAll('.submenu a');
    submenuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            submenuLinks.forEach(link => link.classList.remove('active'));
            e.target.classList.add('active');
        });
    });
});
