$(window).scroll(function() {
    if ($(window).scrollTop() > 600) {
        $('#backToTop').addClass('show');
    } else {
        $('#backToTop').removeClass('show');
    }
});

$('#backToTop').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '100');
});

const toggleSwitch = document.querySelector('.sidebarMini input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}
toggleSwitch.addEventListener('change', switchTheme);

var mode;

function settingMode() {
    mode = !mode;
    if (!mode) {
        window.localStorage.setItem('setting-mode', true)
        document.getElementById('sideBar').classList.add("is-opened");
    } else {
        window.localStorage.setItem('setting-mode', false)
        document.getElementById('sideBar').classList.remove("is-opened");
    }
};