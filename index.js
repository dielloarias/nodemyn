var app = require("./config/custom-express")();
  
let PORT = 3000;
app.listen(PORT, function() {
  console.log("Nodemyn: Servidor ativo na porta: " + PORT);
});
