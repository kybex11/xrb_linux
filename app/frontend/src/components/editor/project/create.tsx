import { useEffect, useRef, useState } from "react"
import Editor from "../editor";
import { LoadUsername } from "../../../../wailsjs/go/main/App";

interface FormData {
    projectName: string;
    description: string;
    id: any;
    creator: string
}

interface ResponseData {
    success: boolean;
    message: string;
}

export default function Create() {
    const nameRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLInputElement>(null);
    const IdRef = useRef<HTMLInputElement>(null);
    const [isUsername, setIsUsername] = useState<string>('');

    const [ isEditor, setIsEditor ] = useState(false);

    useEffect(() => {
        const user = async () => {
            const user_name = await LoadUsername();
            setIsUsername(user_name);
        }
    })

    const reloadPage = () => {
        window.location.reload();
    }

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
       event.preventDefault();

       const name = nameRef.current?.value;
       const description = descriptionRef.current?.value;
       const id = IdRef.current?.value;

       if (!name || !description || !id) {
        alert('Please fill in all fields!');
        return;
       }

       const formData: FormData = {
        projectName: name,
        description: description,
        id: id,
        creator: isUsername,
       }
       console.log(name, description, id, isUsername);
       fetch('http://localhost:3000/newlevel', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
       }) 
       .then((response: Response) => response.json()) 
       .then((data: ResponseData) => {
        if (data.success) {
            setIsEditor(true);
        } else {
            console.error(data.message);
            const status = document.getElementById('status');
            if (status) {
                status.innerHTML = data.message;
            }
        }
       })
       .catch((error: any) => console.error(error));
    }

    return (
        <>
        {isEditor ? (
            <>
                <Editor/>
            </>
        ) : (
        <div className="container-form">
            <br />
            <h1>Create new Game</h1>  
            <input type="text" ref={nameRef} placeholder="Project Name" />
            <br /><br />
            <input type="text" ref={descriptionRef} placeholder="Project Description"/>
            <br /><br />
            <input type="text" ref={IdRef} placeholder="Project ID" />
            <br /><br />
            <button className="button" onClick={handleSubmit}>Create</button>
            <button className="button" onClick={reloadPage}>Cancel</button>
            <p id='status'></p>
        </div>  
        )}
        
        </>
    )
}