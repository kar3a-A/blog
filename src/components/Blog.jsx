import { Si1001Tracklists } from 'react-icons/si'


const Blog = (props) => {
  // eslint-disable-next-line react/prop-types
  const { key,image, name } = props;

  return (
    <div className="cardList">
      <div key={key} className="productCard">
        <img src={image} alt="blog-img" className="blogImage" />
        <Si1001Tracklists className="blog-icon" />
        <div className="blog_content">
          <h3 className="blogName">{name}</h3>
        </div>
      </div>
    </div>
  );
};

export default Blog