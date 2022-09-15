async function func() {
  var promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Result resolved!"), 1000);
  });
  console.log("Barney waiting for result");
  let result = await promise;
  console.log(result);
  console.log(`\x1b[33m${result} \x1b[0m`);
}

func();
