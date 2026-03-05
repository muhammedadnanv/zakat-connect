import { useState, useEffect } from "react";
import { Heart, Send, CheckCircle } from "lucide-react";
import { playIslamicChime } from "@/lib/islamicSound";

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
    playIslamicChime();
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
        <p className="text-muted-foreground mb-2 max-w-md mx-auto">
          May Allah accept your Zakat of <span className="font-semibold text-primary">₹{amount.toLocaleString("en-IN")}</span> and multiply your rewards.
        </p>
        <p className="text-sm text-primary/80 font-body italic mb-6">
          Every Zakat you give will reach to Allah ﷻ — it purifies your wealth and soul.
        </p>
        {name && (
          <p className="text-sm text-muted-foreground mb-4">From: {name}</p>
        )}
        {/* WhatsApp Share */}
        <a
          href={`https://wa.me/?text=${encodeURIComponent(
            `Alhamdulillah! I just gave my Zakat of ₹${amount.toLocaleString("en-IN")} through Zakath Paise. May Allah accept it and bless us all. 🤲\n\nGive your Zakat too: ${window.location.href}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[hsl(142,70%,40%)] text-[hsl(0,0%,100%)] font-body font-medium hover:opacity-90 transition-opacity mb-4"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          Share on WhatsApp
        </a>
        <br />
        <button
          onClick={() => {
            setStep("form");
            setAmount(1000);
            setName("");
            setMessage("");
          }}
          className="mt-4 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-body font-medium hover:opacity-90 transition-opacity"
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
