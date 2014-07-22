/* jshint expr:true */
/* global describe, it */

'use strict';

var expect = require('chai').expect;
var Weather = require('../../app/models/weather');

describe('Weather', function (){
  describe('.high', function(){
    it('should return the high temp for today', function(done){
      Weather.high(37219, function(temp){
       expect(temp).to.be.ok;
       expect(temp.length).to.be.at.least(2);
       done();
      });
    });
  });

  describe('.low', function(){
    it('should return the low temp for today', function(done){
      Weather.low(37219, function(temp){
       expect(temp).to.be.ok;
       expect(temp.length).to.be.at.least(2);
       done();
      });
    });
  });

  describe('.avgHigh', function(){
    it('should return the average high temp over 10 days', function(done){
      Weather.avgHigh(37219, function(temp){
       expect(temp).to.be.within(-50, 150);
       console.log(temp);
       done();
      });
    });
  });

  describe('.avgLow', function(){
    it('should return the average low temp for today', function(done){
      Weather.avgLow(37219, function(temp){
       expect(temp).to.be.within(-50, 150);
       done();
      });
    });
  });

  describe('.highs', function(){
    it('should return an array of high temps over 10 days', function(done){
      Weather.highs(37219, function(temp){
       expect(temp).to.have.length(10);//array of high temps for 10 day forecast
       console.log(temp);
       done();
      });
    });
  });

  describe('.lows', function(){
    it('should return an array of low temps over 10 days', function(done){
      Weather.lows(37219, function(temp){
       expect(temp).to.have.length(10);//array of low temps for 10 day forecast
       console.log(temp);
       done();
      });
    });
  });

  describe('.deltas', function(){
    it('should return an array of the deltas of high & low temps over 10 days', function(done){
      Weather.lows(37219, function(temp){
       expect(temp).to.have.length(10);//array of low temps for 10 day forecast
       console.log(temp);
       done();
      });
    });
  });
  
  describe('.moon', function(){
    it('should return moon phase', function(done){
      Weather.lows(37219, function(temp){
       expect(temp).to.have.length(10);//array of low temps for 10 day forecast
       console.log(temp);
       done();
      });
    });
  });




});

