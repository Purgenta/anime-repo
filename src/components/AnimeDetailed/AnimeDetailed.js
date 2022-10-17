const AnimeDetailed = (props) => {
  const {
    images: { webp },
  } = props.data;
  return (
    <div className="detailed-information">
      <div className="anime-image">
        <img src={webp["large_image_url"]} alt="anime large" />
      </div>
    </div>
  );
};
export default AnimeDetailed;
