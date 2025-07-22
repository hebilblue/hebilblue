import React from 'react'
import styles from './page.module.css'

export default function Page() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Kişisel Verilerin Korunması Kanunu (KVKK) Aydınlatma Metni</h1>
                <p className={styles.paragraph}>
                    İşbu Aydınlatma Metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu (&ldquo;KVKK&rdquo;) kapsamında, Hebil Blue projesine ait web sitesini (&ldquo;Site&rdquo;) ziyaret eden kullanıcıların kişisel verilerinin toplanması, işlenmesi, saklanması ve korunmasına ilişkin olarak bilgilendirme amacıyla hazırlanmıştır.
                </p>
            </div>

            <section>
                <h2 className={styles.subtitle}>1. Veri Sorumlusu</h2>
                <p className={styles.paragraph}>
                    Hebil Blue Projesi (&ldquo;Şirket&rdquo;) olarak, KVKK kapsamında &ldquo;veri sorumlusu&rdquo; sıfatıyla, kişisel verilerinizi ilgili mevzuata uygun olarak işlemekteyiz.
                </p>
            </section>

            <section>
                <h2 className={styles.subtitle}>2. İşlenen Kişisel Veriler</h2>
                <p className={styles.paragraph}>Web sitesi üzerinden aşağıdaki kişisel verileriniz toplanabilir:</p>
                <ul className={styles.list}>
                    <li className={styles.listItem}>Ad, soyad</li>
                    <li className={styles.listItem}>Telefon numarası</li>
                    <li className={styles.listItem}>E-posta adresi</li>
                    <li className={styles.listItem}>Mesaj/ileti içeriği</li>
                    <li className={styles.listItem}>Site kullanım verileri (IP adresi, çerezler aracılığıyla alınan bilgiler)</li>
                </ul>
            </section>

            <section>
                <h2 className={styles.subtitle}>3. Kişisel Verilerin İşlenme Amaçları</h2>
                <p className={styles.paragraph}>Toplanan kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:</p>
                <ul className={styles.list}>
                    <li className={styles.listItem}>İletişim taleplerinin yanıtlanması</li>
                    <li className={styles.listItem}>Proje hakkında bilgi verilmesi ve tanıtım faaliyetleri</li>
                    <li className={styles.listItem}>Hizmet kalitesinin artırılması ve kullanıcı deneyiminin geliştirilmesi</li>
                    <li className={styles.listItem}>Yasal yükümlülüklerin yerine getirilmesi</li>
                </ul>
            </section>

            <section>
                <h2 className={styles.subtitle}>4. Veri Aktarımı</h2>
                <p className={styles.paragraph}>
                    Kişisel verileriniz, yalnızca yukarıdaki amaçlarla sınırlı olmak kaydıyla;
                </p>
                <ul className={styles.list}>
                    <li className={styles.listItem}>Hizmet aldığımız iş ortaklarımızla</li>
                    <li className={styles.listItem}>Yetkili kamu kurum ve kuruluşlarıyla</li>
                    <li className={styles.listItem}>Gerekli durumlarda yurt içindeki sunucu ve hizmet sağlayıcılarla</li>
                </ul>
                <p className={styles.paragraph}>KVKK&apos;ya uygun şekilde paylaşılabilir.</p>
            </section>

            <section>
                <h2 className={styles.subtitle}>5. Veri Toplama Yöntemi ve Hukuki Sebep</h2>
                <p className={styles.paragraph}>
                    Kişisel verileriniz, web sitesi üzerindeki formlar aracılığıyla elektronik ortamda toplanmakta olup;
                </p>
                <ul className={styles.list}>
                    <li className={styles.listItem}>Açık rızanıza dayalı olarak,</li>
                    <li className={styles.listItem}>Bir sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması,</li>
                    <li className={styles.listItem}>Şirketin meşru menfaatleri kapsamında</li>
                </ul>
                <p className={styles.paragraph}>işlenmektedir.</p>
            </section>

            <section>
                <h2 className={styles.subtitle}>6. KVKK Kapsamındaki Haklarınız</h2>
                <p className={styles.paragraph}>KVKK&apos;nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:</p>
                <ul className={styles.list}>
                    <li className={styles.listItem}>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                    <li className={styles.listItem}>İşlenmişse buna ilişkin bilgi talep etme</li>
                    <li className={styles.listItem}>Verilerin işlenme amacını ve amaca uygun kullanılıp kullanılmadığını öğrenme</li>
                    <li className={styles.listItem}>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
                    <li className={styles.listItem}>Eksik veya yanlış işlenmiş verilerin düzeltilmesini isteme</li>
                    <li className={styles.listItem}>KVKK&apos;ya uygun olarak silinmesini veya yok edilmesini talep etme</li>
                    <li className={styles.listItem}>İşlemenin yalnızca otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
                    <li className={styles.listItem}>Uğradığınız zararın giderilmesini talep etme</li>
                </ul>

                <div className={styles.contactInfo}>
                    <p className={styles.paragraph}>
                        Haklarınızı kullanmak için bizimle iletişime geçebilirsiniz:<br />
                        <strong>E-posta:</strong> <a href="mailto:hebilblue@gmail.com">hebilblue@gmail.com</a>
                    </p>
                </div>
            </section>
        </div>
    )
}
