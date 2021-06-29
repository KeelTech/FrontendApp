
var CryptoJS = require("crypto-js");

const validationUtils = {
    formFirstName: (name) => {
        return name.match(/^[a-zA-Z ]*$/) ? true  : false;
    },
    formLastName: (name) => {
        return name.match(/^[a-zA-Z ]*$/) ? true  : false;
    },
    formEmail: (email) => {
        return email.match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i) ? true  : false;
    },
    formPincode: (pin) => {
        return pin.match(/^([1-9])([0-9])*$/) ? true  : false;  
    },
    formHealthid: (hid) => {
        return hid.match(/^[a-zA-Z0-9\.\-]*$/) ? true: false;
    },
    formAddress: (address) => {
        return address.match(/^[a-z0-9A-Z \/ \- \.]*$/) ? true: false;
    }
}


const UTILS = {
    copyToClipboard: (data) => {
        navigator.clipboard.writeText(data)
    },

    formDate:(startDate, endDate) => {
        return (new Date(endDate) > new Date(startDate));
    },

    getInitials: (name) => {
        return  name.match(/(^\S\S?|\b\S)?/g).join("").match(/(^\S|\S$)?/g).join("").toUpperCase()
    },


    validationMap: (key, value) => {
        if (key in validationUtils){
            return validationUtils[key](value);
        }
        return true
    },

    fileToByteArray: (file) => {
            try {
                let reader = new FileReader();
                let fileByteArray = [];
                reader.readAsArrayBuffer(file);
                console.log(reader);
                reader.onloadend = (evt) => {
                    if (evt.target.readyState == FileReader.DONE) {
                        let arrayBuffer = evt.target.result,
                            array = new Uint8Array(arrayBuffer);
                        for (let byte of array) {
                            fileByteArray.push(byte);
                        }
                    }
                    return fileByteArray
                }
            }
            catch (e) {
                console.log(e)
                return null;
            }
    },

    b64toBlob: (b64Data, contentType='image/jpeg', sliceSize) => {
        contentType = contentType || '';
        sliceSize = sliceSize || 512;

        var byteCharacters = atob(b64Data);
        var byteArrays = [];

        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);

            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            var byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }

      var blob = new Blob(byteArrays, {type: contentType});
      return blob;
    },

    getEncryptedData: (data)=> {
        if (data) {
          data = String(data);
        }
        const key = CryptoJS.enc.Base64.parse(
          'PSVJQRk9QTEpNVU1DWUZCRVFGV1VVT0ZOV1RRU1NaWQ=',
        );
        const iv = CryptoJS.enc.Base64.parse('WVdsRkxWRVpaVUZOYVdsaA==');
        const encrypted = CryptoJS.AES.encrypt(data, key, {
          iv,
          mode: CryptoJS.mode.CBC,
          padding: CryptoJS.pad.Pkcs7,
        });
        return encodeURIComponent(encrypted.toString());
    },

    getDecryptedData: (cipher) => {
        const decodedCipher = decodeURIComponent(cipher);
        const key = CryptoJS.enc.Base64.parse(
          "PSVJQRk9QTEpNVU1DWUZCRVFGV1VVT0ZOV1RRU1NaWQ="
        );
        const iv = CryptoJS.enc.Base64.parse("WVdsRkxWRVpaVUZOYVdsaA==");
        const plainText = CryptoJS.AES.decrypt(decodedCipher, key, {
          iv,
          mode: CryptoJS.mode.CBC,
          padding: CryptoJS.pad.Pkcs7,
        });
        return plainText.toString(CryptoJS.enc.Utf8);
    }
}

 
export default UTILS
