const logger = require('../lib/logger.js')

const filter = (list, cb) => {
  const temp = []
  for(let i=0, len = list.length; i < len ; i++){
    if(cb(list[i], i, list)){
      temp.push(list[i])
    }
  }
  return temp
}
const map = (list, cb) => {
  const temp = []
  for(let i=0, len = list.length; i < len ; i++){
    temp.push(cb(list[i], i, list))
  }
  return temp
}
const length = list => list.length

//초회 반환때에는 이 bvalue메서드의 key는 상수처럼 가지고 있다가 
//다음 반환때에는 obj[key]로 반환된다.
const bvalue = key => obj => obj[key]

// 해당 배열 목록중에서 특정 key에 해당하는 값들을 전부 찾아내서 배열 형태로 출력하는 함수
const bvalues = key => list => map(list, bvalue(key))

const users = [
  { id: 1, name: "ID", age: 32},
  { id: 2, name: "HA", age: 25},
  { id: 3, name: "BJ", age: 32},
  { id: 4, name: "PJ", age: 28},
  { id: 5, name: "JE", age: 27},
  { id: 6, name: "JM", age: 32},
  { id: 7, name: "HI", age: 24},
]


logger(length(map(filter(users, v => v.age < 30), bvalue('age')))) // exam 2

logger('i', 'users')
logger('o', users)


let size = length(map(filter(users, v => v.age < 30), bvalue('age')))
logger('d', '30미만인 사람들의 나이 목록으로 총 인원을  출력한다.')
logger('i', `temp_users's ages`)
logger('o', size)

size = length(map(filter(users, v => v.age >= 30), bvalue('age')))
logger('d', '30이상인 사람들의 나이 목록으로 총 인원을 출력한다.')
logger('i', `temp_users's ages`)
logger('o', size)

// 뭐 솔직히 여기까지는 일반적이다. 

logger('nl')
logger('nl')
// 하지만...?

/*
위 메서드하고 동일하다. 성동일 
const bvalues = key => list => {
  const val = bvalue(key)
  return map(list, val)
}
*/
const getAges = bvalues('age')
const getNames = bvalues('name')

logger(getNames(filter(users, v => v.age <= 30)))
logger(getAges(filter(users, v => v.age > 30)))   // exam 1 
