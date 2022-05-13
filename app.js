const profileDataArgs = process.argv.slice(2, process.argv.lenght);
console.log(profileDataArgs);

const printProfileData = profileDataArr => {
    profileDataArr.forEach(profileItem => console.log(profileItem));
};