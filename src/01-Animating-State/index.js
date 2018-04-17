import React, { Component } from 'react'
import { TweenMax, Elastic } from 'gsap'
import './index.css'

export default class AnimatingState extends Component {

  state = {
    value: 'Change me!'
  }

  dom = {
    text: React.createRef()
  }

  handleChange = (e) => {
    const value = e.target.value
    this.setState(state => ({ value }))
  }

  componentDidUpdate () {
    if (this.state.value) {
      const splitText = new window.SplitText(this.dom.text.current, {lineClass: 'AnimatingState__text-line++'})
      const lastChar = splitText.chars[splitText.chars.length - 1]
     
      // resize font size to keep in single line

      // get position of the last char to perform some sort of decorative animation

      TweenMax.from(lastChar, 0.4, { scale: 0, css: { color: 'red' },  ease: Elastic.easeOut })
    }
  }

  render () {
    return (
      <div className='AnimatingState'>
        <div className='AnimatingState__text' ref={this.dom.text}>{this.state.value}</div>
        <input className='AnimatingState__input' type='text' value={this.state.value} onChange={this.handleChange} maxLength='80' />
      </div>
    )
  }
}
