# `dataOciDatasciencePipelineRuns` Submodule <a name="`dataOciDatasciencePipelineRuns` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatasciencePipelineRuns <a name="DataOciDatasciencePipelineRuns" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs oci_datascience_pipeline_runs}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_pipeline_runs.DataOciDatasciencePipelineRuns;

DataOciDatasciencePipelineRuns.Builder.create(Construct scope, java.lang.String id)
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
//  .createdBy(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDatasciencePipelineRunsFilter>)
//  .id(java.lang.String)
//  .pipelineId(java.lang.String)
//  .state(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#compartment_id DataOciDatasciencePipelineRuns#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.createdBy">createdBy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#created_by DataOciDatasciencePipelineRuns#created_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#display_name DataOciDatasciencePipelineRuns#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilter">DataOciDatasciencePipelineRunsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#id DataOciDatasciencePipelineRuns#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.pipelineId">pipelineId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#pipeline_id DataOciDatasciencePipelineRuns#pipeline_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#state DataOciDatasciencePipelineRuns#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#compartment_id DataOciDatasciencePipelineRuns#compartment_id}.

---

##### `createdBy`<sup>Optional</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.createdBy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#created_by DataOciDatasciencePipelineRuns#created_by}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#display_name DataOciDatasciencePipelineRuns#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilter">DataOciDatasciencePipelineRunsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#filter DataOciDatasciencePipelineRuns#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#id DataOciDatasciencePipelineRuns#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pipelineId`<sup>Optional</sup> <a name="pipelineId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.pipelineId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#pipeline_id DataOciDatasciencePipelineRuns#pipeline_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#state DataOciDatasciencePipelineRuns#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.resetCreatedBy">resetCreatedBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.resetPipelineId">resetPipelineId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciDatasciencePipelineRunsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilter">DataOciDatasciencePipelineRunsFilter</a>>

---

##### `resetCreatedBy` <a name="resetCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.resetCreatedBy"></a>

```java
public void resetCreatedBy()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.resetId"></a>

```java
public void resetId()
```

##### `resetPipelineId` <a name="resetPipelineId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.resetPipelineId"></a>

```java
public void resetPipelineId()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.resetState"></a>

```java
public void resetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatasciencePipelineRuns resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_pipeline_runs.DataOciDatasciencePipelineRuns;

DataOciDatasciencePipelineRuns.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_pipeline_runs.DataOciDatasciencePipelineRuns;

DataOciDatasciencePipelineRuns.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_pipeline_runs.DataOciDatasciencePipelineRuns;

DataOciDatasciencePipelineRuns.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_pipeline_runs.DataOciDatasciencePipelineRuns;

DataOciDatasciencePipelineRuns.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDatasciencePipelineRuns.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDatasciencePipelineRuns resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDatasciencePipelineRuns to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDatasciencePipelineRuns that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatasciencePipelineRuns to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList">DataOciDatasciencePipelineRunsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.pipelineRuns">pipelineRuns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList">DataOciDatasciencePipelineRunsPipelineRunsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.createdByInput">createdByInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilter">DataOciDatasciencePipelineRunsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.pipelineIdInput">pipelineIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.pipelineId">pipelineId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.filter"></a>

```java
public DataOciDatasciencePipelineRunsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList">DataOciDatasciencePipelineRunsFilterList</a>

---

##### `pipelineRuns`<sup>Required</sup> <a name="pipelineRuns" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.pipelineRuns"></a>

```java
public DataOciDatasciencePipelineRunsPipelineRunsList getPipelineRuns();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList">DataOciDatasciencePipelineRunsPipelineRunsList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `createdByInput`<sup>Optional</sup> <a name="createdByInput" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.createdByInput"></a>

```java
public java.lang.String getCreatedByInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilter">DataOciDatasciencePipelineRunsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `pipelineIdInput`<sup>Optional</sup> <a name="pipelineIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.pipelineIdInput"></a>

```java
public java.lang.String getPipelineIdInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.pipelineId"></a>

```java
public java.lang.String getPipelineId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatasciencePipelineRunsConfig <a name="DataOciDatasciencePipelineRunsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_pipeline_runs.DataOciDatasciencePipelineRunsConfig;

