function gameObject(){
    return{
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Balck', 'White'],
            players: {
                'Alan Anderson': {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                'Reggie Evans': {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                'Brook Lopez': {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                'Mason Plumlee': {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slanDunks: 5
                },
                'Jason Terry': {
                    number: 31,
                    show: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise', 'Purple'],
            players: {
                'Jeff Adrien': {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 1,
                    blocks: 7,
                    slamDunks: 2
                },
                'Bismak Biyombo': {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                'DeSagna Diop': {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                'Ben Gordon': {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                'Brendan Haywood': {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 4,
                    slamDunks: 12
                } 
            }
        },
    }
}

const game = gameObject()
//const players = playerObject()
const teams = Object.values(game) 

function homeTeam() {
    return gameObject().home
}

function awayTeam(){
    return gameObject().away
}

function players(){
    return Object.assign({}, homeTeam().players, awayTeam().players)
}

function numPointsScored(playerInput) {
    return players()[playerInput].points
}

function shoeSize(playerInput) {
    return players()[playerInput].shoe
}

function teamColors (teamName) {
    return findByTeamName(teamName).colors
}

function teamColors(teamName) { 
    return findByTeamName(teamName).colors
}

function playerNumbers(playerInput) {
    return players()[playerInput].number
}

function playerStats(playerName) {
    return players()[playerName]
}

function bigShoeRebounds(){
    const game = gameObject()
    const recall = {shoe: 0}

    for (let key in game){
        const theTeam = game[key]

        const thePlayers = theTeam.players 
        for(let playerName in thePlayers) {
            const player = thePlayers[playerName]

            if (player.shoe > recall.shoe) {
                recall.shoe = player.shoe
                recall.rebounds = player
              //  console.log(player)
            }        
        }
    //const numberOfRebounds = recall[Object.keys(recall)[Object.keys(recall).length - 1]]
    //return numberOfRebounds.rebounds 
    return recall[Object.keys(recall)[Object.keys(recall).length - 1]].rebounds
    }
    
}





