import { Search, Car, CalendarCheck, Key } from "lucide-react";

const steps = [
    {
        icon: Search,
        title: "Search Cars",
        desc: "Browse hundreds of cars by type, price and location to find the perfect ride."
    },
    {
        icon: Car,
        title: "Choose Your Car",
        desc: "Compare features, pricing and availability to select the best car for your trip."
    },
    {
        icon: CalendarCheck,
        title: "Book Online",
        desc: "Confirm your booking instantly with our secure and simple booking system."
    },
    {
        icon: Key,
        title: "Pick & Drive",
        desc: "Collect your car from the pickup point and enjoy your journey hassle-free."
    },
];

const HowItWorks = () => {
    return (
        <section className="py-20 bg-[#0B0F19] text-white">
            <div className="w-10/12 mx-auto text-center">

                <h2 className="text-4xl font-bold mb-4">How It Works</h2>
                <p className="text-gray-400 max-w-2xl mx-auto mb-16">
                    Renting a car with DriveFleet is quick and easy. Follow these simple
                    steps and hit the road in minutes.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div
                                key={index}
                                className="bg-[#111827] p-8 rounded-2xl hover:scale-105 transition duration-300 shadow-lg"
                            >
                                <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-full bg-indigo-600">
                                    <Icon size={28} />
                                </div>

                                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                                <p className="text-gray-400 text-sm">{step.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;