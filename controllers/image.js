const Clarifai = require('clarifai');

// instantiate a new Clarifai app passing in your api key.
const app = new Clarifai.App({
apiKey: '06c545b592714723831c32325fc96eea'
});

// predict the contents of an image by passing in a url
const handleApiCall = (req, res) => {
  app.models
    .predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
    .then(data => res.json(data))
    .catch(err => res.status(400).json('error with image'))
}
  
const handleImagePut = (req, res, db) => {
  const { id } = req.body;
  db('users').where('id', '=', id)
  .increment('entries', 1)
  .returning('entries')
  .then(entries => {
   res.json(entries[0]);
  })
  .catch(err => res.status(400).json('unable to get entries'));
}

module.exports = {
  handleImagePut,
  handleApiCall
}