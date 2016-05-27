var deepdup = require('../lib/main');

var should = require('should');

describe('deepdup', function() {
  it('be a function', function() {
    should(deepdup).be.a.function();
  });

  it('should copy', function() {
    var first = { a: 1, b: "2", c: 3.0, d: true, e: null };
    var second = deepdup(first);

    second.should.be.have.property('a');
    second.should.be.have.property('b');
    second.should.be.have.property('c');
    second.should.be.have.property('d');
    second.should.be.have.property('e');

    second.a.should.be.equal(first.a);
    second.b.should.be.equal(first.b);
    second.c.should.be.equal(first.c);
    second.d.should.be.equal(first.d);
    second.e.should.be.equal(first.e);
  });

  it('should deep copy', function() {
    var first = {
      a: 1,
      b: {
        c: 1,
        d: {
          e: "2"
        }
      }
    }

    var second = deepdup(first);

    second.should.have.property('a');
    second.a.should.be.number();
    second.should.have.property('b');
    second.b.should.be.object();
    second.b.should.have.property('c');
    second.b.c.should.be.number();
    second.b.should.have.property('d');
    second.b.d.should.be.object();
    second.b.d.shoudl.habe.property('e');
    second.b.d.e.should.be.string();

    should(second.a === 1).be.truthy();
    should(second.b.c === 1).be.truthy();
    should(second.b.d.e === 1).be.truthy();
  });


  it('should clone', function() {
    var first = { a: { b: 2 } };
    var second = deepdup(first);

    second.should.have.property('a');
    second.a.should.have.property('b');

    should(second !== first).be.truthy();
    should(second.a === first.b).be.truthy();
  });
});
