function toggleHide() {
    let button = document.getElementById('btn');
    let fullNavbar = document.getElementById('full_Sidebar');
    let sidebar = document.getElementById('sidebar');
    if (sidebar.style.display != 'none') {
        sidebar.style.display = 'none';
        fullNavbar.style.display = 'block'
    } else {
        fullNavbar.style.display = 'none';
        sidebar.style.display = 'block';
    }

}