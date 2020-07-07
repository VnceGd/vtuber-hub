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
    let ytId = channels[list][id][CHANNEL_ID];
    let fullName = channels[list][id][CHANNEL_NAME];
    let localizedName = searchTerms[list][id][LOCALIZED_NAME];
    let twitterHandle = searchTerms[list][id][TWITTER_HANDLE];
    let nameString = checkLength(fullName);

    let channelBoxTemplate = `
        <li class="channel-box">
            <a href="https://www.youtube.com/channel/${ytId}" target="_blank" rel="noopener">
                <span class="search-term">${fullName}, ${localizedName}, ${twitterHandle}</span>
                <div class="channel-content">
                    <div class="channel-icon">
                        <img src="${channels[list][id][CHANNEL_ICON]}" alt="${fullName}-thumbnail"/>
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
            stringId = "hololive";
            break;
        case 1:
            stringId = "hololive_id";
            break;
        case 2:
            stringId = "holostars";
            break;
    }
    stringId += "-list";

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
function toggleListView() {
    listView = !listView;
    refreshList();

    $('.channel-list ul').toggleClass('list');
    $('.view').toggleClass('list');
}

// Set default view to list view if screen width less than 540px
function setDefaultView() {
    if ($(document).width() < 540) {
        toggleListView();
    }
}

$(".view a").on('click', toggleListView);

setDefaultView();
refreshList();