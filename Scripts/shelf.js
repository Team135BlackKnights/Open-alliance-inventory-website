/*
<div class="shelf">
	<button class="bin">Drills</button>
	<button class="bin">Drillbits</button>
	<button class="bin">Hammers</button>
	<button class="bin">Screwdrivers</button>
	<button class="bin">Screws</button>
</div>
*/

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

makeShelf()
makeShelf()
makeShelf()
makeShelf()
makeShelf()
console.log(makeShelf()[2]);