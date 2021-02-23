const date = new Date().toISOString().slice(0, 10);
const month = date.slice(5,7);

// monthly with language
export const getMonthlyLanguageBased = (data, language) => {

  const result = data.filter(ticket => ticket.createdAt.slice(5, 7) === month && ticket.language === language);

  const filteredMonthly = result.reduce(
    (map => (r, a) => (!map.has(a.agent) && map.set(a.agent, r[r.push({ agent: a.agent, tickets: 0 }) - 1]), map.get(a.agent).tickets++, r))(new Map),
    []
  );

  return filteredMonthly;
}

export const getMontlyContactsLanguageBased = (data, language) => {
  const result = data.filter(ticket => ticket.createdAt.slice(5, 7) === month && ticket.language === language);
  const agents = [];

  result.forEach((ticket) => {
  let i = agents.findIndex(x => x.agent == ticket.agent);
  if(i <= -1) {
    agents.push({agent: ticket.agent});
  }
});

let obj = [];

for(let i = 0; i < agents.length; i++) {
  const contacts = filterMontlyContactsLanguageBased(data, agents[i].agent, language);
  const { agent } = agents[i];
  obj.push({
    name: agent,
    ...contacts
  })
}

  return obj;
}

// filteringMonthly contacts based on agent name
export const filterMontlyContactsLanguageBased = (data, agentName, language) => {
  // initial object
  let finalContacts = {
    chats: 0,
    calls: 0,
    mails: 0
  }
// sorting all data monthly
  const result = data.filter(ticket => ticket.createdAt.slice(5, 7) === month && ticket.language === language);
// sorting contacts based on agent's name
  const contacts = result.map(agent => {
    if(agent.agent === agentName && agent.chats !== 0 && agent.language === language) {
      finalContacts.chats += agent.chats;
    }
    if(agent.agent === agentName && agent.calls !== 0 && agent.language === language) {
      finalContacts.calls += agent.calls;
    }
    if(agent.agent === agentName && agent.mails !== 0 && agent.language === language) {
      finalContacts.mails += agent.mails;
    }
  })

  return finalContacts;
}


