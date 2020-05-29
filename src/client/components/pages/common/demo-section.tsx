import * as React from 'react'
import {withStyles, Theme, StyledComponentProps, StyleRules} from '@material-ui/core/styles'
import {grey} from '@material-ui/core/colors'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

const styles = (theme:Theme):StyleRules<string> => ({
  demoRow: {
    display: 'flex',
    padding: '32px 0'
  },
  demoRowEven: {
    flexDirection: 'row-reverse'
  },
  demoColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  demoCard: {
    background: grey[800]
  },
  description: {
    padding: '32px'
  },
  demoImage: {
    width: '75%',
    maxWidth: '400px'
  }
})
@(withStyles as any)(styles)
class DemoSection extends React.Component<DemoSectionProps, DemoSectionState> {
  render() {
    const {classes, demos, color} = this.props
    return (
      <div>
        {demos.map((demo, index) => [
          index !== 0 && <Divider key='divider'/>,
          <Grid key='demo-row' container classes={{container:classes.demoRow + (index % 2 === 1? ' ' + classes.demoRowEven : '')} as any}>
            <Grid item xs={12} md={6} classes={{item:classes.demoColumn} as any}>
              <div className={classes.description}>
                <Typography variant='h5' component='h2' style={{color}}>
                  {demo.headline}
                </Typography>
                {demo.command &&
                  <Typography color='textSecondary' gutterBottom>
                    {demo.command}
                  </Typography>
                }
                <Typography component='p'>
                  {demo.description.map((description, index) => [index !== 0 && <br key={'new-line-' + index}/>, description])}
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={6} classes={{item:classes.demoColumn} as any}>
              <img src={demo.image} className={classes.demoImage}/>
            </Grid>
          </Grid>
        ])}
      </div>
    )
  } 
}
interface DemoSectionProps extends React.Props<{}>, StyledComponentProps {
  demos: {
    headline: string
    command?: string
    description: string[]
    image: string
  }[]
  color: string
}
interface DemoSectionState {}

export default DemoSection
