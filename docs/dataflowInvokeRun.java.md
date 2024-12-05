# `dataflowInvokeRun` Submodule <a name="`dataflowInvokeRun` Submodule" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataflowInvokeRun <a name="DataflowInvokeRun" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run oci_dataflow_invoke_run}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataflow_invoke_run.DataflowInvokeRun;

DataflowInvokeRun.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .compartmentId(java.lang.String)
//  .applicationId(java.lang.String)
//  .applicationLogConfig(DataflowInvokeRunApplicationLogConfig)
//  .archiveUri(java.lang.String)
//  .arguments(java.util.List<java.lang.String>)
//  .asynchronous(java.lang.Boolean)
//  .asynchronous(IResolvable)
//  .configuration(java.util.Map<java.lang.String, java.lang.String>)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .driverShape(java.lang.String)
//  .driverShapeConfig(DataflowInvokeRunDriverShapeConfig)
//  .execute(java.lang.String)
//  .executorShape(java.lang.String)
//  .executorShapeConfig(DataflowInvokeRunExecutorShapeConfig)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .idleTimeoutInMinutes(java.lang.String)
//  .logsBucketUri(java.lang.String)
//  .maxDurationInMinutes(java.lang.String)
//  .metastoreId(java.lang.String)
//  .numExecutors(java.lang.Number)
//  .opcParentRptUrl(java.lang.String)
//  .parameters(IResolvable)
//  .parameters(java.util.List<DataflowInvokeRunParameters>)
//  .poolId(java.lang.String)
//  .sparkVersion(java.lang.String)
//  .timeouts(DataflowInvokeRunTimeouts)
//  .type(java.lang.String)
//  .warehouseBucketUri(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#compartment_id DataflowInvokeRun#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.applicationId">applicationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#application_id DataflowInvokeRun#application_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.applicationLogConfig">applicationLogConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfig">DataflowInvokeRunApplicationLogConfig</a></code> | application_log_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.archiveUri">archiveUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#archive_uri DataflowInvokeRun#archive_uri}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.arguments">arguments</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#arguments DataflowInvokeRun#arguments}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.asynchronous">asynchronous</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#asynchronous DataflowInvokeRun#asynchronous}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.configuration">configuration</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#configuration DataflowInvokeRun#configuration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#defined_tags DataflowInvokeRun#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#display_name DataflowInvokeRun#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.driverShape">driverShape</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#driver_shape DataflowInvokeRun#driver_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.driverShapeConfig">driverShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfig">DataflowInvokeRunDriverShapeConfig</a></code> | driver_shape_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.execute">execute</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#execute DataflowInvokeRun#execute}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.executorShape">executorShape</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#executor_shape DataflowInvokeRun#executor_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.executorShapeConfig">executorShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfig">DataflowInvokeRunExecutorShapeConfig</a></code> | executor_shape_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#freeform_tags DataflowInvokeRun#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#id DataflowInvokeRun#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.idleTimeoutInMinutes">idleTimeoutInMinutes</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#idle_timeout_in_minutes DataflowInvokeRun#idle_timeout_in_minutes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.logsBucketUri">logsBucketUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#logs_bucket_uri DataflowInvokeRun#logs_bucket_uri}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.maxDurationInMinutes">maxDurationInMinutes</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#max_duration_in_minutes DataflowInvokeRun#max_duration_in_minutes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.metastoreId">metastoreId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#metastore_id DataflowInvokeRun#metastore_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.numExecutors">numExecutors</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#num_executors DataflowInvokeRun#num_executors}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.opcParentRptUrl">opcParentRptUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#opc_parent_rpt_url DataflowInvokeRun#opc_parent_rpt_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.parameters">parameters</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParameters">DataflowInvokeRunParameters</a>></code> | parameters block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.poolId">poolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#pool_id DataflowInvokeRun#pool_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.sparkVersion">sparkVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#spark_version DataflowInvokeRun#spark_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeouts">DataflowInvokeRunTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#type DataflowInvokeRun#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.warehouseBucketUri">warehouseBucketUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#warehouse_bucket_uri DataflowInvokeRun#warehouse_bucket_uri}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#compartment_id DataflowInvokeRun#compartment_id}.

---

##### `applicationId`<sup>Optional</sup> <a name="applicationId" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.applicationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#application_id DataflowInvokeRun#application_id}.

---

##### `applicationLogConfig`<sup>Optional</sup> <a name="applicationLogConfig" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.applicationLogConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfig">DataflowInvokeRunApplicationLogConfig</a>

application_log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#application_log_config DataflowInvokeRun#application_log_config}

---

##### `archiveUri`<sup>Optional</sup> <a name="archiveUri" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.archiveUri"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#archive_uri DataflowInvokeRun#archive_uri}.

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.arguments"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#arguments DataflowInvokeRun#arguments}.

---

##### `asynchronous`<sup>Optional</sup> <a name="asynchronous" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.asynchronous"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#asynchronous DataflowInvokeRun#asynchronous}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.configuration"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#configuration DataflowInvokeRun#configuration}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#defined_tags DataflowInvokeRun#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#display_name DataflowInvokeRun#display_name}.

---

##### `driverShape`<sup>Optional</sup> <a name="driverShape" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.driverShape"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#driver_shape DataflowInvokeRun#driver_shape}.

---

##### `driverShapeConfig`<sup>Optional</sup> <a name="driverShapeConfig" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.driverShapeConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfig">DataflowInvokeRunDriverShapeConfig</a>

driver_shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#driver_shape_config DataflowInvokeRun#driver_shape_config}

---

##### `execute`<sup>Optional</sup> <a name="execute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.execute"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#execute DataflowInvokeRun#execute}.

---

##### `executorShape`<sup>Optional</sup> <a name="executorShape" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.executorShape"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#executor_shape DataflowInvokeRun#executor_shape}.

---

