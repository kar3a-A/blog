


const Blog = (props) => {
  // eslint-disable-next-line react/prop-types
  const { key,image, name,age , power} = props;

  return (
    <div className="cardList">
      <div key={key} className="blogCard">
        <img src={image} alt="blog-img" className="blogImage" />
        <br />

        <div className="blog_content">
          <h3 className="blogName">{name}</h3>
          <h4>Age - {age}</h4>
          <h4>Power : {power}</h4>
        </div>
      </div>
    </div>
  );
};

export default Blog