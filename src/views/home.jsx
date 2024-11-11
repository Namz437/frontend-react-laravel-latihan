export default function Home() {
    return (
        <div
            style={{
                backgroundImage: 'url("https://i.pinimg.com/564x/1c/35/5a/1c355a72ace613f0134ac9d551397272.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <div className="p-5 mb-4 bg-light bg-opacity-75 rounded-3 shadow">
                <div className="container-fluid py-5 text-center">
                    <h1 className="display-5 fw-bold">REACT (VITE) + LARAVEL 11</h1>
                    <p className="col-md-8 fs-4 mx-auto">Hoirul Anam (2312010003)</p>
                </div>
            </div>
        </div>
    );
}
