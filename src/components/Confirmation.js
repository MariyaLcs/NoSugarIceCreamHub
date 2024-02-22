import { useLocation } from "react-router-dom";

export default function Confirmation() {
  const { state } = useLocation();
  return (
    <div className="container">
      {state && (
        <p>
          Dear <strong>{state.name}</strong>,
        </p>
      )}
      <h1>Thank you for subscribing 🍦</h1>
      {state && (
        <p>
          We will contact you soon at <strong>{state.phone}</strong>
        </p>
      )}
    </div>
  );
}
