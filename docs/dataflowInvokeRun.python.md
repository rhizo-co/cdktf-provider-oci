# `dataflowInvokeRun` Submodule <a name="`dataflowInvokeRun` Submodule" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataflowInvokeRun <a name="DataflowInvokeRun" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run oci_dataflow_invoke_run}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataflow_invoke_run

dataflowInvokeRun.DataflowInvokeRun(
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
  application_id: str = None,
  application_log_config: DataflowInvokeRunApplicationLogConfig = None,
  archive_uri: str = None,
  arguments: typing.List[str] = None,
  asynchronous: typing.Union[bool, IResolvable] = None,
  configuration: typing.Mapping[str] = None,
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  driver_shape: str = None,
  driver_shape_config: DataflowInvokeRunDriverShapeConfig = None,
  execute: str = None,
  executor_shape: str = None,
  executor_shape_config: DataflowInvokeRunExecutorShapeConfig = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  idle_timeout_in_minutes: str = None,
  logs_bucket_uri: str = None,
  max_duration_in_minutes: str = None,
  metastore_id: str = None,
  num_executors: typing.Union[int, float] = None,
  opc_parent_rpt_url: str = None,
  parameters: typing.Union[IResolvable, typing.List[DataflowInvokeRunParameters]] = None,
  pool_id: str = None,
  spark_version: str = None,
  timeouts: DataflowInvokeRunTimeouts = None,
  type: str = None,
  warehouse_bucket_uri: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#compartment_id DataflowInvokeRun#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.applicationId">application_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#application_id DataflowInvokeRun#application_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.applicationLogConfig">application_log_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfig">DataflowInvokeRunApplicationLogConfig</a></code> | application_log_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.archiveUri">archive_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#archive_uri DataflowInvokeRun#archive_uri}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.arguments">arguments</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#arguments DataflowInvokeRun#arguments}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.asynchronous">asynchronous</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#asynchronous DataflowInvokeRun#asynchronous}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.configuration">configuration</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#configuration DataflowInvokeRun#configuration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#defined_tags DataflowInvokeRun#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#display_name DataflowInvokeRun#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.driverShape">driver_shape</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#driver_shape DataflowInvokeRun#driver_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.driverShapeConfig">driver_shape_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfig">DataflowInvokeRunDriverShapeConfig</a></code> | driver_shape_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.execute">execute</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#execute DataflowInvokeRun#execute}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.executorShape">executor_shape</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#executor_shape DataflowInvokeRun#executor_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.executorShapeConfig">executor_shape_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfig">DataflowInvokeRunExecutorShapeConfig</a></code> | executor_shape_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#freeform_tags DataflowInvokeRun#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#id DataflowInvokeRun#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.idleTimeoutInMinutes">idle_timeout_in_minutes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#idle_timeout_in_minutes DataflowInvokeRun#idle_timeout_in_minutes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.logsBucketUri">logs_bucket_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#logs_bucket_uri DataflowInvokeRun#logs_bucket_uri}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.maxDurationInMinutes">max_duration_in_minutes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#max_duration_in_minutes DataflowInvokeRun#max_duration_in_minutes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.metastoreId">metastore_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#metastore_id DataflowInvokeRun#metastore_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.numExecutors">num_executors</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#num_executors DataflowInvokeRun#num_executors}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.opcParentRptUrl">opc_parent_rpt_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#opc_parent_rpt_url DataflowInvokeRun#opc_parent_rpt_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.parameters">parameters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParameters">DataflowInvokeRunParameters</a>]]</code> | parameters block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.poolId">pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#pool_id DataflowInvokeRun#pool_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.sparkVersion">spark_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#spark_version DataflowInvokeRun#spark_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeouts">DataflowInvokeRunTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#type DataflowInvokeRun#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.warehouseBucketUri">warehouse_bucket_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#warehouse_bucket_uri DataflowInvokeRun#warehouse_bucket_uri}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#compartment_id DataflowInvokeRun#compartment_id}.

---

##### `application_id`<sup>Optional</sup> <a name="application_id" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.applicationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#application_id DataflowInvokeRun#application_id}.

---

##### `application_log_config`<sup>Optional</sup> <a name="application_log_config" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.applicationLogConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfig">DataflowInvokeRunApplicationLogConfig</a>

application_log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#application_log_config DataflowInvokeRun#application_log_config}

---

##### `archive_uri`<sup>Optional</sup> <a name="archive_uri" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.archiveUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#archive_uri DataflowInvokeRun#archive_uri}.

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.arguments"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#arguments DataflowInvokeRun#arguments}.

---

##### `asynchronous`<sup>Optional</sup> <a name="asynchronous" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.asynchronous"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#asynchronous DataflowInvokeRun#asynchronous}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.configuration"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#configuration DataflowInvokeRun#configuration}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#defined_tags DataflowInvokeRun#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#display_name DataflowInvokeRun#display_name}.

---

##### `driver_shape`<sup>Optional</sup> <a name="driver_shape" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.driverShape"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#driver_shape DataflowInvokeRun#driver_shape}.

---

##### `driver_shape_config`<sup>Optional</sup> <a name="driver_shape_config" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.driverShapeConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfig">DataflowInvokeRunDriverShapeConfig</a>

driver_shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#driver_shape_config DataflowInvokeRun#driver_shape_config}

---

##### `execute`<sup>Optional</sup> <a name="execute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.execute"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#execute DataflowInvokeRun#execute}.

---

##### `executor_shape`<sup>Optional</sup> <a name="executor_shape" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.executorShape"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#executor_shape DataflowInvokeRun#executor_shape}.

---

##### `executor_shape_config`<sup>Optional</sup> <a name="executor_shape_config" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.executorShapeConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfig">DataflowInvokeRunExecutorShapeConfig</a>

executor_shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#executor_shape_config DataflowInvokeRun#executor_shape_config}

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#freeform_tags DataflowInvokeRun#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#id DataflowInvokeRun#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idle_timeout_in_minutes`<sup>Optional</sup> <a name="idle_timeout_in_minutes" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.idleTimeoutInMinutes"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#idle_timeout_in_minutes DataflowInvokeRun#idle_timeout_in_minutes}.

---

##### `logs_bucket_uri`<sup>Optional</sup> <a name="logs_bucket_uri" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.logsBucketUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#logs_bucket_uri DataflowInvokeRun#logs_bucket_uri}.

---

##### `max_duration_in_minutes`<sup>Optional</sup> <a name="max_duration_in_minutes" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.maxDurationInMinutes"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#max_duration_in_minutes DataflowInvokeRun#max_duration_in_minutes}.

---

##### `metastore_id`<sup>Optional</sup> <a name="metastore_id" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.metastoreId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#metastore_id DataflowInvokeRun#metastore_id}.

---

##### `num_executors`<sup>Optional</sup> <a name="num_executors" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.numExecutors"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#num_executors DataflowInvokeRun#num_executors}.

---

##### `opc_parent_rpt_url`<sup>Optional</sup> <a name="opc_parent_rpt_url" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.opcParentRptUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#opc_parent_rpt_url DataflowInvokeRun#opc_parent_rpt_url}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.parameters"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParameters">DataflowInvokeRunParameters</a>]]

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#parameters DataflowInvokeRun#parameters}

---

##### `pool_id`<sup>Optional</sup> <a name="pool_id" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.poolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#pool_id DataflowInvokeRun#pool_id}.

---

##### `spark_version`<sup>Optional</sup> <a name="spark_version" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.sparkVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#spark_version DataflowInvokeRun#spark_version}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeouts">DataflowInvokeRunTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#timeouts DataflowInvokeRun#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#type DataflowInvokeRun#type}.

---

##### `warehouse_bucket_uri`<sup>Optional</sup> <a name="warehouse_bucket_uri" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.warehouseBucketUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#warehouse_bucket_uri DataflowInvokeRun#warehouse_bucket_uri}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.putApplicationLogConfig">put_application_log_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.putDriverShapeConfig">put_driver_shape_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.putExecutorShapeConfig">put_executor_shape_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.putParameters">put_parameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetApplicationId">reset_application_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetApplicationLogConfig">reset_application_log_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetArchiveUri">reset_archive_uri</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetArguments">reset_arguments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetAsynchronous">reset_asynchronous</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetConfiguration">reset_configuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetDriverShape">reset_driver_shape</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetDriverShapeConfig">reset_driver_shape_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetExecute">reset_execute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetExecutorShape">reset_executor_shape</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetExecutorShapeConfig">reset_executor_shape_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetIdleTimeoutInMinutes">reset_idle_timeout_in_minutes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetLogsBucketUri">reset_logs_bucket_uri</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetMaxDurationInMinutes">reset_max_duration_in_minutes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetMetastoreId">reset_metastore_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetNumExecutors">reset_num_executors</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetOpcParentRptUrl">reset_opc_parent_rpt_url</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetPoolId">reset_pool_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetSparkVersion">reset_spark_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetWarehouseBucketUri">reset_warehouse_bucket_uri</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_application_log_config` <a name="put_application_log_config" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.putApplicationLogConfig"></a>

```python
def put_application_log_config(
  log_group_id: str,
  log_id: str
) -> None
```

###### `log_group_id`<sup>Required</sup> <a name="log_group_id" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.putApplicationLogConfig.parameter.logGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#log_group_id DataflowInvokeRun#log_group_id}.

---

###### `log_id`<sup>Required</sup> <a name="log_id" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.putApplicationLogConfig.parameter.logId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#log_id DataflowInvokeRun#log_id}.

---

##### `put_driver_shape_config` <a name="put_driver_shape_config" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.putDriverShapeConfig"></a>

```python
def put_driver_shape_config(
  memory_in_gbs: typing.Union[int, float] = None,
  ocpus: typing.Union[int, float] = None
) -> None
```

###### `memory_in_gbs`<sup>Optional</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.putDriverShapeConfig.parameter.memoryInGbs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#memory_in_gbs DataflowInvokeRun#memory_in_gbs}.

---

###### `ocpus`<sup>Optional</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.putDriverShapeConfig.parameter.ocpus"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#ocpus DataflowInvokeRun#ocpus}.

---

##### `put_executor_shape_config` <a name="put_executor_shape_config" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.putExecutorShapeConfig"></a>

```python
def put_executor_shape_config(
  memory_in_gbs: typing.Union[int, float] = None,
  ocpus: typing.Union[int, float] = None
) -> None
```

###### `memory_in_gbs`<sup>Optional</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.putExecutorShapeConfig.parameter.memoryInGbs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#memory_in_gbs DataflowInvokeRun#memory_in_gbs}.

---

###### `ocpus`<sup>Optional</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.putExecutorShapeConfig.parameter.ocpus"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#ocpus DataflowInvokeRun#ocpus}.

---

##### `put_parameters` <a name="put_parameters" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.putParameters"></a>

```python
def put_parameters(
  value: typing.Union[IResolvable, typing.List[DataflowInvokeRunParameters]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.putParameters.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParameters">DataflowInvokeRunParameters</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#create DataflowInvokeRun#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#delete DataflowInvokeRun#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#update DataflowInvokeRun#update}.

---

##### `reset_application_id` <a name="reset_application_id" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetApplicationId"></a>

```python
def reset_application_id() -> None
```

##### `reset_application_log_config` <a name="reset_application_log_config" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetApplicationLogConfig"></a>

```python
def reset_application_log_config() -> None
```

##### `reset_archive_uri` <a name="reset_archive_uri" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetArchiveUri"></a>

```python
def reset_archive_uri() -> None
```

##### `reset_arguments` <a name="reset_arguments" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetArguments"></a>

```python
def reset_arguments() -> None
```

##### `reset_asynchronous` <a name="reset_asynchronous" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetAsynchronous"></a>

```python
def reset_asynchronous() -> None
```

##### `reset_configuration` <a name="reset_configuration" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetConfiguration"></a>

```python
def reset_configuration() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_driver_shape` <a name="reset_driver_shape" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetDriverShape"></a>

```python
def reset_driver_shape() -> None
```

##### `reset_driver_shape_config` <a name="reset_driver_shape_config" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetDriverShapeConfig"></a>

```python
def reset_driver_shape_config() -> None
```

##### `reset_execute` <a name="reset_execute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetExecute"></a>

```python
def reset_execute() -> None
```

##### `reset_executor_shape` <a name="reset_executor_shape" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetExecutorShape"></a>

```python
def reset_executor_shape() -> None
```

##### `reset_executor_shape_config` <a name="reset_executor_shape_config" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetExecutorShapeConfig"></a>

```python
def reset_executor_shape_config() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_idle_timeout_in_minutes` <a name="reset_idle_timeout_in_minutes" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetIdleTimeoutInMinutes"></a>

```python
def reset_idle_timeout_in_minutes() -> None
```

##### `reset_logs_bucket_uri` <a name="reset_logs_bucket_uri" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetLogsBucketUri"></a>

```python
def reset_logs_bucket_uri() -> None
```

##### `reset_max_duration_in_minutes` <a name="reset_max_duration_in_minutes" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetMaxDurationInMinutes"></a>

```python
def reset_max_duration_in_minutes() -> None
```

##### `reset_metastore_id` <a name="reset_metastore_id" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetMetastoreId"></a>

```python
def reset_metastore_id() -> None
```

##### `reset_num_executors` <a name="reset_num_executors" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetNumExecutors"></a>

```python
def reset_num_executors() -> None
```

##### `reset_opc_parent_rpt_url` <a name="reset_opc_parent_rpt_url" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetOpcParentRptUrl"></a>

```python
def reset_opc_parent_rpt_url() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_pool_id` <a name="reset_pool_id" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetPoolId"></a>

```python
def reset_pool_id() -> None
```

##### `reset_spark_version` <a name="reset_spark_version" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetSparkVersion"></a>

```python
def reset_spark_version() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_type` <a name="reset_type" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_warehouse_bucket_uri` <a name="reset_warehouse_bucket_uri" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetWarehouseBucketUri"></a>

```python
def reset_warehouse_bucket_uri() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataflowInvokeRun resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import dataflow_invoke_run

dataflowInvokeRun.DataflowInvokeRun.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import dataflow_invoke_run

dataflowInvokeRun.DataflowInvokeRun.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import dataflow_invoke_run

dataflowInvokeRun.DataflowInvokeRun.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import dataflow_invoke_run

dataflowInvokeRun.DataflowInvokeRun.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataflowInvokeRun resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataflowInvokeRun to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataflowInvokeRun that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataflowInvokeRun to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.applicationLogConfig">application_log_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference">DataflowInvokeRunApplicationLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.className">class_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.dataReadInBytes">data_read_in_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.dataWrittenInBytes">data_written_in_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.driverShapeConfig">driver_shape_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference">DataflowInvokeRunDriverShapeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.executorShapeConfig">executor_shape_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference">DataflowInvokeRunExecutorShapeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.fileUri">file_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.language">language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.opcRequestId">opc_request_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.ownerPrincipalId">owner_principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.ownerUserName">owner_user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.parameters">parameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList">DataflowInvokeRunParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.privateEndpointDnsZones">private_endpoint_dns_zones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.privateEndpointId">private_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.privateEndpointMaxHostCount">private_endpoint_max_host_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.privateEndpointNsgIds">private_endpoint_nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.privateEndpointSubnetId">private_endpoint_subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.runDurationInMilliseconds">run_duration_in_milliseconds</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference">DataflowInvokeRunTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.totalOcpu">total_ocpu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.applicationIdInput">application_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.applicationLogConfigInput">application_log_config_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfig">DataflowInvokeRunApplicationLogConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.archiveUriInput">archive_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.argumentsInput">arguments_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.asynchronousInput">asynchronous_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.configurationInput">configuration_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.driverShapeConfigInput">driver_shape_config_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfig">DataflowInvokeRunDriverShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.driverShapeInput">driver_shape_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.executeInput">execute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.executorShapeConfigInput">executor_shape_config_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfig">DataflowInvokeRunExecutorShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.executorShapeInput">executor_shape_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.idleTimeoutInMinutesInput">idle_timeout_in_minutes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.logsBucketUriInput">logs_bucket_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.maxDurationInMinutesInput">max_duration_in_minutes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.metastoreIdInput">metastore_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.numExecutorsInput">num_executors_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.opcParentRptUrlInput">opc_parent_rpt_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.parametersInput">parameters_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParameters">DataflowInvokeRunParameters</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.poolIdInput">pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.sparkVersionInput">spark_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeouts">DataflowInvokeRunTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.warehouseBucketUriInput">warehouse_bucket_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.archiveUri">archive_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.arguments">arguments</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.asynchronous">asynchronous</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.configuration">configuration</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.driverShape">driver_shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.execute">execute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.executorShape">executor_shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.idleTimeoutInMinutes">idle_timeout_in_minutes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.logsBucketUri">logs_bucket_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.maxDurationInMinutes">max_duration_in_minutes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.metastoreId">metastore_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.numExecutors">num_executors</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.opcParentRptUrl">opc_parent_rpt_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.poolId">pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.sparkVersion">spark_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.warehouseBucketUri">warehouse_bucket_uri</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_log_config`<sup>Required</sup> <a name="application_log_config" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.applicationLogConfig"></a>

```python
application_log_config: DataflowInvokeRunApplicationLogConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference">DataflowInvokeRunApplicationLogConfigOutputReference</a>

---

##### `class_name`<sup>Required</sup> <a name="class_name" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.className"></a>

```python
class_name: str
```

- *Type:* str

---

##### `data_read_in_bytes`<sup>Required</sup> <a name="data_read_in_bytes" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.dataReadInBytes"></a>

```python
data_read_in_bytes: str
```

- *Type:* str

---

##### `data_written_in_bytes`<sup>Required</sup> <a name="data_written_in_bytes" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.dataWrittenInBytes"></a>

```python
data_written_in_bytes: str
```

- *Type:* str

---

##### `driver_shape_config`<sup>Required</sup> <a name="driver_shape_config" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.driverShapeConfig"></a>

```python
driver_shape_config: DataflowInvokeRunDriverShapeConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference">DataflowInvokeRunDriverShapeConfigOutputReference</a>

---

##### `executor_shape_config`<sup>Required</sup> <a name="executor_shape_config" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.executorShapeConfig"></a>

```python
executor_shape_config: DataflowInvokeRunExecutorShapeConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference">DataflowInvokeRunExecutorShapeConfigOutputReference</a>

---

##### `file_uri`<sup>Required</sup> <a name="file_uri" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.fileUri"></a>

```python
file_uri: str
```

- *Type:* str

---

##### `language`<sup>Required</sup> <a name="language" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.language"></a>

```python
language: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `opc_request_id`<sup>Required</sup> <a name="opc_request_id" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.opcRequestId"></a>

```python
opc_request_id: str
```

- *Type:* str

---

##### `owner_principal_id`<sup>Required</sup> <a name="owner_principal_id" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.ownerPrincipalId"></a>

```python
owner_principal_id: str
```

- *Type:* str

---

##### `owner_user_name`<sup>Required</sup> <a name="owner_user_name" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.ownerUserName"></a>

```python
owner_user_name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.parameters"></a>

```python
parameters: DataflowInvokeRunParametersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList">DataflowInvokeRunParametersList</a>

---

##### `private_endpoint_dns_zones`<sup>Required</sup> <a name="private_endpoint_dns_zones" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.privateEndpointDnsZones"></a>

```python
private_endpoint_dns_zones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `private_endpoint_id`<sup>Required</sup> <a name="private_endpoint_id" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.privateEndpointId"></a>

```python
private_endpoint_id: str
```

- *Type:* str

---

##### `private_endpoint_max_host_count`<sup>Required</sup> <a name="private_endpoint_max_host_count" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.privateEndpointMaxHostCount"></a>

```python
private_endpoint_max_host_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `private_endpoint_nsg_ids`<sup>Required</sup> <a name="private_endpoint_nsg_ids" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.privateEndpointNsgIds"></a>

```python
private_endpoint_nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `private_endpoint_subnet_id`<sup>Required</sup> <a name="private_endpoint_subnet_id" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.privateEndpointSubnetId"></a>

```python
private_endpoint_subnet_id: str
```

- *Type:* str

---

##### `run_duration_in_milliseconds`<sup>Required</sup> <a name="run_duration_in_milliseconds" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.runDurationInMilliseconds"></a>

```python
run_duration_in_milliseconds: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.timeouts"></a>

```python
timeouts: DataflowInvokeRunTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference">DataflowInvokeRunTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `total_ocpu`<sup>Required</sup> <a name="total_ocpu" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.totalOcpu"></a>

```python
total_ocpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `application_id_input`<sup>Optional</sup> <a name="application_id_input" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.applicationIdInput"></a>

```python
application_id_input: str
```

- *Type:* str

---

##### `application_log_config_input`<sup>Optional</sup> <a name="application_log_config_input" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.applicationLogConfigInput"></a>

```python
application_log_config_input: DataflowInvokeRunApplicationLogConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfig">DataflowInvokeRunApplicationLogConfig</a>

---

##### `archive_uri_input`<sup>Optional</sup> <a name="archive_uri_input" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.archiveUriInput"></a>

```python
archive_uri_input: str
```

- *Type:* str

---

##### `arguments_input`<sup>Optional</sup> <a name="arguments_input" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.argumentsInput"></a>

```python
arguments_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `asynchronous_input`<sup>Optional</sup> <a name="asynchronous_input" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.asynchronousInput"></a>

```python
asynchronous_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `configuration_input`<sup>Optional</sup> <a name="configuration_input" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.configurationInput"></a>

```python
configuration_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `driver_shape_config_input`<sup>Optional</sup> <a name="driver_shape_config_input" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.driverShapeConfigInput"></a>

```python
driver_shape_config_input: DataflowInvokeRunDriverShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfig">DataflowInvokeRunDriverShapeConfig</a>

---

##### `driver_shape_input`<sup>Optional</sup> <a name="driver_shape_input" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.driverShapeInput"></a>

```python
driver_shape_input: str
```

- *Type:* str

---

##### `execute_input`<sup>Optional</sup> <a name="execute_input" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.executeInput"></a>

```python
execute_input: str
```

- *Type:* str

---

##### `executor_shape_config_input`<sup>Optional</sup> <a name="executor_shape_config_input" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.executorShapeConfigInput"></a>

```python
executor_shape_config_input: DataflowInvokeRunExecutorShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfig">DataflowInvokeRunExecutorShapeConfig</a>

---

##### `executor_shape_input`<sup>Optional</sup> <a name="executor_shape_input" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.executorShapeInput"></a>

```python
executor_shape_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `idle_timeout_in_minutes_input`<sup>Optional</sup> <a name="idle_timeout_in_minutes_input" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.idleTimeoutInMinutesInput"></a>

```python
idle_timeout_in_minutes_input: str
```

- *Type:* str

---

##### `logs_bucket_uri_input`<sup>Optional</sup> <a name="logs_bucket_uri_input" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.logsBucketUriInput"></a>

```python
logs_bucket_uri_input: str
```

- *Type:* str

---

##### `max_duration_in_minutes_input`<sup>Optional</sup> <a name="max_duration_in_minutes_input" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.maxDurationInMinutesInput"></a>

```python
max_duration_in_minutes_input: str
```

- *Type:* str

---

##### `metastore_id_input`<sup>Optional</sup> <a name="metastore_id_input" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.metastoreIdInput"></a>

```python
metastore_id_input: str
```

- *Type:* str

---

##### `num_executors_input`<sup>Optional</sup> <a name="num_executors_input" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.numExecutorsInput"></a>

```python
num_executors_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `opc_parent_rpt_url_input`<sup>Optional</sup> <a name="opc_parent_rpt_url_input" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.opcParentRptUrlInput"></a>

```python
opc_parent_rpt_url_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.parametersInput"></a>

```python
parameters_input: typing.Union[IResolvable, typing.List[DataflowInvokeRunParameters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParameters">DataflowInvokeRunParameters</a>]]

---

##### `pool_id_input`<sup>Optional</sup> <a name="pool_id_input" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.poolIdInput"></a>

```python
pool_id_input: str
```

- *Type:* str

---

##### `spark_version_input`<sup>Optional</sup> <a name="spark_version_input" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.sparkVersionInput"></a>

```python
spark_version_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataflowInvokeRunTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeouts">DataflowInvokeRunTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `warehouse_bucket_uri_input`<sup>Optional</sup> <a name="warehouse_bucket_uri_input" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.warehouseBucketUriInput"></a>

```python
warehouse_bucket_uri_input: str
```

- *Type:* str

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `archive_uri`<sup>Required</sup> <a name="archive_uri" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.archiveUri"></a>

```python
archive_uri: str
```

- *Type:* str

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.arguments"></a>

```python
arguments: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `asynchronous`<sup>Required</sup> <a name="asynchronous" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.asynchronous"></a>

```python
asynchronous: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.configuration"></a>

```python
configuration: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `driver_shape`<sup>Required</sup> <a name="driver_shape" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.driverShape"></a>

```python
driver_shape: str
```

- *Type:* str

---

##### `execute`<sup>Required</sup> <a name="execute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.execute"></a>

```python
execute: str
```

- *Type:* str

---

##### `executor_shape`<sup>Required</sup> <a name="executor_shape" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.executorShape"></a>

```python
executor_shape: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idle_timeout_in_minutes`<sup>Required</sup> <a name="idle_timeout_in_minutes" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.idleTimeoutInMinutes"></a>

```python
idle_timeout_in_minutes: str
```

- *Type:* str

---

##### `logs_bucket_uri`<sup>Required</sup> <a name="logs_bucket_uri" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.logsBucketUri"></a>

```python
logs_bucket_uri: str
```

- *Type:* str

---

##### `max_duration_in_minutes`<sup>Required</sup> <a name="max_duration_in_minutes" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.maxDurationInMinutes"></a>

```python
max_duration_in_minutes: str
```

- *Type:* str

---

##### `metastore_id`<sup>Required</sup> <a name="metastore_id" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.metastoreId"></a>

```python
metastore_id: str
```

- *Type:* str

---

##### `num_executors`<sup>Required</sup> <a name="num_executors" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.numExecutors"></a>

```python
num_executors: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `opc_parent_rpt_url`<sup>Required</sup> <a name="opc_parent_rpt_url" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.opcParentRptUrl"></a>

```python
opc_parent_rpt_url: str
```

- *Type:* str

---

##### `pool_id`<sup>Required</sup> <a name="pool_id" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.poolId"></a>

```python
pool_id: str
```

- *Type:* str

---

##### `spark_version`<sup>Required</sup> <a name="spark_version" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.sparkVersion"></a>

```python
spark_version: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `warehouse_bucket_uri`<sup>Required</sup> <a name="warehouse_bucket_uri" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.warehouseBucketUri"></a>

```python
warehouse_bucket_uri: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataflowInvokeRunApplicationLogConfig <a name="DataflowInvokeRunApplicationLogConfig" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataflow_invoke_run

dataflowInvokeRun.DataflowInvokeRunApplicationLogConfig(
  log_group_id: str,
  log_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfig.property.logGroupId">log_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#log_group_id DataflowInvokeRun#log_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfig.property.logId">log_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#log_id DataflowInvokeRun#log_id}. |

---

##### `log_group_id`<sup>Required</sup> <a name="log_group_id" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfig.property.logGroupId"></a>

```python
log_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#log_group_id DataflowInvokeRun#log_group_id}.

---

##### `log_id`<sup>Required</sup> <a name="log_id" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfig.property.logId"></a>

```python
log_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#log_id DataflowInvokeRun#log_id}.

---

### DataflowInvokeRunConfig <a name="DataflowInvokeRunConfig" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataflow_invoke_run

dataflowInvokeRun.DataflowInvokeRunConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  application_id: str = None,
  application_log_config: DataflowInvokeRunApplicationLogConfig = None,
  archive_uri: str = None,
  arguments: typing.List[str] = None,
  asynchronous: typing.Union[bool, IResolvable] = None,
  configuration: typing.Mapping[str] = None,
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  driver_shape: str = None,
  driver_shape_config: DataflowInvokeRunDriverShapeConfig = None,
  execute: str = None,
  executor_shape: str = None,
  executor_shape_config: DataflowInvokeRunExecutorShapeConfig = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  idle_timeout_in_minutes: str = None,
  logs_bucket_uri: str = None,
  max_duration_in_minutes: str = None,
  metastore_id: str = None,
  num_executors: typing.Union[int, float] = None,
  opc_parent_rpt_url: str = None,
  parameters: typing.Union[IResolvable, typing.List[DataflowInvokeRunParameters]] = None,
  pool_id: str = None,
  spark_version: str = None,
  timeouts: DataflowInvokeRunTimeouts = None,
  type: str = None,
  warehouse_bucket_uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#compartment_id DataflowInvokeRun#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.applicationId">application_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#application_id DataflowInvokeRun#application_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.applicationLogConfig">application_log_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfig">DataflowInvokeRunApplicationLogConfig</a></code> | application_log_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.archiveUri">archive_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#archive_uri DataflowInvokeRun#archive_uri}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.arguments">arguments</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#arguments DataflowInvokeRun#arguments}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.asynchronous">asynchronous</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#asynchronous DataflowInvokeRun#asynchronous}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.configuration">configuration</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#configuration DataflowInvokeRun#configuration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#defined_tags DataflowInvokeRun#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#display_name DataflowInvokeRun#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.driverShape">driver_shape</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#driver_shape DataflowInvokeRun#driver_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.driverShapeConfig">driver_shape_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfig">DataflowInvokeRunDriverShapeConfig</a></code> | driver_shape_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.execute">execute</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#execute DataflowInvokeRun#execute}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.executorShape">executor_shape</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#executor_shape DataflowInvokeRun#executor_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.executorShapeConfig">executor_shape_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfig">DataflowInvokeRunExecutorShapeConfig</a></code> | executor_shape_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#freeform_tags DataflowInvokeRun#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#id DataflowInvokeRun#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.idleTimeoutInMinutes">idle_timeout_in_minutes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#idle_timeout_in_minutes DataflowInvokeRun#idle_timeout_in_minutes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.logsBucketUri">logs_bucket_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#logs_bucket_uri DataflowInvokeRun#logs_bucket_uri}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.maxDurationInMinutes">max_duration_in_minutes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#max_duration_in_minutes DataflowInvokeRun#max_duration_in_minutes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.metastoreId">metastore_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#metastore_id DataflowInvokeRun#metastore_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.numExecutors">num_executors</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#num_executors DataflowInvokeRun#num_executors}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.opcParentRptUrl">opc_parent_rpt_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#opc_parent_rpt_url DataflowInvokeRun#opc_parent_rpt_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.parameters">parameters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParameters">DataflowInvokeRunParameters</a>]]</code> | parameters block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.poolId">pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#pool_id DataflowInvokeRun#pool_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.sparkVersion">spark_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#spark_version DataflowInvokeRun#spark_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeouts">DataflowInvokeRunTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#type DataflowInvokeRun#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.warehouseBucketUri">warehouse_bucket_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#warehouse_bucket_uri DataflowInvokeRun#warehouse_bucket_uri}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#compartment_id DataflowInvokeRun#compartment_id}.

---

##### `application_id`<sup>Optional</sup> <a name="application_id" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#application_id DataflowInvokeRun#application_id}.

---

##### `application_log_config`<sup>Optional</sup> <a name="application_log_config" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.applicationLogConfig"></a>

```python
application_log_config: DataflowInvokeRunApplicationLogConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfig">DataflowInvokeRunApplicationLogConfig</a>

application_log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#application_log_config DataflowInvokeRun#application_log_config}

---

##### `archive_uri`<sup>Optional</sup> <a name="archive_uri" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.archiveUri"></a>

```python
archive_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#archive_uri DataflowInvokeRun#archive_uri}.

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.arguments"></a>

```python
arguments: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#arguments DataflowInvokeRun#arguments}.

---

##### `asynchronous`<sup>Optional</sup> <a name="asynchronous" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.asynchronous"></a>

```python
asynchronous: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#asynchronous DataflowInvokeRun#asynchronous}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.configuration"></a>

```python
configuration: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#configuration DataflowInvokeRun#configuration}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#defined_tags DataflowInvokeRun#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#display_name DataflowInvokeRun#display_name}.

---

##### `driver_shape`<sup>Optional</sup> <a name="driver_shape" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.driverShape"></a>

```python
driver_shape: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#driver_shape DataflowInvokeRun#driver_shape}.

---

##### `driver_shape_config`<sup>Optional</sup> <a name="driver_shape_config" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.driverShapeConfig"></a>

```python
driver_shape_config: DataflowInvokeRunDriverShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfig">DataflowInvokeRunDriverShapeConfig</a>

driver_shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#driver_shape_config DataflowInvokeRun#driver_shape_config}

---

##### `execute`<sup>Optional</sup> <a name="execute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.execute"></a>

```python
execute: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#execute DataflowInvokeRun#execute}.

---

##### `executor_shape`<sup>Optional</sup> <a name="executor_shape" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.executorShape"></a>

```python
executor_shape: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#executor_shape DataflowInvokeRun#executor_shape}.

---

##### `executor_shape_config`<sup>Optional</sup> <a name="executor_shape_config" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.executorShapeConfig"></a>

```python
executor_shape_config: DataflowInvokeRunExecutorShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfig">DataflowInvokeRunExecutorShapeConfig</a>

executor_shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#executor_shape_config DataflowInvokeRun#executor_shape_config}

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#freeform_tags DataflowInvokeRun#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#id DataflowInvokeRun#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idle_timeout_in_minutes`<sup>Optional</sup> <a name="idle_timeout_in_minutes" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.idleTimeoutInMinutes"></a>

```python
idle_timeout_in_minutes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#idle_timeout_in_minutes DataflowInvokeRun#idle_timeout_in_minutes}.

---

##### `logs_bucket_uri`<sup>Optional</sup> <a name="logs_bucket_uri" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.logsBucketUri"></a>

```python
logs_bucket_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#logs_bucket_uri DataflowInvokeRun#logs_bucket_uri}.

---

##### `max_duration_in_minutes`<sup>Optional</sup> <a name="max_duration_in_minutes" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.maxDurationInMinutes"></a>

```python
max_duration_in_minutes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#max_duration_in_minutes DataflowInvokeRun#max_duration_in_minutes}.

---

##### `metastore_id`<sup>Optional</sup> <a name="metastore_id" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.metastoreId"></a>

```python
metastore_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#metastore_id DataflowInvokeRun#metastore_id}.

---

##### `num_executors`<sup>Optional</sup> <a name="num_executors" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.numExecutors"></a>

```python
num_executors: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#num_executors DataflowInvokeRun#num_executors}.

---

##### `opc_parent_rpt_url`<sup>Optional</sup> <a name="opc_parent_rpt_url" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.opcParentRptUrl"></a>

```python
opc_parent_rpt_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#opc_parent_rpt_url DataflowInvokeRun#opc_parent_rpt_url}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.parameters"></a>

```python
parameters: typing.Union[IResolvable, typing.List[DataflowInvokeRunParameters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParameters">DataflowInvokeRunParameters</a>]]

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#parameters DataflowInvokeRun#parameters}

---

##### `pool_id`<sup>Optional</sup> <a name="pool_id" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.poolId"></a>

```python
pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#pool_id DataflowInvokeRun#pool_id}.

---

##### `spark_version`<sup>Optional</sup> <a name="spark_version" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.sparkVersion"></a>

```python
spark_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#spark_version DataflowInvokeRun#spark_version}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.timeouts"></a>

```python
timeouts: DataflowInvokeRunTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeouts">DataflowInvokeRunTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#timeouts DataflowInvokeRun#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#type DataflowInvokeRun#type}.

---

##### `warehouse_bucket_uri`<sup>Optional</sup> <a name="warehouse_bucket_uri" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.warehouseBucketUri"></a>

```python
warehouse_bucket_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#warehouse_bucket_uri DataflowInvokeRun#warehouse_bucket_uri}.

---

### DataflowInvokeRunDriverShapeConfig <a name="DataflowInvokeRunDriverShapeConfig" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataflow_invoke_run

dataflowInvokeRun.DataflowInvokeRunDriverShapeConfig(
  memory_in_gbs: typing.Union[int, float] = None,
  ocpus: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfig.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#memory_in_gbs DataflowInvokeRun#memory_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfig.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#ocpus DataflowInvokeRun#ocpus}. |

---

##### `memory_in_gbs`<sup>Optional</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfig.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#memory_in_gbs DataflowInvokeRun#memory_in_gbs}.

---

##### `ocpus`<sup>Optional</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfig.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#ocpus DataflowInvokeRun#ocpus}.

---

### DataflowInvokeRunExecutorShapeConfig <a name="DataflowInvokeRunExecutorShapeConfig" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataflow_invoke_run

dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfig(
  memory_in_gbs: typing.Union[int, float] = None,
  ocpus: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfig.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#memory_in_gbs DataflowInvokeRun#memory_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfig.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#ocpus DataflowInvokeRun#ocpus}. |

---

##### `memory_in_gbs`<sup>Optional</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfig.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#memory_in_gbs DataflowInvokeRun#memory_in_gbs}.

---

##### `ocpus`<sup>Optional</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfig.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#ocpus DataflowInvokeRun#ocpus}.

---

### DataflowInvokeRunParameters <a name="DataflowInvokeRunParameters" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParameters.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataflow_invoke_run

dataflowInvokeRun.DataflowInvokeRunParameters(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParameters.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#name DataflowInvokeRun#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParameters.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#value DataflowInvokeRun#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParameters.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#name DataflowInvokeRun#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParameters.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#value DataflowInvokeRun#value}.

---

### DataflowInvokeRunTimeouts <a name="DataflowInvokeRunTimeouts" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataflow_invoke_run

dataflowInvokeRun.DataflowInvokeRunTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#create DataflowInvokeRun#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#delete DataflowInvokeRun#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#update DataflowInvokeRun#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#create DataflowInvokeRun#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#delete DataflowInvokeRun#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#update DataflowInvokeRun#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataflowInvokeRunApplicationLogConfigOutputReference <a name="DataflowInvokeRunApplicationLogConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataflow_invoke_run

dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.property.logGroupIdInput">log_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.property.logIdInput">log_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.property.logGroupId">log_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.property.logId">log_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfig">DataflowInvokeRunApplicationLogConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_group_id_input`<sup>Optional</sup> <a name="log_group_id_input" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.property.logGroupIdInput"></a>

```python
log_group_id_input: str
```

- *Type:* str

---

##### `log_id_input`<sup>Optional</sup> <a name="log_id_input" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.property.logIdInput"></a>

```python
log_id_input: str
```

- *Type:* str

---

##### `log_group_id`<sup>Required</sup> <a name="log_group_id" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.property.logGroupId"></a>

```python
log_group_id: str
```

- *Type:* str

---

##### `log_id`<sup>Required</sup> <a name="log_id" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.property.logId"></a>

```python
log_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataflowInvokeRunApplicationLogConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfig">DataflowInvokeRunApplicationLogConfig</a>

---


### DataflowInvokeRunDriverShapeConfigOutputReference <a name="DataflowInvokeRunDriverShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataflow_invoke_run

dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.resetMemoryInGbs">reset_memory_in_gbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.resetOcpus">reset_ocpus</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_memory_in_gbs` <a name="reset_memory_in_gbs" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.resetMemoryInGbs"></a>

```python
def reset_memory_in_gbs() -> None
```

##### `reset_ocpus` <a name="reset_ocpus" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.resetOcpus"></a>

```python
def reset_ocpus() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.property.memoryInGbsInput">memory_in_gbs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.property.ocpusInput">ocpus_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfig">DataflowInvokeRunDriverShapeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `memory_in_gbs_input`<sup>Optional</sup> <a name="memory_in_gbs_input" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.property.memoryInGbsInput"></a>

```python
memory_in_gbs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus_input`<sup>Optional</sup> <a name="ocpus_input" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.property.ocpusInput"></a>

```python
ocpus_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_in_gbs`<sup>Required</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataflowInvokeRunDriverShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfig">DataflowInvokeRunDriverShapeConfig</a>

---


### DataflowInvokeRunExecutorShapeConfigOutputReference <a name="DataflowInvokeRunExecutorShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataflow_invoke_run

dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.resetMemoryInGbs">reset_memory_in_gbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.resetOcpus">reset_ocpus</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_memory_in_gbs` <a name="reset_memory_in_gbs" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.resetMemoryInGbs"></a>

```python
def reset_memory_in_gbs() -> None
```

##### `reset_ocpus` <a name="reset_ocpus" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.resetOcpus"></a>

```python
def reset_ocpus() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.property.memoryInGbsInput">memory_in_gbs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.property.ocpusInput">ocpus_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfig">DataflowInvokeRunExecutorShapeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `memory_in_gbs_input`<sup>Optional</sup> <a name="memory_in_gbs_input" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.property.memoryInGbsInput"></a>

```python
memory_in_gbs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus_input`<sup>Optional</sup> <a name="ocpus_input" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.property.ocpusInput"></a>

```python
ocpus_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_in_gbs`<sup>Required</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataflowInvokeRunExecutorShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfig">DataflowInvokeRunExecutorShapeConfig</a>

---


### DataflowInvokeRunParametersList <a name="DataflowInvokeRunParametersList" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataflow_invoke_run

dataflowInvokeRun.DataflowInvokeRunParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataflowInvokeRunParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParameters">DataflowInvokeRunParameters</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataflowInvokeRunParameters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParameters">DataflowInvokeRunParameters</a>]]

---


### DataflowInvokeRunParametersOutputReference <a name="DataflowInvokeRunParametersOutputReference" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataflow_invoke_run

dataflowInvokeRun.DataflowInvokeRunParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParameters">DataflowInvokeRunParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataflowInvokeRunParameters]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParameters">DataflowInvokeRunParameters</a>]

---


### DataflowInvokeRunTimeoutsOutputReference <a name="DataflowInvokeRunTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataflow_invoke_run

dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeouts">DataflowInvokeRunTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataflowInvokeRunTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeouts">DataflowInvokeRunTimeouts</a>]

---



