# `dataflowApplication` Submodule <a name="`dataflowApplication` Submodule" id="rhizo-co-terraform-provider-oci.dataflowApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataflowApplication <a name="DataflowApplication" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application oci_dataflow_application}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataflow_application

dataflowApplication.DataflowApplication(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str,
  driver_shape: str,
  executor_shape: str,
  language: str,
  num_executors: typing.Union[int, float],
  spark_version: str,
  application_log_config: DataflowApplicationApplicationLogConfig = None,
  archive_uri: str = None,
  arguments: typing.List[str] = None,
  class_name: str = None,
  configuration: typing.Mapping[str] = None,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  driver_shape_config: DataflowApplicationDriverShapeConfig = None,
  execute: str = None,
  executor_shape_config: DataflowApplicationExecutorShapeConfig = None,
  file_uri: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  idle_timeout_in_minutes: str = None,
  logs_bucket_uri: str = None,
  max_duration_in_minutes: str = None,
  metastore_id: str = None,
  parameters: typing.Union[IResolvable, typing.List[DataflowApplicationParameters]] = None,
  pool_id: str = None,
  private_endpoint_id: str = None,
  timeouts: DataflowApplicationTimeouts = None,
  type: str = None,
  warehouse_bucket_uri: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#compartment_id DataflowApplication#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#display_name DataflowApplication#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.driverShape">driver_shape</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#driver_shape DataflowApplication#driver_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.executorShape">executor_shape</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#executor_shape DataflowApplication#executor_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.language">language</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#language DataflowApplication#language}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.numExecutors">num_executors</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#num_executors DataflowApplication#num_executors}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.sparkVersion">spark_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#spark_version DataflowApplication#spark_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.applicationLogConfig">application_log_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfig">DataflowApplicationApplicationLogConfig</a></code> | application_log_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.archiveUri">archive_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#archive_uri DataflowApplication#archive_uri}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.arguments">arguments</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#arguments DataflowApplication#arguments}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.className">class_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#class_name DataflowApplication#class_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.configuration">configuration</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#configuration DataflowApplication#configuration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#defined_tags DataflowApplication#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#description DataflowApplication#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.driverShapeConfig">driver_shape_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfig">DataflowApplicationDriverShapeConfig</a></code> | driver_shape_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.execute">execute</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#execute DataflowApplication#execute}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.executorShapeConfig">executor_shape_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfig">DataflowApplicationExecutorShapeConfig</a></code> | executor_shape_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.fileUri">file_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#file_uri DataflowApplication#file_uri}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#freeform_tags DataflowApplication#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#id DataflowApplication#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.idleTimeoutInMinutes">idle_timeout_in_minutes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#idle_timeout_in_minutes DataflowApplication#idle_timeout_in_minutes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.logsBucketUri">logs_bucket_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#logs_bucket_uri DataflowApplication#logs_bucket_uri}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.maxDurationInMinutes">max_duration_in_minutes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#max_duration_in_minutes DataflowApplication#max_duration_in_minutes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.metastoreId">metastore_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#metastore_id DataflowApplication#metastore_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.parameters">parameters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParameters">DataflowApplicationParameters</a>]]</code> | parameters block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.poolId">pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#pool_id DataflowApplication#pool_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.privateEndpointId">private_endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#private_endpoint_id DataflowApplication#private_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeouts">DataflowApplicationTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#type DataflowApplication#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.warehouseBucketUri">warehouse_bucket_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#warehouse_bucket_uri DataflowApplication#warehouse_bucket_uri}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#compartment_id DataflowApplication#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#display_name DataflowApplication#display_name}.

---

##### `driver_shape`<sup>Required</sup> <a name="driver_shape" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.driverShape"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#driver_shape DataflowApplication#driver_shape}.

---

##### `executor_shape`<sup>Required</sup> <a name="executor_shape" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.executorShape"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#executor_shape DataflowApplication#executor_shape}.

---

##### `language`<sup>Required</sup> <a name="language" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.language"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#language DataflowApplication#language}.

---

##### `num_executors`<sup>Required</sup> <a name="num_executors" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.numExecutors"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#num_executors DataflowApplication#num_executors}.

---

##### `spark_version`<sup>Required</sup> <a name="spark_version" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.sparkVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#spark_version DataflowApplication#spark_version}.

---

##### `application_log_config`<sup>Optional</sup> <a name="application_log_config" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.applicationLogConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfig">DataflowApplicationApplicationLogConfig</a>

application_log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#application_log_config DataflowApplication#application_log_config}

---

##### `archive_uri`<sup>Optional</sup> <a name="archive_uri" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.archiveUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#archive_uri DataflowApplication#archive_uri}.

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.arguments"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#arguments DataflowApplication#arguments}.

---

##### `class_name`<sup>Optional</sup> <a name="class_name" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.className"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#class_name DataflowApplication#class_name}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.configuration"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#configuration DataflowApplication#configuration}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#defined_tags DataflowApplication#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#description DataflowApplication#description}.

---

##### `driver_shape_config`<sup>Optional</sup> <a name="driver_shape_config" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.driverShapeConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfig">DataflowApplicationDriverShapeConfig</a>

driver_shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#driver_shape_config DataflowApplication#driver_shape_config}

---

##### `execute`<sup>Optional</sup> <a name="execute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.execute"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#execute DataflowApplication#execute}.

---

##### `executor_shape_config`<sup>Optional</sup> <a name="executor_shape_config" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.executorShapeConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfig">DataflowApplicationExecutorShapeConfig</a>

executor_shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#executor_shape_config DataflowApplication#executor_shape_config}

---

##### `file_uri`<sup>Optional</sup> <a name="file_uri" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.fileUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#file_uri DataflowApplication#file_uri}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#freeform_tags DataflowApplication#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#id DataflowApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idle_timeout_in_minutes`<sup>Optional</sup> <a name="idle_timeout_in_minutes" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.idleTimeoutInMinutes"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#idle_timeout_in_minutes DataflowApplication#idle_timeout_in_minutes}.

---

##### `logs_bucket_uri`<sup>Optional</sup> <a name="logs_bucket_uri" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.logsBucketUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#logs_bucket_uri DataflowApplication#logs_bucket_uri}.

---

##### `max_duration_in_minutes`<sup>Optional</sup> <a name="max_duration_in_minutes" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.maxDurationInMinutes"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#max_duration_in_minutes DataflowApplication#max_duration_in_minutes}.

---

##### `metastore_id`<sup>Optional</sup> <a name="metastore_id" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.metastoreId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#metastore_id DataflowApplication#metastore_id}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.parameters"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParameters">DataflowApplicationParameters</a>]]

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#parameters DataflowApplication#parameters}

---

##### `pool_id`<sup>Optional</sup> <a name="pool_id" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.poolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#pool_id DataflowApplication#pool_id}.

---

##### `private_endpoint_id`<sup>Optional</sup> <a name="private_endpoint_id" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.privateEndpointId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#private_endpoint_id DataflowApplication#private_endpoint_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeouts">DataflowApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#timeouts DataflowApplication#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#type DataflowApplication#type}.

---

##### `warehouse_bucket_uri`<sup>Optional</sup> <a name="warehouse_bucket_uri" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.warehouseBucketUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#warehouse_bucket_uri DataflowApplication#warehouse_bucket_uri}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.putApplicationLogConfig">put_application_log_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.putDriverShapeConfig">put_driver_shape_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.putExecutorShapeConfig">put_executor_shape_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.putParameters">put_parameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetApplicationLogConfig">reset_application_log_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetArchiveUri">reset_archive_uri</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetArguments">reset_arguments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetClassName">reset_class_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetConfiguration">reset_configuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetDriverShapeConfig">reset_driver_shape_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetExecute">reset_execute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetExecutorShapeConfig">reset_executor_shape_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetFileUri">reset_file_uri</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetIdleTimeoutInMinutes">reset_idle_timeout_in_minutes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetLogsBucketUri">reset_logs_bucket_uri</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetMaxDurationInMinutes">reset_max_duration_in_minutes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetMetastoreId">reset_metastore_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetPoolId">reset_pool_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetPrivateEndpointId">reset_private_endpoint_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetWarehouseBucketUri">reset_warehouse_bucket_uri</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_application_log_config` <a name="put_application_log_config" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.putApplicationLogConfig"></a>

```python
def put_application_log_config(
  log_group_id: str,
  log_id: str
) -> None
```

###### `log_group_id`<sup>Required</sup> <a name="log_group_id" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.putApplicationLogConfig.parameter.logGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#log_group_id DataflowApplication#log_group_id}.

---

###### `log_id`<sup>Required</sup> <a name="log_id" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.putApplicationLogConfig.parameter.logId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#log_id DataflowApplication#log_id}.

---

##### `put_driver_shape_config` <a name="put_driver_shape_config" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.putDriverShapeConfig"></a>

```python
def put_driver_shape_config(
  memory_in_gbs: typing.Union[int, float] = None,
  ocpus: typing.Union[int, float] = None
) -> None
```

###### `memory_in_gbs`<sup>Optional</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.putDriverShapeConfig.parameter.memoryInGbs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#memory_in_gbs DataflowApplication#memory_in_gbs}.

---

###### `ocpus`<sup>Optional</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.putDriverShapeConfig.parameter.ocpus"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#ocpus DataflowApplication#ocpus}.

---

##### `put_executor_shape_config` <a name="put_executor_shape_config" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.putExecutorShapeConfig"></a>

```python
def put_executor_shape_config(
  memory_in_gbs: typing.Union[int, float] = None,
  ocpus: typing.Union[int, float] = None
) -> None
```

###### `memory_in_gbs`<sup>Optional</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.putExecutorShapeConfig.parameter.memoryInGbs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#memory_in_gbs DataflowApplication#memory_in_gbs}.

---

###### `ocpus`<sup>Optional</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.putExecutorShapeConfig.parameter.ocpus"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#ocpus DataflowApplication#ocpus}.

---

##### `put_parameters` <a name="put_parameters" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.putParameters"></a>

```python
def put_parameters(
  value: typing.Union[IResolvable, typing.List[DataflowApplicationParameters]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.putParameters.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParameters">DataflowApplicationParameters</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#create DataflowApplication#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#delete DataflowApplication#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#update DataflowApplication#update}.

---

##### `reset_application_log_config` <a name="reset_application_log_config" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetApplicationLogConfig"></a>

```python
def reset_application_log_config() -> None
```

##### `reset_archive_uri` <a name="reset_archive_uri" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetArchiveUri"></a>

```python
def reset_archive_uri() -> None
```

##### `reset_arguments` <a name="reset_arguments" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetArguments"></a>

```python
def reset_arguments() -> None
```

##### `reset_class_name` <a name="reset_class_name" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetClassName"></a>

```python
def reset_class_name() -> None
```

##### `reset_configuration` <a name="reset_configuration" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetConfiguration"></a>

```python
def reset_configuration() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_driver_shape_config` <a name="reset_driver_shape_config" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetDriverShapeConfig"></a>

```python
def reset_driver_shape_config() -> None
```

##### `reset_execute` <a name="reset_execute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetExecute"></a>

```python
def reset_execute() -> None
```

##### `reset_executor_shape_config` <a name="reset_executor_shape_config" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetExecutorShapeConfig"></a>

```python
def reset_executor_shape_config() -> None
```

##### `reset_file_uri` <a name="reset_file_uri" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetFileUri"></a>

```python
def reset_file_uri() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_idle_timeout_in_minutes` <a name="reset_idle_timeout_in_minutes" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetIdleTimeoutInMinutes"></a>

```python
def reset_idle_timeout_in_minutes() -> None
```

##### `reset_logs_bucket_uri` <a name="reset_logs_bucket_uri" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetLogsBucketUri"></a>

```python
def reset_logs_bucket_uri() -> None
```

##### `reset_max_duration_in_minutes` <a name="reset_max_duration_in_minutes" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetMaxDurationInMinutes"></a>

```python
def reset_max_duration_in_minutes() -> None
```

##### `reset_metastore_id` <a name="reset_metastore_id" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetMetastoreId"></a>

```python
def reset_metastore_id() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_pool_id` <a name="reset_pool_id" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetPoolId"></a>

```python
def reset_pool_id() -> None
```

##### `reset_private_endpoint_id` <a name="reset_private_endpoint_id" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetPrivateEndpointId"></a>

```python
def reset_private_endpoint_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_type` <a name="reset_type" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_warehouse_bucket_uri` <a name="reset_warehouse_bucket_uri" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetWarehouseBucketUri"></a>

```python
def reset_warehouse_bucket_uri() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataflowApplication resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import dataflow_application

dataflowApplication.DataflowApplication.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import dataflow_application

dataflowApplication.DataflowApplication.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import dataflow_application

dataflowApplication.DataflowApplication.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import dataflow_application

dataflowApplication.DataflowApplication.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataflowApplication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataflowApplication to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataflowApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataflowApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.applicationLogConfig">application_log_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference">DataflowApplicationApplicationLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.driverShapeConfig">driver_shape_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference">DataflowApplicationDriverShapeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.executorShapeConfig">executor_shape_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference">DataflowApplicationExecutorShapeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.ownerPrincipalId">owner_principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.ownerUserName">owner_user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.parameters">parameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersList">DataflowApplicationParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference">DataflowApplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.applicationLogConfigInput">application_log_config_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfig">DataflowApplicationApplicationLogConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.archiveUriInput">archive_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.argumentsInput">arguments_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.classNameInput">class_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.configurationInput">configuration_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.driverShapeConfigInput">driver_shape_config_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfig">DataflowApplicationDriverShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.driverShapeInput">driver_shape_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.executeInput">execute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.executorShapeConfigInput">executor_shape_config_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfig">DataflowApplicationExecutorShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.executorShapeInput">executor_shape_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.fileUriInput">file_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.idleTimeoutInMinutesInput">idle_timeout_in_minutes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.languageInput">language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.logsBucketUriInput">logs_bucket_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.maxDurationInMinutesInput">max_duration_in_minutes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.metastoreIdInput">metastore_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.numExecutorsInput">num_executors_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.parametersInput">parameters_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParameters">DataflowApplicationParameters</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.poolIdInput">pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.privateEndpointIdInput">private_endpoint_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.sparkVersionInput">spark_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeouts">DataflowApplicationTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.warehouseBucketUriInput">warehouse_bucket_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.archiveUri">archive_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.arguments">arguments</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.className">class_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.configuration">configuration</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.driverShape">driver_shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.execute">execute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.executorShape">executor_shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.fileUri">file_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.idleTimeoutInMinutes">idle_timeout_in_minutes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.language">language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.logsBucketUri">logs_bucket_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.maxDurationInMinutes">max_duration_in_minutes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.metastoreId">metastore_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.numExecutors">num_executors</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.poolId">pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.privateEndpointId">private_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.sparkVersion">spark_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.warehouseBucketUri">warehouse_bucket_uri</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_log_config`<sup>Required</sup> <a name="application_log_config" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.applicationLogConfig"></a>

```python
application_log_config: DataflowApplicationApplicationLogConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference">DataflowApplicationApplicationLogConfigOutputReference</a>

---

##### `driver_shape_config`<sup>Required</sup> <a name="driver_shape_config" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.driverShapeConfig"></a>

```python
driver_shape_config: DataflowApplicationDriverShapeConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference">DataflowApplicationDriverShapeConfigOutputReference</a>

---

##### `executor_shape_config`<sup>Required</sup> <a name="executor_shape_config" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.executorShapeConfig"></a>

```python
executor_shape_config: DataflowApplicationExecutorShapeConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference">DataflowApplicationExecutorShapeConfigOutputReference</a>

---

##### `owner_principal_id`<sup>Required</sup> <a name="owner_principal_id" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.ownerPrincipalId"></a>

```python
owner_principal_id: str
```

- *Type:* str

---

##### `owner_user_name`<sup>Required</sup> <a name="owner_user_name" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.ownerUserName"></a>

```python
owner_user_name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.parameters"></a>

```python
parameters: DataflowApplicationParametersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersList">DataflowApplicationParametersList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.timeouts"></a>

```python
timeouts: DataflowApplicationTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference">DataflowApplicationTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `application_log_config_input`<sup>Optional</sup> <a name="application_log_config_input" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.applicationLogConfigInput"></a>

```python
application_log_config_input: DataflowApplicationApplicationLogConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfig">DataflowApplicationApplicationLogConfig</a>

---

##### `archive_uri_input`<sup>Optional</sup> <a name="archive_uri_input" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.archiveUriInput"></a>

```python
archive_uri_input: str
```

- *Type:* str

---

##### `arguments_input`<sup>Optional</sup> <a name="arguments_input" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.argumentsInput"></a>

```python
arguments_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `class_name_input`<sup>Optional</sup> <a name="class_name_input" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.classNameInput"></a>

```python
class_name_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `configuration_input`<sup>Optional</sup> <a name="configuration_input" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.configurationInput"></a>

```python
configuration_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `driver_shape_config_input`<sup>Optional</sup> <a name="driver_shape_config_input" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.driverShapeConfigInput"></a>

```python
driver_shape_config_input: DataflowApplicationDriverShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfig">DataflowApplicationDriverShapeConfig</a>

---

##### `driver_shape_input`<sup>Optional</sup> <a name="driver_shape_input" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.driverShapeInput"></a>

```python
driver_shape_input: str
```

- *Type:* str

---

##### `execute_input`<sup>Optional</sup> <a name="execute_input" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.executeInput"></a>

```python
execute_input: str
```

- *Type:* str

---

##### `executor_shape_config_input`<sup>Optional</sup> <a name="executor_shape_config_input" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.executorShapeConfigInput"></a>

```python
executor_shape_config_input: DataflowApplicationExecutorShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfig">DataflowApplicationExecutorShapeConfig</a>

---

##### `executor_shape_input`<sup>Optional</sup> <a name="executor_shape_input" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.executorShapeInput"></a>

```python
executor_shape_input: str
```

- *Type:* str

---

##### `file_uri_input`<sup>Optional</sup> <a name="file_uri_input" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.fileUriInput"></a>

```python
file_uri_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `idle_timeout_in_minutes_input`<sup>Optional</sup> <a name="idle_timeout_in_minutes_input" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.idleTimeoutInMinutesInput"></a>

```python
idle_timeout_in_minutes_input: str
```

- *Type:* str

---

##### `language_input`<sup>Optional</sup> <a name="language_input" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.languageInput"></a>

```python
language_input: str
```

- *Type:* str

---

##### `logs_bucket_uri_input`<sup>Optional</sup> <a name="logs_bucket_uri_input" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.logsBucketUriInput"></a>

```python
logs_bucket_uri_input: str
```

- *Type:* str

---

##### `max_duration_in_minutes_input`<sup>Optional</sup> <a name="max_duration_in_minutes_input" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.maxDurationInMinutesInput"></a>

```python
max_duration_in_minutes_input: str
```

- *Type:* str

---

##### `metastore_id_input`<sup>Optional</sup> <a name="metastore_id_input" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.metastoreIdInput"></a>

```python
metastore_id_input: str
```

- *Type:* str

---

##### `num_executors_input`<sup>Optional</sup> <a name="num_executors_input" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.numExecutorsInput"></a>

```python
num_executors_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.parametersInput"></a>

```python
parameters_input: typing.Union[IResolvable, typing.List[DataflowApplicationParameters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParameters">DataflowApplicationParameters</a>]]

---

##### `pool_id_input`<sup>Optional</sup> <a name="pool_id_input" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.poolIdInput"></a>

```python
pool_id_input: str
```

- *Type:* str

---

##### `private_endpoint_id_input`<sup>Optional</sup> <a name="private_endpoint_id_input" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.privateEndpointIdInput"></a>

```python
private_endpoint_id_input: str
```

- *Type:* str

---

##### `spark_version_input`<sup>Optional</sup> <a name="spark_version_input" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.sparkVersionInput"></a>

```python
spark_version_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataflowApplicationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeouts">DataflowApplicationTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `warehouse_bucket_uri_input`<sup>Optional</sup> <a name="warehouse_bucket_uri_input" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.warehouseBucketUriInput"></a>

```python
warehouse_bucket_uri_input: str
```

- *Type:* str

---

##### `archive_uri`<sup>Required</sup> <a name="archive_uri" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.archiveUri"></a>

```python
archive_uri: str
```

- *Type:* str

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.arguments"></a>

```python
arguments: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `class_name`<sup>Required</sup> <a name="class_name" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.className"></a>

```python
class_name: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.configuration"></a>

```python
configuration: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `driver_shape`<sup>Required</sup> <a name="driver_shape" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.driverShape"></a>

```python
driver_shape: str
```

- *Type:* str

---

##### `execute`<sup>Required</sup> <a name="execute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.execute"></a>

```python
execute: str
```

- *Type:* str

---

##### `executor_shape`<sup>Required</sup> <a name="executor_shape" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.executorShape"></a>

```python
executor_shape: str
```

- *Type:* str

---

##### `file_uri`<sup>Required</sup> <a name="file_uri" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.fileUri"></a>

```python
file_uri: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idle_timeout_in_minutes`<sup>Required</sup> <a name="idle_timeout_in_minutes" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.idleTimeoutInMinutes"></a>

```python
idle_timeout_in_minutes: str
```

- *Type:* str

---

##### `language`<sup>Required</sup> <a name="language" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.language"></a>

```python
language: str
```

- *Type:* str

---

##### `logs_bucket_uri`<sup>Required</sup> <a name="logs_bucket_uri" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.logsBucketUri"></a>

```python
logs_bucket_uri: str
```

- *Type:* str

---

##### `max_duration_in_minutes`<sup>Required</sup> <a name="max_duration_in_minutes" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.maxDurationInMinutes"></a>

```python
max_duration_in_minutes: str
```

- *Type:* str

---

##### `metastore_id`<sup>Required</sup> <a name="metastore_id" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.metastoreId"></a>

```python
metastore_id: str
```

- *Type:* str

---

##### `num_executors`<sup>Required</sup> <a name="num_executors" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.numExecutors"></a>

```python
num_executors: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pool_id`<sup>Required</sup> <a name="pool_id" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.poolId"></a>

```python
pool_id: str
```

- *Type:* str

---

##### `private_endpoint_id`<sup>Required</sup> <a name="private_endpoint_id" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.privateEndpointId"></a>

```python
private_endpoint_id: str
```

- *Type:* str

---

##### `spark_version`<sup>Required</sup> <a name="spark_version" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.sparkVersion"></a>

```python
spark_version: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `warehouse_bucket_uri`<sup>Required</sup> <a name="warehouse_bucket_uri" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.warehouseBucketUri"></a>

```python
warehouse_bucket_uri: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataflowApplicationApplicationLogConfig <a name="DataflowApplicationApplicationLogConfig" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataflow_application

dataflowApplication.DataflowApplicationApplicationLogConfig(
  log_group_id: str,
  log_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfig.property.logGroupId">log_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#log_group_id DataflowApplication#log_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfig.property.logId">log_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#log_id DataflowApplication#log_id}. |

---

##### `log_group_id`<sup>Required</sup> <a name="log_group_id" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfig.property.logGroupId"></a>

```python
log_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#log_group_id DataflowApplication#log_group_id}.

---

##### `log_id`<sup>Required</sup> <a name="log_id" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfig.property.logId"></a>

```python
log_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#log_id DataflowApplication#log_id}.

---

### DataflowApplicationConfig <a name="DataflowApplicationConfig" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataflow_application

dataflowApplication.DataflowApplicationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str,
  driver_shape: str,
  executor_shape: str,
  language: str,
  num_executors: typing.Union[int, float],
  spark_version: str,
  application_log_config: DataflowApplicationApplicationLogConfig = None,
  archive_uri: str = None,
  arguments: typing.List[str] = None,
  class_name: str = None,
  configuration: typing.Mapping[str] = None,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  driver_shape_config: DataflowApplicationDriverShapeConfig = None,
  execute: str = None,
  executor_shape_config: DataflowApplicationExecutorShapeConfig = None,
  file_uri: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  idle_timeout_in_minutes: str = None,
  logs_bucket_uri: str = None,
  max_duration_in_minutes: str = None,
  metastore_id: str = None,
  parameters: typing.Union[IResolvable, typing.List[DataflowApplicationParameters]] = None,
  pool_id: str = None,
  private_endpoint_id: str = None,
  timeouts: DataflowApplicationTimeouts = None,
  type: str = None,
  warehouse_bucket_uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#compartment_id DataflowApplication#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#display_name DataflowApplication#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.driverShape">driver_shape</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#driver_shape DataflowApplication#driver_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.executorShape">executor_shape</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#executor_shape DataflowApplication#executor_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.language">language</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#language DataflowApplication#language}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.numExecutors">num_executors</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#num_executors DataflowApplication#num_executors}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.sparkVersion">spark_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#spark_version DataflowApplication#spark_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.applicationLogConfig">application_log_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfig">DataflowApplicationApplicationLogConfig</a></code> | application_log_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.archiveUri">archive_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#archive_uri DataflowApplication#archive_uri}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.arguments">arguments</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#arguments DataflowApplication#arguments}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.className">class_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#class_name DataflowApplication#class_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.configuration">configuration</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#configuration DataflowApplication#configuration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#defined_tags DataflowApplication#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#description DataflowApplication#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.driverShapeConfig">driver_shape_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfig">DataflowApplicationDriverShapeConfig</a></code> | driver_shape_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.execute">execute</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#execute DataflowApplication#execute}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.executorShapeConfig">executor_shape_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfig">DataflowApplicationExecutorShapeConfig</a></code> | executor_shape_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.fileUri">file_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#file_uri DataflowApplication#file_uri}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#freeform_tags DataflowApplication#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#id DataflowApplication#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.idleTimeoutInMinutes">idle_timeout_in_minutes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#idle_timeout_in_minutes DataflowApplication#idle_timeout_in_minutes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.logsBucketUri">logs_bucket_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#logs_bucket_uri DataflowApplication#logs_bucket_uri}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.maxDurationInMinutes">max_duration_in_minutes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#max_duration_in_minutes DataflowApplication#max_duration_in_minutes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.metastoreId">metastore_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#metastore_id DataflowApplication#metastore_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.parameters">parameters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParameters">DataflowApplicationParameters</a>]]</code> | parameters block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.poolId">pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#pool_id DataflowApplication#pool_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.privateEndpointId">private_endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#private_endpoint_id DataflowApplication#private_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeouts">DataflowApplicationTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#type DataflowApplication#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.warehouseBucketUri">warehouse_bucket_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#warehouse_bucket_uri DataflowApplication#warehouse_bucket_uri}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#compartment_id DataflowApplication#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#display_name DataflowApplication#display_name}.

---

##### `driver_shape`<sup>Required</sup> <a name="driver_shape" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.driverShape"></a>

```python
driver_shape: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#driver_shape DataflowApplication#driver_shape}.

---

##### `executor_shape`<sup>Required</sup> <a name="executor_shape" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.executorShape"></a>

```python
executor_shape: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#executor_shape DataflowApplication#executor_shape}.

---

##### `language`<sup>Required</sup> <a name="language" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.language"></a>

```python
language: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#language DataflowApplication#language}.

---

##### `num_executors`<sup>Required</sup> <a name="num_executors" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.numExecutors"></a>

```python
num_executors: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#num_executors DataflowApplication#num_executors}.

---

##### `spark_version`<sup>Required</sup> <a name="spark_version" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.sparkVersion"></a>

```python
spark_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#spark_version DataflowApplication#spark_version}.

---

##### `application_log_config`<sup>Optional</sup> <a name="application_log_config" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.applicationLogConfig"></a>

```python
application_log_config: DataflowApplicationApplicationLogConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfig">DataflowApplicationApplicationLogConfig</a>

application_log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#application_log_config DataflowApplication#application_log_config}

---

##### `archive_uri`<sup>Optional</sup> <a name="archive_uri" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.archiveUri"></a>

```python
archive_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#archive_uri DataflowApplication#archive_uri}.

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.arguments"></a>

```python
arguments: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#arguments DataflowApplication#arguments}.

---

##### `class_name`<sup>Optional</sup> <a name="class_name" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.className"></a>

```python
class_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#class_name DataflowApplication#class_name}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.configuration"></a>

```python
configuration: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#configuration DataflowApplication#configuration}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#defined_tags DataflowApplication#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#description DataflowApplication#description}.

---

##### `driver_shape_config`<sup>Optional</sup> <a name="driver_shape_config" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.driverShapeConfig"></a>

```python
driver_shape_config: DataflowApplicationDriverShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfig">DataflowApplicationDriverShapeConfig</a>

driver_shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#driver_shape_config DataflowApplication#driver_shape_config}

---

##### `execute`<sup>Optional</sup> <a name="execute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.execute"></a>

```python
execute: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#execute DataflowApplication#execute}.

---

##### `executor_shape_config`<sup>Optional</sup> <a name="executor_shape_config" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.executorShapeConfig"></a>

```python
executor_shape_config: DataflowApplicationExecutorShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfig">DataflowApplicationExecutorShapeConfig</a>

executor_shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#executor_shape_config DataflowApplication#executor_shape_config}

---

##### `file_uri`<sup>Optional</sup> <a name="file_uri" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.fileUri"></a>

```python
file_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#file_uri DataflowApplication#file_uri}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#freeform_tags DataflowApplication#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#id DataflowApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idle_timeout_in_minutes`<sup>Optional</sup> <a name="idle_timeout_in_minutes" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.idleTimeoutInMinutes"></a>

```python
idle_timeout_in_minutes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#idle_timeout_in_minutes DataflowApplication#idle_timeout_in_minutes}.

---

##### `logs_bucket_uri`<sup>Optional</sup> <a name="logs_bucket_uri" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.logsBucketUri"></a>

```python
logs_bucket_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#logs_bucket_uri DataflowApplication#logs_bucket_uri}.

---

##### `max_duration_in_minutes`<sup>Optional</sup> <a name="max_duration_in_minutes" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.maxDurationInMinutes"></a>

```python
max_duration_in_minutes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#max_duration_in_minutes DataflowApplication#max_duration_in_minutes}.

---

##### `metastore_id`<sup>Optional</sup> <a name="metastore_id" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.metastoreId"></a>

```python
metastore_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#metastore_id DataflowApplication#metastore_id}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.parameters"></a>

```python
parameters: typing.Union[IResolvable, typing.List[DataflowApplicationParameters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParameters">DataflowApplicationParameters</a>]]

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#parameters DataflowApplication#parameters}

---

##### `pool_id`<sup>Optional</sup> <a name="pool_id" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.poolId"></a>

```python
pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#pool_id DataflowApplication#pool_id}.

---

##### `private_endpoint_id`<sup>Optional</sup> <a name="private_endpoint_id" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.privateEndpointId"></a>

```python
private_endpoint_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#private_endpoint_id DataflowApplication#private_endpoint_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.timeouts"></a>

```python
timeouts: DataflowApplicationTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeouts">DataflowApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#timeouts DataflowApplication#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#type DataflowApplication#type}.

---

##### `warehouse_bucket_uri`<sup>Optional</sup> <a name="warehouse_bucket_uri" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.warehouseBucketUri"></a>

```python
warehouse_bucket_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#warehouse_bucket_uri DataflowApplication#warehouse_bucket_uri}.

---

### DataflowApplicationDriverShapeConfig <a name="DataflowApplicationDriverShapeConfig" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataflow_application

dataflowApplication.DataflowApplicationDriverShapeConfig(
  memory_in_gbs: typing.Union[int, float] = None,
  ocpus: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfig.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#memory_in_gbs DataflowApplication#memory_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfig.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#ocpus DataflowApplication#ocpus}. |

---

##### `memory_in_gbs`<sup>Optional</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfig.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#memory_in_gbs DataflowApplication#memory_in_gbs}.

---

##### `ocpus`<sup>Optional</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfig.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#ocpus DataflowApplication#ocpus}.

---

### DataflowApplicationExecutorShapeConfig <a name="DataflowApplicationExecutorShapeConfig" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataflow_application

dataflowApplication.DataflowApplicationExecutorShapeConfig(
  memory_in_gbs: typing.Union[int, float] = None,
  ocpus: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfig.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#memory_in_gbs DataflowApplication#memory_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfig.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#ocpus DataflowApplication#ocpus}. |

---

##### `memory_in_gbs`<sup>Optional</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfig.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#memory_in_gbs DataflowApplication#memory_in_gbs}.

---

##### `ocpus`<sup>Optional</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfig.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#ocpus DataflowApplication#ocpus}.

---

### DataflowApplicationParameters <a name="DataflowApplicationParameters" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParameters.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataflow_application

dataflowApplication.DataflowApplicationParameters(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParameters.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#name DataflowApplication#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParameters.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#value DataflowApplication#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParameters.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#name DataflowApplication#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParameters.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#value DataflowApplication#value}.

---

### DataflowApplicationTimeouts <a name="DataflowApplicationTimeouts" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataflow_application

dataflowApplication.DataflowApplicationTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#create DataflowApplication#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#delete DataflowApplication#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#update DataflowApplication#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#create DataflowApplication#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#delete DataflowApplication#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#update DataflowApplication#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataflowApplicationApplicationLogConfigOutputReference <a name="DataflowApplicationApplicationLogConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataflow_application

dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.property.logGroupIdInput">log_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.property.logIdInput">log_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.property.logGroupId">log_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.property.logId">log_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfig">DataflowApplicationApplicationLogConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_group_id_input`<sup>Optional</sup> <a name="log_group_id_input" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.property.logGroupIdInput"></a>

```python
log_group_id_input: str
```

- *Type:* str

---

##### `log_id_input`<sup>Optional</sup> <a name="log_id_input" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.property.logIdInput"></a>

```python
log_id_input: str
```

- *Type:* str

---

##### `log_group_id`<sup>Required</sup> <a name="log_group_id" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.property.logGroupId"></a>

```python
log_group_id: str
```

- *Type:* str

---

##### `log_id`<sup>Required</sup> <a name="log_id" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.property.logId"></a>

```python
log_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataflowApplicationApplicationLogConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfig">DataflowApplicationApplicationLogConfig</a>

---


### DataflowApplicationDriverShapeConfigOutputReference <a name="DataflowApplicationDriverShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataflow_application

dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.resetMemoryInGbs">reset_memory_in_gbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.resetOcpus">reset_ocpus</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_memory_in_gbs` <a name="reset_memory_in_gbs" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.resetMemoryInGbs"></a>

```python
def reset_memory_in_gbs() -> None
```

##### `reset_ocpus` <a name="reset_ocpus" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.resetOcpus"></a>

```python
def reset_ocpus() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.property.memoryInGbsInput">memory_in_gbs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.property.ocpusInput">ocpus_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfig">DataflowApplicationDriverShapeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `memory_in_gbs_input`<sup>Optional</sup> <a name="memory_in_gbs_input" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.property.memoryInGbsInput"></a>

```python
memory_in_gbs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus_input`<sup>Optional</sup> <a name="ocpus_input" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.property.ocpusInput"></a>

```python
ocpus_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_in_gbs`<sup>Required</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataflowApplicationDriverShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfig">DataflowApplicationDriverShapeConfig</a>

---


### DataflowApplicationExecutorShapeConfigOutputReference <a name="DataflowApplicationExecutorShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataflow_application

dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.resetMemoryInGbs">reset_memory_in_gbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.resetOcpus">reset_ocpus</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_memory_in_gbs` <a name="reset_memory_in_gbs" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.resetMemoryInGbs"></a>

```python
def reset_memory_in_gbs() -> None
```

##### `reset_ocpus` <a name="reset_ocpus" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.resetOcpus"></a>

```python
def reset_ocpus() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.property.memoryInGbsInput">memory_in_gbs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.property.ocpusInput">ocpus_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfig">DataflowApplicationExecutorShapeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `memory_in_gbs_input`<sup>Optional</sup> <a name="memory_in_gbs_input" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.property.memoryInGbsInput"></a>

```python
memory_in_gbs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus_input`<sup>Optional</sup> <a name="ocpus_input" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.property.ocpusInput"></a>

```python
ocpus_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_in_gbs`<sup>Required</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataflowApplicationExecutorShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfig">DataflowApplicationExecutorShapeConfig</a>

---


### DataflowApplicationParametersList <a name="DataflowApplicationParametersList" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataflow_application

dataflowApplication.DataflowApplicationParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataflowApplicationParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParameters">DataflowApplicationParameters</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataflowApplicationParameters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParameters">DataflowApplicationParameters</a>]]

---


### DataflowApplicationParametersOutputReference <a name="DataflowApplicationParametersOutputReference" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataflow_application

dataflowApplication.DataflowApplicationParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParameters">DataflowApplicationParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataflowApplicationParameters]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParameters">DataflowApplicationParameters</a>]

---


### DataflowApplicationTimeoutsOutputReference <a name="DataflowApplicationTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataflow_application

dataflowApplication.DataflowApplicationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeouts">DataflowApplicationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataflowApplicationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeouts">DataflowApplicationTimeouts</a>]

---



