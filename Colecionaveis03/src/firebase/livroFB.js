import { conexaoFS } from './conexaoFB';

export class LivroFB{
    state = {
        colecao: conexaoFS.collection('ColecionaveisFirestore/Itens/Livros')
    };

    pegarColecao(){
        return this.state.colecao;
    }

    adicionarLivro(Livro){
        this.state.colecao.add(Livro);
    }

    editarLivro(Livro){
        const {id} = Livro;
        delete Livro.id;

        this.state.colecao.doc(id).update(Livro);
    }

    removerLivro(Livro){
        this.state.colecao.doc(Livro.id).delete();
    } 
}