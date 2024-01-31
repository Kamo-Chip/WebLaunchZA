import Image from "next/image";

const Testimonial = ({
  imgSrc,
  testimonialText,
  siteLink,
  profileLink,
  clientDetails,
}) => {
  return (
    <div className="testimonial" data-aos="fade-up" data-aos-easing="ease">
      <Image
        src={imgSrc}
        alt={clientDetails}
        width={100}
        height={100}
        style={{ objectPosition: "center", objectFit: "contain" }}
        className="testimonialImg"
      />
      <span className="testimonialText">
        {testimonialText}
        <br />
        <br />
        <b>{clientDetails}</b>
        <br />
        {siteLink ? (
          <>
            <a href={siteLink} target="_blank" rel="noreferrer">
              View website
            </a>
            <br />
          </>
        ) : null}
        {profileLink ? (
          <>
            <a href={profileLink} target="_blank" rel="noreferrer">
              View profile
            </a>
          </>
        ) : null}
      </span>
    </div>
  );
};

export default Testimonial;
