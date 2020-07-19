// Create anchor links for each VTuber group
function generateNavMenu() {
    for (let i = 0; i < channelGroups.length; i++) {
        let navBtn = `
            <a href="#${channelGroups[i][LOCALIZED_NAME]}" style="--anim-order: ${i}">
                <img class="channel-icon" src="${channelGroups[i][CHANNEL_ICON]}" title="${channelGroups[i][LOCALIZED_NAME]}">
            </a>
        `;

        $('.nav-menu').append(navBtn);
    }
}

function toggleNavDropdown() {
    $('.nav-menu a').toggleClass('visible');
    $('#dropdown-icon').toggleClass('spin');
}

generateNavMenu();