import { useParams } from "react-router-dom";
import { getFlavor } from "../api";

export default function Category() {
  const { categoryId } = useParams();
  const flavor = getFlavor(categoryId);
  return (
    <>
      <h2>{flavor.name}</h2>
      <ul className="session-list">
        {flavor?.sessions.map((session) => (
          <li className="session" key={session.id}>
            <div className="session-content">
              <p className="session-name">{session.name}</p>
              <p>{session.desc}</p>
              <h5>{session.productDetails.ingredients}</h5>
              <p>{session.productDetails.kcal}</p>
              <p>{session.productDetails.recipeHint}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
