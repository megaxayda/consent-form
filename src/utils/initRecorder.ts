import { blobToBase64 } from 'base64-blob';

type InitRecorderReturn = {
  start: () => void;
  stop: () => Promise<{ audioUrl: string; base64Audio: string }>;
};

export default function initRecorder(): Promise<InitRecorderReturn> {
  return new Promise((resolve) => {
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const mediaRecorder = new MediaRecorder(stream);
      const audioChunks: Blob[] = [];

      mediaRecorder.addEventListener('dataavailable', (event) => {
        audioChunks.push(event.data);
      });

      const start = () => mediaRecorder.start();

      const stop = () => {
        return new Promise<{ audioUrl: string; base64Audio: string }>((resolve) => {
          const handleStop = () => {
            const audioBlob = new Blob(audioChunks, { type: 'audio/mpeg' });
            const audioUrl = URL.createObjectURL(audioBlob);

            blobToBase64(audioBlob).then((e) => {
              resolve({ audioUrl, base64Audio: e });
            });
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
