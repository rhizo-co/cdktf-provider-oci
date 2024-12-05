# `dataOciDataflowInvokeRuns` Submodule <a name="`dataOciDataflowInvokeRuns` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataflowInvokeRuns <a name="DataOciDataflowInvokeRuns" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_invoke_runs oci_dataflow_invoke_runs}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataflow_invoke_runs.DataOciDataflowInvokeRuns;

DataOciDataflowInvokeRuns.Builder.create(Construct scope, java.lang.String id)
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
//  .displayName(java.lang.String)
//  .displayNameStartsWith(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDataflowInvokeRunsFilter>)
//  .id(java.lang.String)
//  .ownerPrincipalId(java.lang.String)
//  .poolId(java.lang.String)
//  .state(java.lang.String)
//  .timeCreatedGreaterThan(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_invoke_runs#compartment_id DataOciDataflowInvokeRuns#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.Initializer.parameter.applicationId">applicationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_invoke_runs#application_id DataOciDataflowInvokeRuns#application_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_invoke_runs#display_name DataOciDataflowInvokeRuns#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.Initializer.parameter.displayNameStartsWith">displayNameStartsWith</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_invoke_runs#display_name_starts_with DataOciDataflowInvokeRuns#display_name_starts_with}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilter">DataOciDataflowInvokeRunsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_invoke_runs#id DataOciDataflowInvokeRuns#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.Initializer.parameter.ownerPrincipalId">ownerPrincipalId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_invoke_runs#owner_principal_id DataOciDataflowInvokeRuns#owner_principal_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.Initializer.parameter.poolId">poolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_invoke_runs#pool_id DataOciDataflowInvokeRuns#pool_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_invoke_runs#state DataOciDataflowInvokeRuns#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.Initializer.parameter.timeCreatedGreaterThan">timeCreatedGreaterThan</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_invoke_runs#time_created_greater_than DataOciDataflowInvokeRuns#time_created_greater_than}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_invoke_runs#compartment_id DataOciDataflowInvokeRuns#compartment_id}.

---

##### `applicationId`<sup>Optional</sup> <a name="applicationId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.Initializer.parameter.applicationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_invoke_runs#application_id DataOciDataflowInvokeRuns#application_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_invoke_runs#display_name DataOciDataflowInvokeRuns#display_name}.

---

##### `displayNameStartsWith`<sup>Optional</sup> <a name="displayNameStartsWith" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.Initializer.parameter.displayNameStartsWith"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_invoke_runs#display_name_starts_with DataOciDataflowInvokeRuns#display_name_starts_with}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilter">DataOciDataflowInvokeRunsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_invoke_runs#filter DataOciDataflowInvokeRuns#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_invoke_runs#id DataOciDataflowInvokeRuns#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ownerPrincipalId`<sup>Optional</sup> <a name="ownerPrincipalId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.Initializer.parameter.ownerPrincipalId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_invoke_runs#owner_principal_id DataOciDataflowInvokeRuns#owner_principal_id}.

---

##### `poolId`<sup>Optional</sup> <a name="poolId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.Initializer.parameter.poolId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_invoke_runs#pool_id DataOciDataflowInvokeRuns#pool_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_invoke_runs#state DataOciDataflowInvokeRuns#state}.

---

##### `timeCreatedGreaterThan`<sup>Optional</sup> <a name="timeCreatedGreaterThan" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.Initializer.parameter.timeCreatedGreaterThan"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_invoke_runs#time_created_greater_than DataOciDataflowInvokeRuns#time_created_greater_than}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.resetApplicationId">resetApplicationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.resetDisplayNameStartsWith">resetDisplayNameStartsWith</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.resetOwnerPrincipalId">resetOwnerPrincipalId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.resetPoolId">resetPoolId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.resetTimeCreatedGreaterThan">resetTimeCreatedGreaterThan</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciDataflowInvokeRunsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilter">DataOciDataflowInvokeRunsFilter</a>>

---

##### `resetApplicationId` <a name="resetApplicationId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.resetApplicationId"></a>

```java
public void resetApplicationId()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetDisplayNameStartsWith` <a name="resetDisplayNameStartsWith" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.resetDisplayNameStartsWith"></a>

