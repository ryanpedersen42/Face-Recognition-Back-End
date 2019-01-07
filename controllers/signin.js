const handleSignin = (req, res, db, bcrypt) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json('incorrect form submission');
  }
  db.select('email', 'hash').from('login')
    .where('email', '=', req.body.email)
    .then(responseData => {
      const isValid = bcrypt.compareSync(password, responseData[0].hash);
      if (isValid) {
        return db.select('*').from('users')
          .where('email', '=', email)
          .then(user => {
            res.json(user[0])
          })
          .catch(err => res.status(400).json('unable to find user'))
      } else {
        res.status(400).json('wrong credentials inside')
      }
    })
    .catch(err => res.status(400).json('wrong credentials'))
}

module.exports = {
  handleSignin: handleSignin
}