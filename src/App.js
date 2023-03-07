import {React, useState} from "react";
import Player from './Components/Player'
import Parti from './Components/Parti'
import './global.css'

function App() {
    const [role, setRole] = useState('défensif')
    const [players, setPlayers] = useState(
    [
        {name: "Fanny", role: "attaquant", img:"https://www.pexels.com/fr-fr/photo/photographie-en-gros-plan-de-kitty-1022158/",
    },
        {name:"Emir", role:"défensif", img:"https://www.pexels.com/fr-fr/photo/photographie-en-gros-plan-de-kitty-1022158/",
    },
        {name:"Karim", role:"mixte", img:"https://www.pexels.com/fr-fr/photo/photographie-en-gros-plan-de-kitty-1022158/",
    },
    ]
    const showPlayers = true;
    return (
        <div className="App">
            {showPlayers ? (
                <>
                <input type='text' 
                onChange={() => {
                    console.log(e.target.value);
                    setRole(e.target.value);
                }}
                />
                <div className="flex flex-wrap justify-center">
                   {players.map((player) => {
                    }}}
                </div>
                </>
            ) : (
                <p>You cannot see the players</p>
            )}
        </div> 
    )
}

export default App;
