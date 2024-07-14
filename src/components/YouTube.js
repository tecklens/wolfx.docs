export default function YouTube({id}) {
    return (
        <div className={'nx-w-full'}>
            <iframe
                className="nx-w-full"
                style={{
                    aspectRatio: 16 / 9,
                }}
                src={"https://www.youtube.com/embed/" + id}
                title="YouTube Video Player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
        </div>
    );
};