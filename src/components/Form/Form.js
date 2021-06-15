/** @jsx jsx */
import { jsx } from "theme-ui"

function Footer() {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      action="/"
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
      }}
    >
      <input type="hidden" name="form-name" value="contact" />
      <label sx={{ variant: "styles.label" }}>Name:</label>
      <input
        sx={{ variant: "styles.input" }}
        type="text"
        name="name"
        placeholder="Your name"
        required
      />
      <label sx={{ variant: "styles.label" }}>Email:</label>
      <input
        sx={{ variant: "styles.input" }}
        type="text"
        name="email"
        placeholder="Your email address"
        required
      />
      <label sx={{ variant: "styles.label" }}>Phone Number:</label>
      <input
        sx={{ variant: "styles.input" }}
        type="tel"
        name="phone-number"
        placeholder="Your phone number"
      />
      <label sx={{ variant: "styles.label" }}>Subject:</label>
      <input
        sx={{ variant: "styles.input" }}
        type="text"
        name="subject"
        placeholder="Your enquiry"
      />
      <label sx={{ variant: "styles.label" }}>Message:</label>
      <textarea
        sx={{ variant: "styles.input", resize: "none" }}
        type="text"
        name="message"
        placeholder="Type something here..."
        rows="10"
        required
      />
      <button sx={{ variant: "styles.button" }} type="submit" value="Submit">
        Submit
      </button>
    </form>
  )
}

export default Footer
