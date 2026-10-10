export default function SectionTitle({ judul, subjudul, tengah = false }) {
  return (
    <div className={tengah ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <h2 className="font-judul text-3xl font-extrabold text-green-950 sm:text-4xl">
        {judul}
      </h2>
      <div className={`garis-emas mt-3 ${tengah ? "mx-auto" : ""}`} />
      {subjudul && (
        <p className="mt-4 text-base leading-relaxed text-slate-600">{subjudul}</p>
      )}
    </div>
  );
}