const MAX_LENGTH_GRID = 16;
const MAX_LENGTH_LIST = 100;

let listView = false;

// Indicies
let channelId = 0;
let channelIcon = 1;
let channelName = 2;

// Channel info gathered from loadChannels() in request.js
let channels = [
    [
        "UCdn5BQ06XqgXoAxIhbqw5Rg",
        "https://yt3.ggpht.com/a/AATXAJztvRXzNX8UtsaUZfLLBh32VBBwNPcvy_TklUjnWA=s88-c-k-c0xffffffff-no-rj-mo",
        "フブキCh。白上フブキ"
    ],
    [
        "UCp6993wxpyDPHUpavwDFqgg",
        "https://yt3.ggpht.com/a/AATXAJxvfkV0UikqTA-yx4opKjGB36TXtUG9jLX1PO1FOQ=s88-c-k-c0xffffffff-no-rj-mo",
        "SoraCh. ときのそらチャンネル"
    ],
    [
        "UCDqI2jOz0weumE8s7paEk6g",
        "https://yt3.ggpht.com/a/AATXAJzYPiWlodo92FUP3QjgI9Y0j7sQ45p0M0AruWbj9w=s88-c-k-c0xffffffff-no-rj-mo",
        "Roboco Ch. - ロボ子"
    ],
    [
        "UC1CfXB_kRs3C-zaeTG3oGyg",
        "https://yt3.ggpht.com/a/AATXAJw3IoOJZlLAn_Eyy0r6gJHR3vt64XHfuXCailaCPw=s88-c-k-c0xffffffff-no-rj-mo",
        "Haato Channel 赤井はあと"
    ],
    [
        "UCQ0UDLQCjY0rmuxCDE38FGg",
        "https://yt3.ggpht.com/a/AATXAJw8RXWyEofFZFI5EwEb7lXDq3Cm6l0SThQxT9XG=s88-c-k-c0xffffffff-no-rj-mo",
        "Matsuri Channel 夏色まつり"
    ],
    [
        "UCD8HOxPs4Xvsm8H0ZxXGiBw",
        "https://yt3.ggpht.com/a/AATXAJxGYXGi2fgjHoYCSuqLzsh6p-CrlNvRTRFmZmK_=s88-c-k-c0xffffffff-no-rj-mo",
        "Mel Channel 夜空メルチャンネル"
    ],
    [
        "UCFTLzh12_nrtzqBPsTCqenA",
        "https://yt3.ggpht.com/a/AATXAJz-Y3lEysu2wkT7AdTaPU77l938jwf2p2r8hi7e=s88-c-k-c0xffffffff-no-rj-mo",
        "アキロゼCh。Vtuber/ホロライブ所属"
    ],
    [
        "UC1opHUrw8rvnsadT-iGp7Cg",
        "https://yt3.ggpht.com/a/AATXAJxXeCPuSGxq-_NfKX4WSpCf7FtnOkPNzHd2s9Sh9g=s88-c-k-c0xffffffff-no-rj-mo",
        "Aqua Ch. 湊あくあ"
    ],
    [
        "UCXTpFs_3PqI41qX2d9tL2Rw",
        "https://yt3.ggpht.com/a/AATXAJx2dQl8H1TG2HBy9bMCMP-nHxOVXALwAJz8MFS_rA=s88-c-k-c0xffffffff-no-rj-mo",
        "Shion Ch. 紫咲シオン"
    ],
    [
        "UC7fk0CB07ly8oSl0aqKkqFg",
        "https://yt3.ggpht.com/a/AATXAJybvEUdsgDTZasoeAgVPHwDcWzmfLdngzWFcLx7=s88-c-k-c0xffffffff-no-rj-mo",
        "Nakiri Ayame Ch. 百鬼あやめ"
    ],
    [
        "UC1suqwovbL1kzsoaZgFZLKg",
        "https://yt3.ggpht.com/a/AATXAJyy9e7DUSSfuWdROtr9oJxho6jVqSDhGdsRESDU=s88-c-k-c0xffffffff-no-rj-mo",
        "Choco Ch. 癒月ちょこ"
    ],
    [
        "UCvzGlP9oQwU--Y0r9id_jnA",
        "https://yt3.ggpht.com/a/AATXAJx_CMc_Ne4b93d6Hr3nMSqLbijvq6UxzPO8apsk=s88-c-k-c0xffffffff-no-rj-mo",
        "Subaru Ch. 大空スバル"
    ],
    [
        "UCp-5t9SrOQwXMU7iIjQfARg",
        "https://yt3.ggpht.com/a/AATXAJzFpyPB7LFGFq5DIX2x7pvIblA9Ksz99TrDYvOa5w=s88-c-k-c0xffffffff-no-rj-mo",
        "Mio Channel 大神ミオ"
    ],
    [
        "UC-hM6YJuNYVAmUWxeIr9FeA",
        "https://yt3.ggpht.com/a/AATXAJzQGThlJwOBuSi3n5dnysKb9GHV_qsFF1_OoluPAw=s88-c-k-c0xffffffff-no-rj-mo",
        "Miko Ch. さくらみこ"
    ],
    [
        "UChAnqc_AY5_I3Px5dig3X1Q",
        "https://yt3.ggpht.com/a/AATXAJyvWtmcbmGiE0e1m316wI0MJN6-hGWxjhGZeCWhFA=s88-c-k-c0xffffffff-no-rj-mo",
        "Korone Ch. 戌神ころね"
    ],
    [
        "UCvaTdHTWBGv3MKj3KVqJVCw",
        "https://yt3.ggpht.com/a/AATXAJxiB3oU3X4_wTHHAay43njgJgzw-2qKPeYIjDH2=s88-c-k-c0xffffffff-no-rj-mo",
        "Okayu Ch. 猫又おかゆ"
    ],
    [
        "UC0TXe_LYZ4scaW2XMyi5_kw",
        "https://yt3.ggpht.com/a/AATXAJz2wM8qDGZZDt9Uedg6AEznFZPi85WPgtkjP6-n=s88-c-k-c0xffffffff-no-rj-mo",
        "AZKi Channel"
    ],
    [
        "UC5CwaMl1eIgY8h02uZw7u8A",
        "https://yt3.ggpht.com/a/AATXAJxgzlKax59PofOa2q5BNtnWE9y9EMk_SE9PQ73T=s88-c-k-c0xffffffff-no-rj-mo",
        "Suisei Channel"
    ],
    [
        "UCl_gCybOJRIgOXw6Qb4qJzQ",
        "https://yt3.ggpht.com/a/AATXAJwi-Xs0ChOThMuUzFsl3cNZYgdP12Witb0cNSf9=s88-c-k-c0xffffffff-no-rj-mo",
        "Rushia Ch. 潤羽るしあ"
    ],
    [
        "UC1DCedRgGHBdm81E1llLhOQ",
        "https://yt3.ggpht.com/a/AATXAJxilycaXEq-koOOAhmQsXar1zhUzL9Hz8Rf_hXT=s88-c-k-c0xffffffff-no-rj-mo",
        "Pekora Ch. 兎田ぺこら"
    ],
    [
        "UCvInZx9h3jC2JzsIzoOebWg",
        "https://yt3.ggpht.com/a/AATXAJwGmRMcFMvE1JW3v152HnrXfMQxbI_Dw92KH0-CpA=s88-c-k-c0xffffffff-no-rj-mo",
        "Flare Ch. 不知火フレア"
    ],
    [
        "UCdyqAaZDKHXg4Ahi7VENThQ",
        "https://yt3.ggpht.com/a/AATXAJyflKVfVjZg11sLPRv8BrLT-8ltdeRcTyKTWlXV=s88-c-k-c0xffffffff-no-rj-mo",
        "Noel Ch. 白銀ノエル"
    ],
    [
        "UCCzUftO8KOVkV4wQG1vkUvg",
        "https://yt3.ggpht.com/a/AATXAJwYqS3nyqxwpdS648kU__gLHK_MTbEf8ojGdx0j=s88-c-k-c0xffffffff-no-rj-mo",
        "Marine Ch. 宝鐘マリン"
    ],
    [
        "UCqm3BQLlJfvkTsX_hvm0UmA",
        "https://yt3.ggpht.com/a/AATXAJzqZYR2ukuLZqCDgdsg9eid13borfDPzVBwTIDc=s88-c-k-c0xffffffff-no-rj-mo",
        "Watame Ch. 角巻わため"
    ],
    [
        "UC1uv2Oq6kNxgATlCiez59hw",
        "https://yt3.ggpht.com/a/AATXAJwvh1krTC77V1xFYngwDN4W7x96yl4WBxV5cOaA=s88-c-k-c0xffffffff-no-rj-mo",
        "Towa Ch. 常闇トワ"
    ],
    [
        "UCS9uQI-jC3DE0L4IpXyvr6w",
        "https://yt3.ggpht.com/a/AATXAJxwFd_FUvvXGRPayTF_knMR03aKj-fsX7i48n35=s88-c-k-c0xffffffff-no-rj-mo",
        "Coco Ch. 桐生ココ"
    ],
    [
        "UCZlDXzGoo7d44bwdNObFacg",
        "https://yt3.ggpht.com/a/AATXAJwu4OylyCnOP8gGbO8hINCbwCfPzhBY5JrS0htm=s88-c-k-c0xffffffff-no-rj-mo",
        "Kanata Ch. 天音かなた"
    ],
    [
        "UCa9Y57gfeY0Zro_noHRVrnw",
        "https://yt3.ggpht.com/a/AATXAJzKYMVgjGOC0-yLuJs8TidP_YB3Yks6VmDI0pgo=s88-c-k-c0xffffffff-no-rj-mo",
        "Luna Ch. 姫森ルーナ"
    ]
];

// Limit the length of a string based on grid/list view
function checkLength(string) {
    let maxLength = listView ? MAX_LENGTH_LIST : MAX_LENGTH_GRID;

    return string.length > maxLength ? string.substring(0, maxLength) + "..." : string;
}

// Create and append a channel box to channel-list div with id corresponding to channels array index
function populateList(id) {
    let nameString = checkLength(channels[id][channelName]);

    let channelBoxTemplate = `
        <li class="channel-box">
            <a href="https://www.youtube.com/channel/${channels[id][channelId]}" target="_blank">
                <div class="channel-content">
                    <div class="channel-icon">
                        <img src="${channels[id][channelIcon]}" alt="${nameString}-thumbnail"/>
                    </div>
                    <div id="live-${id}" class="live-indicator">LIVE</div>
                    <!--<button onclick="getLivestreamStatus(${channels[id][channelId]})">Refresh</button>-->
                    <div class="channel-title">
                        <h2>${nameString}</h2>
                    </div>
                </div>
            </a>
        </li>
        `;
    $('.channel-list ul').append(channelBoxTemplate);
}

// Clear and re-populate the channel-list div
function refreshList() {
    $('.channel-list ul').html("");
    for (let i = 0; i < channels.length; i++) {
        populateList(i);
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