DataOciDatasciencePipelineRunsConfig.builder()
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
//  .createdBy(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDatasciencePipelineRunsFilter>)
//  .id(java.lang.String)
//  .pipelineId(java.lang.String)
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#compartment_id DataOciDatasciencePipelineRuns#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#created_by DataOciDatasciencePipelineRuns#created_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#display_name DataOciDatasciencePipelineRuns#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilter">DataOciDatasciencePipelineRunsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#id DataOciDatasciencePipelineRuns#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.pipelineId">pipelineId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#pipeline_id DataOciDatasciencePipelineRuns#pipeline_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#state DataOciDatasciencePipelineRuns#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#compartment_id DataOciDatasciencePipelineRuns#compartment_id}.

---

##### `createdBy`<sup>Optional</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#created_by DataOciDatasciencePipelineRuns#created_by}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#display_name DataOciDatasciencePipelineRuns#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilter">DataOciDatasciencePipelineRunsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#filter DataOciDatasciencePipelineRuns#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#id DataOciDatasciencePipelineRuns#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pipelineId`<sup>Optional</sup> <a name="pipelineId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.pipelineId"></a>

```java
public java.lang.String getPipelineId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#pipeline_id DataOciDatasciencePipelineRuns#pipeline_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#state DataOciDatasciencePipelineRuns#state}.

---

### DataOciDatasciencePipelineRunsFilter <a name="DataOciDatasciencePipelineRunsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_pipeline_runs.DataOciDatasciencePipelineRunsFilter;

DataOciDatasciencePipelineRunsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#name DataOciDatasciencePipelineRuns#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#values DataOciDatasciencePipelineRuns#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#regex DataOciDatasciencePipelineRuns#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#name DataOciDatasciencePipelineRuns#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#values DataOciDatasciencePipelineRuns#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#regex DataOciDatasciencePipelineRuns#regex}.

---

### DataOciDatasciencePipelineRunsPipelineRuns <a name="DataOciDatasciencePipelineRunsPipelineRuns" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRuns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRuns.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_pipeline_runs.DataOciDatasciencePipelineRunsPipelineRuns;

DataOciDatasciencePipelineRunsPipelineRuns.builder()
    .build();
```


### DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetails <a name="DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_pipeline_runs.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetails;

DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetails.builder()
    .build();
```


### DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetails <a name="DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_pipeline_runs.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetails;

DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetails.builder()
    .build();
```


### DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetails <a name="DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_pipeline_runs.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetails;

DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetails.builder()
    .build();
```


### DataOciDatasciencePipelineRunsPipelineRunsLogDetails <a name="DataOciDatasciencePipelineRunsPipelineRunsLogDetails" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_pipeline_runs.DataOciDatasciencePipelineRunsPipelineRunsLogDetails;

DataOciDatasciencePipelineRunsPipelineRunsLogDetails.builder()
    .build();
```


### DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetails <a name="DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetails" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_pipeline_runs.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetails;

DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetails.builder()
    .build();
```


### DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetails <a name="DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_pipeline_runs.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetails;

DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetails.builder()
    .build();
```


### DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetails <a name="DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_pipeline_runs.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetails;

DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetails.builder()
    .build();
```


### DataOciDatasciencePipelineRunsPipelineRunsStepRuns <a name="DataOciDatasciencePipelineRunsPipelineRunsStepRuns" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRuns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRuns.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_pipeline_runs.DataOciDatasciencePipelineRunsPipelineRunsStepRuns;

DataOciDatasciencePipelineRunsPipelineRunsStepRuns.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatasciencePipelineRunsFilterList <a name="DataOciDatasciencePipelineRunsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_pipeline_runs.DataOciDatasciencePipelineRunsFilterList;

new DataOciDatasciencePipelineRunsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.get"></a>

```java
public DataOciDatasciencePipelineRunsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilter">DataOciDatasciencePipelineRunsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilter">DataOciDatasciencePipelineRunsFilter</a>>

---


### DataOciDatasciencePipelineRunsFilterOutputReference <a name="DataOciDatasciencePipelineRunsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_pipeline_runs.DataOciDatasciencePipelineRunsFilterOutputReference;

new DataOciDatasciencePipelineRunsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilter">DataOciDatasciencePipelineRunsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilter">DataOciDatasciencePipelineRunsFilter</a>

---


### DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList <a name="DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_pipeline_runs.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList;

new DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.get"></a>

```java
public DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference <a name="DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_pipeline_runs.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference;

new DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.property.commandLineArguments">commandLineArguments</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.property.environmentVariables">environmentVariables</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.property.maximumRuntimeInMinutes">maximumRuntimeInMinutes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetails">DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `commandLineArguments`<sup>Required</sup> <a name="commandLineArguments" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.property.commandLineArguments"></a>

```java
public java.lang.String getCommandLineArguments();
```

- *Type:* java.lang.String

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.property.environmentVariables"></a>

```java
public StringMap getEnvironmentVariables();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `maximumRuntimeInMinutes`<sup>Required</sup> <a name="maximumRuntimeInMinutes" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.property.maximumRuntimeInMinutes"></a>

```java
public java.lang.String getMaximumRuntimeInMinutes();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.property.internalValue"></a>

```java
public DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetails">DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetails</a>

---


### DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList <a name="DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_pipeline_runs.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList;

new DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.get"></a>

```java
public DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference <a name="DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_pipeline_runs.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference;

new DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.property.commandLineArguments">commandLineArguments</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.property.environmentVariables">environmentVariables</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.property.maximumRuntimeInMinutes">maximumRuntimeInMinutes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetails">DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `commandLineArguments`<sup>Required</sup> <a name="commandLineArguments" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.property.commandLineArguments"></a>

```java
public java.lang.String getCommandLineArguments();
```

- *Type:* java.lang.String

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.property.environmentVariables"></a>

```java
public StringMap getEnvironmentVariables();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `maximumRuntimeInMinutes`<sup>Required</sup> <a name="maximumRuntimeInMinutes" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.property.maximumRuntimeInMinutes"></a>

```java
public java.lang.String getMaximumRuntimeInMinutes();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.property.internalValue"></a>

```java
public DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetails">DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetails</a>

---


### DataOciDatasciencePipelineRunsPipelineRunsList <a name="DataOciDatasciencePipelineRunsPipelineRunsList" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_pipeline_runs.DataOciDatasciencePipelineRunsPipelineRunsList;

new DataOciDatasciencePipelineRunsPipelineRunsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.get"></a>

```java
public DataOciDatasciencePipelineRunsPipelineRunsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList <a name="DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_pipeline_runs.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList;

new DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.get"></a>

```java
public DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference <a name="DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_pipeline_runs.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference;

new DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.property.enableAutoLogCreation">enableAutoLogCreation</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.property.enableLogging">enableLogging</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.property.logGroupId">logGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.property.logId">logId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetails">DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableAutoLogCreation`<sup>Required</sup> <a name="enableAutoLogCreation" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.property.enableAutoLogCreation"></a>

```java
public IResolvable getEnableAutoLogCreation();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `enableLogging`<sup>Required</sup> <a name="enableLogging" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.property.enableLogging"></a>

```java
public IResolvable getEnableLogging();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `logGroupId`<sup>Required</sup> <a name="logGroupId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.property.logGroupId"></a>

```java
public java.lang.String getLogGroupId();
```

- *Type:* java.lang.String

---

##### `logId`<sup>Required</sup> <a name="logId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.property.logId"></a>

```java
public java.lang.String getLogId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.property.internalValue"></a>

```java
public DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetails">DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetails</a>

---


### DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList <a name="DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_pipeline_runs.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList;

new DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.get"></a>

```java
public DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference <a name="DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_pipeline_runs.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference;

new DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.property.logGroupId">logGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.property.logId">logId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetails">DataOciDatasciencePipelineRunsPipelineRunsLogDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `logGroupId`<sup>Required</sup> <a name="logGroupId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.property.logGroupId"></a>

```java
public java.lang.String getLogGroupId();
```

- *Type:* java.lang.String

---

##### `logId`<sup>Required</sup> <a name="logId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.property.logId"></a>

```java
public java.lang.String getLogId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.property.internalValue"></a>

