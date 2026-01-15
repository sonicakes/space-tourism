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
    <div className="flex justify-end">
      <img
        src={element.images.portrait}
        className=" w-full max-w-150 max-h-150"
      />
    </div>
  );
};

export default TechImg;
