import midi from "@julusian/midi";
import { MidiMessage } from '../types';

export default class MIDIDevice {
  deviceName: string;
  midiInput: midi.Input;
  midiOutput: midi.Output;

  constructor(deviceName: string) {
    this.deviceName = deviceName;
    this.midiInput = null;
    this.midiOutput = null;
  }

  open() {
    if (this.midiInput === null) {
      this.midiInput = new midi.input();
      this.midiInput.openVirtualPort(this.deviceName);
    }

    if (this.midiOutput === null) {
      this.midiOutput = new midi.output();
      this.midiOutput.openVirtualPort(this.deviceName);
    }
  }

  close() {
    if (this.midiInput !== null) {
      this.midiInput.closePort();
      this.midiInput = null;
    }
    if (this.midiOutput !== null) {
      this.midiOutput.closePort();
      this.midiOutput = null;
    }
  }

  setState(nextState: any) {
    console.log('setState', nextState)
    // this::operations.setState(nextState);
  }

  doAction(action: any) {
    console.log('doAction', action)
    // this:operations.doAction(action, :: this.sendMessage);
  }

  sendMessage(data: MidiMessage) {
    if (this.midiOutput !== null) {
      console.log('sendMessage', data)
      this.midiOutput.sendMessage(data);
    }
  }
}