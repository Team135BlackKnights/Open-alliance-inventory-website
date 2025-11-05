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

const CUR_SHELF = searchParams.get('shelf');
const SHELF_CONTAINER = document.getElementById("shelfContainer");

var shelves = {}

function makeShelf(index)
{
	var shelfBins = {}

	var container = document.createElement("div");
	container.className = "shelf";

	for (i = 0; i < 5; i++)
	{
		var bin = document.createElement("button");
		bin.className = "bin";
		container.appendChild(bin);

		shelfBins[i] = bin;
	}

	SHELF_CONTAINER.appendChild(container);

	shelves[index] = shelfBins;

	return shelfBins;
}

function setupButtons()
{
	var shelfIndex = parseInt(CUR_SHELF);

	document.getElementById("prevShelf").href = `./shelf.html?shelf=${shelfIndex - 1}`;
	document.getElementById("nextShelf").href = `./shelf.html?shelf=${shelfIndex + 1}`;

	if (shelfIndex - 1 == 0)
		document.getElementById("prevShelf").href = "./";
}

makeShelf(0);
makeShelf(1);
makeShelf(2);
makeShelf(3);
makeShelf(4);
makeShelf(5);

setupButtons();