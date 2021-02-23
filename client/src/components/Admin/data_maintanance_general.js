const date = new Date().toISOString().slice(0, 10);
const month = date.slice(5,7);
const day = date.slice(8,10);

// getting monthly number of tickets per agent
export const getMonthly = (data) => {

  const result = data.filter(ticket => ticket.createdAt.slice(5, 7) === month);

  const filteredMonthly = result.reduce(
    (map => (r, a) => (!map.has(a.agent) && map.set(a.agent, r[r.push({ agent: a.agent, tickets: 0 }) - 1]), map.get(a.agent).tickets++, r))(new Map),
    []
  );

  return filteredMonthly;

}

export const getMontlyContacts = (data) => {
const result = data.filter(ticket => ticket.createdAt.slice(5, 7) === month);
const agents = [];

result.forEach((ticket) => {
let i = agents.findIndex(x => x.agent == ticket.agent);
if(i <= -1) {
  agents.push({agent: ticket.agent});
}
});

let obj = [];

for(let i = 0; i < agents.length; i++) {
const contacts = filterMontlyContacts(data, agents[i].agent);
const { agent } = agents[i];
obj.push({
  name: agent,
  ...contacts
})
}

return obj;
}

// filteringMonthly contacts based on agent name
export const filterMontlyContacts = (data, agentName) => {
// initial object
let finalContacts = {
  chats: 0,
  calls: 0,
  mails: 0
}
// sorting all data monthly
const result = data.filter(ticket => ticket.createdAt.slice(5, 7) === month);
// sorting contacts based on agent's name
const contacts = result.map(agent => {
  if(agent.agent === agentName && agent.chats !== 0) {
    finalContacts.chats += agent.chats;
  }
  if(agent.agent === agentName && agent.calls !== 0) {
    finalContacts.calls += agent.calls;
  }
  if(agent.agent === agentName && agent.mails !== 0) {
    finalContacts.mails += agent.mails;
  }
})

return finalContacts;
}


// getting daily number of tickets per agent
export const getDaily = (data) => {
  const result = data.filter(ticket => ticket.createdAt.slice(8, 10) === day);
  console.log(result);
  const filteredDaily = result.reduce(
    (map => (r, a) => (!map.has(a.agent) && map.set(a.agent, r[r.push({ agent: a.agent, tickets: 0 }) - 1]), map.get(a.agent).tickets++, r))(new Map),
    []
  );

  return filteredDaily;
}


// get daily contacts 
export const getDailyContacts = (data) => {
  const result = data.filter(ticket => ticket.createdAt.slice(8, 10) === day);
  const agents = [];

  result.forEach((ticket) => {
  let i = agents.findIndex(x => x.agent == ticket.agent);
  if(i <= -1) {
    agents.push({agent: ticket.agent});
  }
});

let obj = [];

for(let i = 0; i < agents.length; i++) {
  const contacts = filterDailyContacts(data, agents[i].agent);
  const { agent } = agents[i];
  obj.push({
    name: agent,
    ...contacts
  })
}

  return obj;
}

export const filterDailyContacts = (data, agentName) => {
  // initial object
  let finalContacts = {
    chats: 0,
    calls: 0,
    mails: 0
  }
// sorting all data monthly
  const result = data.filter(ticket => ticket.createdAt.slice(8, 10) === day);
// sorting contacts based on agent's name
  const contacts = result.map(agent => {
    if(agent.agent === agentName && agent.chats !== 0) {
      finalContacts.chats += agent.chats;
    }
    if(agent.agent === agentName && agent.calls !== 0) {
      finalContacts.calls += agent.calls;
    }
    if(agent.agent === agentName && agent.mails !== 0) {
      finalContacts.mails += agent.mails;
    }
  })

  return finalContacts;
}