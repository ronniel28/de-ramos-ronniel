import axios from "axios";
import { useEffect, useState } from "react";
import SeminarModal from "../../components/SeminarModal";

const AdminDashboard = () => {
    const [seminars, setSeminars] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [currentSeminar, setCurrentSeminar] = useState(null);

    useEffect(() => {
        const fetchSeminars = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}seminars`);
                setSeminars(response.data);
                console.log(seminars);
            } catch (err){
                console.error("Error fetching seminars:", err);
            }
        };

        fetchSeminars();
    }, []);

    const handleAddClick = () => {
        setCurrentSeminar(null);
        setShowModal(true);
    }

    return (
        <div>
            <button onClick={handleAddClick} className="btn btn-primary mb-4">
                Add Seminar
            </button>
            <table className="table table-zebra w-full">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Speaker</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {seminars.map((seminar) => (
                        <tr key={seminar._id}>
                            <td>{seminar.title}</td>
                            <td>{seminar.speaker.name}</td>
                            <td>{new Date(seminar.date).toLocaleDateString()}</td>
                            <td>
                                <button
                                    onClick=""
                                    className="btn btn-warning mr-2"
                                    >
                                    Edit
                                    </button>
                                    <button
                                    onClick=""
                                    className="btn btn-error"
                                    >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
                  {/* Modal for adding/editing a seminar */}
      {showModal && (
        <SeminarModal
          seminar={currentSeminar}
          closeModal={() => setShowModal(false)}
          updateSeminars={setSeminars}
        />
      )}
        </div>

    )
}

export default AdminDashboard;