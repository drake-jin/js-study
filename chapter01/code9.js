const l = require('../lib/logger')
const _ = require('../lib/underscore')


l('d', '_.compose')
_.compose = function () { // 이게 arrow함수이게 될 경우 arguments[start]에 apply를 못함 
  var args = arguments
  var start = args.length - 1 // 맨 마지막에 있는녀석
  return function() { // 이게 익명함수이게 될 경우 this를 못가져옴
    var i = start;
    var result = args[start].apply(this, arguments)
    while(i--) result = args[i].call(this, result) // i == 0 일 때에 알아서 종료됨
    return result
  }
}

const greet = (name) => { return `hi : ${name}` } 
const exclaim = (statement) => { return `${statement.toUpperCase()} !`}
const welcome = _.compose(greet, exclaim)
console.log(welcome('moe'))