```java
public DataOciDatasciencePipelineRunsPipelineRunsLogDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetails">DataOciDatasciencePipelineRunsPipelineRunsLogDetails</a>

---


### DataOciDatasciencePipelineRunsPipelineRunsOutputReference <a name="DataOciDatasciencePipelineRunsPipelineRunsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_pipeline_runs.DataOciDatasciencePipelineRunsPipelineRunsOutputReference;

new DataOciDatasciencePipelineRunsPipelineRunsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.configurationDetails">configurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList">DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.configurationOverrideDetails">configurationOverrideDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList">DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.deleteRelatedJobRuns">deleteRelatedJobRuns</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.logConfigurationOverrideDetails">logConfigurationOverrideDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList">DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.logDetails">logDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList">DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.opcParentRptUrl">opcParentRptUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.pipelineId">pipelineId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.stepOverrideDetails">stepOverrideDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList">DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.stepRuns">stepRuns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList">DataOciDatasciencePipelineRunsPipelineRunsStepRunsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.timeAccepted">timeAccepted</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.timeFinished">timeFinished</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.timeStarted">timeStarted</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRuns">DataOciDatasciencePipelineRunsPipelineRuns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `configurationDetails`<sup>Required</sup> <a name="configurationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.configurationDetails"></a>

```java
public DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList getConfigurationDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList">DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList</a>

---

##### `configurationOverrideDetails`<sup>Required</sup> <a name="configurationOverrideDetails" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.configurationOverrideDetails"></a>

```java
public DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList getConfigurationOverrideDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList">DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList</a>

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `deleteRelatedJobRuns`<sup>Required</sup> <a name="deleteRelatedJobRuns" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.deleteRelatedJobRuns"></a>

```java
public IResolvable getDeleteRelatedJobRuns();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `logConfigurationOverrideDetails`<sup>Required</sup> <a name="logConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.logConfigurationOverrideDetails"></a>

```java
public DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList getLogConfigurationOverrideDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList">DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList</a>

---

##### `logDetails`<sup>Required</sup> <a name="logDetails" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.logDetails"></a>

```java
public DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList getLogDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList">DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList</a>

---

##### `opcParentRptUrl`<sup>Required</sup> <a name="opcParentRptUrl" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.opcParentRptUrl"></a>

```java
public java.lang.String getOpcParentRptUrl();
```

- *Type:* java.lang.String

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.pipelineId"></a>

```java
public java.lang.String getPipelineId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stepOverrideDetails`<sup>Required</sup> <a name="stepOverrideDetails" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.stepOverrideDetails"></a>

```java
public DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList getStepOverrideDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList">DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList</a>

---

##### `stepRuns`<sup>Required</sup> <a name="stepRuns" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.stepRuns"></a>

```java
public DataOciDatasciencePipelineRunsPipelineRunsStepRunsList getStepRuns();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList">DataOciDatasciencePipelineRunsPipelineRunsStepRunsList</a>

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeAccepted`<sup>Required</sup> <a name="timeAccepted" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.timeAccepted"></a>

```java
public java.lang.String getTimeAccepted();
```

- *Type:* java.lang.String

---

##### `timeFinished`<sup>Required</sup> <a name="timeFinished" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.timeFinished"></a>

```java
public java.lang.String getTimeFinished();
```

- *Type:* java.lang.String

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.timeStarted"></a>

```java
public java.lang.String getTimeStarted();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.internalValue"></a>

```java
public DataOciDatasciencePipelineRunsPipelineRuns getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRuns">DataOciDatasciencePipelineRunsPipelineRuns</a>

---


### DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList <a name="DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_pipeline_runs.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList;

new DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.get"></a>

```java
public DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference <a name="DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_pipeline_runs.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference;

new DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.property.stepConfigurationDetails">stepConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList">DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.property.stepContainerConfigurationDetails">stepContainerConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList">DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.property.stepName">stepName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetails">DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `stepConfigurationDetails`<sup>Required</sup> <a name="stepConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.property.stepConfigurationDetails"></a>

```java
public DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList getStepConfigurationDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList">DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList</a>

---

##### `stepContainerConfigurationDetails`<sup>Required</sup> <a name="stepContainerConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.property.stepContainerConfigurationDetails"></a>

```java
public DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList getStepContainerConfigurationDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList">DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList</a>

