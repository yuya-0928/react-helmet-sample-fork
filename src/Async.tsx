import { Component } from "react"

let ready = false

class Async extends Component {
  componentDidMount(): void {
    console.log('componentDidMount Async')
  }
  componentDidUpdate() {
    console.log('componentDidUpdate Async')
  }
  componentWillUnmount(): void {
    console.log('componentWillUnmount Async')
    ready = false
  }
  UNSAFE_componentWillMount(): void {
    console.log('UNSAFE_componentWillMount Async')
  }

  render() {
    console.log('render Async')
    if (!ready) {
      throw new Promise((resolve) => {
        setTimeout(() => {
          ready = true
          resolve(true)
        }, 1000)
      })
    }
    return (
      <div>
        Async Data
      </div>
    )
  }
}

export default Async