```java
public void resetDisplayNameStartsWith()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.resetId"></a>

```java
public void resetId()
```

##### `resetOwnerPrincipalId` <a name="resetOwnerPrincipalId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.resetOwnerPrincipalId"></a>

```java
public void resetOwnerPrincipalId()
```

##### `resetPoolId` <a name="resetPoolId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.resetPoolId"></a>

```java
public void resetPoolId()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.resetState"></a>

```java
public void resetState()
```

##### `resetTimeCreatedGreaterThan` <a name="resetTimeCreatedGreaterThan" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.resetTimeCreatedGreaterThan"></a>

```java
public void resetTimeCreatedGreaterThan()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataflowInvokeRuns resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataflow_invoke_runs.DataOciDataflowInvokeRuns;

DataOciDataflowInvokeRuns.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataflow_invoke_runs.DataOciDataflowInvokeRuns;

DataOciDataflowInvokeRuns.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataflow_invoke_runs.DataOciDataflowInvokeRuns;

DataOciDataflowInvokeRuns.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataflow_invoke_runs.DataOciDataflowInvokeRuns;

DataOciDataflowInvokeRuns.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDataflowInvokeRuns.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDataflowInvokeRuns resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDataflowInvokeRuns to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDataflowInvokeRuns that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_invoke_runs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataflowInvokeRuns to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterList">DataOciDataflowInvokeRunsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.runs">runs</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsList">DataOciDataflowInvokeRunsRunsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.applicationIdInput">applicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.displayNameStartsWithInput">displayNameStartsWithInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilter">DataOciDataflowInvokeRunsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.ownerPrincipalIdInput">ownerPrincipalIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.poolIdInput">poolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.timeCreatedGreaterThanInput">timeCreatedGreaterThanInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.displayNameStartsWith">displayNameStartsWith</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.ownerPrincipalId">ownerPrincipalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.poolId">poolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.timeCreatedGreaterThan">timeCreatedGreaterThan</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.filter"></a>

```java
public DataOciDataflowInvokeRunsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterList">DataOciDataflowInvokeRunsFilterList</a>

---

##### `runs`<sup>Required</sup> <a name="runs" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.runs"></a>

```java
public DataOciDataflowInvokeRunsRunsList getRuns();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsList">DataOciDataflowInvokeRunsRunsList</a>

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.applicationIdInput"></a>

```java
public java.lang.String getApplicationIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `displayNameStartsWithInput`<sup>Optional</sup> <a name="displayNameStartsWithInput" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.displayNameStartsWithInput"></a>

```java
public java.lang.String getDisplayNameStartsWithInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilter">DataOciDataflowInvokeRunsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ownerPrincipalIdInput`<sup>Optional</sup> <a name="ownerPrincipalIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.ownerPrincipalIdInput"></a>

```java
public java.lang.String getOwnerPrincipalIdInput();
```

- *Type:* java.lang.String

---

##### `poolIdInput`<sup>Optional</sup> <a name="poolIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.poolIdInput"></a>

```java
public java.lang.String getPoolIdInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `timeCreatedGreaterThanInput`<sup>Optional</sup> <a name="timeCreatedGreaterThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.timeCreatedGreaterThanInput"></a>

```java
public java.lang.String getTimeCreatedGreaterThanInput();
```

- *Type:* java.lang.String

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `displayNameStartsWith`<sup>Required</sup> <a name="displayNameStartsWith" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.displayNameStartsWith"></a>

```java
public java.lang.String getDisplayNameStartsWith();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ownerPrincipalId`<sup>Required</sup> <a name="ownerPrincipalId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.ownerPrincipalId"></a>

```java
public java.lang.String getOwnerPrincipalId();
```

- *Type:* java.lang.String

---

##### `poolId`<sup>Required</sup> <a name="poolId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.poolId"></a>

```java
public java.lang.String getPoolId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreatedGreaterThan`<sup>Required</sup> <a name="timeCreatedGreaterThan" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.timeCreatedGreaterThan"></a>

```java
public java.lang.String getTimeCreatedGreaterThan();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRuns.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataflowInvokeRunsConfig <a name="DataOciDataflowInvokeRunsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataflow_invoke_runs.DataOciDataflowInvokeRunsConfig;

