/*module.exports = async function App(context) {
  await context.sendText('Welcome to Bottender');
};*/
module.exports = async function App(context) {
   await context.sendText('Welcome to Bottender');
   if (context.event.isText) {
     await context.sendText(context.event.text);
   }
};
