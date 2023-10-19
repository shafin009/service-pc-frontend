import { useEffect, useState } from "react";

const useServiceData = (id: any) => {
  const [service, setService] = useState<any | null>(null);

  useEffect(() => {
    const apiUrl = `http://localhost:5000/api/v1/service/${id}`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setService(data.data));
  }, [id]);

  return service;
};

export default useServiceData;
