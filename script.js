function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
    } else {
        sidebar.classList.add('open');
    }
}


document.addEventListener('DOMContentLoaded', function() {
    var elem = document.querySelector('.gallery');
    if (elem) {
        var msnry = new Masonry(elem, {
            // options
            itemSelector: '.gallery-item',
            columnWidth: '.gallery-item', // can also be a number
            percentPosition: true,
            gutter: 10 // optional spacing between items
        });
    }
});