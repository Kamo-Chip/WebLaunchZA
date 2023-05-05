const Item = ({
  serviceName,
  price,
  salePrice,
  tagLine,
  perkList,
  furtherPerkList,
}) => {
  return (
    <div className="item" data-aos="fade-left" data-aos-easing="ease">
      <h3>{serviceName}</h3>
      {serviceName === "Website design & development" ||
      serviceName === "Starter" ||
      serviceName === "Google Business Pack" ? (
        <span
          style={{
            position: "absolute",
            backgroundColor: "#00cbba",
            color: "#fff",
            fontFamily: "grifter, sans-serif",
            fontSize: "1.25rem",
            borderRadius: "20px",
            transform: "rotate(-10deg) translate(-15%, -40px)",
            padding: ".5em",
            height: "fit-content",
          }}
        >
          <b>
            {serviceName === "Website design & development"
              ? "Most popular"
              : serviceName === "Starter"
              ? "Save R500"
              : "Save R200"}
          </b>
        </span>
      ) : null}
      {!salePrice ? (
        <span
          className="price"
          dangerouslySetInnerHTML={{ __html: `R ${price}` }}
        />
      ) : (
        <span className="price"><span style={{marginRight: ".5em", color: "grey"}}><s>R {price}</s></span> R {salePrice}</span>
      )}
      <p style={{ textAlign: "center" }}>{tagLine}</p>
      <ul>
        {perkList.map((perk, idx) => {
          return <li key={"perkList" + idx}>{perk}</li>;
        })}
        {furtherPerkList ? (
          <>
            <li>The service includes:</li>
            <div>
              {furtherPerkList.map((perk, idx) => {
                return <li key={"fPerkList" + idx}>{perk}</li>;
              })}
            </div>
          </>
        ) : null}
      </ul>
    </div>
  );
};

export default Item;
