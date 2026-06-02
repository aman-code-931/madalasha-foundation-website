import { useState } from "react";
import { useNavigate } from "react-router-dom";

const team = [
  { name: "Praveen Kumar Aggarwal", role: "Founder", img: "/images/sir1.webp", years: "40+ yrs experience" },
  { name: "Rahul Aggarwal", role: "Director", img: "/images/sir2.webp", years: "20+ yrs experience" },
];

const presets = [500, 1000, 5000, 10000];
const raised = 76911;
const goal = 500000;

export default function TeamDonateSection() {
  const [amount, setAmount] = useState(500);
  const [inputVal, setInputVal] = useState("500");
  const navigate = useNavigate();
  const progress = ((raised / goal) * 100).toFixed(1);

  const handlePreset = (p: number) => {
    setAmount(p);
    setInputVal(p.toString());
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
    setAmount(Number(e.target.value) || 0);
  };

  return (
    <section className="bg-white">

      {/* ── TEAM SECTION ── */}
      <div className="relative overflow-hidden bg-white">

        {/* Decorative top bar */}
        <div className="h-1 w-full" style={{ background: "linear-gradient(90deg, #1a237e 0%, #e8192c 50%, #f5c518 100%)" }} />

        <div className="max-w-6xl mx-auto px-6 py-20">

          {/* Label + Heading */}
          <div className="flex flex-col items-center mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-red-500" />
              <span className="text-xs font-bold tracking-widest text-red-500 uppercase">Who We Are</span>
              <div className="h-px w-12 bg-red-500" />
            </div>
            <h2 className="text-5xl font-black text-center mb-5" style={{ color: "#1a237e", letterSpacing: "-1px" }}>
              Our Team
            </h2>
            <p className="text-center text-gray-500 max-w-xl text-base leading-relaxed">
              Every good work requires honest and dedicated efforts — our team works tirelessly
              for each cause Madalasa Foundation stands for.
            </p>
          </div>

          {/* Team Cards — horizontal split layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((m, i) => (
              <div key={m.name} className="group relative flex gap-0 overflow-hidden rounded-2xl"
                style={{ border: "1px solid #ebebeb", boxShadow: "0 4px 24px rgba(26,35,126,0.07)" }}>

                {/* Left accent bar */}
                <div className="w-1.5 flex-shrink-0"
                  style={{ background: i === 0 ? "#e8192c" : "#1a237e" }} />

                {/* Photo */}
                <div className="w-44 flex-shrink-0 overflow-hidden" style={{ height: 220 }}>
                  <img src={m.img} alt={m.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>

                {/* Info */}
                <div className="flex flex-col justify-between p-6 flex-1 bg-white">
                  <div>
                    <span className="text-xs font-bold tracking-widest uppercase"
                      style={{ color: i === 0 ? "#e8192c" : "#1a237e" }}>
                      {m.role}
                    </span>
                    <h3 className="text-xl font-black mt-1 mb-3" style={{ color: "#111", lineHeight: 1.2 }}>
                      {m.name}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Dedicated to building a world we can all be proud to call home.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mt-4">
                    <div className="w-2 h-2 rounded-full"
                      style={{ background: i === 0 ? "#e8192c" : "#1a237e" }} />
                    <span className="text-xs font-semibold text-gray-400">{m.years}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── DONATE SECTION ── */}
      <div style={{ background: "#f7f6f3" }} className="py-20 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Section label */}
          <div className="flex flex-col items-center mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12" style={{ background: "#f5c518" }} />
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#854F0B" }}>
                Support the cause
              </span>
              <div className="h-px w-12" style={{ background: "#f5c518" }} />
            </div>
            <h2 className="text-5xl font-black text-center" style={{ color: "#1a237e", letterSpacing: "-1px" }}>
              Help Us Do More
            </h2>
          </div>

          {/* Donate card */}
          <div className="rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-5"
            style={{ boxShadow: "0 8px 48px rgba(26,35,126,0.12)" }}>

            {/* LEFT — Stats panel (2/5) */}
            <div className="md:col-span-2 flex flex-col justify-between p-10"
              style={{ background: "#1a237e" }}>

              <div>
                <p className="text-xs font-bold tracking-widest uppercase mb-6"
                  style={{ color: "#f5c518" }}>
                  Fundraising Progress
                </p>
                <h3 className="text-4xl font-black leading-tight mb-2" style={{ color: "#fff" }}>
                  We Need<br />Donations
                </h3>
                <p className="text-sm mb-10" style={{ color: "rgba(255,255,255,0.45)" }}>
                  Every rupee makes a difference.
                </p>

                {/* Circular progress visual */}
                <div className="flex items-center gap-6 mb-8">
                  <div className="relative w-24 h-24 flex-shrink-0">
                    <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                      <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="10" />
                      <circle cx="50" cy="50" r="40" fill="none" stroke="#f5c518" strokeWidth="10"
                        strokeDasharray={`${2 * Math.PI * 40}`}
                        strokeDashoffset={`${2 * Math.PI * 40 * (1 - (raised / goal))}`}
                        strokeLinecap="round" />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-sm font-black"
                      style={{ color: "#f5c518" }}>
                      {progress}%
                    </span>
                  </div>
                  <div>
                    <p className="text-xs mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>Raised</p>
                    <p className="text-2xl font-black" style={{ color: "#f5c518" }}>
                      ₹{raised.toLocaleString("en-IN")}
                    </p>
                    <p className="text-xs mt-2" style={{ color: "rgba(255,255,255,0.5)" }}>Goal</p>
                    <p className="text-lg font-bold" style={{ color: "rgba(255,255,255,0.8)" }}>
                      ₹{goal.toLocaleString("en-IN")}
                    </p>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.12)" }}>
                  <div className="h-full rounded-full transition-all"
                    style={{ width: `${progress}%`, background: "#f5c518" }} />
                </div>
              </div>

              {/* Trust badge */}
              <div className="mt-10 flex items-center gap-2 pt-6"
                style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f5c518" strokeWidth="2.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span className="text-xs font-semibold" style={{ color: "rgba(255,255,255,0.5)" }}>
                  Secure & tax deductible donations
                </span>
              </div>
            </div>

            {/* RIGHT — Form (3/5) */}
            <div className="md:col-span-3 bg-white p-10 flex flex-col justify-center">

              <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-1">
                Step 1 — Choose amount
              </p>
              <h3 className="text-2xl font-black mb-6" style={{ color: "#1a237e" }}>
                Amount to Donate
              </h3>

              {/* Preset grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                {presets.map(p => (
                  <button key={p} onClick={() => handlePreset(p)}
                    className="py-3 rounded-xl text-sm font-black transition-all"
                    style={{
                      border: amount === p ? "2px solid #1a237e" : "2px solid #ebebeb",
                      background: amount === p ? "#1a237e" : "#f7f6f3",
                      color: amount === p ? "#f5c518" : "#444",
                      cursor: "pointer"
                    }}>
                    ₹{p.toLocaleString("en-IN")}
                  </button>
                ))}
              </div>

              {/* Custom input */}
              <p className="text-xs text-gray-400 font-semibold mb-2">Or enter custom amount</p>
              <div className="flex items-center rounded-xl overflow-hidden mb-8"
                style={{ border: "2px solid #ebebeb" }}>
                <span className="px-4 py-4 text-base font-black"
                  style={{ background: "#e8192c", color: "#fff" }}>₹</span>
                <input type="number" value={inputVal} onChange={handleInput}
                  placeholder="Enter amount"
                  style={{
                    flex: 1, border: "none", outline: "none",
                    fontSize: 18, fontWeight: 700, color: "#111",
                    padding: "14px 16px", background: "transparent", minWidth: 0
                  }} />
              </div>

              {/* CTA */}
              <button
                    onClick={() => navigate("/donate")}
                    className="w-full py-4 rounded-xl text-base font-black tracking-wider uppercase transition-all"
                    style={{
                        background: "#e8192c",
                        color: "#fff",
                        cursor: "pointer",
                        border: "none",
                        letterSpacing: "0.08em"
                      }}
                    >
                      Donate ₹{amount > 0 ? amount.toLocaleString("en-IN") : "—"} Now
                    </button>

              <p className="text-center text-xs text-gray-400 mt-4">
                All donations are tax deductible under 80G
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


