import Recording from './Recording';

const PlayBackFunction = () => {
  let [audioURL, startRecording, stopRecording] = Recording();
  return (
    <div>
      <audio src={audioURL}/>
      <button onClick={startRecording}>Start Recording</button>
      <button onClick={stopRecording}>Stop Recroding</button>
      <button>PlayBack</button>
    </div>
  )
}

export default PlayBackFunction;