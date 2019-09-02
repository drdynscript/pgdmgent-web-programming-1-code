const firstName = 'Philippe';
const surName = 'De Pauw - Waterschoot';
const sex = 'Male';
const age = 36;
const unicodeAvatar = '\u{1F344}';
const married = false;
const quote = 'I\'m a future talent in front-end development';
const bmi = (65/(1.72*1.72));

const message = `
My personal information
================================================
Firstname:\t${firstName}
Surname:\t${surName}
Sex:\t\t${sex}
Age:\t\t${age}
Married:\t${married}
BMI:\t\t${bmi}
Avatar:\t\t${unicodeAvatar}
Quote:\t\t${quote}
`;

alert(message);