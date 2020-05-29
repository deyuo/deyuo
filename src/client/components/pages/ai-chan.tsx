import * as React from 'react'
import * as ReSub from 'resub'
import {withStyles, Theme, StyledComponentProps, StyleRules} from '@material-ui/core/styles'
import {green} from '@material-ui/core/colors'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'

import screenStore from '../../store/screen'
import helps from '../../constants/ai-chan-helps'
import DemoSection from './common/demo-section'
import CommandSection from './common/command-section'
import * as WeaponDemo from '../../../asset/img/weapon-demo.png'
import * as GachaDemo from '../../../asset/img/gacha-demo.png'
import * as ValkyrieDemo from '../../../asset/img/valkyrie-demo.png'
import * as RecommendationDemo from '../../../asset/img/recommendation-demo.png'

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
    backgroundColor: green[800],
    '&:hover': {
      backgroundColor: green[900]
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
class AiChanPage extends ReSub.ComponentBase<AiChanPageProps, AiChanPageState> {
  protected _buildState(props:{}, initial:boolean):AiChanPageState {
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
              Ai Chan is our general purpose bot designed to provide information of in game equipments to discord.
            </Typography>
          </Grid>
          <Grid container justify='center' classes={{container:classes.inviteButtons}}>
            <Button classes={{root:classes.inviteButton}} variant='contained' size='large'
              href='https://discordapp.com/oauth2/authorize?client_id=434737143395516416&permissions=8&scope=bot'
            >
              INVITE ME
            </Button>
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
              headline: 'Show & Describe Game Equipment',
              command: 'command: !weapon, !stigmata',
              description: [
                'You don\'t need to take screenshot and upload it to show info about game equipment.',
                'AI Chan will display it for you.'
              ],
              image: WeaponDemo
            }, {
              headline: 'Gacha Simulation',
              command: 'command: !gacha',
              description: [
                'Yeah, AI Chan know you are really like gacha system in Honkai Inpact 3rd so I bring simulation to your server to enhance your luck. (maybe)'
              ],
              image: GachaDemo
            }, {
              headline: 'Show & Describe Valkyrie',
              command: 'command: !valkyrie',
              description: [
                'Here is the secret about the gals!',
                'But however hard you try you will not be able to see their panties!'
              ],
              image: ValkyrieDemo
            }, {
              headline: 'Recommend Equipments',
              command: 'command: !recommend',
              description: [
                'You can see better set equipment for the valkyrie too...'
              ],
              image: RecommendationDemo
            }]}
            color={green[400]}
          />
          <Grid container classes={{container:classes.dividerRow}}>
            <Divider classes={{root:classes.divider}}/>
            <Typography variant='title'>
              COMMANDS
            </Typography>
            <Divider classes={{root:classes.divider}}/>
          </Grid>
          <CommandSection
            name={'Ai Chan'}
            helps={helps(PREFIX)}
            color={green[300]}
            updateHeight={updateHeight}
          />
        </Grid>
      </div>
    )
  } 
}
interface AiChanPageProps extends React.Props<{}>, StyledComponentProps {
  updateHeight: () => void
}
interface AiChanPageState {
  screenType: 'xl-desktop' | 'lg-desktop' | 'md-desktop' | 'sm-tablet' | 'xs-phone'
}

export default AiChanPage