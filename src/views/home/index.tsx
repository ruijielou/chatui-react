import Chat, {
  Bubble,
  useMessages,
  Card,
  CardMedia,
  CardActions,
  Button,
} from "@chatui/core";
import botImg from "@/assets/botPeople.png";

const initialMessages = [
  {
    type: "text",
    content: { text: "智能助理为您服务，请问有什么可以帮您？" },
    user: { avatar: botImg },
  },
  {
    type: "image",
    content: {
      picUrl: "//img.alicdn.com/tfs/TB1p_nirYr1gK0jSZR0XXbP8XXa-300-300.png",
    },
    user: { avatar: botImg },
  },
];

const defaultQuickReplies = [
  {
    icon: "message",
    name: "联系人工服务",
    isNew: true,
    isHighlight: true,
  },
  {
    name: "短语1",
    isNew: true,
  },
  {
    name: "短语2",
    isHighlight: true,
  },
  {
    name: "短语3",
  },
];

const Home = () => {
  const { messages, appendMsg, setTyping } = useMessages(initialMessages);

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
          user: { avatar: botImg },
        });
      }, 1000);
    }
  }

  const renderMessageContent = (msg: any) => {
    const { type, content } = msg;

    // 根据消息类型来渲染
    switch (type) {
      case "text":
        return <Bubble content={content.text} />;
      case "card":
        return (
          <Card size="xl">
            <CardMedia image="//gw.alicdn.com/tfs/TB1Xv5_vlr0gK0jSZFnXXbRRXXa-427-240.png" />
            {/* <CardTitle>Card title</CardTitle>
            <CardText>Card content</CardText> */}
            {/* <CardActions> */}
              <Button>Default button</Button>
              <Button color="primary">Primary button</Button>
            {/* </CardActions> */}
          </Card>
        );
      case "image":
        return (
          <Bubble type="image">
            <img src={content.picUrl} alt="" />
          </Bubble>
        );
      default:
        return null;
    }
  };

  return (
    <div className="h-100%">
      <Chat
        navbar={{ title: "智能助理" }}
        toolbar={[
          {
            type: 'speech',
            icon: 'mic',
            title: '语音输入'
          }
        ]}
        messages={messages}
        quickReplies={defaultQuickReplies}
        renderMessageContent={renderMessageContent}
        onSend={handleSend}
      />
    </div>
  );
};

export default Home;
