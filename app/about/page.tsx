"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 text-gray-800">
      {/* --- Header --- */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-semibold text-primary mb-3">
          Về Khỏe Mãi
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Nơi sẻ chia câu chuyện – thói quen – cảm hứng sống khỏe dành cho người Việt sau tuổi 50.
        </p>
      </motion.div>

      {/* --- Section 1: Tầm nhìn --- */}
      <section className="mb-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-primary/5 p-8 rounded-2xl shadow-sm dark:bg-gray-800 dark:shadow-md dark:shadow-gray-700"
        >
          <h2 className="text-2xl font-semibold mb-3 text-primary">Tầm nhìn</h2>
          <p className="text-gray-700 leading-relaxed dark:text-gray-300">
            Khỏe Mãi không chỉ là một blog sức khỏe.  
            Khỏe Mãi mong muốn trở thành người bạn đồng hành tin cậy trên hành trình “sống khỏe – sống vui – sống ý nghĩa” người Việt Nam.  
            Mỗi bài viết, mỗi câu chuyện đều được viết ra từ sự thấu hiểu, giản dị nhưng chân thật.
          </p>
        </motion.div>
      </section>

      {/* --- Section 2: Sứ mệnh & Giá trị --- */}
      <section className="mb-16 grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="p-8 bg-primary/5 shadow-md rounded-2xl dark:bg-gray-800 dark:shadow-md dark:shadow-gray-700"
        >
          <h2 className="text-2xl font-semibold text-primary mb-3">Sứ mệnh</h2>
          <p className="text-gray-700 leading-relaxed dark:text-gray-300">
            Trở thành người bạn đồng hành của cộng đồng trung niên Việt Nam,  
            giúp họ hiểu rõ cơ thể, tìm lại năng lượng, và lan tỏa tinh thần sống khỏe – sống lâu – sống đẹp.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="p-8 bg-primary/5 shadow-md rounded-2xl dark:bg-gray-800 dark:shadow-md dark:shadow-gray-700"
        >
          <h2 className="text-2xl font-semibold text-primary mb-3">Giá trị cốt lõi</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 dark:text-gray-300">
            <li>Chân thật – vì sức khỏe không cần màu mè.</li>
            <li>Đồng hành – vì mỗi người xứng đáng được lắng nghe.</li>
            <li>Tích cực – vì hạnh phúc bắt đầu từ một suy nghĩ lành.</li>
          </ul>
        </motion.div>
      </section>

      {/* --- Section 3: Câu chuyện hình thành --- */}
      <section className="mb-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-primary/5 p-8 rounded-2xl dark:bg-gray-800 dark:shadow-md dark:shadow-gray-700"
        >
          <h2 className="text-2xl font-semibold text-primary mb-3">Câu chuyện Khỏe Mãi</h2>
          <p className="text-gray-700 leading-relaxed mb-4 dark:text-gray-300">
            Khỏe Mãi được hình thành từ một câu hỏi giản dị:  
            “Làm sao để cha mẹ mình sống khỏe hơn, vui hơn – và ít cô đơn hơn mỗi ngày?”
          </p>
          <p className="text-gray-700 leading-relaxed mb-4 dark:text-gray-300">
            Từ những dòng chia sẻ đầu tiên, chúng tôi nhận ra sức khỏe không chỉ là chế độ ăn hay thuốc bổ.  
            Nó là câu chuyện của thói quen, của tinh thần, và cả những người bạn đồng hành trên hành trình dài.
          </p>
          <p className="text-gray-700 leading-relaxed dark:text-gray-300">
            Vì thế, Khỏe Mãi ra đời – không phải để “dạy” ai cách sống,  
            mà để cùng nhau sống chậm lại, lắng nghe cơ thể, và yêu thương bản thân hơn một chút mỗi ngày.
          </p>
        </motion.div>
      </section>

      {/* --- Section 4: Chuyên mục Câu chuyện Khỏe Mãi --- */}
      <section>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl font-semibold text-primary mb-3">
            Chuyên mục “Câu chuyện Khỏe Mãi”
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto mb-6 dark:text-gray-300">
            Đây là nơi chúng tôi kể lại những hành trình thật – của những con người thật –  
            đã dám bắt đầu lại, dù ở tuổi 50, 60 hay 70.  
            Mỗi câu chuyện là một mảnh ghép của niềm tin rằng: “Chừng nào ta còn yêu đời, ta vẫn Khỏe Mãi.”
          </p>
          <a
            href="/stories"
            className="inline-block bg-primary/70 text-white px-6 py-3 rounded-full font-medium hover:bg-primary/80 transition"
          >
            Đọc các câu chuyện
          </a>
        </motion.div>
      </section>
    </div>
  );
}
