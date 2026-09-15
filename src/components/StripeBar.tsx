export function StripeBar() {
  return (
    <div className="flex w-full" style={{ height: 5 }}>
      {["#3d7a6b", "#8b2e2e", "#c4522a", "#e8a820"].map((c, i) => (
        <div key={i} className="flex-1" style={{ backgroundColor: c }} />
      ))}
    </div>
  );
}
