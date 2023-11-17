import { useState } from "react";
import { useCardStore } from "../../../stores/CardStore";
import { Menu, Transition } from "@headlessui/react";
import React from "react";
import TextInput from "../../partner/components/TextInput";

export default function SearchBar() {
  const setFilteredData = useCardStore((state) => state.setFilteredData);
  const initiativeData = useCardStore((state) => state.initiativeData);

  const [selectedStatus, setSelectedStatus] = useState("todos");
  const [searchQuery, setSearchQuery] = useState<string>(""); // Explicitly define the type as string

  const handleStatusChange = (newStatus: string) => {
    setSelectedStatus(newStatus);

    // Filter data based on both status and search query
    filterData(newStatus, searchQuery);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchQuery = event.target.value;
    setSearchQuery(newSearchQuery);

    // Filter data based on both status and search query
    filterData(selectedStatus, newSearchQuery);
  };

  const filterData = (status: string, query: string) => {
    let filteredInitiatives = initiativeData;

    if (status !== "todos") {
      filteredInitiatives = filteredInitiatives.filter(
        (initiative) => initiative.status === status
      );
    }

    if (query) {
      filteredInitiatives = filteredInitiatives.filter((initiative) =>
        initiative.initiativeName.toLowerCase().includes(query.toLowerCase())
      );
    }

    setFilteredData(filteredInitiatives);
  };


  return (
<div className="mb-4 space-y-2">
        <Menu>
        <Menu.Button className="py-1 p-4 rounded bg-gray-200 drop-shadow-[0_4px_4px_rgba(0,0,0,10%)] ring-1 ring-gray-300 flex items-center">
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
            <Menu.Items className="absolute left-[18%] z-10 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none flex items-center">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                    value={selectedStatus}
                      onClick={() => handleStatusChange('todos')}
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
                      onClick={() => handleStatusChange('pendente')}
                      className={`${
                        active ? 'bg-gray-100 text-yellow-600' : 'text-yellow-500'
                      } block px-4 py-2 text-sm w-full text-left`}
                    >
                      Pendente
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => handleStatusChange('em andamento')}
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
                      onClick={() => handleStatusChange('concluído')}
                      className={`${
                        active ? 'bg-gray-100 text-green-600' : 'text-green-500'
                      } block px-4 py-2 text-sm w-full text-left`}
                    >
                      Concluído
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => handleStatusChange('negado')}
                      className={`${
                        active ? 'bg-gray-100 text-red-600' : 'text-red-500'
                      } block px-4 py-2 text-sm w-full text-left`}
                    >
                      Negado
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>

        <TextInput
            placeholder="Pesquisar"
            onChange={handleSearchChange}
            label={""}
            id={""} />

        </Menu>
        </div>
  );
}
