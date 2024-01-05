import React from "react";

const About = () => {
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
            About
          </h3>
        </div>
      </div>
      <section>
        <div className="md:flex justify-between items-center m-12">
          <div className="md:max-w-[60%]  md:px-10">
            <h3 className="text-2xl text-['Poppins',Reguler] font-bold text-[#333333]">
              Our Story
            </h3>
            <p className="text-[15px] text-['Poppins',Reguler]  text-[#888888] my-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              consequat consequat enim, non auctor massa ultrices non. Morbi sed
              odio massa. Quisque at vehicula tellus, sed tincidunt augue. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Maecenas varius egestas diam, eu sodales metus
              scelerisque congue. Pellentesque habitant morbi tristique senectus
              et netus et malesuada fames ac turpis egestas. Maecenas gravida
              justo eu arcu egestas convallis. Nullam eu erat bibendum, tempus
              ipsum eget, dictum enim. Donec non neque ut enim dapibus tincidunt
              vitae nec augue. Suspendisse potenti. Proin ut est diam. Donec
              condimentum euismod tortor, eget facilisis diam faucibus et. Morbi
              a tempor elit.
            </p>
            <p className="text-[15px] text-['Poppins',Reguler]  text-[#888888] my-6">
              Donec gravida lorem elit, quis condimentum ex semper sit amet.
              Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut
              fringilla turpis in vehicula vehicula. Pellentesque congue ac orci
              ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu
              facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna
              vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat
              arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit
              convallis ipsum, et maximus enim ligula ac ligula.
            </p>
            <p className="text-[15px] text-['Poppins',Reguler]  text-[#888888] my-6">
              Any questions? Let us know in store at 8th floor, 379 Hudson St,
              New York, NY 10018 or call us on (+1) 96 716 6879
            </p>
          </div>
          <div className="  md:max-w-[30%] mx-auto max-h-full overflow-hidden">
            <img
              src="images/about-01.jpg"
              alt=""
              className="max-w-[100%] transform transition-transform hover:scale-110 duration-1000"
            />
          </div>
        </div>
        <div className="md:flex justify-between items-center m-12">
          <div className="  md:max-w-[30%] mx-auto max-h-full overflow-hidden">
            <img
              src="images/about-02.jpg"
              alt=""
              className="max-w-[100%] transform transition-transform hover:scale-110 duration-1000"
            />
          </div>
          <div className="md:max-w-[60%]  md:px-10">
            <h3 className="text-2xl text-['Poppins',Reguler] font-bold text-[#333333] mt-4">
              Our Mission
            </h3>
            <p className="text-[15px] text-['Poppins',Reguler] px-6  text-[#888888] my-6">
              Mauris non lacinia magna. Sed nec lobortis dolor. Vestibulum
              rhoncus dignissim risus, sed consectetur erat. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas. Nullam maximus mauris sit amet odio convallis, in
              pharetra magna gravida. Praesent sed nunc fermentum mi molestie
              tempor. Morbi vitae viverra odio. Pellentesque ac velit egestas,
              luctus arcu non, laoreet mauris. Sed in ipsum tempor, consequat
              odio in, porttitor ante. Ut mauris ligula, volutpat in sodales in,
              porta non odio. Pellentesque tempor urna vitae mi vestibulum, nec
              venenatis nulla lobortis. Proin at gravida ante. Mauris auctor
              purus at lacus maximus euismod. Pellentesque vulputate massa ut
              nisl hendrerit, eget elementum libero iaculis.
            </p>
            <div className="border-l-[2px] border-slate-300 md:pl-2">
              <p className="text-[15px] text-['Poppins',Reguler] font-bold italic  text-[#888888] my-3 mx-6">
                Creativity is just connecting things. When you ask creative
                people how they did something, they feel a little guilty because
                they didn't really do it, they just saw something. It seemed
                obvious to them after a while.
              </p>
              <span className="text-[13px] mx-6">- Steve Job’s</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
