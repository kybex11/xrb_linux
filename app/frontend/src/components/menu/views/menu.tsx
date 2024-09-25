import Navbar from "./navbar";
import GameInfo from "../components/game_info";
import Settings from "./settings";
import Studio from "./studio"; 

interface Friend {
  nickname: string;
  //status: string;
}

export default function Menu() {
  const places = [
    { id: 1, name: 'Tower Of Hell' },
    { id: 2, name: 'Jail Break' },
    { id: 3, name: 'Apeirophobia' },
  ];

  return (
    <>
      <Navbar/>
      <div className="menu-container">
          <div className="menu-content">
            <div className="menu-view">
              <div className="menu-friends">
                <GameInfo game={places}/>
              </div>
              <div className="menu-games"></div>
            </div>
          </div>
      </div>
    </>
  )
}