export function inspector(divID: any) {
    const div = document.getElementById(divID);
    if (div) {
        const h1 = document.createElement('h1');
        h1.innerHTML = "inspector";
        div.appendChild(h1);
    }
}