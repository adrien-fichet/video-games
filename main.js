const data = [
    // Enfance
    "Tintin au Tibet",
    "Donkey Kong Land",
    "Pokemon Yellow",
    "V-Rally",
    "Aladdin",
    "Road Rash",
    "Toejam and Earl",
    "Goldeneye",
    "Super Mario 64",
    "Metal Slug 2",
    "Crash Team Racing",
    "Doom",
    "Advance Wars",
    "Mario Kart Super Circuit",
    "Golden Sun",
    "Jet Set Radio",
    "Donkey Konga",

    // 1ers jeux PC
    "Warcraft 2",
    "Rally Championship",
    "MDK 2",
    "Toy Story 2",
    "Rayman 2",
    "Pharaon",
    "FIFA 2000",
    "Flight Simulator 98",
    "Midtown Madness 2",
    "Motocross Madness 2",
    "Rayman 3",
    "Le Fabuleux Voyage de l'oncle Ernest",
    "THPS 2",
    "Morrowind",
    "Heart of darkness",
    "Myst 3",
    "Virtua Fighter 2",
    "Versailles 1685",
    "Egypte",
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
    "Fallout 3",
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
];

const container = document.getElementById('container');
data.forEach(item => {
    var div = document.createElement('div');
    div.setAttribute('class', 'img-container');
    var img = document.createElement('img');
    var name = item.toLowerCase().replaceAll(/[ '\.]/g, '-');
    img.setAttribute('src', 'img/' + name + '.jpg');
    img.setAttribute('alt', name);
    div.appendChild(img);
    container.appendChild(div); 
});
