const pessoa = {
    a : "Marcelo",
    b : "Professor",
    c : "mmcollares@gmail.com"
    };

    // var nome = pessoa.nome;
    // var profissao = pessoa.profissao;
    // var email = pessoa.email;

    const {a:nome, b:profissao, c:email} = pessoa;

    console.log(nome);
    console.log(profissao);
    console.log(email);

    // <div>a</div>
    // <div>b</div>
    // <div>c</div>

    console.log(pessoa)