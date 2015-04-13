/**
 * SendinviteController
 *
 * @description :: Server-side logic for managing sendinvites
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  index: function(req, res) {
    var email = req.body.email;
    var hash = req.body.hash;

    //var result = (this.checkifexist(email)) ? 'already exist' : 'saved';
    Artistly.count({
      email: email
    }).exec(function(err, result) {
      if (result === 0) {
        Artistly.create({
          email: email,
          hash: hash
        }).exec(function(err, created) {
          return res.json({
            status: 'success'
          });
        });
      } else {
        res.json({
          status: 'failed'
        });
      }
    });

  }

};