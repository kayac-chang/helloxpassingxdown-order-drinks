import { createServer } from "miragejs";

export default createServer({
  routes() {
    this.get("/api/drinks", () => [
      {
        name: "鶴頂紅茶",
        type: "私藏古法茶",
        id: "1",
        options: [
          { type: "M", price: 30 },
          { type: "L", price: 35 },
        ],
      },
      {
        name: "綺夢紅茶",
        type: "私藏古法茶",
        id: "2",
        options: [
          { type: "M", price: 30 },
          { type: "L", price: 35 },
        ],
      },
      {
        name: "舶來紅茶",
        type: "私藏古法茶",
        id: "3",
        options: [
          { type: "M", price: 25 },
          { type: "L", price: 30 },
        ],
      },
      {
        name: "藝伎紅茶",
        type: "私藏古法茶",
        id: "4",
        options: [
          { type: "M", price: 35 },
          { type: "L", price: 40 },
        ],
      },
      {
        name: "蘭香綠茶",
        type: "私藏古法茶",
        id: "5",
        options: [
          { type: "M", price: 25 },
          { type: "L", price: 30 },
        ],
      },
      {
        name: "桂香烏龍茶",
        type: "私藏古法茶",
        id: "6",
        options: [
          { type: "M", price: 25 },
          { type: "L", price: 30 },
        ],
      },
      {
        name: "金萱青茶",
        type: "私藏古法茶",
        id: "7",
        options: [
          { type: "M", price: 25 },
          { type: "L", price: 30 },
        ],
      },
      {
        name: "鶴頂那堤",
        type: "鍋煮鮮奶茶",
        id: "8",
        options: [
          { type: "M", price: 50 },
          { type: "L", price: 60 },
        ],
      },
      {
        name: "綺夢那堤",
        type: "鍋煮鮮奶茶",
        id: "9",
        options: [
          { type: "M", price: 50 },
          { type: "L", price: 60 },
        ],
      },
      {
        name: "舶來那堤",
        type: "鍋煮鮮奶茶",
        id: "10",
        options: [
          { type: "M", price: 45 },
          { type: "L", price: 55 },
        ],
      },
      {
        name: "桂香烏龍那堤",
        type: "鍋煮鮮奶茶",
        id: "11",
        options: [
          { type: "M", price: 45 },
          { type: "L", price: 55 },
        ],
      },
      {
        name: "藝伎那堤",
        type: "鍋煮鮮奶茶",
        id: "12",
        options: [
          { type: "M", price: 55 },
          { type: "L", price: 65 },
        ],
      },
      {
        name: "神濃氏那堤",
        type: "鍋煮鮮奶茶",
        id: "13",
        options: [{ type: "M", price: 60 }],
      },
      {
        name: "復刻鶴頂奶凍",
        type: "嗜嚼系奶茶",
        id: "14",
        options: [
          { type: "M", price: 45 },
          { type: "L", price: 55 },
        ],
      },
      {
        name: "復刻波霸奶茶",
        type: "嗜嚼系奶茶",
        id: "15",
        options: [
          { type: "M", price: 40 },
          { type: "L", price: 50 },
        ],
      },
      {
        name: "復刻胚芽奶茶",
        type: "嗜嚼系奶茶",
        id: "16",
        options: [
          { type: "M", price: 45 },
          { type: "L", price: 55 },
        ],
      },
      {
        name: "鶴頂珍珠那堤",
        type: "嗜嚼系奶茶",
        id: "17",
        options: [
          { type: "M", price: 55 },
          { type: "L", price: 65 },
        ],
      },
      {
        name: "綺夢珍珠那堤",
        type: "嗜嚼系奶茶",
        id: "18",
        options: [
          { type: "M", price: 55 },
          { type: "L", price: 65 },
        ],
      },
      {
        name: "舶來珍珠那堤",
        type: "嗜嚼系奶茶",
        id: "19",
        options: [
          { type: "M", price: 50 },
          { type: "L", price: 60 },
        ],
      },
      {
        name: "日本國抹茶珍珠那堤",
        type: "嗜嚼系奶茶",
        id: "20",
        options: [{ type: "M", price: 60 }],
      },
      {
        name: "鶴頂鮮豆奶",
        type: "國產鮮豆奶",
        id: "21",
        options: [
          { type: "M", price: 50 },
          { type: "L", price: 60 },
        ],
      },
      {
        name: "綺夢鮮豆奶",
        type: "國產鮮豆奶",
        id: "22",
        options: [
          { type: "M", price: 50 },
          { type: "L", price: 60 },
        ],
      },
      {
        name: "舶來鮮豆奶",
        type: "國產鮮豆奶",
        id: "23",
        options: [
          { type: "M", price: 45 },
          { type: "L", price: 55 },
        ],
      },
      {
        name: "荔枝鶴頂紅茶",
        type: "祕製鮮果茶",
        id: "24",
        options: [
          { type: "M", price: 55 },
          { type: "L", price: 65 },
        ],
      },
      {
        name: "青檸蘭香綠茶",
        type: "祕製鮮果茶",
        id: "25",
        options: [
          { type: "M", price: 50 },
          { type: "L", price: 60 },
        ],
      },
      {
        name: "鶴頂姥姥水果茶",
        type: "祕製鮮果茶",
        id: "26",
        options: [{ type: "M", price: 55 }],
      },
      {
        name: "黑糖珍珠鮮乳",
        type: "古炒黑糖珍珠",
        id: "27",
        options: [{ type: "M", price: 55 }],
      },
      {
        name: "黑糖抹茶珍珠鮮乳",
        type: "古炒黑糖珍珠",
        id: "28",
        options: [{ type: "M", price: 60 }],
      },
    ]);

    this.post("/api/orders", (schema, request) => {
      let items = JSON.parse(request.requestBody);

      return {
        orderNo: 1234,
        price: 1234,
        items,
      };
    });
  },
});
