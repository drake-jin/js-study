const _ = require('../lib/underscore')
const l = require('../lib/logger')


/*
l('i', `_.identity(undefined)`)
l('o', _.identity(undefined)) // undefined
l('i', `_.identity(null)`)
l('o', _.identity(null)) // null
l('i', `_.identity(false)`)
l('o', _.identity(false)) // false
l('i', `_.identity(0)`)
l('o', _.identity(0)) // 0
*/


l('d', 'under score falsy test')

l('i', `[!0, !undefined, !null, !false]`)
l('o', [!0, !undefined, !null, !false])

l('i', `[_.falsy(0), _.falsy(undefined), _.falsy(null), _.falsy(false)]`)
l('o', [_.falsy(0), _.falsy(undefined), _.falsy(null), _.falsy(false)])

l('i', `[_.truthy(0), _.truthy(undefined), _.truthy(null), _.truthy(false)]`)
l('o', [_.truthy(0), _.truthy(undefined), _.truthy(null), _.truthy(false)])

l('i', `_.filter([true, 0, 10, 'a', false, null, undefined], _.identity)`)
l('o', _.filter([true, 0, 10, 'a', false, null, undefined], _.identity))
// 걸러지는 이유는 저 위의 반환값이 if 절로 들어가서 true, false의 역할을 하기 때문.

l('d', `some 과 every 함수`) // some:  하나라도 falsy가 있다면 false,  every: 단 하나도 falsy 가 없어야 참
l('i', '_some([0, null, 2])')
l('o', _.some([0, null, 2]))
l('i', '_some([0, null, false])')
l('o', _.some([0, null, false]))

l('i', '_.every([0, null, 2])')
l('o', _.every([0, null, 2]))
l('i', '_.every([1, 3, 2])')
l('o', _.every([1, 3, 2]))


