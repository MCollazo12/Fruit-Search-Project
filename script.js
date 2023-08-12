const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = [
  'Apple',
  'Apricot',
  'Avocado 🥑',
  'Banana',
  'Bilberry',
  'Blackberry',
  'Blackcurrant',
  'Blueberry',
  'Boysenberry',
  'Currant',
  'Cherry',
  'Coconut',
  'Cranberry',
  'Cucumber',
  'Custard apple',
  'Damson',
  'Date',
  'Dragonfruit',
  'Durian',
  'Elderberry',
  'Feijoa',
  'Fig',
  'Gooseberry',
  'Grape',
  'Raisin',
  'Grapefruit',
  'Guava',
  'Honeyberry',
  'Huckleberry',
  'Jabuticaba',
  'Jackfruit',
  'Jambul',
  'Juniper berry',
  'Kiwifruit',
  'Kumquat',
  'Lemon',
  'Lime',
  'Loquat',
  'Longan',
  'Lychee',
  'Mango',
  'Mangosteen',
  'Marionberry',
  'Melon',
  'Cantaloupe',
  'Honeydew',
  'Watermelon',
  'Miracle fruit',
  'Mulberry',
  'Nectarine',
  'Nance',
  'Olive',
  'Orange',
  'Clementine',
  'Mandarine',
  'Tangerine',
  'Papaya',
  'Passionfruit',
  'Peach',
  'Pear',
  'Persimmon',
  'Plantain',
  'Plum',
  'Pineapple',
  'Pomegranate',
  'Pomelo',
  'Quince',
  'Raspberry',
  'Salmonberry',
  'Rambutan',
  'Redcurrant',
  'Salak',
  'Satsuma',
  'Soursop',
  'Star fruit',
  'Strawberry',
  'Tamarillo',
  'Tamarind',
  'Yuzu',
];

function search(str) {
  return (
    fruit
      //Use map to create a new array containing all lowercase fruit items
      .map((elements) => elements.toLowerCase())
      //Use reduce to filter items based on whether they include the str input -> push to acc
      .reduce((accumulator, currentVal) => {
        if (currentVal.includes(str.toLowerCase())) {
          accumulator.push(currentVal);
        }

        return accumulator;
      }, [])
  );
}

//Capture user input -> pass to search to filter results -> pass results and user input to showSuggestions()
function searchHandler(e) {
  const inputVal = e.target.value.toLowerCase();
  const results = search(inputVal);
  showSuggestions(inputVal, results);
}

function showSuggestions(inputVal, results) {
  //Reset suggestions container outside of loop
  suggestions.innerHTML = '';  

  //Loop through elements (fruit) inside of the passed in accumulated results
  for (let fruit of results) {
    if (
      (inputVal.length === 1 && fruit.startsWith(inputVal[0])) || // Show fruit suggestions that start with the first character or..
      (inputVal.length > 1 && fruit.includes(inputVal)) // Continue to narrow down suggestions based more inputted characters
    ) {
      //Create and append a new li containing the fruit name
      const li = document.createElement('li');
      li.innerText = fruit;
      suggestions.appendChild(li);
    }
  }
}

// function highlightText(inputVal, results) {
 
// }

function useSuggestion(e) {
  const selectedFruit = e.target.innerText;
  input.value = selectedFruit;
  suggestions.innerHTML = '';
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
