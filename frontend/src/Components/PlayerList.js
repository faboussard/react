import {React, useState} from "react";
import Player from './Components/Player'
import './global.css'

function PlayerList() {
    const [players, setPlayers] = useState(
        [
        {
            id: 1,
            name: "Fanny", role: "attaquant", img:"https://images.pexels.com/photos/1022158/pexels-photo-1022158.jpeg",
    },
        {
            id: 2,
            name:"Emir", role:"défensif", img:"https://images.pexels.com/photos/1022158/pexels-photo-1022158.jpeg",
    },
        {
            id: 3,
            name:"Karim", role:"mixte", img:"https://images.pexels.com/photos/1022158/pexels-photo-1022158.jpeg",
    },
    ]);

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
                        return (
                            <Player
                                key={player.id}
                                name={player.name}
                                role={player.role}
                                img={player.img}
                                />
                        );
                    })}
                </div>
                </>
            ) : (
                <p>You cannot see the players</p>
            )}
        </div> 
    )
}

export default PlayerList;
