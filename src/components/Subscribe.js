import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Subscribe() {
  const navigate = useNavigate();
  const phoneRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/confirmed");
  }

  return (
    <div className="container">
      <h1>Subscribe for Pure Joy Ice Cream Deliveries</h1>
      <p>
        Subscribe for delivery of your favorite ice cream flavors right to your
        door! Leave us your phone number, and let us take care of bringing you
        happiness every month.
      </p>
      <form onSubmit={handleSubmit}>
        <label>
          Phone Number:
          <input
            type="tel"
            name="phone"
            ref={phoneRef}
            placeholder="Your phone number"
          />
        </label>
        <input type="submit" value="Subscribe" />
      </form>
    </div>
  );
}
