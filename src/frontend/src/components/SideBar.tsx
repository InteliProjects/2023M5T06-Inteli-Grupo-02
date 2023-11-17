import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/icons/SimboloInteli.svg';
import { useLocation } from 'react-router-dom';
import { fetchCourses } from '../api/services/fetch-courses';
import { CourseEntity } from '../api/entities/course-entity';

export default function Sidebar() {
  const location = useLocation();
  const [allocationOpen, setAllocationOpen] = useState(false);
  const [courses, setCourses] = useState<CourseEntity[]>([]); 

  useEffect(() => {
    fetchCourses()
      .then((data) => {
        setCourses(data);
      })
      .catch((error) => console.error('Erro ao buscar cursos:', error));
  }, []);

  const toggleAllocation = () => {
    setAllocationOpen(!allocationOpen);
  };

  const isPageActive = (path: string) => {
    return location.pathname === path;
  };
  return (
    <div className="bg-[linear-gradient(rgb(45,37,63)_23.61%,rgb(40,33,55)_43.94%)] p-4 flex flex-col h-screen w-[17%] fixed left-0 top-0">
      <Link to="/">
        <img src={logo} alt="Logo" className="mb-4 w-11 h-11" />
      </Link>

      <div className="flex-grow flex flex-col justify-center items-center">
        <ul className="flex flex-col space-y-5 items-start">
          <li className="w-full">
            <Link
              to="/home"
              className={`font-poppins text-lg block w-full text-left transition-colors duration-300 ease-in-out hover:bg-gray-400 hover:text-black pl-6 pr-10 rounded-lg ${
                isPageActive('/home') ? 'bg-white text-black' : 'text-white'
              }`}
            >
              Visão Geral
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="/initiatives"
              className={`font-poppins text-lg block w-full text-left transition-colors duration-300 ease-in-out hover:bg-gray-400 hover:text-black pl-6 pr-10 rounded-lg ${
                isPageActive('/initiatives') ? 'bg-white text-black' : 'text-white'
              }`}
            >
              Iniciativas
            </Link>
          </li>
          <li className="w-full">
            <div
              className={`flex items-center justify-between w-full text-left transition-colors duration-300 ease-in-out hover:bg-gray-400 hover:text-black pl-6 pr-10 rounded-lg cursor-pointer ${
                isPageActive('/alocation') ? 'bg-white text-black' : 'text-white'
              }`}
              onClick={toggleAllocation}
            >
              <span className="gap-2 flex items-center">
                Cursos{' '}
                <span
                  className={` rotate-[0deg] transform transition-transform duration-300 ${
                    allocationOpen ? 'rotate-[90deg]' : ''
                  }`}
                >
                  {">"}
                </span>
              </span>
            </div>
            {allocationOpen && (
  <ul className="ml-6 mt-2 text-xs">
    {courses.map((course) => (
      <li key={course.id} className="w-full">
        <Link
          to={`/courses/${course.id}/classes`}
          className={`font-poppins block w-full transition-colors duration-300 ease-in-out hover:bg-gray-400 hover:text-black pl-3 py-2 rounded-lg ${
            isPageActive(`/courses/${course.id}/classes`) ? 'bg-white text-black' : 'text-white'
          }`}
        >
          {course.courseType}
        </Link>
      </li>
    ))}
  </ul>
)}
          </li>
        </ul>
      </div>

      <Link to="/" className="mt-auto">
        <button className="text-[#fff] py-2 px-4 text-lg w-full">
          Sair
        </button>
      </Link>
    </div>
  );
}
