var mongoose = require('mongoose');
var moment = require('moment');

var Schema = mongoose.Schema;

var AuthorSchema = new Schema(
  {
    first_name: {type: String, required: true, max: 100},
    family_name: {type: String, required: true, max: 100},
    date_of_birth: {type: Date},
    date_of_death: {type: Date},
  }
);

// Virtual for author's full name
AuthorSchema
.virtual('name')
.get(function () {
  return this.family_name + ', ' + this.first_name;
});

// Virtual for author's lifespan
AuthorSchema
.virtual('lifespan')
.get(function () {
	
<<<<<<< HEAD
  return this.date_of_birth ? moment(this.date_of_birth).format('YYYY-MM-DD') : '';
=======
  return ((this.date_of_birth ? moment(this.date_of_birth).format('MMMM Do, YYYY') : '') + " - " + (this.date_of_death ? moment(this.date_of_death).format('MMMM Do, YYYY') : ''));
>>>>>>> 341afd59390d5fc2961a91afe4b8346cb18460d1
});

// Virtual for author's URL
AuthorSchema
.virtual('url')
.get(function () {
  return '/catalog/author/' + this._id;
});

//Export model
module.exports = mongoose.model('Author', AuthorSchema);