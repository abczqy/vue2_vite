nmCryptokit.chromeExtension = "gplimmendbmlfjfilgkfgmdkgbcelkcp";
nmCryptokit.productID = "com.cfca.cryptokit.zqkj";

nmCryptokit.extensionName = nmCryptokit.productID + ".extension";
nmCryptokit.reqEventName  = nmCryptokit.productID + ".request";
nmCryptokit.respEventName = nmCryptokit.productID + ".response";

nmCryptokit.Browser = {
    IE:      "Internet Explorer",
    Edge:    "Edge",
    Chrome:  "Chrome",
    Safari:  "Safari",
    Firefox: "Firefox",
};

// Encapsulate Chrome sendMessage callback to Promise
nmCryptokit.SendMessageforChrome = function(request) {
    return new Promise( function (resolve, reject) {
        chrome.runtime.sendMessage(nmCryptokit.chromeExtension, request, function (response) {
			if (response) {
				if(0 == response.errorcode){ 
                    resolve(response);                                    
				}
				else{
                    reject(response);
				}
			}
			else {
			    var result = new Object();
			    result.errorcode = 1;
			    result.result = chrome.runtime.lastError.message;
			    reject(result);
			}
		});
    });
}

// Encapsulate Edge&Firefox event to Promise
nmCryptokit.SendMessagebyEvent = function(request) {
    var event = new CustomEvent(nmCryptokit.reqEventName, { detail: request });
    document.dispatchEvent(event);

    return new Promise( function (resolve, reject) {
	
	    var responseEventName = nmCryptokit.respEventName;
	    if(request.funcInfo != undefined && request.funcInfo.randomId != undefined)
			responseEventName += ("." + request.funcInfo.randomId);
			
        document.addEventListener(responseEventName, function CallBack(e) {
            document.removeEventListener(e.type, CallBack);
            var eJson = JSON.parse(e.detail);
            if (null != eJson && 0 == eJson.errorcode) {
                resolve(eJson);
            }
            else {
                reject(eJson);
            }
        }, false);
    });
}

nmCryptokit.SendMessage = function(browser, requestJSON) {
    return nmCryptokit.SendMessagebyEvent(requestJSON);
}


nmCryptokit.checkExtension = function(browser) {
    return new Promise(function (resolve, reject) {
        var result = new Object();
        if (nmCryptokit.Browser.Edge == browser || nmCryptokit.Browser.Firefox == browser || nmCryptokit.Browser.Chrome == browser) {
            if (document.getElementById(nmCryptokit.extensionName)) {
                resolve(browser);
            }
            else {
                result.errorcode = 2;
                result.result = "Extension does not exist!";
                reject(result);	            
           }
        }
        else{
                result.errorcode = 3;
                result.result = "Only support Chrome/Edge/Firefox";
                reject(result);        
        }
    });
}

function nmCryptokit(browser) {

    this.browser = browser;
};

function GenerateRandomId() {
    var charstring = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
    var maxPos = charstring.length;
    var randomId = '';
    for (i = 0; i < 10; i++) {
        randomId += charstring.charAt(Math.floor(Math.random() * maxPos));
    }
    return randomId;
}
	
nmCryptokit.prototype.init = function () {

    var browser = this.browser;

    return nmCryptokit.checkExtension(browser)
        .then(function (browser) {
            var request = new Object();
            request.action = "connect";
            request.host = nmCryptokit.productID;
            return nmCryptokit.SendMessage(browser, request);
        }).then(function () {
            var request = new Object();
            var funcInfo = new Object();
            var randomId = GenerateRandomId();
            funcInfo.function = "checkHost";
            funcInfo.params = null;
            funcInfo.randomId = randomId;
            request.action = "invoke";
            request.funcInfo = funcInfo;
            return nmCryptokit.SendMessage(browser, request);
        });
}


nmCryptokit.prototype.uninit = function () {

    var request = new Object();                   
    request.action = "disconnect";
    request.host = nmCryptokit.productID;

    return nmCryptokit.SendMessage(this.browser, request);
}


nmCryptokit.prototype.getExtensionVersion = function ( ) {

    var request = new Object();
    var funcInfo = new Object();
    var randomId = GenerateRandomId();
    
    funcInfo.function = "getExtensionVersion";
    funcInfo.params = null;
    funcInfo.randomId = randomId;
    request.action = "getExtensionVersion";
    request.funcInfo = funcInfo;

    return nmCryptokit.SendMessage(this.browser, request);
}


nmCryptokit.prototype.getHostVersion = function () {

    var request = new Object();
    var funcInfo = new Object();
    var randomId = GenerateRandomId();
           
    funcInfo.function = "GetVersion";
    funcInfo.params = null;
    funcInfo.randomId = randomId;
       
    request.action = "invoke";
    request.funcInfo = funcInfo;

    return nmCryptokit.SendMessage(this.browser, request);
}


