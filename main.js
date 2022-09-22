const data = [
    // Enfance
    "Tintin au Tibet",
    "Donkey Kong Land",
    "Pokemon Yellow",
    "V-Rally",
    "Goldeneye",
    "Super Mario 64",
    "Aladdin",
    "Toejam and Earl",
    "Donkey Konga",
    "Metal Slug 2",
    "Jet Set Radio",
    "Advance Wars",
    "Mario Kart Super Circuit",
    "Golden Sun",
    "Crash Team Racing",

    // 1ers jeux PC
    "Pharaon",
    "FIFA 2000",
    "Warcraft 2",
    "Rally Championship",
    "Midtown Madness 2",
    "Toy Story 2",
    "Rayman 2",
    "Rayman 3",
    "Le Fabuleux Voyage de l'oncle Ernest",
    "THPS 2",
    "Morrowind",
    "Heart of darkness",
    "Doom",
    "Myst 3",
    "Virtua Fighter 2",
    "Versailles 1685",
    "Egypte",
    "Heroes 2",
    "Flight Simulator 98",
    "Motocross Madness 2",
    "Splinter Cell",
    "Crimson Skies",
    "Ghost Recon",
    "Dark Basic",
    "Corsairs",
    "MDK 2",
    "Duke Nukem 3D",

    // Jeux PC plus tard
    "Oblivion",
    "Warcraft 3",
    "NFS Underground 2",
    "Fallout 3",
    "Half Life",
    "Touhou 6",
    "Touhou 10",
    "Prototype",
    "Diddy Kong Racing",

    // Période MMORPG
    "Rappelz",
    "Skyrim",
    "Guild Wars 2",
    "Guild Wars",
    "Runescape",

    // Mapado / Selam / Laeti
    "Path of Exile",
    "Amnesia",
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
    "League of Legends", 
    "Dota 2", 
    "Dark Souls Remastered",

    // Actuellement
    "Minecraft",
    "Stardew Valley",
    "Diablo 2",
    "Elden Ring",
    "Rush Royale",
    "Red Dead Redemption 2",
    "Syberia",
    "Syberia 2",
    "Haunted Laia",
    "Ghost Case",
    "The Girl in the Window",
];

const container = document.getElementById('container');
data.forEach(item => {
    var div = document.createElement('div');
    div.setAttribute('class', 'img-container');
    var img = document.createElement('img');
    var name = item.toLowerCase().replaceAll(' ', '-');
    var name = name.replaceAll("'", '-');
    img.setAttribute('src', 'img/' + name + '.jpg');
    img.setAttribute('alt', name);
    div.appendChild(img);
    container.appendChild(div); 
});