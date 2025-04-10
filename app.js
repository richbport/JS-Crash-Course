let user = [
  {
    username: "Rich",
    email: "rich@frontendsimplified.com",
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

console.log(user.username[user.username.length - 1]);

console.log(user.subscriptionStatus);

console.log(user.lessonsCompleted.map((elem) => elem * 2));
