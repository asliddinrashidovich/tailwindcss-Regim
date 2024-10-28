/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      color: {
        "primary":"#374151"
      },
      backgroundColor: {
        "backBlue":"#0876DD"
      },
      width: {
        "container":"1216px",
        "mdcontainer":"688px",
        "imgWidth":"592px",
      },
      maxWidth: {
        "1216": "1216px",
        "content":"536px",
        "imgContent":"385px"
      },
      height: {
        "imgHeight":"628px"
      },
      fontSize: {
        "16":"64px",
        "9":"36px",
        "14":"56px",
        "4.5":"18",
        "12":"48px",
        "4":"16px",
        "3.5":"14px"
      },
      lineHeight: {
        "20":"80px",
        "12": "48px"
      },
      fontWeight: {
        "600":"600",
        "400":"400",
        "500":"500"
      },
      padding: {
        "2.5":"10px"
      },
      margin: {
        "18":"72px"
      },
      borderRadius: {
        "6":"6px"
      }
    },
  },
  plugins: [],
}
