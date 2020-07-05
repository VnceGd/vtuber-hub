// Adapted from https://www.w3schools.com/howto/howto_js_filter_lists.asp
function searchLists() {
    // Declare variables
    var input, filter, li, a, i, txtValue;
    input = $('#searchInput')[0];
    filter = input.value.toUpperCase();
    li = $('.channel-list ul li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByClassName("search-term")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}