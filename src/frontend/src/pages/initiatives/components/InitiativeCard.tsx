import { Link } from 'react-router-dom';
import { useCardStore } from '../../../stores/CardStore';
import ProjectCard from './../../partner/components/IniciativeCard';

export default function InitiativeCard() {
  const filteredData = useCardStore((state) => state.filteredData);

  return (
    <div className="bg-white rounded-lg drop-shadow-[0_4px_4px_rgba(0,0,0,10%)] p-6"> 
     <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">

      {filteredData.map((initiative) => (
      <Link to={`/status-initiative/${initiative.id}`} key={initiative.id} className="hover:cursor-pointer">
          <ProjectCard
            key={initiative.initiativeName}
            title={initiative.initiativeName}
            description={initiative.scope}
            status={initiative.status}
            analystRate={initiative.analystRate}
            textFeedback={initiative.textFeedback}
          />
        </Link>
      ))}
    </div></div>


  );
}