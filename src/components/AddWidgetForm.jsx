/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addWidget } from "../features/widgetSlice";

const AddWidgetForm = ({ categoryId }) => {
  const [widgetName, setWidgetName] = useState("");
  const [widgetText, setWidgetText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWidget = {
      id: Date.now(),
      name: widgetName,
      text: widgetText,
    };
    dispatch(addWidget({ categoryId, widget: newWidget }));
    setWidgetName("");
    setWidgetText("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={widgetName}
        onChange={(e) => setWidgetName(e.target.value)}
        placeholder="Widget Name"
        className="border p-2 rounded w-full mb-2"
        required
      />
      <input
        type="text"
        value={widgetText}
        onChange={(e) => setWidgetText(e.target.value)}
        placeholder="Widget Text"
        className="border p-2 rounded w-full mb-2"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded shadow-md w-full"
      >
        Add Widget
      </button>
    </form>
  );
};

export default AddWidgetForm;
