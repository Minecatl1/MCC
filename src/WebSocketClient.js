import { w3cwebsocket as W3CWebSocket } from 'websocket';

const client = new W3CWebSocket('ws://localhost:8080');

client.onopen = () => {
  console.log('WebSocket Client Connected');
};

client.onmessage = message => {
  console.log(message.data);
  // Handle incoming messages
};

const sendCommand = command => {
  if (client.readyState === client.OPEN) {
    client.send(command);
  }
};

export { sendCommand };
