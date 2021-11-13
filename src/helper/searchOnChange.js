// handle search when onChange event occur
// the first time, initial value of timer is null so callback will be called
// and when onChange event changes in delay time, searOnChange function will prevent it call callback function
// and timer will have value null
// So searchOnChange have mission is that prevent call callback function when onChange event change in delay time
const searchOnChange = (timer = null, callback, delay = 400) => {
  if (timer) {
    clearInterval(timer);
  }

  return setTimeout(callback, delay);
};

export default searchOnChange;