DataOciDataflowInvokeRunsConfig.builder()
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
//  .displayName(java.lang.String)
//  .displayNameStartsWith(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDataflowInvokeRunsFilter>)
//  .id(java.lang.String)
//  .ownerPrincipalId(java.lang.String)
//  .poolId(java.lang.String)
//  .state(java.lang.String)
//  .timeCreatedGreaterThan(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_invoke_runs#compartment_id DataOciDataflowInvokeRuns#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsConfig.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_invoke_runs#application_id DataOciDataflowInvokeRuns#application_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_invoke_runs#display_name DataOciDataflowInvokeRuns#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsConfig.property.displayNameStartsWith">displayNameStartsWith</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_invoke_runs#display_name_starts_with DataOciDataflowInvokeRuns#display_name_starts_with}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilter">DataOciDataflowInvokeRunsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_invoke_runs#id DataOciDataflowInvokeRuns#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsConfig.property.ownerPrincipalId">ownerPrincipalId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_invoke_runs#owner_principal_id DataOciDataflowInvokeRuns#owner_principal_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsConfig.property.poolId">poolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_invoke_runs#pool_id DataOciDataflowInvokeRuns#pool_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_invoke_runs#state DataOciDataflowInvokeRuns#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsConfig.property.timeCreatedGreaterThan">timeCreatedGreaterThan</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_invoke_runs#time_created_greater_than DataOciDataflowInvokeRuns#time_created_greater_than}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_invoke_runs#compartment_id DataOciDataflowInvokeRuns#compartment_id}.

---

##### `applicationId`<sup>Optional</sup> <a name="applicationId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsConfig.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_invoke_runs#application_id DataOciDataflowInvokeRuns#application_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_invoke_runs#display_name DataOciDataflowInvokeRuns#display_name}.

---

##### `displayNameStartsWith`<sup>Optional</sup> <a name="displayNameStartsWith" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsConfig.property.displayNameStartsWith"></a>

```java
public java.lang.String getDisplayNameStartsWith();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_invoke_runs#display_name_starts_with DataOciDataflowInvokeRuns#display_name_starts_with}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilter">DataOciDataflowInvokeRunsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_invoke_runs#filter DataOciDataflowInvokeRuns#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_invoke_runs#id DataOciDataflowInvokeRuns#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ownerPrincipalId`<sup>Optional</sup> <a name="ownerPrincipalId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsConfig.property.ownerPrincipalId"></a>

```java
public java.lang.String getOwnerPrincipalId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_invoke_runs#owner_principal_id DataOciDataflowInvokeRuns#owner_principal_id}.

---

##### `poolId`<sup>Optional</sup> <a name="poolId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsConfig.property.poolId"></a>

```java
public java.lang.String getPoolId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_invoke_runs#pool_id DataOciDataflowInvokeRuns#pool_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_invoke_runs#state DataOciDataflowInvokeRuns#state}.

---

##### `timeCreatedGreaterThan`<sup>Optional</sup> <a name="timeCreatedGreaterThan" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsConfig.property.timeCreatedGreaterThan"></a>

```java
public java.lang.String getTimeCreatedGreaterThan();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_invoke_runs#time_created_greater_than DataOciDataflowInvokeRuns#time_created_greater_than}.

---

### DataOciDataflowInvokeRunsFilter <a name="DataOciDataflowInvokeRunsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataflow_invoke_runs.DataOciDataflowInvokeRunsFilter;

DataOciDataflowInvokeRunsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_invoke_runs#name DataOciDataflowInvokeRuns#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_invoke_runs#values DataOciDataflowInvokeRuns#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_invoke_runs#regex DataOciDataflowInvokeRuns#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_invoke_runs#name DataOciDataflowInvokeRuns#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_invoke_runs#values DataOciDataflowInvokeRuns#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_invoke_runs#regex DataOciDataflowInvokeRuns#regex}.

---

### DataOciDataflowInvokeRunsRuns <a name="DataOciDataflowInvokeRunsRuns" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRuns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRuns.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataflow_invoke_runs.DataOciDataflowInvokeRunsRuns;

DataOciDataflowInvokeRunsRuns.builder()
    .build();
```


