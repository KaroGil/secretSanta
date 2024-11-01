export const matchSecretSanta = (names) => {
  if (names.length < 2) return [];

  // Matching algorithm from chatGPT
  // Initialize an array of indices representing the positions in the names array
  const indices = Array.from({ length: names.length }, (_, i) => i);

  // Shuffle indices to randomize assignments
  const shuffledIndices = indices.slice();
  for (let i = shuffledIndices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledIndices[i], shuffledIndices[j]] = [
      shuffledIndices[j],
      shuffledIndices[i],
    ];
  }

  // Generate pairs and ensure no one is assigned to themselves
  const pairs = [];
  for (let i = 0; i < names.length; i++) {
    if (shuffledIndices[i] === i) {
      // If a person is paired with themselves, swap with the last element
      [shuffledIndices[i], shuffledIndices[shuffledIndices.length - 1]] = [
        shuffledIndices[shuffledIndices.length - 1],
        shuffledIndices[i],
      ];
    }
    pairs.push({
      name: names[i],
      secretSanta: names[shuffledIndices[i]],
    });
  }

  if (typeof window !== 'undefined') {
    sessionStorage.setItem('matches', JSON.stringify(pairs));
  }

  return pairs;
};
