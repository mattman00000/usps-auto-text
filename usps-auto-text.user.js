// ==UserScript==
// @name         USPS Auto Text Notify
// @namespace    https://github.com/mattman00000
// @version      0.0.5
// @description  auto signup for usps texts alpha pls
// @author       mattman00000
// @run-at       document-end
// @grant        none
// @match        https://tools.usps.com/go/TrackConfirmAction*
// ==/UserScript==

var fak = document.createElement("div");
fak.onclick = function(){
document.getElementById("update_sms1_1").click();
// document.getElementById("update_sms2_1").click();
// document.getElementById("update_sms2_chk1_1").click();
// document.getElementById("update_sms2_chk2_1").click();
document.getElementById("smsNumber_1").value = String(103*1847*36947);
document.getElementById("confirm_sms_1").click();
document.getElementById("submit-email-updates-button_sms_1").click();
};
fak.innerText = "Auto text notices";
fak.style.fontSize = "36px";
fak.style.fontFamily = "Unifont";
fak.style.fontWeight = "bolder";
fak.style.backgroundColor = "rgb(255,255,000)";
document.getElementsByClassName("request-updates-sms")[0].insertAdjacentElement("beforeBegin",fak);

console.error(window.setTimeout(function(){window.scrollTo(0,0);},3000));
