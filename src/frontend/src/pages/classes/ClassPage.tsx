import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CourseEntity } from '../../api/entities/course-entity';
import { ClassEntity } from '../../api/entities/class-entity';
import { fetchClasses } from '../../api/services/fetch-classes';
import { fetchCourses } from '../../api/services/fetch-courses';

const ClassPage = () => {
  const { courseId } = useParams();
  console.log('courseId:', courseId);

  const [turmas, setTurmas] = useState<ClassEntity[]>([]);
  const [cursoSelecionado, setCursoSelecionado] = useState<CourseEntity | null>(null);

  useEffect(() => {
    if (courseId) {
      
      fetchCourses()
        .then((courses) => {
          const curso = courses.find((course) => course.id === courseId);
          if (curso) {
            setCursoSelecionado(curso);
          } else {
            console.error('Curso não encontrado');
          }
        })
        .catch((error) => console.error('Erro ao buscar curso:', error));
      
      fetchClasses()
        .then((data) => {
          
          const turmasDoCurso = data.filter((turma) => turma.courseId === courseId);
          setTurmas(turmasDoCurso);
        })
        .catch((error) => console.error('Erro ao buscar turmas:', error));
    }
  }, [courseId]);

  return (
    <div>
      {cursoSelecionado && (
        <h1 className="text-gray-700 text-2xl font-semibold mb-4">Turmas do Curso {cursoSelecionado.courseType}</h1>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {turmas.map((turma) => (
                    <Link
          to={`/sprints`}>
          <div key={turma.id} className="text-gray-700 bg-white rounded-lg p-4 space-y-4 shadow-md hover:shadow-lg cursor-pointer">
            <h2 className="text-lg font-semibold">Orientador(a): {turma.customerName}</h2>
            <p className="text-sm">Início: {new Date(turma.startYear).toLocaleDateString()}</p>
            <p className="text-sm">Curso: {turma.course.courseType}</p>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ClassPage;