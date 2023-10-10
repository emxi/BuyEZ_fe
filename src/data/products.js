const products = [
    {
        id: 1,
        name: 'Điện Thoại Oppo A54 (4GB/128GB) - Hàng Chính Hãng',
        price: 3190000,
        image: '/assets/images/product/dienthoai1.webp',
        categoryId: 1,
        storeId: 1,
        description:
            'Điện thoại OPPO A54 có thiết kế kiểu thiết kế tràn viền, giúp cho chiếc điện thoại có một màn hình siêu lớn nhưng vẫn vừa vặn trong lòng bàn tay, phù hợp cho mọi hoạt động hàng ngày của người dùng trẻ năng động.',
        relateProducts: [1, 2, 3, 4],
    },
    {
        id: 2,
        name: 'Apple iPhone 14 Pro Max',
        price: 26450000,
        image: '/assets/images/product/dienthoai2.webp',
        categoryId: 1,
        storeId: 1,
        description:
            'iPhone 14 Pro Max. Bắt trọn chi tiết ấn tượng với Camera Chính 48MP. Trải nghiệm iPhone theo cách hoàn toàn mới với Dynamic Island và màn hình Luôn Bật. Công nghệ an toàn quan trọng – Phát Hiện Va Chạm1 thay bạn gọi trợ giúp khi cần.',
        relateProducts: [1, 2, 3, 4],
    },
    {
        id: 3,
        name: 'Apple iPhone 12',
        price: 13350000,
        image: '/assets/images/product/dienthoai3.webp',
        categoryId: 1,
        storeId: 1,
        description:
            'iPhone 12 đẩy nhanh mọi tác vụ với mạng 5G siêu nhanh.1 A14 Bionic, chip nhanh nhất trên điện thoại thông minh. Hệ thống camera kép mới. Với màn hình Super Retina XDR tuyệt đẹp, nay bạn có thể chiêm ngưỡng từng chi tiết hình ảnh vô cùng sống động.',
        relateProducts: [1, 2, 3, 4],
    },
    {
        id: 4,
        name: 'Điện thoại Samsung Galaxy A34 5G (8GB/128GB) - Hàng chính hãng',
        price: 6850000,
        image: '/assets/images/product/dienthoai4.webp',
        categoryId: 1,
        storeId: 1,
        description:
            'Điện thoại Galaxy A34 5G sở hữu thiết kế khác hoàn toàn so với thế hệ tiền nhiệm Galaxy A33 5G 128GB. Vẻ ngoài của chiếc điện thoại mới này khá giống với Galaxy S23 5G 256GB. Điều này thể hiện ở bộ camera sau với cụm module được loại bỏ, thay vào đó Samsung đã trang bị viền kim loại ôm trọn từng ống kính camera.',
        relateProducts: [1, 2, 3, 4],
    },
    {
        id: 5,
        name: 'Điện Thoại Samsung Galaxy S20 FE (8GB/256GB)',
        price: 6990000,
        image: '/assets/images/product/dienthoai5.webp',
        categoryId: 1,
        storeId: 1,
        description:
            'Samsung Galaxy S20 FE được trang bị màn hình siêu tràn viền Infinity-O có kích thước 6.5 inch đi cùng tấm nền Super AMOLED, độ phân giải Full HD+ cho người dùng dễ dàng đắm chìm vào không gian giải trí lớn với những hình ảnh, nội dung hiển thị sắc nét nịnh mắt trên một màn ảnh vô cùng chất lượng.',
        relateProducts: [1, 2, 3, 4],
    },

    {
        id: 6,
        name: 'Áo polo nam ngắn tay có cổ',
        price: 159000,
        image: '/assets/images/product/thoitrang1.webp',
        categoryId: 2,
        storeId: 2,
        description:
            'Áo thun nam luôn là sự lựa chọn của phái mạnh đi cùng với đó thì nhu cầu về áo thun nam ngày càng tăng dẫn tới sự đa dạng về mẫu mã, chất liệu và màu sắc. Tuy nhiên, tuỳ theo từng sở thích và phong cách cá nhân mà ( tên shop) đã sản xuất ra nhiều mẫu mã đa dạng để bạn có thể lựa chọn',
        relateProducts: [6, 7, 8, 9],
    },
    {
        id: 7,
        name: 'Combo 3 Áo thun nam cổ bẻ (Tặng 1 dây nịt da hàng hiệu) vải cá sấu',
        price: 269000,
        image: '/assets/images/product/thoitrang2.webp',
        categoryId: 2,
        storeId: 2,
        description:
            'Áo thun nam cổ bẻ vải cá sấu là trang phục giúp các chàng trai làm mới phong cách của chính mình. Đây là dòng sản phẩm rất được các bạn trẻ ưa chuộng vì tính năng dễ phối trang phục và phù hợp với hầu hết các buổi đi chơi, đi làm.',
        relateProducts: [6, 7, 8, 9],
    },
    {
        id: 8,
        name: 'Áo thun tay lỡ form rộng - phông nam nữ cotton oversize - T shirt ONE - 2N Unisex',
        price: 79000,
        image: '/assets/images/product/thoitrang3.webp',
        categoryId: 2,
        storeId: 2,
        description:
            'Sản phẩm này là tài sản cá nhân được bán bởi Nhà Bán Hàng Cá Nhân và không thuộc đối tượng phải chịu thuế GTGT. Do đó hoá đơn VAT không được cung cấp trong trường hợp này.',
        relateProducts: [6, 7, 8, 9],
    },
    {
        id: 9,
        name: 'Áo khoác nỉ nữ NÓN 2 LỚP phong cách',
        price: 109000,
        image: '/assets/images/product/thoitrang4.webp',
        categoryId: 2,
        storeId: 2,
        description:
            'Được thiết kế mang phong cách thời trang thời thượng. Mẫu áo hoodie này không chỉ giúp bạn giữ ấm trong mùa lạnh mà còn có thể chống nắng, chống gió, chống bụi, chống rét, chống tia UV cực tốt, rất tiện lợi nhé.',
        relateProducts: [6, 7, 8, 9],
    },
];

export default products;
