const sideLinks = document.querySelectorAll('.sidebar .side-menu li a:not(.logout)');
const toggler = document.getElementById('theme-toggler');
const tableBodyRows = document.querySelectorAll('table tbody tr')
const menuBar = document.querySelector('.content nav .bx.bx-menu');
const sideBar = document.querySelector('.sidebar');
const searchBtn = document.querySelector('.content nav form .form-input button');
const searchBtnIcon = document.querySelector('.content nav form .form-input button .bx');
const searchForm = document.querySelector('.content nav form');

// Applying Saved Color Scheme
const colorScheme = localStorage.getItem('colorScheme')
document.body.classList.toggle(colorScheme)
toggler.checked = (document.body.classList.contains('dark')) ? true : false

if (window.innerWidth < 600) {
    tableBodyRows.forEach(row => {
        if (row.firstElementChild.tagName != 'DIV') {
            row.insertAdjacentHTML('afterbegin', `<div class='row-data'> <p>User</p> <p>Order Date</p> <p>Status</p> </div>`)
        }
    })
}

sideLinks.forEach(item => {
    const li = item.parentElement;
    item.addEventListener('click', () => {
        sideLinks.forEach(i => {
            i.parentElement.classList.remove('active');
        })
        li.classList.add('active');
    })
});

menuBar.addEventListener('click', () => {
    sideBar.classList.toggle('close');
});

searchBtn.addEventListener('click', function (e) {
    if (window.innerWidth < 576) {
        e.preventDefault;
        searchForm.classList.toggle('show');
        if (searchForm.classList.contains('show')) {
            searchBtnIcon.classList.replace('bx-search', 'bx-x');
        } else {
            searchBtnIcon.classList.replace('bx-x', 'bx-search');
        }
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth < 800) {
        sideBar.classList.add('close');
    } else {
        sideBar.classList.remove('close');
    }
    if (window.innerWidth > 576) {
        searchBtnIcon.classList.replace('bx-x', 'bx-search');
        searchForm.classList.remove('show');
    }
});

toggler.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('dark');
        localStorage.setItem('colorScheme', 'dark')
    } else {
        document.body.classList.remove('dark');
        localStorage.removeItem('colorScheme')
    }
});