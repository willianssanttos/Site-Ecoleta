// compile-nunjucks.js
const nunjucks = require('nunjucks');
const fs = require('fs');
const path = require('path');

// Configurar o diretório dos templates
const templatesDir = path.join(__dirname, 'src', 'views');


// Inicializar Nunjucks
nunjucks.configure(templatesDir);

// Definir os arquivos Nunjucks a serem compilados
const templates = ['index.html', 'create-point.html', 'layout.html', 'search-results.html']; // Adicione mais templates aqui

templates.forEach(template => {
  const htmlOutput = nunjucks.render(template);
  const outputFile = path.join(__dirname, 'dist', template.replace('.njk', '.html'));

  // Garantir que o diretório de saída exista
  fs.mkdirSync(path.dirname(outputFile), { recursive: true });

  // Escrever o arquivo HTML no diretório de saída
  fs.writeFileSync(outputFile, htmlOutput, 'utf-8');
  console.log(`Generated HTML: ${outputFile}`);
});
