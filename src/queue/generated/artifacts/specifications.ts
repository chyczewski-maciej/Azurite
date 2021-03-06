/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */
// tslint:disable:object-literal-sort-keys

import * as msRest from "@azure/ms-rest-js";

import * as Mappers from "./mappers";
import { Operation } from "./operation";
import * as Parameters from "./parameters";

const serializer = new msRest.Serializer(Mappers, true);
// specifications for new method group start
const serviceSetPropertiesOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeout,
    Parameters.restype,
    Parameters.comp0
  ],
  headerParameters: [
    Parameters.version,
    Parameters.requestId
  ],
  requestBody: {
    parameterPath: "storageServiceProperties",
    mapper: {
      ...Mappers.StorageServiceProperties,
      required: true
    }
  },
  contentType: "application/xml; charset=utf-8",
  responses: {
    202: {
      headersMapper: Mappers.ServiceSetPropertiesHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};

const serviceGetPropertiesOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeout,
    Parameters.restype,
    Parameters.comp0
  ],
  headerParameters: [
    Parameters.version,
    Parameters.requestId
  ],
  responses: {
    200: {
      bodyMapper: Mappers.StorageServiceProperties,
      headersMapper: Mappers.ServiceGetPropertiesHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};

const serviceGetStatisticsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeout,
    Parameters.restype,
    Parameters.comp1
  ],
  headerParameters: [
    Parameters.version,
    Parameters.requestId
  ],
  responses: {
    200: {
      bodyMapper: Mappers.StorageServiceStats,
      headersMapper: Mappers.ServiceGetStatisticsHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};

const serviceListQueuesSegmentOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.prefix,
    Parameters.marker,
    Parameters.maxresults,
    Parameters.include,
    Parameters.timeout,
    Parameters.comp2
  ],
  headerParameters: [
    Parameters.version,
    Parameters.requestId
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ListQueuesSegmentResponse,
      headersMapper: Mappers.ServiceListQueuesSegmentHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};

// specifications for new method group start
const queueCreateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "{queueName}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeout
  ],
  headerParameters: [
    Parameters.metadata,
    Parameters.version,
    Parameters.requestId
  ],
  responses: {
    201: {
      headersMapper: Mappers.QueueCreateHeaders
    },
    204: {
      headersMapper: Mappers.QueueCreateHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};

const queueDeleteOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "{queueName}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeout
  ],
  headerParameters: [
    Parameters.version,
    Parameters.requestId
  ],
  responses: {
    204: {
      headersMapper: Mappers.QueueDeleteHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};

const queueGetPropertiesOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "{queueName}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeout,
    Parameters.comp3
  ],
  headerParameters: [
    Parameters.version,
    Parameters.requestId
  ],
  responses: {
    200: {
      headersMapper: Mappers.QueueGetPropertiesHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};

const queueGetPropertiesWithHeadOperationSpec: msRest.OperationSpec = {
  httpMethod: "HEAD",
  path: "{queueName}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeout,
    Parameters.comp3
  ],
  headerParameters: [
    Parameters.version,
    Parameters.requestId
  ],
  responses: {
    200: {
      headersMapper: Mappers.QueueGetPropertiesWithHeadHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};

const queueSetMetadataOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "{queueName}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeout,
    Parameters.comp3
  ],
  headerParameters: [
    Parameters.metadata,
    Parameters.version,
    Parameters.requestId
  ],
  responses: {
    204: {
      headersMapper: Mappers.QueueSetMetadataHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};

const queueGetAccessPolicyOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "{queueName}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeout,
    Parameters.comp4
  ],
  headerParameters: [
    Parameters.version,
    Parameters.requestId
  ],
  responses: {
    200: {
      bodyMapper: {
        xmlElementName: "SignedIdentifier",
        serializedName: "SignedIdentifiers",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SignedIdentifier"
            }
          }
        }
      },
      headersMapper: Mappers.QueueGetAccessPolicyHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};

const queueGetAccessPolicyWithHeadOperationSpec: msRest.OperationSpec = {
  httpMethod: "HEAD",
  path: "{queueName}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeout,
    Parameters.comp4
  ],
  headerParameters: [
    Parameters.version,
    Parameters.requestId
  ],
  responses: {
    200: {
      bodyMapper: {
        xmlElementName: "SignedIdentifier",
        serializedName: "SignedIdentifiers",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SignedIdentifier"
            }
          }
        }
      },
      headersMapper: Mappers.QueueGetAccessPolicyWithHeadHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};

const queueSetAccessPolicyOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "{queueName}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeout,
    Parameters.comp4
  ],
  headerParameters: [
    Parameters.version,
    Parameters.requestId
  ],
  requestBody: {
    parameterPath: [
      "options",
      "queueAcl"
    ],
    mapper: {
      xmlName: "SignedIdentifiers",
      xmlElementName: "SignedIdentifier",
      serializedName: "queueAcl",
      type: {
        name: "Sequence",
        element: {
          type: {
            name: "Composite",
            className: "SignedIdentifier"
          }
        }
      }
    }
  },
  contentType: "application/xml; charset=utf-8",
  responses: {
    204: {
      headersMapper: Mappers.QueueSetAccessPolicyHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};

// specifications for new method group start
const messagesDequeueOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "{queueName}/messages",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.numberOfMessages,
    Parameters.visibilitytimeout0,
    Parameters.timeout
  ],
  headerParameters: [
    Parameters.version,
    Parameters.requestId
  ],
  responses: {
    200: {
      bodyMapper: {
        xmlElementName: "QueueMessage",
        serializedName: "QueueMessagesList",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DequeuedMessageItem"
            }
          }
        }
      },
      headersMapper: Mappers.MessagesDequeueHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};

const messagesClearOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "{queueName}/messages",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeout
  ],
  headerParameters: [
    Parameters.version,
    Parameters.requestId
  ],
  responses: {
    204: {
      headersMapper: Mappers.MessagesClearHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};

const messagesEnqueueOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "{queueName}/messages",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.visibilitytimeout0,
    Parameters.messageTimeToLive,
    Parameters.timeout
  ],
  headerParameters: [
    Parameters.version,
    Parameters.requestId
  ],
  requestBody: {
    parameterPath: "queueMessage",
    mapper: {
      ...Mappers.QueueMessage,
      required: true
    }
  },
  contentType: "application/xml; charset=utf-8",
  responses: {
    201: {
      bodyMapper: {
        xmlElementName: "QueueMessage",
        serializedName: "QueueMessagesList",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "EnqueuedMessage"
            }
          }
        }
      },
      headersMapper: Mappers.MessagesEnqueueHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};

const messagesPeekOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "{queueName}/messages",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.numberOfMessages,
    Parameters.timeout,
    Parameters.peekonly
  ],
  headerParameters: [
    Parameters.version,
    Parameters.requestId
  ],
  responses: {
    200: {
      bodyMapper: {
        xmlElementName: "QueueMessage",
        serializedName: "QueueMessagesList",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PeekedMessageItem"
            }
          }
        }
      },
      headersMapper: Mappers.MessagesPeekHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};

// specifications for new method group start
const messageIdUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "{queueName}/messages/{messageid}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.popReceipt,
    Parameters.visibilitytimeout1,
    Parameters.timeout
  ],
  headerParameters: [
    Parameters.version,
    Parameters.requestId
  ],
  requestBody: {
    parameterPath: "queueMessage",
    mapper: {
      ...Mappers.QueueMessage,
      required: true
    }
  },
  contentType: "application/xml; charset=utf-8",
  responses: {
    204: {
      headersMapper: Mappers.MessageIdUpdateHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};

const messageIdDeleteOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "{queueName}/messages/{messageid}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.popReceipt,
    Parameters.timeout
  ],
  headerParameters: [
    Parameters.version,
    Parameters.requestId
  ],
  responses: {
    204: {
      headersMapper: Mappers.MessageIdDeleteHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};

const Specifications: { [key: number]: msRest.OperationSpec } = {};
Specifications[Operation.Service_SetProperties] = serviceSetPropertiesOperationSpec;
Specifications[Operation.Service_GetProperties] = serviceGetPropertiesOperationSpec;
Specifications[Operation.Service_GetStatistics] = serviceGetStatisticsOperationSpec;
Specifications[Operation.Service_ListQueuesSegment] = serviceListQueuesSegmentOperationSpec;
Specifications[Operation.Queue_Create] = queueCreateOperationSpec;
Specifications[Operation.Queue_Delete] = queueDeleteOperationSpec;
Specifications[Operation.Queue_GetProperties] = queueGetPropertiesOperationSpec;
Specifications[Operation.Queue_GetPropertiesWithHead] = queueGetPropertiesWithHeadOperationSpec;
Specifications[Operation.Queue_SetMetadata] = queueSetMetadataOperationSpec;
Specifications[Operation.Queue_GetAccessPolicy] = queueGetAccessPolicyOperationSpec;
Specifications[Operation.Queue_GetAccessPolicyWithHead] = queueGetAccessPolicyWithHeadOperationSpec;
Specifications[Operation.Queue_SetAccessPolicy] = queueSetAccessPolicyOperationSpec;
Specifications[Operation.Messages_Dequeue] = messagesDequeueOperationSpec;
Specifications[Operation.Messages_Clear] = messagesClearOperationSpec;
Specifications[Operation.Messages_Enqueue] = messagesEnqueueOperationSpec;
Specifications[Operation.Messages_Peek] = messagesPeekOperationSpec;
Specifications[Operation.MessageId_Update] = messageIdUpdateOperationSpec;
Specifications[Operation.MessageId_Delete] = messageIdDeleteOperationSpec;
export default Specifications;
