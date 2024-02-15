import React, { useState, useEffect } from 'react';
import { Configuration, OpenAIApi } from 'openai';

const API_KEY = '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';
const ORG_ID = 'org-5eOm7MPWBmWq9suLuIAG82Yn';

function ChatGPTPage() {
  const [engines, setEngines] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const configuration = new Configuration({
          organization: ORG_ID,
          apiKey: 'Bearer ' + API_KEY
        });
        const openai = new OpenAIApi(configuration);

        const enginesResponse = await openai.listEngines();
        setEngines(enginesResponse.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="ChatGPTPage">
      <h1>Engines:</h1>
      <ul>
        {engines.map((engine) => (
          <li key={engine.id}>{engine.id}</li>
        ))}
      </ul>
    </div>
  );
}

export default ChatGPTPage;
