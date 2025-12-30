import TCell from "./TCell";
import type { S } from "./types";

interface Props {
  s: S;
}

export default function T({ s }: Props) {
  return (
    <div className="overflow-auto">
      <table className="striped">
        <thead>
          <tr>
            <th scope="col">↘</th>
            <th scope="col">A</th>
            <th scope="col">B</th>
            <th scope="col">C</th>
            <th scope="col">D</th>
            <th scope="col">E</th>
            <th scope="col">F</th>
            <th scope="col">G</th>
            <th scope="col">H</th>
            <th scope="col">I</th>
            <th scope="col">J</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">0</th>
            <TCell x={0} y={0} />
            <TCell x={0} y={1} />
            <TCell x={0} y={2} />
            <TCell x={0} y={3} />
            <TCell x={0} y={4} />
            <TCell x={0} y={5} />
            <TCell x={0} y={6} />
            <TCell x={0} y={7} />
            <TCell x={0} y={8} />
            <TCell x={0} y={9} />
          </tr>
          <tr>
            <th scope="row">1</th>
            <TCell x={1} y={0} />
            <TCell x={1} y={1} />
            <TCell x={1} y={2} />
            <TCell x={1} y={3} />
            <TCell x={1} y={4} />
            <TCell x={1} y={5} />
            <TCell x={1} y={6} />
            <TCell x={1} y={7} />
            <TCell x={1} y={8} />
            <TCell x={1} y={9} />
          </tr>
          <tr>
            <th scope="row">2</th>
            <TCell x={2} y={0} />
            <TCell x={2} y={1} />
            <TCell x={2} y={2} />
            <TCell x={2} y={3} />
            <TCell x={2} y={4} />
            <TCell x={2} y={5} />
            <TCell x={2} y={6} />
            <TCell x={2} y={7} />
            <TCell x={2} y={8} />
            <TCell x={2} y={9} />
          </tr>
          <tr>
            <th scope="row">3</th>
            <TCell x={3} y={0} />
            <TCell x={3} y={1} />
            <TCell x={3} y={2} />
            <TCell x={3} y={3} />
            <TCell x={3} y={4} />
            <TCell x={3} y={5} />
            <TCell x={3} y={6} />
            <TCell x={3} y={7} />
            <TCell x={3} y={8} />
            <TCell x={3} y={9} />
          </tr>
          <tr>
            <th scope="row">4</th>
            <TCell x={4} y={0} />
            <TCell x={4} y={1} />
            <TCell x={4} y={2} />
            <TCell x={4} y={3} />
            <TCell x={4} y={4} />
            <TCell x={4} y={5} />
            <TCell x={4} y={6} />
            <TCell x={4} y={7} />
            <TCell x={4} y={8} />
            <TCell x={4} y={9} />
          </tr>
          <tr>
            <th scope="row">5</th>
            <TCell x={5} y={0} />
            <TCell x={5} y={1} />
            <TCell x={5} y={2} />
            <TCell x={5} y={3} />
            <TCell x={5} y={4} />
            <TCell x={5} y={5} />
            <TCell x={5} y={6} />
            <TCell x={5} y={7} />
            <TCell x={5} y={8} />
            <TCell x={5} y={9} />
          </tr>
          <tr>
            <th scope="row">6</th>
            <TCell x={6} y={0} />
            <TCell x={6} y={1} />
            <TCell x={6} y={2} />
            <TCell x={6} y={3} />
            <TCell x={6} y={4} />
            <TCell x={6} y={5} />
            <TCell x={6} y={6} />
            <TCell x={6} y={7} />
            <TCell x={6} y={8} />
            <TCell x={6} y={9} />
          </tr>
          <tr>
            <th scope="row">7</th>
            <TCell x={7} y={0} />
            <TCell x={7} y={1} />
            <TCell x={7} y={2} />
            <TCell x={7} y={3} />
            <TCell x={7} y={4} />
            <TCell x={7} y={5} />
            <TCell x={7} y={6} />
            <TCell x={7} y={7} />
            <TCell x={7} y={8} />
            <TCell x={7} y={9} />
          </tr>
          <tr>
            <th scope="row">8</th>
            <TCell x={8} y={0} />
            <TCell x={8} y={1} />
            <TCell x={8} y={2} />
            <TCell x={8} y={3} />
            <TCell x={8} y={4} />
            <TCell x={8} y={5} />
            <TCell x={8} y={6} />
            <TCell x={8} y={7} />
            <TCell x={8} y={8} />
            <TCell x={8} y={9} />
          </tr>
          <tr>
            <th scope="row">9</th>
            <TCell x={9} y={0} />
            <TCell x={9} y={1} />
            <TCell x={9} y={2} />
            <TCell x={9} y={3} />
            <TCell x={9} y={4} />
            <TCell x={9} y={5} />
            <TCell x={9} y={6} />
            <TCell x={9} y={7} />
            <TCell x={9} y={8} />
            <TCell x={9} y={9} />
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th data-tooltip="Round Count" scope="row"># {s.rc}</th>
            <td data-tooltip="Total score this round">⇡ 926</td>
            <td data-tooltip="Items picked up this round">⧻ 58</td>
            <td/>
            <td/>
            <td/>
            <td/>
            <td/>
            <td/>
            <td/>
            <td/>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
