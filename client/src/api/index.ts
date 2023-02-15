const API_URL = process.env.REACT_APP_API_URL;

const callApi = async (page: number, query: string | null) => {
  const options = { page, query } as any;
  const result = await fetch(
    `${API_URL}/explore?` + new URLSearchParams(options)
  );
  return result.json();
};

export default callApi;
