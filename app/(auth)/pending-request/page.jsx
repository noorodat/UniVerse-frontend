import CustomSuccessPage from "@/components/custom/success/CustomSuccessPage"

export default function page() {
    return (
        <CustomSuccessPage
            title={'Waiting for approval'}
            description={'You need to wait for the admin to approve your company signup request'}
            path={'/login'}
            goTo={'Login'}
        />
    )
}
