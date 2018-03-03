const express = require('express')
const router = express.Router()
const friends = require('../data/friends')

router.get('/friends', (req, res) => res.json(friends))
router.post('/friends', (req, res) => {
  const {name, photo, scores} = req.body

  const differences = []

  // Go through each friend
  friends.forEach((friend, i) => {

    // Get total difference from friend and your score.
    const totalDiff = scores.reduce((acc, score, i) => Math.abs(+friend.scores[i] - +score), 0)

    // Save difference
    differences.push(totalDiff)
  })

  // What's the lowest difference score??
  const minimumDifference = Math.min.apply(null, differences)

  console.log(minimumDifference)
  console.log(differences)

  // Find the best match and remove empty space `null`
  const bestMatches = differences
    .map((diffScore, i) => (diffScore == minimumDifference) ? friends[i] : null)
    .filter(friend => friend !== null)

  return res.json(bestMatches)
})

module.exports = router