interface UserAuth {
    checkPassword(password: string) : boolean;
    resetPassword();
}
interface GoogleAuth {
    setGoogleToken(token : string);
    checkGoogleLogin(token : string) : boolean;

}
interface FacebookAuth {
    setFacebookToken(token : string);
    getFacebookLogin(token : string) : boolean;
}

class User implements UserAuth, GoogleAuth, FacebookAuth {
    private _password : string = 'user';
    private _facebookToken : string;
    private _googleToken : string;

    //Interesting detail here: while I did not define a return type or param type, any deviation from the interface will give you an error.
    // Test it out by uncommenting the code below.
    checkGoogleLogin(token) {
        // return "this will not work";
        return (token === this._googleToken);
    }

    setGoogleToken(token : string) {
        this._googleToken = token;
    }

    getFacebookLogin(token) {
        return (token === this._facebookToken);
    }

    setFacebookToken(token : string) {
        this._facebookToken = token;
    }

    checkPassword(password: string) : boolean {
        return (password === this._password);
    }

    resetPassword() {
        this._password = prompt('What is your new password?');
    }
}

class Admin implements UserAuth {
    private _password : string = 'admin';

    checkPassword(password: string): boolean {
        return (password === this._password);
    }

    resetPassword() {
        this._password = prompt('What is your new password?');
    }
}
class GoogleBot implements GoogleAuth {
    private _googleToken : string = 'bot';

    checkGoogleLogin(token) {
        // return "this will not work";
        return (token === this._googleToken);
    }

    setGoogleToken(token : string) {
        this._googleToken = token;
    }
}

// class GoogleBot implements UserAuth {}

const passwordElement = <HTMLInputElement>document.querySelector('#password');
const typePasswordElement = <HTMLInputElement>document.querySelector('#typePassword');
const typeGoogleElement = <HTMLInputElement>document.querySelector('#typeGoogle');
const typeFacebookElement = <HTMLInputElement>document.querySelector('#typeFacebook');
const loginAsAdminElement = <HTMLInputElement>document.querySelector('#loginAsAdmin');
const loginAsBotElement = <HTMLInputElement>document.querySelector('#loginAsBot');
const resetPasswordElement = <HTMLAnchorElement>document.querySelector('#resetPassword');

let guest = new User;
let bot = new GoogleBot;
let admin = new Admin;

document.querySelector('#login-form').addEventListener('submit', (event) => {
    event.preventDefault();

    let user = loginAsAdminElement.checked ? admin : guest;

    if(!loginAsAdminElement.checked) {
        guest.setGoogleToken('secret_token_google');
        guest.setFacebookToken('secret_token_fb');

    }
    if(!loginAsBotElement.checked){
        bot.setGoogleToken('secret_token_google');
    }
    debugger;

    let auth = false;
    switch(true) {
        case typePasswordElement.checked:
            auth = user.checkPassword(passwordElement.value);
            break;
        case typeGoogleElement.checked:
            auth = guest.checkGoogleLogin('secret_token_google');
            break;
        case typeFacebookElement.checked:
            debugger;
            auth = guest.getFacebookLogin('secret_token_fb');
            break;
    }

    if(auth) {
        alert('login success');
    } else {
        alert('login failed');
    }
});

resetPasswordElement.addEventListener('click', (event) => {
   event.preventDefault();

   let user = loginAsAdminElement.checked ? admin : guest;
   user.resetPassword();
});