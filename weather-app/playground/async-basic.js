
//sync calling
console.log('starting app ..')

setTimeout(() => {
  console.log('Inside of callback..')
},2000);

setTimeout(() => {
  console.log(' second Inside of callback..')
},0);

console.log('Finishing app ..')
