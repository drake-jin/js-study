const l = require('../lib/logger')

// outer Function & inner function are declares
function declareFunction () {
  l(`Inside 'declareFunction' : ${this.foo}`)
  return {
    foo: 25,
    bar: function() {
      l(this)
      l(`Inside 'bar' in 'declareFunction': ${this.foo}`)
    }
  }
}

l('d', `declareFunction didn't use call`)
l('i', 'declareFunction().bar()')
l('o', declareFunction().bar())

l('d', `declareFunction used call`)
l('i', 'declareFunction.call({ foo:13 }).bar()')
l('o', declareFunction.call({ foo: 13 }).bar())
l('nl')

// outer Function & inner Function are arrows
const arrowFunction = () => {
  l(`Inside 'arrowFunction' : ${this.foo}`)
  return {
    foo: 25,
    bar: () => {
      l(this)
      l(`Inside 'bar' in 'arrowFunction': ${this.foo}`)
    }
  }
}

l('d', `arrowFunction didn't use call`)
l('i', 'arrowFunction().bar()')
l('o', arrowFunction().bar())

l('d', `arrowFunction used call`)
l('i', 'arrowFunction.call({ foo:13 }).bar()')
l('o', arrowFunction.call({ foo: 13 }).bar())
l('nl')


// outer Function is declare and inner Function is arrows
function declareFunctionCross () {
  l(`Inside 'declareFunctionCross' : ${this.foo}`)
  return {
    foo: 25,
    bar: () => {
      l(this)
      l(`Inside 'bar' in 'declareFunctionCross': ${this.foo}`)
    }
  }
}

l('d', `declareFunctionCross didn't use call`)
l('i', 'declareFunctionCross().bar()')
l('o', declareFunctionCross().bar())

l('d', `declareFunctionCross used call`)
l('i', 'declareFunctionCross.call({ foo:13 }).bar()')
l('o', declareFunctionCross.call({ foo: 13 }).bar())
l('nl')



// outer Function is declare and inner Function is arrows
const arrowFunctionCross = () => {
  l(`Inside 'arrowFunctionCross' : ${this.foo}`)
  return {
    foo: 25,
    bar: function () {
      l(this)
      l(`Inside 'bar' in 'arrowFunctionCross': ${this.foo}`)
    }
  }
}

l('d', `arrowFunctionCross didn't use call`)
l('i', 'arrowFunctionCross().bar()')
l('o', arrowFunctionCross().bar())

l('d', `arrowFunctionCross used call`)
l('i', 'arrowFunctionCross.call({ foo:13 }).bar()')
l('o', arrowFunctionCross.call({ foo: 13 }).bar())
l('nl')

/*

Arrow function can haven't ${this}, and use ${this} on outer area. 
This advantage is Arrow function have no ${this} so, It can't conflict other ${this}
(Also, useless call, apply. That's a shit.)

Declare function can have ${this}

[Function function].call(param) is bind ${param} to ${this}

*/