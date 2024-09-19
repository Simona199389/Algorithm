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
      <section className="h-[26.86%] relative">
        <div className="w-full h-full overflow-hidden relative">
          <img
            src="https://server.internal.anjela.info/uploads/image_95c7461820.png"
            alt="Fetched Image"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-[52.9%] pl-[8%] pt-[6%] pb-[7%] pr-[4%] h-full bg-black bg-opacity-50">
            <h1 className="text-white mb-[11%] text-6xl font-bold">
              Свържете се с нас
            </h1>
            <p
              className="text-white text-xl w-[98%] font-bold"
              style={{ fontSize: "22px", lineHeight: "32px" }}
            >
              Изпратете запитване за изготвяне на проект и ценово предложение,
              не се колебайте да попитате ако имате въпроси, нашия екип е винаги
              отзивчив и любезен.
            </p>
          </div>
        </div>
      </section>
      <section className="h-[60.5%] bg-customGrey flex flex-row pl-[8.3%] pr-[8%] pt-[4.5%] pb-[8%] ">
        <div className="text-xl w-[50%]">
          <p className="font-bold mb-[5%]">Производствена база и магазин:</p>
          <p className="mb-[0.8%]">Тел. 02 / 123 456 </p>
          <p className="mb-[0.8%]">Факс: 02 / 123 456 </p>
          <p className="mb-[0.8%]">е-mail: offfice@forthepeople.bg</p>
          <p className="mb-[0.8%]">Адрес: Черни Връх 1</p>
          <div className="w-[83%] h-[48%] mt-[16.5%]">
            <img className="h-[100%] w-[100%]" src="/design.jpg"></img>
          </div>
        </div>
        <div className="text-xl w-[50%] pl-[8.2%]">
          <p className="font-bold mb-[12.2%]">Изпрати запитване:</p>
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="flex flex-row mb-12">
              <div className="w-1/2 pr-5">
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
              <div className="w-1/2 pl-8">
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
            <div className="flex flex-row mb-12">
              <div className="w-1/2 pr-5">
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
              <div className="w-1/2 pl-8">
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
            <div className="mb-10">
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
            <div className="flex items-center justify-between">
              <button
                className="bg-customBlack hover:bg-blue-700 w-[40%] text-white font-bold py-4 px-4 rounded focus:outline-none focus:shadow-outline"
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
