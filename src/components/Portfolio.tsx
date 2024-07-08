function Portfolio() {
  return (
    <>
      <section id="portfolio" className="portfolio bg-gray-100 py-8">
        <div className="container mx-auto" data-aos="fade-up">
          <div className="section-title text-center mb-8">
            <h2 className="text-4xl font-bold">Portfolio</h2>
            <p className="mt-4 text-gray-600">
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          <div className="flex justify-center mb-8" data-aos="fade-up" data-aos-delay="100">
            <ul id="portfolio-flters" className="flex space-x-4">
              <li data-filter="*" className="filter-active cursor-pointer text-indigo-600">All</li>
              <li data-filter=".filter-app" className="cursor-pointer text-gray-600">App</li>
              <li data-filter=".filter-card" className="cursor-pointer text-gray-600">Card</li>
              <li data-filter=".filter-web" className="cursor-pointer text-gray-600">Web</li>
            </ul>
          </div>

          <div className="flex flex-wrap -mx-4 portfolio-container" data-aos="fade-up" data-aos-delay="200">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 portfolio-item filter-app">
              <div className="portfolio-wrap relative overflow-hidden bg-white rounded shadow-md">
                <img src="src/img/portfolio/portfolio-1.jpg" className="w-full h-auto" alt="" />
                <div className="portfolio-info p-4 absolute inset-0 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white">
                  <h4 className="text-xl font-semibold">App 1</h4>
                  <p>App</p>
                  <div className="portfolio-links mt-4 flex space-x-4">
                    <a href="src/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox text-2xl" title="App 1"><i className="bx bx-plus"></i></a>
                    <a href="portfolio-details.html" className="portfolio-details-lightbox text-2xl" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 portfolio-item filter-web">
              <div className="portfolio-wrap relative overflow-hidden bg-white rounded shadow-md">
                <img src="src/img/portfolio/portfolio-2.jpg" className="w-full h-auto" alt="" />
                <div className="portfolio-info p-4 absolute inset-0 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white">
                  <h4 className="text-xl font-semibold">Web 3</h4>
                  <p>Web</p>
                  <div className="portfolio-links mt-4 flex space-x-4">
                    <a href="src/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox text-2xl" title="Web 3"><i className="bx bx-plus"></i></a>
                    <a href="portfolio-details.html" className="portfolio-details-lightbox text-2xl" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 portfolio-item filter-app">
              <div className="portfolio-wrap relative overflow-hidden bg-white rounded shadow-md">
                <img src="src/img/portfolio/portfolio-3.jpg" className="w-full h-auto" alt="" />
                <div className="portfolio-info p-4 absolute inset-0 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white">
                  <h4 className="text-xl font-semibold">App 2</h4>
                  <p>App</p>
                  <div className="portfolio-links mt-4 flex space-x-4">
                    <a href="src/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox text-2xl" title="App 2"><i className="bx bx-plus"></i></a>
                    <a href="portfolio-details.html" className="portfolio-details-lightbox text-2xl" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 portfolio-item filter-card">
              <div className="portfolio-wrap relative overflow-hidden bg-white rounded shadow-md">
                <img src="src/img/portfolio/portfolio-4.jpg" className="w-full h-auto" alt="" />
                <div className="portfolio-info p-4 absolute inset-0 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white">
                  <h4 className="text-xl font-semibold">Card 2</h4>
                  <p>Card</p>
                  <div className="portfolio-links mt-4 flex space-x-4">
                    <a href="src/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox text-2xl" title="Card 2"><i className="bx bx-plus"></i></a>
                    <a href="portfolio-details.html" className="portfolio-details-lightbox text-2xl" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 portfolio-item filter-web">
              <div className="portfolio-wrap relative overflow-hidden bg-white rounded shadow-md">
                <img src="src/img/portfolio/portfolio-5.jpg" className="w-full h-auto" alt="" />
                <div className="portfolio-info p-4 absolute inset-0 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white">
                  <h4 className="text-xl font-semibold">Web 2</h4>
                  <p>Web</p>
                  <div className="portfolio-links mt-4 flex space-x-4">
                    <a href="src/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox text-2xl" title="Web 2"><i className="bx bx-plus"></i></a>
                    <a href="portfolio-details.html" className="portfolio-details-lightbox text-2xl" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 portfolio-item filter-app">
              <div className="portfolio-wrap relative overflow-hidden bg-white rounded shadow-md">
                <img src="src/img/portfolio/portfolio-6.jpg" className="w-full h-auto" alt="" />
                <div className="portfolio-info p-4 absolute inset-0 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white">
                  <h4 className="text-xl font-semibold">App 3</h4>
                  <p>App</p>
                  <div className="portfolio-links mt-4 flex space-x-4">
                    <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox text-2xl" title="App 3"><i className="bx bx-plus"></i></a>
                    <a href="portfolio-details.html" className="portfolio-details-lightbox text-2xl" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 portfolio-item filter-card">
              <div className="portfolio-wrap relative overflow-hidden bg-white rounded shadow-md">
                <img src="assets/img/portfolio/portfolio-7.jpg" className="w-full h-auto" alt="" />
                <div className="portfolio-info p-4 absolute inset-0 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white">
                  <h4 className="text-xl font-semibold">Card 1</h4>
                  <p>Card</p>
                  <div className="portfolio-links mt-4 flex space-x-4">
                    <a href="src/images/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox text-2xl" title="Card 1"><i className="bx bx-plus"></i></a>
                    <a href="portfolio-details.html" className="portfolio-details-lightbox text-2xl" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 portfolio-item filter-card">
              <div className="portfolio-wrap relative overflow-hidden bg-white rounded shadow-md">
                <img src="assets/img/portfolio/portfolio-8.jpg" className="w-full h-auto" alt="" />
                <div className="portfolio-info p-4 absolute inset-0 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white">
                  <h4 className="text-xl font-semibold">Card 3</h4>
                  <p>Card</p>
                  <div className="portfolio-links mt-4 flex space-x-4">
                    <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox text-2xl" title="Card 3"><i className="bx bx-plus"></i></a>
                    <a href="portfolio-details.html" className="portfolio-details-lightbox text-2xl" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 portfolio-item filter-web">
              <div className="portfolio-wrap relative overflow-hidden bg-white rounded shadow-md">
                <img src="assets/img/portfolio/portfolio-9.jpg" className="w-full h-auto" alt="" />
                <div className="portfolio-info p-4 absolute inset-0 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white">
                  <h4 className="text-xl font-semibold">Web 3</h4>
                  <p>Web</p>
                  <div className="portfolio-links mt-4 flex space-x-4">
                    <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox text-2xl" title="Web 3"><i className="bx bx-plus"></i></a>
                    <a href="portfolio-details.html" className="portfolio-details-lightbox text-2xl" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
