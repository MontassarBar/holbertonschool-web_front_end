let user = {hobby: "Calligraphy",
    favoriteSport: "Hockey",
    astrologicalSign: "Aries",
    firstName: "Buillaume",
    lastName: "Ialva",
    location: "Telaviv",
    occupation: "Engineer"};

function logWelcomeUser(welcomeString) {
    console.log(`${welcomeString}, ${user.firstName}. Your occupation is: ${user.occupation}`);
}
let bindLogWelcomeUse = logWelcomeUser.user;
logWelcomeUser("Welcome");
