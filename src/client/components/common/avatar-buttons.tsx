import * as React from 'react'
import {withStyles, Theme, StyledComponentProps, StyleRules} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const styles = (theme:Theme):StyleRules<string> => ({
  avatarButtons: {
    display: 'flex',
    justifyContent: 'center',
    transition: 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
  },
  avatarButtonContainer: {
    padding: '8px',
    transition: 'padding 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
  },
  avatarButtonContainerActive: {
    padding: '8px 28px'
  },
  avatarButton: {
    transition: 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, background 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
  },
  avatarButtonActive: {
    transform: 'scale(1.5)'
  },
  avatarButtonIcon: {
    maxWidth: '90%',
    maxHeight: '90%'
  }
})
@(withStyles as any)(styles)
class AvatarButtons extends React.Component<AvatarButtonsProps, AvatarButtonsState> {
  position = () => {
    const {selected, buttons} = this.props
    const index = buttons.map(button => button.key).indexOf(selected)
    if(index >= 0) {
      const position = (buttons.length - 1) / 2 - index
      return position * 72
    } else {
      return 0
    }
  }
  render() {
    const {classes, selected, buttons} = this.props
    return (
      <div className={classes.avatarButtons} style={{transform:`translateX(${this.position()}px)`}}>
        {buttons.map(button =>
          <div key={button.key} className={[classes.avatarButtonContainer, selected === button.key? classes.avatarButtonContainerActive:''].join(' ')}>
            <Button variant='fab' onClick={button.onClick}
              classes={{
                root: [
                  classes.avatarButton,
                  selected === button.key? classes.avatarButtonActive:'',
                  selected === button.key? button.color.primary:button.color.secondary
                ].join(' ')
              }}
            >
              <img className={classes.avatarButtonIcon} src={button.image}/>
            </Button>
          </div>
        )}
      </div>
    )
  } 
}
interface AvatarButtonsProps extends React.Props<{}>, StyledComponentProps {
  selected: string
  buttons: {
    key: string
    image: string
    color: {
      primary: string
      secondary: string
    }
    onClick: () => void
  }[]
}
interface AvatarButtonsState {}

export default AvatarButtons