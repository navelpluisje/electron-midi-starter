import { IpcRendererEvent } from 'electron';

export type MidiMessage = [command: number, key: number, value: number];

export enum MidiTypes {
  NoteOff = 0x08,
  NoteOn = 0x09,
  PolyAfterTouch = 0x0A,
  CC = 0x0B,
  Program = 0x0C,
  ChannelAftertouch = 0x0D,
  Pitch = 0x0E,
}

export enum MidiExtendedTypes {
  Sysex = 0xF0,
  Mtc = 0xF1,
  Position = 0xF2,
  Select = 0xF3,
  Tune = 0xF6,
  SysexEnd = 0xF7,
  Clock = 0xF8,
  Start = 0xFA,
  Continue = 0xFB,
  Stop = 0xFC,
  Activesense = 0xFE,
  Reset = 0xFF,
}

const allTypes = { ...MidiTypes, ...MidiExtendedTypes };
export type AllMidiTypes = typeof allTypes;

export type MidiStandardMessage = {
  command: keyof typeof MidiTypes,
  channel: number,
  key: number,
  value: number,
  message: string,
  deltaTime: number,

}

export type MidiUpdateCallback = (type: IpcRendererEvent, message: MidiStandardMessage) => void;