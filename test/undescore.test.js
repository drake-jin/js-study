const { assert } = require('chai')

const _ = require('../lib/underscore')
const logger = require('../lib/logger')

describe('Library Check', () => {
  it('Underscore validation', (done) => {
    console.log(_)
    assert.isObject(_, `'_(underscore)' is Object`)
    assert.isFunction(_.map, `'_.map is Function`)
    assert.isFunction(_.filter, `'_.filter is Function`)
    assert.isFunction(_.find, `'_.find is Function`)
    assert.isFunction(_.findIndex, `'_.findIndex is Function`)
    assert.isFunction(_.truthy, `'_.truthy is Function`)
    assert.isFunction(_.falsy, `'_.falsy is Function`)
    assert.isFunction(_.some, `'_.some is Function`)
    assert.isFunction(_.every, `'_.every is Function`)
    assert.isFunction(_.identity, `'_.identity is Function`)
    
    
    assert.isArray(_.filter([1,2,3,4], _.identity))
    done()
  })
  it('logger validation', (done) => {
    assert.isFunction(logger, ` 'logger' is Function`)
    done()
  })
})
