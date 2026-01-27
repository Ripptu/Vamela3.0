import React from 'react';
import { 
  BarChart3, 
  Users, 
  RefreshCcw, 
  Languages, 
  Workflow, 
  Zap, 
  ShieldCheck,
  BrainCircuit,
  MessageSquare
} from 'lucide-react';
import { NavItem, FeatureCard, FAQItem, TimelineStep } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: 'hero', hasDropdown: false },
  { label: 'Portfolio', href: 'portfolio', hasDropdown: false },
  { label: 'Über mich', href: 'about', hasDropdown: false },
  { label: 'Kontakt', href: 'contact', hasDropdown: false },
];

export const TIMELINE_STEPS: TimelineStep[] = [
  {
    id: 1,
    label: "Visitor Identification",
    title: "Identify up to 20% of anonymous visitors",
    description: "We identify and track anonymous shoppers from their first session, giving you behavioral insights before they ever buy.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
  },
  {
    id: 2,
    label: "Behavioral Intelligence",
    title: "Turn every click into conversion intelligence",
    description: "We analyze 384 behavioral signals - from hesitation patterns to product comparisons - creating unique profiles for each visitor. No more generic payments or one-size-fits-all campaigns.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
  },
  {
    id: 3,
    label: "Multichannel Outreach",
    title: "Reach customers when and how they prefer",
    description: "AI-powered timing sends personalized messages via email, SMS, WhatsApp, or voice calls. Each touchpoint builds on previous interactions to maximize conversion probability.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
  }
];

export const FEATURES: FeatureCard[] = [
  {
    icon: <BrainCircuit className="w-6 h-6" />,
    title: "Predictive Intelligence",
    description: "Sees customer behavior 10-30 seconds ahead with scary accuracy."
  },
  {
    icon: <RefreshCcw className="w-6 h-6" />,
    title: "Recovery Engine",
    description: "Transforms 10% cart recovery into 47% using AI psychology."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Individual Agents",
    description: "Know what categories and products visitors will explore next with 67% accuracy."
  },
  {
    icon: <Languages className="w-6 h-6" />,
    title: "Multi Language AI",
    description: "Native fluency in 50+ languages with cultural intelligence."
  },
  {
    icon: <Workflow className="w-6 h-6" />,
    title: "Channel Orchestration",
    description: "Perfect channel selection across Email, SMS, WhatsApp, Voice, Push."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Trigger Campaigns",
    description: "React to billions of events with ML-discovered segments."
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "What's the actual ROI I can expect?",
    answer: "Our partners typically see a 12-43% increase in cart recovery rates within the first 30 days of implementation, translating to significant revenue recovery."
  },
  {
    question: "Do I need technical expertise to use Markopolo?",
    answer: "Not at all. Our platform is designed for marketers, not developers. The setup is a simple one-click integration with major e-commerce platforms."
  },
  {
    question: "How much time will I need to manage this?",
    answer: "Markopolo is designed to be autonomous. Once parameters are set, the AI agents handle the heavy lifting of identification and outreach."
  }
];

export const FOOTER_LINKS = {
  Solutions: ['Visitor identification', 'Abandon cart recovery', '1:1 personalisation', 'Multi language agent', 'Multi channel agent', 'Events and audience'],
  Resources: ['Markopolo vs Klaviyo', 'Markopolo vs MoEngage', 'Markopolo vs Clevertap', 'Markopolo vs Bloomreach', 'Markopolo vs Insider', 'Blog'],
  Persona: ['CROs', 'Head of Marketing', 'Founders'],
  Company: ['About Us', 'News', 'Affiliate', 'Contact', 'Legal']
};