##### `executorShapeConfig`<sup>Optional</sup> <a name="executorShapeConfig" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.executorShapeConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfig">DataflowInvokeRunExecutorShapeConfig</a>

executor_shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#executor_shape_config DataflowInvokeRun#executor_shape_config}

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#freeform_tags DataflowInvokeRun#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#id DataflowInvokeRun#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idleTimeoutInMinutes`<sup>Optional</sup> <a name="idleTimeoutInMinutes" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.idleTimeoutInMinutes"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#idle_timeout_in_minutes DataflowInvokeRun#idle_timeout_in_minutes}.

---

##### `logsBucketUri`<sup>Optional</sup> <a name="logsBucketUri" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.logsBucketUri"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#logs_bucket_uri DataflowInvokeRun#logs_bucket_uri}.

---

##### `maxDurationInMinutes`<sup>Optional</sup> <a name="maxDurationInMinutes" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.maxDurationInMinutes"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#max_duration_in_minutes DataflowInvokeRun#max_duration_in_minutes}.

---

##### `metastoreId`<sup>Optional</sup> <a name="metastoreId" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.metastoreId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#metastore_id DataflowInvokeRun#metastore_id}.

---

##### `numExecutors`<sup>Optional</sup> <a name="numExecutors" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.numExecutors"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#num_executors DataflowInvokeRun#num_executors}.

---

##### `opcParentRptUrl`<sup>Optional</sup> <a name="opcParentRptUrl" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.opcParentRptUrl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#opc_parent_rpt_url DataflowInvokeRun#opc_parent_rpt_url}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.parameters"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParameters">DataflowInvokeRunParameters</a>>

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#parameters DataflowInvokeRun#parameters}

---

##### `poolId`<sup>Optional</sup> <a name="poolId" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.poolId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#pool_id DataflowInvokeRun#pool_id}.

---

##### `sparkVersion`<sup>Optional</sup> <a name="sparkVersion" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.sparkVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#spark_version DataflowInvokeRun#spark_version}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeouts">DataflowInvokeRunTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#timeouts DataflowInvokeRun#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#type DataflowInvokeRun#type}.

---

##### `warehouseBucketUri`<sup>Optional</sup> <a name="warehouseBucketUri" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.warehouseBucketUri"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#warehouse_bucket_uri DataflowInvokeRun#warehouse_bucket_uri}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.putApplicationLogConfig">putApplicationLogConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.putDriverShapeConfig">putDriverShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.putExecutorShapeConfig">putExecutorShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.putParameters">putParameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetApplicationId">resetApplicationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetApplicationLogConfig">resetApplicationLogConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetArchiveUri">resetArchiveUri</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetArguments">resetArguments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetAsynchronous">resetAsynchronous</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetConfiguration">resetConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetDriverShape">resetDriverShape</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetDriverShapeConfig">resetDriverShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetExecute">resetExecute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetExecutorShape">resetExecutorShape</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetExecutorShapeConfig">resetExecutorShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetIdleTimeoutInMinutes">resetIdleTimeoutInMinutes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetLogsBucketUri">resetLogsBucketUri</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetMaxDurationInMinutes">resetMaxDurationInMinutes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetMetastoreId">resetMetastoreId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetNumExecutors">resetNumExecutors</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetOpcParentRptUrl">resetOpcParentRptUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetPoolId">resetPoolId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetSparkVersion">resetSparkVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetType">resetType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetWarehouseBucketUri">resetWarehouseBucketUri</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putApplicationLogConfig` <a name="putApplicationLogConfig" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.putApplicationLogConfig"></a>