---

##### `stepName`<sup>Required</sup> <a name="stepName" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.property.stepName"></a>

```java
public java.lang.String getStepName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.property.internalValue"></a>

```java
public DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetails">DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetails</a>

---


### DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList <a name="DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_pipeline_runs.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList;

new DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.get"></a>

```java
public DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference <a name="DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_pipeline_runs.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference;

new DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.property.commandLineArguments">commandLineArguments</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.property.environmentVariables">environmentVariables</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.property.maximumRuntimeInMinutes">maximumRuntimeInMinutes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetails">DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `commandLineArguments`<sup>Required</sup> <a name="commandLineArguments" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.property.commandLineArguments"></a>

```java
public java.lang.String getCommandLineArguments();
```

- *Type:* java.lang.String

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.property.environmentVariables"></a>

```java
public StringMap getEnvironmentVariables();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `maximumRuntimeInMinutes`<sup>Required</sup> <a name="maximumRuntimeInMinutes" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.property.maximumRuntimeInMinutes"></a>

```java
public java.lang.String getMaximumRuntimeInMinutes();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.property.internalValue"></a>

```java
public DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetails">DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetails</a>

---


### DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList <a name="DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_pipeline_runs.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList;

new DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.get"></a>

```java
public DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference <a name="DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_pipeline_runs.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference;

new DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.cmd">cmd</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.containerType">containerType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.entrypoint">entrypoint</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.image">image</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.imageDigest">imageDigest</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.imageSignatureId">imageSignatureId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetails">DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cmd`<sup>Required</sup> <a name="cmd" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.cmd"></a>

```java
public java.util.List<java.lang.String> getCmd();
```

- *Type:* java.util.List<java.lang.String>

---

##### `containerType`<sup>Required</sup> <a name="containerType" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.containerType"></a>

```java
public java.lang.String getContainerType();
```

- *Type:* java.lang.String

---

##### `entrypoint`<sup>Required</sup> <a name="entrypoint" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.entrypoint"></a>

```java
public java.util.List<java.lang.String> getEntrypoint();
```

- *Type:* java.util.List<java.lang.String>

---

##### `image`<sup>Required</sup> <a name="image" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

---

##### `imageDigest`<sup>Required</sup> <a name="imageDigest" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.imageDigest"></a>

```java
public java.lang.String getImageDigest();
```

- *Type:* java.lang.String

---

##### `imageSignatureId`<sup>Required</sup> <a name="imageSignatureId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.imageSignatureId"></a>

```java
public java.lang.String getImageSignatureId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.internalValue"></a>

```java
public DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetails">DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetails</a>

---


### DataOciDatasciencePipelineRunsPipelineRunsStepRunsList <a name="DataOciDatasciencePipelineRunsPipelineRunsStepRunsList" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_pipeline_runs.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList;

new DataOciDatasciencePipelineRunsPipelineRunsStepRunsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.get"></a>

```java
public DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference <a name="DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_pipeline_runs.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference;

new DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.jobRunId">jobRunId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.stepName">stepName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.stepType">stepType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.timeFinished">timeFinished</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.timeStarted">timeStarted</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRuns">DataOciDatasciencePipelineRunsPipelineRunsStepRuns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `jobRunId`<sup>Required</sup> <a name="jobRunId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.jobRunId"></a>

```java
public java.lang.String getJobRunId();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stepName`<sup>Required</sup> <a name="stepName" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.stepName"></a>

```java
public java.lang.String getStepName();
```

- *Type:* java.lang.String

---

##### `stepType`<sup>Required</sup> <a name="stepType" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.stepType"></a>

```java
public java.lang.String getStepType();
```

- *Type:* java.lang.String

---

##### `timeFinished`<sup>Required</sup> <a name="timeFinished" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.timeFinished"></a>

```java
public java.lang.String getTimeFinished();
```

- *Type:* java.lang.String

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.timeStarted"></a>

```java
public java.lang.String getTimeStarted();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.internalValue"></a>

```java
public DataOciDatasciencePipelineRunsPipelineRunsStepRuns getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRuns">DataOciDatasciencePipelineRunsPipelineRunsStepRuns</a>

---



