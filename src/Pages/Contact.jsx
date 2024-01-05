import ALdata from "../data/ALdata";
const Contact = () => {
  return (
    <>
      <div className="relative md:pt-28 pt-16 overflow-hidden">
        <img
          src="images/bg-01.jpg"
          alt=""
          className="min-h-[100%] min-w-[100%]"
        />
        <div className="absolute text-center top-[75px] lg:top-[160px] left-2 w-full ">
          <h3 className="text-['Poppins',Reguler] font-bold text-[25px] lg:text-[50px] text-[#fff]">
            Contact
          </h3>
        </div>
      </div>
      <div className="lg:flex items-center p-16 max-auto ">
        <div className="lg:min-w-[50%] h-auto border border-gray-300 mx-auto p-2">
          <form className="text-center py-5 max-w-[80%] mx-auto" action="">
            <h4 className="text-[24px] text-[#333333]  text-['Poppins',Reguler] mt-4">
              Send Us A Message
            </h4>
            <input
              className="block w-full mt-6 p-3 border border-gray-300 outline-none "
              type="text"
              placeholder="Your Email Address."
            />
            <textarea
              className="block w-full mt-6 p-3  border border-gray-300 outline-none"
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="How Can I help You ?"
            ></textarea>
            <button className="md:py-2  mt-5 text-['Poppins',Reguler] px-5 font-bold min-w-full text-[15px] bg-black text-white rounded-full hover:bg-[#717fe0] duration-500">
              Submit
            </button>
          </form>
        </div>
        <div className="lg:min-w-[50%] h-auto border border-gray-300 mx-auto md:p-16">
          <div className="p-12">
            {ALdata.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex gap-[8px] max-w-[60%] my-[16.2px] "
                >
                  <span>{item.icon}</span>
                  <div className="">
                    <span className="md:py-4 text-[18px] text-[#333333] font-semibold text-['Poppins',Reguler]">
                      {item.name}
                    </span>
                    <p className="text-[15px] flex  text-['Poppins',Reguler]  text-[#888888] mt-2">
                      {item.dsc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-[100%] mt-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.518651354001!2d-74.00996412426849!3d40.7286117365989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259f2a6784fab%3A0x38cd75721bbf535b!2s379%20Hudson%20St%208th%20floor%2C%20New%20York%2C%20NY%2010018%2C%20USA!5e0!3m2!1sen!2sin!4v1702901851767!5m2!1sen!2sin"
          Width={"100%"}
          height={450}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
};

export default Contact;
