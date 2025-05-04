interface TextContent {
  title: string;
  description: string;
  headingClassName: string;
}

function TextContent({ title, description, headingClassName }: TextContent) {
  return (
    <div>
      <h1 className={`${headingClassName}`}>{title}</h1>
      <p className="description | text-lavender-blue font-barlow max-xs:min-h-[10.125rem] block min-h-32 max-w-[53ch] text-lg leading-[1.8] max-xl:min-h-36 max-xl:text-base max-lg:min-h-[5.375rem] max-lg:max-w-[70ch] max-md:text-[0.9375rem] max-sm:min-h-[6.75rem]">
        {description}
      </p>
    </div>
  );
}

export default TextContent;
