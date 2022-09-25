module.exports = 
{
  formatDate: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  formatAmount: (amount) => {
    // format large numbers with commas
    return parseInt(amount).toLocaleString();
  },
};
