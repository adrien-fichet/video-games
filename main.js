const data = [
    // Enfance
    "Tintin au Tibet",
    "Donkey Kong Land",
    "Pokemon Yellow",
    "V-Rally",
    "Goldeneye",
    "Super Mario 64",
    "Aladdin",
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
    "Morrowind",
    "Rayman 2",
    "Rayman 3",
    "THPS 2",
    "Le Fabuleux Voyage de l'oncle Ernest",
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
    "Toy Story 2",

    // Jeux PC plus tard
    "Oblivion",
    "Warcraft 3",
    "NFS Underground 2",
    "Fallout 3",
    "Half Life",
    "Touhou 6",
    "Touhou 10",
    "Prototype",

    // Période MMORPG
    "Rappelz",
    "Skyrim",
    "Guild Wars 2",
    "Guild Wars",

    // Mapado / Selam / Laeti
    "Path of Exile",
    "Ghouls-n-ghosts",
    "Metal Slug 3",
    "Human Fall Flat",
    "Age of Empire 2",
    "Cuphead",
    "Overcooked 2",
    "Unrailed",
    "VR Chat",
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
    "Red Dead Redemption 2",
    "Syberia",
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