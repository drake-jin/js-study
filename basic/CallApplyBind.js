const l = require('../lib/logger')

/*

call, apply, bind are basic method of Function object

call & apply has common point that replacing ${this} to ${param}

call is apply ${param} to ${this} and run

  anyFunction.call(param)

but, bind is little different call and apply about 'run'
bind isn't make to run any Function, it just replace param to this.

That's it.
*/

const NoneUsedThisDeclareFunction = function (a, b, c){
  return a + b + c
}

l('d', 'NoneUsedThisDeclareFunction')
l(NoneUsedThisDeclareFunction(1,2,3))
l(NoneUsedThisDeclareFunction.call(null, 1, 2, 3))    // if first param is a null or undefined. that mean, 'we don't replace original ${this}
l(NoneUsedThisDeclareFunction.apply(null, [1, 2, 3])) // if first param is a null or undefined. that mean, 'we don't replace original ${this}
l(NoneUsedThisDeclareFunction.bind(null)) // if first param is a null or undefined. that mean, 'we don't replace original ${this}
l(NoneUsedThisDeclareFunction.bind(null)(1,2,3))

var usingThisInObject = {
  string: 'zero',
  yell: function() {
    return this.string
  }
}

var objData = { string : 'One' } 
l('d', 'usingThisInObject')
l(usingThisInObject.yell()) // this를 바꾸지 않았음.
l(usingThisInObject.yell.call(objData))    // if first param is a null or undefined. that mean, 'we don't replace original ${this}
l(usingThisInObject.yell.apply(objData)) // if first param is a null or undefined. that mean, 'we don't replace original ${this}
l(usingThisInObject.yell.bind(objData))
l(usingThisInObject.yell.bind(objData)())
