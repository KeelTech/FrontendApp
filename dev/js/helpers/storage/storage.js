import CookieHelper from './cookie.js'
var CryptoJS = require("crypto-js");
// import { API_POST } from '../../api/api.js';
// import SOCKET from '../socket'

function deleteAllCookies() {
    if (document) {
        var cookies = document.cookie.split(";");

        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            var eqPos = cookie.indexOf("=");
            var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
    }
}

function setCookie(name, value, days) {
    if (document) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }
}

function getCookie(name) {
    var nameEQ = name + "=";
    if (document) {
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }else if(CookieHelper && CookieHelper.getReq){
        try{
            let req = CookieHelper.getReq();
            if(req && req.headers && req.headers.cookie) {
                let cookies = req.headers.cookie
                var ca = cookies.split(';');
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
                }
                return null;
            }
        }catch(e){

        }
        
    }
}

function eraseCookie(name) {
    if (document) {
        document.cookie = name+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
}



const STORAGE = {
    setAuthToken: (token) => {
        setCookie('tokenauth', token, 10)
        return Promise.resolve(true)
    },
    getAuthToken: (dataParams={}) => {

        return Promise.resolve(getCookie('tokenauth'))  
               
    },
    checkAuth: () => {
        return !!getCookie('tokenauth')
    },
    deleteAuth: () => {
        eraseCookie('tokenauth')
        eraseCookie('number')
        return Promise.resolve()
    },
   
    setPhoneNumber: (userId) => {
        setCookie('number', userId, 10)
        return Promise.resolve(true)
    },
    getPhoneNumber: () => {
        return getCookie('number')
    },
    checkNumber: () => {
        return !!getCookie('number')
    },
    deleteUserId: () => {
        eraseCookie('user_id')
        return Promise.resolve(true)
    },

}

export default STORAGE
