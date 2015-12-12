// ==UserScript==
// @name         Rajce Idnes Enhancer
// @namespace    http://github.com/mattman00000/usps-auto-text
// @description  auto signup for usps texts alpha pls
// @author       mattman00000
// @run-at       document-end
// @grant        none
// @version      0.0.0
// @match        https://tools.usps.com/go/TrackConfirmAction*
// ==/UserScript==

// @grant        GM_xmlhttpRequest
// @grant        GM_download

var fak = document.createElement("div");
fak.onclick = function(){
document.getElementById("update_sms2_1").click();
document.getElementById("update_sms2_chk1_1").click();
document.getElementById("update_sms2_chk2_1").click();
document.getElementById("smsNumber_1").value = String(103*1847*36947);
document.getElementById("confirm_sms_1").click();
document.getElementById("submit-email-updates-button_sms_1").click();
};
fak.innerText = "Auto text notices";
fak.style.fontSize = "48px";
fak.style.fontFamily = "Unifont";
fak.style.fontWeight = "bolder";
fak.style.backgroundColor = "rgb(255,255,000)";
document.getElementsByClassName("request-updates-sms")[0].insertAdjacentElement("beforeBegin",fak);
