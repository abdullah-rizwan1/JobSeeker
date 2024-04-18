export const Contact = () => {
    return (
        <div className="contact">
            <h3>Contact Us</h3>
            <form action="">
                <label>
                    <span>Your email:</span>
                    <input type="email" name='email' rquired />
                </label>
                <label>
                    <span>Youre message: </span>
                    <textarea name="message" required></textarea>
                </label>
                <button>Sumbit</button>
            </form>
        </div>
    )
}