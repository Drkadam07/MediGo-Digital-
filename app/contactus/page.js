// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
export default function Contact() {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Ready to Grow Your Practice?</h2>
            <p className="text-xl text-gray-600">
              Get in touch with us to discuss how we can help you achieve your goals.
            </p>
          </div>
  
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              {/* Grid for Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Input */}
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-white border border-gray-300 text-lg py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-gray-600 hover:bg-teal-50 transition-all duration-300"
                  />
                </div>
                {/* Email Input */}
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-white border border-gray-300 text-lg py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-gray-600 hover:bg-teal-50 transition-all duration-300"
                  />
                </div>
              </div>
  
              {/* Phone Input */}
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-white border border-gray-300 text-lg py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-gray-600 hover:bg-teal-50 transition-all duration-300"
                />
              </div>
  
              {/* Message Textarea */}
              <div>
                <textarea
                  placeholder="Your Message"
                  className="w-full bg-white border border-gray-300 text-lg py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-gray-600 hover:bg-teal-50 transition-all duration-300"
                  rows={4}
                />
              </div>
  
              {/* Send Button */}
              <div className="text-center">
                <button className="w-full bg-teal-200 text-lg py-4 px-8 rounded-full hover:bg-teal-300 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-500">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
  