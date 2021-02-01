console.log("Happy Hacking!");

const baseUrl = "https://rickandmortyapi.com/api/character/";
const app = document.querySelector("#app");

async function fetchData() {
  const allItems = [];
  const response = await fetch(`${baseUrl}`);
  const characters = await response.json();

  characters.results.forEach((item) => {
    const nameCharacter = document.createElement("h3");
    nameCharacter.textContent = item.name;

    const infoContainer = document.createElement("div");
    infoContainer.append(nameCharacter);

    allItems.push(infoContainer);
  });

  app.append(...allItems);
}

fetchData();
