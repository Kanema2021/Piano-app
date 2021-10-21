import React, { Fragment } from "react";
import Instrument from "./Instrument";

const Piano = () => {
  const accidentalKey = ({ isPlaying, text, eventHandlers }) => {
    return (
      <div className="piano-accidental-key-wrapper">
        <button
          className={`piano-accidental-key ${
            isPlaying ? "piano-accidental-key-playing" : ""
          } `}
          {...eventHandlers}
        >
          <div className="piano-text">{text}</div>
        </button>
      </div>
    );
  };

  const naturalKey = ({ isPlaying, text, eventHandlers }) => {
    return (
      <button
        className={`piano-natural-key ${
          isPlaying ? "piano-natural-key-playing" : ""
        } `}
        {...eventHandlers}
      >
        <div className="piano-text">{text}</div>
      </button>
    );
  };

  const renderPianoKey = ({
    isAccidentalNote,
    isNotePlaying,
    startPlayingNote,
    stopPlayingNote,
    keyboardShortcut
  }) => {
    const KeyComponent = isAccidentalNote ? accidentalKey : naturalKey;

    const eventHandlers = {
      onMouseDown: startPlayingNote,
      onMouseUp: stopPlayingNote,
      onTouchStart: startPlayingNote,
      onMouseOut: stopPlayingNote,
      onTouchEnd: stopPlayingNote
    };

    return (
      <KeyComponent
        isPlaying={isNotePlaying}
        text={keyboardShortcut.join("/")}
        eventHandlers={eventHandlers}
      />
    );
  };

  return (
    <div className="piano-container">
      <Instrument
        instrumentName={"acoustic_grand_piano"}
        startNote={"C3"}
        endNote={"B5"}
        renderPianoKey={renderPianoKey}
        keyboardMap={{
          c: "C3",
          C3: "C#3",
          d: "D3",
          D3: "D#3",
          e: "E3",
          f: "F3",
          F3: "F#3",
          g: "G3",
          G3: "G#3",
          a: "A3",
          A3: "A#3",
          b: "B3",
          C: "C4",
          C4: "C#4",
          D: "D4",
          D4: "D#4",
          E: "E4",
          F: "F4",
          F4: "F#4",
          G: "G4",
          G4: "G#4",
          A: "A4",
          A4: "A#4",
          B: "B4",
          Cc: "C5",
          C5: "C#5",
          Dd: "D5",
          D5: "D#5",
          Ee: "E5",
          Ff: "F5",
          F5: "F#5",
          Gg: "G5",
          G5: "G#5",
          Aa: "A5",
          A5: "A#5",
          Bb: "B5"
        }}
      />
    </div>
  );
};

export default Piano;