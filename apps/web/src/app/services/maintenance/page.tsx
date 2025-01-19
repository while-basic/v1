import { Button } from "@v1/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@v1/ui/card";
import {
  Activity,
  Cog,
  Cpu,
  Database,
  Server,
  Shield,
  Wrench,
} from "lucide-react";
import Image from "next/image";

const maintenanceServices = [
  {
    id: "data-center",
    title: "Data Center Maintenance",
    description:
      "Comprehensive data center maintenance services including server management, cooling systems, and power distribution units.",
    icon: Server,
    features: [
      "24/7 monitoring and maintenance",
      "Cooling system optimization",
      "Power distribution maintenance",
      "Server rack management",
      "Emergency response services",
    ],
  },
  {
    id: "preventative",
    title: "Preventative Maintenance",
    description:
      "Proactive maintenance programs to prevent equipment failures and optimize system performance.",
    icon: Shield,
    features: [
      "Regular system inspections",
      "Equipment performance analysis",
      "Predictive maintenance scheduling",
      "Component lifecycle management",
      "Maintenance documentation",
    ],
  },
  {
    id: "mechatronics",
    title: "Mechatronics Systems",
    description:
      "Expert maintenance and optimization of mechatronic systems combining mechanical, electrical, and control components.",
    icon: Cpu,
    features: [
      "System integration",
      "PLC programming",
      "Automation controls",
      "Robotic systems maintenance",
      "Performance optimization",
    ],
  },
  {
    id: "industrial",
    title: "Industrial Equipment",
    description:
      "Comprehensive maintenance services for industrial equipment and manufacturing systems.",
    icon: Wrench,
    features: [
      "Equipment troubleshooting",
      "Repair services",
      "Parts replacement",
      "System upgrades",
      "Performance monitoring",
    ],
  },
];

// Structured data for the maintenance services page
const maintenanceJsonLd = {
  "@context": "https://schema.org",
  "@type": "MaintenanceService",
  name: "Christopher Celaya Maintenance Services",
  provider: {
    "@type": "Person",
    name: "Christopher Celaya",
    url: "https://chriscelaya.com",
  },
  areaServed: [
    {
      "@type": "City",
      name: "El Paso",
      "@id": "https://www.wikidata.org/wiki/Q134034",
    },
    {
      "@type": "City",
      name: "Santa Teresa",
      "@id": "https://www.wikidata.org/wiki/Q7419231",
    },
  ],
  serviceType: [
    "Data Center Maintenance",
    "Preventative Maintenance",
    "Mechatronics Systems",
    "Industrial Equipment",
  ],
  description:
    "Expert maintenance services for data centers, industrial equipment, and mechatronic systems in El Paso, TX and Santa Teresa, NM",
};

function MaintenanceStructuredData() {
  return (
    <script type="application/ld+json" suppressHydrationWarning>
      {JSON.stringify(maintenanceJsonLd)}
    </script>
  );
}

export default function MaintenancePage() {
  return (
    <>
      <MaintenanceStructuredData />
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Data Center & Industrial Maintenance Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Expert maintenance solutions for data centers, industrial equipment,
            and mechatronic systems in El Paso, TX and Santa Teresa, NM.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg">Schedule Maintenance</Button>
            <Button size="lg" variant="outline">
              Contact Us
            </Button>
          </div>
        </section>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {maintenanceServices.map((service) => (
            <Card key={service.id} className="border-2">
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </div>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={`${service.id}-feature-${idx}`}
                      className="flex items-center gap-2"
                    >
                      <Cog className="w-4 h-4 text-muted-foreground" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Areas */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Service Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-lg border-2">
              <h3 className="text-xl font-semibold mb-4">El Paso, Texas</h3>
              <ul className="space-y-2">
                <li>Data center facilities</li>
                <li>Manufacturing plants</li>
                <li>Industrial complexes</li>
                <li>Technology centers</li>
              </ul>
            </div>
            <div className="p-6 rounded-lg border-2">
              <h3 className="text-xl font-semibold mb-4">
                Santa Teresa, New Mexico
              </h3>
              <ul className="space-y-2">
                <li>Industrial parks</li>
                <li>Manufacturing facilities</li>
                <li>Distribution centers</li>
                <li>Technology hubs</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your maintenance needs and discover how
            we can help optimize your operations.
          </p>
          <Button size="lg" className="gap-2">
            <Wrench className="w-4 h-4" /> Schedule Consultation
          </Button>
        </section>
      </div>
    </>
  );
}
