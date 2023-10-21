import { Layer } from '../Layer';
export const Drink = ({ name, image, layers }) => {
  return (
    <div className="drink">
      <div className="drink__product">
        <div className="drink__cup">
          <img src={image} alt={name} />
        </div>
        <div className="drink__info">
          <h3>{name}</h3>
          {layers.map((layer) => {
            return <Layer color={layer.color} label={layer.label} />;
          })}
          {/* <div className="layer">
            <div
              className="layer__color"
              style={{ backgroundColor: '#613916' }}
            />
            <div className="layer__label"></div>
          </div> */}
        </div>
      </div>
      <div className="drink__controls">
        <button className="order-btn"></button>
      </div>
    </div>
  );
};
