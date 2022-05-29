export default function initRecorder() {
  return new Promise((resolve) => {
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const mediaRecorder = new MediaRecorder(stream);
      const audioChunks = [];

      const handleDataAvailable = (event) => {
        audioChunks.push(event.data);
      };
      mediaRecorder.removeEventListener('dataavailable', handleDataAvailable);
      mediaRecorder.addEventListener('dataavailable', handleDataAvailable);

      const start = () => mediaRecorder.start();

      const stop = () => {
        console.log('stop');

        return new Promise((resolve) => {
          const handleStop = () => {
            const audioBlob = new Blob(audioChunks, { type: 'audio/mpeg' });
            const audioUrl = URL.createObjectURL(audioBlob);
            // const audio = new Audio(audioUrl);
            // console.log('stopping');
            // console.log(audioUrl);
            // const play = () => audio.play();
            // const pause = () => audio.pause();

            resolve(audioUrl);
            // resolve({
            //   audioBlob,
            //   audioUrl,
            //   audio,
            // });
          };
          mediaRecorder.removeEventListener('stop', handleStop);
          mediaRecorder.addEventListener('stop', handleStop);

          mediaRecorder.stop();
        });
      };
      resolve({ start, stop });
    });
  });
}
