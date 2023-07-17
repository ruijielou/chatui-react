import Chat, { Bubble, useMessages } from "@chatui/core";
import "@chatui/core/dist/index.css";

const Home = () => {
  const { messages, appendMsg, setTyping } = useMessages([]);

  function handleSend(type: string, val: string) {
    if (type === "text" && val.trim()) {
      appendMsg({
        type: "text",
        content: { text: val },
        position: "right",
      });

      setTyping(true);

      setTimeout(() => {
        appendMsg({
          type: "text",
          content: { text: "Bala bala" },
        });
      }, 1000);
    }
  }

  const renderMessageContent = (msg: any) => {
    const { content } = msg;
    return <Bubble content={content.text} />;
  };

  return (
    <div className="p-x-8rem p-y-3rem h-100%">
      <Chat
        navbar={{ title: "智能助理" }}
        messages={messages}
        renderMessageContent={renderMessageContent}
        onSend={handleSend}
      />
    </div>
  );
};

export default Home;
