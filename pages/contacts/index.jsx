import React from "react";
import Contacts from "../../components/Contacts/Contacts";
import PagePatternLayout from "../../layouts/PagePatternLayout";

const ContactsPage = () => {
    return (
        <PagePatternLayout
            pageTitle={"Контакты"}
            pageText={
                <>
                    <span>Посмотрите авторские работы нашей компании.</span>
                    <br />
                    Монтаж и обслуживании каминов и барбекю и печей
                </>
            }
            isDots={true}
            srcImage={"/images/contacts-bg.png"}
        >
            <Contacts margin={true} />
        </PagePatternLayout>
    );
};

export default ContactsPage;
