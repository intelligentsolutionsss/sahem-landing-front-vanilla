document.addEventListener('click', (e) => {
    handleNav(e);
    handleToggleSidebar(e);
})

const handleNav = (e) => {
    const el = e.target;
    const parent = el.closest('.nav-item');

    if (parent) {
        document.querySelectorAll('.nav-item.active')?.forEach(item => {
            item.classList.remove('active');
        })
        parent.classList.add('active');
    }
}

handleToggleSidebar = (e) => {
    const el = e.target;
    if (el.closest('.toggle-sidebar') || el.closest('.overlay')) {
        document.querySelector('.sidebar').classList.toggle('open');
        document.querySelector('.overlay').classList.toggle('open');
    }
}

window.addEventListener('resize', () => {
    document.querySelector('.sidebar').classList.remove('open');
    document.querySelector('.overlay').classList.remove('open');
})

document.addEventListener('componentsLoaded', () => {
    const { href } = window.location;
    document.querySelectorAll('.nav-item').forEach(item => {
        if (href == item.querySelector('a').href) {
            item.classList.add('active');
        }
    })
})