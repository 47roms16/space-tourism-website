interface IconSrc {
  src: string;
}

function NavButton({ src }: IconSrc) {
  return (
    <button className="hidden cursor-pointer max-md:block">
      <Icon src={src} />
    </button>
  );
}

export default NavButton;

function Icon({ src }: IconSrc) {
  return (
    <svg className="aspect-square w-6">
      <use href={src}></use>
    </svg>
  );
}
