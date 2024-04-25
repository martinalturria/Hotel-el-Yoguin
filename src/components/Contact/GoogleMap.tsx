const GoogleMap: React.FC = () => {
    const mapSrc =
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13421.024515820438!2d-64.34409128734131!3d-32.75893770228539!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d275805d2d0299%3A0x68c83775a9ac76dd!2sHotel%20El%20Yoguin!5e0!3m2!1ses-419!2sar!4v1713915461141!5m2!1ses-419!2sar";

    return (
        <div className="w-full my-8">
            <iframe
                title="Google Maps"
                src={mapSrc}
                width="600"
                height="450"
                style={{ border: "0" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-64 sm:h-96"
            ></iframe>
        </div>
    );
};

export default GoogleMap;
