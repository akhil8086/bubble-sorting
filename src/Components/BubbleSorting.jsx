
import { useState } from "react";
import Header from "./Header";
const BubbleSorting = () => {
  const [inputValue, setInputValue] = useState('');
  const [array, setArray] = useState([]);
  const [sortedArray, setSortedArray] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortingTime, setSortingTime] = useState(null); 

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddArray = () => {
    const newArray = inputValue.split(',').map((num) => parseInt(num.trim(), 10));
    setArray(newArray);
    setInputValue('');
  };

  const bubbleSort = async (arr) => {
    const startTime = performance.now(); 
    const len = arr.length;

    for (let i = 0; i < len - 1; i++) {
      let swapped = false;

      for (let j = 0; j < len - 1 - i; j++) {
        await new Promise((resolve) => setTimeout(resolve, 10));

        if (
          (sortOrder === 'asc' && arr[j] > arr[j + 1]) ||
          (sortOrder === 'desc' && arr[j] < arr[j + 1])
        ) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          swapped = true;
        }

        setSortedArray([...arr]);
      }

      if (!swapped) {
        break;
      }
    }

    const endTime = performance.now(); 
    const sortingTime = endTime - startTime; 
    setSortingTime(sortingTime); 
  };

  const handleSort = async () => {
    setSortingTime(null); 
    await bubbleSort([...array]);
  };

  const handleOrderChange = (order) => {
    setSortOrder(order);
    bubbleSort([...array]);
  };

  return (
    <div >
        <div>
            <Header />
        </div>
        <div style={{display:"flex",flexDirection:"column", alignItems:"center",marginTop:"20px"}}>
      <div>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button onClick={handleAddArray}>Add Array</button>
      </div>
      <div>
        <button onClick={handleSort}>Sort</button>
        <select onChange={(e) => handleOrderChange(e.target.value)}>
        <option value="asc">Sort Ascending</option>
        <option value="desc">Sort Descending</option>
       </select>
       <div>
        <p>Original Array: {array.join(', ')}</p>
        <p>Sorted Array: {sortedArray.join(', ')}</p>
        {sortingTime !== null && (
          <p>Time: {sortingTime.toFixed(2)} milliseconds</p>
        )}
      </div>
      </div>
    </div>
    </div>
  );
};

export default BubbleSorting;











