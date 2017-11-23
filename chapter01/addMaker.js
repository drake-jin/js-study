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
logger('o', 'const add5 = addMaker(5)')
logger(add5)


