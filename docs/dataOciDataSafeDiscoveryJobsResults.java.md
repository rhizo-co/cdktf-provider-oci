# `dataOciDataSafeDiscoveryJobsResults` Submodule <a name="`dataOciDataSafeDiscoveryJobsResults` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeDiscoveryJobsResults <a name="DataOciDataSafeDiscoveryJobsResults" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results oci_data_safe_discovery_jobs_results}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_discovery_jobs_results.DataOciDataSafeDiscoveryJobsResults;

DataOciDataSafeDiscoveryJobsResults.Builder.create(Construct scope, java.lang.String id)
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
    .discoveryJobId(java.lang.String)
//  .columnName(java.util.List<java.lang.String>)
//  .discoveryType(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDataSafeDiscoveryJobsResultsFilter>)
//  .id(java.lang.String)
//  .isResultApplied(java.lang.Boolean)
//  .isResultApplied(IResolvable)
//  .object(java.util.List<java.lang.String>)
//  .plannedAction(java.lang.String)
//  .schemaName(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.discoveryJobId">discoveryJobId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#discovery_job_id DataOciDataSafeDiscoveryJobsResults#discovery_job_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.columnName">columnName</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#column_name DataOciDataSafeDiscoveryJobsResults#column_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.discoveryType">discoveryType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#discovery_type DataOciDataSafeDiscoveryJobsResults#discovery_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilter">DataOciDataSafeDiscoveryJobsResultsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#id DataOciDataSafeDiscoveryJobsResults#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.isResultApplied">isResultApplied</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#is_result_applied DataOciDataSafeDiscoveryJobsResults#is_result_applied}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.object">object</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#object DataOciDataSafeDiscoveryJobsResults#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.plannedAction">plannedAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#planned_action DataOciDataSafeDiscoveryJobsResults#planned_action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.schemaName">schemaName</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#schema_name DataOciDataSafeDiscoveryJobsResults#schema_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `discoveryJobId`<sup>Required</sup> <a name="discoveryJobId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.discoveryJobId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#discovery_job_id DataOciDataSafeDiscoveryJobsResults#discovery_job_id}.

---

##### `columnName`<sup>Optional</sup> <a name="columnName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.columnName"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#column_name DataOciDataSafeDiscoveryJobsResults#column_name}.

---

##### `discoveryType`<sup>Optional</sup> <a name="discoveryType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.discoveryType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#discovery_type DataOciDataSafeDiscoveryJobsResults#discovery_type}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilter">DataOciDataSafeDiscoveryJobsResultsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#filter DataOciDataSafeDiscoveryJobsResults#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#id DataOciDataSafeDiscoveryJobsResults#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isResultApplied`<sup>Optional</sup> <a name="isResultApplied" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.isResultApplied"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#is_result_applied DataOciDataSafeDiscoveryJobsResults#is_result_applied}.

---

##### `object`<sup>Optional</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.object"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#object DataOciDataSafeDiscoveryJobsResults#object}.

---

##### `plannedAction`<sup>Optional</sup> <a name="plannedAction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.plannedAction"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#planned_action DataOciDataSafeDiscoveryJobsResults#planned_action}.

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.schemaName"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#schema_name DataOciDataSafeDiscoveryJobsResults#schema_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetColumnName">resetColumnName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetDiscoveryType">resetDiscoveryType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetIsResultApplied">resetIsResultApplied</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetObject">resetObject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetPlannedAction">resetPlannedAction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetSchemaName">resetSchemaName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciDataSafeDiscoveryJobsResultsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilter">DataOciDataSafeDiscoveryJobsResultsFilter</a>>

---

##### `resetColumnName` <a name="resetColumnName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetColumnName"></a>

```java
public void resetColumnName()
```

##### `resetDiscoveryType` <a name="resetDiscoveryType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetDiscoveryType"></a>

```java
public void resetDiscoveryType()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetId"></a>

```java
public void resetId()
```

##### `resetIsResultApplied` <a name="resetIsResultApplied" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetIsResultApplied"></a>

```java
public void resetIsResultApplied()
```

##### `resetObject` <a name="resetObject" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetObject"></a>

```java
public void resetObject()
```

##### `resetPlannedAction` <a name="resetPlannedAction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetPlannedAction"></a>

```java
public void resetPlannedAction()
```

##### `resetSchemaName` <a name="resetSchemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetSchemaName"></a>

```java
public void resetSchemaName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeDiscoveryJobsResults resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_discovery_jobs_results.DataOciDataSafeDiscoveryJobsResults;

DataOciDataSafeDiscoveryJobsResults.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_discovery_jobs_results.DataOciDataSafeDiscoveryJobsResults;

DataOciDataSafeDiscoveryJobsResults.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_discovery_jobs_results.DataOciDataSafeDiscoveryJobsResults;

