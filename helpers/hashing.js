const bcrypt = require("bcryptjs");
const saltRounds = 10;

const hashGenerator = async (password) => {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password,salt);

    return hash;
}

module.exports.hashGenerator = hashGenerator;