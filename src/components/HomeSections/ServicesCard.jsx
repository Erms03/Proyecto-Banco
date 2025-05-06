import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

export const ServiceCard = ({ icon: Icon, title, description, link }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow group">
      <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
        <Icon className="h-7 w-7 text-green-600 group-hover:text-white transition-colors" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <Link
        to={link}
        className="inline-flex items-center text-green-600 font-medium group-hover:text-green-700"
      >
        Conocer más
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
};
