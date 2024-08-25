/* eslint-disable react/prop-types */
// import React from "react";
import { useDispatch } from "react-redux";
import { removeWidget } from "../features/widgetSlice";

const Widget = ({ categoryId, widget }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeWidget({ categoryId, widgetId: widget.id }));
  };

  return (
    <div className="h-[200px] rounded-lg flex-col items-start bg-lime-400">
      <div className=" border h-full shadow-md bg-white ">
        <div className="flex justify-between items-center m-5">
          <h3 className="text-lg font-semibold">{widget.name}</h3>
          <button onClick={handleRemove} className="text-red-500">
            &times;
          </button>
        </div>
        <p className="m-5">{widget.text}</p>
      </div>
    </div>
  );
};

export default Widget;
