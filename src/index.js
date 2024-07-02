document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {

            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');
        });
    });

    // Show / hide the dropdown menus.
    const $dropdownMenus = Array.prototype.slice.call(document.querySelectorAll('.has-dropdown'), 0);
    $dropdownMenus.forEach(dd => {
        const $link = dd.getElementsByClassName("navbar-link")[0];
        const $dropdown = dd.getElementsByClassName("navbar-dropdown")[0];

        $link.addEventListener('click', (e) => {
            e.preventDefault();
            $dropdown.classList.toggle('is-active');
        });
    });

    // Link modals and modal buttons.
    const $buttons = Array.prototype.slice.call(document.querySelectorAll('.modal-button'), 0);
    $buttons.forEach(button => {
        const modalId = button.dataset.modalid;
        const $modal = document.getElementById(modalId);

        if ($modal) {
            const hideModal = () => {
                $modal.style.display = 'none';
            }

            button.addEventListener('click', function (event) {
                $modal.style.display = 'flex';
                const $closeButton = $modal.querySelector(".close");
                if ($closeButton) {
                    $closeButton.addEventListener('click', function () {
                        hideModal();
                    })
                }
            });
            window.addEventListener('click', function (event) {
                if (event.target === $modal) {
                    hideModal();
                }
            });
            document.addEventListener('keydown', function (event) {
                if (event.key === "Escape") {
                    hideModal();
                }
            })
        }
    });
});