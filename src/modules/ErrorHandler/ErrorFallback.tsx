interface Props {
  error: Error;
}

export const ErrorFallback: React.FC<Props> = ({ error }) => {
  function goBack() {
    window.location.href = "/login";
  }

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="bg-white rounded-3xl p-5 flex flex-col gap-6 max-w-[90%] md:max-w-xl">
        <span className="text-xl font-bold text-red-500 block pb-2 mb-2 border-b-[1px]">
          Oops! Something went wrong.
        </span>
        <span>{error.message}</span>

        <button className="btn-accentBlue-solid" onClick={goBack}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ErrorFallback;
