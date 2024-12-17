export default function Home() {
  return (
    <section
      id="hero"
      style={{
        textAlign: "center",
        padding: "4rem 1rem",
        backgroundColor: "#f7f9fc",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          marginBottom: "1rem",
          color: "#333",
        }}
      >
        Welcome to <span style={{ color: "#4285F4" }}>GMailHub</span>
      </h1>
      <p
        style={{
          fontSize: "1.2rem",
          color: "#555",
          marginBottom: "2rem",
        }}
      >
        Seamlessly access and manage your Google emails on the web.
      </p>
      <a
        href="/auth/google"
        style={{
          backgroundColor: "#4285F4",
          color: "white",
          padding: "0.8rem 1.5rem",
          textDecoration: "none",
          fontSize: "1.2rem",
          borderRadius: "5px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
        }}
      >
        Login with Google
      </a>
    </section>
  );
}
