let clientLoaded = false;

// Load the client using the VTuber Hub API key
function loadClient() {
    gapi.client.setApiKey("AIzaSyCFu0BauHWi5NwREhbsrlJj1DaZd8nejjk");
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() {
            console.log("GAPI client loaded for API"); 
            clientLoaded = true; 
            },
            function(err) { console.error("Error loading GAPI client for API", err); });
}

// Get hololive's featured channels and refresh the channel-list div
async function loadChannels() {
    if (!clientLoaded) return;

    let featuredChannels = await getFeaturedChannels("UCJFZiqLMntJufDCHc6bQixg");

    if (channels.length > 0) {
        channels = [];
        refreshList();
    }

    for (let i = 0; i < featuredChannels.length; i++) {
        let channelInfo = await getChannelSnippet(featuredChannels[i]);
        channels.push([featuredChannels[i], channelInfo[0], channelInfo[1]]);
        populateList(i);
    }
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
                // console.log("Response", response);
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