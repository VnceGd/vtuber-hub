const VtuberGroup = {
    HOLOLIVE: 'UCJFZiqLMntJufDCHc6bQixg',
    HOLOLIVE_CN: '286700005',
    HOLOLIVE_ID: 'UCfrWoRGlawPQDQxxeIDRP0Q',
    HOLOSTARS: 'UCWsfcksUUpoEvhia0_ut0bA',
    NIJISANJI: 'UCX7YkU9nEeaoZbkVLVajcMg'
}

const Platform = {
    YOUTUBE: 'https://www.youtube.com/channel/',
    BILIBILI: 'https://space.bilibili.com/'
}

// Indicies
const CHANNEL_ID = 0;
const CHANNEL_ICON = 1;
const CHANNEL_NAME = 2;

// Channel information for VTuber groups
let channelGroups = [
    [
        VtuberGroup.HOLOLIVE,
        "https://yt3.ggpht.com/a/AATXAJzjWwRdmmhGzuq3bVs7whSPX3piTL7dDR-2Eah0nQ=s88-c-k-c0xffffffff-no-rj-mo",
        "hololive (ホロライブ)"
    ],
    [
        VtuberGroup.HOLOLIVE_CN,
        "https://yt3.ggpht.com/a/AATXAJzjWwRdmmhGzuq3bVs7whSPX3piTL7dDR-2Eah0nQ=s88-c-k-c0xffffffff-no-rj-mo",
        "hololive China"
    ],
    [
        VtuberGroup.HOLOLIVE_ID,
        "https://yt3.ggpht.com/a/AATXAJy_etNXRipQSwEIMrTrZfFPh0hfpp2BPhbNxZ1O=s88-c-k-c0xffffffff-no-rj-mo",
        "hololive Indonesia"
    ],
    [
        VtuberGroup.HOLOSTARS,
        "https://yt3.ggpht.com/a/AATXAJx7UXk-MNOlacftL_vddK2Bqk1KleKEKrBUp28=s88-c-k-c0xffffffff-no-rj-mo",
        "holostars (ホロスターズ公式)"
    ],
    [
        VtuberGroup.NIJISANJI,
        "https://yt3.ggpht.com/a/AATXAJygMFxLVseOFJ3cZRbBNTrK8FdL_K9aFO4nQmx0=s88-c-k-c0xffffffff-no-rj-mo",
        "Nijisanji (にじさんじ)"
    ]
]

