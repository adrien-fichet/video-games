const data = [
    // Enfance
    "Metal Slug 2",
    "After Burner 2",
    "Tintin au Tibet",
    "Donkey Kong Land",
    "Pokemon Yellow",
    "V-Rally",
    "Kirby's Dream Land",
    "Les Schtroumpfs",
    "Aladdin",
    "Toejam and Earl",
    "QuackShot",
    "Road Rash",
    "Goldeneye",
    "Super Mario 64",
    "Crash Team Racing",
    "Super Mario Kart",
    "Warcraft 2",
    "Aliens vs Predator",

    // 1ers jeux PC
    "3D pinball",
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
    "Dark Basic",
    "Heroes 2",
    "Yoco Le mystère des fruits disparus",
    "Lego Stunt Rally",
    "Midtown Madness 2",
    "Motocross Madness 2",
    "La Cité des Echos",
    "The Lost Gold",
    "Rayman 3",
    "THPS 2",

    // Collège
    "Doom",
    "Les Royaumes Renaissants",
    "Extreme Tux Racer",
    "Day of Defeat",
    "Advance Wars",
    "Mario Kart Super Circuit",
    "Harry Potter and the Chamber of Secrets",
    "Golden Sun",
    "Jet Set Radio",
    "SSX Tricky",
    "Rogue Squadron 2",
    "Donkey Konga",
    "Super Smash Bros Melee",
    "Crazy Taxi 2",
    "Castlevania Order of Ecclesia",

    // Jeux PC plus tard
    "Warcraft 3",
    "Morrowind",
    "Heart of darkness",
    "Myst 3",
    "Splinter Cell",
    "Crimson Skies",
    "Ghost Recon",
    "Corsairs",
    "Kuzco",
    "Jekyll and Hyde",
    "Les fous du volant",
    "THPS 3",
    "Half Life",
    "Oblivion",
    "NFS Underground 2",

    // PC Jeux hors-série mai/juin 2005
    "Starsiege Tribes",
    "Virtua Fighter 2",
    "Ground Control",
    "Enemy Territory",
    "Screamer 4x4",

    // Période MMORPG
    "Runescape",
    "Rappelz",
    "Prototype",
    "Skyrim",
    "Guild Wars 2",
    "Guild Wars",

    // Univ
    "League of Legends",
    "Dota 2",
    "Path of Exile",
    "Warsow",
    "Amnesia",
    "Moontype",
    "Cookie Clicker",
    "Super Meat Boy",
    "Fallout 3",
    "Touhou 6",
    "Touhou 7",
    "Touhou 8",
    "Touhou 10",
    "Touhou 11",
    "Touhou 12",
    "Urban Terror",
    "Duke Nukem 3D",
    "Dungeon Keeper",
    "Diddy Kong Racing",
    "Pokemon Emerald",
    "Kingdom Rush",
    "Agar.io",
    "The Binding of Isaac",
    "Minecraft",

    // Mapado / Selam / Laeti
    "Dodonpachi",
    "Ghouls-n-ghosts",
    "Metal Slug 1",
    "Metal Slug 3",
    "Human Fall Flat",
    "Age of Empire 2",
    "Cuphead",
    "Stephen's Sausage Roll",
    "Overcooked 2",
    "Overcooked",
    "Tools Up",
    "Magicka 2",
    "Hacktag",
    "Heave Ho",
    "Children of Morta",
    "VR Chat",
    "Battlerite",
    "Unrailed",
    "Tricky Towers",
    "Pikmin",
    "GTA 5",
    "Caesar 3",
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

    // 2024
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
    "Castlevania SOTN",
    "Escape from the shadows",
    "Beyond the room",
    "Silent Hill 2",
    "Crash Bandicoot",
    "Super Metroid",
    "Limbo",
    "Dr Mario",
    "Apotris",
    "Tetris Effect",
    "Portal",
    "Portal 2",
    "The Legend of Zelda",
    "Half-Life 2",
    "Half-Life 2 ep 1",
    "Half-Life 2 ep 2",
    "Half-Life 2 lost coast",
    "Fez",
    "Path of Exile 2",

    // 2025
    "Factorio",
    "Crimson Room",
    "L'Amerzone",
    "Megabonk",
    "Sanitarium",
    "La maison perdue de l'oncle Ernest",
    "Stray",
    "Inside",
    "Keeper",
    "The Count Lucanor",
    "Braid",
    "A Short Hike",
    "Return of the Obra Dinn",
    "Hidden Memories",
    "Chants of Sennaar",
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
