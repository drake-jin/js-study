(() => {
  const root = this
  const _ = {}
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }
  _.map = (list, iteratee) => {
    const new_list = []
    for(let i = 0, len = list.length; i < len; i++) {
      new_list.push(iteratee(list[i], i, list))
    }
  }

  _.filter = (list, predicate) => {
    const new_list = []
    for(let i = 0, len = list.length; i < len; i++) {
      if (predicate(list[i], i, list)) new_list.push(list[i])
    }
    return new_list
  }

  _.find = (list, predicate) => {
    for(let i = 0, len = list.length; i < len; i++) {
      if (predicate(list[i], i, list)) return list[i]
    }
  }

  _.findIndex = (list, predicate) => {
    for(let i = 0, len = list.length; i < len; i++){
      if (predicate(list[i], i, list)) return i
    }
    return -1;
  }

  _.identity = v => v

  _.falsy = v => !v
  _.truthy = v => !!v

  _.some = list => _.truthy(_.find(list, _.identity))
  _.every = list => _.filter(list, _.identity).length === list.length
})()
