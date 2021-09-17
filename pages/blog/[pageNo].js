import { useRouter } from "next/router";

const pageNo = () => {
  const router = useRouter();
  const pageNumber = router.query.pageNo;
  return (
    <>
      <h1>my {pageNumber} content </h1>
    </>
  );
};

export default pageNo;

// What will happend if the file is already exist in our folder and we tried to call the pages dynamic route ?

// Which page will be serve by the next.js app?
