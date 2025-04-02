interface Pokemon {
  name: string;
  imageUrl: string;
  attack: number;
  defense: number;
  hp: number;
  speed: number;
}

interface GameLogicProps {
  peleador: Pokemon;
  rival: Pokemon;
  onWinner: (winner: Pokemon) => void;
}

export function GameLogic({ peleador, rival, onWinner }: GameLogicProps) {
  const calculateDamage = (attack: number, defense: number): number => Math.max(attack - defense, 1);

  let peleadorHp = peleador.hp;
  let rivalHp = rival.hp;

  const peleadorGoesFirst =
    peleador.speed > rival.speed ||
    (peleador.speed === rival.speed && peleador.attack > rival.attack);

  const firstAttacker = peleadorGoesFirst ? peleador : rival;
  const secondAttacker = peleadorGoesFirst ? rival : peleador;

  while (peleadorHp > 0 && rivalHp > 0) {
    // First attacker attacks
    const damageToSecond = calculateDamage(firstAttacker.attack, secondAttacker.defense);
    secondAttacker === peleador ? peleadorHp -= damageToSecond : rivalHp -= damageToSecond;

    // Check if the second attacker is still alive
    if (peleadorHp <= 0 || rivalHp <= 0) break;

    // Second attacker retaliates
    const damageToFirst = calculateDamage(secondAttacker.attack, firstAttacker.defense);
    firstAttacker === peleador ? peleadorHp -= damageToFirst : rivalHp -= damageToFirst;
  }

  // Determine the winner
  const winner = peleadorHp > 0 ? peleador : rival;
  onWinner(winner); // Return the winner
}
