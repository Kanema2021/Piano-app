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
        endNote={"B3"}
        renderPianoKey={renderPianoKey}
        keyboardMap={{
          Q: "C3",
          2: "C#3",
          W: "D3",
          3: "D#3",
          E: "E3",
          R: "F3",
          4: "F#3",
          T: "G3",
          5: "G#3",
          Y: "A3",
          6: "A#3",
          U: "B3",
        }}
      />
    </div>
  );
};

export default Piano;