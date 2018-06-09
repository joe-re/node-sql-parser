var should = require('should');
var Parser = require('../../lib/parser');

function inspect(obj) {
  //console.log(require('util').inspect(obj, false, 10, true));
}

describe('from_clause_parser test',function(){

  it('parsing test', function() {
    var sql, ast;

    sql = "SELECT DISTINCT FROa FROM employee e WHERE e.id = 0 GROUP BY d ORDER BY e limit 3";
    ast = Parser.parseFromClause(sql);

    ast.before.should.eql('SELECT DISTINCT FROa ');
    ast.after.should.eql('WHERE e.id = 0 GROUP BY d ORDER BY e limit 3');
    ast.from.length.should.eql(1)
    ast.from[0].type.should.eql('table')
    ast.from[0].table.should.eql('employee')
  });
})
