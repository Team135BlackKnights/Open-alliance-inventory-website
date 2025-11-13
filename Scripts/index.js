const searchParams = new URLSearchParams(window.location.search);
let shelfIndex = parseInt(searchParams.get('shelf'));
if (isNaN(shelfIndex)) {
    shelfIndex = 2;
}

const SHELF_CONTAINER = document.getElementById("shelfContainer");
const shelves = {};
const screens = {
    binScreen: document.getElementById('binScreen')
};

function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.style.display = 'none');
    screens[screenName].style.display = 'flex';
}

function makeShelf(index) {
    const shelfBins = {};
    const container = document.createElement("div");
    container.className = "shelf";
    for (let i = 1; i < 6; i++) {
        const bin = document.createElement("button");
        bin.className = "bin";

        bin.textContent = `Shelf ${index}, Bin ${(i + 1)}`;

        container.appendChild(bin);
        bin.addEventListener('click', () => {
            console.log(`Shelf ${index}, Bin ${i}`);
            showScreen('binScreen');
        });
        shelfBins[i] = bin;
    }
    SHELF_CONTAINER.appendChild(container);
    shelves[index] = shelfBins;
    return shelfBins;
}

function setupButtons() {
    document.getElementById("prevShelf").href = shelfIndex <= 0 ? "./" : `./shelf.html?shelf=${shelfIndex - 1}`;
    document.getElementById("nextShelf").href = `./shelf.html?shelf=${shelfIndex + 1}`;
}

makeShelf(shelfIndex);
for (let i = 0; i < 6; i++) {
    makeShelf(shelfIndex);
    setupButtons();
}