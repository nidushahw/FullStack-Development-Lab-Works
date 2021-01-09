const userData = [{id: 1, username: 'mdenton'},
{id: 2, username: 'hogan'},
{id: 3, username: 'savage'},
{id: 4, username: 'flair'},
{id: 5, username: 'austin'}
]
router.get('/data', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(userData));
})