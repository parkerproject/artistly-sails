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
    console.log(Artistly);

    var result = (this.checkifexist(email)) ? 'already exist' : 'saved';
    Artistly.find().exec(function(err, result) {
      console.log(result);
    });


    return res.json({
      status: req.body.hash
    });
  },

  /**
   * `SendinviteController.checkifexist()`
   */
  checkifexist: function(userEmail) {
    var flag = true;

    //Artist.findOne({ email: userEmail });

    return flag;
  },


  /**
   * `SendinviteController.save()`
   */
  save: function(req, res) {
    return res.json({
      todo: 'save() is not implemented yet!'
    });
  }
};