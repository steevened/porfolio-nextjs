interface Service {
  title: string;
  subtitle: string;
  description: string;
}

const services: Service[] = [
  {
    title: 'Web Development',
    subtitle:
      'I build web applications and websites that are well-designed, accessible, and performant.',
    description:
      "I don't just develop websites, I make them beautiful, fast and accessible to people with disabilities. My goal is to work with you to help you reach your full potential.",
  },
  {
    title: 'Code Audit',
    subtitle:
      'I make sure your code is accessible, scalable and performs well.',
    description:
      'Code Auditing is the process of auditing software code for accessibility, scalability and performance. My expertise includes assisting in developing best practices for secure coding, finding bugs and defects in a system, recommending best practices for scalability and performance.',
  },
];

export const Services = () => {
  return (
    <div className="mt-24 space-y-14">
      <div>
        <h3 className="text-3xl font-semibold md:text-4xl">
          Services I provide
        </h3>
        <h4 className="mt-2 text-lg font-medium md:mt-5 md:text-xl">
          As a software developer with a passion for creating websites that
          people love.
        </h4>
      </div>

      <div className="space-y-5">
        {services.map((service) => (
          <div key={service.title}>
            <h4 className="text-xl font-semibold">{service.title}</h4>

            <h5 className="mt-2 subtitle-2">{service.subtitle}</h5>
            <p className="mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
