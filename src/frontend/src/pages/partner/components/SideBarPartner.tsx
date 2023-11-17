import { Link, useLocation } from 'react-router-dom';
import logo from '/src/assets/icons/SimboloInteli.svg';

export default function SidebarPartner() {
  const location = useLocation();

  const isPageActive = (path: string) => {
    // Verifique se a localização atual corresponde ao caminho fornecido
    return location.pathname === path;
  };

  return (
    <div className="bg-[#2D253F] p-4 flex flex-col h-screen w-[17%] fixed left-0 top-0 ">
      <div className="z-[2] bg-[#2D253F] p-4 flex flex-col h-full w-[17%] fixed left-0 top-0">
        <Link to="/home-partner">
          <img src={logo} alt="Logo" className="mb-4 w-11 h-11" />
        </Link>

        <div className="flex-grow flex flex-col justify-center items-center">
          <ul className="flex flex-col space-y-5 items-start">
            <li className="w-full">
              <Link
                to="/home-partner"
                className={`font-poppins text-lg block w-full text-left transition-colors duration-300 ease-in-out hover:bg-gray-400 hover:text-black pl-6 pr-8 rounded-lg ${
                  isPageActive('/home-partner') ? 'bg-white text-black' : 'text-white'
                }`}
              >
                Página inicial
              </Link>
            </li>
            <li className="w-full">
              <Link
                to="/project-registration"
                className={`font-poppins text-lg block w-full text-left transition-colors duration-300 ease-in-out hover:bg-gray-400 hover:text-black pl-6 pr-8 rounded-lg ${
                  isPageActive('/project-registration') ? 'bg-white text-black' : 'text-white'
                }`}
              >
                Cadastrar projeto
              </Link>
            </li>
            <li className="w-full">
              <Link
                to="/projects-page"
                className={`font-poppins text-lg block w-full text-left transition-colors duration-300 ease-in-out hover:bg-gray-400 hover:text-black pl-6 pr-8 rounded-lg ${
                  isPageActive('/projects-page') ? 'bg-white text-black' : 'text-white'
                }`}
              >
                Minhas Iniciativas
              </Link>
            </li>
          </ul>
        </div>

        <Link to="/" className="mt-auto">
          <button className="text-[#fff] py-2 px-4 text-lg w-full">Sair</button>
        </Link>
      </div>
    </div>
  );
}
