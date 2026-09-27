const message = {
      created: (value) => `Successfully created ${value}.`,
      deleted: (value) => `Deleted ${value} successfully.`,
      somethingWentWrong: () => "Something went wrong.",
      notFound: (value) => `${value} not found`,
      missingField: (value) => `${value} is missing.`,
      updated: (value) => `${value} updated successfully.`,
      fetched: (value) => `${value} fetched successfully.`,
      fetchedWithId: (value,id) => `${value} with id: ${id} fetched succcessfully.`, 
};

module.exports = message;
