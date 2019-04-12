const promiseToDoSomething = () => new Promise((resolve) => {
  setTimeout(() => resolve('I did something'), 2000);
});
const watchOverSomeoneDoingSomething = async () => {
  const something = await promiseToDoSomething();
  return `${something} and I watched`;
};
const watchOverSomeoneWatchingSomeoneDoingSomething = async () => {
  const something = await watchOverSomeoneDoingSomething();
  return `${something} and I watched as well`;
};
watchOverSomeoneWatchingSomeoneDoingSomething().then((res) => {
  console.log(res);
});
