/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeWidget, setSelectedWidgets} from "../features/widgetSlice";

const Sidebar = ({ isOpen, onClose, categories }) => {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const selectedWidgets = useSelector((state) => state.widgets.selectedWidgets);
  const [openCategory, setOpenCategory] = useState(null);
  const [localSelectedWidgets, setLocalSelectedWidgets] = useState([]);

  
  useEffect(() => {
    const allWidgetIds = categories.flatMap((category) =>
      category.widgets.map((widget) => widget.id)
    );
    setLocalSelectedWidgets(allWidgetIds);
    dispatch(setSelectedWidgets(allWidgetIds));
  }, [categories, dispatch]);

  const toggleCategory = (categoryId) => {
    setOpenCategory(openCategory === categoryId ? null : categoryId);
  };

  const handleCheckboxChange = (widgetId) => {
    setLocalSelectedWidgets((prev) => {
      if (prev.includes(widgetId)) {
        return prev.filter((id) => id !== widgetId);
      } else {
        return [...prev, widgetId];
      }
    });
  };

  const handleConfirm = () => {
    
    dispatch(setSelectedWidgets(localSelectedWidgets));

    categories.forEach((category) => {
      category.widgets.forEach((widget) => {
        if (!localSelectedWidgets.includes(widget.id)) {
          dispatch(
            removeWidget({
              categoryId: category.id,
              widgetId: widget.id,
            })
          );
        }
      });
    });

    onClose();
  };

  return (
    <div
      className={`fixed top-0 right-0 w-[30rem] h-full bg-white shadow-lg transform transition-transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } z-50`}
    >
      <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <h3 className="text-lg font-bold">Add Widget</h3>
        <button onClick={onClose} className="text-lg">&times;</button>
      </div>
      <div className="p-4">
        <h4 className="mb-4 text-sm text-gray-600">
          Personalize your dashboard by adding the following widgets
        </h4>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <div key={category.id} className="flex-1 border-b pb-4 mb-10">
                <div
                  className="font-bold cursor-pointer text-lg"
                  onClick={() => toggleCategory(category.id)}
                >
                  {category.name}
                </div>
                {openCategory === category.id && (
                  <div className="mt-2 space-y-2">
                    {category.widgets.map((widget) => (
                      <div key={widget.id} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={localSelectedWidgets.includes(widget.id)}
                          onChange={() => handleCheckboxChange(widget.id)}
                          className="mr-2"
                        />
                        <label className="text-sm">{widget.name}</label>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="p-4">
        <button
          onClick={handleConfirm}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
