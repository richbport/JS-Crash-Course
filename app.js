let users = [
  {
    username: "Rich",
    email: "rich@frontendsimplified.com",
    password: "test123",
    subscriptionStatus: "VIP",
    discordId: "Rich Port#0001",
    lessonsCompleted: [0, 1],
  },
  {
    username: "Mitri",
    email: "mitri@frontendsimplified.com",
    password: "mitri123",
    subscriptionStatus: "VIP",
    discordId: "Mitri#0001",
    lessonsCompleted: [0, 1, 2, 3],
  },
  {
    username: "Zen",
    email: "zen@frontendsimplified.com",
    password: "zen123",
    subscriptionStatus: "VIP",
    discordId: "Zen#0001",
    lessonsCompleted: [0, 1, 2, 3],
  },
];

function login(email, password) {
  for (let i = 0; i < users.length; ++i) {
    return
    if (users[i].email === email) {
      console.log(users[i]);
      if (users[i].password === password) {
        console.log('log the user in- the details are correct')
      }
      else {
        console.log('password is incorrect - try again')
      }
    }
  }
}

login('rich@frontendsimplified.com', 'test123');
