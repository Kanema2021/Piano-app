// import {useState, useEffect} from 'react';
import React from 'react';
import MicRecorder from 'mic-recorder-to-mp3';

const Mp3Recorder = new MicRecorder({ bitRate: 128 });

class Recording extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRecording: false,
      blobURL: '',
      isBlocked: false,
    };
  }

  start = () => {
    if (this.state.isBlocked) {
      console.log('Permission Denied');
    } else {
      Mp3Recorder
        .start()
        .then(() => {
          this.setState({ isRecording: true });
        }).catch((e) => console.error(e));
    }
  };

  stop = () => {
    Mp3Recorder
      .stop()
      .getMp3()
      .then(([buffer, blob]) => {
        const blobURL = URL.createObjectURL(blob)
        this.setState({ blobURL, isRecording: false });
      }).catch((e) => console.log(e));
  };

  componentDidMount() {
    navigator.getUserMedia({ audio: true },
      () => {
        console.log('Permission Granted');
        this.setState({ isBlocked: false });
      },
      () => {
        console.log('Permission Denied');
        this.setState({ isBlocked: true })
      },
    );
  }
  render() {
    return (
      <div className="App">
        <container className="App-header">

          <div id="outer">
            <div class="button_slide slide_left_record" onClick={this.start} disabled={this.state.isRecording}>Record</div>
            <div class="button_slide slide_left_stop" onClick={this.stop} disabled={!this.state.isRecording}>Stop</div>
          </div>
        <div className="controls">
          <audio src={this.state.blobURL} controls="controls" />
        </div>
        </container>
      </div>
    );
  }
}

export default Recording;
