import { useEffect, useState } from "react";
import { getQuizByUser } from "../../services/apiService";
import "./ListQuizlet.scss";
import { useNavigate } from "react-router-dom";

function ListQuizlet(props) {
  const navigate = useNavigate();
  const [arrQuiz, setArrQuiz] = useState([]);

  useEffect(() => {
    getQuizData();
  }, []);

  const getQuizData = async () => {
    let res = await getQuizByUser();
    console.log("check res", res);

    if (res && res.EC === 0) {
      setArrQuiz(res.DT);
    }
  };
  return (
    <div className="list-quiz-container container">
      {arrQuiz &&
        arrQuiz.length > 0 &&
        arrQuiz.map((quiz, index) => {
          return (
            <div
              key={`${index} -quiz`}
              className="card"
              style={{ width: "18rem" }}
            >
              <img
                src={`data:image/gif;base64,${quiz.image}`}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Quiz {index + 1}</h5>
                <p className="card-text">{quiz.description}</p>
                <button
                  className="btn btn-primary"
                  onClick={() =>
                    navigate(`/quiz/${quiz.id}`, {
                      state: { quizTitle: quiz.description },
                    })
                  }
                >
                  Start Now
                </button>
              </div>
            </div>
          );
        })}
      {arrQuiz && arrQuiz.length === 0 && (
        <div> You don't have any Quizlet now...</div>
      )}
    </div>
  );
}

export default ListQuizlet;
