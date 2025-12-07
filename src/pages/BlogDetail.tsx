import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import './BlogDetail.css';
const blogDetailData = [
    {
        id: 1,
        title: "Tuyển dụng bảo vệ an ninh TPHCM: Cơ hội việc làm hấp dẫn 2024",
        slug: "tuyen-dung-bao-ve-an-ninh-hcm",
        category: "Tin Tức",
        date: "2020-11-20",
        image: "/images/blog-default.jpg",
        fullContent: `
            <p><strong>Công ty Bảo vệ An Ninh City</strong> tự hào là một trong những đơn vị dẫn đầu trong lĩnh vực cung cấp giải pháp an ninh toàn diện tại khu vực phía Nam. Với tốc độ phát triển không ngừng, chúng tôi thông báo mở đợt **tuyển dụng lớn** cho các vị trí nhân viên bảo vệ chuyên nghiệp tại TP.HCM. Đây không chỉ là một công việc, mà là cơ hội để bạn xây dựng sự nghiệp bền vững trong một môi trường làm việc đầy tính kỷ luật và nhân văn.</p>
            
            <p>Chúng tôi cam kết xây dựng một môi trường làm việc không chỉ chuyên nghiệp mà còn đề cao sự gắn kết, đào tạo liên tục và cơ hội phát triển nghề nghiệp lâu dài cho mọi nhân viên, đặc biệt là những cá nhân có tham vọng thăng tiến lên các vị trí quản lý.</p>

            <h2>1. Các vị trí đang tuyển dụng và Mô tả công việc chi tiết</h2>
            <p>An Ninh City đang tìm kiếm những ứng viên tài năng và tâm huyết cho nhiều vị trí khác nhau, phù hợp với mọi kinh nghiệm và sở thích làm việc:</p>
            
            <h3>1.1. Nhân viên Bảo vệ Mục tiêu cố định</h3>
            <p>Đây là lực lượng nòng cốt, đảm bảo an ninh cho các tài sản có giá trị cao và môi trường làm việc của khách hàng.</p>
            <ul>
                <li><strong>Địa điểm làm việc:</strong> Nhà máy, Khu công nghiệp, Tòa nhà văn phòng hạng A, Ngân hàng, Bệnh viện.</li>
                <li><strong>Nhiệm vụ chính:</strong>
                    <ul>
                        <li>Kiểm soát và giám sát chặt chẽ luồng người, phương tiện, hàng hóa ra vào mục tiêu.</li>
                        <li>Tuần tra định kỳ các khu vực trọng yếu, phát hiện và xử lý kịp thời các dấu hiệu bất thường.</li>
                        <li>Vận hành hệ thống camera giám sát (CCTV) và hệ thống báo cháy.</li>
                        <li>Hướng dẫn và hỗ trợ khách hàng, duy trì hình ảnh chuyên nghiệp tại mục tiêu.</li>
                    </ul>
                </li>
            </ul>

            <h3>1.2. Nhân viên Bảo vệ Sự kiện & Yếu nhân</h3>
            <p>Vị trí yêu cầu sự nhanh nhạy, kỹ năng quan sát và khả năng làm việc dưới áp lực cao, thường xuyên di chuyển theo yêu cầu nhiệm vụ.</p>
            <ul>
                <li><strong>Mô tả công việc:</strong> Đảm bảo an ninh cho các chương trình ca nhạc, hội nghị, triển lãm lớn, hoặc bảo vệ cá nhân (V.I.P) theo yêu cầu.</li>
                <li><strong>Yêu cầu bổ sung:</strong> Khả năng ứng phó với đám đông, kỹ năng xử lý tình huống linh hoạt, ưu tiên biết võ thuật cơ bản.</li>
            </ul>
            
            <h2>2. Yêu cầu tiêu chuẩn đối với ứng viên</h2>
            <p>Để đảm bảo chất lượng dịch vụ tốt nhất, chúng tôi có những tiêu chuẩn tuyển dụng nghiêm ngặt nhưng công bằng:</p>
            
            <h3>2.1. Yêu cầu về hồ sơ và sức khỏe</h3>
            <ul>
                <li>Độ tuổi từ 18 đến 55 (Nam/Nữ). Nam cao từ 1m65 trở lên, Nữ cao từ 1m58 trở lên.</li>
                <li>Trình độ học vấn: Tối thiểu tốt nghiệp THCS (lớp 9) trở lên.</li>
                <li>Lý lịch rõ ràng, không tiền án tiền sự, có xác nhận của địa phương.</li>
                <li>Sức khỏe tốt, không mắc các bệnh truyền nhiễm hoặc bệnh mãn tính.</li>
            </ul>
            
            <h3>2.2. Phẩm chất và kỹ năng mong muốn</h3>
            <p>Chúng tôi tìm kiếm những cá nhân có:</p>
            <ul>
                <li>Tinh thần kỷ luật, trung thực, trách nhiệm cao trong công việc.</li>
                <li>Thái độ phục vụ chuyên nghiệp, giao tiếp lịch sự, hòa nhã.</li>
                <li>Ưu tiên cựu quân nhân, công an, hoặc người có chứng chỉ nghiệp vụ bảo vệ.</li>
            </ul>

            <h2>3. Quyền lợi và chế độ đãi ngộ vượt trội</h2>
            <p>An Ninh City cam kết mang lại mức thu nhập và phúc lợi hấp dẫn, đảm bảo sự ổn định cho nhân viên:</p>
            
            <h3>3.1. Thu nhập và Bảo hiểm</h3>
            <ul>
                <li>**Mức Lương:** Lương cơ bản cạnh tranh (từ 8 - 12 triệu VNĐ/tháng), phụ cấp chuyên cần, phụ cấp ca đêm (30%), thưởng trách nhiệm. Tổng thu nhập ổn định và tăng dần theo thâm niên.</li>
                <li>**Phúc lợi xã hội:** Ký hợp đồng lao động chính thức, tham gia đầy đủ BHXH, BHYT, BHTN ngay sau thời gian thử việc.</li>
                <li>**Thưởng:** Thưởng các ngày Lễ, Tết (Tết Dương Lịch, Âm Lịch), thưởng lương tháng 13.</li>
            </ul>

            <h3>3.2. Đào tạo và Phát triển nghề nghiệp</h3>
            <p>Chúng tôi tin rằng đầu tư vào nhân viên là đầu tư vào tương lai của công ty:</p>
            <ul>
                <li>Được **đào tạo nghiệp vụ chuyên sâu miễn phí** tại trung tâm đào tạo của công ty (bao gồm Kỹ năng phòng cháy chữa cháy, Sơ cấp cứu y tế, Võ thuật tự vệ cơ bản, Kỹ năng sử dụng công cụ hỗ trợ).</li>
                <li>Lộ trình thăng tiến rõ ràng và minh bạch: Nhân viên -> Tổ trưởng -> Giám sát khu vực -> Quản lý Dự án.</li>
                <li>Cung cấp đồng phục, trang thiết bị làm việc hiện đại miễn phí.</li>
            </ul>

            <p><strong>Cơ hội của bạn đang ở đây!</strong> Hãy nộp hồ sơ ngay để không bỏ lỡ cơ hội làm việc tại An Ninh City, nơi sự chuyên nghiệp và cơ hội thăng tiến luôn song hành cùng bạn. Vui lòng liên hệ trực tiếp phòng Nhân sự của An Ninh City qua số điện thoại <strong>0909.7733.02</strong> hoặc nộp hồ sơ trực tiếp tại văn phòng công ty trong giờ hành chính.</p>
        `
    },
    {
        id: 2,
        title: "5 Bí quyết lựa chọn công ty bảo vệ uy tín tại Việt Nam",
        slug: "bi-quyet-chon-cong-ty-bao-ve",
        category: "Cẩm Nang",
        date: "2020-11-15",
        image: "/images/blog-default.jpg",
        fullContent: `
            <p>Trong bối cảnh an ninh ngày càng phức tạp, việc lựa chọn một **công ty bảo vệ uy tín** là quyết định chiến lược, ảnh hưởng trực tiếp đến sự an toàn tài sản, thông tin kinh doanh và sự ổn định hoạt động của doanh nghiệp. Một quyết định sai lầm có thể dẫn đến những rủi ro pháp lý và tổn thất tài chính không đáng có. Dưới đây là 5 bí quyết chi tiết được các chuyên gia hàng đầu của An Ninh City tổng hợp, giúp bạn đánh giá và đưa ra lựa chọn sáng suốt.</p>

            <h2>1. Kiểm tra tính hợp pháp và Năng lực pháp lý</h2>
            <p>Trước khi xem xét bất kỳ yếu tố nào khác, bạn phải xác minh tính hợp pháp của công ty bảo vệ. Yếu tố này bao gồm:</p>
            
            <h3>1.1. Giấy phép hoạt động chuyên ngành</h3>
            <ul>
                <li>Công ty phải có đầy đủ **Giấy chứng nhận đăng ký kinh doanh** và **Giấy chứng nhận đủ điều kiện về an ninh trật tự** do Công an cấp tỉnh hoặc Bộ Công an cấp. Đây là bằng chứng không thể thiếu chứng minh họ đủ điều kiện kinh doanh dịch vụ bảo vệ.</li>
                <li>Kiểm tra xem các giấy phép này còn hiệu lực hay không và phạm vi hoạt động của họ có phù hợp với nhu cầu của bạn không.</li>
            </ul>
            
            <h3>1.2. Trách nhiệm pháp lý rõ ràng</h3>
            <p>Yêu cầu công ty cam kết rõ ràng về trách nhiệm pháp lý khi xảy ra sự cố an ninh. Họ có mua các gói bảo hiểm trách nhiệm dân sự cho khách hàng không? Mức bồi thường tối đa là bao nhiêu và quy trình xử lý bồi thường như thế nào?</p>

            <h2>2. Đánh giá chất lượng đào tạo và Nghiệp vụ nhân sự</h2>
            <p>Chất lượng dịch vụ phụ thuộc hoàn toàn vào nhân viên. Một công ty chuyên nghiệp luôn đầu tư mạnh mẽ vào đào tạo con người.</p>
            <ul>
                <li>**Nội dung đào tạo:** Nhân viên phải được đào tạo bài bản không chỉ về kỹ năng quan sát, võ thuật mà còn phải thuần thục về: Kỹ năng PCCC, sơ cấp cứu, kỹ năng báo cáo, và các quy định pháp luật liên quan đến quyền hạn của bảo vệ.</li>
                <li>**Quá trình tuyển dụng:** Hỏi về quy trình tuyển dụng và kiểm tra lý lịch nhân viên. Tuyển dụng những người có lý lịch trong sạch là điều bắt buộc.</li>
                <li>**Trang bị:** Nhân viên có được trang bị đồng phục chuyên nghiệp, công cụ hỗ trợ tiêu chuẩn và hiện đại hay không.</li>
            </ul>

            <h2>3. Xem xét Kinh nghiệm và Danh mục Khách hàng</h2>
            <p>Kinh nghiệm thực chiến là thước đo quan trọng nhất cho năng lực an ninh.</p>
            <p>Một công ty uy tín thường có danh sách khách hàng đa dạng, bao gồm các đối tác lớn trong nhiều lĩnh vực như tài chính, sản xuất, bán lẻ, và tòa nhà cao cấp. Hỏi về các dự án tương tự với nhu cầu của doanh nghiệp bạn để đánh giá khả năng thích ứng của họ.</p>
            
            <h2>4. Cơ cấu tổ chức và Hệ thống Giám sát</h2>
            <p>Dịch vụ bảo vệ không chỉ là cử người đến gác. Nó là một hệ thống vận hành. </p>
            <ul>
                <li>**Hệ thống giám sát:** Công ty có trung tâm điều hành 24/7 để giám sát và hỗ trợ khẩn cấp cho các mục tiêu không?</li>
                <li>**Cơ cấu quản lý:** Tỉ lệ Giám sát viên/Nhân viên là bao nhiêu? Tần suất kiểm tra đột xuất tại mục tiêu là bao nhiêu lần/tháng?</li>
                <li>**Báo cáo:** Hệ thống báo cáo tuần tra, sự cố và đánh giá rủi ro có minh bạch và thường xuyên không.</li>
            </ul>
            
            <h2>5. Ứng dụng Công nghệ Bảo vệ</h2>
            <p>Sự kết hợp giữa con người và công nghệ tạo nên sức mạnh an ninh tối ưu. Ưu tiên các công ty có khả năng tích hợp:</p>
            <ul>
                <li>**Tuần tra điện tử:** Sử dụng hệ thống QR code hoặc NFC để đảm bảo nhân viên tuần tra đúng giờ, đúng lộ trình.</li>
                <li>**Camera AI:** Khả năng phân tích hình ảnh, nhận diện đối tượng và cảnh báo sớm các hành vi khả nghi.</li>
                <li>**Phần mềm quản lý:** Sử dụng phần mềm quản lý mục tiêu tập trung, cho phép khách hàng theo dõi trực tiếp hoạt động an ninh.</li>
            </ul>
            
            <p>Việc áp dụng 5 bí quyết trên sẽ giúp doanh nghiệp của bạn chọn được đối tác bảo vệ không chỉ đáng tin cậy mà còn có năng lực vượt trội, đảm bảo môi trường kinh doanh an toàn tuyệt đối.</p>
        `
    },
    {
        id: 3,
        title: "Quy trình kiểm soát an ninh hàng không chuẩn quốc tế ICAO",
        slug: "quy-trinh-an-ninh-icao",
        category: "Cẩm Nang",
        date: "2020-11-10",
        image: "/images/blog-default.jpg",
        fullContent: `
            <p>An ninh hàng không (Aviation Security) là lĩnh vực có tầm quan trọng đặc biệt, chi phối bởi các tiêu chuẩn và quy định nghiêm ngặt của Tổ chức Hàng không Dân dụng Quốc tế (ICAO). Mục tiêu tối thượng của quy trình này là ngăn chặn mọi hành vi can thiệp bất hợp pháp vào hoạt động hàng không dân dụng, đảm bảo an toàn tuyệt đối cho hành khách, phi hành đoàn và tài sản. Quy trình kiểm soát được thực hiện theo nhiều tầng bảo vệ, từ khu vực công cộng đến khu vực hạn chế.</p>

            <h2>1. Kiểm soát an ninh khu vực nhà ga và sân bay</h2>
            <p>Các biện pháp an ninh bắt đầu ngay từ khi hành khách bước vào khu vực sân bay, tập trung vào việc ngăn chặn mối đe dọa trước khi chúng tiếp cận khu vực kiểm soát chính.</p>
            
            <h3>1.1. Giám sát khu vực tiền sảnh và check-in</h3>
            <ul>
                <li>**Tuần tra:** Lực lượng an ninh tuần tra liên tục bằng người và chó nghiệp vụ (K9) tại các khu vực đông người (sảnh chờ, khu vực check-in).</li>
                <li>**Giám sát:** Sử dụng hệ thống camera giám sát thông minh để theo dõi hành vi, phát hiện vật phẩm bị bỏ quên hoặc hành vi khả nghi.</li>
                <li>**Phối hợp:** Phối hợp chặt chẽ với lực lượng Công an địa phương và Cảnh sát PCCC.</li>
            </ul>

            <h2>2. Quy trình kiểm tra an ninh hành khách (Screening)</h2>
            <p>Đây là bước then chốt để đảm bảo không có vật phẩm nguy hiểm nào được mang lên khu vực cách ly và máy bay. Quy trình này phải tuân thủ nghiêm ngặt và công bằng.</p>
            
            <h3>2.1. Kiểm tra thân thể và hành lý xách tay</h3>
            <p>Mỗi hành khách đều phải đi qua:</p>
            <ul>
                <li>**Cổng từ (WTMD):** Phát hiện vật kim loại.</li>
                <li>**Máy soi X-ray:** Kiểm tra hành lý xách tay. Hành khách phải tháo các vật dụng điện tử lớn và chất lỏng (theo quy tắc 100ml) ra khỏi túi để soi chiếu riêng.</li>
                <li>**Soi chiếu bổ sung:** Hành khách có thể được yêu cầu đi qua máy quét cơ thể (Body Scanner) hoặc được kiểm tra bằng tay nếu có cảnh báo từ hệ thống.</li>
            </ul>
            
            <h3>2.2. Kiểm tra hành lý ký gửi (Checked Baggage Screening)</h3>
            <p>Hành lý ký gửi được xử lý tại khu vực riêng biệt. Chúng thường đi qua hệ thống soi chiếu tự động nhiều cấp độ (EDS – Explosive Detection Systems) với công nghệ CT hiện đại. Nếu phát hiện vật khả nghi, hành lý sẽ bị giữ lại và kiểm tra thủ công với sự chứng kiến của chủ hành lý (nếu cần).</p>

            <h2>3. An ninh khu vực hạn chế (Airside Security)</h2>
            <p>Khu vực Airside, bao gồm đường băng, khu vực đỗ máy bay, nhà ga vệ tinh, là nơi có nguy cơ xâm nhập cao nhất và được bảo vệ nghiêm ngặt nhất.</p>
            <ul>
                <li>**Kiểm soát ra vào:** Chỉ nhân viên có thẻ ra vào hợp lệ, được cấp phép sau khi kiểm tra lý lịch nghiêm ngặt, mới được phép ra vào. Cửa ra vào được kiểm soát bằng sinh trắc học hoặc thẻ từ.</li>
                <li>**Tuần tra:** Lực lượng tuần tra cơ động 24/7 dọc theo hàng rào an ninh sân bay và khu vực tàu bay.</li>
                <li>**Giám sát hàng hóa:** Tất cả hàng hóa, thư tín và suất ăn phục vụ chuyến bay đều phải trải qua quá trình kiểm tra an ninh tương đương với hành lý.</li>
            </ul>
            
            <p>Tuân thủ tiêu chuẩn ICAO không chỉ là nghĩa vụ mà còn là bằng chứng về cam kết an toàn của quốc gia và các đơn vị hoạt động trong lĩnh vực hàng không.</p>
        `
    },
    {
        id: 5,
        title: "Trách nhiệm pháp lý của công ty bảo vệ và chủ đầu tư",
        slug: "trach-nhien-phap-ly",
        category: "Cẩm Nang",
        date: "2020-10-25",
        image: "/images/blog-default.jpg",
        fullContent: `
            <p>Mối quan hệ hợp tác giữa **Công ty Bảo vệ** và **Chủ đầu tư (Khách hàng)** được thiết lập dựa trên hợp đồng dịch vụ và chịu sự điều chỉnh của pháp luật hiện hành. Việc xác định rõ ràng trách nhiệm pháp lý của mỗi bên là nền tảng để xây dựng lòng tin, đảm bảo chất lượng dịch vụ và có cơ sở giải quyết tranh chấp khi rủi ro xảy ra. Bài viết này sẽ phân tích chuyên sâu về nghĩa vụ và trách nhiệm pháp lý của từng bên.</p>

            <h2>1. Trách nhiệm pháp lý cốt lõi của Công ty Bảo vệ</h2>
            <p>Công ty cung cấp dịch vụ bảo vệ là bên chịu trách nhiệm thực hiện các biện pháp phòng ngừa và xử lý sự cố an ninh tại mục tiêu đã cam kết. Trách nhiệm của họ bao gồm:</p>

            <h3>1.1. Trách nhiệm về mặt con người và nghiệp vụ</h3>
            <ul>
                <li>**Cung cấp nhân sự đủ điều kiện:** Đảm bảo toàn bộ nhân viên được triển khai phải có đầy đủ chứng chỉ nghiệp vụ, lý lịch tư pháp rõ ràng và sức khỏe tốt.</li>
                <li>**Tuân thủ quy trình:** Phải thực hiện đúng và đầy đủ các quy trình bảo vệ, tuần tra, kiểm soát đã thống nhất trong hợp đồng và các quy định của pháp luật.</li>
                <li>**Bồi dưỡng nghiệp vụ thường xuyên:** Đảm bảo nhân viên luôn được cập nhật kiến thức pháp luật và kỹ năng xử lý tình huống mới nhất.</li>
            </ul>
            
            <h3>1.2. Trách nhiệm vật chất và bồi thường thiệt hại</h3>
            <p>Điều khoản này thường là trọng tâm của hợp đồng dịch vụ.</p>
            <ul>
                <li>**Phạm vi bồi thường:** Cam kết bồi thường thiệt hại tài sản thực tế (mất mát, hư hỏng) xảy ra trong phạm vi trách nhiệm bảo vệ và do lỗi cố ý, vô ý hoặc sơ suất của nhân viên bảo vệ gây ra.</li>
                <li>**Mức bồi thường:** Phải được xác định rõ ràng, thường dựa trên giá trị tài sản và mức bảo hiểm trách nhiệm dân sự mà công ty đã mua.</li>
                <li>**Trách nhiệm dân sự:** Công ty phải tự chịu trách nhiệm về các vấn đề liên quan đến quan hệ lao động, tiền lương, bảo hiểm xã hội của nhân viên.</li>
            </ul>
            
            <h2>2. Trách nhiệm pháp lý của Chủ đầu tư (Khách hàng)</h2>
            <p>Khách hàng đóng vai trò hỗ trợ và tạo điều kiện để công ty bảo vệ hoàn thành nhiệm vụ.</p>
            
            <h3>2.1. Trách nhiệm về thanh toán và hỗ trợ vật chất</h3>
            <ul>
                <li>**Thanh toán phí dịch vụ:** Thực hiện thanh toán đầy đủ, đúng hạn theo thỏa thuận giá trị hợp đồng. Chậm trễ thanh toán có thể là cơ sở để công ty bảo vệ tạm ngừng dịch vụ.</li>
                <li>**Cung cấp điều kiện làm việc:** Phải cung cấp nơi nghỉ ngơi, làm việc, điện, nước và các trang thiết bị cần thiết (như phòng làm việc, bàn ghế) để nhân viên bảo vệ có thể thực hiện nhiệm vụ hiệu quả.</li>
            </ul>

            <h3>2.2. Trách nhiệm về thông tin và phối hợp</h3>
            <ul>
                <li>**Thông tin an ninh:** Cung cấp kịp thời các thông tin về sơ đồ mục tiêu, quy trình nội bộ, các khu vực cấm hoặc có rủi ro cao cho công ty bảo vệ.</li>
                <li>**Phối hợp xử lý:** Chủ động phối hợp với lực lượng bảo vệ và cơ quan chức năng khi xảy ra sự cố, hỗ trợ thu thập bằng chứng, camera để phục vụ điều tra và xử lý bồi thường.</li>
            </ul>
            
            <h2>3. Giải quyết tranh chấp và chấm dứt hợp đồng</h2>
            <p>Hợp đồng phải quy định rõ cách thức giải quyết các bất đồng, ưu tiên hòa giải. Nếu không thể hòa giải, các bên có thể đưa vụ việc ra Tòa án kinh tế có thẩm quyền hoặc Trọng tài thương mại để giải quyết, đảm bảo tính thượng tôn pháp luật và quyền lợi của mỗi bên.</p>
        `
    },
];

