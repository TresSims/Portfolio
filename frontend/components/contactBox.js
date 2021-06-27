const ContactBox = ({}) => {
  const sendMessage = event => {
    event.preventDefault();
  };

  return (
    <div className="contactBox">
      <form onSubmit={sendMessage}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" autoComplete="name" required />
        <label htmlFor="email">E-Mail</label>
        <input id="email" autoComplete="email" />
        <label htmlFor="message">Message</label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactBox;
