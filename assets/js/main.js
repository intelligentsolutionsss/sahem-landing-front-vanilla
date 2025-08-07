document.addEventListener('click', (e) => {
    const el = e.target;
    const parent = el.closest('.nav-item');

    if (parent) {
        document.querySelectorAll('.nav-item.active')?.forEach(item => {
            item.classList.remove('active');
        })
        parent.classList.add('active');
    }
})

document.addEventListener('componentsLoaded', () => {
    const {href} = window.location;
    document.querySelectorAll('.nav-item').forEach(item => {
        if (href == item.querySelector('a').href) {
            item.classList.add('active');
        }
    })

})