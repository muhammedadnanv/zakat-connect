import { useMemo } from "react";
import DonationForm from "@/components/DonationForm";
import ZakatCalculator from "@/components/ZakatCalculator";
import RecentDonations from "@/components/RecentDonations";
import IslamicGreeting from "@/components/IslamicGreeting";
import LanguageSwitch from "@/components/LanguageSwitch";
import heroBg from "@/assets/hero-bg.jpg";
import { Heart, Star, Shield, BookOpen } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const QURAN_VERSES = [
  { text: "Take from their wealth a charity by which you purify them and cause them increase.", ref: "Quran 9:103" },
  { text: "Who is it that would loan Allah a goodly loan so He may multiply it for him many times over?", ref: "Quran 2:245" },
  { text: "Those who spend their wealth in the way of Allah and then do not follow up what they have spent with reminders or injury will have their reward with their Lord.", ref: "Quran 2:262" },
  { text: "The example of those who spend their wealth in the way of Allah is like a seed which grows seven ears; in each ear is a hundred grains.", ref: "Quran 2:261" },
  { text: "And establish prayer and give Zakat, and whatever good you put forward for yourselves — you will find it with Allah.", ref: "Quran 2:110" },
  { text: "Never will you attain the good [reward] until you spend [in the way of Allah] from that which you love.", ref: "Quran 3:92" },
  { text: "Indeed, the men who practice charity and the women who practice charity and have loaned Allah a goodly loan — it will be multiplied for them, and they will have a noble reward.", ref: "Quran 57:18" },
  { text: "And be steadfast in prayer and regular in charity: And whatever good ye send forth for your souls before you, ye shall find it with Allah.", ref: "Quran 2:110" },
];

const Index = () => {
  const { t } = useI18n();
  const verse = useMemo(
    () => QURAN_VERSES[Math.floor(Math.random() * QURAN_VERSES.length)],
    []
  );

  return (
    <>
      <IslamicGreeting />
      <LanguageSwitch />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-15"
            style={{ backgroundImage: `url(${heroBg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background" />

          <div className="relative z-10 container mx-auto px-4 pt-12 pb-8">
            <div className="text-center mb-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-3">
                {t("heroTitle")} <span className="text-primary">{t("heroBrand")}</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-body max-w-xl mx-auto">
                {t("heroSubtitle")}
              </p>
            </div>

            {/* Rotating Quran Verse */}
            <div className="max-w-2xl mx-auto mb-6 text-center">
              <blockquote className="text-sm md:text-base text-muted-foreground font-body italic border-l-4 border-accent pl-4 py-2 text-left">
                "{verse.text}"
                <cite className="block text-xs mt-1 not-italic text-accent font-medium">— {verse.ref}</cite>
              </blockquote>
            </div>

            <div className="max-w-2xl mx-auto mb-10">
              <div className="bg-primary/5 border border-primary/15 rounded-xl p-4 flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <p className="text-sm text-foreground/80 font-body">
                  <span className="font-semibold text-primary">{t("everyZakatReaches")}</span> — {t("hadithText")}
                  <span className="text-xs text-muted-foreground"> {t("hadithSource")}</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mb-12">
            {[
              { icon: Shield, label: t("secureUpi") },
              { icon: Heart, label: t("withDua") },
              { icon: Star, label: t("blessed") },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs font-body text-muted-foreground">{label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Zakat Calculator */}
        <section className="container mx-auto px-4 pb-10">
          <div className="max-w-lg mx-auto bg-card rounded-2xl p-6 md:p-8 shadow-lg border border-border">
            <ZakatCalculator />
          </div>
        </section>

        {/* Donation Form */}
        <section className="container mx-auto px-4 pb-10">
          <div className="max-w-lg mx-auto bg-card rounded-2xl p-6 md:p-8 shadow-lg border border-border">
            <h2 className="text-2xl font-display font-bold text-foreground mb-6 text-center">
              {t("giveYourZakat")}
            </h2>
            <DonationForm />
          </div>
        </section>

        {/* Recent Donations */}
        <section className="container mx-auto px-4 pb-16">
          <div className="max-w-lg mx-auto bg-card rounded-2xl p-6 md:p-8 shadow-lg border border-border">
            <RecentDonations />
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border py-6 text-center">
          <p className="text-xs text-muted-foreground font-body">
            {t("copyright")(new Date().getFullYear())}
          </p>
          <p className="text-xs text-muted-foreground font-body mt-1">
            {t("footerBlessing")}
          </p>
          <p className="text-xs text-muted-foreground font-body mt-3 pt-3 border-t border-border/50 flex items-center justify-center gap-2">
            {t("developedBy")}{" "}
            <a
              href="https://www.linkedin.com/in/muhammedadnanvv/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-foreground hover:text-primary transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              Muhammad Adnan VV
            </a>
          </p>
        </footer>
      </div>
    </>
  );
};

export default Index;
