const MAX_LENGTH_GRID = 18;
const MAX_LENGTH_LIST = 100;

let listView = false;

// Limit the length of a string based on grid/list view
function checkLength(string) {
    let maxLength = listView ? MAX_LENGTH_LIST : MAX_LENGTH_GRID;

    return string.length > maxLength ? string.substring(0, maxLength) + "..." : string;
}

// Create and append a channel box to channel-list div with id corresponding to channels array index
function populateList(list, id) {
    let ytId = channels[list][id][channelId];
    let fullName = channels[list][id][channelName];
    let nameString = checkLength(fullName);

    let channelBoxTemplate = `
        <li class="channel-box">
            <a href="https://www.youtube.com/channel/${ytId}" target="_blank" rel="noopener">
                <span class="search-term">${fullName}</span>
                <div class="channel-content">
                    <div class="channel-icon">
                        <img src="${channels[list][id][channelIcon]}" alt="${fullName}-thumbnail"/>
                    </div>
                    <!--<div id="live-${id}" class="live-indicator">LIVE</div>-->
                    <!--<button onclick="getLivestreamStatus(${ytId})">Refresh</button>-->
                    <div class="channel-title">
                        <h3>${nameString}</h3>
                    </div>
                </div>
            </a>
        </li>
        `;
    
    let stringId = ""
    switch (list) {
        case 0:
            stringId = "hololive-list";
            break;
        case 1:
            stringId = "hololive_id-list";
            break;
        case 2:
            stringId = "holostars-list";
            break;
    }

    $(`#${stringId} ul`).append(channelBoxTemplate);
}

// Clear and re-populate the channel-list div
function refreshList() {
    $('.channel-list ul').html("");
    for (let i = 0; i < channels.length; i++) {
        for (let j = 0; j < channels[i].length; j++) {
            populateList(i, j);
        }
    }
}

// Snippet modified from Webdevtrick (https://webdevtrick.com)
// Toggle between grid and list view
$(".view a").on('click', function() {
    listView = !listView;
    refreshList();

    $('.channel-list ul').toggleClass('list');
    $('.view').toggleClass('list');
});

refreshList();