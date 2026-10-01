import { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { getServiceBySlug } from "@/data/services";

export async function generateMetadata(): Promise<Metadata> {
  const service = getServiceBySlug("ceyiz-esyasi-tasima");
  if (!service) return {};
  return {
    title: service.title,
    description: service.metaDescription,
    alternates: { canonical: '/ceyiz-esyasi-tasima' },
  };
}

export default function Page() {
  const service = getServiceBySlug("ceyiz-esyasi-tasima");
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
