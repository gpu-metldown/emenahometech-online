import React from "react";


import Button from "./components/ui/button";

import { Card, CardContent } from "./components/ui/card";


export default function SmartHomeService() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white p-10 text-center">
        <h1 className="text-4xl font-bold">Emena Home Tech</h1>
        <p className="mt-2">Seamlessly control your home with AI-powered automation.</p>
        <Button className="mt-4 bg-white text-blue-600 hover:bg-gray-200">Get Started</Button>
      </header>

      {/* Services Section */}
      <section className="p-10">
        <h2 className="text-3xl font-semibold text-center">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {["Lighting Control", "Security Monitoring", "Energy Efficiency"].map((service) => (
            <Card key={service} className="p-4 shadow-lg">
              <CardContent>
                <h3 className="text-xl font-bold">{service}</h3>
                <p className="text-gray-600 mt-2">Automate and optimize your {service.toLowerCase()} with AI-driven solutions.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white p-10">
        <h2 className="text-3xl font-semibold text-center">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {["AI-Powered Automation", "24/7 Monitoring", "Easy Integration"].map((feature) => (
            <Card key={feature} className="p-4 shadow-lg">
              <CardContent>
                <h3 className="text-xl font-bold">{feature}</h3>
                <p className="text-gray-600 mt-2">Experience the future with {feature.toLowerCase()} for your smart home.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-semibold">Contact Us</h2>
        <p className="text-gray-600 mt-2">Get in touch to transform your home today.</p>
        <Button className="mt-4 bg-blue-600 text-white hover:bg-blue-500">Request a Quote</Button>
      </section>
    </div>
  );
}
