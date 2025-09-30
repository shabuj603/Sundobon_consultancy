import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function CalendarModal() {
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
const name = "my name is Dekko";
  return (

    <div className="lg:float-left max:sm:flex">
      {/* Button */}
      
      <button
        onClick={() => setShowModal(true)}
        className="px-2 py-1 bg-blue-600 cursor-pointer text-white rounded-2xl shadow hover:bg-blue-800"
      >
        Book Meeting
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-start justify-center bg-black/50">
          <div className="bg-white rounded-2xl p-6 shadow-xl w-80">
            <h2 className="text-lg font-semibold mb-4">Select Date</h2>
            
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              inline
            />

            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
