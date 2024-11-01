export const matchSecretSanta = (names) => {
  if (names.length < 2)
    throw new Error("Need at least two people for Secret Santa!");

  // TODO: Implement better (more random) Secret Santa matching algorithm
  const shuffled = names.sort(() => 0.5 - Math.random());
  const pairs = shuffled.map((name, ind) => {
    return {
      name,
      secretSanta: shuffled[(ind + 1) % shuffled.length],
    };
  });

  console.log(pairs);

  return pairs;
};
