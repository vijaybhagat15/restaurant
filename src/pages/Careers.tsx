import JobSearch from "../components/Jobserch";
export default function CareerSection() {
  return (
    <section className="w-full bg-white flex flex-col md:flex-row items-center justify-between px-6 md:px-16 sm:py-20 py-5 relative overflow-hidden text-secondary">
      {/* Right Image Content */}
<div className="w-full md:w-[500px] mt-3 md:mt-0 sticky top-0 z-0 self-start sm:hidden">
  <img
    src="images/Carrers/img1.avif"
    alt="Cognizant team"
    className="w-full h-auto object-cover rounded-xl border-2 border-gray-400"
  />
  {/* Gradient triangle */}
</div>
      {/* Left Text Content */}
      <div className="w-full md:w-1/2 space-y-6 z-10">
        <h1 className="text-2xl md:text-3xl font-bold text-primary leading-tight">
          Welcome to careers <br />Maison Flavour
        </h1>
        <p className="text-base text-secondary">
        Join our passionate team and be part of a flavorful journey where your talent, creativity, and dedication help create memorable dining experiences every day. 
        </p>

          <JobSearch/>
      </div>

{/* Right Image Content */}
<div className="w-full md:w-[500px] mt-12 md:mt-0 sticky top-0 z-0 self-start">
  <img
    src="images/Carrers/img1.avif"
    alt="Cognizant team"
    className="w-full h-auto object-cover rounded-xl border-2 border-gray-400"
  />
  {/* Gradient triangle */}
  <div className="absolute right-0 bottom-0 w-64 h-64 bg-gradient-to-br from-yellow-400 to-yellow-900 transform rotate-45 translate-x-1/2 translate-y-1/2 z-[-1]" />
</div>

    </section>
  );
}
