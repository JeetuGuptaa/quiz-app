export default function NotFound() {
    const serverError = (
        <div id="server-err-container">
            <h1 id="err-text">Page doesn't Exists</h1>
        </div>
    );
    return <>{serverError}</>;
}
