import { useState } from "react";

function Suport() {
  const [name, setName] = useState("");
  const [LastName, setLasName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [message, setMessage] = useState("");
  const [agree, setAgree] = useState(false);

  const [nameValid, setNameValid] = useState(true);
  const [lastNameValid, setLastNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [selectedOptionValid, setSelectedOptionValid] = useState(true);
  const [messageValid, setMessageValid] = useState(true);
  const [agreeValid, setAgreeValid] = useState(true);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Enviado com sucesso!");
      restForm();
    } else {
      alert("Preencha todos os campos obrigatórios");
    }
  };
  const validateForm = () => {
    let isValid = true;

    if (name.trim() === "") {
      setNameValid(false);
      isValid = false;
    } else {
      setNameValid(true);
    }

    if (lastName.trim() === "") {
      setLastNameValid(false);
      isValid = false;
    } else {
      setLastNameValid(true);
    }

    if (email.trim() === "") {
      setEmailValid(false);
      isValid = false;
    } else {
      setEmailValid(true);
    }

    if (selectedOption === "") {
      setSelectedOptionValid(false);
      isValid = false;
    } else {
      setSelectedOptionValid(true);
    }

    if (message.trim() === "") {
      setMessageValid(false);
      isValid = false;
    } else {
      setMessageValid(true);
    }

    if (!agree) {
      setAgreeValid(false);
      isValid = false;
    } else {
      setAgreeValid(true);
    }

    return isValid;
  };
  const resetForm = () => {
    setName("");
    setLastName("");
    setEmail("");
    setSelectedOption("");
    setMessage("");
    setAgree(false);
    setNameValid(true);
    setLastNameValid(true);
    setEmailValid(true);
    setSelectedOptionValid(true);
    setMessageValid(true);
    setAgreeValid(true);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <article className="bg-white w-5/12 max-sm:w-screen p-10 m-14  border rounded-xl">
      <h1 className="text-3xl mb-10 font-semibold ">Fale Conosco</h1>

      <form action="" className="grid grid-cols-2 gap-8">
        <section className="flex flex-col max-md:col-span-2  ">
          <label htmlFor="name">Nome *</label>
          <input
            className="border border-green-900 h-12 rounded-md pl-2"
            type="text"
            id="name"
            name="name"
          />
        </section>
        <section className="flex flex-col max-md:col-span-2 ">
          <label htmlFor="ltname">Sobre Nome *</label>
          <input
            className=" border  border-green-900 h-12 rounded-md pl-2"
            type="text"
            id="ltname"
            name="ltname"
          />
        </section>
        <section className="flex flex-col col-span-2 ">
          <label htmlFor="email">Email *</label>
          <input
            className=" border  border-green-900 h-12 rounded-md pl-2 "
            type="email"
            id="email"
            name="email"
          />
        </section>
        <section className="col-span-2">
          <label htmlFor="">Tipo de Contato *</label>
          <article className="grid grid-cols-2 max-md:grid-cols-1 gap-6 ">
            <div className=" border  border-green-900 pl-10  h-12 pt-3 rounded-md">
              {" "}
              <input type="radio" id="soliSuport" name="selectContact" />
              <label htmlFor="soliSuport"> Suporte</label>
            </div>
            <div className=" border  border-green-900 pl-10 h-12 pt-3 rounded-md  ">
              <input type="radio" id="askQuestion" name="selectContact" />
              <label htmlFor="askQuestion"> Dúvida</label>
            </div>
          </article>
        </section>
        <section className="flex flex-col col-span-2 ">
          <label htmlFor="menssage"> Mensagem *</label>
          <textarea
            id="texto"
            name="texto"
            rows="4"
            cols="50"
            className="border  border-green-900 pb-16 rounded-md pl-2"
          ></textarea>
        </section>
        <section className=" col-span-2 ">
          <input type="checkbox" id="contact" name="contact" />
          <label htmlFor="contact" className="pl-2">
            {"Concordo em receber mensagem da equipe * "}
          </label>
        </section>
        <section className=" col-span-2">
          <input
            className=" bg-emerald-800 w-full p-4 text-white font-semibold text-center rounded-md cursor-pointer "
            type="submit"
            value="Enviar"
          />
        </section>
      </form>
    </article>
  );
}

export default Suport;
