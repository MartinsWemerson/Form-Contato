function Suport() {
  return (
    <article>
      <h1>Fale Conosco</h1>

      <form action="">
        <section>
          <label htmlFor="name">Nome *</label>
          <input type="text" id="name" name="name" />
        </section>
        <section>
          <label htmlFor="ltname">Sobre Nome *</label>
          <input type="text" id="ltname" name="ltname" />
        </section>
        <section>
          <label htmlFor="email">Email *</label>
          <input type="email" id="email" name="email" />
        </section>
        <section>
          <label htmlFor="">Tipo de Contato *</label>
          <input type="radio" id="soliSuport" name="selectContact" />
          <label htmlFor="solidSuport"> Solicitação de Suporte</label>
          <input type="radio" id="askQuestion" name="selectContact" />
          <label htmlFor="askQuestion"> Tirar Dúvida</label>
        </section>
        <section>
          <label htmlFor="menssage"> Mensagem *</label>
          <input type="text" id="menssage" name="menssage" />
        </section>
        <section>
          <input type="checkbox" id="contact" name="contact" />
          <label htmlFor="contact">
            {" "}
            Concordo em receber mensagem da equipe *
          </label>
        </section>
        <section>
          <input type="submit" value="Enviar" onClick={alert("enviado")} />
        </section>
      </form>
    </article>
  );
}

export default Suport;
