const crypto = require('crypto');
const fs = require('fs');
const readline = require('readline');
console.log('Vazado por IcaroPJL | Compre aqui: https://discord.gg/JM43ezD4xD')

// Função para gerar uma string aleatória
const generateRandomString = (length) => {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = crypto.randomInt(0, characters.length);
    code += characters[randomIndex];
  }
  return code;
};

// Interface para ler a entrada do console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pergunta ao usuário quantos códigos deseja gerar
rl.question('Quantos códigos de Spotify você gostaria de gerar? ', (answer) => {
  const numCodes = parseInt(answer);

  if (isNaN(numCodes) || numCodes <= 0) {
    console.log('Por favor, insira um número válido.');
    rl.close();
    return;
  }

  // Gera os códigos e cria as URLs
  const codes = [];
  for (let i = 0; i < numCodes; i++) {
    const code = generateRandomString(10);
    const url = `https://www.spotify.com/br-pt/ppt/microsoft/?code=${code}`;
    codes.push(url);
  }

  // Escreve os códigos no arquivo spoti.txt
  fs.writeFile('links.txt', codes.join('\n'), (err) => {
    if (err) {
      console.error('Erro ao escrever no arquivo:', err);
    } else {
      console.log('Os códigos foram gerados no arquivo links.txt');
    }
    rl.close();
  });
});
