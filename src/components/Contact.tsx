function Contact() {
  return (
    <>
      <section id="contact" className="contact py-12">
        <div className="container mx-auto" data-aos="fade-up">

          <div className="section-title text-center mb-12">
            <h2 className="text-4xl font-bold">Contact</h2>
          </div>

          <div className="flex flex-wrap -mx-4 mt-8">

            <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
              <div className="info bg-white shadow-md rounded p-6">
                <div className="address mb-6">
                  <i className="bi bi-geo-alt text-2xl text-blue-600 mb-2"></i>
                  <h4 className="text-xl font-semibold">Location:</h4>
                  <p className="text-gray-600">A108 Adam Street, New York, NY 535022</p>
                </div>

                <div className="email mb-6">
                  <i className="bi bi-envelope text-2xl text-blue-600 mb-2"></i>
                  <h4 className="text-xl font-semibold">Email:</h4>
                  <p className="text-gray-600">info@example.com</p>
                </div>

                <div className="phone">
                  <i className="bi bi-phone text-2xl text-blue-600 mb-2"></i>
                  <h4 className="text-xl font-semibold">Call:</h4>
                  <p className="text-gray-600">+1 5589 55488 55</p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-2/3 px-4">
              <form action="forms/contact.php" method="post" role="form" className="php-email-form bg-white shadow-md rounded p-6">
                <div className="flex flex-wrap -mx-4">
                  <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
                    <input type="text" name="name" className="form-control w-full border border-gray-300 rounded p-2" id="name" placeholder="Your Name" required />
                  </div>
                  <div className="w-full md:w-1/2 px-4">
                    <input type="email" className="form-control w-full border border-gray-300 rounded p-2" name="email" id="email" placeholder="Your Email" required />
                  </div>
                </div>
                <div className="form-group mt-4">
                  <input type="text" className="form-control w-full border border-gray-300 rounded p-2" name="subject" id="subject" placeholder="Subject" required />
                </div>
                <div className="form-group mt-4">
                  <textarea className="form-control w-full border border-gray-300 rounded p-2" name="message" placeholder="Message" required></textarea>
                </div>
                <div className="my-4">
                  <div className="loading text-gray-600">Loading</div>
                  <div className="error-message text-red-600"></div>
                  <div className="sent-message text-green-600">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center">
                  <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">Send Message</button>
                </div>
              </form>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}

export default Contact;
