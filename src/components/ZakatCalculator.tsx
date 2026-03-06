import { useState } from "react";
import { Calculator } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const ZakatCalculator = () => {
  const [wealth, setWealth] = useState<string>("");
  const zakatAmount = wealth ? Math.round(Number(wealth) * 0.025) : 0;
  const { t } = useI18n();

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-4">
        <Calculator className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-display font-bold text-foreground">{t("zakatCalculator")}</h3>
      </div>
      <p className="text-sm text-muted-foreground font-body mb-4">
        {t("zakatCalcDesc")}
      </p>
      <div className="relative mb-4">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-body">₹</span>
        <input
          type="number"
          value={wealth}
          onChange={(e) => setWealth(e.target.value)}
          className="w-full pl-8 pr-4 py-3 rounded-lg border border-border bg-card text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
          placeholder={t("enterWealth")}
          min={0}
        />
      </div>
      {zakatAmount > 0 && (
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 text-center animate-fade-in-up">
          <p className="text-sm text-muted-foreground font-body mb-1">{t("yourZakatAmount")}</p>
          <p className="text-3xl font-display font-bold text-primary">
            ₹{zakatAmount.toLocaleString("en-IN")}
          </p>
        </div>
      )}
    </div>
  );
};

export default ZakatCalculator;
