export default function Features() {
  return (
    <section className=" bg-[#FFF7E2] py-12 px-6 md:px-16">
      <h3 className="text-center text-xl md:text-2xl font-bold text-[#3B5D50] mb-2">
        Featured
      </h3>
      <p className="text-center text-gray-700 text-sm mb-12">
        Recognized and celebrated by leading publications - Amrutam in the
        spotlight!
      </p>

      <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-8 md:gap-10">
        <div className="flex items-center justify-center">
          <img
            src="/images/TheTimesOfIndia.svg"
            alt="The Times Of India"
            className="w-28 h-12 object-contain"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            src="/images/yourStory.png"
            alt="YOURSTORY"
            className="w-28 h-12 object-contain"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            src="/images/condeNastTraveler.png"
            alt="codeNastTraveler"
            className="w-28 h-12 object-contain"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            src="/images/Livingetc.svg"
            alt="Livingetc"
            className="w-28 h-12 object-contain"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            src="/images/theChoiceOfFashion.svg"
            alt="The choice of fashion"
            className="w-28 h-12 object-contain"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            src="/images/GQ.svg"
            alt="The choice of fashion"
            className="w-28 h-12 object-contain"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            src="/images/LifeStyleAsia.png"
            alt="The choice of fashion"
            className="w-28 h-12 object-contain"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            src="/images/Vogue.png"
            alt="Vouge"
            className="w-28 h-12 object-contain"
          />
        </div>
      </div>
    </section>
  );
}
