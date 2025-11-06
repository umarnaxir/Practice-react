"use client";
import { Rocket, Smartphone, Code, Zap, Globe, Shield } from "lucide-react";
import { Section, ContentWrapper, SectionTitle, SectionSubtitle, Grid, Card, HighlightCard, IconWrapper, CardTitle, Text, Button } from "./SharedStyles";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Rocket size={28} />,
      title: "Props Magic",
      description: "Pass props to styled components and create dynamic styles based on component state.",
      highlight: true
    },
    {
      icon: <Code size={28} />,
      title: "Scoped Styles",
      description: "No more CSS conflicts! Every component has its own isolated styles that won't leak.",
      highlight: false
    },
    {
      icon: <Zap size={28} />,
      title: "Theming",
      description: "Create consistent design systems with ThemeProvider. Switch themes instantly.",
      highlight: false
    },
    {
      icon: <Globe size={28} />,
      title: "Server Rendering",
      description: "Full SSR support for Next.js and other frameworks. Critical CSS extraction built-in.",
      highlight: true
    },
    {
      icon: <Shield size={28} />,
      title: "TypeScript Ready",
      description: "Complete TypeScript support with autocompletion and type checking for props.",
      highlight: false
    },
    {
      icon: <Smartphone size={28} />,
      title: "Mobile First",
      description: "Build responsive designs with media queries right inside your styled components.",
      highlight: false
    }
  ];

  return (
    <Section>
      <ContentWrapper>
        <SectionTitle>Core Features</SectionTitle>
        <SectionSubtitle>Everything you need to build modern web applications</SectionSubtitle>
        <Grid>
          {features.map((feature, index) => {
            const CardComponent = feature.highlight ? HighlightCard : Card;
            return (
              <CardComponent key={index}>
                <IconWrapper $highlight={feature.highlight} $rounded>
                  {feature.icon}
                </IconWrapper>
                <CardTitle>{feature.title}</CardTitle>
                <Text $muted>{feature.description}</Text>
                <Button $primary={feature.highlight}>Learn More</Button>
              </CardComponent>
            );
          })}
        </Grid>
      </ContentWrapper>
    </Section>
  );
}

