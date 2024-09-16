import Cookies from 'js-cookie';
import NoAccount from './menu/noaccount';

export default function CheckAccount() {
    const acc = Cookies.get("ltss1acc");
    if (typeof acc === 'string' && acc !== '') {
        console.log(true);
        return (
            <>
                <h1>true</h1>
            </>
        )
    } else {
        console.log(false);
        return (
            <>
                <NoAccount/>
            </>
        )
    }
}