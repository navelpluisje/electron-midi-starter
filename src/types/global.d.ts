export declare global {
	interface Window {
		midiAPI: {
      onMidiUpdate: (callback: MidiUpdateCallback) => void;
    };
	}
}

