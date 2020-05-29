import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {withStyles, Theme, StyledComponentProps, StyleRules} from '@material-ui/core/styles'
import {TransitionGroup, Transition} from 'react-transition-group'
import {TransitionStatus} from 'react-transition-group/Transition'

const duration = 1500
class BackgroundRipple extends React.Component<BackgroundRippleProps, BackgroundRippleState> {
  render() {
    const {animate, appear, key, size, color} = this.props
    const defaultStyle:React.CSSProperties = {
      position: 'absolute',
      width: size,
      height: size,
      top: `calc(100% - ${size} / 2)`,
      left: `calc(50% - ${size} / 2)`,
      background: `linear-gradient(to top right, ${color.from}, ${color.to})`
    }
    const transitionStyles:Partial<Record<TransitionStatus, React.CSSProperties>> = {
      entering: {
        transform: 'scale(0, 0)',
        borderRadius: '50%'
      },
      entered: {
        transform: 'scale(1, 1)',
        borderRadius: '50%',
        transition: ['transform'].map(property => `${property} ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) 0ms`).join(', ')
      },
      exiting: {
        opacity: 1
      },
      exited: {
        transform: 'scale(0, 0)',
        opacity: 0,
        transition: ['transform'].map(property => `${property} 0ms ${duration}ms`).join(', ')
      }
    }
    return (
      animate?
      <Transition in={appear} timeout={100} unmountOnExit>
        {state => (
          <div key={key} style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}/>
        )}
      </Transition> :
      <div key={key} style={defaultStyle}/>
    )
  } 
}
interface BackgroundRippleProps extends React.Props<{}> {
  key: number
  appear: boolean
  size: string
  color: {
    from: string
    to: string
  }
  animate?: boolean
}
interface BackgroundRippleState {}

const backgroundStyles = (theme:Theme):StyleRules<string> => ({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0
  }
})
@(withStyles as any)(backgroundStyles)
class HeaderBackground extends React.Component<HeaderBackgroundProps, HeaderBackgroundState> {
  container:HTMLDivElement
  constructor(props:HeaderBackgroundProps) {
    super(props)
    const {from, to} = props.color
    this.state = {
      key: 0,
      ripples: [{
        key: 0,
        appear: true,
        size: '200%',
        color: {from, to}
      }]
    }
  }
  shouldComponentUpdate(nextProps:HeaderBackgroundProps, nextState:HeaderBackgroundState) {
    const thisColor = this.props.color
    const nextColor = nextProps.color
    if(thisColor.from !== nextColor.from || thisColor.to !== nextColor.to) {
      this.changeColor(nextColor.from, nextColor.to)
      return false
    } else { 
      return true
    }
  }
  changeColor = (from:string, to:string) => {
    const {ripples} = this.state
    const hypotenuse = Math.sqrt(Math.pow(this.container.clientHeight, 2) + Math.pow(this.container.clientWidth, 2))
    const size = hypotenuse * 2
    this.setState(state => ({
      key: state.key + 1,
      ripples: [
        ...ripples, {
        key: state.key + 1,
        appear: true,
        animate: true,
        size: size + 'px',
        color: {from, to}
      }]
    }), () => {
      const pastRipples = ripples.map(ripple => ripple.key)
      setTimeout(() =>
        this.setState(state => ({
          ripples: state.ripples.map(ripple =>
            pastRipples.includes(ripple.key)? {...ripple, appear:false}:ripple
          )
        }))
      , duration)
    })
  }
  render() {
    const {classes} = this.props
    const {ripples} = this.state
    return (
      <TransitionGroup ref={container => this.container = ReactDOM.findDOMNode(container) as HTMLDivElement} className={classes.container}>
        {ripples.map(ripple =>
          <BackgroundRipple {...ripple}/>
        )}
      </TransitionGroup>
    )
  } 
}
interface HeaderBackgroundProps extends React.Props<{}>, StyledComponentProps {
  color: {
    from: string
    to: string
  }
}
interface HeaderBackgroundState {
  key: number
  ripples: {
    key: number
    appear: boolean
    size: string
    color: {
      from: string
      to: string
    }
    animate?: boolean
  }[]
}

export default HeaderBackground