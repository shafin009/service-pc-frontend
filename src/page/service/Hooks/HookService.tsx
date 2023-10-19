import { useEffect, useState } from "react";

const HookService = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://pc-service-backends.vercel.app/api/v1/service")
      .then((res) => res.json())
      .then((data) => setServices(data.data));
  }, []);
  return [services, setServices];
};

export default HookService;
