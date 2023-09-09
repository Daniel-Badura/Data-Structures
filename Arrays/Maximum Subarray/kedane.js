function maxSubarraySum(arr) {
  let maximum = arr[0];
  let maxarray = arr[0];

  // Iterujemy po reszcie tablicy, rozpoczynając od drugiego elementu (indeks 1)
  for (let i = 1; i < arr.length; i++) {
    // Aktualizujemy maksymalną sumę kończącą się w bieżącym elemencie
    maxarray = Math.max(arr[i], maxarray + arr[i]);

    // Aktualizujemy maksymalną sumę do tej pory
    maximum = Math.max(maximum, maxarray);
  }

  return maximum;
}

// Przykład użycia
const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const maxSum = maxSubarraySum(arr);
console.log("Maksymalna suma podciągu to:", maxSum);
