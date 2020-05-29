export default (prefix:string) => [{
  commands: ['donate'],
  category: 'SUPPORT',
  description: 'Display list of our donators',
  examples: [],
  notes: []
}, {
  commands: ['vote'],
  category: 'SUPPORT',
  description: 'Support our bot on [DiscordBots.org](https://discordbots.org/bot/434737143395516416?) by vote',
  examples: [],
  notes: []
}, {
  commands: ['help'],
  category: 'UTILITY',
  description: '',
  examples: [],
  notes: []
}, {
  commands: ['ping'],
  category: 'UTILITY',
  description: 'Check your ping connection and my ping connection to discord server',
  examples: [],
  notes: []
}, {
  commands: ['server'],
  category: 'UTILITY',
  description: 'Check server detail',
  examples: [],
  notes: []
}, {
  commands: ['info'],
  category: 'UTILITY',
  description: 'Display info about the bot',
  examples: [],
  notes: []
}, {
  commands: ['avatar'],
  category: 'UTILITY',
  description: 'Display your avatar image or other members by mention them (works with multiple mention)',
  examples: ['avatar @Raiden Mei', 'avatar @Raiden Mei @Kiana Kaslana @AI Chan'],
  notes: ['If you not mention anyone bot will show your info instead']
}, {
  commands: ['userinfo'],
  category: 'UTILITY',
  description: 'Show detail info about your account or other members by mention them (works with multiple mention)',
  examples: ['avatar @Raiden Mei', 'avatar @Raiden Mei @Kiana Kaslana @AI Chan'],
  notes: ['If you not mention anyone bot will show your info instead']
}, {
  commands: ['poll'],
  category: 'UTILITY',
  description: 'Create a poll for everyone to vote upon',
  examples: ['poll #test 1 vote 1 hour\nSelect\n- option 1\n- option 2'],
  notes: [
    `The first line would contain the parameter for the poll`,
    `Only 3 parameters are available now`,
    `1. channel: tag a channel that you want the poll to appear on`,
    `2. vote: specify the amount of votes a single person can choose, also represents the amount of results winning the poll`,
    `3. time: specify the duration u want the poll to last for`,
    `Any vote option should start with - or * seperated by a space`,
    `Vote options amount should be around 2-10 only`,
    `Any line besides the first line that is not an option is considered part of the question`
  ]
}, {
  commands: ['weapon'],
  category: 'HONKAI IMPACT',
  description: 'Show you detail about a game weapon from Honkai Impact 3rd',
  examples: ['weapon <weapon name>', 'weapon <valkyrie name>', 'weapon <category>'],
  notes: [
    `If you don't put any query bot will show you menu to browse our weapon gallery`,
    `Tips:`, 
    `You can just write short name of the weapon like <${prefix}weapon Judah> will result <Oath of Judah>`,
    `You can write initial name of weapon for easy calling like <${prefix}weapon 2sr> will result <2nd Sacred Relic>`,
    `This command has shortform \`!w\` for fast calling`
  ]
}, {
  commands: ['stigma', 'stigmata'],
  category: 'HONKAI IMPACT',
  description: 'Show you detail about a stigmata\'s effect from Hokai Impact 3rd',
  examples: ['stigmata <stigmata name>', 'stigmata <stigmata name> <T/M/B>'],
  notes: [
    `If you don't put any query bot will show you menu to browse our stigmata gallery`,
    `Tips:`,
    `You don't need to write full name of stigma, for example <${prefix}stigmata tesla> will show you result of all stigma with your query`,
    `You can tap emoji to jump to a detailed version of a stigmata variation or stigmata set`,
    `This command has shortform \`!s\` for fast calling`
  ]
}, {
  commands: ['valk', 'valkyrie'],
  category: 'HONKAI IMPACT',
  description: 'Show you detail about a valkyrie\'s detail informations',
  examples: ['valkyrie <valkyrie name>', 'valkyrie <battlesuit name>'],
  notes: [
    `If you don't put any query bot will show you menu to browse our valkyrie data`,
    `Tips:`,
    `You can just type valkyrie initial of battlesuit for fast calling, for example: <${prefix}valkyrie SD> will result <Shadow Dash>`,
    `You can tap emoji to jump to recommendation setup of valkyrie`,
    `This command has shortform \`!v\` for fast calling`
  ]
},{
  commands: ['form', 'formation'],
  category: 'HONKAI IMPACT',
  description: 'Show you detail about a valkyrie\'s formation and strategy',
  examples: ['formation <valkyrie name>', 'form <battlesuit name>'],
  notes: [
    `If you don't put any query bot will show you menu to browse our valkyrie data`,
    `Tips:`,
    `You can just type valkyrie initial of battlesuit for fast calling, for example: <${prefix}formation SD> will result <Shadow Dash>`,
    `You can tap emoji to jump to recommendation setup of valkyrie`,
    `This command has shortform \`!f\` for fast calling`
  ]
}, {
  commands: ['recom', 'recommendation'],
  category: 'HONKAI IMPACT',
  description: 'Show you recommendation about equipment setup for a specified valkyrie',
  examples: ['recommendation <valkyrie name>', 'recommendation <battlesuit name>'],
  notes: [
    `If you don't put any query bot will show you menu to browse our valkyrie data`,
    `Tips:`,
    `You can just type valkyrie initial of battlesuit for fast calling, for example: <${prefix}recommendation SD> will result <Shadow Dash>`,
    `You can tap emoji to jump to detail info about valkyrie`,
    `This command has shortform \`!r\` for fast calling`
  ]
},{
  commands: ['faction'],
  category: 'HONKAI IMPACT',
  description: 'Select your faction on faction war event',
  examples: ['faction', 'faction list'],
  notes: [
    'for first setup need user with manage roles permission to do this command instalation',
    `use ${prefix}faction list to show the member faction list`,
    'You can\'t change faction after choosing, if you make a mistake you must contact your server administrator/moderators to remove your faction role',
    `Admin or someone with manage-roles permission need to do <${prefix}faction reset> to make all member be able to choose their faction again`
  ]
}, {
  commands: ['gacha'],
  category: 'HONKAI IMPACT',
  description: 'Do gacha simulation like on Honkai Impact 3rd',
  examples: ['gacha', 'gacha <focused/standard>', 'gacha <number of pull>'],
  notes: [
    `Not giving any query will result to pull standart supply gacha`,
    `There is cooldown 1 minute after execute this command`,
    `Default number of pull is 10 but you can change it by type the number at the end query`,
    `For Example: <${prefix}gacha focused 8>, or <${prefix}gacha 5>`
  ]
}, {
  commands: ['prefix'],
  category: 'ADMIN TOOL',
  description: `Change prefix for server`,
  examples: ['prefix <new prefix>'],
  notes: [
    `This server's prefix is ${prefix}`,
    'Only ADMINISTARTOR can change the prefix',
    'space character won\'t work'
  ]
}, {
  commands: ['awoo', 'howl'],
  category: 'IMAGE',
  description: 'Display gif about awoo',
  examples: ['awoo @someone'],
  notes: [
    'Works with multiple mention'
  ]
}, {
  commands: ['blush'],
  category: 'IMAGE',
  description: 'Display gif to express blush',
  examples: ['blush @someone'],
  notes: [
    'Works with multiple mention'
  ]
}, {
  commands: ['confused'],
  category: 'IMAGE',
  description: 'Display gif to express confused',
  examples: ['confused @someone'],
  notes: [
    'Works with multiple mention'
  ]
}, {
  commands: ['cuddle'],
  category: 'IMAGE',
  description: 'Display gif to express cuddle',
  examples: ['cuddle @someone'],
  notes: [
    'Works with multiple mention'
  ]
}, {
  commands: ['dance'],
  category: 'IMAGE',
  description: 'Display gif to express dance',
  examples: ['dance @someone'],
  notes: [
    'Works with multiple mention'
  ]
}, {
  commands: ['hug'],
  category: 'IMAGE',
  description: 'Display gif to express hug',
  examples: ['hug @someone'],
  notes: [
    'Works with multiple mention'
  ]
}, {
  commands: ['idk', 'shrug'],
  category: 'IMAGE',
  description: 'Display gif to express shrug',
  examples: ['idk @someone'],
  notes: [
    'Works with multiple mention'
  ]
}, {
  commands: ['insult'],
  category: 'IMAGE',
  description: 'Display gif to express insult',
  examples: ['insult @someone'],
  notes: [
    'Works with multiple mention'
  ]
}, {
  commands: ['kiss'],
  category: 'IMAGE',
  description: 'Display gif about kissing',
  examples: ['kiss @someone'],
  notes: [
    'Works with multiple mention'
  ]
}, {
  commands: ['lewd'],
  category: 'IMAGE',
  description: 'Display gif about lewd',
  examples: ['lewd @someone'],
  notes: [
    'Works with multiple mention'
  ]
}, {
  commands: ['lick'],
  category: 'IMAGE',
  description: 'Display gif about lick',
  examples: ['lick @someone'],
  notes: [
    'Works with multiple mention'
  ]
}, {
  commands: ['nyan', 'neko'],
  category: 'IMAGE',
  description: 'Display gif about neko girl nyan~',
  examples: ['nyan @someone'],
  notes: [
    'Works with multiple mention'
  ]
}, {
  commands: ['pat'],
  category: 'IMAGE',
  description: 'Display gif about pat',
  examples: ['pat @someone'],
  notes: [
    'Works with multiple mention'
  ]
}, {
  commands: ['poke'],
  category: 'IMAGE',
  description: 'Display gif to express poke',
  examples: ['poke @someone'],
  notes: [
    'Works with multiple mention'
  ]
}, {
  commands: ['pout'],
  category: 'IMAGE',
  description: 'Display gif about pout',
  examples: ['pout @someone'],
  notes: [
    'Works with multiple mention'
  ]
}, {
  commands: ['punch'],
  category: 'IMAGE',
  description: 'Display gif to express punch',
  examples: ['punch @someone'],
  notes: [
    'Works with multiple mention'
  ]
}, {
  commands: ['slap'],
  category: 'IMAGE',
  description: 'Display gif about slap',
  examples: ['slap @someone'],
  notes: [
    'Works with multiple mention'
  ]
}, {
  commands: ['sleepy'],
  category: 'IMAGE',
  description: 'Display gif to express sleepy',
  examples: ['sleepy @someone'],
  notes: [
    'Works with multiple mention'
  ]
}, {
  commands: ['stare'],
  category: 'IMAGE',
  description: 'Display gif about stare',
  examples: ['stare @someone'],
  notes: [
    'Works with multiple mention'
  ]
}, {
  commands: ['smile'],
  category: 'IMAGE',
  description: 'Display gif to express smile',
  examples: ['smile @someone'],
  notes: [
    'Works with multiple mention'
  ]
}, {
  commands: ['teehee'],
  category: 'IMAGE',
  description: 'Display gif to express tehee',
  examples: ['teehee @someone'],
  notes: [
    'Works with multiple mention'
  ]
}, {
  commands: ['triggered'],
  category: 'IMAGE',
  description: 'Display gif to express triggered',
  examples: ['triggered @someone'],
  notes: [
    'Works with multiple mention'
  ]
}, {
  commands: ['wasted'],
  category: 'IMAGE',
  description: 'Display gif to express wasted',
  examples: ['wasted @someone'],
  notes: [
    'Works with multiple mention'
  ]
}, {
  commands: ['ban'],
  category: 'ADMIN TOOL',
  description: 'Ban user from server by mention it',
  examples: ['ban @someone reason'],
  notes: [
    'Only user with BAN_MEMBERS permission can use this command'
  ]
}, {
  commands: ['kick'],
  category: 'ADMIN TOOL',
  description: 'Kick user from server by mention it',
  examples: ['kick @someone reason'],
  notes: [
    'Only user with KICK_MEMBERS permission can use this command'
  ]
}, {
  commands: ['send'],
  category: 'ADMIN TOOL',
  description: 'Send message to another channel as AI Chan',
  examples: ['send #general message', 'send message', 'send @someone message'],
  notes: [
    `Mention someone will result bot to dm that mentioned user via dm`,
    `This command doesn't work on multiple mention so please only mention one user at one message`
  ]
}, {
  commands: ['clear'],
  category: 'ADMIN TOOL',
  description: 'Mass delete the message on channel',
  examples: ['clear 100', 'clear @someone'],
  notes: [
    `You can only delete message by certain user by mention it`,
    `!clear @someone will mass delete his message in one channel`,
    `Only can delete message that not older than 7 day`
  ]
}]