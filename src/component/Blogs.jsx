const Blogs = () => {
  return (
    <>
    <div className="container pt-md-5 mt-5 mb-0">
      <h1 className="h2">What's the Difference between SQL vs NoSQL Databases?</h1>
      <hr className="mb-5" />
      <h2 className="h3 mb-0">SQL Databases</h2>
      <hr className="mb-4" />
      <p>
        SQL databases are relational, meaning data is stored in tables with
        predefined schemas (rows and columns).
      </p>
      <p>
        <strong>Popular examples:</strong> MySQL, PostgreSQL, Oracle, Microsoft
        SQL Server.
      </p>

      <p>
        <strong>Pros:</strong>
      </p>
      <ul>
        <li>Ideal for complex queries and relationships</li>
        <li>
          SQL is widely understood and supported; most developers know it well.
        </li>
        <li>SQL is well-documented and easy to learn.</li>
      </ul>

      <h2 className="h3 mt-5 mb-0">NoSQL Databases</h2>
      <hr />
      <p>
        NoSQL databases are non-relational, and store data in flexible formats
        like documents, key-value pairs, wide-columns, or graphs.
      </p>
      <p>
        <strong>Popular examples:</strong> MongoDB, Firebase, Cassandra, Redis.
      </p>

      <p>
        <strong>Pros:</strong>
      </p>
      <ul>
        <li>Flexible schema</li>
        <li>Handles large volumes of unstructured or semi-structured data</li>
        <li>Scales easily horizontally</li>
      </ul>

    </div>
    </>
  );
};
export default Blogs;
