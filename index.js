var esprima = require('esprima'),
  escodegen = require('escodegen'),
  astral = require('astral')();

// register angular annotator pass
require('astral-angular-annotate')(astral);

module.exports = function(content, file, conf) {
    var ast = esprima.parse(content, {
      tolerant: true
    });

    astral.run(ast);

    return escodegen.generate(ast, {
      format: {
        indent: {
          style: '  '
        }
      }
    });
};