const getPostBySlug = (slug: string | undefined) => {
    return blogDetailData.find(post => post.slug === slug);
};

const RelatedPostsSidebar: React.FC<{ currentSlug: string }> = ({ currentSlug }) => {
    const relatedPosts = blogDetailData
        .filter(post => post.slug !== currentSlug)
        .slice(0, 3);

    return (
        <div className="blog-sidebar">

            <div className="sidebar-block related-posts-block">
                <h3 className="sidebar-title">Bài Viết Liên Quan</h3>
                <ul className="related-list">
                    {relatedPosts.map(post => (
                        <li key={post.id}>
                            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="sidebar-block cta-block">
                <h3 className="sidebar-title cta-title">Cần tư vấn An Ninh?</h3>
                <p>Liên hệ ngay để nhận báo giá chi tiết và tư vấn giải pháp tối ưu.</p>
                <a href="tel:0909773302" className="btn-cta-sidebar">0909.7733.02</a>
            </div>
        </div>
    );
};


const BlogDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const post = useMemo(() => getPostBySlug(slug), [slug]);

    if (!post) {
        return (
            <div className="blog-detail-page not-found">
                <div className="container" style={{ textAlign: 'center', padding: '100px 0' }}>
                    <h1>404 - KHÔNG TÌM THẤY BÀI VIẾT</h1>
                    <p>Bài viết bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
                    <Link to="/blog" className="btn-back-to-blog">Quay lại trang Cẩm Nang</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="blog-detail-page">
            <div className="container">

                <div className="detail-grid">
                    <div className="detail-content">
                        <span className="post-category-tag">{post!.category}</span>
                        <h1 className="post-title-detail">{post!.title}</h1>
                        <div className="post-meta-detail">
                            <span>Ngày đăng: {post!.date}</span>
                            <span>Tác giả: An Ninh City</span>
                        </div>

                        <img src={post!.image} alt={post!.title} className="featured-image-detail" />
                        <div
                            className="post-body"
                            dangerouslySetInnerHTML={{ __html: post!.fullContent }}
                        />

                        <div className="share-section">
                            <span className="share-text">Chia sẻ bài viết:</span>
                            <button className="share-button facebook">Facebook</button>
                            <button className="share-button zalo">Zalo</button>
                        </div>
                    </div>
                    <RelatedPostsSidebar currentSlug={slug || ''} />

                </div>
            </div>
        </div>
    );
};

export default BlogDetail;