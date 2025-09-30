"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Share2, Database, Mail, MessageSquare, FileText, Shield } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const { t } = useLanguage()

  const services = [
    {
      icon: Share2,
      title: t("services.social.title"),
      description: t("services.social.description"),
      benefits: [
        t("services.social.benefit1"),
        t("services.social.benefit2"),
        t("services.social.benefit3"),
      ],
      color: "from-emerald-500 to-green-400",
    },
    {
      icon: Database,
      title: t("services.data.title"),
      description: t("services.data.description"),
      benefits: [t("services.data.benefit1"), t("services.data.benefit2"), t("services.data.benefit3")],
      color: "from-green-500 to-emerald-400",
    },
    {
      icon: Mail,
      title: t("services.email.title"),
      description: t("services.email.description"),
      benefits: [t("services.email.benefit1"), t("services.email.benefit2"), t("services.email.benefit3")],
      color: "from-emerald-600 to-green-500",
    },
    {
      icon: MessageSquare,
      title: t("services.agents.title"),
      description: t("services.agents.description"),
      benefits: [t("services.agents.benefit1"), t("services.agents.benefit2"), t("services.agents.benefit3")],
      color: "from-green-600 to-emerald-500",
    },
    {
      icon: FileText,
      title: t("services.seo.title"),
      description: t("services.seo.description"),
      benefits: [t("services.seo.benefit1"), t("services.seo.benefit2"), t("services.seo.benefit3")],
      color: "from-emerald-500 to-green-500",
    },
    {
      icon: Shield,
      title: t("services.reputation.title"),
      description: t("services.reputation.description"),
      benefits: [t("services.reputation.benefit1"), t("services.reputation.benefit2"), t("services.reputation.benefit3")],
      color: "from-green-500 to-emerald-600",
    },
  ]

  return (
    <section id="services" className="container mx-auto px-4 py-16 md:py-24 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
          {t("services.title")}
        </h2>
        <p className="max-w-2xl mx-auto text-gray-300 text-lg">{t("services.description")}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <Card
              key={index}
              className="bg-black/40 border-gray-800 hover:border-emerald-500/50 transition-all duration-500 group cursor-pointer overflow-hidden"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <CardContent className="p-8 relative">
                {/* Animated background glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Icon with animation */}
                <div className="relative mb-6">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${service.color} p-4 transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-full h-full text-black" />
                  </div>
                  {hoveredIndex === index && (
                    <div
                      className={`absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-br ${service.color} animate-ping opacity-20`}
                    />
                  )}
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-emerald-300 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                <div className="space-y-3">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <div
                      key={benefitIndex}
                      className="flex items-center gap-3 transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300"
                      style={{ transitionDelay: `${benefitIndex * 100}ms` }}
                    >
                      <div className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Animated border effect */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
