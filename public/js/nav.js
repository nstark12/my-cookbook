function responsiveNav() {
    const nav = document.getElementById('navbar')
    if(nav.className === 'navbar') {
        nav.className += 'responsive'
    } else {
        nav.className = 'navbar'
    }
}