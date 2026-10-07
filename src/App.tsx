import ImageSlider from "./components/image-slider";

const App = () => {
  return (
    <div className="flex flex-col gap-10">
      {/* <Accordion /> */}
      {/* <RandomColor /> */}
      {/* <StarRating numOfStars={10} /> */}
      <ImageSlider url="https://picsum.photos/v2/list?limit=10" limit={10} />
    </div>
  );
};

export default App;
