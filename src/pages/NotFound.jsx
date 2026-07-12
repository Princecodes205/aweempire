import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";
import Heading from "../components/ui/Heading.jsx";
import Eyebrow from "../components/ui/Eyebrow.jsx";
import Button from "../components/ui/Button.jsx";

export default function NotFound() {
  return (
    <Section>
      <Container className="text-center">
        <Eyebrow>404</Eyebrow>
        <Heading as="h1" size="display" className="mt-3">
          This page is not in the AWE Empire.
        </Heading>
        <p className="mx-auto mt-6 max-w-md text-ink/70">
          The page you are looking for has moved or never existed. Head back to the home page or call us.
        </p>
        <div className="mt-8">
          <Button to="/" variant="primary">
            Return home
          </Button>
        </div>
      </Container>
    </Section>
  );
}
