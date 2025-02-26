import videoHomePage from "../../assets/video-homepage.mp4";
function HomePage(props) {
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
          <button>Get's started. It's free</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
