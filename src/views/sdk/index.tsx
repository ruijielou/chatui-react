import React, { useEffect, useRef } from "react";

const SDKChat = () => {
  const wrapper = useRef();

  useEffect(() => {
    const bot = new window.ChatSDK({
        root: wrapper.current,
      //   config: { /* ... */ },
      //   requests: { /* ... */ },
      //   handlers: { /* ... */ },
      config: {
        navbar: {
          // icon: "/deloitte.svg",
          title: "智能助理",
        },
        robot: {
          avatar: "/botPeople.png",
        },

        messages: [
          {
            type: "text",
            content: {
              text: "智能助理为您服务，请问有什么可以帮您？",
            },
          },
        ],
        // quickReplies: [
        //   { name: "健康码颜色" },
        //   { name: "入浙通行申报" },
        //   { name: "健康码是否可截图使用" },
        //   { name: "健康通行码适用范围" },
        //   { name: "最美战疫人有哪些权益" },
        //   { name: "我要查社保" },
        //   { name: "办理居住证需要什么材料" },
        //   { name: "公共支付平台" },
        //   { name: "浙江省定点医院清单" },
        //   { name: "智能问诊" },
        // ],
      },
    //   components: {
    //     // 本地模版
    //     "e-card": ECard,
    //   },
      placeholder: "输入任何您想查询的服务",
      requests: {
        send: function (msg) {
          console.log(msg, "39-----------");
          if (msg.type === "text") {
            // return

            if (
              msg.context &&
              Object.keys(msg.context) &&
              Object.keys(msg.context).length
            ) {
              console.log(
                {
                  table_names_to_use: msg.context.cardType,
                  question: msg.context.question,
                },
                "57---------------"
              );
              return {
                method: "post",
                url: "/bot/answer_question",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  table_names_to_use: msg.context.cardType,
                  question: msg.context.question,
                }),
              };
            } else {
              return {
                method: "post",
                url: "/bot/clarify_table",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  question: msg.content.text,
                }),
              };
            }
          }
        },
      },
      handlers: {
        parseResponse: function (res, requestType) {
          let backData = [];
          if (res) {
            backData = res.map((item) => {
              if (item.type === "card") {
                if (
                  item &&
                  item.content &&
                  item.content.data &&
                  item.content.data.list
                ) {
                  item.content.data.list = item.content.data.list.map(
                    // (cardChild) => {
                    //   const titleObj = cardChild.title;
                    //   const titleKey = Object.keys(titleObj);
                    //   return {
                    //     ...cardChild,
                    //     title: `${titleKey[0]}: ${titleObj[titleKey[0]]}`,
                    //   };
                    // }
                  );
                }
              }
            });
          }
          // if (requestType === "send" && res.Messages) {
          //   return isvParser({ data: res });
          // }

          return res;
        },
      },
    });

    bot.run();
  }, []);

  // 注意 wrapper 的高度
  return <div style={{ height: "100%" }} ref={wrapper} />;
};

export default SDKChat;
