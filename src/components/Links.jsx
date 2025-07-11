import { ArrowDown } from "lucide-react";

function Links({ links, onToggle }) {
  return (
    <ul className="space-y-4">
      {links.map((link) => (
        <li
          key={link.id}
          className="bg-slate-300 p-4 rounded-md text-slate-800"
        >
          <div className="flex justify-between items-center">
            <span>{link.title}</span>
            <button
              onClick={() => onToggle(link.id)}
              className="bg-slate-500 text-white rounded px-2 py-1 transition-tranform duration-300"
            >
              <ArrowDown
                className={`w-5 h-5 transform transition-transform duration-300 ${
                  link.expand ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
          </div>
          {link.expand && (
            <div className="mt-2 text-sm">
              <p>{link.description}</p>
              <a
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Acessar sistema
              </a>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

export default Links;