nmCryptokit.prototype.selectCertificate = function (strSubjectDNFilter, strIssuerDNFilter, strSerialNo, strCSPFilter) {
          
    var request = new Object();
    var funcInfo = new Object();
    var paramArr = new Array();
    var randomId = GenerateRandomId();
    
    paramArr.push(strSubjectDNFilter);
    paramArr.push(strIssuerDNFilter);
    paramArr.push(strSerialNo);
    paramArr.push(strCSPFilter);
       
    funcInfo.function = "SelectCertificate";
    funcInfo.params = paramArr;
    funcInfo.randomId = randomId;
       
    request.action = "invoke";
    request.funcInfo = funcInfo;

    return nmCryptokit.SendMessage(this.browser, request);
}


nmCryptokit.prototype.getSignCertInfo = function (strInfoType) {

    var request = new Object();
    var funcInfo = new Object();
    var paramArr = new Array();
    var randomId = GenerateRandomId();
    
    paramArr.push(strInfoType);
       
    funcInfo.function = "getSignCertInfo";
    funcInfo.params = paramArr;
    funcInfo.randomId = randomId;
       
    request.action = "invoke";
    request.funcInfo = funcInfo;

    return nmCryptokit.SendMessage(this.browser, request);
}


nmCryptokit.prototype.signMsgPKCS7 = function (bstrSourceData, bstrHashAlg, bWithSourceData) {

    var request = new Object();
    var funcInfo = new Object();
    var paramArr = new Array();
    var randomId = GenerateRandomId();

    paramArr.push(bstrSourceData);
    paramArr.push(bstrHashAlg);
    paramArr.push(bWithSourceData);
       
    funcInfo.function = "SignMsgPKCS7";
    funcInfo.params = paramArr;
    funcInfo.randomId = randomId;
       
    request.action = "invoke";
    request.funcInfo = funcInfo;

    return nmCryptokit.SendMessage(this.browser, request);
}


nmCryptokit.prototype.verifyMsgSignaturePKCS7Attached = function (strSignature, strSignatureType) {

    var request = new Object();
    var funcInfo = new Object();
    var paramArr = new Array();
    var randomId = GenerateRandomId();

    paramArr.push(strSignature);
    paramArr.push(strSignatureType);

    funcInfo.function = "VerifyMsgSignaturePKCS7Attached";
    funcInfo.params = paramArr;
    funcInfo.randomId = randomId;

    request.action = "invoke";
    request.funcInfo = funcInfo;

    return nmCryptokit.SendMessage(this.browser, request);
}


nmCryptokit.prototype.verifyMsgSignaturePKCS7Detached = function (strSignature, strSignatureType, strSource) {

    var request = new Object();
    var funcInfo = new Object();
    var paramArr = new Array();
    var randomId = GenerateRandomId();

    paramArr.push(strSignature);
    paramArr.push(strSignatureType);
    paramArr.push(strSource);

    funcInfo.function = "VerifyMsgSignaturePKCS7Detached";
    funcInfo.params = paramArr;
    funcInfo.randomId = randomId;

    request.action = "invoke";
    request.funcInfo = funcInfo;

    return nmCryptokit.SendMessage(this.browser, request);
}


nmCryptokit.prototype.SignFilePKCS7Detached = function (strSource, strSelectedAlg) {

    var request = new Object();
    var funcInfo = new Object();
    var paramArr = new Array();
    var randomId = GenerateRandomId();

    paramArr.push(strSource);
    paramArr.push(strSelectedAlg);

    funcInfo.function = "SignFilePKCS7Detached";
    funcInfo.params = paramArr;
    funcInfo.randomId = randomId;

    request.action = "invoke";
    request.funcInfo = funcInfo;

    return nmCryptokit.SendMessage(this.browser, request);
}


nmCryptokit.prototype.VerifyFileSignaturePKCS7Detached = function (strSignature, strSignatureType, strSource) {

    var request = new Object();
    var funcInfo = new Object();
    var paramArr = new Array();
    var randomId = GenerateRandomId();

    paramArr.push(strSignature);
    paramArr.push(strSignatureType);
    paramArr.push(strSource);

    funcInfo.function = "VerifyFileSignaturePKCS7Detached";
    funcInfo.params = paramArr;
    funcInfo.randomId = randomId;

    request.action = "invoke";
    request.funcInfo = funcInfo;

    return nmCryptokit.SendMessage(this.browser, request);
}


