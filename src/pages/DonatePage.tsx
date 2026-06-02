









import { useState } from "react";

const PRESET_AMOUNTS = [
  { label: "₹500", value: 500 },
  { label: "₹1,000", value: 1000 },
  { label: "₹5,000", value: 5000 },
  { label: "₹10,000", value: 10000 },
];

const FREQUENCIES = [
  { label: "One-time", badge: null },
  { label: "Monthly", badge: "Save 10%" },
  { label: "Annual", badge: null },
];

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  message: string;
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    fontFamily: "'DM Sans', sans-serif",
    background: "#ECEAE5",
    minHeight: "100vh",
  },
 
  outer: {
    maxWidth: 900,
    margin: "0 auto",
    padding: "2rem 1.25rem 3.5rem",
  },
  card: {
    background: "white",
    borderRadius: 20,
    border: "0.5px solid #E2DBD4",
    overflow: "hidden",
  },
  cardSection: {
    padding: "1.75rem 1.75rem 1.5rem",
  },
  cardSectionBorder: {
    padding: "1.75rem 1.75rem 1.5rem",
    borderTop: "0.5px solid #F0EBE5",
  },
  secChip: {
    display: "inline-block",
    fontSize: 9,
    fontWeight: 700,
    letterSpacing: ".16em",
    textTransform: "uppercase",
    color: "#E8272A",
    background: "#FEF2F2",
    borderRadius: 99,
    padding: "3px 10px",
    marginBottom: ".75rem",
  },
  secTitle: {
    fontFamily: "'Sora', sans-serif",
    fontSize: 15,
    fontWeight: 800,
    color: "#1B2257",
    marginBottom: "1rem",
  },
  amtGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 8,
    marginBottom: ".9rem",
  },
  orLine: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    marginBottom: ".75rem",
  },
  orText: {
    fontSize: 10,
    color: "#B0A89E",
    fontStyle: "italic",
    whiteSpace: "nowrap" 
  },
  orDivider: {
    flex: 1,
    height: 0.5,
    background: "#E8E0D8",
  },
  cinputWrap: {
    display: "flex",
    alignItems: "center",
    border: "1.5px solid #E2DBD4",
    borderRadius: 9,
    overflow: "hidden",
    transition: "border-color .15s",
  },
  cbadge: {
    background: "#E8272A",
    color: "white",
    fontFamily: "'Sora', sans-serif",
    fontSize: 14,
    fontWeight: 800,
    padding: "12px 15px",
    flexShrink: 0,
  },
  cinput: {
    flex: 1,
    border: "none",
    outline: "none",
    fontFamily: "'Sora', sans-serif",
    fontSize: 16,
    fontWeight: 700,
    color: "#1B2257",
    padding: "12px 13px",
    background: "#FAFAF9",
    width: "100%",
  },
  freqRow: {
    display: "flex",
    gap: 7,
    marginTop: ".9rem",
  },
  fieldGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 12,
    marginBottom: 12,
  },
  field: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
  fieldLabel: {
    fontSize: 11,
    color: "#6B7280",
    fontWeight: 500,
  },
  fieldInput: {
    background: "#F9F7F5",
    border: "0.5px solid #E2DBD4",
    borderRadius: 8,
    padding: "10px 12px",
    fontSize: 13,
    color: "#1B2257",
    outline: "none",
    fontFamily: "'DM Sans', sans-serif",
    width: "100%",
    transition: "border-color .15s",
  },
  submitWrap: {
    padding: "1.25rem 1.75rem 1.75rem",
    borderTop: "0.5px solid #F0EBE5",
  },
  submit: {
    width: "100%",
    padding: 15,
    border: "none",
    borderRadius: 10,
    background: "#E8272A",
    color: "white",
    fontFamily: "'Sora', sans-serif",
    fontSize: 14,
    fontWeight: 800,
    letterSpacing: ".07em",
    textTransform: "uppercase",
    cursor: "pointer",
    marginBottom: ".6rem",
    display: "block",
  },
  taxNote: {
    textAlign: "center",
    fontSize: 11,
    color: "#B0A89E",
  },
  trustRow: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 10,
    marginTop: "1.25rem",
  },
  trustItem: {
    background: "white",
    borderRadius: 12,
    border: "0.5px solid #E2DBD4",
    padding: ".9rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 6,
    textAlign: "center",
  },
  trustIcon: {
    width: 32,
    height: 32,
    borderRadius: 8,
    display: "grid",
    placeItems: "center" 
  },
  trustLabel: {
    fontFamily: "'Sora', sans-serif",
    fontSize: 11,
    fontWeight: 700,
    color: "#1B2257",
  },
  trustSub: {
    fontSize: 10,
    color: "#9CA3AF",
    lineHeight: 1.4,
  },
};

