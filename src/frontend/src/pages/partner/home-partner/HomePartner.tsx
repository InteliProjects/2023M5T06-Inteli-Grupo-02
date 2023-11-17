import { Link } from "react-router-dom";

export default function HomePartner() {
  return (
    <div className="h-full w-full p-[30px] grid">
      <div className="h-full bg-white shadow-md rounded-xl p-4 relative flex items-center">
        <div className="w-[50%] ml-6">
          <h2 className="text-2xl font-bold mb-4">Bem-vindo(a), Parceiro(a)!</h2>
          <p className="text-base mb-4">
            É um prazer tê-lo(a) conosco. Sua criatividade e expertise são
            valiosas para nós. Estamos ansiosos para ouvir suas ideias e
            colaborar em iniciativas empolgantes.
          </p>
          <p className="text-base mb-4">
            Aproveite para enviar sua ideia de iniciativa e juntos transformarmos
            conceitos em realidade. Clique no botão abaixo para compartilhar
            sua visão conosco!
          </p>
          <Link to="/project-registration">
            <button className="bg-red-500 mt-36 ml-44 shadow-md rounded-[10px] px-6 py-2 text-xl text-white hover:bg-red-600">
              Enviar Ideia de Iniciativa
            </button>
          </Link>
        </div>

        <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
          <img
            src="/src/assets/icons/login-image-partner.svg"
            alt="User Icon"
            className="w-[100%] h-[100%]"
          />
        </div>
      </div>
    </div>
  );
}
