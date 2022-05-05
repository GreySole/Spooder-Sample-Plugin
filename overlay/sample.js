/*
    osc-bundle.js contains all the mechanisms needed to run an overlay.
    It connects to your Spooder and reconnects automatically.

    Global vars:
    oscIP
    oscPort
    pluginSettings
*/

//The overlay can't run without this function as it's bridged with the OSC modules in the bundle.
function getOSCMessage(message){
    if(message.address == "/sampleplugin/connect/success"){
        console.log("OSC CONNECTED!");
        document.querySelector("#oscInfo").innerHTML = "OSC Connected!<br>Here's the info:<br>IP: "+oscIP+"<br>Port: "+oscPort+"<br>Settings: "+JSON.stringify(pluginSettings);
    }
}

function onOSCOpen(){
    
}