### DataOciDataflowInvokeRunsRunsApplicationLogConfig <a name="DataOciDataflowInvokeRunsRunsApplicationLogConfig" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataflow_invoke_runs.DataOciDataflowInvokeRunsRunsApplicationLogConfig;

DataOciDataflowInvokeRunsRunsApplicationLogConfig.builder()
    .build();
```


### DataOciDataflowInvokeRunsRunsDriverShapeConfig <a name="DataOciDataflowInvokeRunsRunsDriverShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataflow_invoke_runs.DataOciDataflowInvokeRunsRunsDriverShapeConfig;

DataOciDataflowInvokeRunsRunsDriverShapeConfig.builder()
    .build();
```


### DataOciDataflowInvokeRunsRunsExecutorShapeConfig <a name="DataOciDataflowInvokeRunsRunsExecutorShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataflow_invoke_runs.DataOciDataflowInvokeRunsRunsExecutorShapeConfig;

DataOciDataflowInvokeRunsRunsExecutorShapeConfig.builder()
    .build();
```


### DataOciDataflowInvokeRunsRunsParameters <a name="DataOciDataflowInvokeRunsRunsParameters" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParameters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataflow_invoke_runs.DataOciDataflowInvokeRunsRunsParameters;

DataOciDataflowInvokeRunsRunsParameters.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataflowInvokeRunsFilterList <a name="DataOciDataflowInvokeRunsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataflow_invoke_runs.DataOciDataflowInvokeRunsFilterList;

new DataOciDataflowInvokeRunsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterList.get"></a>

```java
public DataOciDataflowInvokeRunsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilter">DataOciDataflowInvokeRunsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilter">DataOciDataflowInvokeRunsFilter</a>>

---


### DataOciDataflowInvokeRunsFilterOutputReference <a name="DataOciDataflowInvokeRunsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataflow_invoke_runs.DataOciDataflowInvokeRunsFilterOutputReference;

new DataOciDataflowInvokeRunsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilter">DataOciDataflowInvokeRunsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsFilter">DataOciDataflowInvokeRunsFilter</a>

---


### DataOciDataflowInvokeRunsRunsApplicationLogConfigList <a name="DataOciDataflowInvokeRunsRunsApplicationLogConfigList" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataflow_invoke_runs.DataOciDataflowInvokeRunsRunsApplicationLogConfigList;

new DataOciDataflowInvokeRunsRunsApplicationLogConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigList.get"></a>

```java
public DataOciDataflowInvokeRunsRunsApplicationLogConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataflowInvokeRunsRunsApplicationLogConfigOutputReference <a name="DataOciDataflowInvokeRunsRunsApplicationLogConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataflow_invoke_runs.DataOciDataflowInvokeRunsRunsApplicationLogConfigOutputReference;

new DataOciDataflowInvokeRunsRunsApplicationLogConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigOutputReference.property.logGroupId">logGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigOutputReference.property.logId">logId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfig">DataOciDataflowInvokeRunsRunsApplicationLogConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `logGroupId`<sup>Required</sup> <a name="logGroupId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigOutputReference.property.logGroupId"></a>

```java
public java.lang.String getLogGroupId();
```

- *Type:* java.lang.String

---

##### `logId`<sup>Required</sup> <a name="logId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigOutputReference.property.logId"></a>

```java
public java.lang.String getLogId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigOutputReference.property.internalValue"></a>

```java
public DataOciDataflowInvokeRunsRunsApplicationLogConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfig">DataOciDataflowInvokeRunsRunsApplicationLogConfig</a>

---


### DataOciDataflowInvokeRunsRunsDriverShapeConfigList <a name="DataOciDataflowInvokeRunsRunsDriverShapeConfigList" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataflow_invoke_runs.DataOciDataflowInvokeRunsRunsDriverShapeConfigList;

new DataOciDataflowInvokeRunsRunsDriverShapeConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigList.get"></a>

```java
public DataOciDataflowInvokeRunsRunsDriverShapeConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataflowInvokeRunsRunsDriverShapeConfigOutputReference <a name="DataOciDataflowInvokeRunsRunsDriverShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataflow_invoke_runs.DataOciDataflowInvokeRunsRunsDriverShapeConfigOutputReference;

