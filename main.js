const data = [
    // Enfance
    "Metal Slug 2",
    "Tintin au Tibet",
    "Donkey Kong Land",
    "Pokemon Yellow",
    "V-Rally",
    "Les Schtroumpfs",
    "Aladdin",
    "Toejam and Earl",
    "Road Rash",
    "Goldeneye",
    "Super Mario 64",
    "Warcraft 2",
    "La Cité des Echos",
    "Crash Team Racing",

    // Collège
    "Doom",
    "Les Royaumes Renaissants",
    "Advance Wars",
    "Mario Kart Super Circuit",
    "Harry Potter and the Chamber of Secrets",
    "Golden Sun",
    "Jet Set Radio",
    "Donkey Konga",
    "Super Smash Bros Melee",

    // 1ers jeux PC
    "Rally Championship",
    "MDK 2",
    "Toy Story 2",
    "Rayman 2",
    "Disney Magic Artist Studio",
    "Pharaon",
    "FIFA 2000",
    "Flight Simulator 98",
    "L'album secret de l'oncle Ernest",
    "Le Fabuleux Voyage de l'oncle Ernest",
    "L'île Mystérieuse de l'oncle Ernest",
    "Versailles 1685",
    "Egypte",
    "Yoco Le mystère des fruits disparus",
    "Lego Stunt Rally",
    "Midtown Madness 2",
    "Motocross Madness 2",
    "Rayman 3",
    "THPS 2",
    "Morrowind",
    "Heart of darkness",
    "Myst 3",
    "Virtua Fighter 2",
    "Heroes 2",
    "Splinter Cell",
    "Crimson Skies",
    "Ghost Recon",
    "Dark Basic",
    "Corsairs",
    "Duke Nukem 3D",
    "Castlevania Order of Ecclesia",
    "Jekyll and Hyde",
    "Les fous du volant",
    "THPS 3",

    // Jeux PC plus tard
    "Warcraft 3",
    "Enemy Territory",
    "Half Life",
    "Oblivion",
    "NFS Underground 2",
    "Touhou 6",
    "Touhou 10",
    "Diddy Kong Racing",
    "Urban Terror",

    // Période MMORPG
    "Runescape",
    "Rappelz",
    "Prototype",
    "Skyrim",
    "Guild Wars 2",
    "Guild Wars",
    "Agar.io",

    // Univ
    "League of Legends",
    "Dota 2",
    "Path of Exile",
    "Amnesia",
    "Warsow",
    "Fallout 3",
    "Minecraft",
    "Kingdom Rush",
    "Moontype",
    "Dungeon Keeper",
    "Pokemon Emerald",

    // Mapado / Selam / Laeti
    "Dodonpachi",
    "Ghouls-n-ghosts",
    "Metal Slug 3",
    "Human Fall Flat",
    "Age of Empire 2",
    "Cuphead",
    "Stephen's Sausage Roll",
    "Overcooked 2",
    "Overcooked",
    "Tools Up",
    "Magicka 2",
    "Heave Ho",
    "VR Chat",
    "Unrailed",
    "Tricky Towers",
    "Pikmin",
    "GTA 5",
    "Caesar 3",
    "Battlerite",
    "Dark Souls Remastered",

    // Plus récemment
    "Diablo 2",
    "Elden Ring",
    "Rush Royale",
    "Syberia",
    "Syberia 2",
    "Albion Online",
    "Haunted Laia",
    "Ghost Case",
    "Another Shadow",
    "A link to the Past",
    "Banjo Kazooie",
    "Hogwarts Legacy",
    "Only Up",
    "Dave the Diver",
    "Baldur's Gate 3",
    "Tunic",
    "Firewatch",
    "Dordogne",
    "Little Kitty, Big City",
    "Planet of Lana",
    "GTA 3",
    "Tomb Raider",
    "The Witness",
    "Hades",
    "World of Goo 2",
    "The Plucky Squire",
    "Bioshock",
    "Unsolved case",
    "Unboxing the cryptic killer",
    "Star Wars KOTOR",
    "Castlevania SOTN",
    "Escape from the shadows",
    "Beyond the room",
    "Silent Hill 2",
    "Crash Bandicoot",
    "Super Metroid",
    "QuackShot",
];

const library = document.getElementById('library');
data.forEach(item => {
    const game = document.createElement('div');
    game.setAttribute('class', 'game');
    const gameWrapper = document.createElement('div');
    gameWrapper.setAttribute('class', 'game-wrapper');
    const img = document.createElement('img');
    const imgName = item.toLowerCase()
        .replaceAll(/[ '\.]/g, '-')
        .replaceAll('è', 'e')
        .replaceAll('é', 'e')
        .replaceAll(',', '')
        .replaceAll('î', 'i');
    img.setAttribute('class', 'lazyload');
    img.setAttribute('data-sizes', 'auto');
    img.setAttribute('src', './thumbs/' + imgName + '.jpg');
    img.setAttribute('data-src', './img/' + imgName + '.jpg');
    img.setAttribute('alt', imgName);
    gameWrapper.appendChild(img);
    const gradient = document.createElement('div');
    gradient.setAttribute('class', 'gradient');
    gameWrapper.appendChild(gradient);
    game.appendChild(gameWrapper);
    library.appendChild(game);
});
