import axios from "axios";
import { useRef } from "react";
import Header from "../../components/Header";

function Dashboard({ token }) {
  const inputRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (token) {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/todos",
          { text: inputRef.current.value },
          {
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "application/json", // Set the content type for the request
            },
          }
        );

        console.log("Post Response:", response.data);
      } catch (error) {
        console.error("Error posting data:", error);
      }
      inputRef.current.value = "";
    }
  };

  function autoResize(event) {
    const textarea = event.target;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  }

  return (
    <div>
      <Header pageName={"Dashboard"} />

      <section className="content">
        <h1 className="content_title">Set Goals</h1>
        <p className="content_description">
          Now you have no tension to remember tasks for daily life. Set tasks
          and feel free...
        </p>

        <form onSubmit={handleSubmit} className="form">
          <textarea
            ref={inputRef}
            className="form_input"
            placeholder="Enter your text here..."
            rows={5}
            onInput={autoResize}
          ></textarea>
          <button type="submit" className="form_button">
            Add Goal
          </button>
        </form>
      </section>
    </div>
  );
}

export default Dashboard;
