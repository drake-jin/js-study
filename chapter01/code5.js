const logger = require('../lib/logger.js')

const users = [
  { id: 1, name: "ID", age: 32},
  { id: 2, name: "HA", age: 25},
  { id: 3, name: "BJ", age: 32},
  { id: 4, name: "PJ", age: 28},
  { id: 5, name: "JE", age: 27},
  { id: 6, name: "JM", age: 32},
  { id: 7, name: "HI", age: 24},
]

logger('i', 'users')
logger('o', users)


logger('nl')
logger('d','for loop 돈다')
let temp_users = []
for (let i = 0, len = users.length; i < len; i++) {
  if(users[i].age < 30) {
    temp_users.push(users[i])
  }
}
logger('d', '30미만인 사람들을 출력한다.')
logger('i', 'temp_users')
logger('o', temp_users)



logger('nl')
let ages = []
for(let i=0, len = temp_users.length; i< len; i++) {
  ages.push(temp_users[i].age)
}
logger('d', '30미만인 사람들의 나이를 출력한다.')
logger('i', `temp_users's ages`)
logger('o', ages)

logger('nl')
logger('nl')
logger('d')
logger('d')
logger('nl')
logger('nl')

temp_users = []
for(let i = 0,len = users.length; i < len; i++){
  if(users[i].age >= 30){
    temp_users.push(users[i])
  }
}
logger('d', '30이상인 사람들을 출력한다.')
logger('i', 'temp_users')
logger('o', temp_users)


logger('nl')
ages = []
for(let i=0, len = temp_users.length; i< len; i++) {
  ages.push(temp_users[i].age)
}
logger('d', '30이상인 사람들의 나이를 출력한다.')
logger('i', `temp_users's ages`)
logger('o', ages)
