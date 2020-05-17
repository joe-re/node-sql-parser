exports.parse           = require('./lib/parser').parse;
exports.parseFromClause = require('./lib/parser').parseFromClause;
exports.Parser          = require('./lib/parser');
exports.AstHelper       = require('./lib/ast_helper');
exports.AstReader       = require('./lib/ast_helper').Reader;
module.exports = {
  parse: exports.parse,
  parseFromClause: exports.parseFromClause,
  Parser: exports.Parser,
  AstHelper: exports.AstHelper,
  AstReader: exports.AstReader
}
