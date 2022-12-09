import { MidiMessage, MidiStandardMessage, MidiTypes } from '../types';

export const getMidiData = ([cmd, key, value]: MidiMessage, deltaTime: number) => {
  const [command, channel] = cmd.toString(16);

  if (command.toLowerCase() === 'f') {
    // We have a special message here
  } else {
    const result: MidiStandardMessage = {
      command: MidiTypes[parseInt(command, 16)] as keyof typeof MidiTypes,
      channel: parseInt(channel, 16),
      key,
      value,
      message: `[${cmd.toString(16)}, ${key.toString(16)}, ${value.toString(16)}]`,
      deltaTime,
    };
    return result;
  }
}