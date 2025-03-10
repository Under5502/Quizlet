import videoHomePage from "../../assets/video-homepage.mp4";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function HomePage(props) {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      <video autoPlay muted loop>
        <source src={videoHomePage} type="video/mp4" />
      </video>
      <div className="homepage-content">
        <div className="title-1">What is Quizlet?</div>
        <div className="title-2">
          Quizlet is a leading online learning platform that helps students
          learn faster through flashcards, review games, and automated quizzes.
        </div>
        <div className="title-3">
          {isAuthenticated === false ? (
            <button onClick={() => navigate("/login")}>
              Get's started. It's free
            </button>
          ) : (
            <button onClick={() => navigate("/users")}>
              Doing Quizlet Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
