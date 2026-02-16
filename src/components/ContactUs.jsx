import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactUs() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ixk1fom",
        "template_brqb0me",
        form.current,
        "a0HZ13sKlMSegtqJL"
      )
      .then(
        () => {
          alert("Message Sent Successfully ✅");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message ❌");
          console.log(error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="bg-[#fefeff] py-20 px-6 lg:px-16"
    >
      <h2 className="text-4xl font-bold text-center text-[#f26104] mb-14">
        Contact Us
      </h2>

      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT - SEND MESSAGE */}
          <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col">

            <h3 className="text-3xl font-bold text-[#525252] mb-8">
              Send Message
            </h3>

            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">

              <input
                type="text"
                name="user_name"
                placeholder="Enter Your Name"
                required
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-[#f26104]"
              />

              <input
                type="email"
                name="user_email"
                placeholder="Enter Your Email"
                required
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-[#f26104]"
              />

              <input
                type="tel"
                name="user_phone"
                placeholder="Enter Your Mobile Number"
                required
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-[#f26104]"
              />

              <textarea
                rows="5"
                name="message"
                placeholder="Enter Your Message"
                required
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-[#f26104]"
              />

              <button
                type="submit"
                className="bg-[#f26104] text-white font-semibold py-3 rounded-full hover:scale-105 transition"
              >
                Submit
              </button>

            </form>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-10">

            {/* SHOP ADDRESS */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">

              <h3 className="text-3xl font-bold text-[#525252] mb-8">
                Shop Address
              </h3>

              <div className="space-y-6 text-lg text-gray-700">

                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-4 hover:text-[#f26104] transition"
                >
                  <FaPhoneAlt className="text-[#f26104] text-xl" />
                  +91 98765 43210
                </a>

                <a
                  href="mailto:aravindha354@gmail.com"
                  className="flex items-center gap-4 hover:text-[#f26104] transition"
                >
                  <FaEnvelope className="text-[#f26104] text-xl" />
                  yourgmail@gmail.com
                </a>

                <a
                  href="https://maps.google.com/?q=Sivakasi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 hover:text-[#f26104] transition"
                >
                  <FaMapMarkerAlt className="text-[#f26104] text-xl mt-1" />
                  <span>
                    123, Main Road,<br />
                    Near Bus Stand,<br />
                    Sivakasi, Tamil Nadu - 626123
                  </span>
                </a>

              </div>
            </div>

            {/* MAP */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                title="Sivakasi Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31485.0848729687!2d77.77152667288891!3d9.453315450049965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06cfb7d31cce6d%3A0xa5da865036326b4e!2sSRT%20CRACKERS!5e0!3m2!1sen!2sin!4v1771224007362!5m2!1sen!2sin"
                className="w-full h-[350px]"
                loading="lazy"
              ></iframe>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
