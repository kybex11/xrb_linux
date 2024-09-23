import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <>
            <div className="navbar">
                <Link to="/"><button>Home</button></Link>
                <Link to="/studio"><button>Studio</button></Link>
                <Link to="/settings"><button>Settings</button></Link>
            </div>
        </>
    )
}