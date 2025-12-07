import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ServiceDetail.css'; 
const allServicesData = [
    { 
        slug: 'bao-ve-san-bay', 
        title: "Dịch Vụ Bảo Vệ Sân Bay Chuyên Nghiệp: Ưu Điểm, Quy Trình, Bảng Giá 2025",
        summary: "Dịch vụ bảo vệ sân bay đóng vai trò vô cùng quan trọng trong việc đảm bảo an ninh, an toàn cho hành khách, phi hành đoàn và tài sản. Việc lựa chọn dịch vụ bảo vệ chuyên nghiệp giúp ngăn chặn mọi nguy cơ đe dọa, đảm bảo trật tự và an ninh tuyệt đối.",
        image: "/images/DV 1.png", 
        contentSections: [
            {
                heading: "1. Tại sao cần dịch vụ bảo vệ sân bay chuyên nghiệp?",
                points: [
                    "Ngăn chặn các hành vi can thiệp bất hợp pháp: Phòng chống khủng bố, phá hoại, và các hoạt động tội phạm (buôn lậu, trộm cắp).",
                    "Đảm bảo an toàn cho hành khách, nhân viên và tài sản: Kiểm soát ra vào, giám sát, tuần tra liên tục.",
                    "Duy trì trật tự và kỷ luật: Quản lý đám đông và thi hành các quy định của sân bay.",
                    "Ứng phó hiệu quả với các tình huống khẩn cấp: Đội ngũ được đào tạo bài bản, phối hợp với các lực lượng chức năng.",
                    "Tạo dựng hình ảnh chuyên nghiệp và tin cậy: Nâng cao niềm tin của hành khách và đối tác quốc tế.",
                    "Tuân thủ các quy định và tiêu chuẩn quốc tế (ICAO)."
                ],
            },
            {
                heading: "2. Lợi ích khi chọn dịch vụ bảo vệ sân bay",
                points: [
                    "An ninh và an toàn tối đa: Ngăn chặn hiệu quả các mối đe dọa, kiểm soát chặt chẽ mọi đối tượng.",
                    "Tuân thủ các tiêu chuẩn và quy định: Đáp ứng yêu cầu pháp lý và nâng cao uy tín.",
                    "Ứng phó chuyên nghiệp với tình huống khẩn cấp: Xử lý tình huống nhanh chóng, phối hợp tốt với các lực lượng chức năng.",
                    "Tạo môi trường an tâm và thoải mái: Hỗ trợ và hướng dẫn tận tình.",
                    "Tiết kiệm chi phí và nguồn lực: Không cần tuyển dụng và đào tạo nhân viên nội bộ.",
                    "Sử dụng công nghệ và giải pháp an ninh tiên tiến: Trang bị hệ thống giám sát hiện đại."
                ],
            },
            {
                heading: "3. Các loại hình dịch vụ bảo vệ sân bay",
                points: [
                    "Bảo vệ an ninh cổng và khu vực công cộng: Kiểm soát ra vào, tuần tra, giám sát, quản lý giao thông.",
                    "Kiểm soát an ninh hàng không (AVSEC): Soi chiếu hành lý và hành khách (X-ray, dò kim loại), kiểm tra an ninh ngẫu nhiên, bảo vệ tàu bay.",
                    "Ứng phó khẩn cấp: Xử lý các tình huống đe dọa an ninh, tham gia vào các kế hoạch ứng phó khẩn cấp.",
                    "Bảo vệ hàng hóa và tài sản: Giám sát khu vực xử lý hàng hóa, áp tải hàng hóa có giá trị.",
                    "Các dịch vụ bảo vệ đặc biệt: Bảo vệ yếu nhân (VIP), giám sát hành khách bị từ chối nhập cảnh."
                ],
            },
            {
                heading: "4. An Ninh City – cung cấp dịch vụ bảo vệ sân bay chuyên nghiệp",
                points: [
                    "Hiểu Rõ Đặc Thù An Ninh Hàng Không: Đào tạo chuyên sâu về tiêu chuẩn quốc tế và quy trình kiểm soát sân bay.",
                    "Đội Ngũ Chuyên Nghiệp, Tận Tâm: Tuyển chọn kỹ lưỡng, huấn luyện nghiêm ngặt về nghiệp vụ và ứng xử.",
                    "Giải Pháp An Ninh Toàn Diện, Linh Hoạt: Thiết kế giải pháp phù hợp với quy mô và đặc điểm từng sân bay.",
                    "Ứng Dụng Công Nghệ Hiện Đại: Đầu tư vào hệ thống camera giám sát thông minh và thiết bị kiểm tra an ninh tiên tiến.",
                    "Kinh Nghiệm và Uy Tín: Đối tác tin cậy của nhiều tổ chức lớn, cam kết chất lượng cao nhất."
                ],
            },
            {
                heading: "5. Quy trình cung cấp dịch vụ bảo vệ sân bay",
                points: [
                    "Tiếp Nhận Yêu Cầu và Khảo Sát thực tế.",
                    "Xây Dựng Phương Án Bảo Vệ chi tiết, tối ưu.",
                    "Ký Kết Hợp Đồng dịch vụ.",
                    "Triển Khai Dịch Vụ theo phương án đã được phê duyệt.",
                    "Giám Sát và Báo Cáo tình hình an ninh thường xuyên.",
                    "Đánh Giá và Cải Tiến chất lượng dịch vụ."
                ],
            }
        ],
    },
    { 
        slug: 'bao-ve-khu-dan-cu', 
        title: "Dịch Vụ Bảo Vệ Khu Dân Cư - Chung Cư Chuyên Nghiệp tại TP.HCM", 
        summary: "An ninh là yếu tố hàng đầu mang lại sự an tâm tuyệt đối cho cư dân và bảo vệ tài sản cá nhân 24/7. An Ninh City tự hào cung cấp giải pháp an ninh toàn diện với đội ngũ nhân viên được đào tạo bài bản và công nghệ giám sát hiện đại.",
        image: "/images/DV2.png",
        contentSections: [
            {
                heading: "1. Tại sao cần dịch vụ bảo vệ khu dân cư chuyên nghiệp?",
                points: [
                    "Phòng chống trộm cắp và xâm nhập: Nhân viên tuần tra 24/7, giám sát camera và kiểm soát ra vào.",
                    "Đảm bảo an toàn cho cư dân: Đặc biệt là trẻ em và người cao tuổi.",
                    "Tăng giá trị bất động sản: Môi trường được bảo vệ chuyên nghiệp giúp nâng cao giá trị khu vực.",
                    "Xử lý tình huống khẩn cấp: Phản ứng nhanh với xung đột nội bộ, cháy nổ và sự cố an ninh.",
                    "Tạo môi trường sống văn minh: Kiểm soát vi phạm nội quy và quản lý trật tự chung.",
                ],
            },
            {
                heading: "2. Các nghiệp vụ chính của dịch vụ bảo vệ khu dân cư",
                points: [
                    "Kiểm soát ra vào: Giám sát cổng chính, kiểm tra giấy tờ, đăng ký khách thăm.",
                    "Tuần tra an ninh 24/7: Phát hiện và xử lý kịp thời các rủi ro trộm cắp, phá hoại.",
                    "Giám sát hệ thống camera: Theo dõi và phân tích hình ảnh từ camera an ninh.",
                    "Quản lý bãi đỗ xe: Hướng dẫn, sắp xếp phương tiện và giám sát khu vực đỗ xe.",
                    "Xử lý vi phạm nội quy: Can thiệp khi có hành vi gây rối, vi phạm quy định.",
                    "Phòng chống cháy nổ: Kiểm tra thiết bị PCCC và xử lý tình huống khẩn cấp liên quan đến hỏa hoạn.",
                    "Xử lý tình huống khẩn cấp: Phản ứng nhanh với sự cố như xung đột, tai nạn.",
                ],
            },
            {
                heading: "3. Lợi ích khi chọn dịch vụ An Ninh City",
                points: [
                    "Đội ngũ bảo vệ chuyên nghiệp: Đào tạo bài bản về quan sát, xử lý tình huống và giao tiếp.",
                    "Tuần tra và giám sát 24/7: Kết hợp tuần tra liên tục với camera giám sát hiện đại.",
                    "Phối hợp chặt chẽ với ban quản lý: Làm việc đồng bộ để thực hiện các quy định an ninh.",
                    "Xử lý nhanh tình huống khẩn cấp: Phản ứng nhanh chóng với mọi sự cố.",
                    "Dịch vụ cá nhân hóa: Tùy chỉnh kế hoạch an ninh theo đặc điểm từng khu dân cư.",
                ],
            },
            {
                heading: "4. Quy trình cung cấp dịch vụ bảo vệ khu dân cư",
                points: [
                    "Khảo sát và đánh giá rủi ro: Xác định các khu vực nhạy cảm và nhu cầu an ninh cụ thể.",
                    "Lập kế hoạch an ninh chi tiết: Xây dựng kế hoạch tuần tra, giám sát và kiểm soát ra vào.",
                    "Triển khai đội ngũ và công nghệ: Phân bổ nhân viên chuyên sâu và lắp đặt hệ thống camera, cảm biến.",
                    "Thực hiện tuần tra và giám sát: Đảm bảo an ninh liên tục 24/7.",
                    "Báo cáo định kỳ: Cung cấp báo cáo chi tiết về tình hình an ninh cho ban quản lý.",
                    "Hỗ trợ 24/7: Sẵn sàng xử lý mọi tình huống khẩn cấp.",
                ],
            },
            {
                heading: "5. Các câu hỏi thường gặp (FAQs)",
                points: [
                    "Chi phí thuê dịch vụ là bao nhiêu? (Trung bình từ 13 - 16 triệu/tháng cho vị trí 24/7, có thể thấp hơn cho ca 12h).",
                    "An Ninh City có hỗ trợ khu dân cư nhỏ không? (Có, cung cấp giải pháp tối ưu, tiết kiệm chi phí).",
                    "Nhân viên bảo vệ được đào tạo những kỹ năng gì? (Nghiệp vụ an ninh, sơ cứu, PCCC, giao tiếp, võ thuật, sử dụng công nghệ).",
                    "Có cung cấp camera giám sát không? (Có, cung cấp giải pháp tích hợp camera giám sát hiện đại tại các vị trí chiến lược).",
                    "Làm sao để đảm bảo an ninh ban đêm? (Tuần tra định kỳ, giám sát camera 24/7, kiểm soát ra vào nghiêm ngặt, đội cơ động phản ứng nhanh).",
                ],
            },
        ]
    },
    { 
        slug: 'bao-ve-du-lich-resort', 
        title: "Dịch Vụ Bảo Vệ Khu Du Lịch, Resort Chuyên Nghiệp", 
        summary: "An ninh là yếu tố then chốt để tạo nên trải nghiệm hoàn hảo cho du khách. An Ninh City tự hào mang đến giải pháp an ninh toàn diện, cam kết đảm bảo an toàn cho du khách, tài sản và danh tiếng của khu du lịch.",
        image: "/images/DV3.png",
        contentSections: [
            {
                heading: "1. Tại sao cần dịch vụ bảo vệ khu du lịch?",
                points: [
                    "Phòng chống trộm cắp và gây rối: Nhân viên bảo vệ tuần tra liên tục, giám sát khu vực đông người.",
                    "Đảm bảo an toàn cho du khách: Tạo môi trường an toàn, đặc biệt cho trẻ em và khách quốc tế.",
                    "Bảo vệ tài sản giá trị: Giám sát bãi đỗ xe, nhà hàng, và cơ sở vật chất cao cấp.",
                    "Nâng cao trải nghiệm du lịch: Một khu du lịch an toàn giúp du khách yên tâm và tăng khả năng quay lại.",
                    "Xử lý tình huống khẩn cấp: Phản ứng nhanh với tai nạn, cháy nổ, xung đột.",
                ],
            },
            {
                heading: "2. Các nghiệp vụ chính trong dịch vụ bảo vệ khu du lịch, resort",
                points: [
                    "Kiểm soát ra vào khu vực: Giám sát cổng chính, kiểm tra vé, đăng ký khách thăm.",
                    "Tuần tra an ninh 24/7: Tuần tra định kỳ tại các khu vực bãi biển, hồ bơi, khu nghỉ dưỡng.",
                    "Giám sát hệ thống camera: Theo dõi hình ảnh từ camera an ninh tại các điểm trọng yếu.",
                    "Quản lý bãi đỗ xe: Hướng dẫn đỗ xe, giám sát phương tiện.",
                    "Hỗ trợ du khách: Cung cấp thông tin, hỗ trợ tìm kiếm đồ thất lạc.",
                    "Phòng chống trộm cắp và gây rối: Can thiệp nhanh chóng khi phát hiện hành vi vi phạm.",
                    "Phòng cháy chữa cháy (PCCC): Kiểm tra định kỳ thiết bị PCCC, hướng dẫn thoát hiểm.",
                    "Bảo vệ tài sản giá trị: Giám sát quầy lễ tân, cửa hàng lưu niệm và kho hàng.",
                ],
            },
            {
                heading: "3. Lợi ích khi chọn dịch vụ An Ninh City",
                points: [
                    "Đội ngũ bảo vệ chuyên nghiệp: Đào tạo kỹ lưỡng về an ninh, giao tiếp và xử lý tình huống.",
                    "Giám sát 24/7: Hệ thống tuần tra liên tục kết hợp với camera giám sát hiện đại.",
                    "Hỗ trợ du khách tận tâm: Xử lý yêu cầu, tạo ấn tượng tốt với khách hàng.",
                    "Xử lý tình huống khẩn cấp nhanh chóng: Phản ứng hiệu quả, giảm thiểu thiệt hại.",
                    "Dịch vụ cá nhân hóa: Tùy chỉnh kế hoạch an ninh theo đặc điểm từng khu du lịch.",
                    "Nâng cao danh tiếng khu du lịch: Môi trường an toàn, văn minh tăng uy tín thương hiệu.",
                ],
            },
            {
                heading: "4. Quy trình cung cấp dịch vụ bảo vệ khu du lịch",
                points: [
                    "Khảo sát và đánh giá rủi ro: Xác định các khu vực nhạy cảm (bãi biển, nhà hàng, bãi đỗ xe).",
                    "Lập kế hoạch an ninh chi tiết: Xây dựng phương án tuần tra, giám sát và kiểm soát ra vào.",
                    "Triển khai đội ngũ và công nghệ: Phân bổ nhân viên chuyên sâu, lắp đặt camera, cảm biến.",
                    "Thực hiện tuần tra và giám sát: Đảm bảo an ninh liên tục 24/7.",
                    "Báo cáo định kỳ: Cung cấp báo cáo chi tiết và đề xuất cải thiện.",
                    "Hỗ trợ 24/7: Sẵn sàng xử lý mọi tình huống khẩn cấp.",
                ],
            },
            {
                heading: "5. Các câu hỏi thường gặp (FAQs)",
                points: [
                    "Chi phí thuê dịch vụ là bao nhiêu? (Trung bình từ 13 - 18 triệu/tháng cho vị trí 24/7, có thể từ 9 triệu cho ca 12h).",
                    "An Ninh City có hỗ trợ khu du lịch nhỏ không? (Có, cung cấp giải pháp tối ưu, tiết kiệm chi phí).",
                    "Nhân viên bảo vệ được đào tạo những kỹ năng gì? (Nghiệp vụ an ninh, giao tiếp, sơ cứu, PCCC, võ thuật).",
                    "Phụ kiện nhân viên bảo vệ khu du lịch gồm những gì? (Đồng phục, bộ đàm, đèn pin, dùi cui, sổ tay, thẻ nhân viên).",
                ],
            },
        ]
    },
    { 
        slug: 'bao-ve-toa-nha-van-phong', 
        title: "Dịch Vụ Bảo Vệ Tòa Nhà Văn Phòng: Kiểm Soát An Ninh Chặt Chẽ 24/7", 
        summary: "Tòa nhà văn phòng là nơi tập trung nhân sự và tài sản của nhiều doanh nghiệp, đòi hỏi tiêu chuẩn an ninh nghiêm ngặt. Dịch vụ bảo vệ Tòa Nhà Văn Phòng của An Ninh City cung cấp giải pháp an ninh chuyên nghiệp, thân thiện, đảm bảo môi trường làm việc an toàn và văn minh.",
        image: "/images/DV4.png",
        contentSections: [
            {
                heading: "1. Tầm quan trọng của dịch vụ bảo vệ chuyên nghiệp tại Tòa nhà",
                points: [
                    "Bảo vệ tài sản và thông tin mật: Ngăn chặn trộm cắp, phá hoại và rò rỉ thông tin quan trọng của các công ty.",
                    "Kiểm soát ra vào nghiêm ngặt: Lọc đối tượng, quản lý khách thuê/khách hàng vãng lai, đảm bảo chỉ người có thẩm quyền mới được vào khu vực nhạy cảm (server, văn phòng).",
                    "Đảm bảo an toàn PCCC và ứng phó khẩn cấp: Thường xuyên kiểm tra hệ thống an toàn, hướng dẫn thoát hiểm khi có sự cố.",
                    "Duy trì hình ảnh chuyên nghiệp: Nhân viên bảo vệ là người đầu tiên tiếp xúc với khách hàng, góp phần nâng cao hình ảnh của tòa nhà và các doanh nghiệp.",
                    "Quản lý trật tự giao thông và bãi đỗ xe: Giảm thiểu tắc nghẽn, đảm bảo an toàn phương tiện 24/7.",
                ],
            },
            {
                heading: "2. Nhiệm vụ cụ thể tại các vị trí trọng yếu",
                points: [
                    "Vị trí Tiền sảnh (Lobby): Hướng dẫn, đăng ký khách ra vào, kiểm tra thẻ ra vào của nhân viên, giám sát sảnh chính và khu vực thang máy.",
                    "Vị trí Cổng chính/Bãi đỗ xe: Điều tiết giao thông, ghi nhận xe ra vào, kiểm soát vé xe, ngăn chặn cháy nổ và trộm cắp phương tiện.",
                    "Vị trí Tuần tra: Kiểm tra định kỳ các tầng hầm, khu vực kỹ thuật (điện, nước, PCCC), các tầng văn phòng ngoài giờ làm việc.",
                    "Vị trí Giám sát camera: Theo dõi liên tục hệ thống CCTV, ghi lại và báo cáo kịp thời các sự cố bất thường.",
                ],
            },
            {
                heading: "3. Yêu cầu tiêu chuẩn đối với nhân viên An Ninh City",
                points: [
                    "Nghiệp vụ chuyên nghiệp: Thành thạo nghiệp vụ bảo vệ, sơ cứu, PCCC, và sử dụng công cụ hỗ trợ.",
                    "Kỹ năng giao tiếp: Thái độ lịch sự, chuyên nghiệp, khả năng giao tiếp ngoại ngữ cơ bản (tại các tòa nhà quốc tế).",
                    "Ngoại hình: Đồng phục chỉnh tề, tác phong nhanh nhẹn, tạo sự tin cậy.",
                    "Ứng phó tình huống: Khả năng xử lý các tình huống phức tạp (mất trật tự, tranh chấp, cấp cứu) một cách bình tĩnh và hiệu quả.",
                ],
            },
            {
                heading: "4. Giải pháp An Ninh City cho Tòa nhà Văn phòng",
                points: [
                    "Phân tích rủi ro chi tiết: Đánh giá đặc thù của tòa nhà (số lượng tầng, công năng, khách thuê) để thiết lập phương án tối ưu.",
                    "Tích hợp công nghệ: Kết hợp lực lượng bảo vệ với hệ thống kiểm soát ra vào điện tử và hệ thống PCCC tiên tiến.",
                    "Đội ngũ quản lý dự án: Giám sát thường xuyên, đảm bảo chất lượng dịch vụ và kịp thời điều chỉnh nhân sự, nghiệp vụ.",
                    "Cam kết trách nhiệm: Minh bạch trong hợp đồng, có bảo hiểm trách nhiệm nghề nghiệp, cam kết bồi thường thiệt hại do lỗi nhân viên.",
                ],
            },
        ]
    },
    { 
        slug: 'bao-ve-nha-hang-khach-san', 
        title: "Dịch Vụ Bảo Vệ Nhà Hàng, Khách Sạn: Đảm Bảo An Toàn & Chất Lượng Phục Vụ", 
        summary: "Khách sạn, nhà hàng đòi hỏi sự kết hợp giữa an ninh nghiêm ngặt và dịch vụ khách hàng chuyên nghiệp. An Ninh City cung cấp giải pháp bảo vệ tối ưu, giúp bảo vệ tài sản, giữ vững an ninh và nâng cao trải nghiệm, sự hài lòng của khách hàng.", 
        image: "/images/DV5.png", 
        contentSections: [
            {
                heading: "1. Vai trò kép của nhân viên bảo vệ Khách sạn/Nhà hàng",
                points: [
                    "Đảm bảo an ninh tuyệt đối: Ngăn chặn trộm cắp tài sản của khách và cơ sở, phòng chống gây rối, xung đột.",
                    "Hỗ trợ dịch vụ khách hàng: Bảo vệ là bộ mặt đầu tiên của khách sạn, cần có thái độ thân thiện, lịch sự và sẵn sàng hỗ trợ khách hàng.",
                    "Kiểm soát người ra vào: Giám sát khu vực công cộng (sảnh, bar, phòng họp) và khu vực nhạy cảm (kho, bếp, khu vực nhân viên).",
                    "Xử lý tình huống khẩn cấp: Phản ứng nhanh với cướp giật, ngộ độc thực phẩm, cháy nổ hoặc các vấn đề y tế.",
                    "Quản lý phương tiện: Hỗ trợ sắp xếp xe, giám sát bãi đỗ xe an toàn 24/7.",
                ],
            },
            {
                heading: "2. Nhiệm vụ tại các khu vực chính",
                points: [
                    "Vị trí Cổng chính/Sảnh đón: Mở cửa xe, chào đón khách hàng, hướng dẫn đỗ xe, hỗ trợ vận chuyển hành lý (khi cần).",
                    "Vị trí Tuần tra/Hành lang: Tuần tra định kỳ tại các tầng phòng, khu vực ẩm thực, hồ bơi, đảm bảo sự yên tĩnh và an toàn cho khách.",
                    "Vị trí Bãi giữ xe: Kiểm soát phương tiện, phát hiện và xử lý các sự cố như va chạm, trộm cắp hoặc hư hỏng xe.",
                    "Vị trí Camera/Giám sát: Theo dõi an ninh tại các điểm mù, đặc biệt là khu vực thu ngân và quầy lễ tân.",
                ],
            },
            {
                heading: "3. Tiêu chuẩn nhân viên An Ninh City cho dịch vụ Hospitality",
                points: [
                    "Kỹ năng giao tiếp xuất sắc: Biết cách ứng xử nhã nhặn, chuyên nghiệp, hỗ trợ khách hàng một cách tối đa.",
                    "Nắm vững quy trình nghiệp vụ: Đặc biệt là kỹ năng PCCC, sơ cứu và xử lý xung đột nội bộ.",
                    "Tính bảo mật cao: Tuyệt đối giữ bí mật thông tin về khách hàng, tài sản và nội bộ của khách sạn.",
                    "Khả năng làm việc ca đêm: Đảm bảo tinh thần cảnh giác cao độ trong các ca làm việc ngoài giờ hành chính.",
                ],
            },
            {
                heading: "4. Lợi ích khi hợp tác với An Ninh City",
                points: [
                    "Tăng cường an ninh mà không ảnh hưởng đến trải nghiệm: Nhân viên có tác phong lịch sự, hòa nhập với môi trường dịch vụ cao cấp.",
                    "Giảm thiểu rủi ro pháp lý: Đảm bảo an toàn cháy nổ, an toàn lao động và tuân thủ các quy định an ninh.",
                    "Bảo hiểm trách nhiệm: Cam kết bồi thường thiệt hại (nếu có) do lỗi nghiệp vụ, bảo vệ lợi ích tối đa cho khách sạn/nhà hàng.",
                    "Đội ngũ phản ứng nhanh: Luôn có lực lượng hỗ trợ khi xảy ra các tình huống phức tạp cần tăng cường nhân sự.",
                ],
            },
        ]
    },
    { 
        slug: 'bao-ve-ngan-hang-tiem-vang', 
        title: "Dịch Vụ Bảo Vệ Ngân Hàng, Tiệm Vàng – Giải Pháp An Ninh Tuyệt Đối 24/7", 
        summary: "Tiệm vàng, ngân hàng là mục tiêu có rủi ro an ninh cao nhất do giá trị tài sản lớn. Dịch vụ bảo vệ chuyên nghiệp của An Ninh City được thiết kế toàn diện với các biện pháp phòng ngừa, giám sát và phản ứng nhanh nhằm đảm bảo an ninh tuyệt đối cho tài sản, nhân viên và khách hàng.", 
        image: "/images/DV6.png", 
        contentSections: [
            {
                heading: "1. Tại sao cần thuê dịch vụ bảo vệ Tiệm Vàng/Ngân Hàng?",
                points: [
                    "Bảo vệ tài sản giá trị cao: Vàng, trang sức và tiền mặt là mục tiêu dễ bị nhắm đến bởi trộm cắp, cướp giật.",
                    "Đảm bảo an toàn cho nhân viên và khách hàng: Xử lý các tình huống cướp có vũ trang hoặc xô xát, giảm thiểu nguy cơ thiệt hại về người.",
                    "Tạo cảm giác yên tâm và chuyên nghiệp: Sự hiện diện của bảo vệ nâng cao sự chuyên nghiệp và uy tín thương hiệu.",
                    "Ứng phó với các tình huống khẩn cấp: Xử lý các sự cố như cháy nổ, hỏa hoạn hoặc tai nạn bất ngờ.",
                    "Giám sát liên tục và răn đe tội phạm: Kết hợp hệ thống giám sát hiện đại để ngăn ngừa hành vi phạm tội.",
                ],
            },
            {
                heading: "2. Nhiệm vụ của nhân viên bảo vệ cửa hàng vàng bạc đá quý",
                points: [
                    "Đảm bảo an ninh khu vực: Giám sát toàn bộ khu vực trong và ngoài cửa hàng, theo dõi camera.",
                    "Kiểm soát ra vào cửa hàng: Kiểm tra, giám sát các đối tượng ra vào, hướng dẫn khách hàng.",
                    "Bảo vệ tài sản và hàng hóa: Giám sát quá trình vận chuyển tài sản, ngăn chặn hành vi gian lận.",
                    "Ứng phó với tình huống khẩn cấp: Xử lý nhanh cướp giật, gây rối, hỗ trợ sơ tán khi cháy nổ.",
                    "Tạo cảm giác an toàn cho khách hàng: Giữ thái độ lịch sự, chuyên nghiệp, thân thiện.",
                    "Báo cáo và ghi nhận sự cố: Lập báo cáo chi tiết về các tình huống phát sinh trong ca làm việc.",
                ],
            },
            {
                heading: "3. Yêu cầu đối với nhân viên bảo vệ cho tiệm vàng tại TP.HCM",
                points: [
                    "Phẩm chất cá nhân: Trung thực, đáng tin cậy, tận tâm, có tinh thần cảnh giác cao.",
                    "Sức khỏe và thể chất: Sức khỏe tốt, thể lực ổn định, ngoại hình chỉnh chu.",
                    "Kỹ năng chuyên môn: Quan sát, giám sát, xử lý tình huống khẩn cấp, giao tiếp lịch sự.",
                    "Đào tạo và kinh nghiệm: Có chứng chỉ đào tạo bảo vệ chuyên nghiệp, ưu tiên kinh nghiệm tại Ngân hàng/Tiệm vàng.",
                    "Tinh thần làm việc: Sẵn sàng làm việc theo ca (24/7), có tinh thần kỷ luật cao, khả năng phối hợp tốt.",
                ],
            },
            {
                heading: "4. Cách thức tăng cường an ninh cho tiệm vàng vào ban đêm",
                points: [
                    "Tăng cường hệ thống camera giám sát: Camera chất lượng cao, công nghệ nhận diện khuôn mặt và lưu trữ dữ liệu an toàn.",
                    "Bảo vệ trực 24/7 và tuần tra: Đảm bảo nhân viên túc trực suốt đêm, tuần tra xung quanh cửa hàng.",
                    "Cài đặt hệ thống báo động và cửa an ninh: Báo động kết nối trực tiếp với công an/công ty bảo vệ, cửa cuốn kiên cố.",
                    "Chiếu sáng xung quanh cửa hàng: Ánh sáng đủ mạnh, sử dụng đèn cảm biến chuyển động.",
                    "Thực hiện quy trình kiểm tra và bảo mật chặt chẽ: Cất giữ tài sản trong két sắt an toàn trước khi đóng cửa.",
                    "Phối hợp với lực lượng chức năng: Liên hệ mật thiết với công an địa phương.",
                ],
            },
            {
                heading: "5. An Ninh City – Đơn vị cung cấp dịch vụ bảo vệ tiệm vàng uy tín",
                points: [
                    "Đội ngũ bảo vệ chuyên nghiệp và giàu kinh nghiệm: Đào tạo bài bản, tập trung vào bảo vệ tài sản có giá trị cao.",
                    "Giải pháp an ninh toàn diện: Cung cấp nhân viên túc trực, camera giám sát hiện đại, báo động an ninh.",
                    "Sự linh hoạt trong dịch vụ: Cung cấp dịch vụ bảo vệ 24/7, điều chỉnh theo nhu cầu cụ thể.",
                    "Cam kết an toàn tuyệt đối: Xử lý kịp thời mọi tình huống khẩn cấp, giảm thiểu nguy cơ cướp giật, gian lận.",
                    "Hỗ trợ pháp lý và báo cáo đầy đủ: Phối hợp với cơ quan chức năng, cung cấp báo cáo chi tiết.",
                ],
            },
        ]
    },
    { 
        slug: 'bao-ve-kho-bai-nha-xuong', 
        title: "Dịch Vụ Bảo Vệ Kho Bãi, Nhà Xưởng: Kiểm Soát Tài Sản và Chống Thất Thoát", 
        summary: "Kho bãi, nhà xưởng thường chứa hàng hóa, nguyên vật liệu và máy móc có giá trị lớn, đối mặt với nguy cơ trộm cắp nội bộ và cháy nổ cao. An Ninh City cung cấp giải pháp an ninh chuyên biệt, tập trung vào kiểm soát ra vào, giám sát nội bộ và phòng chống PCCC.", 
        image: "/images/DV7.png", 
        contentSections: [
            {
                heading: "1. Rủi ro an ninh đặc thù tại Kho bãi/Nhà xưởng",
                points: [
                    "Trộm cắp nội bộ và thất thoát hàng hóa: Xảy ra trong quá trình xuất/nhập, cần kiểm soát chặt chẽ.",
                    "Nguy cơ cháy nổ cao: Do môi trường làm việc có vật liệu dễ cháy, máy móc hoạt động liên tục.",
                    "Kiểm soát phương tiện và hàng hóa ra vào: Dễ xảy ra gian lận khi xe tải và container ra vào liên tục.",
                    "Xâm nhập trái phép: Khu vực rộng, ít người qua lại tạo điều kiện cho kẻ gian đột nhập từ bên ngoài.",
                ],
            },
            {
                heading: "2. Nhiệm vụ cốt lõi của nhân viên bảo vệ",
                points: [
                    "Kiểm soát Cổng chính/Cổng xuất nhập hàng: Kiểm tra giấy tờ, đối chiếu mã hàng, niêm phong (seal) xe, ghi sổ chi tiết giờ ra vào.",
                    "Tuần tra nội bộ: Kiểm tra kho hàng, khu vực sản xuất, khu vực chứa nguyên vật liệu, kiểm tra hệ thống điện/nước và PCCC.",
                    "Giám sát bốc dỡ hàng hóa: Theo dõi quá trình bốc dỡ để ngăn chặn trộm cắp hoặc làm hư hỏng hàng hóa.",
                    "Kiểm soát PCCC: Thường xuyên kiểm tra, vệ sinh thiết bị PCCC, báo cáo ngay các vi phạm về an toàn phòng cháy.",
                    "Bảo vệ tài sản cố định: Giám sát máy móc, thiết bị sản xuất, khu vực văn phòng và khu vực kỹ thuật quan trọng.",
                ],
            },
            {
                heading: "3. Quy trình Kiểm soát Xuất/Nhập hàng của An Ninh City",
                points: [
                    "Tiếp nhận lệnh/Phiếu xuất nhập hàng: Kiểm tra tính hợp lệ và chữ ký của người có thẩm quyền.",
                    "Kiểm tra xe và hàng hóa: Đối chiếu số lượng, chủng loại, tình trạng hàng hóa với chứng từ.",
                    "Giám sát quá trình bốc/dỡ: Đảm bảo không có hàng hóa bị tuồn ra hoặc vào trái phép.",
                    "Niêm phong và ghi sổ: Niêm phong hàng hóa (nếu cần) và ghi lại chi tiết thời gian/nội dung vào sổ nhật ký bảo vệ.",
                    "Báo cáo và bàn giao: Báo cáo ngay các sai lệch hoặc sự cố phát sinh.",
                ],
            },
            {
                heading: "4. Ưu điểm dịch vụ của An Ninh City",
                points: [
                    "Đội ngũ chuyên trách về công nghiệp: Nhân viên có kinh nghiệm trong môi trường sản xuất, hiểu về quy trình an toàn lao động.",
                    "Tập trung chống thất thoát: Kỹ năng kiểm soát giấy tờ và giám sát xe ra vào được đào tạo chuyên sâu.",
                    "Chuyên môn cao về PCCC: Đảm bảo nhân viên có khả năng xử lý hỏa hoạn ban đầu hiệu quả nhất.",
                    "Phản ứng nhanh 24/7: Sẵn sàng điều động đội cơ động khi nhà xưởng có sự cố đột xuất.",
                ],
            },
        ]
    },
    { 
        slug: 'bao-ve-truong-hoc', 
        title: "Dịch Vụ Bảo Vệ Trường Học: Giải Pháp An Ninh Toàn Diện", 
        summary: "An ninh trường học luôn là mối quan tâm hàng đầu. Dịch vụ bảo vệ trường học chuyên nghiệp là giải pháp tối ưu, giúp ngăn chặn các nguy cơ tiềm ẩn và đảm bảo an toàn tuyệt đối cho học sinh, giáo viên và cơ sở giáo dục.", 
        image: "/images/DV8.png", 
        contentSections: [
            {
                heading: "1. Tại sao trường học cần dịch vụ bảo vệ?",
                points: [
                    "Đảm bảo an toàn cho học sinh, giáo viên và nhân viên khỏi bạo lực học đường, trộm cắp.",
                    "Kiểm soát ra vào, ngăn chặn người lạ xâm nhập trái phép.",
                    "Hỗ trợ xử lý các tình huống khẩn cấp (hỏa hoạn, sự cố y tế) nhờ nhân viên được đào tạo sơ cứu.",
                    "Duy trì trật tự và nếp sống văn minh tại cổng trường, bãi đỗ xe.",
                    "Giám sát tài sản và cơ sở vật chất (phòng thí nghiệm, thư viện) khỏi thất thoát.",
                ],
            },
            {
                heading: "2. Các nhiệm vụ chính của nhân viên bảo vệ trường học",
                points: [
                    "Kiểm soát an ninh cổng trường: Giám sát người ra vào, hướng dẫn khách liên hệ công tác.",
                    "Tuần tra, giám sát khuôn viên trường: Phát hiện dấu hiệu bất thường, ngăn chặn vi phạm nội quy.",
                    "Bảo vệ tài sản và cơ sở vật chất: Giám sát trang thiết bị, kiểm tra hệ thống điện nước.",
                    "Xử lý các tình huống khẩn cấp: Sơ cứu, ứng phó cháy nổ, phối hợp với cơ quan chức năng.",
                    "Đảm bảo trật tự giao thông khu vực trường học: Điều tiết giao thông giờ cao điểm.",
                    "Hỗ trợ duy trì môi trường học tập an toàn, văn minh.",
                ],
            },
            {
                heading: "3. Tiêu chí lựa chọn công ty dịch vụ bảo vệ trường học uy tín",
                points: [
                    "Giấy phép hoạt động hợp pháp và uy tín thương hiệu (đã bảo vệ cho nhiều tổ chức giáo dục).",
                    "Đội ngũ nhân viên chuyên nghiệp: Đào tạo bài bản nghiệp vụ, sơ cứu, PCCC, thân thiện.",
                    "Quy trình quản lý và giám sát chặt chẽ, có phương án bảo vệ linh hoạt.",
                    "Trang bị công cụ hỗ trợ hiện đại (camera, bộ đàm) và có phương án bảo vệ chủ động.",
                    "Chi phí hợp lý, minh bạch và hợp đồng rõ ràng.",
                    "Chính sách bảo hiểm trách nhiệm nghề nghiệp và cam kết bồi thường.",
                ],
            },
            {
                heading: "4. An Ninh City – Điểm khác biệt của dịch vụ tại TP.HCM",
                points: [
                    "Cung cấp lực lượng bảo vệ chuyên nghiệp cho mọi cấp trường học (mầm non, đại học).",
                    "Kiểm soát an ninh khuôn viên 24/7, đảm bảo duy trì kỷ luật.",
                    "Hỗ trợ an toàn giao thông trước cổng trường giờ cao điểm.",
                    "Nhân viên được đào tạo chuyên sâu về nghiệp vụ an ninh, sơ cứu y tế và xử lý bạo lực học đường.",
                    "Quy trình quản lý và giám sát chặt chẽ, báo cáo hàng ngày.",
                    "Giải pháp linh hoạt, chi phí hợp lý, cam kết an toàn tuyệt đối.",
                ],
            },
        ]
    },
    { 
        slug: 'bao-ve-quan-an-cafe', 
        title: "Dịch Vụ Bảo Vệ Mục Tiêu, Quán Ăn, Cafe: Thân Thiện & An Toàn", 
        summary: "Bảo vệ các mục tiêu dịch vụ như quán ăn, cafe, cửa hàng bán lẻ đòi hỏi sự cân bằng giữa an ninh và sự thân thiện. An Ninh City cung cấp đội ngũ bảo vệ có kỹ năng giao tiếp tốt, giúp duy trì trật tự, bảo vệ tài sản và mang lại trải nghiệm thoải mái cho khách hàng.", 
        image: "/images/DV9.png", 
        contentSections: [
            {
                heading: "1. Nhu cầu an ninh đặc trưng của Quán ăn/Cafe",
                points: [
                    "Quản lý bãi đỗ xe an toàn: Giám sát xe máy, ô tô của khách, phòng chống trộm cắp và va chạm.",
                    "Duy trì trật tự và không gian lịch sự: Ngăn chặn xung đột, gây rối, hoặc các hành vi làm phiền khách hàng khác.",
                    "Bảo vệ tài sản cá nhân của khách: Ngăn ngừa trộm cắp túi xách, điện thoại, laptop.",
                    "Hỗ trợ nhân viên và quản lý: Hỗ trợ kiểm soát người giao hàng, xử lý các tình huống khó khăn với khách hàng.",
                ],
            },
            {
                heading: "2. Nhiệm vụ chính của nhân viên bảo vệ An Ninh City",
                points: [
                    "Quản lý phương tiện và tài sản: Hướng dẫn khách đỗ xe, trông giữ xe cẩn thận và phát thẻ xe (nếu cần).",
                    "Đảm bảo an ninh khu vực: Tuần tra khu vực quán/cafe, đặc biệt là khu vực thu ngân và nơi khách ngồi.",
                    "Hỗ trợ khách hàng: Nhanh chóng giúp đỡ khách hàng khi có sự cố, giữ thái độ thân thiện, chào đón.",
                    "Xử lý xung đột: Can thiệp kịp thời, khéo léo và hòa giải các mâu thuẫn giữa khách hàng hoặc giữa khách hàng và nhân viên.",
                    "Giám sát giờ đóng/mở cửa: Đảm bảo an ninh khi chuyển giao ca và khi kết thúc hoạt động kinh doanh.",
                ],
            },
            {
                heading: "3. Yêu cầu về tác phong và kỹ năng",
                points: [
                    "Giao tiếp thân thiện: Luôn mỉm cười, chào đón và cảm ơn khách hàng, tạo ấn tượng tốt về dịch vụ.",
                    "Tác phong nhanh nhẹn: Thao tác nhanh chóng trong việc hỗ trợ xe cộ và xử lý tình huống.",
                    "Kỹ năng quan sát tinh tế: Phát hiện các đối tượng khả nghi (trộm cắp móc túi) mà không gây chú ý.",
                    "Khả năng chịu áp lực: Duy trì sự bình tĩnh và lịch sự trong môi trường đông đúc, ồn ào.",
                ],
            },
            {
                heading: "4. Lợi ích An Ninh City mang lại",
                points: [
                    "Tạo cảm giác an tâm cho khách hàng: Khách hàng sẽ thoải mái hơn khi biết phương tiện và tài sản của họ được bảo vệ.",
                    "Tối ưu hóa không gian đỗ xe: Sắp xếp khoa học, tận dụng tối đa không gian bãi đỗ xe.",
                    "Giảm gánh nặng quản lý: Chủ quán/cafe có thể tập trung vào kinh doanh mà không lo lắng về vấn đề an ninh.",
                    "Chi phí tối ưu: Cung cấp các gói dịch vụ linh hoạt theo giờ hoạt động và quy mô của quán.",
                ],
            },
        ]
    },
];


