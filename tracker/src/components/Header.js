import Button from "./Button"
const Header = ({title}) => {
    return (
        <header>
            <h1>{title}</h1>
            <Button text='Add' color='blue'></Button>       
        </header>
    )
}

export default Header
