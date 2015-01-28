/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem 

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });
   

and what you should write is the favNum function that makes the code above work, 
    
    
   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(a){
      alert(a); //should alert ('Hi Katie')'
   });
    
    
*/


  //#1 =====  Code Here for first
  
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
var first = function(arr, cb) {
    cb(arr[0]);
}

first(names, function(firstName){
  console.log('The first name in names is ', firstName)
});



/*#2 ===  NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




  //Code Here for last
var last = function(arr, cb) {
    cb(arr[arr.length - 1]);
};

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
last(names, function(lastName){
  console.log('The last name in names is ', lastName);
});





/*#3 === NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */






  //Code Here for multiply
var multiply = function(a, b, cb) {
    cb(a * b);
}
multiply(4, 3, function(answer){
  console.log('The answer is ', answer); //should console.log 12
})





/*#4 ===  NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





  //Code Here for contains
var contains = function(arr, a, cb) {
    if (arr.indexOf(a) !== -1){
        cb(true);
    } else {
        cb(fales);
    }
}
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});





/*#5 === NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    //Code Here for uniq

    
//Try #1works but i don't likeit....    
/*var uniq = function(arr, cb) {
    var newArr = arr.slice();
    console.log(newArr);
    for (var i = 0; i < newArr.length; i++) {
        var currName = arr[i];
        console.log(currName);
        for (var j = i; j < newArr.length; j++) {
            var tempName = newArr[j + 1]
            console.log(tempName)
            if (currName === tempName) {
                newArr.splice(newArr.indexOf(tempName),1);
            }
        }
        
    }
    cb(newArr.sort());
}*/
//Try #2 - I like this way a bit better
/*var uniq = function(arr, cb) {
    var newArr = [];
    var newObj = {};
    for (var i = 0; i < arr.length; i++) {
        var tempPlace = arr[i];
        newObj[tempPlace] = tempPlace;
    }
    for (var key in newObj) {
        if (newObj[key]) {
            newArr.push(key);
        }
    }
    cb(newArr);
}
*/
//Try #3 - with help from someone else's repo - I like this way the best - didn't know about lastIndexOf, it is valuable...
var uniq = function(arr, cb) {
    for (var i = 0; i < arr.length; i++) {
        if (arr.lastIndexOf(arr[i]) > i) {
            arr.splice(arr.lastIndexOf(arr[i]),1);
        }
    }
    cb(arr);
}
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});





/*#6  ===   NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    //Code Here for each
var each = function(arr, cb) {
    for (var i = 0; i < arr.length; i++) {
        cb(arr[i],i);
    }
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
each(names, function(item, indice){
    console.log('The item in the ' + indice + ' position is ' + item)
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





 //code here for getUserById

var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address); 
});
