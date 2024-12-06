import axios from "axios";
import { useEffect, useState } from "react";

const SeminarModal = ({ seminar, closeModal, updateSeminars }) => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        date: "",
        timeFrame: {
            from: "",
            to: ""
        },
        venue: "",
        speaker: {
            name: "",
            image: "",
            linkedin: ""
        },
        fee: "",
        slotsAvailable: 0
    });

    useEffect(() => {
        if(seminar) {
            setFormData({
                title: seminar.title,
                description: seminar.description,
                date: seminar.date,
                timeFrame: {
                  from: seminar.timeFrame.from,
                  to: seminar.timeFrame.to,
                },
                venue: seminar.venue,
                speaker: {
                  name: seminar.speaker.name,
                  image: seminar.speaker.image,
                  linkedin: seminar.speaker.linkedin,
                },
                fee: seminar.fee,
                slotsAvailable: seminar.slotsAvailable,
        
            });
        }
    },[seminar]);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
    
        if (name.includes("timeFrame")) {
          const field = name.split(".")[1];
          setFormData((prev) => ({
            ...prev,
            timeFrame: {
              ...prev.timeFrame,
              [field]: value,
            },
          }));
        } else if (name.includes("speaker")) {
          const field = name.split(".")[1];
          setFormData((prev) => ({
            ...prev,
            speaker: {
              ...prev.speaker,
              [field]: value,
            },
          }));
        } else {
          setFormData((prev) => ({ ...prev, [name]: value }));
        }
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");
        console.log(token)
        const method = seminar ? "put" : "post";
        const url = seminar ? `${import.meta.env.VITE_API_URL}seminars/${seminar._id}` : `${import.meta.env.VITE_API_URL}seminars`;
    
        try {
          const response = await axios[method](url, formData, {
            headers: {
              Authorization: `Bearer ${token}`,
            }
          });
          console.log(response, 'response');
          if (seminar) {
            updateSeminars((prev) =>
              prev.map((s) => (s._id === response.data._id ? response.data : s))
            );
          } else {
            console.log('hello');
            updateSeminars((prev) => [...prev, response.data]);
          }
          closeModal();
        } catch (error) {
          console.error("Error saving seminar:", error);
        }
      };
    
      return (
        <div className="modal modal-open">
          <div className="modal-box">
            <h2>{seminar ? "Edit Seminar" : "Add Seminar"}</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Seminar Title"
                required
                className="input input-bordered w-full my-2"
              />
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Seminar Description"
                required
                className="textarea textarea-bordered w-full my-2"
              />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="input input-bordered w-full my-2"
              />
              <div className="flex gap-4">
                <input
                  type="time"
                  name="timeFrame.from"
                  value={formData.timeFrame.from}
                  onChange={handleChange}
                  required
                  className="input input-bordered w-full my-2"
                />
                <input
                  type="time"
                  name="timeFrame.to"
                  value={formData.timeFrame.to}
                  onChange={handleChange}
                  required
                  className="input input-bordered w-full my-2"
                />
              </div>
              <input
                type="text"
                name="venue"
                value={formData.venue}
                onChange={handleChange}
                placeholder="Venue"
                required
                className="input input-bordered w-full my-2"
              />
              <input
                type="text"
                name="speaker.name"
                value={formData.speaker.name}
                onChange={handleChange}
                placeholder="Speaker Name"
                required
                className="input input-bordered w-full my-2"
              />
              <input
                type="text"
                name="speaker.image"
                value={formData.speaker.image}
                onChange={handleChange}
                placeholder="Speaker Image URL"
                className="input input-bordered w-full my-2"
              />
              <input
                type="text"
                name="speaker.linkedin"
                value={formData.speaker.linkedin}
                onChange={handleChange}
                placeholder="Speaker LinkedIn"
                className="input input-bordered w-full my-2"
              />
              <input
                type="number"
                name="fee"
                value={formData.fee}
                onChange={handleChange}
                placeholder="Fee"
                required
                className="input input-bordered w-full my-2"
              />
              <input
                type="number"
                name="slotsAvailable"
                value={formData.slotsAvailable}
                onChange={handleChange}
                placeholder="Available Slots"
                required
                className="input input-bordered w-full my-2"
              />
              <div className="modal-action">
                <button type="button" onClick={closeModal} className="btn btn-ghost">
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  {seminar ? "Update" : "Add"} Seminar
                </button>
              </div>
            </form>
          </div>
        </div>
      );
};

export default SeminarModal;