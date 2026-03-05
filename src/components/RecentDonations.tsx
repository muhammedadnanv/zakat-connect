import { Heart } from "lucide-react";

const RECENT_DONATIONS = [
  { message: "May Allah bless everyone in need. Alhamdulillah for this opportunity. 🤲", amount: 2000, timeAgo: "2 hours ago" },
  { message: "Fulfilling my obligation with a grateful heart. Ya Allah, accept this from me.", amount: 5000, timeAgo: "5 hours ago" },
  { message: "For the sake of Allah. May He multiply the rewards for all of us.", amount: 1000, timeAgo: "8 hours ago" },
  { message: "SubhanAllah, giving Zakat brings peace to the heart. Alhamdulillah!", amount: 3000, timeAgo: "12 hours ago" },
  { message: "May this small contribution bring big change. Ameen. 🌙", amount: 500, timeAgo: "1 day ago" },
  { message: "JazakAllahu Khairan to the team for making this so easy.", amount: 1500, timeAgo: "1 day ago" },
];

const RecentDonations = () => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-5">
        <Heart className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-display font-bold text-foreground">Recent Zakaths</h3>
      </div>
      <p className="text-sm text-muted-foreground font-body mb-6">
        Anonymous donors sharing their blessings — be inspired to give.
      </p>
      <div className="space-y-4">
        {RECENT_DONATIONS.map((donation, i) => (
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
