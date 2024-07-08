function Fact() {
  return (
    <>
      <section id="facts" className="facts py-12">
        <div className="container mx-auto" data-aos="fade-up">
          <div className="section-title text-center mb-12">
            <h2 className="text-4xl font-bold">Facts</h2>
            <p className="mt-4 text-gray-600">
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/4 md:w-1/2 px-4 mb-8">
              <div className="count-box text-center bg-white shadow-md rounded p-6">
                <i className="bi bi-emoji-smile text-4xl text-blue-600 mb-4"></i>
                <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter text-3xl font-bold"></span>
                <p className="mt-2 text-gray-600">Happy Clients</p>
              </div>
            </div>

            <div className="w-full lg:w-1/4 md:w-1/2 px-4 mb-8">
              <div className="count-box text-center bg-white shadow-md rounded p-6">
                <i className="bi bi-journal-richtext text-4xl text-blue-600 mb-4"></i>
                <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter text-3xl font-bold"></span>
                <p className="mt-2 text-gray-600">Projects</p>
              </div>
            </div>

            <div className="w-full lg:w-1/4 md:w-1/2 px-4 mb-8">
              <div className="count-box text-center bg-white shadow-md rounded p-6">
                <i className="bi bi-headset text-4xl text-blue-600 mb-4"></i>
                <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" className="purecounter text-3xl font-bold"></span>
                <p className="mt-2 text-gray-600">Hours Of Support</p>
              </div>
            </div>

            <div className="w-full lg:w-1/4 md:w-1/2 px-4 mb-8">
              <div className="count-box text-center bg-white shadow-md rounded p-6">
                <i className="bi bi-award text-4xl text-blue-600 mb-4"></i>
                <span data-purecounter-start="0" data-purecounter-end="25" data-purecounter-duration="1" className="purecounter text-3xl font-bold"></span>
                <p className="mt-2 text-gray-600">Awards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="skills section-bg py-12">
        <div className="container mx-auto" data-aos="fade-up">
          <div className="section-title text-center mb-12">
            <h2 className="text-4xl font-bold">Skills</h2>
            <p className="mt-4 text-gray-600">
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-8">
              <div className="progress">
                <span className="skill block mb-2 text-lg font-semibold">HTML <i className="val float-right">100%</i></span>
                <div className="progress-bar-wrap h-4 bg-gray-200 rounded">
                  <div className="progress-bar bg-blue-600 h-full rounded" style={{ width: '100%' }}></div>
                </div>
              </div>

              <div className="progress mt-4">
                <span className="skill block mb-2 text-lg font-semibold">CSS <i className="val float-right">90%</i></span>
                <div className="progress-bar-wrap h-4 bg-gray-200 rounded">
                  <div className="progress-bar bg-blue-600 h-full rounded" style={{ width: '90%' }}></div>
                </div>
              </div>

              <div className="progress mt-4">
                <span className="skill block mb-2 text-lg font-semibold">JavaScript <i className="val float-right">75%</i></span>
                <div className="progress-bar-wrap h-4 bg-gray-200 rounded">
                  <div className="progress-bar bg-blue-600 h-full rounded" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 px-4 mb-8">
              <div className="progress">
                <span className="skill block mb-2 text-lg font-semibold">PHP <i className="val float-right">80%</i></span>
                <div className="progress-bar-wrap h-4 bg-gray-200 rounded">
                  <div className="progress-bar bg-blue-600 h-full rounded" style={{ width: '80%' }}></div>
                </div>
              </div>

              <div className="progress mt-4">
                <span className="skill block mb-2 text-lg font-semibold">WordPress/CMS <i className="val float-right">90%</i></span>
                <div className="progress-bar-wrap h-4 bg-gray-200 rounded">
                  <div className="progress-bar bg-blue-600 h-full rounded" style={{ width: '90%' }}></div>
                </div>
              </div>

              <div className="progress mt-4">
                <span className="skill block mb-2 text-lg font-semibold">Photoshop <i className="val float-right">55%</i></span>
                <div className="progress-bar-wrap h-4 bg-gray-200 rounded">
                  <div className="progress-bar bg-blue-600 h-full rounded" style={{ width: '55%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Fact;
