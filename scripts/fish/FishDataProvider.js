const fishCollection = [
  {
    name: "Lucky",
    food: ["algae", "crustaceans"],
    species: "Shark",
    location: "America",
    length: 8,
    image: "assets/lucky.jpg"
  },
  {
    name: "Maria",
    food: ["algae", "chips"],
    species: "Catfish",
    location: "Thialand",
    length: 4,
    image: "assets/maria.jpg"
  },
  {
    name: "Lil__Jon",
    food: ["cheese", "worms"],
    species: "Goldfish",
    location: "America",
    length: 1,
    image: "assets/lil-jon.jpg"
  },
  {
    name: "Tammie",
    food: ["coffee", "bacon"],
    species: "Bass",
    location: "Moroco",
    length: 3,
    image: "assets/tammie.jpg"
  },
  {
    name: "Mike",
    food: ["bread", "turkey"],
    species: "Perch",
    location: "Colombia",
    length: 2,
    image: "assets/mike.jpg"
  },
  {
    name: "Elvis",
    food: ["shrimp", "cookies"],
    species: "Octopus",
    location: "China",
    length: 5,
    image: "assets/elvis.jpg"
  }
];

export const UseFish = () => fishCollection;

//Immutability: Our core data, raw data should be private and hidden and should not be changed.