DataOciDataSafeDiscoveryJobsResults.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_discovery_jobs_results.DataOciDataSafeDiscoveryJobsResults;

DataOciDataSafeDiscoveryJobsResults.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDataSafeDiscoveryJobsResults.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDataSafeDiscoveryJobsResults resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDataSafeDiscoveryJobsResults to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDataSafeDiscoveryJobsResults that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeDiscoveryJobsResults to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.discoveryJobResultCollection">discoveryJobResultCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList">DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList">DataOciDataSafeDiscoveryJobsResultsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.columnNameInput">columnNameInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.discoveryJobIdInput">discoveryJobIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.discoveryTypeInput">discoveryTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilter">DataOciDataSafeDiscoveryJobsResultsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.isResultAppliedInput">isResultAppliedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.objectInput">objectInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.plannedActionInput">plannedActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.schemaNameInput">schemaNameInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.columnName">columnName</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.discoveryJobId">discoveryJobId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.discoveryType">discoveryType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.isResultApplied">isResultApplied</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.object">object</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.plannedAction">plannedAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.schemaName">schemaName</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `discoveryJobResultCollection`<sup>Required</sup> <a name="discoveryJobResultCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.discoveryJobResultCollection"></a>

```java
public DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList getDiscoveryJobResultCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList">DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.filter"></a>

```java
public DataOciDataSafeDiscoveryJobsResultsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList">DataOciDataSafeDiscoveryJobsResultsFilterList</a>

---

##### `columnNameInput`<sup>Optional</sup> <a name="columnNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.columnNameInput"></a>

```java
public java.util.List<java.lang.String> getColumnNameInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `discoveryJobIdInput`<sup>Optional</sup> <a name="discoveryJobIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.discoveryJobIdInput"></a>

```java
public java.lang.String getDiscoveryJobIdInput();
```

- *Type:* java.lang.String

---

##### `discoveryTypeInput`<sup>Optional</sup> <a name="discoveryTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.discoveryTypeInput"></a>

```java
public java.lang.String getDiscoveryTypeInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilter">DataOciDataSafeDiscoveryJobsResultsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isResultAppliedInput`<sup>Optional</sup> <a name="isResultAppliedInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.isResultAppliedInput"></a>

```java
public java.lang.Object getIsResultAppliedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `objectInput`<sup>Optional</sup> <a name="objectInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.objectInput"></a>

```java
public java.util.List<java.lang.String> getObjectInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `plannedActionInput`<sup>Optional</sup> <a name="plannedActionInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.plannedActionInput"></a>

```java
public java.lang.String getPlannedActionInput();
```

- *Type:* java.lang.String

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.schemaNameInput"></a>

```java
public java.util.List<java.lang.String> getSchemaNameInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.columnName"></a>

```java
public java.util.List<java.lang.String> getColumnName();
```

- *Type:* java.util.List<java.lang.String>

---

##### `discoveryJobId`<sup>Required</sup> <a name="discoveryJobId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.discoveryJobId"></a>

```java
public java.lang.String getDiscoveryJobId();
```

- *Type:* java.lang.String

---

##### `discoveryType`<sup>Required</sup> <a name="discoveryType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.discoveryType"></a>

```java
public java.lang.String getDiscoveryType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isResultApplied`<sup>Required</sup> <a name="isResultApplied" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.isResultApplied"></a>

```java
public java.lang.Object getIsResultApplied();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.object"></a>

```java
public java.util.List<java.lang.String> getObject();
```

- *Type:* java.util.List<java.lang.String>

---

##### `plannedAction`<sup>Required</sup> <a name="plannedAction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.plannedAction"></a>

```java
public java.lang.String getPlannedAction();
```

- *Type:* java.lang.String

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.schemaName"></a>

```java
public java.util.List<java.lang.String> getSchemaName();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeDiscoveryJobsResultsConfig <a name="DataOciDataSafeDiscoveryJobsResultsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_discovery_jobs_results.DataOciDataSafeDiscoveryJobsResultsConfig;

DataOciDataSafeDiscoveryJobsResultsConfig.builder()
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
    .discoveryJobId(java.lang.String)
//  .columnName(java.util.List<java.lang.String>)
//  .discoveryType(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDataSafeDiscoveryJobsResultsFilter>)
//  .id(java.lang.String)
//  .isResultApplied(java.lang.Boolean)
//  .isResultApplied(IResolvable)
//  .object(java.util.List<java.lang.String>)
//  .plannedAction(java.lang.String)
//  .schemaName(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.discoveryJobId">discoveryJobId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#discovery_job_id DataOciDataSafeDiscoveryJobsResults#discovery_job_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.columnName">columnName</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#column_name DataOciDataSafeDiscoveryJobsResults#column_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.discoveryType">discoveryType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#discovery_type DataOciDataSafeDiscoveryJobsResults#discovery_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilter">DataOciDataSafeDiscoveryJobsResultsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#id DataOciDataSafeDiscoveryJobsResults#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.isResultApplied">isResultApplied</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#is_result_applied DataOciDataSafeDiscoveryJobsResults#is_result_applied}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.object">object</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#object DataOciDataSafeDiscoveryJobsResults#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.plannedAction">plannedAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#planned_action DataOciDataSafeDiscoveryJobsResults#planned_action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.schemaName">schemaName</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#schema_name DataOciDataSafeDiscoveryJobsResults#schema_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `discoveryJobId`<sup>Required</sup> <a name="discoveryJobId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.discoveryJobId"></a>

```java
public java.lang.String getDiscoveryJobId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#discovery_job_id DataOciDataSafeDiscoveryJobsResults#discovery_job_id}.

