import net from 'net';

const client = net.createConnection('/tmp/unix.sock');
client.on('connect', () => {
  console.log('connected.');
});
client.on('data', (data) => {
  console.log(data.toString());
});
client.on('end', () => {
  console.log('disconnected.');
});
client.on('error', (err) => {
  console.error(err.message);
});
client.write('hello');
