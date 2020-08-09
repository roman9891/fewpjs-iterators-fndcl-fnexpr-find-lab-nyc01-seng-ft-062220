const superbowlWin = resultsArray => {
  const searchResult = resultsArray.find(resultObject => resultObject.result === `W`)
  return searchResult ? searchResult.year : undefined
}