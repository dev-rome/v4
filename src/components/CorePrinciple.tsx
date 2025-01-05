interface CorePrincipleProps {
  number: string;
  title: string;
  description: string;
}

const CorePrinciple: React.FC<CorePrincipleProps> = ({
  number,
  title,
  description,
}) => (
  <div className="flex flex-col gap-3">
    <span className="text-5xl text-light dark:text-dark">{number}</span>
    <h3 className="text-3xl text-light dark:text-dark">{title}</h3>
    <p className="text-light dark:text-dark">{description}</p>
  </div>
);

export default CorePrinciple;
