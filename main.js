const data = [
    // Enfance
    "Tintin au Tibet",
    "Donkey Kong Land",
    "Pokemon Yellow",
    "V-Rally",
    "Metal Slug 2",
    "Toejam and Earl",
    "Road Rash",
    "Aladdin",
    "Goldeneye",
    "Warcraft 2",
    "Super Mario 64",
    "Crash Team Racing",

    // Collège
    "Doom",
    "Advance Wars",
    "Mario Kart Super Circuit",
    "Golden Sun",
    "Jet Set Radio",
    "Donkey Konga",

    // 1ers jeux PC
    "Rally Championship",
    "MDK 2",
    "Toy Story 2",
    "Rayman 2",
    "Pharaon",
    "FIFA 2000",
    "Flight Simulator 98",
    "L'album secret de l'oncle Ernest",
    "Le Fabuleux Voyage de l'oncle Ernest",
    "Versailles 1685",
    "Egypte",
    "Yoco Le mystère des fruits disparus",
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
    "Fallout 3",

    // Mapado / Selam / Laeti
    "Dodonpachi",
    "Ghouls-n-ghosts",
    "Metal Slug 3",
    "Human Fall Flat",
    "Age of Empire 2",
    "Cuphead",
    "Stephen's Sausage Roll",
    "Overcooked 2",
    "Unrailed",
    "VR Chat",
    "Pikmin",
    "GTA 5",
    "Caesar 3",
    "Battlerite",
    "Dark Souls Remastered",

    // Plus récemment
    "Minecraft",
    "Stardew Valley",
    "Diablo 2",
    "Elden Ring",
    "Rush Royale",
    "Syberia",
    "Syberia 2",
    "Albion Online",
    "Haunted Laia",
    "Ghost Case",
    "Another Shadow",
    "Red Dead Redemption 2",
    "A link to the Past",
    "Banjo Kazooie",
    "Hogwarts Legacy",
    "Only Up",
    "Dave the Diver",
    "Baldur's Gate 3",
];

const container = document.getElementById('container');
data.forEach(item => {
    var div = document.createElement('div');
    div.setAttribute('class', 'img-container');
    var img = document.createElement('img');
    var name = item.toLowerCase().replaceAll(/[ '\.]/g, '-').replaceAll('è', 'e');
    img.setAttribute('src', 'img/' + name + '.jpg');
    img.setAttribute('alt', name);
    div.appendChild(img);
    container.appendChild(div);
});
