/* eslint-disable react/prop-types */
// import React from "react";
import Widget from "../components/Widget";

const Category = ({ category }) => {
  // console.log(category.widgets)
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">{category.name}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {category.widgets.map((widget) => (
          <Widget key={widget.id} categoryId={category.id} widget={widget} />
        ))}
      </div>
    </div>
  );
};

export default Category;
