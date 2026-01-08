const testimonials = [
  {
    name: "Anna Sthesia",
    date: "January 21, 2020",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    name: "Mario Speedwagon",
    date: "January 21, 2020",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    name: "Angelina Juli",
    date: "January 21, 2020",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    quote:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
];

export default function TestimonialSection() {
  return (
    <section className="bg-[#fef6f4] py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-slate-800 mb-14">
          What Our Customers Say
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg px-8 py-10"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />

              <h3 className="text-xl font-semibold text-slate-800">
                {item.name}
              </h3>

              <p className="text-sm text-gray-400 mb-6">{item.date}</p>

              <p className="text-gray-600 leading-relaxed">
                “{item.quote}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
