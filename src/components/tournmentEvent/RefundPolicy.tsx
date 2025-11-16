
interface RefundPolicyProps {
  lines: Array<string>;
}

export default function RefundPolicy({ lines }: RefundPolicyProps) {
  return (
    <ul className="space-y-2 text-gray-700">
      {lines.map((line: string, idx: number) => (
        <li key={idx}>{line}</li>
      ))}
    </ul>
  );
}
