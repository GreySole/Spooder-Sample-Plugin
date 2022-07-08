class SamplePlugin {

	//Alert box plugins need to be open to all OSC messages to hear /connect messages from other plugins
	//isAlertBox = true;
	
	constructor() {
		this.onChat = this.onChat.bind(this);
		this.onOSC = this.onOSC.bind(this);
		this.onEvent = this.onEvent.bind(this);
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
	
	/*
		Put your command code here. Here's a quick reference:
		Chat text: message.message
		Sender's name: message.username
		Sender's emotes: message.tags.emotes
		
		There are a couple global functions to send OSC with:
		sendToTCP(address, value)
		sendToUDP(destination, address, value)
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
	onEvent(event){

	}
}

module.exports = SamplePlugin;