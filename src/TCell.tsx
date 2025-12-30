interface Props {
  x: number;
  y: number;
}
export default function TCell({ x, y }: Props) {
  return <td>{x}{y}</td>;
}
