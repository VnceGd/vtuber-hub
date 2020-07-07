const MAX_LENGTH_GRID = 18;
const MAX_LENGTH_LIST = 100;

let listView = false;

// Limit the length of a string based on grid/list view
function checkLength(string) {
    let maxLength = listView ? MAX_LENGTH_LIST : MAX_LENGTH_GRID;

    return string.length > maxLength ? string.substring(0, maxLength) + "..." : string;
}

// Return platform associated with group specified by list
function setPlatform(id) {
    switch (id) {
        case VtuberGroup.HOLOLIVE:
        case VtuberGroup.HOLOLIVE_ID:
        case VtuberGroup.HOLOSTARS:
        case VtuberGroup.NIJISANJI:
            return Platform.YOUTUBE;
        case VtuberGroup.HOLOLIVE_CN:
            return Platform.BILIBILI;
    }
}

// Create and append a vtuber-group div to the main container
function createList(list) {
    let channelId = channelGroups[list][CHANNEL_ID];
    let channelName = channelGroups[list][CHANNEL_NAME];
    let platformLink = setPlatform(channelId);

    let listTemplate = `
        <div class="vtuber-group">
            <a href="${platformLink}${channelId}" target="_blank" rel="noopener">
                <h1>
                    <img src="${channelGroups[list][CHANNEL_ICON]}" alt="${channelName}-thumbnail"/>
                    ${channelName}
                </h1>
            </a>
            <div id="${channelId}-list" class="channel-list"><ul></ul></div>
        </div>
    `;

    $(`#vtuber-groups .container`).append(listTemplate);
}

// Create and append a channel box to channel-list div with id corresponding to channels array index
function populateList(list, id) {
    let channelId = channels[list][id][CHANNEL_ID];
    let fullName = channels[list][id][CHANNEL_NAME];
    let localizedName = searchTerms[list][id][LOCALIZED_NAME];
    let twitterHandle = searchTerms[list][id][TWITTER_HANDLE];
    let nameString = checkLength(fullName);
    let platformLink = setPlatform(channelGroups[list][CHANNEL_ID]);

    let channelBoxTemplate = `
        <li class="channel-box">
            <a href="${platformLink}${channelId}" target="_blank" rel="noopener">
                <span class="search-term">${fullName}, ${localizedName}, ${twitterHandle}</span>
                <div class="channel-content">
                    <div class="channel-icon">
                        <img src="${channels[list][id][CHANNEL_ICON]}" alt="${fullName}-thumbnail"/>
                    </div>
                    <!--<div id="live-${id}" class="live-indicator">LIVE</div>-->
                    <div class="channel-title">
                        <h3>${nameString}</h3>
                    </div>
                </div>
            </a>
        </li>
    `;

    let stringId = `${channelGroups[list][CHANNEL_ID]}-list`;

    $(`#${stringId} ul`).append(channelBoxTemplate);
}

// Clear and re-populate the channel-list div
function refreshList() {
    $('#vtuber-groups .container').html("");
    for (let i = 0; i < channels.length; i++) {
        createList(i);
        for (let j = 0; j < channels[i].length; j++) {
            populateList(i, j);
        }
    }
}

// Snippet modified from Webdevtrick (https://webdevtrick.com)
// Toggle between grid and list view
function toggleListView() {
    listView = !listView;

    $('.channel-list ul').toggleClass('list');
    $('.view').toggleClass('list');

    searchLists();
}

// Set default view to list view if screen width less than 540px
function setDefaultView() {
    if ($(document).width() < 540) {
        toggleListView();
    }
}

$(".view a").on('click', toggleListView);

refreshList();
setDefaultView();