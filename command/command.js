class SamplePlugin {

	//Alert box plugins need to be open to all OSC messages to hear /connect messages from other plugins
	//isAlertBox = true;
	

	//All functions defined here are for reference. They aren't all required for the plugin to run.
	constructor() {
		this.onChat = this.onChat.bind(this);
		this.onOSC = this.onOSC.bind(this);
		this.onEvent = this.onEvent.bind(this);
		this.onSettings = this.onSettings.bind(this);
		this.onDiscord = this.onDiscord.bind(this);
		this.onStop = this.onStop.bind(this);
	}
	
	//Plugin modmaps only contain locks for now.
	//Locks are simple on/off values that can be toggled in the mod UI.
	modmap = {
		locks:{
			samplecommand:0
		}
	}
	
	/*List all your commands here to be accessible through the help command*/
	commandList = {
		"samplecommand":"Call the help command with the event and this command like '!help sampleplugin samplecommand' to get this description"
	};

	//This is called as soon as the plugin's settings are loaded. Also accessible through `this.settings`
	onSettings(settings){

	}
	
	/*
		Put your command code here. Here's a quick reference:
		Chat text: message.message
		Sender's name: message.username
		Sender's emotes: message.tags.emotes
		
		There are a couple global functions to send OSC with:
		sendToTCP(address:string, value:any)
		sendToUDP(destination:string, address:string, value:any)
	*/
	onChat(message){
		
	}

	/*
		You can also use OSC as a trigger. Only addresses with the plugin's name first will go through here.
		To open this plugin to all OSC messages, uncomment isAlertBox above. An OSC message looks like this:
		Address - message.address
		Value - message.args[0]
	*/
	onOSC(message){

	}

	/*
		This function handles events from Spooder (channel point awards) and Twitch (follow, subscribe, etc.)
		Make sure the events are configured to send event data to this plugin.
		Here's what Twitch's events look like: https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types
	*/
	onEvent(type, event){

	}

	/*
		Discord can send multiple events through this. Currently it supports messages and voice channel events.
	*/
	onDiscord(type, event){

	}

	//This is called just before the plugin is unloaded. Close any timeouts, intervals, etc here.
	onStop(){

	}
}

module.exports = SamplePlugin;