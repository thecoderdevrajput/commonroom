import  { useState } from "react";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Sample data for dropdowns
  const dropdownData = {
    home: [
      { name: "Overview", description: "Learn more about us", href: "#" },
      { name: "Team", description: "Meet our team", href: "#" },
    ],
    services: [
      { name: "Web Development", description: "Build amazing websites", href: "#" },
      { name: "SEO Optimization", description: "Boost your site ranking", href: "#" },
    ],
    contact: [
      { name: "Email Us", description: "Get in touch", href: "#" },
      { name: "FAQs", description: "Frequently Asked Questions", href: "#" },
    ],
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <div className="text-xl font-bold">MyWebsite</div>
        <div className="flex space-x-4">
          {Object.keys(dropdownData).map((key) => (
            <div
              key={key}
              className="relative"
              onMouseEnter={() => setActiveDropdown(key)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="px-3 py-2 rounded hover:bg-gray-700">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </button>
              {activeDropdown === key && (
                <div className="absolute left-0 mt-2 w-56 bg-white text-gray-900 shadow-lg rounded">
                  {/* Arrow */}
                  <div className="absolute top-[-6px] left-6 w-3 h-3 bg-white rotate-45 transform origin-center"></div>
                  {/* Dropdown Content */}
                  {dropdownData[key].map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      <div className="font-semibold">{item.name}</div>
                      <div className="text-sm text-gray-600">{item.description}</div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
