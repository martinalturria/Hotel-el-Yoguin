import LoginForm from "../../components/Admin/LoginForm/LoginForm";

const Admin: React.FC = () => {
    return (
        <div
            className="relative flex flex-col justify-center items-center h-screen"
            style={{
                backgroundImage: "url(/assets/Images/hero/Frente.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div>
                <LoginForm />
            </div>
        </div>
    );
};

export default Admin;
