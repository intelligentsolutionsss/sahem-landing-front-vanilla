document.addEventListener('click', (e) => {
    handleNav(e);
    handleToggleSidebar(e);
})

const handleNav = (e) => {
    const el = e.target;
    const isSidebarInClosest = el.closest('.sidebar');
    const parent = el.closest('.nav-item');

    if (parent) {
        document.querySelectorAll('.nav-item.active')?.forEach(item => {
            item.classList.remove('active');
        })
        parent.classList.add('active');
    }
    if (isSidebarInClosest) {
        closeSidebarAndOverlay();
    }
}

const handleToggleSidebar = (e) => {
    const el = e.target;
    if (el.closest('.toggle-sidebar') || el.closest('.overlay')) {
        document.querySelector('.sidebar').classList.toggle('open');
        document.querySelector('.overlay').classList.toggle('open');
    }
}

const closeSidebarAndOverlay = () => {
    document.querySelector('.sidebar').classList.remove('open');
    document.querySelector('.overlay').classList.remove('open');
}

window.addEventListener('resize', closeSidebarAndOverlay)

document.addEventListener('componentsLoaded', () => {
    const { href } = window.location;
    document.querySelectorAll('.nav-item').forEach(item => {
        if (href == item.querySelector('a').href) {
            item.classList.add('active');
        }
    })
})