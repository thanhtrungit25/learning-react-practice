import '../../stylesheets/AddColorForm.scss'

const AddColorForm = () => {

    return (
        <form className="add-color">
            <input type="text"
                   placeholder="color title..." required/>
            <input type="color" required/>
            <button>ADD</button>
        </form>
    )

}

export default AddColorForm