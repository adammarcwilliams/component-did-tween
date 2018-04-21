import React, { Component } from 'react'
import { TimelineMax, Elastic, Sine } from 'gsap'
import './index.css'

export default class AnimatingState extends Component {

  state = {
    value: 'Change me below!'
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
      const splitText = new window.SplitText(this.dom.text.current)
      const lastChar = splitText.chars[splitText.chars.length - 1]

      this.timeline = new TimelineMax()
      this.timeline
        .set(lastChar, { scale: 0 })
        .to(lastChar, 0.2, { scale: 2,  ease: Sine.easeOut })
        .to(lastChar, 0.4, { scale: 1,  ease: Elastic.easeOut })
    }
  }

  componentWillUnmount () {
    if (this.timeline) this.timeline.kill()
  }

  render () {
    return (
      <div className='AnimatingState'>
        <div className='AnimatingState__text' ref={this.dom.text}>{this.state.value}</div>
        <input className='AnimatingState__input' type='text' value={this.state.value} onChange={this.handleChange} />
      </div>
    )
  }
}
