const userModel = require('../models/user.model');




module.exports.createUser = async ({
  firstname, lasttname, email, password
})=> {
  if(!firstname|| !email || !password) {
    throw new Error('Please provide all required fields');
  }
  const user=userModel.create({
    fullName: {
      firstname,
      lasttname
    },
    email,
    password
  })
  return user;
}
