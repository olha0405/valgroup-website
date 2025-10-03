import { useState } from "react";
import { Globe, Mail, MapPin, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ValGroupWebsite() {
  const [lang, setLang] = useState("en");

  const content = {
    en: {
      title: "VALgroup s.r.o.",
      subtitle: "Electrical installation services in Germany, Slovakia, Austria",
      contact: "Contact us",
      address: "Novomestska 5, Trnava, Slovakia",
      email: "valgroupoffice@gmail.com",
    },
    sk: {
      title: "VALgroup s.r.o.",
      subtitle: "Elektromontážne práce v Nemecku, Slovensku, Rakúsku",
      contact: "Kontaktujte nás",
      address: "Novomestská 5, Trnava, Slovensko",
      email: "valgroupoffice@gmail.com",
    },
    de: {
      title: "VALgroup s.r.o.",
      subtitle: "Elektroinstallationsarbeiten in Deutschland, der Slowakei, Österreich",
      contact: "Kontaktieren Sie uns",
      address: "Novomestska 5, Trnava, Slowakei",
      email: "valgroupoffice@gmail.com",
    },
  };

  const current = content[lang];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      {/* Logo */}
      <div className="flex items-center space-x-2 mb-6">
        <Zap className="w-10 h-10 text-yellow-500" />
        <h1 className="text-3xl font-bold text-gray-800">VALgroup</h1>
      </div>

      {/* Language Switch */}
      <div className="flex space-x-2 mb-6">
        <Button variant={lang === "en" ? "default" : "outline"} onClick={() => setLang("en")}>EN</Button>
        <Button variant={lang === "sk" ? "default" : "outline"} onClick={() => setLang("sk")}>SK</Button>
        <Button variant={lang === "de" ? "default" : "outline"} onClick={() => setLang("de")}>DE</Button>
      </div>

      {/* Main Card */}
      <Card className="max-w-xl w-full shadow-lg">
        <CardContent className="p-6 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">{current.title}</h2>
          <p className="text-gray-700">{current.subtitle}</p>

          <div className="flex flex-col items-center space-y-2">
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-gray-600" />
              <span>{current.address}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-gray-600" />
              <a href={`mailto:${current.email}`} className="text-blue-600 hover:underline">
                {current.email}
              </a>
            </div>
          </div>

          <Button className="mt-4">{current.contact}</Button>
        </CardContent>
      </Card>
    </div>
  );
}