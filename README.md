# Em Andamento
# Projeto do site VieiraDevCode

Este projeto foi realizado em ReactJS com objetivo
de praticar meus estudos na stack.

O site pode ser acessado no link: http://vieiradevcode.tk

A primeiro página é bem simples com uma imagem de fundo com menu superior com transparência e botões com efeito hover
no corpo da página possuí um pequeno texto e um botão onde encaminha ao meu GitHub.

<img src="https://uploaddeimagens.com.br/images/003/123/406/full/Captura_de_Tela_2021-03-09_a%CC%80s_21.00.23.png?1615338116" alt=""/>

A página "Sobre mim" foi divida em duas divs onde a div da esquerda possuí uma imagem ilustrativa e a div da esquerda possuí algumas informações sobre mim.

A página "Soft Skills" foi foi realizada também com uma imagem de fundo e feito um efeito de cor sobre ela com um pouco de transparência. No corpo da página fiz alguns cards com efeitos hover onde o card é expandido quando o cursos esta sobre ele, nos cards coloquei algumas imagens das tecnologias que tenho mais experiência.

<img src="https://uploaddeimagens.com.br/images/003/123/430/full/Captura_de_Tela_2021-03-09_a%CC%80s_21.00.41.png?1615339096" alt=""/>

Na página "Contato" eu também realializei a divisão com duas divs a esquerda cfoi feito um formulário para contato e da direita uma imagem ilustrativa, no rodapé foi feito colocado alguns icones de redes sociais.

O envio do email de contato foi configurado com o EmailJS, que pode ser analisado acessando o link: https://www.emailjs.com/
sua implementação é bem simples como pode-se ser visto no código abaixo.


function Contato() {

  function enviarEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmailMessage', 'template_uedvzor', e.target, 'user_HLkLcMfeD8IPCtYjyIBUU')
      .then((result) => {
        alert('Mensagem enviada com sucesso! :)');
      }, (error) => {
        alert(error.message);
      });
    e.target.reset();
  }
  /*
  Realizando a inclusão do name="name" nos inputs, configurando a function acima e  configurando no EmailJS o envio de email funciona perfeitamente.
  */


  return (
    <div>
      <div className="headerSemOpacity"></div>
      <Header />
      <div className="contatoContainer">

        <h1>Formulário para Contato</h1>

        <div className="containerForm">
          <form onSubmit={enviarEmail}>
            <input className="contato-nome" type="text" placeholder="Nome" name="name" />
            <input className="contato-email" type="text" placeholder="E-mail" name="email" />
            <input className="contato-telefone" type="text" placeholder="Telefone" name="phone" />

            <textarea type="text" placeholder="Digite sua mensagem aqui..." name="message" />

            <button type="submit" >Enviar</button>
          </form>

        </div>
      </div>
    </div>
  );
}
export default Contato;
