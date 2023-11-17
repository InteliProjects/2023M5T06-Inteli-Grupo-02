import React, { useEffect, useState } from 'react';
import ProjectCard from '../components/IniciativeCard';
import TextInput from '../components/TextInput';
import { Menu, Transition } from '@headlessui/react';
import { fetchInitiatives } from "../../../api/services/fetch-Initiatives";

interface Project {
  title: string;
  description: string;
  status: string;
  analystRate: number;
  textFeedback: string;
}

const ProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const initiativesData = await fetchInitiatives();
        const userId = localStorage.getItem('userId');
        const projectsData = initiativesData
          .filter((initiative) => initiative.partnerId === userId)
          .map((initiative) => ({
            title: initiative.initiativeName,
            description: initiative.scope,
            status: initiative.status,
            analystRate: initiative.analystRate,
            textFeedback: initiative.textFeedback,
          }));

        setProjects(projectsData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const filteredProjects = projects.filter(
    (project) =>
      (filter === 'all' || project.status === filter) &&
      (searchQuery === '' || project.title.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="flex items-center drop-shadow-[0_4px_4px_rgba(0,0,0,10%)] justify-center flex-col h-full w-full">
      <div className="m-8 p-8 rounded-xl bg-white h-full w-full">
        <div className="mb-4">
          <TextInput
            label="Pesquisar"
            id="search"
            placeholder="Digite para pesquisar..."
            onChange={(event) => setSearchQuery(event.target.value)}
          />
        </div>
        <div className="mb-4 space-x-2">
        <Menu>
        <Menu.Button className="ml-[93%] py-1 p-4 rounded bg-gray-200 drop-shadow-[0_4px_4px_rgba(0,0,0,10%)] ring-1 ring-gray-300 flex items-center">
            <span className="text-gray-500 mr-1 text-sm">Filtro</span>

            <img src="/src/assets/icons/dropdownIcon.svg" />

          </Menu.Button>
          <Transition
            as={React.Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none flex items-center">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => setFilter('all')}
                      className={`${
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-500'
                      } block px-4 py-2 text-sm w-full text-left`}
                    >
                      Todos
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => setFilter('pendente')}
                      className={`${
                        active ? 'bg-gray-100 text-yellow-600' : 'text-yellow-500'
                      } block px-4 py-2 text-sm w-full text-left`}
                    >
                      Em espera
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => setFilter('em andamento')}
                      className={`${
                        active ? 'bg-gray-100 text-blue-600' : 'text-blue-500'
                      } block px-4 py-2 text-sm w-full text-left`}
                    >
                      Em andamento
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => setFilter('concluído')}
                      className={`${
                        active ? 'bg-gray-100 text-green-600' : 'text-green-500'
                      } block px-4 py-2 text-sm w-full text-left`}
                    >
                      Concluído
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-4">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              status={project.status}
              analystRate={project.analystRate}
              textFeedback={project.textFeedback}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
