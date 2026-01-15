const TypoElement = ({title, subtitle, textContent} : {title: string, subtitle: string, textContent: string}) => {
    return ( 
        <div className="flex flex-col items-center lg:items-start">
            <h2 className="preset-4 pb-2 md:pb-4">{subtitle}</h2>
            <h1 className="preset-3 pb-6">{title}</h1>
            <p className="para">{textContent}</p>
        </div>
     );
}
 
export default TypoElement;       