function NavButton({
  src,
  handleClick,
}: {
  src: string;
  handleClick: () => void;
}) {
  return (
    <button
      onClick={handleClick}
      className="hidden cursor-pointer max-md:block"
    >
      <Icon src={src} />
    </button>
  );
}

export default NavButton;

function Icon({ src }: { src: string }) {
  return (
    <svg className="aspect-square w-6">
      <use href={src}></use>
    </svg>
  );
}
