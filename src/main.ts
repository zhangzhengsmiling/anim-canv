import CanvasApplication from './application';

const app = new CanvasApplication();
app.start();

setTimeout(() =>{
  app.stop();
}, 3000)


console.log('hello, this is test')
