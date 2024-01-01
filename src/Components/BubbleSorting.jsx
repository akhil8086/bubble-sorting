

import { useDispatch, useSelector } from "react-redux";
import {
  setInputValue,
  setArray,
  setSortOrder,
  setSortedArray,
  setSortingTime,
} from "./Redux/sortingSlice";
import SortingDisplay from "./SortingDisplay";

const BubbleSorting = () => {
  const dispatch = useDispatch();
  const { inputValue, array, sortOrder, sortedArray, sortingTime } = useSelector(
    (state) => state.sorting
  );

  const handleInputChange = (e) => {
    dispatch(setInputValue(e.target.value));
  };

  const handleAddArray = () => {
    const newArray = inputValue
      .split(",")
      .map((num) => parseInt(num.trim(), 10));
    dispatch(setArray(newArray));
    dispatch(setInputValue(""));
    dispatch(setSortedArray([])); 
  };

  const handleOrderChange = (order) => {
    dispatch(setSortOrder(order));
  };

  const bubbleSort = async (arr) => {
    const startTime = performance.now();
    const len = arr.length;

    for (let i = 0; i < len - 1; i++) {
      let swapped = false;

      for (let j = 0; j < len - 1 - i; j++) {
        await new Promise((resolve) => setTimeout(resolve, 10));

        if (
          (sortOrder === "asc" && arr[j] > arr[j + 1]) ||
          (sortOrder === "desc" && arr[j] < arr[j + 1])
        ) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          swapped = true;
        }

        dispatch(setSortedArray([...arr]));
      }

      if (!swapped) {
        break;
      }
    }

    const endTime = performance.now();
    const sortingTime = endTime - startTime;
    dispatch(setSortingTime(sortingTime));
  };

  const handleSort = () => {
    bubbleSort([...array]);
  };

  return (
    <div>
      <div>
        <h1 style={{ marginLeft: "20px" }}>BUBBLE SORTING</h1>
      </div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddArray}>Add Array</button>
      <select onChange={(e) => handleOrderChange(e.target.value)}>
        <option value="asc">Sort Ascending</option>
        <option value="desc">Sort Descending</option>
      </select>
      <button onClick={handleSort}>Sort</button>
      <SortingDisplay
        array={sortedArray.length > 0 ? sortedArray : array}  
        sortOrder={sortOrder}
        sortingTime={sortingTime}
      />
    </div>
  );
};

export default BubbleSorting;








