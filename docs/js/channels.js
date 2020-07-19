const VtuberGroup = {
    HOLOLIVE:    'UCJFZiqLMntJufDCHc6bQixg',
    HOLOLIVE_CN: '286700005',
    HOLOLIVE_ID: 'UCfrWoRGlawPQDQxxeIDRP0Q',
    HOLOSTARS:   'UCWsfcksUUpoEvhia0_ut0bA',
    NIJISANJI:   'UCX7YkU9nEeaoZbkVLVajcMg'
}

const Platform = {
    BILIBILI: 'https://space.bilibili.com/',
    YOUTUBE:  'https://www.youtube.com/channel/'
}

const Logo = {
    BILIBILI: 'img/logo/bilibili-tv.svg',
    TWITTER:  'img/logo/Twitter_Logo_Blue.svg',
    YOUTUBE:  'img/logo/yt_icon_rgb.png'
}

// Channel indices
const CHANNEL_ID     = 0
const CHANNEL_ICON   = 1
const CHANNEL_NAME   = 2
const LOCALIZED_NAME = 3
const TWITTER_HANDLE = 4

// Channel information for VTuber groups
let channelGroups = [
    [
        VtuberGroup.HOLOLIVE,
        "https://yt3.ggpht.com/a/AATXAJzjWwRdmmhGzuq3bVs7whSPX3piTL7dDR-2Eah0nQ=s88-c-k-c0xffffffff-no-rj-mo",
        "hololive (ホロライブ)",
        "hololive",
        "hololivetv"
    ],
    [
        VtuberGroup.HOLOLIVE_CN,
        "https://yt3.ggpht.com/a/AATXAJzjWwRdmmhGzuq3bVs7whSPX3piTL7dDR-2Eah0nQ=s88-c-k-c0xffffffff-no-rj-mo",
        "hololive China",
        "hololive CN",
        "hololivetv"
    ],
    [
        VtuberGroup.HOLOLIVE_ID,
        "https://yt3.ggpht.com/a/AATXAJy_etNXRipQSwEIMrTrZfFPh0hfpp2BPhbNxZ1O=s88-c-k-c0xffffffff-no-rj-mo",
        "hololive Indonesia",
        "hololive ID",
        "hololive_Id"
    ],
    [
        VtuberGroup.HOLOSTARS,
        "https://yt3.ggpht.com/a/AATXAJx7UXk-MNOlacftL_vddK2Bqk1KleKEKrBUp28=s88-c-k-c0xffffffff-no-rj-mo",
        "holostars (ホロスターズ公式)",
        "holostars",
        "hololivetv"
    ],
    [
        VtuberGroup.NIJISANJI,
        "https://yt3.ggpht.com/a/AATXAJygMFxLVseOFJ3cZRbBNTrK8FdL_K9aFO4nQmx0=s88-c-k-c0xffffffff-no-rj-mo",
        "Nijisanji (にじさんじ)",
        "Nijisanji",
        "nijisanji_app"
    ]
]

