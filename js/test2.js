function subPoints(...args) {
  console.log(args);
  calc(-1, ...args);
}
function addPoints(...args) {
  calc(+1, ...args);
}
function calc(signFlag, ...args) {
  p = 10 ** 10;
  let ret = 0;
  for (const [i, n] of Object.entries(args)) {
    // key, values
    console.log(i, n);
    const signNum = i != 0 ? n * signFlag : n;
    ret += Math.trunc(signNum * p);
  }
  ret = ret / p;
  console.log(args.join(` ${signFlag > 0 ? "+" : "-"} `), "=", ret);
}
subPoints(0.21354, 0.1); // 0.31354
// addPoints4(0.14, 0.28); // 0.42
// addPoints4(0.34, 0.226); // 0.566
