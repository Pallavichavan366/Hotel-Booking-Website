import {
  Search,
  CreditCard,
  BadgeCheck,
  ClipboardList,
  Globe,
  Headphones,
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Smart Hotel Search",
    description: "Find hotels quickly with advanced filters and map-based search.",
  },
  {
    icon: CreditCard,
    title: "Secure Online Payments",
    description: "Your payments are protected with industry-grade security.",
  },
  {
    icon: BadgeCheck,
    title: "Best Price Guarantee",
    description: "Book with confidence knowing you get the best available price.",
  },
  {
    icon: ClipboardList,
    title: "Easy Booking Management",
    description: "View, modify, or cancel your bookings effortlessly.",
  },
  {
    icon: Globe,
    title: "Hotels Worldwide",
    description: "Choose from hotels across cities and destinations worldwide.",
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    description: "Our support team is available anytime to assist you.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Why Book With Us
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Everything you need for a smooth, secure, and reliable hotel booking
            experience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center px-6"
              >
                <div className="mb-5 flex items-center justify-center w-14 h-14 rounded-full border border-gray-200">
                  <Icon className="w-7 h-7 text-gray-800" />
                </div>

                <h3 className="text-lg font-medium text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