export default function DonatePage() {
  const [amount, setAmount] = useState(500);
  const [customInput, setCustomInput] = useState("500");
  const [activePreset, setActivePreset] = useState(500);
  const [activeFreq, setActiveFreq] = useState("Monthly");
  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    country: "",
    message: "",
  });

  const handlePreset = (value: number) => {
    setAmount(value);
    setActivePreset(value);
    setCustomInput(String(value));
  };

  const handleCustom = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomInput(e.target.value);
    setActivePreset(0);
    setAmount(parseInt(e.target.value) || 0);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Donation submitted:", { amount, frequency: activeFreq, ...form });
  };

  const formatAmount = (n: number) =>
    n ? "₹" + n.toLocaleString("en-IN") : "₹0";

  const amtBtnStyle = (value: number): React.CSSProperties => ({
    padding: "11px 4px",
    borderRadius: 9,
    border: `1.5px solid ${activePreset === value ? "#1B2257" : "#E2DBD4"}`,
    background: activePreset === value ? "#1B2257" : "white",
    fontFamily: "'Sora', sans-serif",
    fontSize: 13,
    fontWeight: 700,
    color: activePreset === value ? "white" : "#4B5563",
    cursor: "pointer",
    transition: "all .15s",
  });

  const freqBtnStyle = (label: string): React.CSSProperties => ({
    flex: 1,
    padding: 9,
    borderRadius: 8,
    border: `1.5px solid ${activeFreq === label ? "#1B2257" : "#E2DBD4"}`,
    background: activeFreq === label ? "#F2F3FA" : "white",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 12,
    fontWeight: activeFreq === label ? 600 : 500,
    color: activeFreq === label ? "#1B2257" : "#6B7280",
    cursor: "pointer",
    transition: "all .15s",
    position: "relative",
  });

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Sora:wght@500;700;800&family=DM+Sans:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <div style={styles.page}>
       
        {/* MAIN */}
        <div style={styles.outer}>
          <div style={styles.card}>
            {/* STEP 1: AMOUNT */}
            <div style={styles.cardSection}>
              <div style={styles.secChip}>Step 1</div>
              <div style={styles.secTitle}>Choose your amount</div>

              <div style={styles.amtGrid}>
                {PRESET_AMOUNTS.map(({ label, value }) => (
                  <button
                    key={value}
                    style={amtBtnStyle(value)}
                    onClick={() => handlePreset(value)}
                  >
                    {label}
                  </button>
                ))}
              </div>

              <div style={styles.orLine}>
                <div style={styles.orDivider} />
                <span style={styles.orText}>or enter a custom amount</span>
                <div style={styles.orDivider} />
              </div>

              <div style={styles.cinputWrap}>
                <div style={styles.cbadge}>₹</div>
                <input
                  style={styles.cinput}
                  type="number"
                  value={customInput}
                  placeholder="Enter amount"
                  onChange={handleCustom}
                />
              </div>

              <div style={styles.freqRow}>
                {FREQUENCIES.map(({ label, badge }) => (
                  <button
                    key={label}
                    style={freqBtnStyle(label)}
                    onClick={() => setActiveFreq(label)}
                  >
                    {label}
                    {badge && (
                      <span
                        style={{
                          position: "absolute",
                          top: -7,
                          right: 8,
                          background: "#F47920",
                          color: "white",
                          fontSize: 8,
                          fontWeight: 800,
                          letterSpacing: ".05em",
                          textTransform: "uppercase",
                          padding: "2px 6px",
                          borderRadius: 99,
                        }}
                      >
                        {badge}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* STEP 2: DETAILS */}
            <div style={styles.cardSectionBorder}>
              <div style={styles.secChip}>Step 2</div>
              <div style={styles.secTitle}>Your details</div>

              <div style={styles.fieldGrid}>
                <div style={styles.field}>
                  <label style={styles.fieldLabel}>First name</label>
                  <input
                    style={styles.fieldInput}
                    name="firstName"
                    type="text"
                    placeholder="Jane"
                    value={form.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div style={styles.field}>
                  <label style={styles.fieldLabel}>Last name</label>
                  <input
                    style={styles.fieldInput}
                    name="lastName"
                    type="text"
                    placeholder="Doe"
                    value={form.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div style={styles.fieldGrid}>
                <div style={styles.field}>
                  <label style={styles.fieldLabel}>Email address</label>
                  <input
                    style={styles.fieldInput}
                    name="email"
                    type="email"
                    placeholder="jane@example.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
                <div style={styles.field}>
                  <label style={styles.fieldLabel}>Phone</label>
                  <input
                    style={styles.fieldInput}
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div style={styles.fieldGrid}>
                <div style={styles.field}>
                  <label style={styles.fieldLabel}>City</label>
                  <input
                    style={styles.fieldInput}
                    name="city"
                    type="text"
                    placeholder="New Delhi"
                    value={form.city}
                    onChange={handleChange}
                  />
                </div>
                <div style={styles.field}>
                  <label style={styles.fieldLabel}>Country</label>
                  <select
                    style={styles.fieldInput}
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                  >
                    <option value="">Select country</option>
                    <option>India</option>
                    <option>United States</option>
                    <option>United Kingdom</option>
                    <option>Canada</option>
                    <option>Australia</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div style={styles.field}>
                <label style={styles.fieldLabel}>Message (optional)</label>
                <textarea
                  style={{ ...styles.fieldInput, resize: "none", lineHeight: 1.5 }}
                  name="message"
                  rows={3}
                  placeholder="Anything you'd like us to know…"
                  value={form.message}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* SUBMIT */}
            <div style={styles.submitWrap}>
              <button style={styles.submit} onClick={handleSubmit}>
                Donate {formatAmount(amount)} Now →
              </button>
              <div style={styles.taxNote}>
                All donations are tax deductible under{" "}
                <b style={{ color: "#6B7280", fontWeight: 500 }}>Section 80G</b>
              </div>
            </div>
          </div>

          {/* TRUST BADGES */}
          <div style={styles.trustRow}>
            <div style={styles.trustItem}>
              <div style={{ ...styles.trustIcon, background: "#FEF2F2" }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M8 2a6 6 0 100 12A6 6 0 008 2zm-.5 3h1v4h-1V5zm.5 5.5a.75.75 0 110-1.5.75.75 0 010 1.5z"
                    fill="#E8272A"
                  />
                </svg>
              </div>
              <div style={styles.trustLabel}>Verified NGO</div>
              <div style={styles.trustSub}>FCRA &amp; 80G certified</div>
            </div>
            <div style={styles.trustItem}>
              <div style={{ ...styles.trustIcon, background: "#EEF2FF" }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M8 1.5L2 4v4c0 3.3 2.5 6.4 6 7 3.5-.6 6-3.7 6-7V4L8 1.5z"
                    fill="#2B3990"
                  />
                </svg>
              </div>
              <div style={styles.trustLabel}>Secure &amp; Safe</div>
              <div style={styles.trustSub}>256-bit encrypted payments</div>
            </div>
            <div style={styles.trustItem}>
              <div style={{ ...styles.trustIcon, background: "#FFFBEB" }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M8 2c-1.5 2-4.5 2-4.5 5.5a4.5 4.5 0 009 0C12.5 4 9.5 4 8 2z"
                    fill="#F4C430"
                  />
                </svg>
              </div>
              <div style={styles.trustLabel}>Direct Impact</div>
              <div style={styles.trustSub}>Funds reach beneficiaries</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}




