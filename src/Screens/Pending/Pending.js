import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/Header";
import { useToken } from "../../context/tokenContext";

function Pending() {
  const [data, setData] = useState([]);
  const { token } = useToken();

  useEffect(() => {
    fetchData(token);
  }, [token]);

  const fetchData = async (token) => {
    try {
      const response = await axios.get("http://localhost:5000/api/todos", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = async (itemId) => {
    try {
      await axios.delete(`http://localhost:5000/api/todos/${itemId}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      fetchData(token);
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const ItemList = ({ items }) => {
    return (
      <div className="itemListContainer">
        {items.map((item) => (
          <div key={item._id} className="singleItem">
            <div className="allDataExceptbuttons">
              <p className="goalText">Goal</p>
              <p className="itemText">{item.text}</p>
              <p className="craetedAtText">Created At</p>
              <p className="itemCreatedAt">
                {new Date(item.createdAt).toLocaleString()}
              </p>
            </div>

            <div className="updateAndDelete">
              <button className="update_button">Update</button>

              <button
                onClick={() => handleDelete(item._id)}
                className="delete_button"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };
  return (
    <div>
      <Header pageName={"Pending Goals"} />
      {data ? (
        <div className="tasksArea">
          <h1 className="myTasKHeading">My Tasks</h1>
          <ItemList items={data} />
        </div>
      ) : (
        <div className="noData-set">
          <p>No Data to display</p>
        </div>
      )}
    </div>
  );
}

export default Pending;
