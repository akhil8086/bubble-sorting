
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSortedArray, setSortingTime } from "./Redux/sortingSlice";

const SortingDisplay = ({ array, sortOrder }) => {
  const dispatch = useDispatch();
  const { sortedArray, sortingTime } = useSelector((state) => state.sorting);

  useEffect(() => {
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

    bubbleSort([...array]);
  }, [array, sortOrder, dispatch]);

  return (
    <div style={{ border: "1px solid black", marginTop: "20px", padding: "20px" }}>
      <p>Original Array: {array.join(", ")}</p>
      <p>Sorted Array: {sortedArray.join(", ")}</p>
      {sortingTime !== null && (
        <p style={{ border: "1px dotted red", padding: "10px" }}>
          Time: {sortingTime.toFixed(2)} milliseconds
        </p>
      )}
    </div>
  );
};

export default SortingDisplay;