// Channel information for individual VTubers
let channels = [
    [ // hololive Japan
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
    ],
    [ // hololive China
        [
            "427061218",
            "../img/thumbnail/a9aa8f5b06236b6fb379fae790f486d1eab176bb.jpg_88x88.jpg",
            "夜霧Yogiri"
        ],
        [
            "354411419",
            "../img/thumbnail/7a08841c515eabff96f7ac8ac55d98ce3d05a5b3.jpg_88x88.jpg",
            "希薇娅Civia"
        ],
        [
            "456368455",
            "../img/thumbnail/b5e82aca42450be98952a72681eccb3a5c7b096b.jpg_88x88.jpg",
            "黑桃影"
        ],
        [
            "511613156",
            "../img/thumbnail/60dae3c34da1569bd0f9f696dd9aca2d2914bf85.jpg_88x88.jpg",
            "朵莉丝Doris"
        ],
        [
            "511613155",
            "../img/thumbnail/fd426e579de8762eaa6f5ec376970ec2d04294c3.jpg_88x88.jpg",
            "阿媂娅Artia"
        ],
        [
            "511613157",
            "../img/thumbnail/38ed261b885c7ebdc5e17d530024530bd1c3eddb.jpg_88x88.jpg",
            "罗莎琳Rosalyn"
        ]
    ],
    [ // hololive Indonesia
        [
            "UCOyYb1c43VlX9rc_lT6NKQw",
            "https://yt3.ggpht.com/a/AATXAJyldV6NOqYTpHeQ6pFYDkCiqgBVCjYPFGLTgzCu=s88-c-k-c0xffffffff-no-rj-mo",
            "Ayunda Risu Ch. hololive-ID"
        ],
        [
            "UCP0BspO_AMEe3aQqqpo89Dg",
            "https://yt3.ggpht.com/a/AATXAJz2wr4OpjutFdpuIz0qPRPwK5VzY7KvbQTXCbVd=s88-c-k-c0xffffffff-no-rj-mo",
            "Moona Hoshinova hololive-ID"
        ],
        [
            "UCAoy6rzhSf4ydcYjJw3WoVg",
            "https://yt3.ggpht.com/a/AATXAJynhjX61mSUxSbuEcRTBREv9_DebDuf885-tutc=s88-c-k-c0xffffffff-no-rj-mo",
            "Airani Iofifteen Channel hololive-ID"
        ]
    ],
    [ // holostars
        [
            "UC6t3-_N8A6ME1JShZHHqOMw",
            "https://yt3.ggpht.com/a/AATXAJxB0OqaMlTW_mviIOFpcA5T7BednuyLzWTqh5DX=s88-c-k-c0xffffffff-no-rj-mo",
            "Miyabi Ch. 花咲みやび"
        ],
        [
            "UCZgOv3YDEs-ZnZWDYVwJdmA",
            "https://yt3.ggpht.com/a/AATXAJwcfcg7rz5pS7MynN7IxW4WnOD4e-1e16EbtL2x=s88-c-k-c0xffffffff-no-rj-mo",
            "Izuru Ch. 奏手イヅル"
        ],
        [
            "UCEzsociuFqVwgZuMaZqaCsg",
            "https://yt3.ggpht.com/a/AATXAJzr9QwLFAq9sDSM8lnYIqUloCKjJucw2AmXY35O=s88-c-k-c0xffffffff-no-rj-mo",
            "Kira Ch. 鏡見キラ"
        ],
        [
            "UCKeAhJvy8zgXWbh9duVjIaQ",
            "https://yt3.ggpht.com/a/AATXAJztxlOTq8L18iF3ZAEjKtmi6QidpScnKRRYtBHL=s88-c-k-c0xffffffff-no-rj-mo",
            "Aruran Ch. アルランディス"
        ],
        [
            "UC9mf_ZVpouoILRY9NUIaK-w",
            "https://yt3.ggpht.com/a/AATXAJz9svekb90aK-De-y1OsayRVNhL2t5PNaPIZGh0=s88-c-k-c0xffffffff-no-rj-mo",
            "Rikka ch.律可"
        ],
        [
            "UCNVEsYbiZjH5QLmGeSgTSzg",
            "https://yt3.ggpht.com/a/AATXAJwiDWcr9ZJra0fV3WRyF9GmXmRnTznOATl_qKza=s88-c-k-c0xffffffff-no-rj-mo",
            "astel ch.アステル"
        ],
        [
            "UCGNI4MENvnsymYjKiZwv9eg",
            "https://yt3.ggpht.com/a/AATXAJyy6jwwbrJeM8GiPWE-qJlGSmecBZnfCX5ms3Bj=s88-c-k-c0xffffffff-no-rj-mo",
            "Temma Ch. 岸堂天真"
        ],
        [
            "UCANDOlYTJT7N5jlRC3zfzVA",
            "https://yt3.ggpht.com/a/AATXAJynglX3XaMMRa_dMLGP_jjcPNAWc7typZ8B-64g=s88-c-k-c0xffffffff-no-rj-mo",
            "Roberu Ch. 夕刻ロベル"
        ],
        [
            "UCsehvfwaWF6nWuFnXI0AqZQ",
            "https://yt3.ggpht.com/a/AATXAJzXhF7TW0jDCHcJ1DqeajdhS6IV77FLVfQej1Qq=s88-c-k-c0xffffffff-no-rj-mo",
            "Kaoru Ch.月下カオル"
        ],
        [
            "UChSvpZYRPh0FvG4SJGSga3g",
            "https://yt3.ggpht.com/a/AATXAJxagNY1AbVESzrr3ESf2YRxInyBgPRBhlA7Zyy7=s88-c-k-c0xffffffff-no-rj-mo",
            "Shien Ch.影山シエン"
        ],
        [
            "UCwL7dgTxKo8Y4RFIKWaf8gA",
            "https://yt3.ggpht.com/a/AATXAJxHDvBIDa7-BqA8KnWhyS45S6k1-yHe8syfeEri=s88-c-k-c0xffffffff-no-rj-mo",
            "Oga Ch.荒咬オウガ"
        ]
    ],
    [ // Nijisanji
        [
            "UCD-miitqNY3nyukJ4Fnf4_A",
            "https://yt3.ggpht.com/a/AATXAJzloNyJgJauawF6NcFTYc9U0uG00gwCyK40vlBEtg=s88-c-k-c0xffffffff-no-rj-mo",
            "月ノ美兎"
        ],
        [
            "UCLO9QDxVL4bnvRRsz6K4bsQ",
            "https://yt3.ggpht.com/a/AATXAJxcPHyvb-AIFlk7KoAaMwh8nSz9zq4HB6rPlEde=s88-c-k-c0xffffffff-no-rj-mo",
            "勇気ちひろ"
        ],
        [
            "UCYKP16oMX9KKPbrNgo_Kgag",
            "https://yt3.ggpht.com/a/AATXAJzaYqBcv7TIc2GEfL6QlBI-K9cTmdoqtCbbklwN=s88-c-k-c0xffffffff-no-rj-mo",
            "エルフのえる / にじさんじ所属"
        ],
        [
            "UCsg-YqdqQ-KFF0LNk23BY4A",
            "https://yt3.ggpht.com/a/AATXAJzKhsnzciCahUZ4JUQK44UQo6VieS22b0h7frr_=s88-c-k-c0xffffffff-no-rj-mo",
            "樋口楓【にじさんじ所属】"
        ],
        [
            "UC6oDys1BGgBsIC3WhG1BovQ",
            "https://yt3.ggpht.com/a/AATXAJzx6b79exsGqBy-1Oof_27mYBVNsKDzpHxj3kznrw=s88-c-k-c0xffffffff-no-rj-mo",
            "Shizuka Rin Official"
        ],
        [
            "UCeK9HFcRZoTrvqcUCtccMoQ",
            "https://yt3.ggpht.com/a/AATXAJwH4kwGfPW76Lh92vh8cm7Jp91ygrVtFHsGyzHi=s88-c-k-c0xffffffff-no-rj-mo",
            "渋谷ハジメのはじめ支部"
        ],
        [
            "UCpnvhOIJ6BN-vPkYU9ls-Eg",
            "https://yt3.ggpht.com/a/AATXAJxfYN2mWghjKxg7wG64D4GmzQJ1GgHXAKLUSFn1=s88-c-k-c0xffffffff-no-rj-mo",
            "鈴谷アキの陽だまりの庭"
        ],
        [
            "UCvmppcdYf4HOv-tFQhHHJMA",
            "https://yt3.ggpht.com/a/AATXAJz_R66sJA_JaYGcsSsq5QfliAQFjzgbgt9p2MSr=s88-c-k-c0xffffffff-no-rj-mo",
            "《にじさんじ所属の女神》モイラ"
        ]
    ]
];

