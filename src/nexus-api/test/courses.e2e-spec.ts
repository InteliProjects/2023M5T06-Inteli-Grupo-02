import axios from 'axios';
import https from 'https';

describe('Exemplo de teste para requisição HTTP', () => {
  it('Fazer uma solicitação HTTP sem erros', async () => {
    const agent = new https.Agent({ rejectUnauthorized: false, secureProtocol: 'TLSv1_2_method' });

    try {
      const response = await axios.get('https://localhost:8080/courses', { httpsAgent: agent });
      expect(response.status).toBe(200);
    } catch (error) {
      throw error;
    }
  });
});
