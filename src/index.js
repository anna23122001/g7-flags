'use strict'
const leaderInput = document.querySelector('#leaderInput');
const flagImage = document.getElementById('flagImage');
const euFlag = 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg';

function loadLeaderFlag(lastName){
    const g7Leaders = {
        biden: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Flag_of_the_United_States.png',
        scholz: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg',
        meloni: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg',
        trudeau: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg',
        macron: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg',
        sunak: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg',
        kisida: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg',
        zelensky: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg'
    };
    const lowerCaseLN = lastName.toLowerCase();
    if (lowerCaseLN in g7Leaders){
        const flagUrl = g7Leaders[lowerCaseLN];
    fetch(flagUrl)
        .then((response )=> {
            if(response.ok){
                return response.blob();
            } else {
                throw new Error ("Error")
            }
        })
        .then(flagBlob => {
            const flagUrl = URL.createObjectURL(flagBlob);
            flagImage.src = flagUrl;
        })
        .catch((error) =>{
            console.log(error.message)
        })
    } else{
        flagImage.src = euFlag;
    }
}

leaderInput.addEventListener('input', function(){
    const leaderLastName = leaderInput.value.toLowerCase();
    if (leaderLastName === ''){
        flagImage.src = euFlag;
    }else{
        loadLeaderFlag(leaderLastName)
    }
} )