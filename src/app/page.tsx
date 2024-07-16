import React from 'react';

const Home = () => {
  return (
    <div className="bg-[#fdf9f8] overflow-x-hidden">
      <nav className="bg-[#75bc52] border-y-2 border-black text-black">
        <div className="flex justify-between items-center max-w-7xl mx-auto w-11/12">
          <div className="flex items-center">
            <div className="text-2xl font-bold border-x-2 border-black py-3 px-4 bg-white">
              <a href="#" className="text-black">CodeQuest</a>
            </div>
          </div>
          <ul className="hidden sm:flex space-x-6">
            <li><a href="#" className="hover:underline hover:decoration-wavy hover:decoration-[#ffe043]">Learning Path</a></li>
            <li><a href="#" className="hover:underline hover:decoration-wavy hover:decoration-[#ffe043]">Subscribe</a></li>
            <li><a href="#" className="hover:underline hover:decoration-wavy hover:decoration-[#ffe043]">Contact</a></li>
          </ul>
          <div className="hidden sm:flex items-center space-x-5">
            <a href="#" className="hover:underline hover:decoration-wavy hover:decoration-[#ffe043]"><span>Dashboard</span></a>
            <a href="#"><img src="/user-avatar.jpg" alt="user-avatar" className="w-9 h-9 rounded-full border-2 border-black" /></a>
          </div>-
          <button className="sm:hidden block text-3xl">☰</button>
        </div>
      </nav>``

      <header className="max-w-4xl mx-auto w-11/12 flex flex-col justify-center items-center h-[500px] sm:h-[600px] text-center">
        <p className="text-black text-4xl sm:text-6xl font-bold mb-12">
          Embark on Your
          <br />
          Coding Adventure
          <br />
          with <span className="text-[#ffe043]">CodeQuest</span>
        </p>
        <a href="#" className="text-base sm:text-xl font-bold py-2 px-4 sm:py-3 sm:px-5 bg-[#60d5ec] rounded-2xl text-black border-2 border-black hover:bg-[#75bc52] hover:shadow-[4px_4px_0px_0px_#60d5ec] transition-all duration-300">Join Now</a>
      </header>

      <section className="flex justify-between max-w-3xl mx-auto mb-16">
        {[
          { count: '49k+', label: 'Students' },
          { count: '85%', label: 'Employed Graduates' },
          { count: '5', label: 'Courses' },
          { count: '18', label: 'Industry Partners' },
        ].map((stat, index) => (
          <div key={index} className="text-center">
            <h2 className="text-black text-3xl font-bold">{stat.count}</h2>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </section>

      <main>
        <section className="w-11/12 mx-auto flex flex-col items-center justify-center h-[550px] space-y-8">
          <h2 className="text-black text-3xl font-bold">Popular Courses</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:-p grid-cols-4 gap-5 max-w-6xl">
            {[
              { title: 'Front-End Web', img: "/front-end.jpg",classes: 6, bestSeller: true },
              { title: 'Back-End',img: "/back-end.jpg", classes: 7 },
              { title: 'React',img: "/react.jpg", classes: 6, bestSeller: true },
              { title: 'Machine Learning Engineer',img: "machine-learning.jpg", classes: 6, bestSeller: true },
            ].map((course, index) => (
              <li key={index} className={`p-2 border-2 border-black rounded-2xl overflow-hidden relative flex flex-col gap-2.5 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_0px_#60d5ec] transition-all duration-200 ${index > 1 ? 'hidden lg:flex' : ''} ${index === 1 ? 'hidden sm:flex' : ''}`}>
                <a href="#" className="flex-1">
                  <img src={course.img} alt={course.title} className="rounded-lg w-full h-[150px] object-cover" />
                  {course.bestSeller && (
                    <span className="absolute top-4 left-4 bg-[#ffe043] px-2.5 py-1.5 rounded">
                      <p className="text-xs">BEST SELLER</p>
                    </span>
                  )}
                  <h3 className="text-base font-semibold mt-2">{course.title}</h3>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="text-base">📚</span>
                    <span className="text-sm">{course.classes} Class</span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
          <a href="#">
            <button className="px-5 py-2.5 bg-[#75bc52] text-white font-bold rounded-2xl hover:bg-[#E64564] hover:shadow-[4px_4px_0px_0px_#75bc52] transition-all duration-200">
              <h3>View All</h3>
            </button>
          </a>
        </section>

        <section className="max-w-6xl mx-auto flex flex-col gap-5 justify-center items-center mb-24">
          <h2 className="text-3xl font-bold">Testimonials</h2>
          <div className="w-full px-4">
            <article className="bg-[#ffe043] rounded-2xl p-5 flex flex-col sm:flex-row gap-5 border-2 border-black">
              <div className="w-full sm:w-1/3 flex flex-col items-center text-center">
                <img src="/alice.jpg" alt="Testimonial" className="w-20 h-20 rounded-full mb-2.5" />
                <h3 className="font-semibold">John Doe</h3>
                <p className="text-gray-600 mb-2.5">Web Developer</p>
                <div className="text-black text-xl">★★★★★</div>
              </div>
              <div className="w-full sm:w-2/3 flex items-center sm:border-l-2 border-black sm:pl-5">
                <p className="italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eius soluta maiores, nobis, facilis repellendus harum doloribus perferendis ducimus excepturi, architecto asperiores! Nostrum cupiditate delectus porro laborum assumenda harum aperiam.</p>
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer className="bg-[#60d5ec] h-[50px] w-full mt-24 flex items-center justify-center border-y-2 border-black">
        <p>&copy; Heshi Tiara</p>
      </footer>
    </div>
  );
};

export default Home;