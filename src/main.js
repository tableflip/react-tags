import React from 'react'
import { WithContext as ReactTags } from './reactTags.js'
import ReactDOM from 'react-dom'

const content = [
  { id: 1, text: 'text' },
  { id: 2, text: 'test' }
]

const handleAddition = (tag) => {
  console.log('+', tag)
}

const handleDelete = (tag) => {
  console.log('-', tag)
}

ReactDOM.render(<ReactTags tags={content} handleAddition={handleAddition} handleDelete={handleDelete}/>, document.getElementById('root'))
