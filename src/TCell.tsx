interface P {
  isPlayer: boolean;
  isTrail: boolean;
}
export default function TCell({ isPlayer, isTrail }: P) {
  return <td>{isPlayer ? "@" : isTrail ? "o" : ""}</td>;
}