new DataOciDataflowInvokeRunsRunsDriverShapeConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigOutputReference.property.memoryInGbs">memoryInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfig">DataOciDataflowInvokeRunsRunsDriverShapeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `memoryInGbs`<sup>Required</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigOutputReference.property.memoryInGbs"></a>

```java
public java.lang.Number getMemoryInGbs();
```

- *Type:* java.lang.Number

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigOutputReference.property.ocpus"></a>

```java
public java.lang.Number getOcpus();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigOutputReference.property.internalValue"></a>

```java
public DataOciDataflowInvokeRunsRunsDriverShapeConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfig">DataOciDataflowInvokeRunsRunsDriverShapeConfig</a>

---


### DataOciDataflowInvokeRunsRunsExecutorShapeConfigList <a name="DataOciDataflowInvokeRunsRunsExecutorShapeConfigList" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataflow_invoke_runs.DataOciDataflowInvokeRunsRunsExecutorShapeConfigList;

new DataOciDataflowInvokeRunsRunsExecutorShapeConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigList.get"></a>

```java
public DataOciDataflowInvokeRunsRunsExecutorShapeConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataflowInvokeRunsRunsExecutorShapeConfigOutputReference <a name="DataOciDataflowInvokeRunsRunsExecutorShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataflow_invoke_runs.DataOciDataflowInvokeRunsRunsExecutorShapeConfigOutputReference;

new DataOciDataflowInvokeRunsRunsExecutorShapeConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigOutputReference.property.memoryInGbs">memoryInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfig">DataOciDataflowInvokeRunsRunsExecutorShapeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `memoryInGbs`<sup>Required</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigOutputReference.property.memoryInGbs"></a>

```java
public java.lang.Number getMemoryInGbs();
```

- *Type:* java.lang.Number

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigOutputReference.property.ocpus"></a>

```java
public java.lang.Number getOcpus();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigOutputReference.property.internalValue"></a>

```java
public DataOciDataflowInvokeRunsRunsExecutorShapeConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfig">DataOciDataflowInvokeRunsRunsExecutorShapeConfig</a>

---


### DataOciDataflowInvokeRunsRunsList <a name="DataOciDataflowInvokeRunsRunsList" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataflow_invoke_runs.DataOciDataflowInvokeRunsRunsList;

new DataOciDataflowInvokeRunsRunsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsList.get"></a>

```java
public DataOciDataflowInvokeRunsRunsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataflowInvokeRunsRunsOutputReference <a name="DataOciDataflowInvokeRunsRunsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataflow_invoke_runs.DataOciDataflowInvokeRunsRunsOutputReference;

new DataOciDataflowInvokeRunsRunsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.applicationLogConfig">applicationLogConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigList">DataOciDataflowInvokeRunsRunsApplicationLogConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.archiveUri">archiveUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.arguments">arguments</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.asynchronous">asynchronous</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.className">className</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.configuration">configuration</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.dataReadInBytes">dataReadInBytes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.dataWrittenInBytes">dataWrittenInBytes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.driverShape">driverShape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.driverShapeConfig">driverShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigList">DataOciDataflowInvokeRunsRunsDriverShapeConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.execute">execute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.executorShape">executorShape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.executorShapeConfig">executorShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigList">DataOciDataflowInvokeRunsRunsExecutorShapeConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.fileUri">fileUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.idleTimeoutInMinutes">idleTimeoutInMinutes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.language">language</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.logsBucketUri">logsBucketUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.maxDurationInMinutes">maxDurationInMinutes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.metastoreId">metastoreId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.numExecutors">numExecutors</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.opcParentRptUrl">opcParentRptUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.opcRequestId">opcRequestId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.ownerPrincipalId">ownerPrincipalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.ownerUserName">ownerUserName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.parameters">parameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersList">DataOciDataflowInvokeRunsRunsParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.poolId">poolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.privateEndpointDnsZones">privateEndpointDnsZones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.privateEndpointId">privateEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.privateEndpointMaxHostCount">privateEndpointMaxHostCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.privateEndpointNsgIds">privateEndpointNsgIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.privateEndpointSubnetId">privateEndpointSubnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.runDurationInMilliseconds">runDurationInMilliseconds</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.sparkVersion">sparkVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.totalOcpu">totalOcpu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.warehouseBucketUri">warehouseBucketUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRuns">DataOciDataflowInvokeRunsRuns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `applicationLogConfig`<sup>Required</sup> <a name="applicationLogConfig" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.applicationLogConfig"></a>

