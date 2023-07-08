import Link from "next/link";
import { AiFillHome } from "react-icons/ai";

const Custom404 = () => {
  return (
    <div className="container">
      <h1 className="title">404 - Page Not Found</h1>
      <p className="description">
        Oops! The page you are looking for does not exist.
      </p>
      <Link href="/">
        <h1 className="home-link">
          <AiFillHome />
          <span> Go back to Home</span>
        </h1>
      </Link>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          text-align: center;
        }

        .title {
          font-size: 4rem;
          margin-bottom: 1rem;
        }

        .description {
          font-size: 1.5rem;
          margin-bottom: 2rem;
        }

        .home-link {
          padding: 1rem 2rem;
          background-color: #0070f3;
          color: #fff;
          border-radius: 0.5rem;
          text-decoration: none;
          font-size: 1.2rem;
          transition: background-color 0.3s ease;
        }

        .home-link:hover {
          background-color: #0053a3;
        }
      `}</style>
    </div>
  );
};

export default Custom404;
