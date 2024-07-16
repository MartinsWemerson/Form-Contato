function Suport() {
  return (
    <article className="bg-white w-8/12 h-full p-12 ">
      <h1 className="text-3xl mb-10 font-semibold ">Fale Conosco</h1>

      <form action="" className="grid grid-cols-2 gap-8">
        <section className="flex flex-col  ">
          <label htmlFor="name">Nome *</label>
          <input
            className="border border-green-900 h-12"
            type="text"
            id="name"
            name="name"
          />
        </section>
        <section className="flex flex-col  ">
          <label htmlFor="ltname">Sobre Nome *</label>
          <input
            className=" border  border-green-900 h-12"
            type="text"
            id="ltname"
            name="ltname"
          />
        </section>
        <section className="flex flex-col col-span-2 ">
          <label htmlFor="email">Email *</label>
          <input
            className=" border  border-green-900 h-12"
            type="email"
            id="email"
            name="email"
          />
        </section>
        <section className="col-span-2">
          <label htmlFor="">Tipo de Contato *</label>
          <article className="grid grid-cols-2  gap-6">
            <div className=" border  border-green-900 pl-10 h-12 pt-3">
              {" "}
              <input type="radio" id="soliSuport" name="selectContact" />
              <label htmlFor="soliSuport"> Suporte</label>
            </div>
            <div className=" border  border-green-900 pl-10 h-12 pt-3 ">
              <input type="radio" id="askQuestion" name="selectContact" />
              <label htmlFor="askQuestion"> Dúvida</label>
            </div>
          </article>
        </section>
        <section className="flex flex-col col-span-2 ">
          <label htmlFor="menssage"> Mensagem *</label>
          <input
            className="border  border-green-900 h-24"
            type="text"
            id="menssage"
            name="menssage"
          />
        </section>
        <section className=" col-span-2">
          <input type="checkbox" id="contact" name="contact" />
          <label htmlFor="contact">
            {"Concordo em receber mensagem da equipe * "}
          </label>
        </section>
        <section className="col-span-2 bg-emerald-800 h-12 pt-3 text-white font-semibold text-center ">
          <input type="submit" value="Enviar" />
        </section>
      </form>
    </article>
  );
}

export default Suport;
