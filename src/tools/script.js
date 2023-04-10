export const debounce = (debouncedFunction, delay = 300) => {
  let timeout

  return (...args) => {
    clearTimeout(timeout);

    timeout = setTimeout(
      () => debouncedFunction.apply(this, args),
      delay
    );
  };
}


// function postBounce(a,b,c){
//   console.log('Done', a, b, c);
// }
// const processChange = debounce(() => postBounce(2,3,4));
// for ( let ii = 0; ii < 1000; ii += 1 ) {
//   processChange()
// }