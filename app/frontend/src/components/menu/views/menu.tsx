import Navbar from "../components/navbar";

export default function Menu() {
    return ( 
        <>
        <Navbar/>
        <div className="menu-container">
            <div className="menu-content">
                <div className="menu-view">
                    <div className="menu-friends"></div>
                    <div className="menu-games"></div>
                </div>
            </div>
        </div>
        </>
    )
}

//https://reactrouter.com/en/main/components/link