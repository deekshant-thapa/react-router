export default function Form() {
    return(
        <form action="">
            <div className="input-wrap">
                <label htmlFor="">Name</label>
                <input type="text" name="" id="" required />
            </div>
            <div className="input-wrap">
                <label htmlFor="">Email</label>
                <input type="email" name="" id="" required/>
            </div>
            <div className="input-wrap">
                <label htmlFor="">Your message</label>
                <textarea name="" id="" required></textarea>
            </div>
            <input type="submit" value="Submit" />
        </form>
    )
}