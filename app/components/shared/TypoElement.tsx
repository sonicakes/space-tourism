const TypoElement = ({title, subtitle, textContent} : {title: string, subtitle: string, textContent: string}) => {
    return ( 
        <div>
            <h2>{subtitle}</h2>
            <h1>{title}</h1>
            <p>{textContent}</p>
        </div>
     );
}
 
export default TypoElement;