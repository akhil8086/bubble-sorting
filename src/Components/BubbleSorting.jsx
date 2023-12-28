

import { useDispatch, useSelector } from "react-redux";
import {
  setInputValue,
  setArray,
  setSortOrder,
} from "./Redux/sortingSlice";
import SortingDisplay from "./SortingDisplay";

const BubbleSortingInput = () => {
  const dispatch = useDispatch();
  const { inputValue, array, sortOrder } = useSelector(
    (state) => state.sorting
  );

  const handleInputChange = (e) => {
    dispatch(setInputValue(e.target.value));
  };

  const handleAddArray = () => {
    const newArray = inputValue.split(",").map((num) => parseInt(num.trim(), 10));
    dispatch(setArray(newArray));
    dispatch(setInputValue(""));
  };

  const handleOrderChange = (order) => {
    dispatch(setSortOrder(order));
  };

  return (
    <div>
      <div>
        <h1 style={{marginLeft:"20px"}}>BUBBLE SORTING</h1>
      </div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddArray}>Add Array</button>
      <select onChange={(e) => handleOrderChange(e.target.value)}>
        <option value="asc">Sort Ascending</option>
        <option value="desc">Sort Descending</option>
      </select>
      <SortingDisplay array={array} sortOrder={sortOrder} />
    </div>
  );
};

export default BubbleSortingInput;













