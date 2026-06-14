export default function ApplicationLogo(props) {
    return (
        <img 
            {...props} 
            src="/navyralogo.webp" 
            alt="Navyra Studio Logo" 
            style={{ objectFit: 'contain' }}
        />
    );
}
