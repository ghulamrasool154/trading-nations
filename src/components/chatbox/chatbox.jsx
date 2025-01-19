"use client";


const ChatBot = () => {
  return (
    <>

       <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
      crossOrigin="anonymous"
       ></script>

      <script
        async
        src={process.env.NEXT_PUBLIC_DEEPTHOUGHT_URL}
        data-license={process.env.NEXT_PUBLIC_DEEPTHOUGHT_LICENSE}
      ></script>
     
    </>
  );
};

export default ChatBot;
