let clientLoaded = false;

// Load the client using the VTuber Hub API key
function loadClient() {
    gapi.client.setApiKey(YT_DATA_API_KEY);
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() {
            console.log("GAPI client loaded for API"); 
            clientLoaded = true; 
            },
            function(err) { console.error("Error loading GAPI client for API", err); });
}

// Get featured channels from the channel specified by key and refresh the corresponding channel-list div
async function loadChannels(key) {
    if (!clientLoaded) return;
    
    let featuredChannels = await getFeaturedChannels(key);

    let channelsIndex = 0;
    switch (key) {
        case vtuberGroups.HOLOLIVE:
            channelsIndex = 0;
            break;
        case vtuberGroups.HOLOLIVE_ID:
            channelsIndex = 1;
            break;
        case vtuberGroups.HOLOSTARS:
            channelsIndex = 2;
            break;
    }

    if (channels[channelsIndex].length > 0) {
        channels[channelsIndex] = [];
        refreshList();
    }

    for (let i = 0; i < featuredChannels.length; i++) {
        let channelInfo = await getChannelSnippet(featuredChannels[i]);
        channels[channelsIndex].push([featuredChannels[i], channelInfo[0], channelInfo[1]]);
        populateList(channelsIndex, i);
    }

    console.log(channels[channelsIndex]);
}

// Retrieve the featured channels of the channel specified by id
function getFeaturedChannels(id) {
    if (!clientLoaded) return;

    return new Promise(resolve => {
        gapi.client.youtube.channels.list({
            "part": [
                "brandingSettings"
            ],
            "id": [
                id
            ]
        })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
                resolve(response.result.items[0].brandingSettings.channel.featuredChannelsUrls);
            },
            function(err) { console.error("Execute error", err); });
    })
}

// Retrieve the thumbnail (profile picture) and title (channel name) of the channel specified by id
async function getChannelSnippet(id) {
    if (!clientLoaded) return;

    return new Promise(resolve => {
        gapi.client.youtube.channels.list({
            "part": [
                "snippet"
            ],
            "id": [
                id
            ]
        })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                // console.log("Response", response);
                let icon = response.result.items[0].snippet.thumbnails.default.url;
                let title = response.result.items[0].snippet.title;
                resolve([icon, title]);
            },
            function(err) { console.error("Execute error", err); });
    })
}

// Retrieve live videos for the channel specified by id
function getLivestreamStatus(id) {
    if (!clientLoaded) return;

    return gapi.client.youtube.search.list({
        "part": [
            "snippet"
        ],
        "channelId": id,
        "eventType": "live",
        "type": [
            "video"
        ]
    })
    .then(function(response) {
            // Handle the results here (response.result has the parsed body).
            // console.log("Response", response);
            if (response.result.pageInfo.totalResults > 0) {
                console.log("Found a livestream");
                $(`#live-${channel}`).toggleClass('active');
            }
            else {
                console.log(`No livestream found for ${channels[channel][channelName]}`);
            }
        },
        function(err) { console.error("Execute error", err); });
}

gapi.load("client", loadClient);