function About() {
  return (
    <>
      <section id="about" className="about py-8">
        <div className="container mx-auto" data-aos="fade-up">

          <div className="section-title text-center mb-8">
            <h2 className="text-4xl font-bold">About</h2>
            <p className="mt-4 text-gray-600">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>

          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
              <img src="src/img/profile-img.jpg" className="w-full h-auto rounded" alt="" />
            </div>
            <div className="w-full lg:w-2/3 lg:pl-8">
              <h3 className="text-2xl font-semibold">UI/UX Designer &amp; Web Developer.</h3>
              <p className="italic mt-4 text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex flex-wrap mt-8">
                <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
                  <ul className="space-y-2">
                    <li><i className="bi bi-chevron-right text-indigo-600"></i> <strong>Birthday:</strong> <span>1 May 1995</span></li>
                    <li><i className="bi bi-chevron-right text-indigo-600"></i> <strong>Website:</strong> <span>www.example.com</span></li>
                    <li><i className="bi bi-chevron-right text-indigo-600"></i> <strong>Phone:</strong> <span>+123 456 7890</span></li>
                    <li><i className="bi bi-chevron-right text-indigo-600"></i> <strong>City:</strong> <span>New York, USA</span></li>
                  </ul>
                </div>
                <div className="w-full lg:w-1/2">
                  <ul className="space-y-2">
                    <li><i className="bi bi-chevron-right text-indigo-600"></i> <strong>Age:</strong> <span>30</span></li>
                    <li><i className="bi bi-chevron-right text-indigo-600"></i> <strong>Degree:</strong> <span>Master</span></li>
                    <li><i className="bi bi-chevron-right text-indigo-600"></i> <strong>Email:</strong> <span>email@example.com</span></li>
                    <li><i className="bi bi-chevron-right text-indigo-600"></i> <strong>Freelance:</strong> <span>Available</span></li>
                  </ul>
                </div>
              </div>
              <p className="mt-8 text-gray-600">
                Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default About;
