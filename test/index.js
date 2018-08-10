const dir = require('../')
const should = require('should')

const result = dir(__dirname)
const path = __dirname + '/index.js'

describe('dir', () => {
	it('result should be array!!', () => {
		result.should.be.an.Array
	})
	it('result length mast be one!!', () => {
		(result.length).should.match((n) => { return n = 1 })
	})
	it('result index mast be string!!', () => {
		result[0].should.be.type('string')
	})
	it('result[0] = path!!', () => {
		(result[0] = path).should.be.ok
	})
})
