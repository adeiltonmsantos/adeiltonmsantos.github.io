const toggleTheme = document.getElementById('icon-change-theme');
const rootHtml = document.documentElement;

function changeTheme() {
    const currentTheme = rootHtml.getAttribute('data-theme');

    if (currentTheme === 'dark') {
        rootHtml.setAttribute('data-theme', 'light');
    } else {
        rootHtml.setAttribute('data-theme', 'dark');
    }
}

toggleTheme.addEventListener('click', changeTheme);