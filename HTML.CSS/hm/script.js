//  1 задание

function count(array) {
    let counts = {};
  
    for (let i = 0; i < array.length; i++) {
      let element = array[i];
  
     
      if (counts[element]) {
        counts[element] += 1;
      }
  
      else {
        counts[element] = 1;
      }
    }
  
    return counts;
  }
  
  const result = count(['james', 'james', 'john']);
  console.log(result);



// 2 задание

function findMurderer(suspects, victims) {
  // Создаем пустой объект для хранения встреч каждого подозреваемого
  let meetings = {};

  // Проходимся по каждому подозреваемому
  for (let suspect in suspects) {
    let seenPeople = suspects[suspect];

    // Проходимся по каждому человеку, которого видел подозреваемый
    for (let person of seenPeople) {
      if (meetings[person]) {
        meetings[person].push(suspect);
      } else {
        meetings[person] = [suspect];
      }
    }
  }

  // Проходимся по списку погибших людей
  for (let victim of victims) {
    // Если только один подозреваемый видел это имя, возвращаем его имя
    if (meetings[victim] && meetings[victim].length === 1) {
      return meetings[victim][0];
    }
  }

  return "Убийца не найден";
}

const suspects = {
  'James': ['Jacob', 'Bill', 'Lucas'],
  'Johnny': ['David', 'Kyle', 'Lucas'],
  'Peter': ['Lucy', 'Kyle']
};

const victims = ['Lucas', 'Bill'];

const murderer = findMurderer(suspects, victims);
console.log("The killer is", murderer);



    // 3 задание

    function findOddOccurrence(nums) {
        let hashTable = {};
      
        for (let num of nums) {
          if (hashTable[num]) {
            hashTable[num]++;
          } else {
            hashTable[num] = 1;
          }
        }
      
        for (let num in hashTable) {
          if (hashTable[num] % 2 !== 0) {
            return num;
          }
        }
      
        return null; // В случае, если в массиве нет чисел, встречающихся нечетное количество раз
      }
      
      
      console.log(findOddOccurrence([7])); 
      console.log(findOddOccurrence([1, 1, 2, 2, 3])); 
      console.log(findOddOccurrence([0, 1, 0, 1, 0])); 
      console.log(findOddOccurrence([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));


    //   4 задние

    function nthFibo(n) {
        if (n <= 0) {
          return null;
        } else if (n === 1 || n === 2) {
          return 1;
        } else {
          let prev1 = 1;
          let prev2 = 1;
          let current;
      
          for (let i = 3; i <= n; i++) {
            current = prev1 + prev2;
            prev1 = prev2;
            prev2 = current;
          }
      
          return current;
        }
      }
      
 
      console.log(nthFibo(4)); 
      console.log(nthFibo(6)); 
      console.log(nthFibo(10)); 
      
    //   5 задание
    const menu = {
        _meal: '',
        _price: 0, 
      
        get meal() {
          return this._meal;
        },
      
        set meal(newMeal) {
          this._meal = newMeal;
        },
      
        get price() {
          return this._price;
        },
      
        set price(newPrice) {
          this._price = newPrice;
        }
      };
      
      
      console.log(menu.meal); 
      menu.meal = 'Паста'; 
      console.log(menu.meal); 
      
      console.log(menu.price); 
      menu.price = 15; 
      console.log(menu.price); 

    //   6 задание

//Функции высшего порядка - это функции, которые принимают другие функции в качестве аргументов или возвращают функции. Они широко используются в JavaScript для работы с массивами. Давай рассмотрим некоторые из них:

// 1. **forEach**: Применяет переданную функцию к каждому элементу массива, не изменяя сам массив.

// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach((num) => {
//   console.log(num);
// });


// 2. **map**: Создает новый массив, применяя переданную функцию к каждому элементу и возвращая новое значение.

// const numbers = [1, 2, 3, 4, 5];

// const doubled = numbers.map((num) => {
//   return num * 2;
// });

// console.log(doubled);


// 3. **filter**: Создает новый массив, содержащий только элементы, для которых переданная функция возвращает true.

// const numbers = [1, 2, 3, 4, 5];

// const oddNumbers = numbers.filter((num) => {
//   return num % 2 !== 0;
// });

// console.log(oddNumbers);


// 4. **findIndex**: Возвращает индекс первого элемента в массиве, для которого переданная функция вернула true.

// const numbers = [1, 2, 3, 4, 5];

// const evenIndex = numbers.findIndex((num) => {
//   return num % 2 === 0;
// });

// console.log(evenIndex);


// 5. **reduce**: Применяет переданную функцию к аккумулятору и каждому элементу массива, возвращая одно значение.

// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((accumulator, num) => {
//   return accumulator + num;
// }, 0);

// console.log(sum);


// // 6. **some**: Проверяет, удовлетворяет ли хотя бы один элемент массива условию, переданному в функцию.

// const numbers = [1, 2, 3, 4, 5];

// const hasEvenNumbers = numbers.some((num) => {
//   return num % 2 === 0;
// });

// console.log(hasEvenNumbers);


// // 7. **every**: Проверяет, удовлетворяют ли все элементы массива условию, переданному в функцию.

// const numbers = [1, 2, 3, 4, 5];

// const allEvenNumbers = numbers.every((num) => {
//   return num % 2 === 0;
// });

// console.log(allEvenNumbers);