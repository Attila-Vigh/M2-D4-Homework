"use strict";
// testing background
document.querySelector("body").style.backgroundColor = "#cdecf1";

const addNewItemToList = (newItem, allItemList) => {
    let list = []
    list.push(newItem.value)
    list.forEach( item => 
        allItemList.innerHTML 
            += `
            <li class="list-group-item">${item}</li>
            `
    )
}

const addPlayerInList = function ( ) {
    const newPlayer = document.querySelector("#player")
    const allPlayersNameList = document.querySelector("#allPlayersNameList")
    const buttonAddPlayer = document.querySelector("#button-addPlayer")
    buttonAddPlayer.addEventListener("click", () => {
        let playerList = []
        playerList.push(newPlayer.value)
        playerList.forEach( player => 
            allPlayersNameList.innerHTML 
                += `
                <li class="list-group-item">${player}</li>
                `
        )
    })

}

addPlayerInList()


const addTeamInList = function ( ) {
    const newTeam = document.querySelector("#team")
    const allTeamsNameList = document.querySelector("#allTeamsNameList")
    const buttonAddTeam = document.querySelector("#button-addTeam")
    buttonAddTeam.addEventListener("click", () => {
        let teamList = []
        teamList.push(newTeam.value)
        teamList.forEach( team => 
            allTeamsNameList.innerHTML 
                += `
                <li class="list-group-item">${team}</li>
                `
        )
    })

}

addPlayerInList()

/*
    WELCOME TO THE STRIVE TEAM GENERATOR!

    In this app you will generate teams and assign the participants to them.
    You will use the Bootstrap components for the elements of your app.

    The features are the following:
        The user should be able to add a list of names, find a way to get the user input and fill a list with the new name.
        The user should be able to set the number of teams he wants, so that they will be generated. A team is just another list to be displayed.
        An "Assign" button will be required in order to launch the team generation functionality.
        Every time the user clicks on the "Assign" button, a random name is placed in a team and removed from the initial list.
        Each team should be inside a "column" to be responsive.
        [EXTRA] Create a button to remove a user from a team, and putting him back in the main list, waiting to be reassigned.
        [EXTRA] Create a button to reset the state of the app.
*/