function SectionLabel({
  numberText,
  label,
}: {
  numberText: string;
  label: string;
}) {
  return (
    <p className="font-barlow-condensed text-[1.75rem] tracking-[4px] text-white uppercase max-md:text-center max-md:text-base">
      <span className="mr-6 font-bold tracking-[4.72px] text-white/25">
        {numberText}
      </span>
      {label}
    </p>
  );
}

export default SectionLabel;
