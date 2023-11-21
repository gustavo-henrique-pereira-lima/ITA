import { Component } from '@angular/core';
import { ClienteService } from 'src/app/servicos/cliente.service';
import { Aluno } from 'src/app/servicos/model/Aluno';

@Component({
  selector: 'app-user-root',
  templateUrl: './user-root.component.html',
  styleUrls: ['./user-root.component.css']
})
export class UserRootComponent {

  // Objeto Aluno
  aluno = new Aluno();

  // Variavel para visibilidade dos botoes
  btnCadastro:boolean = true;

  // Variavel para visibilidade da tabela
  tabela:boolean = true

  // JSON de Alunos
  alunos:Aluno[] = [];

  // Construtor
  constructor(private servico:ClienteService){}

  // Metodo de selecao
  selecionar():void{
    this.servico.selecionar()
    .subscribe(retorno => this.alunos = retorno);
  }

  //Metodo de incialização
  ngOnInit(){
    this.selecionar();
  }

  //Metodo de cadastro
  cadastrar():void{
    this.servico.cadastrar(this.aluno)
    .subscribe(retorno => {

      // cadastrar o cliente no array
      this.alunos.push(retorno);

      // limpar formulario
      this.aluno = new Aluno();

      // Mensagem
      alert('Cliente cadastrado com sucesso!')
    });
  }

  // Metodo de selecao de clientes
  selecionarAluno(posicao:number):void{
    
    //Selecionar cliente no vetor
    this.aluno = this.alunos[posicao];

    // Visibilidade dos botoes
    this.btnCadastro = false;

    //Visibilidade da tabela
    this.tabela = false;
  }

// Metodo para editar alunos
editar():void{
  this.servico.editar(this.aluno)
  .subscribe(retorno => {
    //Obter posicao no array onde esta o cliente
    let posicao = this.alunos.findIndex( obj => {
      return obj.id == retorno.id;
    });

    // Alterar os dados do alun no array
    this.alunos[posicao] = retorno;

    //limpar formulario
    this.aluno = new Aluno();

    // visibilidade dos botoes
    this.btnCadastro = true;

    //Visibilidade da tabela
    this.tabela = true;

    // Mensagem
    alert('Aluno alterado com sucesso!');
  });
}

// Metodo para remover alunos
remover():void{
  this.servico.remover(this.aluno.id)
  .subscribe(retorno => {
    //Obter posicao no array onde esta o cliente
    let posicao = this.alunos.findIndex( obj => {
      return obj.id == this.aluno.id;
    });

    //Apagar os dados do aluno no array
    this.alunos.splice(posicao, 1);

    //limpar formulario
    this.aluno = new Aluno();

    // visibilidade dos botoes
    this.btnCadastro = true;

    //Visibilidade da tabela
    this.tabela = true;

    // Mensagem
    alert('Aluno removido com sucesso!');
  });
}

// Metodo cancelar
cancelar():void{
  // Limpar formulario
  this.aluno = new Aluno();

  // Visibilidade dos botoes
  this.btnCadastro = true;

  // visibilidade da tabela
  this.tabela = true;


}

}