---

##### `columnName`<sup>Optional</sup> <a name="columnName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.columnName"></a>

```java
public java.util.List<java.lang.String> getColumnName();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#column_name DataOciDataSafeDiscoveryJobsResults#column_name}.

---

##### `discoveryType`<sup>Optional</sup> <a name="discoveryType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.discoveryType"></a>

```java
public java.lang.String getDiscoveryType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#discovery_type DataOciDataSafeDiscoveryJobsResults#discovery_type}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilter">DataOciDataSafeDiscoveryJobsResultsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#filter DataOciDataSafeDiscoveryJobsResults#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#id DataOciDataSafeDiscoveryJobsResults#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isResultApplied`<sup>Optional</sup> <a name="isResultApplied" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.isResultApplied"></a>

```java
public java.lang.Object getIsResultApplied();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#is_result_applied DataOciDataSafeDiscoveryJobsResults#is_result_applied}.

---

##### `object`<sup>Optional</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.object"></a>

```java
public java.util.List<java.lang.String> getObject();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#object DataOciDataSafeDiscoveryJobsResults#object}.

---

##### `plannedAction`<sup>Optional</sup> <a name="plannedAction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.plannedAction"></a>

```java
public java.lang.String getPlannedAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#planned_action DataOciDataSafeDiscoveryJobsResults#planned_action}.

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.schemaName"></a>

```java
public java.util.List<java.lang.String> getSchemaName();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#schema_name DataOciDataSafeDiscoveryJobsResults#schema_name}.

---

### DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollection <a name="DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_discovery_jobs_results.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollection;

DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollection.builder()
    .build();
```


### DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItems <a name="DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_discovery_jobs_results.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItems;

DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItems.builder()
    .build();
```


### DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributes <a name="DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributes" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_discovery_jobs_results.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributes;

DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributes.builder()
    .build();
```


### DataOciDataSafeDiscoveryJobsResultsFilter <a name="DataOciDataSafeDiscoveryJobsResultsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_discovery_jobs_results.DataOciDataSafeDiscoveryJobsResultsFilter;

DataOciDataSafeDiscoveryJobsResultsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#name DataOciDataSafeDiscoveryJobsResults#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#values DataOciDataSafeDiscoveryJobsResults#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#regex DataOciDataSafeDiscoveryJobsResults#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#name DataOciDataSafeDiscoveryJobsResults#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#values DataOciDataSafeDiscoveryJobsResults#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#regex DataOciDataSafeDiscoveryJobsResults#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList <a name="DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_discovery_jobs_results.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList;

new DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.get"></a>

```java
public DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList <a name="DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_discovery_jobs_results.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList;

new DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.get"></a>

```java
public DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference <a name="DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_discovery_jobs_results.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference;

new DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.property.appDefinedChildColumnKeys">appDefinedChildColumnKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.property.dbDefinedChildColumnKeys">dbDefinedChildColumnKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributes">DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `appDefinedChildColumnKeys`<sup>Required</sup> <a name="appDefinedChildColumnKeys" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.property.appDefinedChildColumnKeys"></a>

```java
public java.util.List<java.lang.String> getAppDefinedChildColumnKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dbDefinedChildColumnKeys`<sup>Required</sup> <a name="dbDefinedChildColumnKeys" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.property.dbDefinedChildColumnKeys"></a>

```java
public java.util.List<java.lang.String> getDbDefinedChildColumnKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.property.internalValue"></a>