```java
public DataOciDataflowInvokeRunsRunsApplicationLogConfigList getApplicationLogConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsApplicationLogConfigList">DataOciDataflowInvokeRunsRunsApplicationLogConfigList</a>

---

##### `archiveUri`<sup>Required</sup> <a name="archiveUri" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.archiveUri"></a>

```java
public java.lang.String getArchiveUri();
```

- *Type:* java.lang.String

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.arguments"></a>

```java
public java.util.List<java.lang.String> getArguments();
```

- *Type:* java.util.List<java.lang.String>

---

##### `asynchronous`<sup>Required</sup> <a name="asynchronous" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.asynchronous"></a>

```java
public IResolvable getAsynchronous();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `className`<sup>Required</sup> <a name="className" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.className"></a>

```java
public java.lang.String getClassName();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.configuration"></a>

```java
public StringMap getConfiguration();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `dataReadInBytes`<sup>Required</sup> <a name="dataReadInBytes" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.dataReadInBytes"></a>

```java
public java.lang.String getDataReadInBytes();
```

- *Type:* java.lang.String

---

##### `dataWrittenInBytes`<sup>Required</sup> <a name="dataWrittenInBytes" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.dataWrittenInBytes"></a>

```java
public java.lang.String getDataWrittenInBytes();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `driverShape`<sup>Required</sup> <a name="driverShape" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.driverShape"></a>

```java
public java.lang.String getDriverShape();
```

- *Type:* java.lang.String

---

##### `driverShapeConfig`<sup>Required</sup> <a name="driverShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.driverShapeConfig"></a>

```java
public DataOciDataflowInvokeRunsRunsDriverShapeConfigList getDriverShapeConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsDriverShapeConfigList">DataOciDataflowInvokeRunsRunsDriverShapeConfigList</a>

---

##### `execute`<sup>Required</sup> <a name="execute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.execute"></a>

```java
public java.lang.String getExecute();
```

- *Type:* java.lang.String

---

##### `executorShape`<sup>Required</sup> <a name="executorShape" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.executorShape"></a>

```java
public java.lang.String getExecutorShape();
```

- *Type:* java.lang.String

---

##### `executorShapeConfig`<sup>Required</sup> <a name="executorShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.executorShapeConfig"></a>

```java
public DataOciDataflowInvokeRunsRunsExecutorShapeConfigList getExecutorShapeConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsExecutorShapeConfigList">DataOciDataflowInvokeRunsRunsExecutorShapeConfigList</a>

---

##### `fileUri`<sup>Required</sup> <a name="fileUri" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.fileUri"></a>

```java
public java.lang.String getFileUri();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `idleTimeoutInMinutes`<sup>Required</sup> <a name="idleTimeoutInMinutes" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.idleTimeoutInMinutes"></a>

```java
public java.lang.String getIdleTimeoutInMinutes();
```

- *Type:* java.lang.String

---

##### `language`<sup>Required</sup> <a name="language" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.language"></a>

```java
public java.lang.String getLanguage();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `logsBucketUri`<sup>Required</sup> <a name="logsBucketUri" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.logsBucketUri"></a>

```java
public java.lang.String getLogsBucketUri();
```

- *Type:* java.lang.String

---

##### `maxDurationInMinutes`<sup>Required</sup> <a name="maxDurationInMinutes" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.maxDurationInMinutes"></a>

```java
public java.lang.String getMaxDurationInMinutes();
```

- *Type:* java.lang.String

---

##### `metastoreId`<sup>Required</sup> <a name="metastoreId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.metastoreId"></a>

```java
public java.lang.String getMetastoreId();
```

- *Type:* java.lang.String

---

##### `numExecutors`<sup>Required</sup> <a name="numExecutors" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.numExecutors"></a>

```java
public java.lang.Number getNumExecutors();
```

- *Type:* java.lang.Number

---

##### `opcParentRptUrl`<sup>Required</sup> <a name="opcParentRptUrl" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.opcParentRptUrl"></a>

```java
public java.lang.String getOpcParentRptUrl();
```

- *Type:* java.lang.String

---

##### `opcRequestId`<sup>Required</sup> <a name="opcRequestId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.opcRequestId"></a>

```java
public java.lang.String getOpcRequestId();
```

- *Type:* java.lang.String

---

##### `ownerPrincipalId`<sup>Required</sup> <a name="ownerPrincipalId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.ownerPrincipalId"></a>

```java
public java.lang.String getOwnerPrincipalId();
```

- *Type:* java.lang.String

---

##### `ownerUserName`<sup>Required</sup> <a name="ownerUserName" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.ownerUserName"></a>

```java
public java.lang.String getOwnerUserName();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.parameters"></a>