nmCryptokit.prototype.selectEncryptCertificate = function (strSubjectDNFilter, strIssuerDNFilter, strSerialNo, strCSPFilter) {
          
    var request = new Object();
    var funcInfo = new Object();
    var paramArr = new Array();
    var randomId = GenerateRandomId();
    
    paramArr.push(strSubjectDNFilter);
    paramArr.push(strIssuerDNFilter);
    paramArr.push(strSerialNo);
    paramArr.push(strCSPFilter);
       
    funcInfo.function = "SelectEncryptCertificate";
    funcInfo.params = paramArr;
    funcInfo.randomId = randomId;
       
    request.action = "invoke";
    request.funcInfo = funcInfo;

    return nmCryptokit.SendMessage(this.browser, request);
}


nmCryptokit.prototype.getEncryptCertInfo = function (strInfoType) {

    var request = new Object();
    var funcInfo = new Object();
    var paramArr = new Array();
    var randomId = GenerateRandomId();
    
    paramArr.push(strInfoType);
       
    funcInfo.function = "GetEncryptCertInfo";
    funcInfo.params = paramArr;
    funcInfo.randomId = randomId;
       
    request.action = "invoke";
    request.funcInfo = funcInfo;

    return nmCryptokit.SendMessage(this.browser, request);
}


nmCryptokit.prototype.encryptMsgCMSEnvelopeEx = function (strSource, strEncryptAlg) {

    var request = new Object();
    var funcInfo = new Object();
    var paramArr = new Array();
    var randomId = GenerateRandomId();

    paramArr.push(strSource);
    paramArr.push(strEncryptAlg);

    funcInfo.function = "EncryptMsgCMSEnvelopeEx";
    funcInfo.params = paramArr;
    funcInfo.randomId = randomId;

    request.action = "invoke";
    request.funcInfo = funcInfo;

    return nmCryptokit.SendMessage(this.browser, request);
}


nmCryptokit.prototype.decryptMsgCMSEnvelopeEx = function (strEnvelope, strEnvelopeType) {

    var request = new Object();
    var funcInfo = new Object();
    var paramArr = new Array();
    var randomId = GenerateRandomId();

    paramArr.push(strEnvelope);
    paramArr.push(strEnvelopeType);

    funcInfo.function = "DecryptMsgCMSEnvelopeEx";
    funcInfo.params = paramArr;
    funcInfo.randomId = randomId;

    request.action = "invoke";
    request.funcInfo = funcInfo;

    return nmCryptokit.SendMessage(this.browser, request);
}


nmCryptokit.prototype.encryptFileCMSEnvelopeEx = function (strSourceFile, strEncryptAlg, strEncryptedFile) {

    var request = new Object();
    var funcInfo = new Object();
    var paramArr = new Array();
    var randomId = GenerateRandomId();

    paramArr.push(strSourceFile);
    paramArr.push(strEncryptAlg);
	paramArr.push(strEncryptedFile);

    funcInfo.function = "EncryptFileCMSEnvelopeEx";
    funcInfo.params = paramArr;
    funcInfo.randomId = randomId;

    request.action = "invoke";
    request.funcInfo = funcInfo;

    return nmCryptokit.SendMessage(this.browser, request);
}


nmCryptokit.prototype.decryptFileCMSEnvelopeEx = function (strEncryptedFile, strEnvelopeType, strPlainTextFile) {

    var request = new Object();
    var funcInfo = new Object();
    var paramArr = new Array();
    var randomId = GenerateRandomId();

    paramArr.push(strEncryptedFile);
    paramArr.push(strEnvelopeType);
	paramArr.push(strPlainTextFile);

    funcInfo.function = "DecryptFileCMSEnvelopeEx";
    funcInfo.params = paramArr;
    funcInfo.randomId = randomId;

    request.action = "invoke";
    request.funcInfo = funcInfo;

    return nmCryptokit.SendMessage(this.browser, request);
}


nmCryptokit.prototype.getVersion = function () {

    var request = new Object();
    var funcInfo = new Object();
    var randomId = GenerateRandomId();
       
    funcInfo.function = "GetVersion";
    funcInfo.params = null;
    funcInfo.randomId = randomId;
       
    request.action = "invoke";
    request.funcInfo = funcInfo;

    return nmCryptokit.SendMessage(this.browser, request);
}

nmCryptokit.prototype.getLastErrorDesc = function () {

    var request = new Object();
    var funcInfo = new Object();
    var randomId = GenerateRandomId();

    funcInfo.function = "GetLastErrorDesc";
    funcInfo.params = null;
    funcInfo.randomId = randomId;

    request.action = "invoke";
    request.funcInfo = funcInfo;

    return nmCryptokit.SendMessage(this.browser, request);
}