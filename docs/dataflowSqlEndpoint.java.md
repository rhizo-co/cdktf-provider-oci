# `dataflowSqlEndpoint` Submodule <a name="`dataflowSqlEndpoint` Submodule" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataflowSqlEndpoint <a name="DataflowSqlEndpoint" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint oci_dataflow_sql_endpoint}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataflow_sql_endpoint.DataflowSqlEndpoint;

DataflowSqlEndpoint.Builder.create(Construct scope, java.lang.String id)
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
    .displayName(java.lang.String)
    .driverShape(java.lang.String)
    .executorShape(java.lang.String)
    .maxExecutorCount(java.lang.Number)
    .metastoreId(java.lang.String)
    .minExecutorCount(java.lang.Number)
    .networkConfiguration(DataflowSqlEndpointNetworkConfiguration)
    .sqlEndpointVersion(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .driverShapeConfig(DataflowSqlEndpointDriverShapeConfig)
//  .executorShapeConfig(DataflowSqlEndpointExecutorShapeConfig)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .sparkAdvancedConfigurations(java.util.Map<java.lang.String, java.lang.String>)
//  .state(java.lang.String)
//  .timeouts(DataflowSqlEndpointTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#compartment_id DataflowSqlEndpoint#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#display_name DataflowSqlEndpoint#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.driverShape">driverShape</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#driver_shape DataflowSqlEndpoint#driver_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.executorShape">executorShape</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#executor_shape DataflowSqlEndpoint#executor_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.maxExecutorCount">maxExecutorCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#max_executor_count DataflowSqlEndpoint#max_executor_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.metastoreId">metastoreId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#metastore_id DataflowSqlEndpoint#metastore_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.minExecutorCount">minExecutorCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#min_executor_count DataflowSqlEndpoint#min_executor_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.networkConfiguration">networkConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfiguration">DataflowSqlEndpointNetworkConfiguration</a></code> | network_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.sqlEndpointVersion">sqlEndpointVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#sql_endpoint_version DataflowSqlEndpoint#sql_endpoint_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#defined_tags DataflowSqlEndpoint#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#description DataflowSqlEndpoint#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.driverShapeConfig">driverShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfig">DataflowSqlEndpointDriverShapeConfig</a></code> | driver_shape_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.executorShapeConfig">executorShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfig">DataflowSqlEndpointExecutorShapeConfig</a></code> | executor_shape_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#freeform_tags DataflowSqlEndpoint#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#id DataflowSqlEndpoint#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.sparkAdvancedConfigurations">sparkAdvancedConfigurations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#spark_advanced_configurations DataflowSqlEndpoint#spark_advanced_configurations}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#state DataflowSqlEndpoint#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeouts">DataflowSqlEndpointTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#compartment_id DataflowSqlEndpoint#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#display_name DataflowSqlEndpoint#display_name}.

---

##### `driverShape`<sup>Required</sup> <a name="driverShape" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.driverShape"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#driver_shape DataflowSqlEndpoint#driver_shape}.

---

##### `executorShape`<sup>Required</sup> <a name="executorShape" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.executorShape"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#executor_shape DataflowSqlEndpoint#executor_shape}.

---

##### `maxExecutorCount`<sup>Required</sup> <a name="maxExecutorCount" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.maxExecutorCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#max_executor_count DataflowSqlEndpoint#max_executor_count}.

---

##### `metastoreId`<sup>Required</sup> <a name="metastoreId" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.metastoreId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#metastore_id DataflowSqlEndpoint#metastore_id}.

---

##### `minExecutorCount`<sup>Required</sup> <a name="minExecutorCount" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.minExecutorCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#min_executor_count DataflowSqlEndpoint#min_executor_count}.

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.networkConfiguration"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfiguration">DataflowSqlEndpointNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#network_configuration DataflowSqlEndpoint#network_configuration}

---

##### `sqlEndpointVersion`<sup>Required</sup> <a name="sqlEndpointVersion" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.sqlEndpointVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#sql_endpoint_version DataflowSqlEndpoint#sql_endpoint_version}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#defined_tags DataflowSqlEndpoint#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#description DataflowSqlEndpoint#description}.

---

##### `driverShapeConfig`<sup>Optional</sup> <a name="driverShapeConfig" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.driverShapeConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfig">DataflowSqlEndpointDriverShapeConfig</a>

driver_shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#driver_shape_config DataflowSqlEndpoint#driver_shape_config}

---

##### `executorShapeConfig`<sup>Optional</sup> <a name="executorShapeConfig" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.executorShapeConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfig">DataflowSqlEndpointExecutorShapeConfig</a>

executor_shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#executor_shape_config DataflowSqlEndpoint#executor_shape_config}

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#freeform_tags DataflowSqlEndpoint#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#id DataflowSqlEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sparkAdvancedConfigurations`<sup>Optional</sup> <a name="sparkAdvancedConfigurations" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.sparkAdvancedConfigurations"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#spark_advanced_configurations DataflowSqlEndpoint#spark_advanced_configurations}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#state DataflowSqlEndpoint#state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeouts">DataflowSqlEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#timeouts DataflowSqlEndpoint#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.putDriverShapeConfig">putDriverShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.putExecutorShapeConfig">putExecutorShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.putNetworkConfiguration">putNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.resetDriverShapeConfig">resetDriverShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.resetExecutorShapeConfig">resetExecutorShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.resetSparkAdvancedConfigurations">resetSparkAdvancedConfigurations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDriverShapeConfig` <a name="putDriverShapeConfig" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.putDriverShapeConfig"></a>

```java
public void putDriverShapeConfig(DataflowSqlEndpointDriverShapeConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.putDriverShapeConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfig">DataflowSqlEndpointDriverShapeConfig</a>

---

##### `putExecutorShapeConfig` <a name="putExecutorShapeConfig" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.putExecutorShapeConfig"></a>

```java
public void putExecutorShapeConfig(DataflowSqlEndpointExecutorShapeConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.putExecutorShapeConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfig">DataflowSqlEndpointExecutorShapeConfig</a>

---

##### `putNetworkConfiguration` <a name="putNetworkConfiguration" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.putNetworkConfiguration"></a>

```java
public void putNetworkConfiguration(DataflowSqlEndpointNetworkConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfiguration">DataflowSqlEndpointNetworkConfiguration</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.putTimeouts"></a>

```java
public void putTimeouts(DataflowSqlEndpointTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeouts">DataflowSqlEndpointTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDriverShapeConfig` <a name="resetDriverShapeConfig" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.resetDriverShapeConfig"></a>

```java
public void resetDriverShapeConfig()
```

##### `resetExecutorShapeConfig` <a name="resetExecutorShapeConfig" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.resetExecutorShapeConfig"></a>

```java
public void resetExecutorShapeConfig()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.resetId"></a>

```java
public void resetId()
```

##### `resetSparkAdvancedConfigurations` <a name="resetSparkAdvancedConfigurations" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.resetSparkAdvancedConfigurations"></a>

```java
public void resetSparkAdvancedConfigurations()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.resetState"></a>

```java
public void resetState()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataflowSqlEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataflow_sql_endpoint.DataflowSqlEndpoint;

DataflowSqlEndpoint.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataflow_sql_endpoint.DataflowSqlEndpoint;

DataflowSqlEndpoint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataflow_sql_endpoint.DataflowSqlEndpoint;

DataflowSqlEndpoint.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataflow_sql_endpoint.DataflowSqlEndpoint;

DataflowSqlEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataflowSqlEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataflowSqlEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataflowSqlEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataflowSqlEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataflowSqlEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.driverShapeConfig">driverShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference">DataflowSqlEndpointDriverShapeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.executorShapeConfig">executorShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference">DataflowSqlEndpointExecutorShapeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.jdbcEndpointUrl">jdbcEndpointUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.lakeId">lakeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference">DataflowSqlEndpointNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.stateMessage">stateMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference">DataflowSqlEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.warehouseBucketUri">warehouseBucketUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.driverShapeConfigInput">driverShapeConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfig">DataflowSqlEndpointDriverShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.driverShapeInput">driverShapeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.executorShapeConfigInput">executorShapeConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfig">DataflowSqlEndpointExecutorShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.executorShapeInput">executorShapeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.maxExecutorCountInput">maxExecutorCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.metastoreIdInput">metastoreIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.minExecutorCountInput">minExecutorCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.networkConfigurationInput">networkConfigurationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfiguration">DataflowSqlEndpointNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.sparkAdvancedConfigurationsInput">sparkAdvancedConfigurationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.sqlEndpointVersionInput">sqlEndpointVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeouts">DataflowSqlEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.driverShape">driverShape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.executorShape">executorShape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.maxExecutorCount">maxExecutorCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.metastoreId">metastoreId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.minExecutorCount">minExecutorCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.sparkAdvancedConfigurations">sparkAdvancedConfigurations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.sqlEndpointVersion">sqlEndpointVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `driverShapeConfig`<sup>Required</sup> <a name="driverShapeConfig" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.driverShapeConfig"></a>

```java
public DataflowSqlEndpointDriverShapeConfigOutputReference getDriverShapeConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference">DataflowSqlEndpointDriverShapeConfigOutputReference</a>

---

##### `executorShapeConfig`<sup>Required</sup> <a name="executorShapeConfig" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.executorShapeConfig"></a>

```java
public DataflowSqlEndpointExecutorShapeConfigOutputReference getExecutorShapeConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference">DataflowSqlEndpointExecutorShapeConfigOutputReference</a>

---

##### `jdbcEndpointUrl`<sup>Required</sup> <a name="jdbcEndpointUrl" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.jdbcEndpointUrl"></a>

```java
public java.lang.String getJdbcEndpointUrl();
```

- *Type:* java.lang.String

---

##### `lakeId`<sup>Required</sup> <a name="lakeId" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.lakeId"></a>

```java
public java.lang.String getLakeId();
```

- *Type:* java.lang.String

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.networkConfiguration"></a>

```java
public DataflowSqlEndpointNetworkConfigurationOutputReference getNetworkConfiguration();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference">DataflowSqlEndpointNetworkConfigurationOutputReference</a>

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.stateMessage"></a>

```java
public java.lang.String getStateMessage();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.timeouts"></a>

```java
public DataflowSqlEndpointTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference">DataflowSqlEndpointTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `warehouseBucketUri`<sup>Required</sup> <a name="warehouseBucketUri" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.warehouseBucketUri"></a>

```java
public java.lang.String getWarehouseBucketUri();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `driverShapeConfigInput`<sup>Optional</sup> <a name="driverShapeConfigInput" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.driverShapeConfigInput"></a>

```java
public DataflowSqlEndpointDriverShapeConfig getDriverShapeConfigInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfig">DataflowSqlEndpointDriverShapeConfig</a>

---

##### `driverShapeInput`<sup>Optional</sup> <a name="driverShapeInput" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.driverShapeInput"></a>

```java
public java.lang.String getDriverShapeInput();
```

- *Type:* java.lang.String

---

##### `executorShapeConfigInput`<sup>Optional</sup> <a name="executorShapeConfigInput" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.executorShapeConfigInput"></a>

```java
public DataflowSqlEndpointExecutorShapeConfig getExecutorShapeConfigInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfig">DataflowSqlEndpointExecutorShapeConfig</a>

---

##### `executorShapeInput`<sup>Optional</sup> <a name="executorShapeInput" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.executorShapeInput"></a>

```java
public java.lang.String getExecutorShapeInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `maxExecutorCountInput`<sup>Optional</sup> <a name="maxExecutorCountInput" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.maxExecutorCountInput"></a>

```java
public java.lang.Number getMaxExecutorCountInput();
```

- *Type:* java.lang.Number

---

##### `metastoreIdInput`<sup>Optional</sup> <a name="metastoreIdInput" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.metastoreIdInput"></a>

```java
public java.lang.String getMetastoreIdInput();
```

- *Type:* java.lang.String

---

##### `minExecutorCountInput`<sup>Optional</sup> <a name="minExecutorCountInput" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.minExecutorCountInput"></a>

```java
public java.lang.Number getMinExecutorCountInput();
```

- *Type:* java.lang.Number

---

##### `networkConfigurationInput`<sup>Optional</sup> <a name="networkConfigurationInput" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.networkConfigurationInput"></a>

```java
public DataflowSqlEndpointNetworkConfiguration getNetworkConfigurationInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfiguration">DataflowSqlEndpointNetworkConfiguration</a>

---

##### `sparkAdvancedConfigurationsInput`<sup>Optional</sup> <a name="sparkAdvancedConfigurationsInput" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.sparkAdvancedConfigurationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSparkAdvancedConfigurationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `sqlEndpointVersionInput`<sup>Optional</sup> <a name="sqlEndpointVersionInput" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.sqlEndpointVersionInput"></a>

```java
public java.lang.String getSqlEndpointVersionInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeouts">DataflowSqlEndpointTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `driverShape`<sup>Required</sup> <a name="driverShape" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.driverShape"></a>

```java
public java.lang.String getDriverShape();
```

- *Type:* java.lang.String

---

##### `executorShape`<sup>Required</sup> <a name="executorShape" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.executorShape"></a>

```java
public java.lang.String getExecutorShape();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `maxExecutorCount`<sup>Required</sup> <a name="maxExecutorCount" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.maxExecutorCount"></a>

```java
public java.lang.Number getMaxExecutorCount();
```

- *Type:* java.lang.Number

---

##### `metastoreId`<sup>Required</sup> <a name="metastoreId" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.metastoreId"></a>

```java
public java.lang.String getMetastoreId();
```

- *Type:* java.lang.String

---

##### `minExecutorCount`<sup>Required</sup> <a name="minExecutorCount" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.minExecutorCount"></a>

```java
public java.lang.Number getMinExecutorCount();
```

- *Type:* java.lang.Number

---

##### `sparkAdvancedConfigurations`<sup>Required</sup> <a name="sparkAdvancedConfigurations" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.sparkAdvancedConfigurations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSparkAdvancedConfigurations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `sqlEndpointVersion`<sup>Required</sup> <a name="sqlEndpointVersion" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.sqlEndpointVersion"></a>

```java
public java.lang.String getSqlEndpointVersion();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataflowSqlEndpointConfig <a name="DataflowSqlEndpointConfig" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataflow_sql_endpoint.DataflowSqlEndpointConfig;

DataflowSqlEndpointConfig.builder()
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
    .displayName(java.lang.String)
    .driverShape(java.lang.String)
    .executorShape(java.lang.String)
    .maxExecutorCount(java.lang.Number)
    .metastoreId(java.lang.String)
    .minExecutorCount(java.lang.Number)
    .networkConfiguration(DataflowSqlEndpointNetworkConfiguration)
    .sqlEndpointVersion(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .driverShapeConfig(DataflowSqlEndpointDriverShapeConfig)
//  .executorShapeConfig(DataflowSqlEndpointExecutorShapeConfig)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .sparkAdvancedConfigurations(java.util.Map<java.lang.String, java.lang.String>)
//  .state(java.lang.String)
//  .timeouts(DataflowSqlEndpointTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#compartment_id DataflowSqlEndpoint#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#display_name DataflowSqlEndpoint#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.driverShape">driverShape</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#driver_shape DataflowSqlEndpoint#driver_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.executorShape">executorShape</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#executor_shape DataflowSqlEndpoint#executor_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.maxExecutorCount">maxExecutorCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#max_executor_count DataflowSqlEndpoint#max_executor_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.metastoreId">metastoreId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#metastore_id DataflowSqlEndpoint#metastore_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.minExecutorCount">minExecutorCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#min_executor_count DataflowSqlEndpoint#min_executor_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfiguration">DataflowSqlEndpointNetworkConfiguration</a></code> | network_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.sqlEndpointVersion">sqlEndpointVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#sql_endpoint_version DataflowSqlEndpoint#sql_endpoint_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#defined_tags DataflowSqlEndpoint#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#description DataflowSqlEndpoint#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.driverShapeConfig">driverShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfig">DataflowSqlEndpointDriverShapeConfig</a></code> | driver_shape_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.executorShapeConfig">executorShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfig">DataflowSqlEndpointExecutorShapeConfig</a></code> | executor_shape_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#freeform_tags DataflowSqlEndpoint#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#id DataflowSqlEndpoint#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.sparkAdvancedConfigurations">sparkAdvancedConfigurations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#spark_advanced_configurations DataflowSqlEndpoint#spark_advanced_configurations}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#state DataflowSqlEndpoint#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeouts">DataflowSqlEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#compartment_id DataflowSqlEndpoint#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#display_name DataflowSqlEndpoint#display_name}.

---

##### `driverShape`<sup>Required</sup> <a name="driverShape" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.driverShape"></a>

```java
public java.lang.String getDriverShape();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#driver_shape DataflowSqlEndpoint#driver_shape}.

---

##### `executorShape`<sup>Required</sup> <a name="executorShape" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.executorShape"></a>

```java
public java.lang.String getExecutorShape();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#executor_shape DataflowSqlEndpoint#executor_shape}.

---

##### `maxExecutorCount`<sup>Required</sup> <a name="maxExecutorCount" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.maxExecutorCount"></a>

```java
public java.lang.Number getMaxExecutorCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#max_executor_count DataflowSqlEndpoint#max_executor_count}.

---

##### `metastoreId`<sup>Required</sup> <a name="metastoreId" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.metastoreId"></a>

```java
public java.lang.String getMetastoreId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#metastore_id DataflowSqlEndpoint#metastore_id}.

---

##### `minExecutorCount`<sup>Required</sup> <a name="minExecutorCount" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.minExecutorCount"></a>

```java
public java.lang.Number getMinExecutorCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#min_executor_count DataflowSqlEndpoint#min_executor_count}.

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.networkConfiguration"></a>

```java
public DataflowSqlEndpointNetworkConfiguration getNetworkConfiguration();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfiguration">DataflowSqlEndpointNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#network_configuration DataflowSqlEndpoint#network_configuration}

---

##### `sqlEndpointVersion`<sup>Required</sup> <a name="sqlEndpointVersion" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.sqlEndpointVersion"></a>

```java
public java.lang.String getSqlEndpointVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#sql_endpoint_version DataflowSqlEndpoint#sql_endpoint_version}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#defined_tags DataflowSqlEndpoint#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#description DataflowSqlEndpoint#description}.

---

##### `driverShapeConfig`<sup>Optional</sup> <a name="driverShapeConfig" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.driverShapeConfig"></a>

```java
public DataflowSqlEndpointDriverShapeConfig getDriverShapeConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfig">DataflowSqlEndpointDriverShapeConfig</a>

driver_shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#driver_shape_config DataflowSqlEndpoint#driver_shape_config}

---

##### `executorShapeConfig`<sup>Optional</sup> <a name="executorShapeConfig" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.executorShapeConfig"></a>

```java
public DataflowSqlEndpointExecutorShapeConfig getExecutorShapeConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfig">DataflowSqlEndpointExecutorShapeConfig</a>

executor_shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#executor_shape_config DataflowSqlEndpoint#executor_shape_config}

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#freeform_tags DataflowSqlEndpoint#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#id DataflowSqlEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sparkAdvancedConfigurations`<sup>Optional</sup> <a name="sparkAdvancedConfigurations" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.sparkAdvancedConfigurations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSparkAdvancedConfigurations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#spark_advanced_configurations DataflowSqlEndpoint#spark_advanced_configurations}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#state DataflowSqlEndpoint#state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.timeouts"></a>

```java
public DataflowSqlEndpointTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeouts">DataflowSqlEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#timeouts DataflowSqlEndpoint#timeouts}

---

### DataflowSqlEndpointDriverShapeConfig <a name="DataflowSqlEndpointDriverShapeConfig" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataflow_sql_endpoint.DataflowSqlEndpointDriverShapeConfig;

DataflowSqlEndpointDriverShapeConfig.builder()
//  .memoryInGbs(java.lang.Number)
//  .ocpus(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfig.property.memoryInGbs">memoryInGbs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#memory_in_gbs DataflowSqlEndpoint#memory_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfig.property.ocpus">ocpus</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#ocpus DataflowSqlEndpoint#ocpus}. |

---

##### `memoryInGbs`<sup>Optional</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfig.property.memoryInGbs"></a>

```java
public java.lang.Number getMemoryInGbs();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#memory_in_gbs DataflowSqlEndpoint#memory_in_gbs}.

---

##### `ocpus`<sup>Optional</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfig.property.ocpus"></a>

```java
public java.lang.Number getOcpus();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#ocpus DataflowSqlEndpoint#ocpus}.

---

### DataflowSqlEndpointExecutorShapeConfig <a name="DataflowSqlEndpointExecutorShapeConfig" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataflow_sql_endpoint.DataflowSqlEndpointExecutorShapeConfig;

DataflowSqlEndpointExecutorShapeConfig.builder()
//  .memoryInGbs(java.lang.Number)
//  .ocpus(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfig.property.memoryInGbs">memoryInGbs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#memory_in_gbs DataflowSqlEndpoint#memory_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfig.property.ocpus">ocpus</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#ocpus DataflowSqlEndpoint#ocpus}. |

---

##### `memoryInGbs`<sup>Optional</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfig.property.memoryInGbs"></a>

```java
public java.lang.Number getMemoryInGbs();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#memory_in_gbs DataflowSqlEndpoint#memory_in_gbs}.

---

##### `ocpus`<sup>Optional</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfig.property.ocpus"></a>

```java
public java.lang.Number getOcpus();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#ocpus DataflowSqlEndpoint#ocpus}.

---

### DataflowSqlEndpointNetworkConfiguration <a name="DataflowSqlEndpointNetworkConfiguration" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataflow_sql_endpoint.DataflowSqlEndpointNetworkConfiguration;

DataflowSqlEndpointNetworkConfiguration.builder()
    .networkType(java.lang.String)
//  .accessControlRules(IResolvable)
//  .accessControlRules(java.util.List<DataflowSqlEndpointNetworkConfigurationAccessControlRules>)
//  .hostNamePrefix(java.lang.String)
//  .subnetId(java.lang.String)
//  .vcnId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfiguration.property.networkType">networkType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#network_type DataflowSqlEndpoint#network_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfiguration.property.accessControlRules">accessControlRules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRules">DataflowSqlEndpointNetworkConfigurationAccessControlRules</a>></code> | access_control_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfiguration.property.hostNamePrefix">hostNamePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#host_name_prefix DataflowSqlEndpoint#host_name_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfiguration.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#subnet_id DataflowSqlEndpoint#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfiguration.property.vcnId">vcnId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#vcn_id DataflowSqlEndpoint#vcn_id}. |

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfiguration.property.networkType"></a>

```java
public java.lang.String getNetworkType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#network_type DataflowSqlEndpoint#network_type}.

---

##### `accessControlRules`<sup>Optional</sup> <a name="accessControlRules" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfiguration.property.accessControlRules"></a>

```java
public java.lang.Object getAccessControlRules();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRules">DataflowSqlEndpointNetworkConfigurationAccessControlRules</a>>

access_control_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#access_control_rules DataflowSqlEndpoint#access_control_rules}

---

##### `hostNamePrefix`<sup>Optional</sup> <a name="hostNamePrefix" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfiguration.property.hostNamePrefix"></a>

```java
public java.lang.String getHostNamePrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#host_name_prefix DataflowSqlEndpoint#host_name_prefix}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfiguration.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#subnet_id DataflowSqlEndpoint#subnet_id}.

---

##### `vcnId`<sup>Optional</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfiguration.property.vcnId"></a>

```java
public java.lang.String getVcnId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#vcn_id DataflowSqlEndpoint#vcn_id}.

---

### DataflowSqlEndpointNetworkConfigurationAccessControlRules <a name="DataflowSqlEndpointNetworkConfigurationAccessControlRules" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataflow_sql_endpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRules;

DataflowSqlEndpointNetworkConfigurationAccessControlRules.builder()
//  .ipNotation(java.lang.String)
//  .value(java.lang.String)
//  .vcnIps(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRules.property.ipNotation">ipNotation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#ip_notation DataflowSqlEndpoint#ip_notation}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRules.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#value DataflowSqlEndpoint#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRules.property.vcnIps">vcnIps</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#vcn_ips DataflowSqlEndpoint#vcn_ips}. |

---

##### `ipNotation`<sup>Optional</sup> <a name="ipNotation" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRules.property.ipNotation"></a>

```java
public java.lang.String getIpNotation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#ip_notation DataflowSqlEndpoint#ip_notation}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRules.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#value DataflowSqlEndpoint#value}.

---

##### `vcnIps`<sup>Optional</sup> <a name="vcnIps" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRules.property.vcnIps"></a>

```java
public java.lang.String getVcnIps();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#vcn_ips DataflowSqlEndpoint#vcn_ips}.

---

### DataflowSqlEndpointTimeouts <a name="DataflowSqlEndpointTimeouts" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataflow_sql_endpoint.DataflowSqlEndpointTimeouts;

DataflowSqlEndpointTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#create DataflowSqlEndpoint#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#delete DataflowSqlEndpoint#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#update DataflowSqlEndpoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#create DataflowSqlEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#delete DataflowSqlEndpoint#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#update DataflowSqlEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataflowSqlEndpointDriverShapeConfigOutputReference <a name="DataflowSqlEndpointDriverShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataflow_sql_endpoint.DataflowSqlEndpointDriverShapeConfigOutputReference;

new DataflowSqlEndpointDriverShapeConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.resetMemoryInGbs">resetMemoryInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.resetOcpus">resetOcpus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMemoryInGbs` <a name="resetMemoryInGbs" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.resetMemoryInGbs"></a>

```java
public void resetMemoryInGbs()
```

##### `resetOcpus` <a name="resetOcpus" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.resetOcpus"></a>

```java
public void resetOcpus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.property.memoryInGbsInput">memoryInGbsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.property.ocpusInput">ocpusInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.property.memoryInGbs">memoryInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfig">DataflowSqlEndpointDriverShapeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `memoryInGbsInput`<sup>Optional</sup> <a name="memoryInGbsInput" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.property.memoryInGbsInput"></a>

```java
public java.lang.Number getMemoryInGbsInput();
```

- *Type:* java.lang.Number

---

##### `ocpusInput`<sup>Optional</sup> <a name="ocpusInput" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.property.ocpusInput"></a>

```java
public java.lang.Number getOcpusInput();
```

- *Type:* java.lang.Number

---

##### `memoryInGbs`<sup>Required</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.property.memoryInGbs"></a>

```java
public java.lang.Number getMemoryInGbs();
```

- *Type:* java.lang.Number

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.property.ocpus"></a>

```java
public java.lang.Number getOcpus();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.property.internalValue"></a>

```java
public DataflowSqlEndpointDriverShapeConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfig">DataflowSqlEndpointDriverShapeConfig</a>

---


### DataflowSqlEndpointExecutorShapeConfigOutputReference <a name="DataflowSqlEndpointExecutorShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataflow_sql_endpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference;

new DataflowSqlEndpointExecutorShapeConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.resetMemoryInGbs">resetMemoryInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.resetOcpus">resetOcpus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMemoryInGbs` <a name="resetMemoryInGbs" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.resetMemoryInGbs"></a>

```java
public void resetMemoryInGbs()
```

##### `resetOcpus` <a name="resetOcpus" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.resetOcpus"></a>

```java
public void resetOcpus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.property.memoryInGbsInput">memoryInGbsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.property.ocpusInput">ocpusInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.property.memoryInGbs">memoryInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfig">DataflowSqlEndpointExecutorShapeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `memoryInGbsInput`<sup>Optional</sup> <a name="memoryInGbsInput" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.property.memoryInGbsInput"></a>

```java
public java.lang.Number getMemoryInGbsInput();
```

- *Type:* java.lang.Number

---

##### `ocpusInput`<sup>Optional</sup> <a name="ocpusInput" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.property.ocpusInput"></a>

```java
public java.lang.Number getOcpusInput();
```

- *Type:* java.lang.Number

---

##### `memoryInGbs`<sup>Required</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.property.memoryInGbs"></a>

```java
public java.lang.Number getMemoryInGbs();
```

- *Type:* java.lang.Number

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.property.ocpus"></a>

```java
public java.lang.Number getOcpus();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.property.internalValue"></a>

```java
public DataflowSqlEndpointExecutorShapeConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfig">DataflowSqlEndpointExecutorShapeConfig</a>

---


### DataflowSqlEndpointNetworkConfigurationAccessControlRulesList <a name="DataflowSqlEndpointNetworkConfigurationAccessControlRulesList" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataflow_sql_endpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList;

new DataflowSqlEndpointNetworkConfigurationAccessControlRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.get"></a>

```java
public DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRules">DataflowSqlEndpointNetworkConfigurationAccessControlRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRules">DataflowSqlEndpointNetworkConfigurationAccessControlRules</a>>

---


### DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference <a name="DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataflow_sql_endpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference;

new DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.resetIpNotation">resetIpNotation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.resetValue">resetValue</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.resetVcnIps">resetVcnIps</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpNotation` <a name="resetIpNotation" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.resetIpNotation"></a>

```java
public void resetIpNotation()
```

##### `resetValue` <a name="resetValue" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.resetValue"></a>

```java
public void resetValue()
```

##### `resetVcnIps` <a name="resetVcnIps" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.resetVcnIps"></a>

```java
public void resetVcnIps()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.property.ipNotationInput">ipNotationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.property.vcnIpsInput">vcnIpsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.property.ipNotation">ipNotation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.property.vcnIps">vcnIps</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRules">DataflowSqlEndpointNetworkConfigurationAccessControlRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipNotationInput`<sup>Optional</sup> <a name="ipNotationInput" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.property.ipNotationInput"></a>

```java
public java.lang.String getIpNotationInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `vcnIpsInput`<sup>Optional</sup> <a name="vcnIpsInput" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.property.vcnIpsInput"></a>

```java
public java.lang.String getVcnIpsInput();
```

- *Type:* java.lang.String

---

##### `ipNotation`<sup>Required</sup> <a name="ipNotation" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.property.ipNotation"></a>

```java
public java.lang.String getIpNotation();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `vcnIps`<sup>Required</sup> <a name="vcnIps" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.property.vcnIps"></a>

```java
public java.lang.String getVcnIps();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRules">DataflowSqlEndpointNetworkConfigurationAccessControlRules</a>

---


### DataflowSqlEndpointNetworkConfigurationOutputReference <a name="DataflowSqlEndpointNetworkConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataflow_sql_endpoint.DataflowSqlEndpointNetworkConfigurationOutputReference;

new DataflowSqlEndpointNetworkConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.putAccessControlRules">putAccessControlRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.resetAccessControlRules">resetAccessControlRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.resetHostNamePrefix">resetHostNamePrefix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.resetVcnId">resetVcnId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAccessControlRules` <a name="putAccessControlRules" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.putAccessControlRules"></a>

```java
public void putAccessControlRules(IResolvable OR java.util.List<DataflowSqlEndpointNetworkConfigurationAccessControlRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.putAccessControlRules.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRules">DataflowSqlEndpointNetworkConfigurationAccessControlRules</a>>

---

##### `resetAccessControlRules` <a name="resetAccessControlRules" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.resetAccessControlRules"></a>

```java
public void resetAccessControlRules()
```

##### `resetHostNamePrefix` <a name="resetHostNamePrefix" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.resetHostNamePrefix"></a>

```java
public void resetHostNamePrefix()
```

##### `resetSubnetId` <a name="resetSubnetId" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.resetSubnetId"></a>

```java
public void resetSubnetId()
```

##### `resetVcnId` <a name="resetVcnId" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.resetVcnId"></a>

```java
public void resetVcnId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.accessControlRules">accessControlRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList">DataflowSqlEndpointNetworkConfigurationAccessControlRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.privateEndpointIp">privateEndpointIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.publicEndpointIp">publicEndpointIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.accessControlRulesInput">accessControlRulesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRules">DataflowSqlEndpointNetworkConfigurationAccessControlRules</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.hostNamePrefixInput">hostNamePrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.networkTypeInput">networkTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.vcnIdInput">vcnIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.hostNamePrefix">hostNamePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.networkType">networkType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.vcnId">vcnId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfiguration">DataflowSqlEndpointNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessControlRules`<sup>Required</sup> <a name="accessControlRules" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.accessControlRules"></a>

```java
public DataflowSqlEndpointNetworkConfigurationAccessControlRulesList getAccessControlRules();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList">DataflowSqlEndpointNetworkConfigurationAccessControlRulesList</a>

---

##### `privateEndpointIp`<sup>Required</sup> <a name="privateEndpointIp" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.privateEndpointIp"></a>

```java
public java.lang.String getPrivateEndpointIp();
```

- *Type:* java.lang.String

---

##### `publicEndpointIp`<sup>Required</sup> <a name="publicEndpointIp" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.publicEndpointIp"></a>

```java
public java.lang.String getPublicEndpointIp();
```

- *Type:* java.lang.String

---

##### `accessControlRulesInput`<sup>Optional</sup> <a name="accessControlRulesInput" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.accessControlRulesInput"></a>

```java
public java.lang.Object getAccessControlRulesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRules">DataflowSqlEndpointNetworkConfigurationAccessControlRules</a>>

---

##### `hostNamePrefixInput`<sup>Optional</sup> <a name="hostNamePrefixInput" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.hostNamePrefixInput"></a>

```java
public java.lang.String getHostNamePrefixInput();
```

- *Type:* java.lang.String

---

##### `networkTypeInput`<sup>Optional</sup> <a name="networkTypeInput" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.networkTypeInput"></a>

```java
public java.lang.String getNetworkTypeInput();
```

- *Type:* java.lang.String

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `vcnIdInput`<sup>Optional</sup> <a name="vcnIdInput" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.vcnIdInput"></a>

```java
public java.lang.String getVcnIdInput();
```

- *Type:* java.lang.String

---

##### `hostNamePrefix`<sup>Required</sup> <a name="hostNamePrefix" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.hostNamePrefix"></a>

```java
public java.lang.String getHostNamePrefix();
```

- *Type:* java.lang.String

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.networkType"></a>

```java
public java.lang.String getNetworkType();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.vcnId"></a>

```java
public java.lang.String getVcnId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.internalValue"></a>

```java
public DataflowSqlEndpointNetworkConfiguration getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfiguration">DataflowSqlEndpointNetworkConfiguration</a>

---


### DataflowSqlEndpointTimeoutsOutputReference <a name="DataflowSqlEndpointTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataflow_sql_endpoint.DataflowSqlEndpointTimeoutsOutputReference;

new DataflowSqlEndpointTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeouts">DataflowSqlEndpointTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeouts">DataflowSqlEndpointTimeouts</a>

---



