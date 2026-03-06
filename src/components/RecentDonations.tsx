import { Heart } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const RecentDonations = () => {
  const { t } = useI18n();
  const donations = t("donations") as Array<{ message: string; amount: number; timeAgo: string }>;

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-5">
        <Heart className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-display font-bold text-foreground">{t("recentZakaths")}</h3>
      </div>
      <p className="text-sm text-muted-foreground font-body mb-6">
        {t("recentDesc")}
      </p>
      <div className="space-y-4">
        {donations.map((donation, i) => (
          <div
            key={i}
            className="bg-muted/50 rounded-xl p-4 border border-border/50"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <p className="text-sm font-body text-foreground/80 italic mb-2">"{donation.message}"</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground font-body">{donation.timeAgo}</span>
              <span className="text-sm font-body font-semibold text-primary">₹{donation.amount.toLocaleString("en-IN")}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentDonations;
