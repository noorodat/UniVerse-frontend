import CustomSuccessPage from "@/components/custom/success/CustomSuccessPage"

export default function VerificationSuccessful() {
    return (
        <CustomSuccessPage
            title={'Verification successful'}
            description={'You need now to login'}
            path={'/login'}
            goTo={'Login'}
        />
    )
}
