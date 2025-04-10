let users = [
  {
    username: "Rich",
    email: "rich@frontendsimplified.com",
    password: "test123"
    subscriptionStatus: "VIP",
    discordId: "Rich Port#0001",
    lessonsCompleted: [0, 1],
  },
  {
    username: "Mitri",
    email: "mitri@frontendsimplified.com",
    subscriptionStatus: "VIP",
    discordId: "Mitri#0001",
    lessonsCompleted: [0, 1, 3, 4],
  },
];

console.log(users[0].lessonsCompleted.map(elem => elem * 2))
