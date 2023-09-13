import BlogsItemRouting from "./blogsitem";
import "./home.css";

const blogsList = [
  {
    id: 1,
    title: "My first post",
    description: "A high quality solution beautifully designed for startups",
    publishedDate: "Aug 2nd",
  },
  {
    id: 2,
    title: "My second post",
    description:
      "A high quality solution beautifully designed for startups and Bussiness schools",
    publishedDate: "Mar 1st",
  },
  {
    id: 3,
    title: "My third post",
    description: "A high quality solution beautifully designed for startups",
    publishedDate: "Jan 2nd",
  },
  {
    id: 4,
    title: "My fourth post",
    description:
      "A high quality solution beautifully designed for startups and Bussiness schools. ",
    publishedDate: "Dec 24th",
  },
  {
    id: 5,
    title: "My fifth post",
    description: "A high quality solution beautifully designed for startups",
    publishedDate: "Nov 10th",
  },
];

const HomeBlogs = () => {
  return (
    <div className="blogs-home-container">
      <div className="blogs-profile-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
          alt="profile"
          className="blogs-profile-icon"
        />
        <h2 className="blogs-profile-name">Wade Warren</h2>
        <p className="blogs-job-profile">Software Developer at UK</p>
      </div>
      <ul className="blogs-list-container-routing">
        {blogsList.map((eachItem) => (
          <BlogsItemRouting blogDetails={eachItem} key={eachItem.id} />
        ))}
      </ul>
    </div>
  );
};

export default HomeBlogs;
