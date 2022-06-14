import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  ChipIcon,
  ClockIcon,
  MenuIcon,
  PuzzleIcon,
  SwitchVerticalIcon,
  TemplateIcon,
  XIcon,
} from "@heroicons/react/outline";
import { useHistory } from "react-router-dom";
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
  ChevronRightIcon,
  StarIcon,
  CloudUploadIcon,
  CogIcon,
  LockClosedIcon,
  RefreshIcon,
  ServerIcon,
  ShieldCheckIcon,
  UserIcon,
} from "@heroicons/react/outline";
import logo from "../../assets/logo_4.svg";
import handleLink from "../../utils/handleLink";
import Banner from "../../parts/shared/Banner";
import frame1 from "../../assets/frame1.png";
const navigation = [
  { name: "Trang chủ", href: "#" },
  { name: "Sản phẩm", href: "#" },
  { name: "Giải pháp", href: "#" },
  { name: "Khách hàng", href: "#" },
  { name: "Công ty", href: "#" },
  { name: "Báo chí", href: "#" },
  { name: "Blog", href: "#" },
];

const features = [
  {
    name: "Phân quyền",
    icon: UserIcon,
    description:
      "Từ C-level, manager, employee, mỗi người có một vai trò và quyền hạn nhất định, đảm bảo tính tổ chức của hệ thống doanh nghiệp.",
  },
  {
    name: "Thời gian thực",
    icon: ClockIcon,
    description:
      "Dữ liệu được cập nhật real-time, đồng bộ hóa thông tin khắp doanh nghiệp. Không còn nỗi đau dữ liệu bị phân tán, rời rạc như trước.",
  },
  {
    name: "A.I",
    icon: ChipIcon,
    description:
      "Sử dụng sức mạnh của công nghệ trí tuệ nhân tạo để phân tích, đánh giá hiệu suất doanh nghiệp. Nhận biết và cảnh báo khi nhận diện được vấn đề.",
  },
  {
    name: "Thẻ điểm mẫu",
    icon: TemplateIcon,
    description:
      "Nhanh chóng và dễ dàng khởi tạo một thẻ điểm cân bằng cho mỗi phòng của doanh nghiệp với kho thẻ điểm mẫu.",
  },
  { name: "Thông suốt", icon: SwitchVerticalIcon, description: "" },
  {
    name: "Tích hợp",
    icon: PuzzleIcon,
    description:
      "Dễ dàng tích hợp với các công cụ CRM, HRM, quản lý dự án bên thứ ba hoặc kết nối ngay với các giải pháp Webwork khác.",
  },
];

const footer = {
  solutions: [{ name: "Webwork Monitoring", href: "#" }],
  support: [
    { name: "Cập nhật", href: "#" },
    { name: "Nhà phát triển", href: "#" },
    { name: "Facebook", href: "#" },
    { name: "Linkedin", href: "#" },
    { name: "Youtube", href: "#" },
  ],
  company: [
    { name: "Giới thiệu", href: "#" },
    { name: "Khách hàng", href: "#" },
    { name: "Liên hệ", href: "#" },
    { name: "Điều khoản", href: "#" },
    { name: "Chính sách bảo mật", href: "#" },
    { name: "Báo chí", href: "#" },
    { name: "Đối tác", href: "#" },
    { name: "Tuyển dụng", href: "#" },
  ],
  legal: [
    { name: "Email: contact@webwork.app", href: "#" },
    { name: "Hotline: (+84) 39.447.5517", href: "#" },
    {
      name: "Trụ sở: Lô E2a-7, Đường D1 Khu Công nghệ cao, P.Long Thạnh Mỹ, Q.9, TP.Hồ Chí Minh",
      href: "#",
    },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
        </svg>
      ),
    },
    {
      name: "Linkedin",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "Youtube",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
        </svg>
      ),
    },
  ],
};

