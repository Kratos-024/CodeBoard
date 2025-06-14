export const GuideCard = ({
  header,
  text,
}: {
  header: string;
  text: string;
}) => {
  return (
    <section>
      <div className="preview flex min-h-[350px] w-full justify-center p-2 sm:p-10 items-center">
        <div className="max-w-xs w-full">
          <div
            className="group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl
           mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800 
           bg-[url(https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1650&amp;q=80)] bg-cover before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1] hover:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)]
            hover:after:content-[''] hover:after:absolute hover:after:inset-0
             hover:after:bg-black hover:after:opacity-50 transition-all duration-500"
          >
            <div className="text relative z-50">
              <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                {header}
              </h1>
              <p className="font-normal text-base text-gray-50 relative my-4">
                {text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const GuideSection = () => {
  return (
    <section className=" grid grid-cols-1 lg:w-[1280px] md:[980px] mx-auto  md:grid-cols-3 ">
      <GuideCard
        header="Register on ForkYou"
        text="Create an account on ForkYou web app and get your unique API key from your profile."
      />
      <GuideCard
        header="Install VS Code Extension"
        text="Download and install the ForkYou extension for VS Code. You'll be prompted to enter your API key after installation."
      />
      <GuideCard
        header="Verify Connection"
        text="Check your profile on the web app to confirm your extension is connected and tracking your coding time."
      />
    </section>
  );
};
