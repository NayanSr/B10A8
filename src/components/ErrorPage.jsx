
const ErrorPage = () => {
    return (
        <div className="text-center bg-slate-400 w-11/12 mx-auto py-32 rounded-lg  mt-40">
        <h1 className="text-4xl font-bold">Oops! Something went wrong.</h1>
        <p className="mt-2">The page you’re looking for doesn’t exist or an error occurred.</p>
        <a href="/" className="text-blue-500">Go back to Home</a>
      </div>
    );
};

export default ErrorPage;