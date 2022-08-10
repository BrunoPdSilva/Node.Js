const fs = require("fs");

// Ler arquivos
fs.readFile("./docs/blog1.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});

// Criar arquivos
fs.writeFile("./docs/blog1.txt", "Hello World!", (err, data) => {
  console.log("file was written");
});

// Criando diretórios
if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", err => {
    if (err) {
      console.log(err);
    }
    console.log("folder created");
  });
}

// Removendo diretórios
if (fs.existsSync("./assets")) {
  fs.rmdir("./assets", err => {
    if (err) {
      console.log("folder deleted");
    }
    console.log("folder deleted");
  });
}

// Deletando arquivos
if (fs.existsSync("./doc/deleteme.txt")) {
  fs.unlink("./docs/deleteme.txt", err => {
    if (err) {
      console.log(er);
    }
    console.log("file deleted");
  });
}
