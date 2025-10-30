import React from "react";
import Image from "next/image";

interface ITestimonial {
  name: string;
  title: string;
  image: string;
  quote: string;
}

const testimonialsData: ITestimonial[] = [
  {
    name: "Rohan Arora",
    title: "Analyst",
    image: "https://i.imgur.com/g5Yy74z.png",
    quote:
      "Volza has transformed the way we access global trade data - fast, reliable, and incredibly insightful. Highly recommended for smarter business decisions!",
  },
  {
    name: "Priya Sharma",
    title: "Supply Chain Manager",
    image: "https://i.imgur.com/Jkzj3l7.png",
    quote:
      "The platform is intuitive and powerful. We identified new markets and suppliers within weeks of using Volza. A game-changer for our business.",
  },
  {
    name: "Rohan Arora",
    title: "Analyst",
    image: "https://i.imgur.com/g5Yy74z.png",
    quote:
      "Volza has transformed the way we access global trade data - fast, reliable, and incredibly insightful. Highly recommended for smarter business decisions!",
  },
  {
    name: "Priya Sharma",
    title: "Supply Chain Manager",
    image: "https://i.imgur.com/Jkzj3l7.png",
    quote:
      "The platform is intuitive and powerful. We identified new markets and suppliers within weeks of using Volza. A game-changer for our business.",
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold mb-6 text-center text-white/90">
        Trusted By 1 Million+ Users
      </h2>
      <div className="testimonial-container relative w-full overflow-hidden">
        <div className="flex w-max animate-slide">
          {[...testimonialsData, ...testimonialsData].map(
            (testimonial, index) => (
              <div
                key={index}
                className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-2xl 
                                w-96 mx-4 flex-shrink-0 border border-white/20
                                text-gray-800"
              >
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={56}
                    height={56}
                    className="w-14 h-14 rounded-full border-2 border-gray-200"
                  />
                  <div className="ml-4">
                    <h3 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-500 text-sm">{testimonial.title}</p>
                  </div>
                  <div className="ml-auto text-yellow-400 flex text-xl">
                    {"★★★★★"}
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {testimonial.quote}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
