export const Card = ( {data: {title, dateTime, creator, description, type, priority }} ) => {
  return (
    <div className="card">
      <div className="close">x</div>
      <h3>{title}</h3>
      <h6>{dateTime}</h6>
      <h5>{creator}</h5>
      <div className="card--btn">
        <button type="button">{type}</button>
        <button type="button">{priority}</button>
      </div>
      <p>{description}</p>
    </div>
  );
};
