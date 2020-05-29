import * as React from 'react'
import {withStyles, Theme, StyledComponentProps, StyleRules} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import {ExpandMore as ExpandMoreIcon, Search as SearchIcon} from '@material-ui/icons'

import * as StringUtil from '../../../utility/string'

const styles = (theme:Theme):StyleRules<string> => ({
  searchCardSection: {
    margin: '16px 0 24px'
  },
  searchCard: {
    transition: 'box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
  },
  searchCardContent: {
    '&:first-child': {
      paddingRight: '8px',
      paddingTop: '8px',
      paddingBottom: '8px'
    }
  },
  commandSection: {
    width: '100%',
    padding: '32px 0 64px'
  },
  commandCategory: {
    margin: '16px 0'
  },
  commandPanel: {
    background: theme.palette.background.paper
  },
  commandTitleContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
      flexDirection: 'column',
      alignItems: 'flex-start'
    }
  },
  commandTitle: {
    flexBasis: '50%',
    [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
      flexBasis: 'auto'
    }
  },
  commandSubheading: {
    marginTop: '12px'
  },
  commandExamplePre: {
    fontFamily: 'Roboto Mono',
    whiteSpace: 'pre-wrap',
    wordWrap: 'break-word'
  },
  commandDetail: {
    flexDirection: 'column'
  },
  commandDetailParagraph: {
    wordBreak: 'break-word'
  }
})
@(withStyles as any)(styles)
class CommandSection extends React.Component<CommandSectionProps, CommandSectionState> {
  input:HTMLInputElement
  updateHeightTimeout:number | NodeJS.Timer
  constructor(props:CommandSectionProps) {
    super(props)
    this.state = {
      query: undefined,
      seaching: false,
      active: undefined
    }
  }
  componentDidMount() {
    this.updateHeight()
  }
  updateHeight = () => {
    const {updateHeight} = this.props
    if(updateHeight) {
      if(this.updateHeightTimeout) clearTimeout(this.updateHeightTimeout as number)
      this.updateHeightTimeout = setTimeout(updateHeight, 300) as number | NodeJS.Timer
    }
  }
  expand = (key:string) => {
    if(this.state.active === key) {
      this.setState({active:undefined}, this.updateHeight)
    } else {
      this.setState({active:key}, this.updateHeight)
    }
  }
  searchQuery = (event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = event.target.value
    this.setState({query:value === ''? undefined:value.toLowerCase()})
  }
  focusInput = () => {
    this.input.focus()
  }
  onFocusInput = (focus:boolean) => {
    this.setState({seaching:focus})
  }
  prefix = (command:string) => {
    const {name} = this.props
    const check = command.split(' ')[0]
    if(check === 'send') {
      return `@${name} `
    } else {
      return PREFIX
    }
  }
  render() {
    const {classes, helps, color} = this.props
    const {query, seaching, active} = this.state
    const highlightQuery = (paragraph:string) => {
      const regexp = query && new RegExp(query.split('').map(char =>
        /\W/.test(char)? `\\${char}`:char
      ).join(''), 'gi')
      const found = paragraph.match(regexp)
      return paragraph.split(regexp).reduce((content, notQuery, index) => 
        index === 0? [
          notQuery
        ]:[
          ...content,
          <span key={index} style={{color}}>{found[index - 1]}</span>,
          notQuery
        ]
      , [])
    }
    return (
      <div className={classes.commandSection}>
        <div className={classes.searchCardSection}>
          <Card className={classes.searchCard} elevation={seaching? 8:2}>
            <CardContent className={classes.searchCardContent}>
              <Input inputRef={input => this.input = input} fullWidth disableUnderline
                onChange={this.searchQuery}
                value={query || ''}
                onFocus={() => this.onFocusInput(true)}
                onBlur={() => this.onFocusInput(false)}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton onClick={this.focusInput}><SearchIcon/></IconButton>
                  </InputAdornment>
                }
              />
            </CardContent>
          </Card>
        </div>
        {helps.reduce((category, help) => 
          !query || help.commands.some(command => command.includes(query)) || help.category.includes(query.toUpperCase())? [
            ...category.map(each =>
              each.category === help.category?
              {category:each.category, helps:[...each.helps, help]}:
              each
            ),
            ...!category.map(each => each.category).includes(help.category)?
            [{category:help.category, helps:[help]}]:
            []
          ]:category,
        []).map((each, eachIndex, categories) =>
          <div key={each.category} className={classes.commandCategory}>
            {each.helps.map((help, helpIndex, helps) =>
              <ExpansionPanel disabled={help.description === ''}
                innerRef={ref => eachIndex === categories.length - 1 && helpIndex === helps.length - 1 && this.updateHeight()}
                key={help.commands[0]}
                expanded={help.commands[0] === active}
                onChange={() => this.expand(help.commands[0])}
                classes={{root:classes.commandPanel}}
              >
                <ExpansionPanelSummary expandIcon={help.description !== '' && <ExpandMoreIcon/>}>
                  <div className={classes.commandTitleContainer}>
                    <div className={classes.commandTitle}>
                      <Typography variant='subheading'>
                        {highlightQuery(StringUtil.conjuctJoin(help.commands.map(command => this.prefix(command) + command)))}
                      </Typography>
                    </div>
                    <div className={classes.commandTitle}>
                      <Typography variant='caption'>{highlightQuery(help.category)}</Typography>
                    </div>
                  </div>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.commandDetail}>
                  <Typography variant='caption' component='h5'>Description</Typography>
                  <Typography className={classes.commandDetailParagraph} component='p'>
                    {help.description}
                  </Typography>
                  {help.examples.length > 0 && <Typography className={classes.commandSubheading} variant='caption' component='h5'>Examples</Typography>}
                  {help.examples.map((example, index) =>
                    <Typography key={index} className={classes.commandExamplePre} component='pre' gutterBottom>
                      {this.prefix(example) + example}
                    </Typography>
                  )}
                  {help.notes.length > 0 && <Typography className={classes.commandSubheading} variant='caption' component='h5'>Notes</Typography>}
                  {help.notes.map((note, index) =>
                    <Typography key={index} component='p' gutterBottom>
                      {note}
                    </Typography>
                  )}
                </ExpansionPanelDetails>
              </ExpansionPanel>
            )}
          </div>
        )}
      </div>
    )
  } 
}
interface CommandSectionProps extends React.Props<{}>, StyledComponentProps {
  name: string
  helps: {
    commands: string[]
    category: string
    description: string
    examples: string[]
    notes: string[]
  }[]
  color: string
  updateHeight: () => void
}
interface CommandSectionState {
  query: string
  seaching?: boolean
  active: string
}

export default CommandSection