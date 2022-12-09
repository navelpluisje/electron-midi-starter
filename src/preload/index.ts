// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from 'electron';
import { MidiUpdateCallback } from '../types';

contextBridge.exposeInMainWorld('midiAPI', {
  onMidiUpdate: (callback: MidiUpdateCallback) => ipcRenderer.on('midi-update', callback),
  // we can also expose variables, not just functions
})