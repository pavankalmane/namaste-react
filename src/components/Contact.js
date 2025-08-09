const Contact=()=>{
    return(
        <div className="contact">
            <h1 className="font-bold text-3xl p-4 m-4">Contact Us</h1>
            <form>
                <input type="text" className="border-2 border-gray-300 p-2 m-2" placeholder="name"/>
                <input type="email" className="border-2 border-gray-300 p-2 m-2" placeholder="email"/>
                <input className="border-2 border-gray-300 p-2 m-2" placeholder="message"/>
                <button type="submit" className="bg-blue-500 text-white p-2 m-2">Send</button>
            </form>
        </div>
    )
}
export default Contact;