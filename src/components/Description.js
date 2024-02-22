import { useParams } from "react-router-dom";
import { getSession } from "../api";

export default function Description() {
  const { categoryId, sessionId } = useParams();

  const { productDetails } = getSession({ categoryId, sessionId });

  return (
    <div style={{ display: "flex", width: "100%" }}>
      <div style={{ flex: 1 }}>
        <img
          src={`${process.env.PUBLIC_URL}/assets/${productDetails.image}`}
          alt={productDetails.ingredients}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div style={{ flex: 1, padding: "20px" }}>
        {" "}
        {/* Add some padding for text */}
        <h4>{productDetails.ingredients}</h4>
        <p>{productDetails.kcal}</p>
        <p>{productDetails.recipeHint}</p>
      </div>
    </div>
  );
}
