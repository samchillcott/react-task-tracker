import Button from "./Button"
import Tasks from "./Tasks"

const Header = () => {
    return (
        <div className='header'>
            <h1>Task Tracker</h1>
            <Button color={'green'} text={"Add"} />
            <Tasks />
        </div>
    )
}

export default Header
