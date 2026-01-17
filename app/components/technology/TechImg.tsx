interface ImageSet {
  portrait: string;
  landscape: string;
}

interface BaseElement {
  images: ImageSet;
}

const TechImg = <T extends BaseElement>({ element }: { element: T }) => {
  if (!element || !element.images) {
    return <div className="image-placeholder" />;
  }
  return (
    <div className="flex lg:justify-end">
        <picture className="w-full h-full">
            <source media="(min-width: 1024px)" srcSet={element.images.portrait} />
            <source media="(min-width: 768px)" srcSet={element.images.landscape} />
            <img
              src={element.images.landscape}
              alt="tech img"
              className="w-full h-full object-cover min-h-65 max-h-65 md:max-h-89 md:min-h-89 lg:max-h-150 2xl:min-w-150"
            />
          </picture>
    </div>
  );
};

export default TechImg;
