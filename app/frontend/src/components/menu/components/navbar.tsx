export default function Navbar() {
    const reloadPage = () => {
        window.location.reload();
    }

    return (
        <>
            <div className="navbar">
                <button onClick={reloadPage}>Home</button>
            </div>
        </>
    )
}