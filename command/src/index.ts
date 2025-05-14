import PluginBase from "./PluginBase";
import { OSCMessage, StreamMessage } from "./Types";

export default class SamplePlugin extends PluginBase {
  onLoad() {}
  onChat(message: StreamMessage) {}
  onOSC(message: OSCMessage) {}
  onEvent(type: string, event: any) {}
  onCommunityChat(type: string, event: any) {}
}
