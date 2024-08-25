import { useSelector } from "react-redux";
import Category from "./Category";
import AddWidgetForm from "./AddWidgetForm";
// import SearchBar from "./SearchBar";
import Header from "./Header";

const Dashboard = () => {
  const categories = useSelector((state) => state.widgets.categories);
  const searchTerm = useSelector((state) => state.widgets.searchTerm);

  // Filtered categories based on the search term
  const filteredCategories = categories.map((category) => ({
    ...category,
    widgets: category.widgets.filter((widget) =>
      widget.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }));

  console.log(categories)

  return (
    <div className="container mx-auto p-4">
      <Header categories={categories} />
      {filteredCategories.map((category) => (
        <div key={category.id}>
          <Category category={category} />
          <AddWidgetForm categoryId={category.id} />
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
