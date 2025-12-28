import { useState, useEffect } from "react";

export const title = ` ____    ______   ____    ____     ____       
/\\  _\`\\ /\\__  _\\ /\\  _\`\\ /\\  _\`\\  /\\  _\`\\     
\\ \\ \\L\\ \\/_/\\ \\/ \\ \\ \\L\\ \\ \\ \\L\\ \\\\ \\,\\L\\_\\   
 \\ \\  _ <' \\ \\ \\  \\ \\ ,  /\\ \\  _ <'\\/_\\__ \\   
  \\ \\ \\L\\ \\ \\_\\ \\__\\ \\ \\\\ \\\\ \\ \\L\\ \\ /\\ \\L\\ \\ 
   \\ \\____/ /\\_____\\\\ \\_\\ \\_\\ \\____/ \\ \`\\____\\
    \\/___/  \\/_____/ \\/_/\\/ /\\/___/   \\/_____/`;

export default function Birb() {
  const f1 = "∽('▿')~";
  const f2 = "~('▿')∽";
  const [f, setF] = useState(f1);
  useEffect(() => {
    const t = setInterval(() => setF((p) => (p === f1 ? f2 : f1)), 200);
    return () => clearInterval(t);
  }, []);
  return <pre>{f}</pre>;
}
