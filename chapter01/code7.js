const logger = require('../lib/logger')

const users = [
  { id: 1, name: "ID", age: 32},
  { id: 2, name: "HA", age: 25},
  { id: 3, name: "BJ", age: 32},
  { id: 4, name: "PJ", age: 28},
  { id: 5, name: "JE", age: 27},
  { id: 6, name: "JM", age: 32},
  { id: 7, name: "HI", age: 24},
]

const findById = (list, value) => {
  for(let i=0, len = list.length; i < len; i++){
    if(list[i].id === value) return list[i]
  }
}
const findByAge = (list, value) => {
  for(let i=0, len = list.length; i < len; i++){
    if(list[i].age === value) return list[i]
  }
}
const findByName = (list, value) => {
  for(let i=0, len = list.length; i < len; i++){
    if(list[i].name === value) return list[i]
  }
}

logger('d', 'findByXXX')
logger(findById(users, 1))
logger(findByAge(users, 32))
logger(findByName(users, 'ID'))

// 객체의 프로퍼티마다 메서드를 하나씩 .. 뭐.. 다 생성해줄 수 없는 노릇.... 귀찮다. 

let findBy = (list, key, value) => {
  for(let i=0, len = list.length; i < len; i++){
    if(list[i][key] === value) return list[i]
  }
}
logger('d', 'findBy')
logger(findBy(users, 'id', 1))
logger(findBy(users, 'age', 32))
logger(findBy(users, 'name', 'ID'))

function User(id, name, age){
  this.getId = () => {
    return id
  }
  this.getName = () => {
    return name
  }
  this.getAge = () => {
    return age
  }
}

/*
new Users에는 이걸로 값을 찾을 수 가 없다.
findBy = (list, key, value) => {
  for(let i=0, len = list.length; i < len; i++){
    if(list[i][key] === value) return list[i]
  }
}
*/
var users2 = [
  new User(1, 'ID', 32),
  new User(2, 'HA', 25),
  new User(3, 'BJ', 32),
  new User(4, 'PJ', 28),
  new User(5, 'JE', 27),
  new User(6, 'JM', 32),
  new User(7, 'HI', 24),
]

logger('d', 'findBy with using new User(id, name, age)')
logger(findBy(users2, 'id', 1))
logger(findBy(users2, 'age', 32))
logger(findBy(users2, 'name', 'ID'))
logger('? 잉? 그래 그렇겠지 .. 이렇게 쓰면 이상하지...')


const find = (list, predicate) => {
  for(let i = 0, len = list.length; i < len ; i++) {
    if(predicate(list[i])) return list[i]
  }
}

logger('d', 'find width using new User and normal object array')
logger(find(users2, v => v.getAge() === 25).getName())
logger(find(users, v => v.age === 25).name)
logger(find(users2, v => v.getName() === 'HA' && v.getId() === 2).getName())
logger(find(users, v => v.name === 'HA' && v.id === 2).name)

