// example 1

const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [3, 4, 8, 9, 12];

const arr = arr1.filter(item => arr2.includes(item));
console.log(arr); // [3, 4]

//--------------------------------------

// example 2

const arr = [1, 7, 9, 2, 5, 3, 8];

arr.sort((a, b) => b - a); // Descending
console.log(arr.slice(0, 2)); // [9, 8]

// --------------------------------------

// example 3

const arr = [1, 7, 9, 2, 5, 3, 8];
const sum = 10;

let arrSum = [];
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === sum) {
      arrSum.push(arr[i], arr[j]);
    }
  }
}

for (let i = 0; i < arrSum.length - 1; i += 2) {
  let tempArray;
  tempArray = arrSum.slice(i, i + 2);
  console.log(tempArray); // [1, 9]; [7, 3]; [2, 8]
}

// --------------------------------------

//example 4

const arr = [1, 2, 3, 1, 2, 3, 4, 5, 6, 4];

let newArr = new Set(arr);
// Set trả về một object nên muốn chuyển thành mảng ta dùng Spread
console.log([...newArr]); // [1, 2, 3, 4, 5, 6]

// --------------------------------------

// example 5

const arr1 = [1, 2, 3, 4, 5, 6, 7, 9, 9, 8, 7, 7];
const arr2 = [3, 5, 9, 10, 88];

var arr = [];
const newArr = arr1.filter((item) => arr2.includes(item));

newArr.filter(function (item) {
  if (!arr.includes(item)) {
    arr.push(item);
  }
});
console.log(arr); // [3, 5, 9]

// ------------------------------

// example 6

const arr = ["face", "zalo", "face", "gmail", "zalo", "zalo"];

const newObject = arr.reduce(function (object, current) {
  // object là giá trị trả về sau mỗi lần callback
  // current là phần tử đang được xử lí trong mảng

  object[current] = object[current] + 1 || 1; // lưu số lần xuất hiện của current đó
  return object;
}, {});
console.log(object); // {'face': 2, 'zalo': 3, 'gmail':1}

// ------------------------------

// example 7

const arr = [
  { make: "audi", model: "r8", year: "2012" },
  { make: "audi", model: "rs5", year: "2013" },
  { make: "ford", model: "mustang", year: "2012" },
  { make: "ford", model: "fusion", year: "2015" },
  { make: "kia", model: "optima", year: "2012" },
];

const newObject = arr.reduce(function (object, item) {
  if (object[item.make] != null) {
    object[item.make].push(item);
  } else {
    object[item.make] = [item];
  }
  return object;
}, {});

console.log(newObject);
// {
//   "audi": [
//     {
//       "make": "audi",
//       "model": "r8",
//       "year": "2012"
//     },
//     {
//       "make": "audi",
//       "model": "rs5",
//       "year": "2013"
//     }
//   ],
//   "ford": [
//     {
//       "make": "ford",
//       "model": "mustang",
//       "year": "2012"
//     },
//     {
//       "make": "ford",
//       "model": "fusion",
//       "year": "2015"
//     }
//   ],
//   "kia": [
//     {
//       "make": "kia",
//       "model": "optima",
//       "year": "2012"
//     }
//   ]
// }

// ------------------------------

// example 8

const order = {
  cart: [
    { id: 1, name: "ao dai", amount: 5, price: 100000 },
    { id: 2, name: "ao coc", amount: 2, price: 200000 },
    { id: 3, name: "quan dai", amount: 3, price: 150000 },
    { id: 4, name: "quan coc", amount: 4, price: 130000 },
  ],
  total_money: 0,
  total_amount: 0,
};

const { cart, ...rest } = order;
const initState = { ...rest };

const actions = order.cart.map((action) => ({
  amount: action.amount,
  money: action.amount * action.price,
}));
const newArr = actions.reduce(function (state, action) {
  let newAmount = 0;
  let newMoney = 0;

  for (var action of actions) {
    newAmount += action.amount;
    newMoney += action.money;
  }

  return {
    ...state,
    total_amount: newAmount,
    total_money: newMoney,
  };
}, initState);

console.log(newArr); // {total_money: 1870000, total_amount: 14}

// ------------------------------

// example 9

const arr = [1, 2, 3, 4, 5, 6, 7];

// // Rebuilt map method

Array.prototype.mapRebuilt = function (callback) {
  let output = [];
  for (index in this) {
    if (this.hasOwnProperty(index)) {
      let result = callback(this[index], index, this[index]);
      output.push(result);
    }
  }
  return output;
};

const testMap = arr.mapRebuilt((num) => num * 2);
console.log(testMap); // [2, 4, 6, 8, 10, 12, 14]

// // Rebuilt filter method

Array.prototype.filterRebuilt = function (callback) {
  let output = [];
  for (index in this) {
    if (this.hasOwnProperty(index)) {
      result = callback(this[index], index, this);
      // result là kết quả của 1 hàm logic nên chỉ có T | F
      if (result) {
        output.push(this[index]);
      }
    }
  }
  return output;
};

const testFilter = arr.filterRebuilt(function (num) {
  return num > 4;
});
console.log(testFilter); // [5, 6, 7]

// // Rebuilt reduce method

Array.prototype.reduceRebuilt = function (callback, initState) {
  let i = 0;
  if (arguments.length < 2) {
    i = 1;
    return (initState = this[0]);
  }
  for (; i < this.length; i++) {
    initState = callback(initState, this[i], i, this);
  }
  return initState;
};

const testReduce = arr.reduceRebuilt(function (total, item) {
  return total + item;
}, 0);
console.log(`Total = ${testReduce}`); // Total = 28
