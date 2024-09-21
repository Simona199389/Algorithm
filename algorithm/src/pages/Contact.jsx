import React, { useState } from "react";
export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    email: "",
    phone: "",
    theme: "",
    subject: "",
  });
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://server.internal.anjela.info/api/contact_form",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }
    );
    console.log(JSON.stringify(formData));
    if (response.ok) {
      alert("Form submitted successfully!");
      setFormData({
        firstName: "",
        secondName: "",
        email: "",
        phone: "",
        theme: "",
        subject: "",
      });
    } else {
      alert("Error submitting form");
    }
  };
  return (
    <>
      <section className="h-[38vh] md:h-fit 2xl:h-[27vh] relative">
        <div className="w-full h-full overflow-hidden relative">
          <img
            src="https://server.internal.anjela.info/uploads/image_95c7461820.png"
            alt="Fetched Image"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 pl-[8%] pt-[6%] pb-[7%] pr-[4%] h-full bg-black bg-opacity-50 w-[100%]  xl:w-[52.9%]">
            <h1 className="text-white mb-12 font-bold text-xl md:text-2xl lg:mb-20 lg:text-6xl">
              Свържете се с нас
            </h1>
            <p className="text-white text-lg w-[98%] font-bold md:text-xl  lg:text-2xl">
              Изпратете запитване за изготвяне на проект и ценово предложение,
              не се колебайте да попитате ако имате въпроси, нашия екип е винаги
              отзивчив и любезен.
            </p>
          </div>
        </div>
      </section>
      <section className="h-fit bg-customGrey flex xl:flex-row flex-col pl-[8.3%] pr-[8%] 2xl:pt-[4.5%] pt-[8%] pb-[8%]">
        <div className="text-xl 2xl:w-[50%] flex flex-col items-center justify-center text-center xl:text-left xl:items-start xl:justify-normal">
          <p className="font-bold mb-[5%]">Производствена база и магазин:</p>
          <p className="mb-[0.8%]">Тел. 02 / 123 456</p>
          <p className="mb-[0.8%]">Факс: 02 / 123 456</p>
          <p className="mb-[0.8%]">е-mail: office@forthepeople.bg</p>
          <p className="mb-[0.8%]">Адрес: Черни Връх 1</p>
          <div className="w-[83%] h-[48%] xl:mt-[16.5%] mt-[10%] mb-[10%]">
            <img
              className="h-[100%] w-[100%]"
              src="/design.jpg"
              alt="Design"
            ></img>
          </div>
        </div>

        <div className="text-xl 2xl:w-[50%] xl:pl-[8.2%]">
          <p className="font-bold xl:mb-[12.2%] mb-[5%] lg:text-2xl">
            Изпрати запитване:
          </p>
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="flex md:flex-row flex-col gap-y-3 mb-3 xl:mb-12">
              <div className="w-[100%] md:pr-5">
                <input
                  className="shadow appearance-none border border-black w-full py-5 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-black"
                  id="firstName"
                  type="text"
                  placeholder="Име"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="w-[100%] md:pl-8 ">
                <input
                  className="shadow appearance-none border border-black w-full py-5 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-black"
                  id="secondName"
                  type="text"
                  value={formData.secondName}
                  onChange={handleInputChange}
                  placeholder="Фамилия"
                />
              </div>
            </div>
            <div className="flex md:flex-row flex-col gap-y-3 mb-3 xl:mb-12">
              <div className="w-[100%] md:pr-5">
                <input
                  className="shadow appearance-none border border-black w-full py-5 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-black"
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Имейл"
                />
              </div>
              <div className="w-[100%] md:pl-8">
                <input
                  className="shadow appearance-none border border-black w-full py-5 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-black"
                  id="phone"
                  type="text"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Телефон"
                />
              </div>
            </div>
            <div className="mb-3 xl:mb-12">
              <input
                className="shadow appearance-none border border-black w-full py-5 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-black"
                id="theme"
                type="text"
                value={formData.theme}
                onChange={handleInputChange}
                placeholder="Тема"
              />
            </div>
            <div className="mb-8">
              <textarea
                className="shadow appearance-none border border-black w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-black"
                id="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Запитване"
                rows="10"
              ></textarea>
            </div>
            <div className="flex items-center justify-center mb-5 xl:justify-start">
              <button
                className="bg-customBlack hover:bg-blue-700 w-[40%] text-white font-bold py-2 px-2 md:py-4 md:px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                изпрати
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
