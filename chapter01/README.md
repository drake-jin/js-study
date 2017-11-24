# 함수형 자바스크립트의 소개

함수형 프로그래밍은 성공적인 프로그래밍을 위해 부수 효과를 최대한 멀리하고 조합성을 강조하는 프로그래밍 패러다임이다.


**함수형 프로그래밍이 부수 효과를 최대한 멀리하는 이유**

1. 오류를 줄이기 위해
2. 조합성 혹은 모듈화 수준을 높이기 위해

# 알고있어야 하는 용어

1. 순수함수
2. 고차함수
3. 일급함수
4. predicate : true, false를 반환하는 함수
5. iteratee : 매 아이템마다 수행하는 함수
6. falsy : 의미상의 false ex) '', null, undefined, 0, NaN, false 들을 의미함
7. truthy : !falsy

# 함수형 프로그래밍은 ... underscore.js가 절반

과연 undersocre.js 얼마나 알고있을까? 스스로 체크해보자

- **_.map :** list에서 iteratee가 반환하는 값을 배열로 반환한다.
- **_.filter :** list에서 predicate에 true를 반환하면 해당 아이템들을 반환한다.
- **_.find :** Object내에서 value값으로 key를 찾는다.
- **_.findIndex :** Array내에서 값으로 index를 찾는다.
- **_.falsy :** false, undefined, 0, null, NaN, "" 같은 의미상의 false를 false로 반환한다.
- **_.truthy :** falsy가 아니라면 true를 반환한다.
- **_.identity :** falsy 가 아니라면 값들을 정상적으로 반한시킨다.
- **_.some :** 배얼에 들어있는 값 중 하나라도 truthy 있으면 true, 
- **_.every :** 배열에 들어있는 모든 값들이 truthy 어야지 true로 리턴한다.


# 조금 골 때리는 함수..

``` js
const not = v => return !v    // 그냥...!v 이걸로 쓰지 왜.. 굳이 함수로 만들어..?
const beq = a => b => a === b // 이것도 그냥... a=== b 이걸로 쓰지 왜 함수로 만들어?

_.some = list => !!_.find(list, _.identity)
_.every = list => beq(-1)(_.findIndex(list, not)) //  findIndex는 찾고자 하는 값이 없으면 -1을 반환한다. 

// _.every 같은 경우에 not과 beq 가 사용되었는데 
// not과 beq가 만약 함수가 아니었다면 어떻게 사용했을지 상상해보라.
_.every = list => -1 === _.findIndex(list, v => !v)
// 둘과 비교했을때 과연 어떤게 더 가독성이 좋을까?
// 프로그래머는 아래가 더 읽기 좋겠지만... 코드가 아니라 문서로 생각해본다면 또 어떨끼? 많은 고민을 하게되는 코드와 가이드이다.... 젠장.

```