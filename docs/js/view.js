// Platform indices
const LINK = 0;
const LOGO = 1;

let listView = false

// Return platform associated with group specified by list
function setPlatform(id) {
    switch (id) {
        case VtuberGroup.HOLOLIVE:
        case VtuberGroup.HOLOLIVE_ID:
        case VtuberGroup.HOLOSTARS:
        case VtuberGroup.NIJISANJI:
            return [Platform.YOUTUBE, Logo.YOUTUBE];
        case VtuberGroup.HOLOLIVE_CN:
            return [Platform.BILIBILI, Logo.BILIBILI];
    }
}

// Create and append a vtuber-group div to the main container
function createList(list) {
    let channelId = channelGroups[list][CHANNEL_ID];
    let channelName = channelGroups[list][CHANNEL_NAME];
    let localizedName = channelGroups[list][LOCALIZED_NAME];
    let twitterHandle = channelGroups[list][TWITTER_HANDLE];
    let platform = setPlatform(channelId);

    let listTemplate = `
        <div class="vtuber-group">
            <h1 id="${localizedName}">
                <img class="channel-icon" src="${channelGroups[list][CHANNEL_ICON]}" alt="${channelName}-thumbnail">
                ${channelName}
                <a href="${platform[LINK]}${channelId}" target="_blank" rel="noopener">
                    <img class="link-icon" src="${platform[LOGO]}" title="${localizedName} Channel">
                </a>
                <a href="https://twitter.com/${twitterHandle}" target="_blank" rel="noopener">
                    <img class="link-icon" src="${Logo.TWITTER}" title="@${twitterHandle} Twitter">
                </a>
            </h1>
            <div id="${channelId}-list" class="channel-list"><ul></ul></div>
        </div>
    `;

    return new Promise(resolve => {
        resolve($(`#vtuber-groups .container`).append(listTemplate));
    });
}

// Create and append a channel box to channel-list div with id corresponding to channels array index
function populateList(list, id) {
    let channelId = channels[list][id][CHANNEL_ID];
    let fullName = channels[list][id][CHANNEL_NAME];
    let localizedName = channels[list][id][LOCALIZED_NAME];
    let twitterHandle = channels[list][id][TWITTER_HANDLE];
    let platform = setPlatform(channelGroups[list][CHANNEL_ID]);

    let channelBoxTemplate = `
        <li class="channel-box">
            <span class="search-term">${fullName}, ${localizedName}, ${twitterHandle}</span>
            <div class="channel-content">
                <img class="channel-icon" src="${channels[list][id][CHANNEL_ICON]}" alt="${fullName}-thumbnail">
                <div class="channel-title">
                    <a href="${platform[LINK]}${channelId}" target="_blank" rel="noopener">
                        <img class="link-icon" src="${platform[LOGO]}" title="${localizedName} Channel">
                    </a>
                    <a href="https://twitter.com/${twitterHandle}" target="_blank" rel="noopener">
                        <img class="link-icon" src="${Logo.TWITTER}" title="@${twitterHandle} Twitter">
                    </a>
                    <h3 class="channel-name">${fullName}</h3>
                    <span class="localized-name">${localizedName}</span>
                </div>
            </div>
        </li>
    `;

    let stringId = `${channelGroups[list][CHANNEL_ID]}-list`;

    return new Promise(resolve => {
        resolve($(`#${stringId} ul`).append(channelBoxTemplate));
    });
}

// Clear and re-populate the channel-list div
async function refreshList() {
    $('#vtuber-groups .container').html("");

    for (let i = 0; i < channels.length; i++) {
        await createList(i);
        for (let j = 0; j < channels[i].length; j++) {
            await populateList(i, j);
        }
    }

    return;
}

// Snippet modified from Webdevtrick (https://webdevtrick.com)
// Toggle between grid and list view
function toggleListView() {
    listView = !listView;

    $('.channel-list ul').toggleClass('list');
    $('.view').toggleClass('list');

    searchLists();
}

// Set default view to list view if screen width less than 768px
function setDefaultView() {
    if ($(document).width() < 768) {
        toggleListView();
    }
    else {
        searchLists(); // For browsers which have input values persist through a refresh
    }
}

$(".view a").on('click', toggleListView);

$(document).ready(async function() {
    await refreshList();
    setDefaultView();

    $('#grid-view, #list-view').on("keydown", function(e) {
        if (event.keyCode === 13) {
            toggleListView();
            listView ? $('#list-view').focus() : $('#grid-view').focus();
        }
    });
});