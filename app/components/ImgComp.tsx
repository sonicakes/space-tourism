interface ImageSet {
  png: string;
  webp: string;
}

interface BaseElement {
  images: ImageSet;
}

const ImgComp = <T extends BaseElement>({ element, type }: { element: T, type?: string }) => {
  const destinationClasses= "min-w-37.5 min-h-37.5 max-w-37.5 max-h-37.5 md:min-h-75 md:min-w-75 md:max-h-75 md:max-w-75 lg:min-w-100 lg:min-h-100 lg:max-w-100 lg:max-h-100 xl:min-w-120 xl:min-h-120 xl:max-w-120 xl:max-h-120"
  const crewClasses = "z-50 border-blue-900 border-b-2 absolute top-0 left-0 h-full w-full object-contain";
  
  if (!element || !element.images) {
    return <div className="image-placeholder" />; 
  }
  return (
    <div className={type!='dest' ? 'py-6 md:py-10 lg:py-0 px-7' : ''}> 
    <div className={`${type!='dest' ? 'relative max-h-85  min-h-85 md:max-h-140 md:min-h-140 lg:max-h-150 lg:min-h-150 overflow-hidden pt-[125%] lg:pt-[122%]' : 'py-6 md:py-10 lg:py-0 px-7'}  flex justify-center items-center xl:items-start xl:justify-start `}
    >
      <img src={element.images.webp} className={`${type==='dest' ? destinationClasses : crewClasses}`}/>
    {type!='dest' && (<div className="absolute backdrop-blur-[1px] bg-linear-to-b from-transparent to-blue-900 w-full h-1/5  bottom-0 z-100"></div>)}  
    </div>
    </div>
  );
};

export default ImgComp;