```java
public void putApplicationLogConfig(DataflowInvokeRunApplicationLogConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.putApplicationLogConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfig">DataflowInvokeRunApplicationLogConfig</a>

---

##### `putDriverShapeConfig` <a name="putDriverShapeConfig" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.putDriverShapeConfig"></a>

```java
public void putDriverShapeConfig(DataflowInvokeRunDriverShapeConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.putDriverShapeConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfig">DataflowInvokeRunDriverShapeConfig</a>

---

##### `putExecutorShapeConfig` <a name="putExecutorShapeConfig" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.putExecutorShapeConfig"></a>

```java
public void putExecutorShapeConfig(DataflowInvokeRunExecutorShapeConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.putExecutorShapeConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfig">DataflowInvokeRunExecutorShapeConfig</a>

---

##### `putParameters` <a name="putParameters" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.putParameters"></a>

```java
public void putParameters(IResolvable OR java.util.List<DataflowInvokeRunParameters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.putParameters.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParameters">DataflowInvokeRunParameters</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.putTimeouts"></a>

```java
public void putTimeouts(DataflowInvokeRunTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeouts">DataflowInvokeRunTimeouts</a>

---

##### `resetApplicationId` <a name="resetApplicationId" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetApplicationId"></a>

```java
public void resetApplicationId()
```

##### `resetApplicationLogConfig` <a name="resetApplicationLogConfig" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetApplicationLogConfig"></a>

```java
public void resetApplicationLogConfig()
```

##### `resetArchiveUri` <a name="resetArchiveUri" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetArchiveUri"></a>

```java
public void resetArchiveUri()
```

##### `resetArguments` <a name="resetArguments" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetArguments"></a>

```java
public void resetArguments()
```

##### `resetAsynchronous` <a name="resetAsynchronous" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetAsynchronous"></a>

```java
public void resetAsynchronous()
```

##### `resetConfiguration` <a name="resetConfiguration" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetConfiguration"></a>

```java
public void resetConfiguration()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetDriverShape` <a name="resetDriverShape" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetDriverShape"></a>

```java
public void resetDriverShape()
```

##### `resetDriverShapeConfig` <a name="resetDriverShapeConfig" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetDriverShapeConfig"></a>

```java
public void resetDriverShapeConfig()
```

##### `resetExecute` <a name="resetExecute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetExecute"></a>

```java
public void resetExecute()
```

##### `resetExecutorShape` <a name="resetExecutorShape" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetExecutorShape"></a>

```java
public void resetExecutorShape()
```

##### `resetExecutorShapeConfig` <a name="resetExecutorShapeConfig" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetExecutorShapeConfig"></a>

```java
public void resetExecutorShapeConfig()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetId"></a>

```java
public void resetId()
```

##### `resetIdleTimeoutInMinutes` <a name="resetIdleTimeoutInMinutes" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetIdleTimeoutInMinutes"></a>

```java
public void resetIdleTimeoutInMinutes()
```

##### `resetLogsBucketUri` <a name="resetLogsBucketUri" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetLogsBucketUri"></a>

```java
public void resetLogsBucketUri()
```

##### `resetMaxDurationInMinutes` <a name="resetMaxDurationInMinutes" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetMaxDurationInMinutes"></a>

```java
public void resetMaxDurationInMinutes()
```

##### `resetMetastoreId` <a name="resetMetastoreId" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetMetastoreId"></a>

```java
public void resetMetastoreId()
```

##### `resetNumExecutors` <a name="resetNumExecutors" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetNumExecutors"></a>

```java
public void resetNumExecutors()
```

##### `resetOpcParentRptUrl` <a name="resetOpcParentRptUrl" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetOpcParentRptUrl"></a>

```java
public void resetOpcParentRptUrl()
```

##### `resetParameters` <a name="resetParameters" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetPoolId` <a name="resetPoolId" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetPoolId"></a>

```java
public void resetPoolId()
```

##### `resetSparkVersion` <a name="resetSparkVersion" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetSparkVersion"></a>

```java
public void resetSparkVersion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetType` <a name="resetType" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetType"></a>

```java
public void resetType()
```

##### `resetWarehouseBucketUri` <a name="resetWarehouseBucketUri" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetWarehouseBucketUri"></a>

```java
public void resetWarehouseBucketUri()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataflowInvokeRun resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataflow_invoke_run.DataflowInvokeRun;

DataflowInvokeRun.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataflow_invoke_run.DataflowInvokeRun;

DataflowInvokeRun.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataflow_invoke_run.DataflowInvokeRun;

DataflowInvokeRun.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataflow_invoke_run.DataflowInvokeRun;

DataflowInvokeRun.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataflowInvokeRun.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataflowInvokeRun resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataflowInvokeRun to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataflowInvokeRun that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataflowInvokeRun to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.applicationLogConfig">applicationLogConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference">DataflowInvokeRunApplicationLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.className">className</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.dataReadInBytes">dataReadInBytes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.dataWrittenInBytes">dataWrittenInBytes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.driverShapeConfig">driverShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference">DataflowInvokeRunDriverShapeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.executorShapeConfig">executorShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference">DataflowInvokeRunExecutorShapeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.fileUri">fileUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.language">language</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.opcRequestId">opcRequestId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.ownerPrincipalId">ownerPrincipalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.ownerUserName">ownerUserName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.parameters">parameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList">DataflowInvokeRunParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.privateEndpointDnsZones">privateEndpointDnsZones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.privateEndpointId">privateEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.privateEndpointMaxHostCount">privateEndpointMaxHostCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.privateEndpointNsgIds">privateEndpointNsgIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.privateEndpointSubnetId">privateEndpointSubnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.runDurationInMilliseconds">runDurationInMilliseconds</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference">DataflowInvokeRunTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.totalOcpu">totalOcpu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.applicationIdInput">applicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.applicationLogConfigInput">applicationLogConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfig">DataflowInvokeRunApplicationLogConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.archiveUriInput">archiveUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.argumentsInput">argumentsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.asynchronousInput">asynchronousInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.configurationInput">configurationInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.driverShapeConfigInput">driverShapeConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfig">DataflowInvokeRunDriverShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.driverShapeInput">driverShapeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.executeInput">executeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.executorShapeConfigInput">executorShapeConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfig">DataflowInvokeRunExecutorShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.executorShapeInput">executorShapeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.idleTimeoutInMinutesInput">idleTimeoutInMinutesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.logsBucketUriInput">logsBucketUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.maxDurationInMinutesInput">maxDurationInMinutesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.metastoreIdInput">metastoreIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.numExecutorsInput">numExecutorsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.opcParentRptUrlInput">opcParentRptUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.parametersInput">parametersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParameters">DataflowInvokeRunParameters</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.poolIdInput">poolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.sparkVersionInput">sparkVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeouts">DataflowInvokeRunTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.warehouseBucketUriInput">warehouseBucketUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.archiveUri">archiveUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.arguments">arguments</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.asynchronous">asynchronous</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.configuration">configuration</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.driverShape">driverShape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.execute">execute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.executorShape">executorShape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.idleTimeoutInMinutes">idleTimeoutInMinutes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.logsBucketUri">logsBucketUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.maxDurationInMinutes">maxDurationInMinutes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.metastoreId">metastoreId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.numExecutors">numExecutors</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.opcParentRptUrl">opcParentRptUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.poolId">poolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.sparkVersion">sparkVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.warehouseBucketUri">warehouseBucketUri</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationLogConfig`<sup>Required</sup> <a name="applicationLogConfig" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.applicationLogConfig"></a>

```java
public DataflowInvokeRunApplicationLogConfigOutputReference getApplicationLogConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference">DataflowInvokeRunApplicationLogConfigOutputReference</a>

---

##### `className`<sup>Required</sup> <a name="className" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.className"></a>

```java
public java.lang.String getClassName();
```

- *Type:* java.lang.String

---

##### `dataReadInBytes`<sup>Required</sup> <a name="dataReadInBytes" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.dataReadInBytes"></a>

```java
public java.lang.String getDataReadInBytes();
```

- *Type:* java.lang.String

---

##### `dataWrittenInBytes`<sup>Required</sup> <a name="dataWrittenInBytes" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.dataWrittenInBytes"></a>

```java
public java.lang.String getDataWrittenInBytes();
```

- *Type:* java.lang.String

---

##### `driverShapeConfig`<sup>Required</sup> <a name="driverShapeConfig" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.driverShapeConfig"></a>

```java
public DataflowInvokeRunDriverShapeConfigOutputReference getDriverShapeConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference">DataflowInvokeRunDriverShapeConfigOutputReference</a>

---

##### `executorShapeConfig`<sup>Required</sup> <a name="executorShapeConfig" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.executorShapeConfig"></a>

```java
public DataflowInvokeRunExecutorShapeConfigOutputReference getExecutorShapeConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference">DataflowInvokeRunExecutorShapeConfigOutputReference</a>

---

##### `fileUri`<sup>Required</sup> <a name="fileUri" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.fileUri"></a>

```java
public java.lang.String getFileUri();
```

- *Type:* java.lang.String

---

##### `language`<sup>Required</sup> <a name="language" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.language"></a>

```java
public java.lang.String getLanguage();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `opcRequestId`<sup>Required</sup> <a name="opcRequestId" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.opcRequestId"></a>

```java
public java.lang.String getOpcRequestId();
```

- *Type:* java.lang.String

---

##### `ownerPrincipalId`<sup>Required</sup> <a name="ownerPrincipalId" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.ownerPrincipalId"></a>

```java
public java.lang.String getOwnerPrincipalId();
```

- *Type:* java.lang.String

---

##### `ownerUserName`<sup>Required</sup> <a name="ownerUserName" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.ownerUserName"></a>

```java
public java.lang.String getOwnerUserName();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.parameters"></a>

```java
public DataflowInvokeRunParametersList getParameters();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList">DataflowInvokeRunParametersList</a>

---

##### `privateEndpointDnsZones`<sup>Required</sup> <a name="privateEndpointDnsZones" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.privateEndpointDnsZones"></a>

```java
public java.util.List<java.lang.String> getPrivateEndpointDnsZones();
```

- *Type:* java.util.List<java.lang.String>

---

##### `privateEndpointId`<sup>Required</sup> <a name="privateEndpointId" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.privateEndpointId"></a>

```java
public java.lang.String getPrivateEndpointId();
```

- *Type:* java.lang.String

---

##### `privateEndpointMaxHostCount`<sup>Required</sup> <a name="privateEndpointMaxHostCount" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.privateEndpointMaxHostCount"></a>

```java
public java.lang.Number getPrivateEndpointMaxHostCount();
```

- *Type:* java.lang.Number

---

##### `privateEndpointNsgIds`<sup>Required</sup> <a name="privateEndpointNsgIds" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.privateEndpointNsgIds"></a>

```java
public java.util.List<java.lang.String> getPrivateEndpointNsgIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `privateEndpointSubnetId`<sup>Required</sup> <a name="privateEndpointSubnetId" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.privateEndpointSubnetId"></a>

```java
public java.lang.String getPrivateEndpointSubnetId();
```

- *Type:* java.lang.String

---

##### `runDurationInMilliseconds`<sup>Required</sup> <a name="runDurationInMilliseconds" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.runDurationInMilliseconds"></a>

```java
public java.lang.String getRunDurationInMilliseconds();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.timeouts"></a>

```java
public DataflowInvokeRunTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference">DataflowInvokeRunTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `totalOcpu`<sup>Required</sup> <a name="totalOcpu" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.totalOcpu"></a>

```java
public java.lang.Number getTotalOcpu();
```

- *Type:* java.lang.Number

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.applicationIdInput"></a>

```java
public java.lang.String getApplicationIdInput();
```

- *Type:* java.lang.String

---

##### `applicationLogConfigInput`<sup>Optional</sup> <a name="applicationLogConfigInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.applicationLogConfigInput"></a>

```java
public DataflowInvokeRunApplicationLogConfig getApplicationLogConfigInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfig">DataflowInvokeRunApplicationLogConfig</a>

---

##### `archiveUriInput`<sup>Optional</sup> <a name="archiveUriInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.archiveUriInput"></a>

```java
public java.lang.String getArchiveUriInput();
```

- *Type:* java.lang.String

---

##### `argumentsInput`<sup>Optional</sup> <a name="argumentsInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.argumentsInput"></a>

```java
public java.util.List<java.lang.String> getArgumentsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `asynchronousInput`<sup>Optional</sup> <a name="asynchronousInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.asynchronousInput"></a>

```java
public java.lang.Object getAsynchronousInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.configurationInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfigurationInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `driverShapeConfigInput`<sup>Optional</sup> <a name="driverShapeConfigInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.driverShapeConfigInput"></a>

```java
public DataflowInvokeRunDriverShapeConfig getDriverShapeConfigInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfig">DataflowInvokeRunDriverShapeConfig</a>

---

##### `driverShapeInput`<sup>Optional</sup> <a name="driverShapeInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.driverShapeInput"></a>

```java
public java.lang.String getDriverShapeInput();
```

- *Type:* java.lang.String

---

##### `executeInput`<sup>Optional</sup> <a name="executeInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.executeInput"></a>

```java
public java.lang.String getExecuteInput();
```

- *Type:* java.lang.String

---

##### `executorShapeConfigInput`<sup>Optional</sup> <a name="executorShapeConfigInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.executorShapeConfigInput"></a>

```java
public DataflowInvokeRunExecutorShapeConfig getExecutorShapeConfigInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfig">DataflowInvokeRunExecutorShapeConfig</a>

---

##### `executorShapeInput`<sup>Optional</sup> <a name="executorShapeInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.executorShapeInput"></a>

```java
public java.lang.String getExecutorShapeInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `idleTimeoutInMinutesInput`<sup>Optional</sup> <a name="idleTimeoutInMinutesInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.idleTimeoutInMinutesInput"></a>

```java
public java.lang.String getIdleTimeoutInMinutesInput();
```

- *Type:* java.lang.String

---

##### `logsBucketUriInput`<sup>Optional</sup> <a name="logsBucketUriInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.logsBucketUriInput"></a>

```java
public java.lang.String getLogsBucketUriInput();
```

- *Type:* java.lang.String

---

##### `maxDurationInMinutesInput`<sup>Optional</sup> <a name="maxDurationInMinutesInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.maxDurationInMinutesInput"></a>

```java
public java.lang.String getMaxDurationInMinutesInput();
```

- *Type:* java.lang.String

---

##### `metastoreIdInput`<sup>Optional</sup> <a name="metastoreIdInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.metastoreIdInput"></a>

```java
public java.lang.String getMetastoreIdInput();
```

- *Type:* java.lang.String

---

##### `numExecutorsInput`<sup>Optional</sup> <a name="numExecutorsInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.numExecutorsInput"></a>

```java
public java.lang.Number getNumExecutorsInput();
```

- *Type:* java.lang.Number

---

##### `opcParentRptUrlInput`<sup>Optional</sup> <a name="opcParentRptUrlInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.opcParentRptUrlInput"></a>

```java
public java.lang.String getOpcParentRptUrlInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.parametersInput"></a>

```java
public java.lang.Object getParametersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParameters">DataflowInvokeRunParameters</a>>

---

##### `poolIdInput`<sup>Optional</sup> <a name="poolIdInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.poolIdInput"></a>

```java
public java.lang.String getPoolIdInput();
```

- *Type:* java.lang.String

---

##### `sparkVersionInput`<sup>Optional</sup> <a name="sparkVersionInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.sparkVersionInput"></a>

```java
public java.lang.String getSparkVersionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeouts">DataflowInvokeRunTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `warehouseBucketUriInput`<sup>Optional</sup> <a name="warehouseBucketUriInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.warehouseBucketUriInput"></a>

```java
public java.lang.String getWarehouseBucketUriInput();
```

- *Type:* java.lang.String

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `archiveUri`<sup>Required</sup> <a name="archiveUri" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.archiveUri"></a>

```java
public java.lang.String getArchiveUri();
```

- *Type:* java.lang.String

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.arguments"></a>

```java
public java.util.List<java.lang.String> getArguments();
```

- *Type:* java.util.List<java.lang.String>

---

##### `asynchronous`<sup>Required</sup> <a name="asynchronous" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.asynchronous"></a>

```java
public java.lang.Object getAsynchronous();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.configuration"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfiguration();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `driverShape`<sup>Required</sup> <a name="driverShape" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.driverShape"></a>

```java
public java.lang.String getDriverShape();
```

- *Type:* java.lang.String

---

##### `execute`<sup>Required</sup> <a name="execute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.execute"></a>

```java
public java.lang.String getExecute();
```

- *Type:* java.lang.String

---

##### `executorShape`<sup>Required</sup> <a name="executorShape" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.executorShape"></a>

```java
public java.lang.String getExecutorShape();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `idleTimeoutInMinutes`<sup>Required</sup> <a name="idleTimeoutInMinutes" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.idleTimeoutInMinutes"></a>

```java
public java.lang.String getIdleTimeoutInMinutes();
```

- *Type:* java.lang.String

---

##### `logsBucketUri`<sup>Required</sup> <a name="logsBucketUri" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.logsBucketUri"></a>

```java
public java.lang.String getLogsBucketUri();
```

- *Type:* java.lang.String

---

##### `maxDurationInMinutes`<sup>Required</sup> <a name="maxDurationInMinutes" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.maxDurationInMinutes"></a>

```java
public java.lang.String getMaxDurationInMinutes();
```

- *Type:* java.lang.String

---

##### `metastoreId`<sup>Required</sup> <a name="metastoreId" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.metastoreId"></a>

```java
public java.lang.String getMetastoreId();
```

- *Type:* java.lang.String

---

##### `numExecutors`<sup>Required</sup> <a name="numExecutors" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.numExecutors"></a>

```java
public java.lang.Number getNumExecutors();
```

- *Type:* java.lang.Number

---

##### `opcParentRptUrl`<sup>Required</sup> <a name="opcParentRptUrl" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.opcParentRptUrl"></a>

```java
public java.lang.String getOpcParentRptUrl();
```

- *Type:* java.lang.String

---

##### `poolId`<sup>Required</sup> <a name="poolId" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.poolId"></a>

```java
public java.lang.String getPoolId();
```

- *Type:* java.lang.String

---

##### `sparkVersion`<sup>Required</sup> <a name="sparkVersion" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.sparkVersion"></a>

```java
public java.lang.String getSparkVersion();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `warehouseBucketUri`<sup>Required</sup> <a name="warehouseBucketUri" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.warehouseBucketUri"></a>

```java
public java.lang.String getWarehouseBucketUri();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataflowInvokeRunApplicationLogConfig <a name="DataflowInvokeRunApplicationLogConfig" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataflow_invoke_run.DataflowInvokeRunApplicationLogConfig;

DataflowInvokeRunApplicationLogConfig.builder()
    .logGroupId(java.lang.String)
    .logId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfig.property.logGroupId">logGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#log_group_id DataflowInvokeRun#log_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfig.property.logId">logId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#log_id DataflowInvokeRun#log_id}. |

---

##### `logGroupId`<sup>Required</sup> <a name="logGroupId" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfig.property.logGroupId"></a>

```java
public java.lang.String getLogGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#log_group_id DataflowInvokeRun#log_group_id}.

---

##### `logId`<sup>Required</sup> <a name="logId" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfig.property.logId"></a>

```java
public java.lang.String getLogId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#log_id DataflowInvokeRun#log_id}.

---

### DataflowInvokeRunConfig <a name="DataflowInvokeRunConfig" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataflow_invoke_run.DataflowInvokeRunConfig;

DataflowInvokeRunConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .compartmentId(java.lang.String)
//  .applicationId(java.lang.String)
//  .applicationLogConfig(DataflowInvokeRunApplicationLogConfig)
//  .archiveUri(java.lang.String)
//  .arguments(java.util.List<java.lang.String>)
//  .asynchronous(java.lang.Boolean)
//  .asynchronous(IResolvable)
//  .configuration(java.util.Map<java.lang.String, java.lang.String>)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .driverShape(java.lang.String)
//  .driverShapeConfig(DataflowInvokeRunDriverShapeConfig)
//  .execute(java.lang.String)
//  .executorShape(java.lang.String)
//  .executorShapeConfig(DataflowInvokeRunExecutorShapeConfig)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .idleTimeoutInMinutes(java.lang.String)
//  .logsBucketUri(java.lang.String)
//  .maxDurationInMinutes(java.lang.String)
//  .metastoreId(java.lang.String)
//  .numExecutors(java.lang.Number)
//  .opcParentRptUrl(java.lang.String)
//  .parameters(IResolvable)
//  .parameters(java.util.List<DataflowInvokeRunParameters>)
//  .poolId(java.lang.String)
//  .sparkVersion(java.lang.String)
//  .timeouts(DataflowInvokeRunTimeouts)
//  .type(java.lang.String)
//  .warehouseBucketUri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#compartment_id DataflowInvokeRun#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#application_id DataflowInvokeRun#application_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.applicationLogConfig">applicationLogConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfig">DataflowInvokeRunApplicationLogConfig</a></code> | application_log_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.archiveUri">archiveUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#archive_uri DataflowInvokeRun#archive_uri}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.arguments">arguments</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#arguments DataflowInvokeRun#arguments}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.asynchronous">asynchronous</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#asynchronous DataflowInvokeRun#asynchronous}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.configuration">configuration</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#configuration DataflowInvokeRun#configuration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#defined_tags DataflowInvokeRun#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#display_name DataflowInvokeRun#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.driverShape">driverShape</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#driver_shape DataflowInvokeRun#driver_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.driverShapeConfig">driverShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfig">DataflowInvokeRunDriverShapeConfig</a></code> | driver_shape_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.execute">execute</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#execute DataflowInvokeRun#execute}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.executorShape">executorShape</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#executor_shape DataflowInvokeRun#executor_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.executorShapeConfig">executorShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfig">DataflowInvokeRunExecutorShapeConfig</a></code> | executor_shape_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#freeform_tags DataflowInvokeRun#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#id DataflowInvokeRun#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.idleTimeoutInMinutes">idleTimeoutInMinutes</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#idle_timeout_in_minutes DataflowInvokeRun#idle_timeout_in_minutes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.logsBucketUri">logsBucketUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#logs_bucket_uri DataflowInvokeRun#logs_bucket_uri}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.maxDurationInMinutes">maxDurationInMinutes</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#max_duration_in_minutes DataflowInvokeRun#max_duration_in_minutes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.metastoreId">metastoreId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#metastore_id DataflowInvokeRun#metastore_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.numExecutors">numExecutors</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#num_executors DataflowInvokeRun#num_executors}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.opcParentRptUrl">opcParentRptUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#opc_parent_rpt_url DataflowInvokeRun#opc_parent_rpt_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.parameters">parameters</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParameters">DataflowInvokeRunParameters</a>></code> | parameters block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.poolId">poolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#pool_id DataflowInvokeRun#pool_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.sparkVersion">sparkVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#spark_version DataflowInvokeRun#spark_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeouts">DataflowInvokeRunTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#type DataflowInvokeRun#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.warehouseBucketUri">warehouseBucketUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#warehouse_bucket_uri DataflowInvokeRun#warehouse_bucket_uri}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#compartment_id DataflowInvokeRun#compartment_id}.

---

##### `applicationId`<sup>Optional</sup> <a name="applicationId" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#application_id DataflowInvokeRun#application_id}.

---

##### `applicationLogConfig`<sup>Optional</sup> <a name="applicationLogConfig" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.applicationLogConfig"></a>

```java
public DataflowInvokeRunApplicationLogConfig getApplicationLogConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfig">DataflowInvokeRunApplicationLogConfig</a>

application_log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#application_log_config DataflowInvokeRun#application_log_config}

---

##### `archiveUri`<sup>Optional</sup> <a name="archiveUri" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.archiveUri"></a>

```java
public java.lang.String getArchiveUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#archive_uri DataflowInvokeRun#archive_uri}.

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.arguments"></a>

```java
public java.util.List<java.lang.String> getArguments();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#arguments DataflowInvokeRun#arguments}.

---

##### `asynchronous`<sup>Optional</sup> <a name="asynchronous" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.asynchronous"></a>

```java
public java.lang.Object getAsynchronous();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#asynchronous DataflowInvokeRun#asynchronous}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.configuration"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfiguration();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#configuration DataflowInvokeRun#configuration}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#defined_tags DataflowInvokeRun#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#display_name DataflowInvokeRun#display_name}.

---

##### `driverShape`<sup>Optional</sup> <a name="driverShape" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.driverShape"></a>

```java
public java.lang.String getDriverShape();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#driver_shape DataflowInvokeRun#driver_shape}.

---

##### `driverShapeConfig`<sup>Optional</sup> <a name="driverShapeConfig" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.driverShapeConfig"></a>

```java
public DataflowInvokeRunDriverShapeConfig getDriverShapeConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfig">DataflowInvokeRunDriverShapeConfig</a>

driver_shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#driver_shape_config DataflowInvokeRun#driver_shape_config}

---

##### `execute`<sup>Optional</sup> <a name="execute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.execute"></a>

```java
public java.lang.String getExecute();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#execute DataflowInvokeRun#execute}.

---

##### `executorShape`<sup>Optional</sup> <a name="executorShape" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.executorShape"></a>

```java
public java.lang.String getExecutorShape();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#executor_shape DataflowInvokeRun#executor_shape}.

---

##### `executorShapeConfig`<sup>Optional</sup> <a name="executorShapeConfig" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.executorShapeConfig"></a>

```java
public DataflowInvokeRunExecutorShapeConfig getExecutorShapeConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfig">DataflowInvokeRunExecutorShapeConfig</a>

executor_shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#executor_shape_config DataflowInvokeRun#executor_shape_config}

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#freeform_tags DataflowInvokeRun#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#id DataflowInvokeRun#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idleTimeoutInMinutes`<sup>Optional</sup> <a name="idleTimeoutInMinutes" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.idleTimeoutInMinutes"></a>

```java
public java.lang.String getIdleTimeoutInMinutes();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#idle_timeout_in_minutes DataflowInvokeRun#idle_timeout_in_minutes}.

---

##### `logsBucketUri`<sup>Optional</sup> <a name="logsBucketUri" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.logsBucketUri"></a>

```java
public java.lang.String getLogsBucketUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#logs_bucket_uri DataflowInvokeRun#logs_bucket_uri}.

---

##### `maxDurationInMinutes`<sup>Optional</sup> <a name="maxDurationInMinutes" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.maxDurationInMinutes"></a>

```java
public java.lang.String getMaxDurationInMinutes();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#max_duration_in_minutes DataflowInvokeRun#max_duration_in_minutes}.

---

##### `metastoreId`<sup>Optional</sup> <a name="metastoreId" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.metastoreId"></a>

```java
public java.lang.String getMetastoreId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#metastore_id DataflowInvokeRun#metastore_id}.

---

##### `numExecutors`<sup>Optional</sup> <a name="numExecutors" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.numExecutors"></a>

```java
public java.lang.Number getNumExecutors();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#num_executors DataflowInvokeRun#num_executors}.

---

##### `opcParentRptUrl`<sup>Optional</sup> <a name="opcParentRptUrl" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.opcParentRptUrl"></a>

```java
public java.lang.String getOpcParentRptUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#opc_parent_rpt_url DataflowInvokeRun#opc_parent_rpt_url}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.parameters"></a>

```java
public java.lang.Object getParameters();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParameters">DataflowInvokeRunParameters</a>>

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#parameters DataflowInvokeRun#parameters}

---

##### `poolId`<sup>Optional</sup> <a name="poolId" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.poolId"></a>

```java
public java.lang.String getPoolId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#pool_id DataflowInvokeRun#pool_id}.

---

##### `sparkVersion`<sup>Optional</sup> <a name="sparkVersion" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.sparkVersion"></a>

```java
public java.lang.String getSparkVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#spark_version DataflowInvokeRun#spark_version}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.timeouts"></a>

```java
public DataflowInvokeRunTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeouts">DataflowInvokeRunTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#timeouts DataflowInvokeRun#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#type DataflowInvokeRun#type}.

---

##### `warehouseBucketUri`<sup>Optional</sup> <a name="warehouseBucketUri" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.warehouseBucketUri"></a>

```java
public java.lang.String getWarehouseBucketUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#warehouse_bucket_uri DataflowInvokeRun#warehouse_bucket_uri}.

---

### DataflowInvokeRunDriverShapeConfig <a name="DataflowInvokeRunDriverShapeConfig" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataflow_invoke_run.DataflowInvokeRunDriverShapeConfig;

DataflowInvokeRunDriverShapeConfig.builder()
//  .memoryInGbs(java.lang.Number)
//  .ocpus(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfig.property.memoryInGbs">memoryInGbs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#memory_in_gbs DataflowInvokeRun#memory_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfig.property.ocpus">ocpus</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#ocpus DataflowInvokeRun#ocpus}. |

---

##### `memoryInGbs`<sup>Optional</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfig.property.memoryInGbs"></a>

```java
public java.lang.Number getMemoryInGbs();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#memory_in_gbs DataflowInvokeRun#memory_in_gbs}.

---

##### `ocpus`<sup>Optional</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfig.property.ocpus"></a>

```java
public java.lang.Number getOcpus();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#ocpus DataflowInvokeRun#ocpus}.

---

### DataflowInvokeRunExecutorShapeConfig <a name="DataflowInvokeRunExecutorShapeConfig" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataflow_invoke_run.DataflowInvokeRunExecutorShapeConfig;

DataflowInvokeRunExecutorShapeConfig.builder()
//  .memoryInGbs(java.lang.Number)
//  .ocpus(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfig.property.memoryInGbs">memoryInGbs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#memory_in_gbs DataflowInvokeRun#memory_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfig.property.ocpus">ocpus</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#ocpus DataflowInvokeRun#ocpus}. |

---

##### `memoryInGbs`<sup>Optional</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfig.property.memoryInGbs"></a>

```java
public java.lang.Number getMemoryInGbs();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#memory_in_gbs DataflowInvokeRun#memory_in_gbs}.

---

##### `ocpus`<sup>Optional</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfig.property.ocpus"></a>

```java
public java.lang.Number getOcpus();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#ocpus DataflowInvokeRun#ocpus}.

---

### DataflowInvokeRunParameters <a name="DataflowInvokeRunParameters" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParameters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataflow_invoke_run.DataflowInvokeRunParameters;

DataflowInvokeRunParameters.builder()
    .name(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParameters.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#name DataflowInvokeRun#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParameters.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#value DataflowInvokeRun#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParameters.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#name DataflowInvokeRun#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParameters.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#value DataflowInvokeRun#value}.

---

### DataflowInvokeRunTimeouts <a name="DataflowInvokeRunTimeouts" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataflow_invoke_run.DataflowInvokeRunTimeouts;

DataflowInvokeRunTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#create DataflowInvokeRun#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#delete DataflowInvokeRun#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#update DataflowInvokeRun#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#create DataflowInvokeRun#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#delete DataflowInvokeRun#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#update DataflowInvokeRun#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataflowInvokeRunApplicationLogConfigOutputReference <a name="DataflowInvokeRunApplicationLogConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataflow_invoke_run.DataflowInvokeRunApplicationLogConfigOutputReference;

new DataflowInvokeRunApplicationLogConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.property.logGroupIdInput">logGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.property.logIdInput">logIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.property.logGroupId">logGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.property.logId">logId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfig">DataflowInvokeRunApplicationLogConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `logGroupIdInput`<sup>Optional</sup> <a name="logGroupIdInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.property.logGroupIdInput"></a>

```java
public java.lang.String getLogGroupIdInput();
```

- *Type:* java.lang.String

---

##### `logIdInput`<sup>Optional</sup> <a name="logIdInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.property.logIdInput"></a>

```java
public java.lang.String getLogIdInput();
```

- *Type:* java.lang.String

---

##### `logGroupId`<sup>Required</sup> <a name="logGroupId" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.property.logGroupId"></a>

```java
public java.lang.String getLogGroupId();
```

- *Type:* java.lang.String

---

##### `logId`<sup>Required</sup> <a name="logId" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.property.logId"></a>

```java
public java.lang.String getLogId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.property.internalValue"></a>

```java
public DataflowInvokeRunApplicationLogConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfig">DataflowInvokeRunApplicationLogConfig</a>

---


### DataflowInvokeRunDriverShapeConfigOutputReference <a name="DataflowInvokeRunDriverShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataflow_invoke_run.DataflowInvokeRunDriverShapeConfigOutputReference;

new DataflowInvokeRunDriverShapeConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.resetMemoryInGbs">resetMemoryInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.resetOcpus">resetOcpus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMemoryInGbs` <a name="resetMemoryInGbs" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.resetMemoryInGbs"></a>

```java
public void resetMemoryInGbs()
```

##### `resetOcpus` <a name="resetOcpus" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.resetOcpus"></a>

```java
public void resetOcpus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.property.memoryInGbsInput">memoryInGbsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.property.ocpusInput">ocpusInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.property.memoryInGbs">memoryInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfig">DataflowInvokeRunDriverShapeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `memoryInGbsInput`<sup>Optional</sup> <a name="memoryInGbsInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.property.memoryInGbsInput"></a>

```java
public java.lang.Number getMemoryInGbsInput();
```

- *Type:* java.lang.Number

---

##### `ocpusInput`<sup>Optional</sup> <a name="ocpusInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.property.ocpusInput"></a>

```java
public java.lang.Number getOcpusInput();
```

- *Type:* java.lang.Number

---

##### `memoryInGbs`<sup>Required</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.property.memoryInGbs"></a>

```java
public java.lang.Number getMemoryInGbs();
```

- *Type:* java.lang.Number

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.property.ocpus"></a>

```java
public java.lang.Number getOcpus();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.property.internalValue"></a>

```java
public DataflowInvokeRunDriverShapeConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfig">DataflowInvokeRunDriverShapeConfig</a>

---


### DataflowInvokeRunExecutorShapeConfigOutputReference <a name="DataflowInvokeRunExecutorShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataflow_invoke_run.DataflowInvokeRunExecutorShapeConfigOutputReference;

new DataflowInvokeRunExecutorShapeConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.resetMemoryInGbs">resetMemoryInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.resetOcpus">resetOcpus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMemoryInGbs` <a name="resetMemoryInGbs" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.resetMemoryInGbs"></a>

```java
public void resetMemoryInGbs()
```

##### `resetOcpus` <a name="resetOcpus" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.resetOcpus"></a>

```java
public void resetOcpus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.property.memoryInGbsInput">memoryInGbsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.property.ocpusInput">ocpusInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.property.memoryInGbs">memoryInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfig">DataflowInvokeRunExecutorShapeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `memoryInGbsInput`<sup>Optional</sup> <a name="memoryInGbsInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.property.memoryInGbsInput"></a>

```java
public java.lang.Number getMemoryInGbsInput();
```

- *Type:* java.lang.Number

---

##### `ocpusInput`<sup>Optional</sup> <a name="ocpusInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.property.ocpusInput"></a>

```java
public java.lang.Number getOcpusInput();
```

- *Type:* java.lang.Number

---

##### `memoryInGbs`<sup>Required</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.property.memoryInGbs"></a>

```java
public java.lang.Number getMemoryInGbs();
```

- *Type:* java.lang.Number

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.property.ocpus"></a>

```java
public java.lang.Number getOcpus();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.property.internalValue"></a>

```java
public DataflowInvokeRunExecutorShapeConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfig">DataflowInvokeRunExecutorShapeConfig</a>

---


### DataflowInvokeRunParametersList <a name="DataflowInvokeRunParametersList" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataflow_invoke_run.DataflowInvokeRunParametersList;

new DataflowInvokeRunParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.get"></a>

```java
public DataflowInvokeRunParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParameters">DataflowInvokeRunParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParameters">DataflowInvokeRunParameters</a>>

---


### DataflowInvokeRunParametersOutputReference <a name="DataflowInvokeRunParametersOutputReference" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataflow_invoke_run.DataflowInvokeRunParametersOutputReference;

new DataflowInvokeRunParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParameters">DataflowInvokeRunParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParameters">DataflowInvokeRunParameters</a>

---


### DataflowInvokeRunTimeoutsOutputReference <a name="DataflowInvokeRunTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataflow_invoke_run.DataflowInvokeRunTimeoutsOutputReference;

new DataflowInvokeRunTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeouts">DataflowInvokeRunTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeouts">DataflowInvokeRunTimeouts</a>

---



