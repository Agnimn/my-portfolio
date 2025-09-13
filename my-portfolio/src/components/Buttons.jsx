import { z } from "zod";

// Define the schema
const buttonPrimarySchema = z.object({
  href: z.string().optional(),
  target: z.string().optional().default("default"),
  label: z.string(),
  icon: z.any().optional(),
  classes: z.string().optional().default(""),
});

// Example of using it in the component
const ButtonPrimary = (props) => {
  // Parse and validate props
  const { href, target, label, icon, classes } =
    buttonPrimarySchema.parse(props);

  if (href) {
    return (
      <a href={href} target={target} className="btn btn-primary">
        {label}
      </a>
    );
  } else {
    return (
      <button className={`btn btn-primary ${classes}`}>
        {label}
        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : undefined}
      </button>
    );
  }
};

const buttonOutLineSchema = z.object({
  href: z.string().optional(),
  target: z.string().optional().default("_self"),
  label: z.string(),
  icon: z.any().optional(),
  classes: z.string().optional().default(""),
});

// Example of using it in the component
const ButtonOutLine = (props) => {
  // Parse and validate props
  const { href, target, label, icon, classes } =
    buttonOutLineSchema.parse(props);

  if (href) {
    return (
      <a href={href} target={target} className="btn btn-outLine">
        {label}
      </a>
    );
  } else {
    return (
      <button className={`btn btn-outLine ${classes}`}>
        {label}
        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : undefined}
      </button>
    );
  }
};

export { ButtonPrimary, ButtonOutLine };
