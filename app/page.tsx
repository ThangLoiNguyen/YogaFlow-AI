import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HeroSection } from "@/components/hero-section";
import { FeatureCard } from "@/components/feature-card";
import { RecommendationCard } from "@/components/recommendation-card";
import { StudentProgress } from "@/components/student-progress";
import { TeacherAnalytics } from "@/components/teacher-analytics";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  mockStudentProgress,
  mockTeacherAnalytics,
  mockRecommendations,
} from "@/lib/mock-data";

export default function LandingPage() {
  const primaryRec = mockRecommendations[0];

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12">
        <header className="mb-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600">
              <span className="text-sm font-bold text-white">YF</span>
            </div>
            <span className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              YogaFlow AI
            </span>
          </div>
          <div className="flex items-center gap-6">
            <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-400 md:flex">
              <Link href="#features" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
                Tính năng
              </Link>
              <Link href="#pricing" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
                Bảng giá
              </Link>
              <Link href="/login" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
                Đăng nhập
              </Link>
            </nav>
            <ThemeToggle />
          </div>
        </header>

        <HeroSection />

        <section id="features" className="mt-24">
          <div className="mb-12 text-center">
            <Badge className="mb-4 bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300 border-blue-200 dark:border-blue-800">
              Xây dựng cho hành trình yoga hiện đại
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
              Mọi thứ bạn cần để phát triển yoga studio
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Từ đề xuất lớp học cá nhân hóa đến phân tích studio chuyên sâu—YogaFlow AI giúp bạn tập trung vào những gì quan trọng nhất.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <FeatureCard
              title="Tư vấn lớp học bằng AI"
              description="Phân tích dữ liệu sức khỏe và mục tiêu để đề xuất các lớp học phù hợp nhất với cơ thể và lịch trình của học viên."
            />
            <FeatureCard
              title="Theo dõi sức khỏe & tiến độ"
              description="Theo dõi độ dẻo dai, sức mạnh, sự cân bằng và tình trạng sức khỏe tổng thể qua từng tuần và từng tháng—một cách trực quan và dễ dàng."
            />
            <FeatureCard
              title="Bảng điều khiển cho giáo viên"
              description="Giúp giáo viên có cái nhìn rõ ràng về tiến bộ, mức độ tương tác và xu hướng học tập của học viên trong các lớp học."
            />
          </div>
        </section>

        <section className="mt-24 grid gap-12 lg:grid-cols-2">
          <Card className="border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50">
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                Vấn đề học viên hiện nay gặp phải
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-600 dark:text-slate-400">
              <p>
                Hầu hết người học yoga tự đoán trình độ của mình. Họ phân vân giữa lớp cơ bản và trung bình, không chắc mình đang tập quá sức hay chưa đủ.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                  Thật khó để tìm trình độ lớp học phù hợp với cơ thể.
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                  Tiến độ không rõ ràng—không có cách nào để theo dõi sự cải thiện.
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                  Học viên hiếm khi hiểu cơ thể họ thực sự thay đổi ra sao.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/50">
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                YogaFlow AI thay đổi hành trình của bạn như thế nào
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-600 dark:text-slate-400">
              <p>
                YogaFlow AI sử dụng dữ liệu sức khỏe và luyện tập để đưa ra đề xuất cá nhân hóa, thiết kế sát với thể trạng thực tế của bạn.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                  Gợi ý lớp học bằng AI dựa trên sức khoẻ, mục tiêu, và lịch sử thực hành.
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                  Bảng điều khiển đẹp, đơn giản để theo dõi tiến độ theo thời gian thực.
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                  Phân tích thông minh giúp giáo viên dễ dàng điều chỉnh lịch trình lớp học.
                </li>
              </ul>
              <p className="text-blue-700 dark:text-blue-300 font-medium">
                Bớt phân vân. Tập trung hiện tại. Những bài tập yoga được thiết kế dành riêng cho bạn.
              </p>
            </CardContent>
          </Card>
        </section>

        <section id="product" className="mt-24">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
              Tổng quan sản phẩm
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              Góc nhìn toàn diện cho học viên và giáo viên—tích hợp đề xuất, tiến độ, và dữ liệu phân tích tại một nơi duy nhất.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <Card className="border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/80 lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-base font-medium text-slate-900 dark:text-slate-100">
                  Tổng quan tiến độ học viên
                  <Badge variant="secondary" className="text-xs">Xem trước</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <StudentProgress data={mockStudentProgress} compact />
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/50">
              <CardHeader>
                <CardTitle className="text-base font-medium text-slate-900 dark:text-slate-100">
                  Đề xuất lớp học AI
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RecommendationCard recommendation={primaryRec} />
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/80">
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-base font-medium text-slate-900 dark:text-slate-100">
                Phân tích cho giáo viên
                <Badge variant="secondary" className="text-xs">Tổng quan Studio</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <TeacherAnalytics data={mockTeacherAnalytics} compact />
            </CardContent>
          </Card>
        </section>

        <section id="pricing" className="mt-20">
          <div className="mb-8 max-w-xl space-y-3">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
              Bảng giá đơn giản cho mọi nhu cầu
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Bắt đầu miễn phí cho học viên. Nâng cấp khi studio hoặc quy mô giảng dạy của bạn sẵn sàng mở rộng.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-900 dark:text-slate-50">
                    Cơ bản
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    Dành cho học viên cá nhân
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-2xl font-semibold text-slate-900 dark:text-slate-50">
                  Miễn phí
                  <span className="ml-1 text-xs font-normal text-slate-500 dark:text-slate-400">
                    mãi mãi
                  </span>
                </p>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  <li>• Đề xuất lớp học cá nhân hóa</li>
                  <li>• Theo dõi tiến bộ cơ bản</li>
                  <li>• Tối đa 3 mục tiêu</li>
                </ul>
                <Link href="/onboarding">
                  <Button className="w-full bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-700">
                    Bắt đầu với vai trò học viên
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-sky-500/40 bg-sky-50/50 shadow-md shadow-sky-500/10 dark:bg-slate-900/80 dark:shadow-sky-500/30">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-900 dark:text-slate-50">Chuyên nghiệp</span>
                  <Badge className="bg-sky-500 text-white dark:bg-sky-500 dark:text-slate-950 border-transparent">
                    Phổ biến nhất
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-2xl font-semibold text-slate-900 dark:text-slate-50">
                  $19
                  <span className="ml-1 text-xs font-normal text-slate-500 dark:text-slate-400">
                    /tháng
                  </span>
                </p>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  <li>• Đề xuất không giới hạn</li>
                  <li>• Phân tích chuyên sâu về sức khỏe</li>
                  <li>• Tích hợp thiết bị đeo (sắp ra mắt)</li>
                </ul>
                <Link href="/onboarding">
                  <Button className="w-full bg-sky-500 text-white hover:bg-sky-600 dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400">
                    Nâng cấp lên Pro
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-900 dark:text-slate-50">
                    Studio
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    Dành cho giáo viên & studio
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-2xl font-semibold text-slate-900 dark:text-slate-50">
                  $79
                  <span className="ml-1 text-xs font-normal text-slate-500 dark:text-slate-400">
                    /tháng
                  </span>
                </p>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  <li>• Bảng phân tích giáo viên</li>
                  <li>• Hiệu năng lớp học & độ chuyên cần</li>
                  <li>• Hồ sơ học viên không giới hạn</li>
                </ul>
                <Link href="/teacher-dashboard">
                  <Button
                    variant="outline"
                    className="w-full border-sky-500/40 text-sky-600 hover:bg-slate-50 dark:text-sky-300 dark:hover:bg-slate-900"
                  >
                    Liên hệ
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mt-24">
          <Card className="border-blue-200 bg-gradient-to-r from-blue-50 via-indigo-50 to-cyan-50 dark:border-blue-800 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-cyan-950/20">
            <CardContent className="flex flex-col items-center justify-center gap-8 px-8 py-12 text-center md:flex-row md:gap-12">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 sm:text-3xl">
                  Bắt đầu hành trình yoga của riêng bạn
                </h2>
                <p className="text-slate-600 dark:text-slate-400 max-w-md">
                  Trả lời một số câu hỏi và để YogaFlow AI tìm lớp học phù hợp với cơ thể bạn.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link href="/onboarding">
                  <Button size="lg" className="w-full sm:w-auto">
                    Bắt đầu (Học viên)
                  </Button>
                </Link>
                <Link href="/teacher-dashboard">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Giáo viên yoga
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>

        <footer className="mt-24 border-t border-slate-200 dark:border-slate-800 pt-12">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600">
                <span className="text-sm font-bold text-white">YF</span>
              </div>
              <span className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                YogaFlow AI
              </span>
            </div>
            <div className="flex items-center gap-8 text-sm text-slate-600 dark:text-slate-400">
              <button className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">Bảo mật</button>
              <button className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">Điều khoản</button>
              <button className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">Hỗ trợ</button>
            </div>
          </div>
          <div className="mt-8 border-t border-slate-200 dark:border-slate-800 pt-8 text-center text-sm text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} YogaFlow AI. Đã đăng ký bản quyền.
          </div>
        </footer>
      </div>
    </main>
  );
}

