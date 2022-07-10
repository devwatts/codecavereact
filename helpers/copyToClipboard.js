const copyToClipboard = async(data) => {
    navigator.clipboard.writeText(data.data.code.raw_code);
    alert('Copied to clipboard!!')
}

module.exports = {
    copyToClipboard
}