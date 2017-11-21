'use strict'

class EventIndex {
  constructor() {
    this._index = []
  }

  get() {
    return this._index.values ? this._index.values : []
  }

  updateIndex(oplog) {
    this._index = oplog
  }
}

module.exports = EventIndex
