import { useState } from "react";
import { Heart, Send, CheckCircle } from "lucide-react";

const PRESET_AMOUNTS = [500, 1000, 2000, 5000];
const UPI_ID = "muhammed.39@superyes";
const MIN_AMOUNT = 500;
const MAX_AMOUNT = 5000;

const DonationForm = () => {
  const [amount, setAmount] = useState<number>(1000);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [step, setStep] = useState<"form" | "confirm">("form");

  const isValidAmount = amount >= MIN_AMOUNT && amount <= MAX_AMOUNT;

  const handlePay = () => {
    if (!isValidAmount) return;
    const upiUrl = `upi://pay?pa=${UPI_ID}&pn=Zakath%20Paise&am=${amount}&cu=INR&tn=${encodeURIComponent(
      message || "Zakat Donation"
    )}`;
    window.location.href = upiUrl;
    setStep("confirm");
  };

  if (step === "confirm") {
    return (
      <div className="text-center py-12 animate-fade-in-up">
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-primary" />
        </div>
        <h3 className="text-2xl font-display font-bold text-foreground mb-2">
          JazakAllahu Khairan!
        </h3>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          May Allah accept your Zakat of <span className="font-semibold text-primary">₹{amount.toLocaleString("en-IN")}</span> and multiply your rewards.
        </p>
        {name && (
          <p className="text-sm text-muted-foreground">From: {name}</p>
        )}
        <button
          onClick={() => {
            setStep("form");
            setAmount(1000);
            setName("");
            setMessage("");
          }}
          className="mt-8 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-body font-medium hover:opacity-90 transition-opacity"
        >
          Give Again
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Amount Selection */}
      <div className="mb-8">
        <label className="block text-sm font-body font-medium text-muted-foreground mb-3">
          Select Amount (₹)
        </label>
        <div className="grid grid-cols-4 gap-3 mb-4">
          {PRESET_AMOUNTS.map((preset) => (
            <button
              key={preset}
              onClick={() => setAmount(preset)}
              className={`py-3 rounded-lg font-body font-medium text-sm transition-all ${
                amount === preset
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-muted text-muted-foreground hover:bg-primary/10"
              }`}
            >
              ₹{preset.toLocaleString("en-IN")}
            </button>
          ))}
        </div>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-body">₹</span>
          <input
            type="number"
            min={MIN_AMOUNT}
            max={MAX_AMOUNT}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full pl-8 pr-4 py-3 rounded-lg border border-border bg-card text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
            placeholder="Enter custom amount"
          />
        </div>
        {!isValidAmount && amount > 0 && (
          <p className="text-sm text-destructive mt-2 font-body">
            Amount must be between ₹{MIN_AMOUNT.toLocaleString("en-IN")} and ₹{MAX_AMOUNT.toLocaleString("en-IN")}
          </p>
        )}
      </div>

      {/* Name */}
      <div className="mb-6">
        <label className="block text-sm font-body font-medium text-muted-foreground mb-2">
          Your Name (optional)
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={100}
          className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
          placeholder="Enter your name"
        />
      </div>

      {/* Message */}
      <div className="mb-8">
        <label className="block text-sm font-body font-medium text-muted-foreground mb-2">
          Your Dua / Message
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={500}
          rows={3}
          className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
          placeholder="May Allah accept this and bless us all..."
        />
      </div>

      {/* Pay Button */}
      <button
        onClick={handlePay}
        disabled={!isValidAmount}
        className="w-full py-4 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-lg flex items-center justify-center gap-3 hover:opacity-90 transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-lg"
      >
        <Heart className="w-5 h-5" />
        Pay ₹{amount.toLocaleString("en-IN")} via UPI
        <Send className="w-5 h-5" />
      </button>

      <p className="text-center text-xs text-muted-foreground mt-4 font-body">
        UPI ID: {UPI_ID}
      </p>
    </div>
  );
};

export default DonationForm;
