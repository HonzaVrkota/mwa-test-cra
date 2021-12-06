export const myPromise = new Promise((resolve, reject) => {
  let condition = false;

  setTimeout(() => {
    if (condition) {
      resolve("👏Promise is resolved successfully.");
    } else {
      reject("👎Promise is rejected");
    }
  }, 4000);
});
