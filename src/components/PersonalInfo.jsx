import Image from "next/image"

export default function PersonalInfo() {
  const contactInfo = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
        >
          <path d="M18.48 22.926l-1.193.658c-6.979 3.621-19.082-17.494-12.279-21.484l1.145-.637 3.714 6.467-1.139.632c-2.067 1.245 2.76 9.707 4.879 8.545l1.162-.642 3.711 6.461zm-9.808-22.926l-1.68.975 3.714 6.466 1.681-.975-3.715-6.466zm8.613 14.997l-1.68.975 3.714 6.467 1.681-.975-3.715-6.467z" />
        </svg>
      ),
      text: "7505981810",
      link: "tel:7505981810",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 24 24"
        >
          <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
        </svg>
      ),
      text: "himanshu.gautam.code@gmail.com",
      link: "mailto:himanshu.gautam.code@gmail.com",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
        >
          <path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      text: "LinkedIn",
      link: "https://www.linkedin.com/in/01himanshugautam/",
    },
    {
      icon: (
        <Image
          src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
          alt="GitHub"
          height={22}
          width={22}
        />
      ),
      text: "GitHub",
      link: "https://www.github.com/01himanshugautam/",
    },
  ]

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="d-flex justify-content-between align-items-center mt-0">
          <div>
            <h1 className="name mb-0">Himanshu Gautam</h1>
            <p className="h5 text-muted">Software Development Engineer</p>
          </div>
        </div>

        <div className="mt-2 d-flex flex-wrap">
          {contactInfo.map((info, index) => (
            <span
              key={index}
              className="d-flex align-items-center mr-3 border-right pr-2"
            >
              {info.icon}
              <a
                className="text-dark ml-1"
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {info.text}
              </a>
            </span>
          ))}
        </div>

        <div className="mt-3">
          <p>
            Passionate about coding since I was young, I quickly pick up new
            tech skills. I love startups and enjoy building things from scratch.
            I thrive in fast-paced environments where creativity and innovation
            are valued.
          </p>
        </div>
      </div>
    </div>
  )
}
