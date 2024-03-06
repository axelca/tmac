import { Component } from "../Types/common";
import Container from "./Container";
import Typography from "./Typography";

interface Props extends Component {
  title: string;
  videos?: string[];
  audio?: string;
}

const Article = ({ title, videos, audio, children }: Props) => {
  const articleStyles = [
    "odd:bg-gradient-to-b from-cyan-900/10 to-zinc-900",
  ].join(" ");

  const gridStyles = [
    "grid grid-cols-12",
    ...(videos || audio ? ["gap-4 md:gap-12"] : []),
  ].join(" ");

  return (
    <article className={articleStyles}>
      <Container>
        <div className={gridStyles}>
          <div className="col-span-12 md:col-span-6">
            <Typography variant="h2">{title}</Typography>
            {videos?.map((video) => (
              <iframe
                key={video}
                className="w-full aspect-video mb-4"
                src={video}
                title={title + " music video"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ))}
          </div>
          {children ? (
            <div className="col-span-12 md:col-span-6">{children}</div>
          ) : null}
        </div>
      </Container>
    </article>
  );
};

export default Article;
