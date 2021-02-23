
const results = [
  {
    name: 'agent 1',
    chats: 0,
    mails: 0,
    calls: 1
  },
  {
    name: 'agent 2',
    chats: 1,
    mails: 0,
    calls: 0
  },
  {
    name: 'agent 1',
    chats: 1,
    mails: 2,
    calls: 0
  },
  {
    name: 'agent 1',
    chats: 1,
    mails: 2,
    calls: 0
  },
  {
    name: 'agent 1',
    chats: 1,
    mails: 2,
    calls: 0
  },
  {
    name: 'agent 2',
    chats: 1,
    mails: 2,
    calls: 0
  },
  {
    name: 'agent 3',
    chats: 1,
    mails: 2,
    calls: 0
  },
];



// get an array with objects for each agent with the ticket number
const result = results.reduce(
  (map => (r, a) => (!map.has(a.name) && map.set(a.name, r[r.push({ name: a.name, tickets: 0 }) - 1]), map.get(a.name).tickets++, r))(new Map),
  []
);

console.log(result);

// number of contacts for each agent
let chats = 0;
let calls = 0;
let mails = 0;
const contacts = results.map(agent => {
  if(agent.name === 'agent 1' && agent.chats !== 0) {
     chats += agent.chats;
  }
  if(agent.name === 'agent 1' && agent.calls !== 0) {
    calls += agent.calls;
  }
  if(agent.name === 'agent 1' && agent.mails !== 0) {
    mails += agent.mails;
  }

})
console.log(chats);
console.log(calls);
console.log(mails); 