const ServiceDetail: React.FC = () => {
    
    const { slug } = useParams<{ slug: string }>();
    const currentService = allServicesData.find(s => s.slug === slug);

    if (!currentService) {
        return <div className="service-detail-page container" style={{textAlign: 'center', padding: '50px'}}>
            <h1 className="detail-title" style={{color: '#ff6600'}}>404 - KHÔNG TÌM THẤY DỊCH VỤ!</h1>
            <p>Đường dẫn **`/services/{slug}`** không tồn tại trong dữ liệu của chúng tôi.</p>
            <p>Vui lòng quay lại <Link to="/services" style={{color: '#007bff', fontWeight: 'bold'}}>Danh mục Dịch vụ</Link>.</p>
        </div>;
    }

    return (
        <div className="service-detail-page">
            <div className="container service-detail-grid">
                <div className="detail-content-column">
                    <h1 className="detail-title">{currentService.title}</h1>
                    
                    <img src={currentService.image || "/images/placeholder.jpg"} 
                         alt={currentService.title} 
                         className="detail-hero-image" 
                    />
                    
                    <p className="detail-summary">{currentService.summary}</p>
                    {currentService.contentSections?.map((section, index) => (
                        <div key={index} className="detail-section">
                            <h2 className="section-heading">{section.heading}</h2>
                            <ul className="section-list">
                                {section.points.map((point, pIndex) => (
                                    <li key={pIndex}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div className="detail-cta">
                        <p>Liên hệ ngay để nhận báo giá chi tiết và tư vấn giải pháp an ninh tối ưu nhất:</p>
                        <a href="tel:0931870883" className="cta-primary-orange">
                            GỌI NGAY: 0909773302
                        </a>
                    </div>
                </div>
                <div className="detail-sidebar">
                    <div className="sidebar-block contact-promo">
                        <h3 className="sidebar-title">Liên Hệ Báo Giá</h3>
                        <p>Chúng tôi sẵn sàng phục vụ 24/7</p>
                        <a href="tel:0931870883" className="sidebar-hotline"> 0909773302</a>
                        <p>Email: baove.anninhcity@gmail.com</p>
                    </div>
                    <div className="sidebar-block category-block">
                        <h3 className="sidebar-title">Các Dịch Vụ Khác</h3>
                        <ul className="category-list">
                            {allServicesData.map((service, index) => (
                                <li key={index} className={service.slug === slug ? 'active-category' : ''}>
                                    <Link to={`/services/${service.slug}`}>
                                        {service.title.replace('Dịch Vụ ', '').split(':')[0]} 
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ServiceDetail;