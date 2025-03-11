class Cliente {
    #cpf;

    constructor(nome, cpf, endereco) {
        this.nome = nome;
        this.endereco = endereco;
        this.telefones = new Set();
        this.#cpf = cpf;
    }

    getCpf() {
        return this.#cpf;
    }

    getNomeMaiusculo() {
        return this.nome.toUpperCase();
    }

    getNomeMinusculo() {
        return this.nome.toLowerCase();
    }

    detalhe() {
        let telefonesDetalhe = "";
        this.telefones.forEach(telefone => {
            telefonesDetalhe += `\n  ddd: ${telefone.ddd} número: ${telefone.numero}`;
        });

        return `Nome: ${this.nome}
Estado: ${this.endereco.estado} Cidade: ${this.endereco.cidade} Rua: ${this.endereco.rua} Número: ${this.endereco.numero}
Telefones:${telefonesDetalhe}\n`;
    }
}

class Telefone {
    constructor(ddd, numero) {
        this.ddd = ddd;
        this.numero = numero;
    }
}

class Endereco {
    constructor(estado, cidade, rua, numero) {
        this.estado = estado;
        this.cidade = cidade;
        this.rua = rua;
        this.numero = numero;
    }
}

class Empresa {
    #cnpj;

    constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        this.endereco = endereco;
        this.clientes = new Set();
        this.telefones = new Set();
        this.#cnpj = cnpj;
    }

    getCnpj() {
        return this.#cnpj;
    }

    getNomeFantasiaMaiusculo() {
        return this.nomeFantasia.toUpperCase();
    }

    getNomeFantasiaMinusculo() {
        return this.nomeFantasia.toLowerCase();
    }

    detalhe() {
        let detalheClientes = "";
        this.clientes.forEach(cliente => {
            detalheClientes += cliente.detalhe() + "\n-------------------\n";
        });

        return `Razão Social: ${this.razaoSocial}
Nome Fantasia: ${this.nomeFantasia}
-------------------
${detalheClientes}`;
    }
}

// exportar todas as classes
export { Cliente, Telefone, Endereco, Empresa };
