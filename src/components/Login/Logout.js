import React from 'react'
import { GoogleLogout } from 'react-google-login';
const clientId = "304788118855-l4frhratrtujhhlkq20482an60okom01.apps.googleusercontent.com"

function Logout() {
    const onSuccess = () => {
        console.log('Logout made successfully');
        alert('Logout made successfully ✌');
      };

    return (
        <div>
        <GoogleLogout
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={onSuccess}
        ></GoogleLogout>
        </div>
    )
}

export default Logout