```java
public DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributes getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributes">DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributes</a>

---


### DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference <a name="DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_discovery_jobs_results.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference;

new DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.appDefinedChildColumnKeys">appDefinedChildColumnKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.appName">appName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.columnName">columnName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.dataType">dataType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.dbDefinedChildColumnKeys">dbDefinedChildColumnKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.discoveryJobId">discoveryJobId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.discoveryType">discoveryType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.estimatedDataValueCount">estimatedDataValueCount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.isResultApplied">isResultApplied</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.modifiedAttributes">modifiedAttributes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList">DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.object">object</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.objectType">objectType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.parentColumnKeys">parentColumnKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.plannedAction">plannedAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.relationType">relationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.sampleDataValues">sampleDataValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.sensitiveColumnkey">sensitiveColumnkey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.sensitiveTypeId">sensitiveTypeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItems">DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `appDefinedChildColumnKeys`<sup>Required</sup> <a name="appDefinedChildColumnKeys" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.appDefinedChildColumnKeys"></a>

```java
public java.util.List<java.lang.String> getAppDefinedChildColumnKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `appName`<sup>Required</sup> <a name="appName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.appName"></a>

```java
public java.lang.String getAppName();
```

- *Type:* java.lang.String

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.columnName"></a>

```java
public java.lang.String getColumnName();
```

- *Type:* java.lang.String

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.dataType"></a>

```java
public java.lang.String getDataType();
```

- *Type:* java.lang.String

---

##### `dbDefinedChildColumnKeys`<sup>Required</sup> <a name="dbDefinedChildColumnKeys" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.dbDefinedChildColumnKeys"></a>

```java
public java.util.List<java.lang.String> getDbDefinedChildColumnKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `discoveryJobId`<sup>Required</sup> <a name="discoveryJobId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.discoveryJobId"></a>

```java
public java.lang.String getDiscoveryJobId();
```

- *Type:* java.lang.String

---

##### `discoveryType`<sup>Required</sup> <a name="discoveryType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.discoveryType"></a>

```java
public java.lang.String getDiscoveryType();
```

- *Type:* java.lang.String

---

##### `estimatedDataValueCount`<sup>Required</sup> <a name="estimatedDataValueCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.estimatedDataValueCount"></a>

```java
public java.lang.String getEstimatedDataValueCount();
```

- *Type:* java.lang.String

---

##### `isResultApplied`<sup>Required</sup> <a name="isResultApplied" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.isResultApplied"></a>

```java
public IResolvable getIsResultApplied();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `modifiedAttributes`<sup>Required</sup> <a name="modifiedAttributes" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.modifiedAttributes"></a>

```java
public DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList getModifiedAttributes();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList">DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList</a>

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.object"></a>

```java
public java.lang.String getObject();
```

- *Type:* java.lang.String

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.objectType"></a>

```java
public java.lang.String getObjectType();
```

- *Type:* java.lang.String

---

##### `parentColumnKeys`<sup>Required</sup> <a name="parentColumnKeys" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.parentColumnKeys"></a>

```java
public java.util.List<java.lang.String> getParentColumnKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `plannedAction`<sup>Required</sup> <a name="plannedAction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.plannedAction"></a>

```java
public java.lang.String getPlannedAction();
```

- *Type:* java.lang.String

---

##### `relationType`<sup>Required</sup> <a name="relationType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.relationType"></a>

```java
public java.lang.String getRelationType();
```

- *Type:* java.lang.String

---

##### `sampleDataValues`<sup>Required</sup> <a name="sampleDataValues" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.sampleDataValues"></a>

```java
public java.util.List<java.lang.String> getSampleDataValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `sensitiveColumnkey`<sup>Required</sup> <a name="sensitiveColumnkey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.sensitiveColumnkey"></a>

```java
public java.lang.String getSensitiveColumnkey();
```

- *Type:* java.lang.String

---

##### `sensitiveTypeId`<sup>Required</sup> <a name="sensitiveTypeId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.sensitiveTypeId"></a>

```java
public java.lang.String getSensitiveTypeId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItems">DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItems</a>

---


### DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList <a name="DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_discovery_jobs_results.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList;

new DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.get"></a>

```java
public DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference <a name="DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_discovery_jobs_results.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference;

new DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList">DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollection">DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.property.items"></a>

```java
public DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList">DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.property.internalValue"></a>

```java
public DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollection">DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollection</a>

---


### DataOciDataSafeDiscoveryJobsResultsFilterList <a name="DataOciDataSafeDiscoveryJobsResultsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_discovery_jobs_results.DataOciDataSafeDiscoveryJobsResultsFilterList;

new DataOciDataSafeDiscoveryJobsResultsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.get"></a>

```java
public DataOciDataSafeDiscoveryJobsResultsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilter">DataOciDataSafeDiscoveryJobsResultsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilter">DataOciDataSafeDiscoveryJobsResultsFilter</a>>

---


### DataOciDataSafeDiscoveryJobsResultsFilterOutputReference <a name="DataOciDataSafeDiscoveryJobsResultsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_discovery_jobs_results.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference;

new DataOciDataSafeDiscoveryJobsResultsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilter">DataOciDataSafeDiscoveryJobsResultsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilter">DataOciDataSafeDiscoveryJobsResultsFilter</a>

---



