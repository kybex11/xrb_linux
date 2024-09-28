import Create from "./project/create";
import Open from "./project/open";
import Editor from "./editor";
import { useState } from "react";

export default function EditorMenu() {
    const [showMenu, setShowMenu] = useState(true);
    const [showCreate, setShowCreate] = useState(false);
    const [showOpen, setShowOpen] = useState(false);

    const handleCreateClick = () => {
        setShowMenu(false);
        setShowCreate(true);
    };

    const handleOpenClick = () => {
        setShowMenu(false);
        setShowOpen(true);
    };

    return (
        <>
            <br /><br />
            {showMenu && (
                <div className="container-form">
                    <br />
                    <h1>Create or Open Project</h1>
                    <br />
                    <button className="button" onClick={handleCreateClick}>
                        Create
                    </button>
                    <button className="button" onClick={handleOpenClick}>
                        Open
                    </button>
                </div>
            )}
            {showCreate && <Create />}
            {showOpen && <Open />}
        </>
    );
}