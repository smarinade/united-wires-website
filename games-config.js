/**
 * Games Configuration
 * Central configuration for all games in the library
 *
 * After editing this file, run: node build-games.js
 */

const games = [
    {
        id: 'warcraft3',
        title: 'Warcraft III (Classic)',
        description: 'The legendary RTS classic. Custom maps, hero management, and epic battles. Installer available on local server.',
        category: 'competitive',
        categoryLabel: 'Strategy',
        status: 'required',
        image: 'https://d1w82usnq70pt2.cloudfront.net/wp-content/uploads/2022/04/WC3_banner.jpg',
        video: 'wvYXoyxLv64',
        emoji: '⚔️',
        button: {
            type: 'disabled',
            text: 'Local Server Install - FREE'
        }
    },
    {
        id: 'aoe2',
        title: 'Age of Empires II: Definitive Edition',
        description: 'The ultimate medieval RTS experience. Build empires, command armies, and dominate through the ages.',
        category: 'competitive',
        categoryLabel: 'Strategy',
        status: 'required',
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/813780/header.jpg',
        video: 'N6kd1SYHW5k',
        emoji: '🏰',
        button: {
            type: 'link',
            text: 'Get on Steam - €19.99',
            url: 'https://store.steampowered.com/app/813780/Age_of_Empires_II_Definitive_Edition/'
        }
    },
    {
        id: 'aom',
        title: 'Age of Mythology: Retold',
        description: 'Gods, myths, and monsters collide. The classic mythology RTS reborn with modern graphics and gameplay.',
        category: 'competitive',
        categoryLabel: 'Strategy',
        status: 'required',
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1934680/header.jpg',
        video: 'YhoFR48tU48',
        emoji: '⚡',
        button: {
            type: 'link',
            text: 'Get on Steam - €29.99',
            url: 'https://store.steampowered.com/app/1934680/Age_of_Mythology_Retold/'
        }
    },
    {
        id: 'ut2004',
        title: 'Unreal Tournament 2004',
        description: 'Fast-paced arena shooter perfection. Instagib, capture the flag, and legendary fragfests. Installer available on local server.',
        category: 'competitive',
        categoryLabel: 'FPS',
        status: 'required',
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/13230/header.jpg',
        video: 'qReoeHY_6wg',
        emoji: '🔫',
        button: {
            type: 'disabled',
            text: 'Local Server Install - FREE'
        }
    },
    {
        id: 'bfme2',
        title: 'Battle for Middle Earth 2',
        description: 'Command the armies of Middle-earth in epic RTS battles. Build bases, summon heroes, and control legendary factions. Installer available on local server.',
        category: 'competitive',
        categoryLabel: 'Strategy',
        status: 'recommended',
        image: 'https://cdn2.steamgriddb.com/hero/81ab41f724391ef12094724fc6d8234f.jpg',
        video: 'Z8EqkyuJJF0',
        emoji: '🗡️',
        button: {
            type: 'disabled',
            text: 'Local Server Install - FREE'
        }
    },
    {
        id: 'cs2',
        title: 'Counter-Strike 2',
        description: 'The definitive tactical shooter. Precision aim, strategic plays, and endless competitive depth.',
        category: 'competitive',
        categoryLabel: 'FPS',
        status: 'recommended',
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg',
        video: 'edYCtaNueQY',
        emoji: '🎯',
        button: {
            type: 'link',
            text: 'Get on Steam - FREE',
            url: 'https://store.steampowered.com/app/730/CounterStrike_2/'
        }
    },
    {
        id: 'fortnite',
        title: 'Fortnite',
        description: 'Build, battle, and be the last one standing. The ultimate battle royale with creative possibilities.',
        category: 'competitive',
        categoryLabel: 'Battle Royale',
        status: 'recommended',
        image: 'https://cdn2.unrealengine.com/Fortnite%2Fblog%2Ffortnite-endgame%2FEN_08BR_LTM_Endgame_Social_Blog-Header-1920x1080-4a3a12ad115acc2cc3da432c0c6583d15b6c5567.jpg',
        video: '2gUtfBmw86Y',
        emoji: '🏆',
        button: {
            type: 'link',
            text: 'Download - FREE',
            url: 'https://www.fortnite.com/'
        }
    },
    {
        id: 'l4d',
        title: 'Left 4 Dead',
        description: 'The original co-op zombie classic. Four survivors, endless hordes, and iconic special infected. Pure chaos.',
        category: 'coop',
        categoryLabel: 'Co-op',
        status: 'recommended',
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/500/header.jpg',
        video: 'Z5g3mrK82VA',
        emoji: '🧟',
        button: {
            type: 'link',
            text: 'Get on Steam - €8.19',
            url: 'https://store.steampowered.com/app/500/Left_4_Dead/'
        }
    },
    {
        id: 'l4d2',
        title: 'Left 4 Dead 2',
        description: 'Enhanced zombie mayhem with melee weapons, new campaigns, and more special infected. The definitive L4D experience.',
        category: 'coop',
        categoryLabel: 'Co-op',
        status: 'recommended',
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/550/header.jpg',
        video: '9XIle_kLHKU',
        emoji: '🧟',
        button: {
            type: 'link',
            text: 'Get on Steam - €8.19',
            url: 'https://store.steampowered.com/app/550/Left_4_Dead_2/'
        }
    },
    {
        id: 'back4blood',
        title: 'Back 4 Blood',
        description: 'Team up and blast through hordes of the infected. Card-based progression meets frantic zombie slaying.',
        category: 'coop',
        categoryLabel: 'Co-op',
        status: 'recommended',
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/924970/header.jpg',
        video: 'riSgUcg-n_Y',
        emoji: '🧟',
        button: {
            type: 'link',
            text: 'Get on Steam - €29.99',
            url: 'https://store.steampowered.com/app/924970/Back_4_Blood/'
        }
    },
    {
        id: 'minecraft',
        title: 'Minecraft',
        description: 'Mine, craft, build, and survive together. Endless creativity meets exploration and adventure.',
        category: 'coop',
        categoryLabel: 'Sandbox',
        status: 'recommended',
        image: 'https://www.minecraft.net/content/dam/games/minecraft/key-art/Games_Subnav_Minecraft-300x465.jpg',
        video: 'MmB9b5njVbA',
        emoji: '⛏️',
        button: {
            type: 'link',
            text: 'Get Minecraft - €23.95',
            url: 'https://www.minecraft.net/'
        }
    },
    {
        id: 'fallguys',
        title: 'Fall Guys',
        description: 'Chaotic obstacle course mayhem. Stumble, jump, and grab your way to victory in this colorful battle royale.',
        category: 'casual',
        categoryLabel: 'Party',
        status: 'recommended',
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1097150/header.jpg',
        video: 'u3-EB7V5_28',
        emoji: '🎯',
        button: {
            type: 'link',
            text: 'Get on Steam - FREE',
            url: 'https://store.steampowered.com/app/1097150/Fall_Guys/'
        }
    },
    {
        id: 'amongus',
        title: 'Among Us',
        description: 'Social deduction at its finest. Find the impostors before they eliminate the crew. Trust no one.',
        category: 'casual',
        categoryLabel: 'Social',
        status: 'recommended',
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/945360/header.jpg',
        video: 'nsU5wO4kWJk',
        emoji: '🎲',
        button: {
            type: 'link',
            text: 'Get on Steam - €4.00',
            url: 'https://store.steampowered.com/app/945360/Among_Us/'
        }
    }
];

// Export for Node.js (build script) and browser (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { games };
}
