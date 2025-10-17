export default function FeatureVideo() {
    return (
        <section className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-primary text-center text-3xl font-semibold mb-8 dark:text-primary">Video nổi bật</h2>
        <div className="aspect-video w-full md:w-3/4 mx-auto">
          <iframe
            className="w-full h-full rounded-lg shadow-md"
            src="https://www.youtube.com/embed/Kja6vQFFh0o"
            title="Health Video"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    )
}