import Container from "./Container";
import Typography from "./Typography";

interface Photo {
  alt: string;
  src: string;
  href: string;
}

const photos: Photo[] = [
  {
    src: "/TMAC-OCEANpromo_01-scaled.png",
    href: "/TMAC-OCEANpromo_01.jpg",
    alt: "Placeholder alt text for now",
  },
  // {
  //   src: "/TMAC-OCEANpromo_02-scaled.png",
  //   href: "/TMAC-OCEANpromo_02.jpg",
  //   alt: "Placeholder alt text for now",
  // },
  {
    src: "/TMAC-OCEANpromo_05-scaled.png",
    href: "/TMAC-OCEANpromo_05.jpg",
    alt: "Placeholder alt text for now",
  },
  {
    src: "/TMAC-OCEANpromo_06-scaled.png",
    href: "/TMAC-OCEANpromo_06.jpg",
    alt: "Placeholder alt text for now",
  },
  {
    src: "/TMAC_Fantasy01-scaled.png",
    href: "/TMAC_Fantasy01.jpg",
    alt: "Placeholder alt text for now",
  },
  {
    src: "/TMAC_Fantasy02-scaled.png",
    href: "/TMAC_Fantasy02.jpg",
    alt: "Placeholder alt text for now",
  },
  // {
  //   src: "/TMAC_Fantasy03-scaled.png",
  //   href: "/TMAC_Fantasy03.jpg",
  //   alt: "Placeholder alt text for now",
  // },
  {
    src: "/TMAC_Fantasy04-scaled.png",
    href: "/TMAC_Fantasy04.jpg",
    alt: "Placeholder alt text for now",
  },
  // {
  //   src: "/TMAC_Fantasy05-scaled.png",
  //   href: "/TMAC_Fantasy05.jpg",
  //   alt: "Placeholder alt text for now",
  // },
  {
    src: "/TMAC_Fantasy06-scaled.png",
    href: "/TMAC_Fantasy06.jpg",
    alt: "Placeholder alt text for now",
  },
  // {
  //   src: "/TMAC_Photographer_Stellan Runge1-scaled.png",
  //   href: "/TMAC_Photographer_Stellan Runge1.jpg",
  //   alt: "Placeholder alt text for now",
  // },
  {
    src: "/TMAC_Photographer_Stellan Runge2-scaled.png",
    href: "/TMAC_Photographer_Stellan Runge2.jpg",
    alt: "Placeholder alt text for now",
  },
];

const Photos = () => {
  return (
    <div className="bg-gradient-to-b from-emerald-900/10 to-zinc-900">
      <Container>
        <Typography variant="h2">Photos</Typography>
        <div className="relative">
          <div className="columns-3xs gap-8 space-y-8">
            {photos.map(({ alt, src, href }, index) => (
              <div className="relative" key={href + index}>
                <a href={"/images" + href}>
                  <img
                    className="rounded w-full"
                    alt={alt}
                    src={"/images" + src}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Photos;
