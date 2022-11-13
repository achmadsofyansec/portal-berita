const isiNews = (news) => {
    return news.map((data, i) => {
        return <div key={i} className="card w-96 bg-base-100 shadow-xl">
        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            {data.title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{data.desc}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{data.category}</div> 
            <div className="badge badge-outline">{data.author}</div>
          </div>
        </div>
      </div>
    })
}

const noNews = () => {
    return (
        <div>
            Saat Ini Tidak Ada Berita Yang Tersedia
        </div>
    )
}

const NewsList = ({news}) => {
    return !news ? noNews() : isiNews(news)
}

export default NewsList