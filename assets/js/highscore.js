// Once a score and initial is added, need to save to high scores page
//Highscores

let store = localStorage.scores ? JSON.parse(localStorage.scores) : [];

if(store.length) {
    for (let i = 0; i < store.length; i++) {
        let {initials,score} = store[i];

        document.querySelector('tbody').innerHTML += `
            <tr>
                <td></td>
                <td>${initials}</td>
                <td>${score}</td>
            </tr>
        
        `;
    }
}
