const Academics = () => {
  return (
    <section className="w-full text-center pb-20">
      {/* Header Section */}
      <div className="relative w-full h-[200px]">
        <img
          src="/images/Academics/img1.jpg"
          alt="Academic Programs"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info Section */}
      <div className="py-12 px-6 max-w-4xl mx-auto text-center">
        <div className="bg-background p-4 rounded-md shadow-md">
          <p className="text-muted font-semibold">
            Empowering students to understand themselves and navigate their own path is fundamental to a Khan Lab School education.
          </p>
        </div>
      </div>

      {/* Program Levels */}
      <div className="max-w-4xl mx-auto py-12">
        <h2 className="text-2xl font-bold text-primary mb-6">Explore Our Programs</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {["TK-1", "2-5", "6-8", "9-12"].map((level) => (
            <button
              key={level}
              className="bg-accent-gold text-accent-olive font-bold px-6 py-2 rounded-md hover:bg-accent-gold/80 transition"
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      {/* Description Sections */}
      <div className="max-w-3xl mx-auto px-6 space-y-12 text-left">
        <div>
          <h2 className="text-2xl font-bold text-primary">Our School</h2>
          <p className="text-muted mt-3">
            KLS is a non-profit, mastery-based, independent school designed to implement the innovative educational ideas developed by Crestview Academy
            founder, nnn bbb...
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-primary">Our Students</h2>
          <p className="text-muted mt-3">
            KLS believes that young people are capable of far more than society currently recognizes...
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-primary">Our Curriculum</h2>
          <p className="text-muted mt-3">
            With Khan Lab School’s mastery-based learning model, students must demonstrate an understanding of content and skills...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Academics;
