function maxSubarraySumTS(arr: number[]): number {
    let max_so_far: number = arr[0]; 
    let max_ending_here: number = arr[0];
  
    // Iterujemy po reszcie tablicy, rozpoczynając od drugiego elementu (indeks 1)
    for (let i: number = 1; i < arr.length; i++) {
      // Aktualizujemy maksymalną sumę kończącą się w bieżącym elemencie
      max_ending_here = Math.max(arr[i], max_ending_here + arr[i]);
  
      // Aktualizujemy maksymalną sumę do tej pory
      max_so_far = Math.max(max_so_far, max_ending_here);
    }
  
    return max_so_far; 
  }
  
  // Przykład użycia
  const array: number[] = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
  const maximSum: number = maxSubarraySumTS(array);
  console.log("Maksymalna suma podciągu to:", maximSum);