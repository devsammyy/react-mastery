import StarRating from "./components/star-rating";

const App = () => {
  return (
    <div className="flex flex-col gap-10">
      {/* <Accordion /> */}
      {/* <RandomColor /> */}
      <StarRating numOfStars={10} />
    </div>
  );
};

export default App;
