// Adapted from https://www.w3schools.com/howto/howto_js_filter_lists.asp
function searchLists() {
    let input, filter, groups, gr;

    input = $('#searchInput')[0];
    filter = input.value.toUpperCase();
    groups = $('.vtuber-group');

    // Hide VTuber groups not matching search query
    for (gr = 0; gr < groups.length; gr++) {
        let channels, ch, gr_a, gr_txt, flag;

        channels = groups[gr].getElementsByClassName("channel-box");
        flag = false;

        // Hide VTuber channels not matching search query
        for (ch = 0; ch < channels.length; ch++) {
            let ch_a, ch_txt;

            ch_a = channels[ch].getElementsByClassName("search-term")[0];
            ch_txt = ch_a.textContent || ch_a.innerText;

            // console.log(`${ch_txt}`);
            if (ch_txt.toUpperCase().indexOf(filter) > -1) {
                channels[ch].style.display = "";
                // Flag to show group if at least one item is displaying
                if (flag == false) flag = true;
            }
            else {
                channels[ch].style.display = "none";
            }
        }

        gr_a = groups[gr].getElementsByTagName("h1")[0];
        gr_txt = gr_a.textContent || gr_a.innerText;

        if (gr_txt.toUpperCase().indexOf(filter) < 0 && flag == false) {
            groups[gr].style.display = "none";
        }
        else {
            groups[gr].style.display = "";
        }
    }
}