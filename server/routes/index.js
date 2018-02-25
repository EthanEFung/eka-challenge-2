const router = require('express').Router();
const path = require('path');
const { User } = require(path.resolve('db', 'index.js'));

router.get('/', (req, res) => res.sendStatus(200));
router.get('/checkout', (req, res) => res.sendStatus(201));

router.post('/postUser', (req, res) => {
  new User()
    .save()
    .then(data => {
      res.status(201)
      res.json(data.attributes)
    })
    .catch(err => {
      res.sendStatus(500)
    });
});

router.put('/putCredentials', (req, res) => {
  const { app, credentials } = req.body;

  new User({ id: app.id })
    .save(credentials)
    .then(data => {
      res.status(200);
      res.json(data.attributes);
    })
    .catch(err => {
      res.sendStatus(500)
    });
});

router.put('/putProfileInfo', (req, res) => {
  const { app, profile } = req.body;

  new User({ id: app.id })
    .save(profile)
    .then(data => {
      res.status(200);
      res.json(data.attributes);
    })
    .catch(err => {
      res.sendStatus(500);
    });
});

router.put('/putUserAddressInfo', (req, res) => {
  const { app, userAddressInfo } = req.body;

  new User({ id: app.id })
    .save({ address: userAddressInfo })
    .then(data => {
      res.status(200);
      res.json(data.attributes);
    })
    .catch(err => {
      res.sendStatus(500);
    });
});

module.exports = router;