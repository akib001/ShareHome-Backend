const expect = require('chai').expect;
const sinon = require('sinon');

const M_host = require("../model/M_host");
const C_host = require('../controller/C_host')
const C_user = require('../controller/C_user')
const M_user = require("../model/M_user");



describe(' Controller methods for user ', function() {
  it('should throw an error with code 500 if accessing the database fails', function(done) {
    sinon.stub(M_user, 'User');
    M_user.User.throws();

    const req = {
      body: {
        email: 'test@test.com',
        password: 'tester'
      }
    };

    C_user.createUser(req, {}, () => {}).then(result => {
      expect(result).to.be.an('error');
      expect(result).to.have.property('statusCode', 500);
      done();
    });

    M_user.User.restore();
  });

});




describe(' Controller methods for places ', function() {
  it('should throw an error with code 500 if accessing the database fails', function(done) {
    sinon.stub(M_host, 'createPlace');
    M_host.createPlace.throws();

    const req = {
      body: {
        email: 'test@test.com',
        password: 'tester'
      }
    };

    C_host.addPlace(req, {}, () => {}).then(result => {
      expect(result).to.be.an('error');
      expect(result).to.have.property('statusCode', 500);
      done();
    });

    M_host.createPlace.restore();
  });

  it('should throw an error with code 500 if accessing the database fails for editPlace', function(done) {
    sinon.stub(M_host, 'editPlace');
    M_host.editPlace.throws();

    const req = {
      body: {
        email: 'test@test.com',
        password: 'tester'
      }
    };

    C_host.editPlace(req, {}, () => {}).then(result => {
      expect(result).to.be.an('error');
      expect(result).to.have.property('statusCode', 500);
      done();
    });

    M_host.editPlace.restore();
  });

  it('should throw an error with code 500 if cant fetch single Place', function(done) {
    sinon.stub(M_host, 'fetchSinglePlace');
    M_host.fetchSinglePlace.throws();

    const req = {
      body: {
        email: 'test@test.com',
        password: 'tester'
      }
    };

    C_host.fetchSinglePlace(req, {}, () => {}).then(result => {
      expect(result).to.be.an('error');
      expect(result).to.have.property('statusCode', 500);
      done();
    });

    M_host.fetchSinglePlace.restore();
  });

  it('should throw an error with code 500 if cant fetch fetch hosted place by a host', function(done) {
    sinon.stub(M_host, 'fetchHostedPlaceList');
    M_host.fetchHostedPlaceList.throws();

    const req = {
      body: {
        email: 'test@test.com',
        password: 'tester'
      }
    };

    C_host.fetchHostedPlaceList(req, {}, () => {}).then(result => {
      expect(result).to.be.an('error');
      expect(result).to.have.property('statusCode', 500);
      done();
    });

    M_host.fetchHostedPlaceList.restore();
  });

});
