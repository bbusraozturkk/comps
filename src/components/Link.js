import classNames from "classnames";
import useNavigation from '../hooks/use-navigation';


function Link ({to, children, className, activeClassName}) {

    const {navigate, currentPath} = useNavigation();

    const classes= classNames('text-blue-500',className, currentPath === to && activeClassName)

    const handleClick = (event) => {
        if (event.metaKey || event.ctrlKey) {
            return;
        }

        event.preventDefault();

        // Yeni pencerede sayfayı açmak için window.open kullanın
        window.open(to, "_blank");

        // veya
        navigate(to);
    };

    return <a className={classes} href={to} onClick={handleClick}>{children}</a>
}

export default Link;
