"use client";

import Image from "next/image";
import Link from "next/link";
import NotFound from "../not-found";

export default function Post({ params }) {
  const dataPosts = [
    {
      id: 1,
      title:
        "Thảm kịch do trầm cảm sau sinh: Mẹ bế con gái lên cầu, gây chuyện đau lòng",
      author: "Lương",
      image:
        "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1cROxW.img?w=720&h=479&m=6",
      contentShort:
        "Các phương tiện truyền thông Hong Kong (Trung Quốc) đưa tin, chị Lương, 42 tuổi, hạ sinh một bé gái vào tháng 2/2022. Sau khi sinh con, chị Lương thay đổi tính tình, luôn ở trong tình trạng tiêu cực. Lo lắng cho con gái quá độ, sợ con không phát triển được bình thường như những đứa trẻ khác, chị ngày đêm chăm sóc không phút nào ngơi nghỉ. Rất nhanh, người mẹ rơi vào tình trạng kiệt sức do liên tục thức trắng đêm. Quá mệt, chị Lương nghĩ đến chuyện tự tử, muốn con gái đi theo mình và thổ lộ mong muốn này với chồng. Mỗi lần như vậy, người chồng đều cản lại. Các phương tiện truyền thông Hong Kong (Trung Quốc) đưa tin, chị Lương, 42 tuổi, hạ sinh một bé gái vào tháng 2/2022. Sau khi sinh con, chị Lương thay đổi tính tình, luôn ở trong tình trạng tiêu cực. Lo lắng cho con gái quá độ, sợ con không phát triển được bình thường như những đứa trẻ khác, chị ngày đêm chăm sóc không phút nào ngơi nghỉ. Rất nhanh, người mẹ rơi vào tình trạng kiệt sức do liên tục thức trắng đêm. Quá mệt, chị Lương nghĩ đến chuyện tự tử, muốn con gái đi theo mình và thổ lộ mong muốn này với chồng. Mỗi lần như vậy, người chồng đều cản lại. Các phương tiện truyền thông Hong Kong (Trung Quốc) đưa tin, chị Lương, 42 tuổi, hạ sinh một bé gái vào tháng 2/2022. Sau khi sinh con, chị Lương thay đổi tính tình, luôn ở trong tình trạng tiêu cực. Lo lắng cho con gái quá độ, sợ con không phát triển được bình thường như những đứa trẻ khác, chị ngày đêm chăm sóc không phút nào ngơi nghỉ. Rất nhanh, người mẹ rơi vào tình trạng kiệt sức do liên tục thức trắng đêm. Quá mệt, chị Lương nghĩ đến chuyện tự tử, muốn con gái đi theo mình và thổ lộ mong muốn này với chồng. Mỗi lần như vậy, người chồng đều cản lại. Các phương tiện truyền thông Hong Kong (Trung Quốc) đưa tin, chị Lương, 42 tuổi, hạ sinh một bé gái vào tháng 2/2022. Sau khi sinh con, chị Lương thay đổi tính tình, luôn ở trong tình trạng tiêu cực. Lo lắng cho con gái quá độ, sợ con không phát triển được bình thường như những đứa trẻ khác, chị ngày đêm chăm sóc không phút nào ngơi nghỉ. Rất nhanh, người mẹ rơi vào tình trạng kiệt sức do liên tục thức trắng đêm. Quá mệt, chị Lương nghĩ đến chuyện tự tử, muốn con gái đi theo mình và thổ lộ mong muốn này với chồng. Mỗi lần như vậy, người chồng đều cản lại.",
      datetime: new Date(2023, 6, 22),
    },
    {
      id: 2,
      title: "5 kịch bản tìm kiếm tàu lặn ngắm xác tàu Titanic",
      author: "Tuổi trẻ",
      image:
        "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1cMTu4.img?w=730&h=411&m=6",
      contentShort:
        "Các đội cứu hộ từ Mỹ, Canada, Pháp đang đổ về từ khắp nơi để tìm kiếm con tàu Titan ngắm xác tàu Titanic. Mọi phương tiện giải cứu đã sẵn sàng cho việc trục vớt, vốn cũng sẽ khó khăn không kém, khi đã xác định được vị trí tàu lặn. Kịch bản nào sẽ xảy ra cho con tàu lặn Titan ngắm xác tàu Titanic khi đã mất tích đến ngày thứ tư (kể từ sáng 19-6 theo giờ địa phương)?",
      datetime: new Date(2023, 2, 19),
    },
    {
      id: 3,
      title: "Bạn gái Đoàn Văn Hậu qua camera thường nhan sắc ra sao?",
      author: "Hạ Nhiên",
      image:
        "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1cSbOe.img?w=800&h=415&q=60&m=2&f=jpg",
      contentShort:
        "Hi cả nhà, hôm nay đánh dấu iTravel88 tròn 5,5 tháng tuổi và chạm mốc 77 bài Blog. Sau một hồi phân vân nên làm gì để đánh dấu cột mốc toàn số kép này, Phượng quyết định chọn ra 11 bài Blog được yêu thích nhất trên iTravel88. Đây cũng là món quà tri ân đặc biệt mình muốn gửi tặng tới độc giả. Còn chờ gì nữa, hãy xem ngay bài viết bên dưới để nhận quà nhé!",
      datetime: new Date(2023, 2, 19),
    },
    {
      id: 4,
      title: "Tui là Thái Phương Nam",
      author: "Thái Phương Nam",
      image:
        "https://f10-zpcloud.zdn.vn/1902953834910218278/f4f064b60130d06e8921.jpg",
      contentShort:
        "Mô tả ngắn gọn lấy cái phần đầu trong bài viết đó và ẩn bằng cách thêm dấu 3 chấm",
      datetime: new Date(2023, 6, 22),
    },
    {
      id: 5,
      title: "Nỗi ám ảnh chiều cao của người Hàn Quốc",
      author: "Thục Linh",
      image:
        "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1cOdLc.img?w=768&h=512&m=6&x=486&y=223&s=41&d=41",
      contentShort:
        "Để con tăng thêm vài cm, nhiều cha mẹ Hàn Quốc bỏ hàng triệu won cho trẻ tiêm hormone tăng trưởng hoặc phẫu thuật kéo dài chân. Từ lâu, các bậc cha mẹ tại Hàn Quốc đầu tư hàng chục triệu won giúp con cái tăng chiều cao. Các biện pháp đến từ bổ sung vitamin, thuốc thảo dược, tiêm hormone tăng trưởng, châm cứu, thậm chí phẫu thuật. Kết quả, chiều cao của dân số nước này tăng với tốc độ đột biến so với các quốc gia khác trong thế kỷ qua. Theo nghiên cứu của Đại học Hoàng gia London, phụ nữ Hàn Quốc đã tăng 20,2 cm, nam giới tăng 15,2 cm từ năm 1914 đến năm 2014, trong khi mức tăng trung bình toàn cầu cùng kỳ là 7,62 cm.",
      datetime: new Date(2023, 6, 21),
    },
  ];
  const dataPost = dataPosts.filter((post) => post.id == params.id)[0];
  if (!dataPost) return <NotFound />;
  return (
    <>
      <div className="col-span-2">
        <div className="text-xl uppercase">{dataPost.title}</div>
        <Image
          src="/background.jpg"
          loader={dataPost.image && (() => dataPost.image)}
          width="320"
          height="384"
          filled="true"
          priority="true"
          alt="Image of post"
          className="rounded my-2 w-full h-auto w-full object-cover"
        />
        <div className="py-1">{dataPost.contentShort}</div>
      </div>
      <div className="">
        <div className="flex justify-around shadow rounded">
          <Link
            href={"/posts/" + dataPost.id}
            className="px-2 py-1 hover:bg-sky-100"
          >
            Bình luận
          </Link>
          <button
            className="px-2 py-1 hover:bg-rose-100"
            onClick={async () => {
              await navigator.clipboard.writeText(
                window.location.origin + "/posts/" + dataPost.id
              );
              alert("Sao chép liên kết thành công");
            }}
          >
            Chia sẻ
          </button>
        </div>
      </div>
    </>
  );
}
