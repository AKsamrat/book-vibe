const getStoreApplication = value => {
  const storeJobAplication = localStorage.getItem(`${value}`);
  // console.log(storeJobAplication);
  if (storeJobAplication) {
    return JSON.parse(storeJobAplication);
  }
  return [];
};

const saveBookData = (bookId, value) => {
  // console.log(value);
  let storeBookData = getStoreApplication(value);
  const exist = storeBookData.find(jobId => jobId === bookId);
  if (!exist) {
    storeBookData.push(bookId);
    localStorage.setItem(`${value}`, JSON.stringify(storeBookData));
  }
};
export { saveBookData, getStoreApplication };
