```jsx
// TODO 1:
// Create a Recipe component.

function Recipe() {
  return (
    <div className="container">
      <div className="row">

        {/* Card 1 */}
        <div className="col-4">
          <div className="card" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src="image1.jpg"
              alt="CHICKEN NOODLES SOUP"
            />

            <div className="card-body">
              <h1 className="card-title">Chicken Noodles Soup</h1>

              <ul className="list-group list-group-flush">
  <li className="list-group-item">1 yellow onion</li>
  <li className="list-group-item">2 medium carrots</li>
</ul>

              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-4">
          <div className="card" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src="img2.jpg"
              alt="CURRIED EGG SALAD"
            />

            <div className="card-body">
              <h5 className="card-title">Curried Egg</h5>

              <ul className="list-group list-group-flush">
  <li className="list-group-item">1 yellow onion</li>
  <li className="list-group-item">2 medium carrots</li>
</ul>

              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-4">
          <div className="card" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src="image3.jpg"
              alt="OAT CLUSTERS"
            />

            <div className="card-body">
              <h5 className="card-title">Oat Cluster</h5>

           <ul className="list-group list-group-flush">
  <li className="list-group-item">1 yellow onion</li>
  <li className="list-group-item">2 medium carrots</li>
</ul>

              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// TODO 2:
// Create the React Root.

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

// TODO 3:
// Render the Recipe component.

root.render(<Recipe />);
```
