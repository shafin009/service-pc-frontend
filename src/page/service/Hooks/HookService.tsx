import { useEffect, useState } from "react";

const HookService = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/service")
      .then((res) => res.json())
      .then((data) => setServices(data.data));
  }, []);
  return [services, setServices];
};

export default HookService;
