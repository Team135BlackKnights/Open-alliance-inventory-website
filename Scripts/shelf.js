/*
<div class="shelf">
	<button class="bin">Drills</button>
	<button class="bin">Drillbits</button>
	<button class="bin">Hammers</button>
	<button class="bin">Screwdrivers</button>
	<button class="bin">Screws</button>
</div>
*/

const searchParams = new URLSearchParams(window.location.search);
let shelfIndex = parseInt(searchParams.get('shelf'));
if (isNaN(shelfIndex)) shelfIndex = 0;

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

	for (let i = 0; i < 5; i++) {
		const bin = document.createElement("button");
		bin.className = "bin";
		bin.textContent = `Bin ${(index * 5) + (i + 1)}`;
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
	document.getElementById("prevShelf").href =
		shelfIndex <= 0 ? "./" : `./shelf.html?shelf=${shelfIndex - 1}`;
	document.getElementById("nextShelf").href = `./shelf.html?shelf=${shelfIndex + 1}`;
}

for (let i = 0; i < 6; i++) makeShelf(i);
setupButtons();
