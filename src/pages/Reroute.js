import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Reroute = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/welcome", { replace: true });
  }, [navigate]);
};
export default Reroute;
