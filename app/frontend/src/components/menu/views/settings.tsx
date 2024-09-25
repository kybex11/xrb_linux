import Navbar from "./navbar";
import { DeleteCredentials } from "../../../../wailsjs/go/main/App";

export default function Settings() {
    const DeleteCredentialsFunc = () => {
        DeleteCredentials();
        setTimeout(() => {
          window.location.href = '/';
          setTimeout(() => {
            window.location.reload();
          }, 100)
        }, 500);
      }

    return (
        <>
        <Navbar/>
        <br />
        <h1>settings page</h1>
        <button className="LeaveButton" onClick={DeleteCredentialsFunc}>Leave from the account</button>
        </>
    )
}