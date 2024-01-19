function diagonalSums(matrix) {
  let main = 0;
  let secondary = 0;

  for (let i = 0; i < matrix.length; i++) {
    main += matrix[i][i];
  }

  for (let j = 0; j < matrix.length; j++) {
    secondary += matrix[j][matrix.length - 1 - j];
  }
  console.log(main, secondary);
}
diagonalSums([
  [20, 40],
  [10, 60],
]);
