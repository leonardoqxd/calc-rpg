let totalGold = 0;
let totalSilver = 0;
let totalCopper = 0;

function addFunds() {
    const goldInput = document.getElementById('gold');
    const silverInput = document.getElementById('silver');
    const copperInput = document.getElementById('copper');

    const gold = parseInt(goldInput.value) || 0;
    const silver = parseInt(silverInput.value) || 0;
    const copper = parseInt(copperInput.value) || 0;

    convertAndAdd(gold, silver, copper);

    goldInput.value = '';
    silverInput.value = '';
    copperInput.value = '';

    updateSummary();
}

function subtractFunds() {
    const goldInput = document.getElementById('gold');
    const silverInput = document.getElementById('silver');
    const copperInput = document.getElementById('copper');

    const gold = parseInt(goldInput.value) || 0;
    const silver = parseInt(silverInput.value) || 0;
    const copper = parseInt(copperInput.value) || 0;

    convertAndSubtract(gold, silver, copper);

    goldInput.value = '';
    silverInput.value = '';
    copperInput.value = '';

    updateSummary();
}

function convertAndAdd(gold, silver, copper) {

    let totalCopperToAdd = gold * 100 + silver * 10 + copper;

    let currentTotalCopper = totalGold * 100 + totalSilver * 10 + totalCopper;
    currentTotalCopper += totalCopperToAdd;

    totalGold = Math.floor(currentTotalCopper / 100);
    currentTotalCopper %= 100;
    totalSilver = Math.floor(currentTotalCopper / 10);
    totalCopper = currentTotalCopper % 10;
}

function convertAndSubtract(gold, silver, copper) {

    let totalCopperToSubtract = gold * 100 + silver * 10 + copper;

    let currentTotalCopper = totalGold * 100 + totalSilver * 10 + totalCopper;
    currentTotalCopper = Math.max(0, currentTotalCopper - totalCopperToSubtract);

    totalGold = Math.floor(currentTotalCopper / 100);
    currentTotalCopper %= 100;
    totalSilver = Math.floor(currentTotalCopper / 10);
    totalCopper = currentTotalCopper % 10;
}

function resetFunds() {
    totalGold = 0;
    totalSilver = 0;
    totalCopper = 0;

    updateSummary();
}

function updateSummary() {
    document.getElementById('totalGold').textContent = totalGold;
    document.getElementById('totalSilver').textContent = totalSilver;
    document.getElementById('totalCopper').textContent = totalCopper;
}