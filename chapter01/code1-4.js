const logger = require('../lib/logger.js')

// 실제 addMaker같은 패턴은 많이 사용되는 패턴이다.
const addMaker = (a) => {
  return (b) => {
    return a + b
  }
}

logger('d', '코드 1-1')
logger('o', 'addMaker')
logger(addMaker);
logger('o', 'addMaker(10)');
logger(addMaker(10));
logger('o', 'addMaker(10)(5)');
logger(addMaker(10)(5));
logger('nl')


const add5 = addMaker(5)
logger('d', '코드 1-2')
logger('const add5 = addMaker(5)')
logger('o', 'add5')
logger(add5)
logger('o', 'add5(3)')
logger(add5(3))
logger('o', 'add5(6)')
logger(add5(6))
logger('nl')

// v2와 f2의 형태를 앞으로 자주 보게 될 것이다.
const v1 = 100
const v2 = function (){}
function f1() { return 100 }
function f2() { return function() {} }

logger('d', '코드 1-3')
logger('i', `const v1 = 100`)
logger('o', v1)

logger('i', `const v2 = function (){}`)
logger('o', v2)

logger('i', 'v2()')
logger('o', v2())

logger('i', `function f1() { return 100 }`)
logger('o', f1)

logger('i', 'f1()')
logger('o', f1())

logger('i', `function f2() { return function() {} }`)
logger('o', f2)

logger('i', 'f2()()')
logger('o', f2()())
logger('nl')

// 값으로써의 함수와 클로저. addMaker가 반환한 함수가 클로저가 되어 다양한 역할을 하는 함수가 만들어졌다. like add3 add10
const add3 = addMaker(3)
const add10 = addMaker(10)
logger('d', 'Code 1-4')
logger('const add3 = addMaker(3)')
logger('const add10 = addMaker(10)')

logger('i', 'add3(5)')
logger('o', add3(5))

logger('i', 'add3(10)')
logger('o', add3(10))

logger('i', 'add10(5)')
logger('o', add10(5))

logger('i', 'add10(10)')
logger('o', add10(10))
logger('nl')





