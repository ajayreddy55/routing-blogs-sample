import "./home.css";

const BlogsItemRouting = (props) => {
  const { blogDetails } = props;
  const { title, description, publishedDate } = blogDetails;

  return (
    <li className="blogs-list-item-routing">
      <div className="d-flex align-items-center justify-content-between mb-2 mt-2">
        <h3 className="blogs-list-name-text">{title}</h3>
        <p className="blogs-list-date">{publishedDate}</p>
      </div>
      <p className="blogs-list-text">{description}</p>
    </li>
  );
};

export default BlogsItemRouting;
