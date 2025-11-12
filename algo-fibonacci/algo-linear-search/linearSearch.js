let searchList;

function linearSearch(searchTerm, arr) {
  searchList = searchTerm.split("");
  console.log(searchList);

  for (let i = 0; i > arr.length; i++) {
    if (arr[i] === searchList)
      return arr[i];
  }

  return undefined;
}

linearSearch("a", searchList)

function globalLinearSearch(searchTerm, arr) {
  return [];
}

module.exports = { linearSearch, globalLinearSearch };
