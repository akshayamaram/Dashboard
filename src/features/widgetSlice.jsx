import { createSlice } from "@reduxjs/toolkit";
import { data } from "../data";

const widgetSlice = createSlice({
  name: "widgets",
  initialState: {
    categories: data,
    selectedWidgets: [],
    searchTerm: "",
  },
  reducers: {
    addWidget: (state, action) => {
      const { categoryId, widget } = action.payload;
      const category = state.categories.find((cat) => cat.id === categoryId);
      if (category) {
        category.widgets.push(widget);
      }
    },
    removeWidget: (state, action) => {
      const { categoryId, widgetId } = action.payload;
      const category = state.categories.find((cat) => cat.id === categoryId);
      if (category) {
        category.widgets = category.widgets.filter((w) => w.id !== widgetId);
      }
    },
    addCategory: (state, action) => {
      state.categories.push(action.payload);
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setSelectedWidgets: (state, action) => {
      state.selectedWidgets = action.payload;
    },
    
  },
});

export const { addWidget, removeWidget, addCategory, setSearchTerm, setSelectedWidgets } = widgetSlice.actions;
export default widgetSlice.reducer;
