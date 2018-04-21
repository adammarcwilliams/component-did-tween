import React, { Component } from 'react'

export default class PageTransitions extends Component {
  state = {
    page: 'pageOne'
  }

  handleNav = (e) => {
    const page = e.target.dataset.page
    this.setState((state) => ({ page }))
  }

  componentDidUpdate () {
    console.log(this.state.page)
  }

  render() {
    return (
      <div className='PageTransitions'>
        <div className='PageTransitions__nav'>
          <div className='PageTransitions__button' data-page='pageOne' onClick={this.handleNav}>Page One</div>
          <div className='PageTransitions__button' data-page='pageTwo' onClick={this.handleNav}>Page Two</div>
        </div>
        <PageOne />
        <PageTwo />
      </div>
    )
  }
}

class PageOne extends Component {
  render () {
    return (
      <div className='PageOne'>
        Page One Content
      </div>
    )
  }
}

class PageTwo extends Component {
  render () {
    return (
      <div className='PageTwo'>
        Page Two Content
      </div>
    )
  }
}
