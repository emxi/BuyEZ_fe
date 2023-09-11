import Header from './components/Header';

export default function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <main>{children}</main>
        </div>
    );
}
