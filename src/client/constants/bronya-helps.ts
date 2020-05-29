export default (prefix:string) => [{
  commands: ['send'],
  category: 'ADMIN TOOL',
  description: 'Send message to another channel as Bronya Zaychik',
  examples: ['send #general message', 'send message', 'send @someone message'],
  notes: [
    `Mention someone will result bot to dm that mentioned user via dm`,
    `This command doesn't work on multiple mention so please only mention one user at one message`
  ]
}]