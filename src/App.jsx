import "./App.css";
import Button from "./components/Forms/Button/Button";
import Input from "./components/Forms/Input/Input";
import useForm from "./components/Hooks/useForm";

function App() {
  const firstName = useForm("firstName");
  const lastName = useForm("lastName");
  const email = useForm("email");
  const password = useForm("password");

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <article className="App container">
      <section className="animeLeft">
        <h1 className="title">Learn to code by watching others</h1>
        <p className="paragraph">
          See how experienced developers salve problemas in real-time.
        </p>
        <p className="paragraph">
          Watching scripted tutorials is great, but understanding how developers
          think is invaluable.
        </p>
      </section>

      <section className="animeLeft">
        <button className="btnBuy" type="button">
          <b>Try it free 7 days </b> then $20/mo. thereafter
        </button>
        <form className="form" onSubmit={handleSubmit}>
          <Input
            label="First Name"
            type="text"
            name="firstName"
            {...firstName}
          />
          <Input label="Last Name" type="text" name="lastName" {...lastName} />

          <Input label="Email Address" type="email" name="email" {...email} />

          <Input
            label="Password"
            type="password"
            name="password"
            {...password}
          />
          <Button>CLAIM YOUR FREE TRIAL</Button>

          <div className="terms">
            <span>
              By clicking the button, you are agreeing to our
              <b> Terms and Services</b>
            </span>
          </div>
        </form>
      </section>
    </article>
  );
}

export default App;
