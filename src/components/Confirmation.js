import { useLocation } from "react-router-dom";

export default function Confirmation() {
  const { state } = useLocation();
  return (
    <div className="container">
      <h1>Thank you for subscribing 🍦</h1>
      {state && (
        <>
          <p>
            Dear <strong>{state.name}</strong>,
          </p>
          <p>
            We will contact you soon at <strong>{state.phone}</strong>
          </p>
        </>
      )}
    </div>
  );
}
