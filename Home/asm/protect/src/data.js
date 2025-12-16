// Dữ liệu mẫu cho các tour du lịch
// Đây là một mảng (array) chứa các object (đối tượng) đại diện cho từng tour
const tourPackages = [
  {
    tourCode: "DLT-3N", // Mã tour (phải duy nhất)
    destination: "Đà Lạt", // Điểm đến
    duration_days: 3, // Số ngày của tour
    price_per_person: 250, // Giá mỗi người (USD)
    rating: 4.7, // Đánh giá từ 1 đến 5
  },
  {
    tourCode: "PQ-4N",
    destination: "Phú Quốc",
    duration_days: 4,
    price_per_person: 420,
    rating: 4.8,
  },
  {
    tourCode: "SP-2N",
    destination: "Sa Pa",
    duration_days: 2,
    price_per_person: 180,
    rating: 4.5,
  },
  {
    tourCode: "NT-3N",
    destination: "Nha Trang",
    duration_days: 3,
    price_per_person: 300,
    rating: 4.6,
  },
  {
    tourCode: "QB-5N",
    destination: "Quảng Bình",
    duration_days: 5,
    price_per_person: 550,
    rating: 4.9,
  },
  {
    tourCode: "HA-2N",
    destination: "Hội An",
    duration_days: 2,
    price_per_person: 200,
    rating: 4.4,
  },
  {
    tourCode: "HUE-3N",
    destination: "Huế",
    duration_days: 3,
    price_per_person: 260,
    rating: 4.3,
  },
  {
    tourCode: "CD-4N",
    destination: "Côn Đảo",
    duration_days: 4,
    price_per_person: 480,
    rating: 4.8,
  },
  {
    tourCode: "HG-5N",
    destination: "Hà Giang",
    duration_days: 5,
    price_per_person: 520,
    rating: 4.9,
  },
  {
    tourCode: "MC-2N",
    destination: "Mộc Châu",
    duration_days: 2,
    price_per_person: 190,
    rating: 4.2,
  },
];

// Xuất dữ liệu để các file khác có thể import và sử dụng
export default tourPackages;
