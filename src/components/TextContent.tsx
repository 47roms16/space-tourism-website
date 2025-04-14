interface TextContent {
  title: string;
  description: string;
  headingClassName: string;
}

function TextContent({ title, description, headingClassName }: TextContent) {
  return (
    <div>
      <h1 className={headingClassName}>{title}</h1>
      <p className="text-lavender-blue font-barlow block max-w-[53ch] text-lg leading-[1.8] max-lg:max-w-[70ch] max-lg:text-base max-md:text-[0.9375rem]">
        {description}
      </p>
    </div>
  );
}

export default TextContent;