// Channel information for individual VTubers
let channels = [
    [ // hololive Japan
        [
            "UCdn5BQ06XqgXoAxIhbqw5Rg",
            "https://yt3.ggpht.com/a/AATXAJztvRXzNX8UtsaUZfLLBh32VBBwNPcvy_TklUjnWA=s88-c-k-c0xffffffff-no-rj-mo",
            "フブキCh。白上フブキ",
            "Shirakami Fubuki",
            "shirakamifubuki"
        ],
        [
            "UCp6993wxpyDPHUpavwDFqgg",
            "https://yt3.ggpht.com/a/AATXAJxvfkV0UikqTA-yx4opKjGB36TXtUG9jLX1PO1FOQ=s88-c-k-c0xffffffff-no-rj-mo",
            "SoraCh. ときのそらチャンネル",
            "Tokino Sora",
            "tokino_sora"
        ],
        [
            "UCDqI2jOz0weumE8s7paEk6g",
            "https://yt3.ggpht.com/a/AATXAJzYPiWlodo92FUP3QjgI9Y0j7sQ45p0M0AruWbj9w=s88-c-k-c0xffffffff-no-rj-mo",
            "Roboco Ch. - ロボ子",
            "Roboco",
            "robocosan"
        ],
        [
            "UC1CfXB_kRs3C-zaeTG3oGyg",
            "https://yt3.ggpht.com/a/AATXAJw3IoOJZlLAn_Eyy0r6gJHR3vt64XHfuXCailaCPw=s88-c-k-c0xffffffff-no-rj-mo",
            "Haato Channel 赤井はあと",
            "Akai Haato",
            "akaihaato"
        ],
        [
            "UCQ0UDLQCjY0rmuxCDE38FGg",
            "https://yt3.ggpht.com/a/AATXAJw8RXWyEofFZFI5EwEb7lXDq3Cm6l0SThQxT9XG=s88-c-k-c0xffffffff-no-rj-mo",
            "Matsuri Channel 夏色まつり",
            "Natsuiro Matsuri",
            "natsuiromatsuri"
        ],
        [
            "UCD8HOxPs4Xvsm8H0ZxXGiBw",
            "https://yt3.ggpht.com/a/AATXAJxGYXGi2fgjHoYCSuqLzsh6p-CrlNvRTRFmZmK_=s88-c-k-c0xffffffff-no-rj-mo",
            "Mel Channel 夜空メルチャンネル",
            "Yozora Mel",
            "yozoramel"
        ],
        [
            "UCFTLzh12_nrtzqBPsTCqenA",
            "https://yt3.ggpht.com/a/AATXAJz-Y3lEysu2wkT7AdTaPU77l938jwf2p2r8hi7e=s88-c-k-c0xffffffff-no-rj-mo",
            "アキロゼCh。Vtuber/ホロライブ所属",
            "Aki Rosenthal",
            "akirosenthal"
        ],
        [
            "UC1opHUrw8rvnsadT-iGp7Cg",
            "https://yt3.ggpht.com/a/AATXAJxXeCPuSGxq-_NfKX4WSpCf7FtnOkPNzHd2s9Sh9g=s88-c-k-c0xffffffff-no-rj-mo",
            "Aqua Ch. 湊あくあ",
            "Minato Aqua",
            "minatoaqua"
        ],
        [
            "UCXTpFs_3PqI41qX2d9tL2Rw",
            "https://yt3.ggpht.com/a/AATXAJx2dQl8H1TG2HBy9bMCMP-nHxOVXALwAJz8MFS_rA=s88-c-k-c0xffffffff-no-rj-mo",
            "Shion Ch. 紫咲シオン",
            "Murasaki Shion",
            "murasakishionch"
        ],
        [
            "UC7fk0CB07ly8oSl0aqKkqFg",
            "https://yt3.ggpht.com/a/AATXAJybvEUdsgDTZasoeAgVPHwDcWzmfLdngzWFcLx7=s88-c-k-c0xffffffff-no-rj-mo",
            "Nakiri Ayame Ch. 百鬼あやめ",
            "Nakiri Ayame",
            "nakiriayame"
        ],
        [
            "UC1suqwovbL1kzsoaZgFZLKg",
            "https://yt3.ggpht.com/a/AATXAJyy9e7DUSSfuWdROtr9oJxho6jVqSDhGdsRESDU=s88-c-k-c0xffffffff-no-rj-mo",
            "Choco Ch. 癒月ちょこ",
            "Yuzuki Choco",
            "yuzukichococh"
        ],
        [
            "UCvzGlP9oQwU--Y0r9id_jnA",
            "https://yt3.ggpht.com/a/AATXAJx_CMc_Ne4b93d6Hr3nMSqLbijvq6UxzPO8apsk=s88-c-k-c0xffffffff-no-rj-mo",
            "Subaru Ch. 大空スバル",
            "Oozora Subaru",
            "oozorasubaru"
        ],
        [
            "UCp-5t9SrOQwXMU7iIjQfARg",
            "https://yt3.ggpht.com/a/AATXAJzFpyPB7LFGFq5DIX2x7pvIblA9Ksz99TrDYvOa5w=s88-c-k-c0xffffffff-no-rj-mo",
            "Mio Channel 大神ミオ",
            "Ookami Mio",
            "ookamimio"
        ],
        [
            "UC-hM6YJuNYVAmUWxeIr9FeA",
            "https://yt3.ggpht.com/a/AATXAJzQGThlJwOBuSi3n5dnysKb9GHV_qsFF1_OoluPAw=s88-c-k-c0xffffffff-no-rj-mo",
            "Miko Ch. さくらみこ",
            "Sakura Miko",
            "sakuramiko35"
        ],
        [
            "UChAnqc_AY5_I3Px5dig3X1Q",
            "https://yt3.ggpht.com/a/AATXAJyvWtmcbmGiE0e1m316wI0MJN6-hGWxjhGZeCWhFA=s88-c-k-c0xffffffff-no-rj-mo",
            "Korone Ch. 戌神ころね",
            "Inugami Korone",
            "inugamikorone"
        ],
        [
            "UCvaTdHTWBGv3MKj3KVqJVCw",
            "https://yt3.ggpht.com/a/AATXAJxiB3oU3X4_wTHHAay43njgJgzw-2qKPeYIjDH2=s88-c-k-c0xffffffff-no-rj-mo",
            "Okayu Ch. 猫又おかゆ",
            "Nekomata Okayu",
            "nekomataokayu"
        ],
        [
            "UC0TXe_LYZ4scaW2XMyi5_kw",
            "https://yt3.ggpht.com/a/AATXAJz2wM8qDGZZDt9Uedg6AEznFZPi85WPgtkjP6-n=s88-c-k-c0xffffffff-no-rj-mo",
            "AZKi Channel",
            "AZKi",
            "AZKi_VDiVA"
        ],
        [
            "UC5CwaMl1eIgY8h02uZw7u8A",
            "https://yt3.ggpht.com/a/AATXAJxgzlKax59PofOa2q5BNtnWE9y9EMk_SE9PQ73T=s88-c-k-c0xffffffff-no-rj-mo",
            "Suisei Channel",
            "Hoshimachi Suisei",
            "suisei_hosimati"
        ],
        [
            "UCl_gCybOJRIgOXw6Qb4qJzQ",
            "https://yt3.ggpht.com/a/AATXAJwi-Xs0ChOThMuUzFsl3cNZYgdP12Witb0cNSf9=s88-c-k-c0xffffffff-no-rj-mo",
            "Rushia Ch. 潤羽るしあ",
            "Uruha Rushia",
            "uruharushia"
        ],
        [
            "UC1DCedRgGHBdm81E1llLhOQ",
            "https://yt3.ggpht.com/a/AATXAJxilycaXEq-koOOAhmQsXar1zhUzL9Hz8Rf_hXT=s88-c-k-c0xffffffff-no-rj-mo",
            "Pekora Ch. 兎田ぺこら",
            "Usada Pekora",
            "usadapekora"
        ],
        [
            "UCvInZx9h3jC2JzsIzoOebWg",
            "https://yt3.ggpht.com/a/AATXAJwGmRMcFMvE1JW3v152HnrXfMQxbI_Dw92KH0-CpA=s88-c-k-c0xffffffff-no-rj-mo",
            "Flare Ch. 不知火フレア",
            "Shiranui Flare",
            "shiranuiflare"
        ],
        [
            "UCdyqAaZDKHXg4Ahi7VENThQ",
            "https://yt3.ggpht.com/a/AATXAJyflKVfVjZg11sLPRv8BrLT-8ltdeRcTyKTWlXV=s88-c-k-c0xffffffff-no-rj-mo",
            "Noel Ch. 白銀ノエル",
            "Shirogane Noel",
            "shiroganenoel"
        ],
        [
            "UCCzUftO8KOVkV4wQG1vkUvg",
            "https://yt3.ggpht.com/a/AATXAJwYqS3nyqxwpdS648kU__gLHK_MTbEf8ojGdx0j=s88-c-k-c0xffffffff-no-rj-mo",
            "Marine Ch. 宝鐘マリン",
            "Houshou Marine",
            "houshoumarine"
        ],
        [
            "UCqm3BQLlJfvkTsX_hvm0UmA",
            "https://yt3.ggpht.com/a/AATXAJzqZYR2ukuLZqCDgdsg9eid13borfDPzVBwTIDc=s88-c-k-c0xffffffff-no-rj-mo",
            "Watame Ch. 角巻わため",
            "Tsunomaki Watame",
            "tsunomakiwatame"
        ],
        [
            "UC1uv2Oq6kNxgATlCiez59hw",
            "https://yt3.ggpht.com/a/AATXAJwvh1krTC77V1xFYngwDN4W7x96yl4WBxV5cOaA=s88-c-k-c0xffffffff-no-rj-mo",
            "Towa Ch. 常闇トワ",
            "Tokoyami Towa",
            "tokoyamitowa"
        ],
        [
            "UCS9uQI-jC3DE0L4IpXyvr6w",
            "https://yt3.ggpht.com/a/AATXAJxwFd_FUvvXGRPayTF_knMR03aKj-fsX7i48n35=s88-c-k-c0xffffffff-no-rj-mo",
            "Coco Ch. 桐生ココ",
            "Kiryu Coco",
            "kiryucoco"
        ],
        [
            "UCZlDXzGoo7d44bwdNObFacg",
            "https://yt3.ggpht.com/a/AATXAJwu4OylyCnOP8gGbO8hINCbwCfPzhBY5JrS0htm=s88-c-k-c0xffffffff-no-rj-mo",
            "Kanata Ch. 天音かなた",
            "Amane Kanata",
            "amanekanatach"
        ],
        [
            "UCa9Y57gfeY0Zro_noHRVrnw",
            "https://yt3.ggpht.com/a/AATXAJzKYMVgjGOC0-yLuJs8TidP_YB3Yks6VmDI0pgo=s88-c-k-c0xffffffff-no-rj-mo",
            "Luna Ch. 姫森ルーナ",
            "Himemori Luna",
            "himemoriluna"
        ]
    ],
    [ // hololive China
        [
            "427061218",
            "img/thumbnail/yogiri.jpg",
            "夜霧Yogiri",
            "Yogiri",
            "Yogiri_hololive"
        ],
        [
            "354411419",
            "img/thumbnail/civia.jpg",
            "希薇娅Civia",
            "Civia",
            "Civia_hololive"
        ],
        [
            "456368455",
            "img/thumbnail/spade_echo.jpg",
            "黑桃影",
            "Spade Echo",
            "SpadeEcho"
        ],
        [
            "511613156",
            "img/thumbnail/doris.jpg",
            "朵莉丝Doris",
            "Doris",
            "Doris_Hololive"
        ],
        [
            "511613155",
            "img/thumbnail/artia.jpg",
            "阿媂娅Artia",
            "Artia",
            "Artia_Hololive"
        ],
        [
            "511613157",
            "img/thumbnail/rosalyn.jpg",
            "罗莎琳Rosalyn",
            "Rosalyn",
            "Rosalyn_holoCN"
        ]
    ],
    [ // hololive Indonesia
        [
            "UCOyYb1c43VlX9rc_lT6NKQw",
            "https://yt3.ggpht.com/a/AATXAJyldV6NOqYTpHeQ6pFYDkCiqgBVCjYPFGLTgzCu=s88-c-k-c0xffffffff-no-rj-mo",
            "Ayunda Risu Ch. hololive-ID",
            "Ayunda Risu",
            "ayunda_risu"
        ],
        [
            "UCP0BspO_AMEe3aQqqpo89Dg",
            "https://yt3.ggpht.com/a/AATXAJz2wr4OpjutFdpuIz0qPRPwK5VzY7KvbQTXCbVd=s88-c-k-c0xffffffff-no-rj-mo",
            "Moona Hoshinova hololive-ID",
            "Moona Hoshinova",
            "moonahoshinova"
        ],
        [
            "UCAoy6rzhSf4ydcYjJw3WoVg",
            "https://yt3.ggpht.com/a/AATXAJynhjX61mSUxSbuEcRTBREv9_DebDuf885-tutc=s88-c-k-c0xffffffff-no-rj-mo",
            "Airani Iofifteen Channel hololive-ID",
            "Airani Iofifteen",
            "airaniiofifteen"
        ]
    ],
    [ // holostars
        [
            "UC6t3-_N8A6ME1JShZHHqOMw",
            "https://yt3.ggpht.com/a/AATXAJxB0OqaMlTW_mviIOFpcA5T7BednuyLzWTqh5DX=s88-c-k-c0xffffffff-no-rj-mo",
            "Miyabi Ch. 花咲みやび",
            "Miyabi Hanasaki",
            "miyabihanasaki"
        ],
        [
            "UCZgOv3YDEs-ZnZWDYVwJdmA",
            "https://yt3.ggpht.com/a/AATXAJwcfcg7rz5pS7MynN7IxW4WnOD4e-1e16EbtL2x=s88-c-k-c0xffffffff-no-rj-mo",
            "Izuru Ch. 奏手イヅル",
            "Kanade Izuru",
            "kanadeizuru"
        ],
        [
            "UCEzsociuFqVwgZuMaZqaCsg",
            "https://yt3.ggpht.com/a/AATXAJzr9QwLFAq9sDSM8lnYIqUloCKjJucw2AmXY35O=s88-c-k-c0xffffffff-no-rj-mo",
            "Kira Ch. 鏡見キラ",
            "Kagami Kira",
            "kagamikirach"
        ],
        [
            "UCKeAhJvy8zgXWbh9duVjIaQ",
            "https://yt3.ggpht.com/a/AATXAJztxlOTq8L18iF3ZAEjKtmi6QidpScnKRRYtBHL=s88-c-k-c0xffffffff-no-rj-mo",
            "Aruran Ch. アルランディス",
            "Arurandeisu",
            "arurandeisu"
        ],
        [
            "UC9mf_ZVpouoILRY9NUIaK-w",
            "https://yt3.ggpht.com/a/AATXAJz9svekb90aK-De-y1OsayRVNhL2t5PNaPIZGh0=s88-c-k-c0xffffffff-no-rj-mo",
            "Rikka ch.律可",
            "Rikka",
            "rikkaroid"
        ],
        [
            "UCNVEsYbiZjH5QLmGeSgTSzg",
            "https://yt3.ggpht.com/a/AATXAJwiDWcr9ZJra0fV3WRyF9GmXmRnTznOATl_qKza=s88-c-k-c0xffffffff-no-rj-mo",
            "astel ch.アステル",
            "Astel Leda",
            "astelleda"
        ],
        [
            "UCGNI4MENvnsymYjKiZwv9eg",
            "https://yt3.ggpht.com/a/AATXAJyy6jwwbrJeM8GiPWE-qJlGSmecBZnfCX5ms3Bj=s88-c-k-c0xffffffff-no-rj-mo",
            "Temma Ch. 岸堂天真",
            "Kishido Tenma",
            "kishidotemma"
        ],
        [
            "UCANDOlYTJT7N5jlRC3zfzVA",
            "https://yt3.ggpht.com/a/AATXAJynglX3XaMMRa_dMLGP_jjcPNAWc7typZ8B-64g=s88-c-k-c0xffffffff-no-rj-mo",
            "Roberu Ch. 夕刻ロベル",
            "Yukoku Roberu",
            "yukokuroberu"
        ],
        [
            "UCsehvfwaWF6nWuFnXI0AqZQ",
            "https://yt3.ggpht.com/a/AATXAJzXhF7TW0jDCHcJ1DqeajdhS6IV77FLVfQej1Qq=s88-c-k-c0xffffffff-no-rj-mo",
            "Kaoru Ch.月下カオル",
            "Tsukishita Kaoru",
            "tsukishitakaoru"
        ],
        [
            "UChSvpZYRPh0FvG4SJGSga3g",
            "https://yt3.ggpht.com/a/AATXAJxagNY1AbVESzrr3ESf2YRxInyBgPRBhlA7Zyy7=s88-c-k-c0xffffffff-no-rj-mo",
            "Shien Ch.影山シエン",
            "Kageyama Shien",
            "kageyamashien"
        ],
        [
            "UCwL7dgTxKo8Y4RFIKWaf8gA",
            "https://yt3.ggpht.com/a/AATXAJxHDvBIDa7-BqA8KnWhyS45S6k1-yHe8syfeEri=s88-c-k-c0xffffffff-no-rj-mo",
            "Oga Ch.荒咬オウガ",
            "Aragami Oga",
            "aragamioga"
        ]
    ],
    [ // Nijisanji
        // First Wave
        [
            "UCD-miitqNY3nyukJ4Fnf4_A",
            "https://yt3.ggpht.com/a/AATXAJzloNyJgJauawF6NcFTYc9U0uG00gwCyK40vlBEtg=s88-c-k-c0xffffffff-no-rj-mo",
            "月ノ美兎",
            "Tsukino Mito",
            "MitoTsukino"
        ],
        [
            "UCLO9QDxVL4bnvRRsz6K4bsQ",
            "https://yt3.ggpht.com/a/AATXAJxcPHyvb-AIFlk7KoAaMwh8nSz9zq4HB6rPlEde=s88-c-k-c0xffffffff-no-rj-mo",
            "勇気ちひろ",
            "Yuuki Chihiro",
            "Chihiro_yuki23"
        ],
        [
            "UCYKP16oMX9KKPbrNgo_Kgag",
            "https://yt3.ggpht.com/a/AATXAJzaYqBcv7TIc2GEfL6QlBI-K9cTmdoqtCbbklwN=s88-c-k-c0xffffffff-no-rj-mo",
            "エルフのえる / にじさんじ所属",
            "Elu the Elf",
            "Elu_World"
        ],
        [
            "UCsg-YqdqQ-KFF0LNk23BY4A",
            "https://yt3.ggpht.com/a/AATXAJzKhsnzciCahUZ4JUQK44UQo6VieS22b0h7frr_=s88-c-k-c0xffffffff-no-rj-mo",
            "樋口楓【にじさんじ所属】",
            "Higuchi Kaede",
            "HiguchiKaede"
        ],
        [
            "UC6oDys1BGgBsIC3WhG1BovQ",
            "https://yt3.ggpht.com/a/AATXAJzx6b79exsGqBy-1Oof_27mYBVNsKDzpHxj3kznrw=s88-c-k-c0xffffffff-no-rj-mo",
            "Shizuka Rin Official",
            "Shizuka Rin",
            "ShizuRin23"
        ],
        [
            "UCeK9HFcRZoTrvqcUCtccMoQ",
            "https://yt3.ggpht.com/a/AATXAJwH4kwGfPW76Lh92vh8cm7Jp91ygrVtFHsGyzHi=s88-c-k-c0xffffffff-no-rj-mo",
            "渋谷ハジメのはじめ支部",
            "Shibuya Hajime",
            "sibuya_hajime"
        ],
        [
            "UCpnvhOIJ6BN-vPkYU9ls-Eg",
            "https://yt3.ggpht.com/a/AATXAJxfYN2mWghjKxg7wG64D4GmzQJ1GgHXAKLUSFn1=s88-c-k-c0xffffffff-no-rj-mo",
            "鈴谷アキの陽だまりの庭",
            "Suzuya Aki",
            "aki_suzuya"
        ],
        [
            "UCvmppcdYf4HOv-tFQhHHJMA",
            "https://yt3.ggpht.com/a/AATXAJz_R66sJA_JaYGcsSsq5QfliAQFjzgbgt9p2MSr=s88-c-k-c0xffffffff-no-rj-mo",
            "《にじさんじ所属の女神》モイラ",
            "Moira",
            "Moiramoimoimoi"
        ],
        // Second Wave
        [
            "UCt0clH12Xk1-Ej5PXKGfdPA",
            "https://yt3.ggpht.com/a/AATXAJwOlinsLww_3SSI1NgExhGyfYaAak6xkKL0N3lM=s88-c-k-c0xffffffff-no-rj-mo",
            "♥️♠️物述有栖♦️♣️",
            "Mononobe Alice",
            "AliceMononobe"
        ],
        [
            "UCXU7YYxy_iQd3ulXyO-zC2w",
            "https://yt3.ggpht.com/a/AATXAJx3ZOILn-CCqQcHuHrRVhzjsHQoyDMK0AY0jpcuAQ=s88-c-k-c0xffffffff-no-rj-mo",
            "伏見ガク【にじさんじ所属】",
            "Fushimi Gaku",
            "gaku_fushimi"
        ],
        [
            "UC_GCs6GARLxEHxy1w40d6VQ",
            "https://yt3.ggpht.com/a/AATXAJyncBLWfo2XWJWFX1PS7qUBHEbCStbj5PM8fi4H=s88-c-k-c0xffffffff-no-rj-mo",
            "家長むぎ【にじさんじ所属】",
            "Ienaga Mugi",
            "ienaga_mugi23"
        ],
        [
            "UCtpB6Bvhs1Um93ziEDACQ8g",
            "https://yt3.ggpht.com/a/AATXAJz2OM2EEH03UIjQqSlg4wKyVZQKqaCDEp__ifF5=s88-c-k-c0xffffffff-no-rj-mo",
            "森中花咲",
            "Morinaka Kazaki",
            "KazakiMorinaka"
        ],
        [
            "UCwokZsOK_uEre70XayaFnzA",
            "https://yt3.ggpht.com/a/AATXAJy3F7Z22UqKUGTmAL3Y6D54N5xNTrB3-Oenb9uk=s88-c-k-c0xffffffff-no-rj-mo",
            "鈴鹿詩子 Utako Suzuka",
            "Suzuka Utako",
            "suzukautako"
        ],
        [
            "UCmUjjW5zF1MMOhYUwwwQv9Q",
            "https://yt3.ggpht.com/a/AATXAJxFgj56cj5A1EQs_tyzC55gL2CSa66-RvVjdR_n=s88-c-k-c0xffffffff-no-rj-mo",
            "宇志海いちご",
            "Ushimi Ichigo",
            "ushimi_ichigo"
        ],
        [
            "UC48jH1ul-6HOrcSSfoR02fQ",
            "https://yt3.ggpht.com/a/AATXAJxzMiZDOJ8UDpxRg98t6GbDZOuGJQMz74IcESiz=s88-c-k-c0xffffffff-no-rj-mo",
            "Yuhi Riri Official",
            "Yuuhi Riri",
            "Yuuhi_Riri"
        ],
        [
            "UCv1fFr156jc65EMiLbaLImw",
            "https://yt3.ggpht.com/a/AATXAJx3LF3D_djtbBluDXBp2JnWAkGOrOB7TpAVn8f2=s88-c-k-c0xffffffff-no-rj-mo",
            "剣持刀也",
            "Kenmochi Toya",
            "rei_Toya_rei"
        ],
        [
            "UCUzJ90o1EjqUbk2pBAy0_aw",
            "https://yt3.ggpht.com/a/AATXAJwDh0HUqC1AI-LAtrOv6IXZzoeN0wiJ5NCR6tpWPA=s88-c-k-c0xffffffff-no-rj-mo",
            "Gilzaren III Season 2",
            "Gilzaren III",
            "Gilzaren_III"
        ],
        [
            "UCBiqkFJljoxAj10SoP2w2Cg",
            "https://yt3.ggpht.com/a/AATXAJy1M6jwTNUbi0bjokJFYkGFI7qwUfbZPOvE9jW8=s88-c-k-c0xffffffff-no-rj-mo",
            "文野環【にじさんじの野良猫】ふみのたまき",
            "Fumino Tamaki",
            "nekochan_chu"
        ],
        [
            "UCspv01oxUFf_MTSipURRhkA",
            "https://yt3.ggpht.com/a/AATXAJwhbaolll7SPpm5gpJwihp6HZRo5rfU-rIbJHDphQ=s88-c-k-c0xffffffff-no-rj-mo",
            "Kanae Channel",
            "Kanae",
            "Kanae_2434"
        ],
        [
            "UCBi8YaVyZpiKWN3_Z0dCTfQ",
            "https://yt3.ggpht.com/a/AATXAJynncr_ZMztHyMhsBl_IQtFB-BtRRFQEeTXlf4S=s88-c-k-c0xffffffff-no-rj-mo",
            "赤羽葉子ちゃんねる",
            "Akabane Youko",
            "Youko_Akabane"
        ],
        [
            "UCoztvTULBYd3WmStqYeoHcA",
            "https://yt3.ggpht.com/a/AATXAJzh6YZfmX7oLfb_YGGS0iqp1BwExnqQI0sA_YbZ=s88-c-k-c0xffffffff-no-rj-mo",
            "笹木咲 / Sasaki Saku",
            "Sasaki Saku",
            "saku_sasaki"
        ],
        [
            "UC0g1AE0DOjBYnLhkgoRWN1w",
            "https://yt3.ggpht.com/a/AATXAJzvU_4zKgbREbRBPzGjq3xZ3KaKBdN1IWSUJi-q=s88-c-k-c0xffffffff-no-rj-mo",
            "本間ひまわり - Himawari Honma -",
            "Honma Himawari",
            "honmahimawari"
        ],
        [
            "UC9EjSJ8pvxtvPdxLOElv73w",
            "https://yt3.ggpht.com/a/AATXAJxY5OYSsoHGWgCdbqxSykdNoW9uOD_cssADaB7C=s88-c-k-c0xffffffff-no-rj-mo",
            "魔界ノりりむ",
            "Makaino Ririmu",
            "makaino_ririmu"
        ],
        [
            "UCSFCh5NL4qXrAy9u-u2lX3g",
            "https://yt3.ggpht.com/a/AATXAJxEim2kUs2VRR15KC_9967bzfXcOwWXRFoWwh55=s88-c-k-c0xffffffff-no-rj-mo",
            "Kuzuha Channel",
            "Kuzuha",
            "Vamp_Kuzu"
        ],
        [
            "UC_4tXjqecqox5Uc05ncxpxg",
            "https://yt3.ggpht.com/a/AATXAJxuBgoaTYEsEtk_ydDJlKPNLCwID4AQ5C9oGrYV=s88-c-k-c0xffffffff-no-rj-mo",
            "椎名唯華",
            "Shiina Yuika",
            "yuika_siina"
        ],
        [
            "UC53UDnhAAYwvNO7j_2Ju1cQ",
            "https://yt3.ggpht.com/a/AATXAJxxsPjW50rC4DZ2ZtqHz_pUpdFllSNIVNMqqJnQ=s88-c-k-c0xffffffff-no-rj-mo",
            "ドーラ",
            "Dola",
            "___Dola"
        ],
        [
            "UCsFn_ueskBkMCEyzCEqAOvg",
            "https://yt3.ggpht.com/a/AATXAJzAHg6-0dlu8MnZ0D2yE_i6vt6-vdBIPD-pMtBw=s88-c-k-c0xffffffff-no-rj-mo",
            "花畑チャイカ",
            "Hanabatake Chaika",
            "ZulmIhP1nlMOT5y"
        ],
        [
            "UCLpYMk5h1bq8_GAFVBgXhPQ",
            "https://yt3.ggpht.com/a/AATXAJx7E2BH56SMw16qDFPghcdGqERYMDc3MbTwt-jMjg=s88-c-k-c0xffffffff-no-rj-mo",
            "《IzumoKasumi》Project channel【にじさんじ】",
            "Izumo Kasumi",
            "ikasumi_zzz"
        ],
        [
            "UC6TfqY40Xt1Y0J-N18c85qQ",
            "https://yt3.ggpht.com/a/AATXAJx2vm8fB1f59-u42k3mYyiLq8Atc7DJvooumhbDQA=s88-c-k-c0xffffffff-no-rj-mo",
            "安土桃",
            "Azuchi Momo",
            "momo_azuchi_"
        ],
        [
            "UCt5-0i4AVHXaWJrL8Wql3mw",
            "https://yt3.ggpht.com/a/AATXAJydadq848D6O3cOE0w92BRtYY9dmQDqqwj9A_zB_g=s88-c-k-c0xffffffff-no-rj-mo",
            "緑仙channel",
            "Ryushen",
            "midori_2434"
        ],
        [
            "UC1zFJrfEKvCixhsjNSb1toQ",
            "https://yt3.ggpht.com/a/AATXAJxBZFKjuz2EvXj5ewwjFN9DudWuMMWvyfYWu3ZciQ=s88-c-k-c0xffffffff-no-rj-mo",
            "シスター・クレア -SisterClaire-",
            "Sister Cleaire",
            "SisterCleaire"
        ],
        [
            "UCryOPk2GZ1meIDt53tL30Tw",
            "https://yt3.ggpht.com/a/AATXAJzsp_XXHHY4aDjTWy7MTVV0RvdDiYjXuVS7e5Fj=s88-c-k-c0xffffffff-no-rj-mo",
            "Masaru Suzuki/Nijisanji",
            "Suzuki Masaru",
            "darkness_eater"
        ],
        [
            "UCRV9d6YCYIMUszK-83TwxVA",
            "https://yt3.ggpht.com/a/AATXAJwelZdYgMqCFHZC6At8GfAknZVjDx0-7TZ-KyTK=s88-c-k-c0xffffffff-no-rj-mo",
            " 轟京子/kyoko todoroki【にじさんじ】 ",
            "Todoroki Kyoko",
            "KT_seeds"
        ],
        [
            "UC3lNFeJiTq6L3UWoz4g1e-A",
            "https://yt3.ggpht.com/a/AATXAJxlv2rzHI0bDZrESIqdMwTASQYrvnZN0I5AseOK=s88-c-k-c0xffffffff-no-rj-mo",
            "卯月コウ",
            "Uzuki Kou",
            "udukikohh"
        ],
        [
            "UCKMYISTJAQ8xTplUPHiABlA",
            "https://yt3.ggpht.com/a/AATXAJzFeWF6piUOmDpvCvQ1bf4-DOiGDCX5A3CAFKk5=s88-c-k-c0xffffffff-no-rj-mo",
            "社築",
            "Yashiro Kizuku",
            "846kizuQ"
        ],
        [
            "UCWz0CSYCxf4MhRKPDm220AQ",
            "https://yt3.ggpht.com/a/AATXAJzHqC3FHPjH6FVWg1nPx5W-mfUEgPBZKnCo5jft=s88-c-k-c0xffffffff-no-rj-mo",
            "【にじさんじ】神田笑一",
            "Kanda Shoichi",
            "Kanda_Shoichi"
        ],
        [
            "UCRWOdwLRsenx2jLaiCAIU4A",
            "https://yt3.ggpht.com/a/AATXAJxJHh2XS6GfI9d9QNQNAMj6epYjEBcidoZ-CY6b=s88-c-k-c0xffffffff-no-rj-mo",
            "雨森小夜",
            "Amemori Sayo",
            "Sayo_Amemori"
        ],
        [
            "UCV5ZZlLjk5MKGg3L0n0vbzw",
            "https://yt3.ggpht.com/a/AATXAJxpBPvANSbruT65gnx3V6WeKIqXVnKOJPDV_sKq=s88-c-k-c0xffffffff-no-rj-mo",
            "鷹宮リオン",
            "Takamiya Rion",
            "TakamiyaRion"
        ],
        [
            "UCiSRx1a2k-0tOg-fs6gAolQ",
            "https://yt3.ggpht.com/a/AATXAJyGqLCNvqDHqJfpQWaFnVdvT_A3mf0_mmGw1e_p=s88-c-k-c0xffffffff-no-rj-mo",
            "飛鳥ひな【にじさんじ所属】",
            "Asuka Hina",
            "hina__asuka"
        ],
        [
            "UCJubINhCcFXlsBwnHp0wl_g",
            "https://yt3.ggpht.com/a/AATXAJyL4OetUAZ5QDJAKTXJyZGSe-MOi6iQsdQdNG9f=s88-c-k-c0xffffffff-no-rj-mo",
            "舞元啓介",
            "Maimoto Keisuke",
            "maimoto_k"
        ],
        [
            "UCjlmCrq4TP1I4xguOtJ-31w",
            "https://yt3.ggpht.com/a/AATXAJxANfqBD_ToddsIqeTwWwU5DbGtiBemckOB3Osf=s88-c-k-c0xffffffff-no-rj-mo",
            "でびでび・でびる",
            "Debidebi Debiru",
            "debidebiru_sama"
        ],
        [
            "UCPvGypSgfDkVe7JG2KygK7A",
            "https://yt3.ggpht.com/a/AATXAJxWuVy-BIgr9mjrngx1cCgSE35w2eU8FpH_cKGJ=s88-c-k-c0xffffffff-no-rj-mo",
            "竜胆 尊 / Rindou Mikoto",
            "Rindou Mikoto",
            "RindouMikoto"
        ],
        [
            "UChUJbHiTVeGrSkTdBzVfNCQ",
            "https://yt3.ggpht.com/a/AATXAJxwaS1j8KDIVcaF5mLaMsCYAfBytM5nUnoZMnlv=s88-c-k-c0xffffffff-no-rj-mo",
            "ジョー・力一 Joe Rikiichi",
            "Joe Rikiichi",
            "JoeRikiichi"
        ],
        [
            "UCo7TRj3cS-f_1D9ZDmuTsjw",
            "https://yt3.ggpht.com/a/AATXAJwVdcLG6hh-ITNCfeNb60yX35mWAo57o9FT4b6C=s88-c-k-c0xffffffff-no-rj-mo",
            "町田ちま【にじさんじ】",
            "Machita Chima",
            "chima_machita23"
        ],
        [
            "UCfQVs_KuXeNAlGa3fb8rlnQ",
            "https://yt3.ggpht.com/a/AATXAJxoAd1g6arV51vxFfSs0pCzSUxazJu1-97C2UiB=s88-c-k-c0xffffffff-no-rj-mo",
            "桜凛月",
            "Sakura Ritsuki",
            "SAKURA_RITSUKI"
        ],
        [
            "UCbc8fwhdUNlqi-J99ISYu4A",
            "https://yt3.ggpht.com/a/AATXAJz4qdKcLeJr_yYnF9Grz2CDkVdRM-PifyTfUQ2c=s88-c-k-c0xffffffff-no-rj-mo",
            "ベルモンド・バンデラス",
            "Belmond Banderas",
            "belmond_b_2434"
        ],
        [
            "UCvzVB-EYuHFXHZrObB8a_Og",
            "https://yt3.ggpht.com/a/AATXAJxv6IVrX_gHuMXMmV9RaYa0Es8Q3GSf8syT8jO9=s88-c-k-c0xffffffff-no-rj-mo",
            "矢車りね - Rine Yaguruma -",
            "Yaguruma Rine",
            "Rine_Yaguruma"
        ],
        [
            "UCTIE7LM5X15NVugV7Krp9Hw",
            "https://yt3.ggpht.com/a/AATXAJzZfLxXfgKZsSTMLbmSCX0xLMn_rNxo31RHJCP4=s88-c-k-c0xffffffff-no-rj-mo",
            "夢追翔のJUKE BOX",
            "Yumeoi Kakeru",
            "kakeru_yumeoi"
        ],
        [
            "UCmeyo5pRj_6PXG-CsGUuWWg",
            "https://yt3.ggpht.com/a/AATXAJwiOdXY5EBW5UjOnkngayu2G4IpB9BBROJCVCF9=s88-c-k-c0xffffffff-no-rj-mo",
            "黒井しば【にじさんじの犬】",
            "Kuroi Shiba",
            "BlackShiba_chan"
        ]
    ]
]