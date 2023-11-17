import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [partners, setPartners] = useState([]);
  const [initiatives, setInitiatives] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const partnersResponse = await fetch('http://localhost:8080/partners');
        if (!partnersResponse.ok) {
          throw new Error('Erro ao buscar os dados dos parceiros');
        }
        const partnersData = await partnersResponse.json();
        setPartners(partnersData);

        const initiativesResponse = await fetch('http://localhost:8080/initiatives');
        if (!initiativesResponse.ok) {
          throw new Error('Erro ao buscar os dados das iniciativas');
        }
        const initiativesData = await initiativesResponse.json();
        setInitiatives(initiativesData);

        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-auto h-full items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full">
        {loading ? (
          <p>Carregando...</p>
        ) : (
          <Dashboard partners={partners} initiatives={initiatives} />
        )}
      </div>
    </div>
  );
}
