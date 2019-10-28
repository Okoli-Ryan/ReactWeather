// var getTempCallback = function (location, callback) {
//     callback(undefined, 78);
//     callback('city not found');
// };
//
// getTempCallback('Philadelphia', function (err, temp) {
//     if(err){
//         console.log('error', err);
//     }
//     else{
//         console.log('success', temp);
//     }
// });
//
// function getTempPromise(location){
//     return new Promise(function (resolve, reject) {
//
//         setTimeout(function () {
//
//             resolve(79);
//             reject('City not found')
//         }, 1000)
//
//     });
// }
//
// getTempPromise('Philadelphia').then(function (temp) {
//     console.log('promise success', temp);
// }, function (err){
//     console.log('promise', err)
// });

//Challenge Area

function addPromise (a, b){
    return new Promise(function (resolve, reject){
        if(typeof a === 'number' && typeof b === 'number')
        resolve(
            a + b
        );
        reject('not number', 34)
    });
}

// addPromise(2, 5).then(function (result) {
//     console.log(result)
// }, function (err) {
//     return err;
// });

addPromise('number', 9).then(function (result) {
    console.log(result)
}, function (err, def) {
    console.log(err + def);
});
