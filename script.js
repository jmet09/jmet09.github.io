
function toggleClass() {
    let menu_button = document.getElementById('menu-button');
    menu_button.classList.toggle('active');
    menu_button.classList.toggle('not-active');

    if(menu_button.classList.contains('active')) {
       document.getElementById('popup').style.display = 'block';
    } else {
        document.getElementById('popup').style.display = 'none';
    }
}