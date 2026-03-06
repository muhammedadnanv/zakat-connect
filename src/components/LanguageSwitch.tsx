import { useI18n, Lang } from "@/lib/i18n";
import { Globe } from "lucide-react";

const LanguageSwitch = () => {
  const { lang, setLang } = useI18n();

  return (
    <div className="fixed top-4 right-4 z-40 flex items-center gap-1 bg-card/90 backdrop-blur-sm border border-border rounded-full px-1 py-1 shadow-md">
      <Globe className="w-4 h-4 text-muted-foreground ml-2" />
      {(["ml", "en"] as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-3 py-1.5 rounded-full text-xs font-body font-medium transition-all ${
            lang === l
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {l === "ml" ? "മലയാളം" : "English"}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitch;
