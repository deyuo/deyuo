import * as React from 'react'
import * as ReSub from 'resub'
import {withStyles, Theme, StyledComponentProps, StyleRules} from '@material-ui/core/styles'
import {purple} from '@material-ui/core/colors'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'

import screenStore from '../../store/screen'
import helps from '../../constants/mei-helps'
import DemoSection from './common/demo-section'
import CommandSection from './common/command-section'
import * as ReminderDemo from '../../../asset/img/reminder-demo.png'

const styles = (theme:Theme):StyleRules<string> => ({
  '@import': [
    'url(https://fonts.googleapis.com/css?family=Righteous)',
    'url(https://fonts.googleapis.com/css?family=Roboto+Mono)'
  ] as any,
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  pageContainer: {
    width: '1200px',
    maxWidth: '100%',
    padding: '0 32px',
    [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
      padding: '0 16px',
    }
  },
  descriptionRow: {
    flexDirection: 'column',
    textAlign: 'center',
    padding: '16px 0'
  },
  inviteButtons: {
    textAlign: 'center',
    padding: '32px 0'
  },
  inviteButton: {
    margin: '8px',
    color: theme.palette.primary.contrastText,
    backgroundColor: purple[800],
    '&:hover': {
      backgroundColor: purple[900]
    }
  },
  dividerRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  divider: {
    flexGrow: 1,
    margin: '16px'
  }
})
@(withStyles as any)(styles)
class MeiPage extends ReSub.ComponentBase<MeiPageProps, MeiPageState> {
  protected _buildState(props:{}, initial:boolean):MeiPageState {
    return {
      screenType: screenStore.type()
    }
  }
  render() {
    const {classes, updateHeight} = this.props
    const {screenType} = this.state
    return (
      <div className={classes.container}>
        <Grid container direction='column' alignItems='center' classes={{container:classes.pageContainer}}>
          <Grid container justify='center' classes={{container:classes.descriptionRow}}>
            <Typography variant='body1'>
              Mei is a valkyrie chatbot that are reserved for our patreon supporter.
            </Typography>
            <Typography variant='body1'>
              If you want to chat with Mei, just tag her.
            </Typography>
          </Grid>
          <Grid container justify='center' classes={{container:classes.inviteButtons}}>
            <Button classes={{root:classes.inviteButton}} variant='contained' size='large'
              href='https://www.patreon.com/user?u=10662508'
            >
              SUPPORT US
            </Button>
          </Grid>
          <Grid container classes={{container:classes.dividerRow}}>
            <Divider classes={{root:classes.divider}}/>
            <Typography variant='title'>
              FEATURES
            </Typography>
            <Divider classes={{root:classes.divider}}/>
          </Grid>
          <DemoSection
            demos={[{
              headline: 'Remind You of Game Events',
              description: [
                `You want to be reminded of Mei's lunch and dinner, boss invasion, Samsara reset, and Abyss ending?`,
                'Mei will remind you.'
              ],
              image: ReminderDemo
            }]}
            color={purple[400]}
          />
          <Grid container classes={{container:classes.dividerRow}}>
            <Divider classes={{root:classes.divider}}/>
            <Typography variant='title'>
              COMMANDS
            </Typography>
            <Divider classes={{root:classes.divider}}/>
          </Grid>
          <CommandSection
            name={'Mei'}
            helps={helps(PREFIX)}
            color={purple[300]}
            updateHeight={updateHeight}
          />
        </Grid>
      </div>
    )
  } 
}
interface MeiPageProps extends React.Props<{}>, StyledComponentProps {
  updateHeight: () => void
}
interface MeiPageState {
  screenType: 'xl-desktop' | 'lg-desktop' | 'md-desktop' | 'sm-tablet' | 'xs-phone'
}

export default MeiPage