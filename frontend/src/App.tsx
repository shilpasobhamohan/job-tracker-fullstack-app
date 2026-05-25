import { useEffect, useState } from "react";
import axios from "axios";

type Application = {
  company: string;
  position: string;
  status: string;
};

function App() {
  const [applications, setApplications] = useState<Application[]>([]);

  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/applications"
      );

      setApplications(response.data);
    } catch (error) {
      console.error("Error fetching applications", error);
    }
  };

  const addApplication = async () => {
    try {
      await axios.post(
        "http://127.0.0.1:8000/applications",
        {
          company,
          position,
          status,
        }
      );

      setCompany("");
      setPosition("");
      setStatus("");

      fetchApplications();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteApplication = async (
    index: number
  ) => {
    try {
      await axios.delete(
        `http://127.0.0.1:8000/applications/${index}`
      );

      fetchApplications();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "40px auto",
        fontFamily: "Arial",
        padding: "20px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        Job Tracker
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          marginBottom: "30px",
          padding: "20px",
          border: "1px solid lightgray",
          borderRadius: "12px",
        }}
      >
        <input
          placeholder="Company"
          value={company}
          onChange={(e) =>
            setCompany(e.target.value)
          }
          style={{
            padding: "12px",
            borderRadius: "8px",
          }}
        />

        <input
          placeholder="Position"
          value={position}
          onChange={(e) =>
            setPosition(e.target.value)
          }
          style={{
            padding: "12px",
            borderRadius: "8px",
          }}
        />

        <input
          placeholder="Status"
          value={status}
          onChange={(e) =>
            setStatus(e.target.value)
          }
          style={{
            padding: "12px",
            borderRadius: "8px",
          }}
        />

        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <button
            onClick={addApplication}
            style={{
              padding: "10px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Add Application
          </button>

          <button
            onClick={fetchApplications}
            style={{
              padding: "10px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Get Applications
          </button>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gap: "20px",
        }}
      >
        {applications.map((app, index) => (
          <div
            key={index}
            style={{
              border: "1px solid lightgray",
              borderRadius: "12px",
              padding: "20px",
              boxShadow:
                "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            <h2>{app.company}</h2>

            <p>
              <strong>Position:</strong>{" "}
              {app.position}
            </p>

            <p>
              <strong>Status:</strong>{" "}
              {app.status}
            </p>

            <button
              onClick={() =>
                deleteApplication(index)
              }
              style={{
                padding: "10px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Delete Application
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;