import { Cliente, Telefone, Endereco, Empresa } from "./modulo.js";

// endereço para a empresa
const enderecoEmpresa = new Endereco("SP", "São Paulo", "Av. Paulista", 1000);

// criar a empresa
const empresa = new Empresa("Tech Solutions LTDA", "TechSol", "12.345.678/0001-99", enderecoEmpresa);

// criando dois telefones para a empresa
const telefoneEmpresa1 = new Telefone("11", "99998888");
const telefoneEmpresa2 = new Telefone("11", "99997777");

empresa.telefones.add(telefoneEmpresa1);
empresa.telefones.add(telefoneEmpresa2);

// criando 5 clientes, cada um com um endereço e dois telefones
const clientes = [];

for (let i = 1; i <= 5; i++) {
    let enderecoCliente = new Endereco("SP", "São Paulo", `Rua Cliente ${i}`, i);
    let cliente = new Cliente(`Cliente ${i}`, `123.456.78${i}-00`, enderecoCliente);

    let telefone1 = new Telefone("11", `98765432${i}`);
    let telefone2 = new Telefone("11", `99987654${i}`);

    cliente.telefones.add(telefone1);
    cliente.telefones.add(telefone2);

    clientes.push(cliente);
}

// criando clientes
clientes.forEach(cliente => empresa.clientes.add(cliente));

// exibir emprepa e clientes
console.log(empresa.detalhe());