export default function Landing() {
  const history = useHistory();
  const [dismiss, setDismiss] = useState(false);

  return (
    <>
      {!dismiss && (
        <Banner
          message="Webwork.vn đang được cập nhật nên hiện tại nhiều trang có thể bị thiếu."
          setDismiss={setDismiss}
        />
      )}

      <div className="relative bg-white overflow-hidden">
        <div
          className="hidden lg:block lg:absolute lg:inset-0"
          aria-hidden="true"
        >
          <svg
            className="absolute top-0 left-1/2 transform translate-x-64 -translate-y-8"
            width={640}
            height={784}
            fill="none"
            viewBox="0 0 640 784"
          >
            <defs>
              <pattern
                id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
                x={118}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              y={72}
              width={640}
              height={640}
              className="text-gray-50"
              fill="currentColor"
            />
            <rect
              x={118}
              width={404}
              height={784}
              fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)"
            />
          </svg>
        </div>

        <div className="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
          <Popover>
            {({ open }) => (
              <>
                <nav
                  className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
                  aria-label="Global"
                >
                  <div className="flex items-center flex-1">
                    <div className="flex items-center justify-between w-full md:w-auto">
                      <a href="#">
                        <span className="sr-only">Webwork</span>
                        <img className="h-8 w-auto sm:h-10" src={logo} alt="" />
                      </a>
                      <div className="-mr-2 flex items-center md:hidden">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                          <span className="sr-only">Open main menu</span>
                          <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="hidden md:block md:ml-10 md:space-x-10">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="font-medium text-gray-500 hover:text-gray-900"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="hidden md:block text-right">
                    <span className="inline-flex rounded-md shadow-md ring-1 ring-black ring-opacity-5">
                      <a
                        href="#"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50"
                      >
                        Đăng nhập
                      </a>
                    </span>
                  </div>
                </nav>

                <Transition
                  show={open}
                  as={Fragment}
                  enter="duration-150 ease-out"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="duration-100 ease-in"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Popover.Panel
                    focus
                    static
                    className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                  >
                    <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="px-5 pt-4 flex items-center justify-between">
                        <div>
                          <img className="h-8 w-auto" src={logo} alt="" />
                        </div>
                        <div className="-mr-2">
                          <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                            <span className="sr-only">Close main menu</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                      <div className="px-2 pt-2 pb-3 space-y-1">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                      <a
                        href="#"
                        className="block w-full px-5 py-3 text-center font-medium text-blue-600 bg-gray-50 hover:bg-gray-100"
                      >
                        Đăng nhập
                      </a>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>

          <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                <h1>
                  <span className="block text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
                    Coming soon
                  </span>
                  <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                    <span className="block text-gray-900">
                      Theo dõi hiệu suất
                    </span>
                    <span className="block text-blue-600">doanh nghiệp</span>
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  Giải pháp quản trị hiệu suất BSC tốt nhất, giúp đảm bảo sự
                  tăng trưởng khỏe mạnh của doanh nghiệp.
                </p>
                <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                  <p className="text-base font-medium text-gray-900">
                    Đăng ký để được nhận thông báo
                  </p>
                  {/* <form action="#" method="POST" className="mt-3 sm:flex">
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="block w-full py-3 text-base rounded-md placeholder-gray-500 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:flex-1 border-gray-300"
                      placeholder="Nhập email của bạn"
                    />
                    <button
                      type="submit"
                      className="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                    >
                      Nhận thông báo
                    </button>
                  </form> */}

                  {/* Begin Mailchimp Signup Form */}
                  <form
                    action="https://gmail.us5.list-manage.com/subscribe/post?u=51fa0e1a9f003c8932644bd87&id=5fee942470"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    className="mt-3 sm:flex"
                    target="_blank"
                    noValidate
                  >
                    <label htmlFor="mce-EMAIL" className="sr-only">
                      Email
                    </label>
                    <input
                      type="email"
                      name="EMAIL"
                      className="block w-full py-3 text-base rounded-md placeholder-gray-500 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:flex-1 border-gray-300"
                      id="mce-EMAIL"
                      placeholder="Nhập email của bạn"
                    />
                    <div id="mce-responses" className="clear">
                      <div
                        className="response"
                        id="mce-error-response"
                        style={{ display: "none" }}
                      />
                      <div
                        className="response"
                        id="mce-success-response"
                        style={{ display: "none" }}
                      />
                    </div>{" "}
                    {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                    <div
                      style={{ position: "absolute", left: "-5000px" }}
                      aria-hidden="true"
                    >
                      <input
                        type="text"
                        name="b_51fa0e1a9f003c8932644bd87_5fee942470"
                        tabIndex={-1}
                        defaultValue
                      />
                    </div>
                    <div className="clear">
                      <input
                        type="submit"
                        value="Nhận thông báo"
                        name="subscribe"
                        id="mc-embedded-subscribe"
                        className="cursor-pointer mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                      />
                    </div>
                  </form>

                  {/* <p className="mt-3 text-sm text-gray-500">
                    We care about the protection of your data. Read our
                    <a href="#" className="font-medium text-gray-900 underline">
                      {" "}Privacy Policy
                    </a>
                    .
                  </p> */}
                </div>
              </div>
              <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                <svg
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden"
                  width={640}
                  height={784}
                  fill="none"
                  viewBox="0 0 640 784"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
                      x={118}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="text-gray-200"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    y={72}
                    width={640}
                    height={640}
                    className="text-gray-50"
                    fill="currentColor"
                  />
                  <rect
                    x={118}
                    width={404}
                    height={784}
                    fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)"
                  />
                </svg>
                <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                  <button
                    type="button"
                    className="relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <span className="sr-only">
                      Watch our video to learn more
                    </span>
                    {/* <img
                    className="w-full"
                    src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    alt=""
                  /> */}

                    <div
                      style={{ padding: "56.25% 0 0 0", position: "relative" }}
                    >
                      <iframe
                        className="w-full"
                        src="https://player.vimeo.com/video/594402014?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;h=4bb39a3595"
                        frameborder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowfullscreen
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                        }}
                      ></iframe>
                    </div>

                    {/* <div
                    className="absolute inset-0 w-full h-full flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <svg
                      className="h-20 w-20 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 84 84"
                    >
                      <circle
                        opacity="0.9"
                        cx={42}
                        cy={42}
                        r={42}
                        fill="white"
                      />
                      <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
                    </svg>
                  </div> */}
                  </button>
                </div>
              </div>
            </div>

            {/* Features section */}
            <div className="relative bg-white py-16 sm:py-24 lg:py-32">
              <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                <h2 className="text-base font-semibold tracking-wider text-blue-600 uppercase">
                  Webwork
                </h2>
                <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                  Doanh nghiệp khỏe mạnh
                </p>
                <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                  Tạo Balanced Scorecards, đo lường & theo dõi mục tiêu bằng
                  KPIs/OKRs, phân tích & đánh giá hiệu suất với sự trợ giúp của
                  A.I.
                </p>
                <div className="mt-12">
                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature) => (
                      <div key={feature.name} className="pt-6">
                        <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                          <div className="-mt-6">
                            <div>
                              <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                                <feature.icon
                                  className="h-6 w-6 text-white"
                                  aria-hidden="true"
                                />
                              </span>
                            </div>
                            <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                              {feature.name}
                            </h3>
                            <p className="mt-5 text-base text-gray-500">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials section */}
            <section className="bg-white overflow-hidden">
              <div className="relative max-w-7xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:py-20">
                <svg
                  className="absolute top-full left-0 transform translate-x-80 -translate-y-24 lg:hidden"
                  width={784}
                  height={404}
                  fill="none"
                  viewBox="0 0 784 404"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="text-gray-200"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={784}
                    height={404}
                    fill="url(#e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32)"
                  />
                </svg>

                <svg
                  className="hidden lg:block absolute right-full top-1/2 transform translate-x-1/2 -translate-y-1/2"
                  width={404}
                  height={784}
                  fill="none"
                  viewBox="0 0 404 784"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="56409614-3d62-4985-9a10-7ca758a8f4f0"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="text-gray-200"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={784}
                    fill="url(#56409614-3d62-4985-9a10-7ca758a8f4f0)"
                  />
                </svg>

                <div className="relative lg:flex lg:items-center">
                  <div className="hidden lg:block lg:flex-shrink-0">
                    <img
                      className="h-64 w-64 rounded-full xl:h-80 xl:w-80"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>

                  <div className="relative lg:ml-10">
                    <svg
                      className="absolute top-0 left-0 transform -translate-x-8 -translate-y-24 h-36 w-36 text-blue-200 opacity-50"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 144 144"
                      aria-hidden="true"
                    >
                      <path
                        strokeWidth={2}
                        d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"
                      />
                    </svg>
                    <blockquote className="relative">
                      <div className="text-2xl leading-9 font-medium text-gray-900">
                        <p>
                          Sử dụng Webwork giúp doanh nghiệp chúng tôi có thể dễ
                          dàng theo dõi hiệu suất doanh nghiệp của mình, từ đó
                          chúng tôi có thể phân bổ nguồn lực một cách tối ưu
                          hơn.
                        </p>
                      </div>
                      <footer className="mt-8">
                        <div className="flex">
                          <div className="flex-shrink-0 lg:hidden">
                            <img
                              className="h-12 w-12 rounded-full"
                              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt=""
                            />
                          </div>
                          <div className="ml-4 lg:ml-0">
                            <div className="text-base font-medium text-gray-900">
                              Nguyễn Thành Tâm
                            </div>
                            <div className="text-base font-medium text-blue-600">
                              Advisor, Cohota
                            </div>
                          </div>
                        </div>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA section */}
            <div className="bg-white">
              <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  <span className="block">Muốn sử dụng thử?</span>
                  <span className="block text-blue-600">
                    Bắt đầu ngay với 1 tháng miễn phí.
                  </span>
                </h2>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                  <div className="inline-flex rounded-md shadow">
                    <a
                      href="#"
                      className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                    >
                      Bắt đầu
                    </a>
                  </div>
                  <div className="ml-3 inline-flex rounded-md shadow">
                    <a
                      href="#"
                      className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
                    >
                      Tìm hiểu thêm
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </main>

          {/* Footer section */}
          <footer className="bg-white" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
              Footer
            </h2>
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
              <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                <div className="space-y-8 xl:col-span-1">
                  <img className="h-10" src={logo} alt="Webwork" />
                  <p className="text-gray-500 text-base">
                    Hỗ trợ quá trình chuyển đổi số của doanh nghiệp vừa và nhỏ
                    Việt Nam.
                  </p>
                  <div className="flex space-x-6">
                    {footer.social.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">{item.name}</span>
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </div>
                <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                  <div className="md:grid md:grid-cols-2 md:gap-8">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                        Giải pháp
                      </h3>
                      <ul className="mt-4 space-y-4">
                        {footer.solutions.map((item) => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              className="text-base text-gray-500 hover:text-gray-900"
                            >
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-12 md:mt-0">
                      <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                        Liên kết
                      </h3>
                      <ul className="mt-4 space-y-4">
                        {footer.support.map((item) => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              className="text-base text-gray-500 hover:text-gray-900"
                            >
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="md:grid md:grid-cols-2 md:gap-8">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                        Công ty
                      </h3>
                      <ul className="mt-4 space-y-4">
                        {footer.company.map((item) => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              className="text-base text-gray-500 hover:text-gray-900"
                            >
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-12 md:mt-0">
                      <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                        Liên hệ
                      </h3>
                      <ul className="mt-4 space-y-4">
                        {footer.legal.map((item) => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              className="text-base text-gray-500 hover:text-gray-900"
                            >
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 border-t border-gray-200 pt-8">
                <p className="text-base text-gray-400 xl:text-center">
                  &copy; 2021 Webwork, Inc. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
