export const Card = () => {
  return (
    <div className="card">
      <div className="close">x</div>
      <h3>Tarea 1</h3>
      <h6>24/03/2022 12:12 hs.</h6>
      <h5>Facundo Uferer</h5>
      <div className="card--btn">
        <button type="button">Nueva</button>
        <button type="button">Alta</button>
      </div>
      <p>Descripción lorem</p>
    </div>
  );
};
