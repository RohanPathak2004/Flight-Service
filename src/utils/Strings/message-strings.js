const message = {
      created: (value) => `Successfully created ${value}.`,
      deleted: (value) => `Deleted ${value} successfully.`,
      somethingWentWrong: () => "Something went wrong.",
      notFound: (value) => `${value} not found`,
      missingField: (value) => `${value} is missing.`,
      updated: (value)=> `${value} updated successfully.`
};

module.exports = message;
