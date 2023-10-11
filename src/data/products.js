const products = [
    {
        id: 1,
        name: 'Gold Nutrition, Gold C, USP Grade Vitamin C',
        price: 3190000,
        image: '/assets/images/product/product1.png',
        categoryId: 1,
        storeId: 2,
        description:
            'Sản phẩm này được chế tạo với công nghệ tiên tiến để đảm bảo sự tinh khiết và khả năng hấp thụ tối đa. Vitamin C là một chất chống oxy hóa mạnh mẽ, giúp cải thiện sức khỏe của hệ thống miễn dịch, giảm viêm nhiễm, và hỗ trợ quá trình làm đẹp da.',
        relateProducts: [1, 2, 3, 4],
    },
    {
        id: 2,
        name: 'Serum The Ordinary',
        price: 1450000,
        image: '/assets/images/product/product2.png',
        categoryId: 1,
        storeId: 2,
        description:
            'Sản phẩm này nổi bật với việc sử dụng các thành phần hiệu quả như axit hyaluronic, niacinamide, và các loại peptide, giúp cải thiện tình trạng da, làm giảm nếp nhăn, giữ ẩm và làm sáng da',
        relateProducts: [1, 2, 3, 4],
    },
    {
        id: 3,
        name: 'Son Thỏi Lì 3CE Vỏ Trong Suốt Focus On',
        price: 1350000,
        image: '/assets/images/product/product3.png',
        categoryId: 1,
        storeId: 2,
        description:
            'Son Thỏi Lì 3CE Vỏ Trong Suốt Focus On là một sản phẩm trang điểm cao cấp của thương hiệu 3CE, nổi tiếng với chất lượng và màu sắc đẹp mắt. Son này có thiết kế vỏ ngoài trong suốt với tông màu Focus On, tạo nên một vẻ ngoại hình sang trọng và hiện đại.',
        relateProducts: [1, 2, 3, 4],
    },
    {
        id: 4,
        name: 'Bộ mỹ phẩm hữu cơ Botáni',
        price: 6850000,
        image: '/assets/images/product/product4.png',
        categoryId: 1,
        storeId: 2,
        description:
            'Bộ mỹ phẩm hữu cơ Botáni là một bộ sản phẩm chăm sóc da tự nhiên và hữu cơ, được chế tạo từ các thành phần thiên nhiên tinh khiết, không chứa hóa chất độc hại, paraben, hoặc các chất phụ gia gây hại cho da.',
        relateProducts: [1, 2, 3, 4],
    },
    {
        id: 5,
        name: 'Xịt khoáng Curology',
        price: 6990000,
        image: '/assets/images/product/product5.png',
        categoryId: 1,
        storeId: 2,
        description:
            'Xịt khoáng Curology là một sản phẩm xịt khoáng được thiết kế để cân bằng độ ẩm và làm dịu làn da. Đặc biệt, sản phẩm này thường được sử dụng sau khi rửa mặt hoặc bất kỳ lúc nào trong ngày để cung cấp độ ẩm và làm sạch da. Xịt khoáng Curology thường chứa các thành phần như nước khoáng, các loại thảo mộc.',
        relateProducts: [1, 2, 3, 4],
    },

    {
        id: 6,
        name: 'Serum dưỡng trắng da ngọc trai',
        price: 159000,
        image: '/assets/images/product/product6.png',
        categoryId: 1,
        storeId: 2,
        description:
            'Sản phẩm này thường chứa các thành phần như axit hyaluronic, vitamin C, và các loại dưỡng chất khác giúp làm sáng da, giảm tình trạng tắm nám, tăng cường độ ẩm, và cải thiện độ đàn hồi của da.',
        relateProducts: [1, 2, 3, 4],
    },
    {
        id: 7,
        name: 'Serum dưỡng ẩm Good Skin Club',
        price: 269000,
        image: '/assets/images/product/product7.png',
        categoryId: 1,
        storeId: 2,
        description:
            'Serum dưỡng ẩm Good Skin Club là một sản phẩm chăm sóc da chất lượng cao, được thiết kế đặc biệt để cung cấp độ ẩm sâu cho làn da khô và thiếu nước. Sản phẩm này thường chứa các thành phần như axit hyaluronic, glycerin, và các dưỡng chất từ thảo mộc giúp làm dịu và làm mềm làn da.',
        relateProducts: [1, 2, 3, 4],
    },
    {
        id: 8,
        name: 'Kem dưỡng ẩm chiết xuất trà xanh',
        price: 79000,
        image: '/assets/images/product/product8.png',
        categoryId: 1,
        storeId: 2,
        description:
            'Kem dưỡng ẩm chiết xuất trà xanh là một sản phẩm chăm sóc da chứa các thành phần được chiết xuất từ lá trà xanh, một loại trà giàu chất chống oxy hóa và các hợp chất có lợi cho làn da. Thành phần chính như polyphenols và catechins trong trà xanh giúp làm dịu, làm sáng và chống lão hóa da.',
        relateProducts: [1, 2, 3, 4],
    },
];

export default products;
