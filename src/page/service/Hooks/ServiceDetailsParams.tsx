import { useEffect, useState } from "react";

const useServiceData = (id: any) => {
  const [service, setService] = useState<any | null>(null);

  useEffect(() => {
    const apiUrl = `https://pc-service-backends.vercel.app/api/v1/service/${id}`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setService(data.data));
  }, [id]);

  return service;
};

export default useServiceData;
