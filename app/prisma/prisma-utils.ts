export const addFreeTextSearchWhere = (fieldName: string, search?: string) => {
  const whereOr = [];
  // right now I don't know how to add case-insensitive search
  // if (search) {
  //   whereOr.push({ [fieldName]: { contains: search } });
  // }
  if (Number(search)) {
    whereOr.push({ id: Number(search) });
  }

  return {
    OR: whereOr.length > 1 ? whereOr : undefined,
    ...(whereOr.length === 1 ? whereOr[0] : []),
  };
};

export const addFreeTextSearchJSFilter = <T>(
  data: T[],
  fieldName: string,
  search?: string
) => {
  if (search) {
    const lsearch = search.toLowerCase();
    return data.filter((row: any) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
      return row[fieldName]?.toLowerCase().includes(lsearch);
    });
  } else {
    return data;
  }
};