```java
public DataOciDataflowInvokeRunsRunsParametersList getParameters();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersList">DataOciDataflowInvokeRunsRunsParametersList</a>

---

##### `poolId`<sup>Required</sup> <a name="poolId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.poolId"></a>

```java
public java.lang.String getPoolId();
```

- *Type:* java.lang.String

---

##### `privateEndpointDnsZones`<sup>Required</sup> <a name="privateEndpointDnsZones" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.privateEndpointDnsZones"></a>

```java
public java.util.List<java.lang.String> getPrivateEndpointDnsZones();
```

- *Type:* java.util.List<java.lang.String>

---

##### `privateEndpointId`<sup>Required</sup> <a name="privateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.privateEndpointId"></a>

```java
public java.lang.String getPrivateEndpointId();
```

- *Type:* java.lang.String

---

##### `privateEndpointMaxHostCount`<sup>Required</sup> <a name="privateEndpointMaxHostCount" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.privateEndpointMaxHostCount"></a>

```java
public java.lang.Number getPrivateEndpointMaxHostCount();
```

- *Type:* java.lang.Number

---

##### `privateEndpointNsgIds`<sup>Required</sup> <a name="privateEndpointNsgIds" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.privateEndpointNsgIds"></a>

```java
public java.util.List<java.lang.String> getPrivateEndpointNsgIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `privateEndpointSubnetId`<sup>Required</sup> <a name="privateEndpointSubnetId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.privateEndpointSubnetId"></a>

```java
public java.lang.String getPrivateEndpointSubnetId();
```

- *Type:* java.lang.String

---

##### `runDurationInMilliseconds`<sup>Required</sup> <a name="runDurationInMilliseconds" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.runDurationInMilliseconds"></a>

```java
public java.lang.String getRunDurationInMilliseconds();
```

- *Type:* java.lang.String

---

##### `sparkVersion`<sup>Required</sup> <a name="sparkVersion" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.sparkVersion"></a>

```java
public java.lang.String getSparkVersion();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `totalOcpu`<sup>Required</sup> <a name="totalOcpu" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.totalOcpu"></a>

```java
public java.lang.Number getTotalOcpu();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `warehouseBucketUri`<sup>Required</sup> <a name="warehouseBucketUri" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.warehouseBucketUri"></a>

```java
public java.lang.String getWarehouseBucketUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsOutputReference.property.internalValue"></a>

```java
public DataOciDataflowInvokeRunsRuns getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRuns">DataOciDataflowInvokeRunsRuns</a>

---


### DataOciDataflowInvokeRunsRunsParametersList <a name="DataOciDataflowInvokeRunsRunsParametersList" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataflow_invoke_runs.DataOciDataflowInvokeRunsRunsParametersList;

new DataOciDataflowInvokeRunsRunsParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersList.get"></a>

```java
public DataOciDataflowInvokeRunsRunsParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataflowInvokeRunsRunsParametersOutputReference <a name="DataOciDataflowInvokeRunsRunsParametersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataflow_invoke_runs.DataOciDataflowInvokeRunsRunsParametersOutputReference;

new DataOciDataflowInvokeRunsRunsParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParameters">DataOciDataflowInvokeRunsRunsParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParametersOutputReference.property.internalValue"></a>

```java
public DataOciDataflowInvokeRunsRunsParameters getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRuns.DataOciDataflowInvokeRunsRunsParameters">DataOciDataflowInvokeRunsRunsParameters</a>

---



