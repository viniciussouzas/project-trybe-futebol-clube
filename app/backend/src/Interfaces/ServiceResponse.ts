export type ServiceSuccessful<T> = {
  status: 'SUCCESSFUL',
  data: T,
};

type ServiceFailureType = 'INVALID_DATA' | 'NOT_FOUND' | 'CONFLICT' | 'UNAUTHORIZED';

export type ServiceFailure = {
  status: ServiceFailureType,
  data: { message: string };
};

export type ServiceResponse<T> = ServiceSuccessful<T> | ServiceFailure;
