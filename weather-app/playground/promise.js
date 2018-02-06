var asyncAdd = (a, b) => {
  return new Promise((resolve,reject) => {
      setTimeout(() => {
        if (typeof a === 'number' && typeof b === 'number') {
          resolve(a+b);
        } else {
          reject('Arguments must be numbers');
        }
      },1500);
  });
};

asyncAdd(5, '6').then((result) => {
    console.log('result: ',result);
    return asyncAdd(result, 33);
  }).then((resultB) => {                   //then of second asyncAdd
    console.log('resultB: ',resultB)
  }).catch((errorMessage) => {
    console.log('error:',errorMessage);
  }

  );


// asyncAdd(5, '6').then((result) => {
//     console.log('result: ',result);
//     return asyncAdd(result, 33);
//   },(err) => {
//     console.log('error: ',err);
//   }).then((resultB) => {                   //then of second asyncAdd
//     console.log('resultB: ',resultB)
//   }, (errB) => {
//     console.log('errorB',errB);
//   });

// var somePromise =  new Promise((resolve, reject) => {
//   setTimeout(() => {
//     //resolve('Hey It Worked');
//     reject('Unable to fulfill promise');
//   }, 2500);
//   console.log('waiting for 2.5 sec');
// });
//
// somePromise.then((message) => {
//   console.log('message: ',message);
// },(errorMessage) => {
//   console.log('error:',errorMessage);
// });
