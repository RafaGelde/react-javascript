import { useState } from "react";
import Links from "./components/Links";

function App() {
  const [links, setLinks] = useState([
    {
      id: 1,
      title: "GLPI",
      description: "Sistema de requisição de suprimentos",
      link: "https://www.youtube.com/watch?v=2RWsLmu8yVc",
      expand: false,
    },
    {
      id: 2,
      title: "MovTech",
      description: "Sistema de requisição de suprimentos",
      link: "https://www.youtube.com/watch?v=2RWsLmu8yVc",
      expand: false,
    },
    {
      id: 3,
      title: "Fusion",
      description: "Sistema de requisição de suprimentos",
      link: "https://www.youtube.com/watch?v=2RWsLmu8yVc",
      expand: false,
    },
  ]);

  const toggleExpand = (id) => {
    setLinks((prevLinks) =>
      prevLinks.map((link) =>
        link.id === id ? { ...link, expand: !link.expand } : link
      )
    );
  };

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Sistemas da Orbenk
        </h1>
        <Links links={links} onToggle={toggleExpand} />
      </div>
    </div>
  );
}

export default App;
