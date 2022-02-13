// character_roller.js


function rollD6() {
	return Math.floor(Math.random() * 6 + 1)
}
//Function for rolling 1d6

function roll4D6RemoveSmallest() {
	const fourDSixes = [rollD6(), rollD6(), rollD6(), rollD6()]
	const smallest = Math.min(...fourDSixes)
	const smallestIndex = fourDSixes.indexOf(smallest)
	const fourDSixesNoSmallest = fourDSixes.slice(0, smallestIndex).concat(fourDSixes.slice(smallestIndex+1))
	const sumOfRoll = fourDSixesNoSmallest.reduce((partialSum, a) => partialSum + a, 0)
	window.alert(`You rolled ${fourDSixes}. Without the smallest roll, this adds up to ${sumOfRoll}`)
	return sumOfRoll
}

function rollSixStats () {
	const sixStats = [roll4D6RemoveSmallest(),roll4D6RemoveSmallest(),roll4D6RemoveSmallest(),roll4D6RemoveSmallest(),roll4D6RemoveSmallest(),roll4D6RemoveSmallest()]
	sixStats.sort(function(a, b){return b - a})
	window.alert(`Here are your stats! ${sixStats}`)
	return sixStats
}

//Random Class
function rollClass() {
	const classArray = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"]
	const classNumber = Math.floor(Math.random() * 12)
	const playerClass = classArray[classNumber]

	return playerClass
}

//Stats assigned based on Class

function assignStats () {
	sixStats = rollSixStats()
	playerClass = rollClass()
	window.alert(playerClass)
	if (playerClass == "Barbarian") {
		window.alert(`Barbarian, Your stats, assigned optimally by your class, are:
		Strength ${sixStats[0]},
		Dexterity ${sixStats[2]},
		Constitution ${sixStats[1]},
		Intelligence ${sixStats[3]},
		Wisdom ${sixStats[4]},
		Charisma ${sixStats[5]}.`)
	} else if (playerClass == "Bard") {
		window.alert(`Your stats, assigned optimally by your class, are:
		Strength ${sixStats[0]},
		Dexterity ${sixStats[0]},
		Constitution ${sixStats[0]},
		Intelligence ${sixStats[0]},
		Wisdom ${sixStats[0]},
		Charisma ${sixStats[0]}.`)
	} else if (playerClass == "Cleric") {
		window.alert(`Your stats, assigned optimally by your class, are:
		Strength ${sixStats[0]},
		Dexterity ${sixStats[0]},
		Constitution ${sixStats[0]},
		Intelligence ${sixStats[0]},
		Wisdom ${sixStats[0]},
		Charisma ${sixStats[0]}.`)
	} else if (playerClass == "Druid") {
		window.alert(`Your stats, assigned optimally by your class, are:
		Strength ${sixStats[0]},
		Dexterity ${sixStats[0]},
		Constitution ${sixStats[0]},
		Intelligence ${sixStats[0]},
		Wisdom ${sixStats[0]},
		Charisma ${sixStats[0]}.`)
	} else if (playerClass == "Fighter") {
		window.alert(`Your stats, assigned optimally by your class, are:
		Strength ${sixStats[0]},
		Dexterity ${sixStats[0]},
		Constitution ${sixStats[0]},
		Intelligence ${sixStats[0]},
		Wisdom ${sixStats[0]},
		Charisma ${sixStats[0]}.`)
	} else if (playerClass == "Monk") {
		window.alert(`Your stats, assigned optimally by your class, are:
		Strength ${sixStats[0]},
		Dexterity ${sixStats[0]},
		Constitution ${sixStats[0]},
		Intelligence ${sixStats[0]},
		Wisdom ${sixStats[0]},
		Charisma ${sixStats[0]}.`)
	} else if (playerClass == "Paladin") {
		window.alert(`Your stats, assigned optimally by your class, are:
		Strength ${sixStats[0]},
		Dexterity ${sixStats[0]},
		Constitution ${sixStats[0]},
		Intelligence ${sixStats[0]},
		Wisdom ${sixStats[0]},
		Charisma ${sixStats[0]}.`)
	} else if (playerClass == "Ranger") {
		window.alert(`Your stats, assigned optimally by your class, are:
		Strength ${sixStats[0]},
		Dexterity ${sixStats[0]},
		Constitution ${sixStats[0]},
		Intelligence ${sixStats[0]},
		Wisdom ${sixStats[0]},
		Charisma ${sixStats[0]}.`)
	} else if (playerClass == "Rogue") {
		window.alert(`Your stats, assigned optimally by your class, are:
		Strength ${sixStats[0]},
		Dexterity ${sixStats[0]},
		Constitution ${sixStats[0]},
		Intelligence ${sixStats[0]},
		Wisdom ${sixStats[0]},
		Charisma ${sixStats[0]}.`)
	} else if (playerClass == "Sorcerer") {
		window.alert(`Your stats, assigned optimally by your class, are:
		Strength ${sixStats[0]},
		Dexterity ${sixStats[0]},
		Constitution ${sixStats[0]},
		Intelligence ${sixStats[0]},
		Wisdom ${sixStats[0]},
		Charisma ${sixStats[0]}.`)
	} else if (playerClass == "Warlock") {
		window.alert(`Your stats, assigned optimally by your class, are:
		Strength ${sixStats[0]},
		Dexterity ${sixStats[0]},
		Constitution ${sixStats[0]},
		Intelligence ${sixStats[0]},
		Wisdom ${sixStats[0]},
		Charisma ${sixStats[0]}.`)
	} else if (playerClass == "Wizard") {
		window.alert(`Your stats, assigned optimally by your class, are:
		Strength ${sixStats[0]},
		Dexterity ${sixStats[0]},
		Constitution ${sixStats[0]},
		Intelligence ${sixStats[0]},
		Wisdom ${sixStats[0]},
		Charisma ${sixStats[0]}.`)
	} 
}

assignStats()