// Indicies
const LOCALIZED_NAME = 0;
const TWITTER_HANDLE = 1;

let searchTerms = [
    [ // hololive Japan
        [
            "Shirakami Fubuki",
            "shirakamifubuki"
        ],
        [
            "Tokino Sora",
            "tokino_sora"
        ],
        [
            "Roboco",
            "robocosan"
        ],
        [
            "Akai Haato",
            "akaihaato"
        ],
        [
            "Natsuiro Matsuri",
            "natsuiromatsuri"
        ],
        [
            "Yozora Mel",
            "yozoramel"
        ],
        [
            "Aki Rosenthal",
            "akirosenthal"
        ],
        [
            "Minato Aqua",
            "minatoaqua"
        ],
        [
            "Murasaki Shion",
            "murasakishionch"
        ],
        [
            "Nakiri Ayame",
            "nakiriayame"
        ],
        [
            "Yuzuki Choco",
            "yuzukichococh"
        ],
        [
            "Oozora Subaru",
            "oozorasubaru"
        ],
        [
            "Ookami Mio",
            "ookamimio"
        ],
        [
            "Sakura Miko",
            "sakuramiko35"
        ],
        [
            "Inugami Korone",
            "inugamikorone"
        ],
        [
            "Nekomata Okayu",
            "nekomataokayu"
        ],
        [
            "AZKi",
            "AZKi_VDiVA"
        ],
        [
            "Hoshimachi Suisei",
            "suisei_hosimati"
        ],
        [
            "Uruha Rushia",
            "uruharushia"
        ],
        [
            "Usada Pekora",
            "usadapekora"
        ],
        [
            "Shiranui Flare",
            "shiranuiflare"
        ],
        [
            "Shirogane Noel",
            "shiroganenoel"
        ],
        [
            "Houshou Marine",
            "houshoumarine"
        ],
        [
            "Tsunomaki Watame",
            "tsunomakiwatame"
        ],
        [
            "Tokoyami Towa",
            "tokoyamitowa"
        ],
        [
            "Kiryu Coco",
            "kiryucoco"
        ],
        [
            "Amane Kanata",
            "amanekanatach"
        ],
        [
            "Himemori Luna",
            "himemoriluna"
        ]
    ],
    [ // hololive China
        [
            "Yogiri",
            "Yogiri_hololive"
        ],
        [
            "Civia",
            "Civia_hololive"
        ],
        [
            "Spade Echo",
            "SpadeEcho"
        ],
        [
            "Doris",
            "Doris_Hololive"
        ],
        [
            "Artia",
            "Artia_Hololive"
        ],
        [
            "Rosalyn",
            "Rosalyn_holoCN"
        ]
    ],
    [ // hololive Indonesia
        [
            "Ayunda Risu",
            "ayunda_risu"
        ],
        [
            "Moona Hoshinova",
            "moonahoshinova"
        ],
        [
            "Airani Iofifteen",
            "airaniiofifteen"
        ]
    ],
    [ // holostars
        [
            "Miyabi Hanasaki",
            "miyabihanasaki"
        ],
        [
            "Kanade Izuru",
            "kanadeizuru"
        ],
        [
            "Kagami Kira",
            "kagamikirach"
        ],
        [
            "Arurandeisu",
            "arurandeisu"
        ],
        [
            "Rikka",
            "rikkaroid"
        ],
        [
            "Astel Leda",
            "astelleda"
        ],
        [
            "Kishido Tenma",
            "kishidotemma"
        ],
        [
            "Yukoku Roberu",
            "yukokuroberu"
        ],
        [
            "Tsukishita Kaoru",
            "tsukishitakaoru"
        ],
        [
            "Kageyama Shien",
            "kageyamashien"
        ],
        [
            "Aragami Oga",
            "aragamioga"
        ]
    ],
    [ // Nijisanji
        [
            "Tsukino Mito",
            "MitoTsukino"
        ],
        [
            "Yuuki Chihiro",
            "Chihiro_yuki23"
        ],
        [
            "Elu the Elf",
            "Elu_World"
        ],
        [
            "Higuchi Kaede",
            "HiguchiKaede"
        ],
        [
            "Shizuka Rin",
            "ShizuRin23"
        ],
        [
            "Shibuya Hajime",
            "sibuya_hajime"
        ],
        [
            "Suzuya Aki",
            "aki_suzuya"
        ],
        [
            "Moira",
            "Moiramoimoimoi"
        ]
    ]
]