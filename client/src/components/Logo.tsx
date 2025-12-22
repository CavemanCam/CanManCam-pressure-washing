export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`font-heading font-bold tracking-wide ${className}`}>
      <span style={{ color: "#246593" }}>C</span>
      <span style={{ color: "#153B56" }}>AN</span>
      <span style={{ color: "#246593" }}>M</span>
      <span style={{ color: "#153B56" }}>AN</span>
      <span style={{ color: "#246593" }}>C</span>
      <span style={{ color: "#153B56" }}>AM</span>
    </span>
  );
}
