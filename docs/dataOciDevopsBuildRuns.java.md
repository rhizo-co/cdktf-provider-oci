# `dataOciDevopsBuildRuns` Submodule <a name="`dataOciDevopsBuildRuns` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDevopsBuildRuns <a name="DataOciDevopsBuildRuns" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs oci_devops_build_runs}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_build_runs.DataOciDevopsBuildRuns;

DataOciDevopsBuildRuns.Builder.create(Construct scope, java.lang.String id)
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
//  .buildPipelineId(java.lang.String)
//  .compartmentId(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDevopsBuildRunsFilter>)
//  .id(java.lang.String)
//  .projectId(java.lang.String)
//  .state(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.Initializer.parameter.buildPipelineId">buildPipelineId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#build_pipeline_id DataOciDevopsBuildRuns#build_pipeline_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#compartment_id DataOciDevopsBuildRuns#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#display_name DataOciDevopsBuildRuns#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilter">DataOciDevopsBuildRunsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#id DataOciDevopsBuildRuns#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#project_id DataOciDevopsBuildRuns#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#state DataOciDevopsBuildRuns#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `buildPipelineId`<sup>Optional</sup> <a name="buildPipelineId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.Initializer.parameter.buildPipelineId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#build_pipeline_id DataOciDevopsBuildRuns#build_pipeline_id}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#compartment_id DataOciDevopsBuildRuns#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#display_name DataOciDevopsBuildRuns#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilter">DataOciDevopsBuildRunsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#filter DataOciDevopsBuildRuns#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#id DataOciDevopsBuildRuns#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#project_id DataOciDevopsBuildRuns#project_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#state DataOciDevopsBuildRuns#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.resetBuildPipelineId">resetBuildPipelineId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciDevopsBuildRunsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilter">DataOciDevopsBuildRunsFilter</a>>

---

##### `resetBuildPipelineId` <a name="resetBuildPipelineId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.resetBuildPipelineId"></a>

```java
public void resetBuildPipelineId()
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.resetCompartmentId"></a>

```java
public void resetCompartmentId()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.resetId"></a>

```java
public void resetId()
```

##### `resetProjectId` <a name="resetProjectId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.resetProjectId"></a>

```java
public void resetProjectId()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.resetState"></a>

```java
public void resetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDevopsBuildRuns resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_build_runs.DataOciDevopsBuildRuns;

DataOciDevopsBuildRuns.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_build_runs.DataOciDevopsBuildRuns;

DataOciDevopsBuildRuns.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_build_runs.DataOciDevopsBuildRuns;

DataOciDevopsBuildRuns.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_build_runs.DataOciDevopsBuildRuns;

DataOciDevopsBuildRuns.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDevopsBuildRuns.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDevopsBuildRuns resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDevopsBuildRuns to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDevopsBuildRuns that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDevopsBuildRuns to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.buildRunSummaryCollection">buildRunSummaryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList">DataOciDevopsBuildRunsBuildRunSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList">DataOciDevopsBuildRunsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.buildPipelineIdInput">buildPipelineIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilter">DataOciDevopsBuildRunsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.buildPipelineId">buildPipelineId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `buildRunSummaryCollection`<sup>Required</sup> <a name="buildRunSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.buildRunSummaryCollection"></a>

```java
public DataOciDevopsBuildRunsBuildRunSummaryCollectionList getBuildRunSummaryCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList">DataOciDevopsBuildRunsBuildRunSummaryCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.filter"></a>

```java
public DataOciDevopsBuildRunsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList">DataOciDevopsBuildRunsFilterList</a>

---

##### `buildPipelineIdInput`<sup>Optional</sup> <a name="buildPipelineIdInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.buildPipelineIdInput"></a>

```java
public java.lang.String getBuildPipelineIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilter">DataOciDevopsBuildRunsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `buildPipelineId`<sup>Required</sup> <a name="buildPipelineId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.buildPipelineId"></a>

```java
public java.lang.String getBuildPipelineId();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDevopsBuildRunsBuildRunSummaryCollection <a name="DataOciDevopsBuildRunsBuildRunSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_build_runs.DataOciDevopsBuildRunsBuildRunSummaryCollection;

DataOciDevopsBuildRunsBuildRunSummaryCollection.builder()
    .build();
```


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItems <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_build_runs.DataOciDevopsBuildRunsBuildRunSummaryCollectionItems;

DataOciDevopsBuildRunsBuildRunSummaryCollectionItems.builder()
    .build();
```


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArguments <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArguments" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArguments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArguments.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_build_runs.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArguments;

DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArguments.builder()
    .build();
```


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItems <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_build_runs.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItems;

DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItems.builder()
    .build();
```


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummary <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummary" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummary"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummary.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_build_runs.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummary;

DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummary.builder()
    .build();
```


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSource <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_build_runs.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSource;

DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSource.builder()
    .build();
```


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfo <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfo" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_build_runs.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfo;

DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfo.builder()
    .build();
```


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActions <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActions" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_build_runs.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActions;

DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActions.builder()
    .build();
```


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilter <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_build_runs.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilter;

DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilter.builder()
    .build();
```


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterInclude <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterInclude" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterInclude"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterInclude.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_build_runs.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterInclude;

DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterInclude.builder()
    .build();
```


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfo <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfo" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_build_runs.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfo;

DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfo.builder()
    .build();
```


### DataOciDevopsBuildRunsConfig <a name="DataOciDevopsBuildRunsConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_build_runs.DataOciDevopsBuildRunsConfig;

DataOciDevopsBuildRunsConfig.builder()
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
//  .buildPipelineId(java.lang.String)
//  .compartmentId(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDevopsBuildRunsFilter>)
//  .id(java.lang.String)
//  .projectId(java.lang.String)
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.buildPipelineId">buildPipelineId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#build_pipeline_id DataOciDevopsBuildRuns#build_pipeline_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#compartment_id DataOciDevopsBuildRuns#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#display_name DataOciDevopsBuildRuns#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilter">DataOciDevopsBuildRunsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#id DataOciDevopsBuildRuns#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#project_id DataOciDevopsBuildRuns#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#state DataOciDevopsBuildRuns#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `buildPipelineId`<sup>Optional</sup> <a name="buildPipelineId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.buildPipelineId"></a>

```java
public java.lang.String getBuildPipelineId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#build_pipeline_id DataOciDevopsBuildRuns#build_pipeline_id}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#compartment_id DataOciDevopsBuildRuns#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#display_name DataOciDevopsBuildRuns#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilter">DataOciDevopsBuildRunsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#filter DataOciDevopsBuildRuns#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#id DataOciDevopsBuildRuns#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#project_id DataOciDevopsBuildRuns#project_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#state DataOciDevopsBuildRuns#state}.

---

### DataOciDevopsBuildRunsFilter <a name="DataOciDevopsBuildRunsFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_build_runs.DataOciDevopsBuildRunsFilter;

DataOciDevopsBuildRunsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#name DataOciDevopsBuildRuns#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#values DataOciDevopsBuildRuns#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#regex DataOciDevopsBuildRuns#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#name DataOciDevopsBuildRuns#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#values DataOciDevopsBuildRuns#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#regex DataOciDevopsBuildRuns#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_build_runs.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList;

new DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.get"></a>

```java
public DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_build_runs.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference;

new DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItems">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.property.internalValue"></a>

```java
public DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItems">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItems</a>

---


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_build_runs.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList;

new DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.get"></a>

```java
public DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_build_runs.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference;

new DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArguments">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArguments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.property.items"></a>

```java
public DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.property.internalValue"></a>

```java
public DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArguments getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArguments">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArguments</a>

---


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_build_runs.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList;

new DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.get"></a>

```java
public DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_build_runs.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference;

new DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.property.timeFinished">timeFinished</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.property.timeStarted">timeStarted</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummary">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `timeFinished`<sup>Required</sup> <a name="timeFinished" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.property.timeFinished"></a>

```java
public java.lang.String getTimeFinished();
```

- *Type:* java.lang.String

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.property.timeStarted"></a>

```java
public java.lang.String getTimeStarted();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.property.internalValue"></a>

```java
public DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummary getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummary">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummary</a>

---


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_build_runs.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList;

new DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.get"></a>

```java
public DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_build_runs.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference;

new DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.property.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.property.sourceType">sourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.property.triggerInfo">triggerInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSource">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.property.repositoryId"></a>

```java
public java.lang.String getRepositoryId();
```

- *Type:* java.lang.String

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.property.sourceType"></a>

```java
public java.lang.String getSourceType();
```

- *Type:* java.lang.String

---

##### `triggerInfo`<sup>Required</sup> <a name="triggerInfo" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.property.triggerInfo"></a>

```java
public DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList getTriggerInfo();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.property.internalValue"></a>

```java
public DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSource getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSource">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSource</a>

---


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_build_runs.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList;

new DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.get"></a>

```java
public DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_build_runs.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference;

new DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.baseRef">baseRef</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.headRef">headRef</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterInclude">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterInclude</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `baseRef`<sup>Required</sup> <a name="baseRef" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.baseRef"></a>

```java
public java.lang.String getBaseRef();
```

- *Type:* java.lang.String

---

##### `headRef`<sup>Required</sup> <a name="headRef" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.headRef"></a>

```java
public java.lang.String getHeadRef();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.internalValue"></a>

```java
public DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterInclude getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterInclude">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterInclude</a>

---


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_build_runs.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList;

new DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.get"></a>

```java
public DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_build_runs.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference;

new DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.property.events">events</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.property.include">include</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.property.triggerSource">triggerSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilter">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `events`<sup>Required</sup> <a name="events" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.property.events"></a>

```java
public java.util.List<java.lang.String> getEvents();
```

- *Type:* java.util.List<java.lang.String>

---

##### `include`<sup>Required</sup> <a name="include" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.property.include"></a>

```java
public DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList getInclude();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList</a>

---

##### `triggerSource`<sup>Required</sup> <a name="triggerSource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.property.triggerSource"></a>

```java
public java.lang.String getTriggerSource();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.property.internalValue"></a>

```java
public DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilter getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilter">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilter</a>

---


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_build_runs.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList;

new DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.get"></a>

```java
public DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_build_runs.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference;

new DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.property.buildPipelineId">buildPipelineId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActions">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `buildPipelineId`<sup>Required</sup> <a name="buildPipelineId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.property.buildPipelineId"></a>

```java
public java.lang.String getBuildPipelineId();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.property.filter"></a>

```java
public DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.property.internalValue"></a>

```java
public DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActions">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActions</a>

---


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_build_runs.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList;

new DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.get"></a>

```java
public DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_build_runs.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference;

new DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.property.actions">actions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.property.triggerId">triggerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfo">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actions`<sup>Required</sup> <a name="actions" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.property.actions"></a>

```java
public DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList getActions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `triggerId`<sup>Required</sup> <a name="triggerId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.property.triggerId"></a>

```java
public java.lang.String getTriggerId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.property.internalValue"></a>

```java
public DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfo getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfo">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfo</a>

---


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_build_runs.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList;

new DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.get"></a>

```java
public DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_build_runs.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference;

new DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.property.commitHash">commitHash</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.property.repositoryBranch">repositoryBranch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.property.repositoryUrl">repositoryUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfo">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `commitHash`<sup>Required</sup> <a name="commitHash" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.property.commitHash"></a>

```java
public java.lang.String getCommitHash();
```

- *Type:* java.lang.String

---

##### `repositoryBranch`<sup>Required</sup> <a name="repositoryBranch" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.property.repositoryBranch"></a>

```java
public java.lang.String getRepositoryBranch();
```

- *Type:* java.lang.String

---

##### `repositoryUrl`<sup>Required</sup> <a name="repositoryUrl" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.property.repositoryUrl"></a>

```java
public java.lang.String getRepositoryUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.property.internalValue"></a>

```java
public DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfo getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfo">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfo</a>

---


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_build_runs.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList;

new DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.get"></a>

```java
public DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_build_runs.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference;

new DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.buildPipelineId">buildPipelineId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.buildRunArguments">buildRunArguments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.buildRunProgressSummary">buildRunProgressSummary</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.buildRunSource">buildRunSource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.commitInfo">commitInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItems">DataOciDevopsBuildRunsBuildRunSummaryCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `buildPipelineId`<sup>Required</sup> <a name="buildPipelineId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.buildPipelineId"></a>

```java
public java.lang.String getBuildPipelineId();
```

- *Type:* java.lang.String

---

##### `buildRunArguments`<sup>Required</sup> <a name="buildRunArguments" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.buildRunArguments"></a>

```java
public DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList getBuildRunArguments();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList</a>

---

##### `buildRunProgressSummary`<sup>Required</sup> <a name="buildRunProgressSummary" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.buildRunProgressSummary"></a>

```java
public DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList getBuildRunProgressSummary();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList</a>

---

##### `buildRunSource`<sup>Required</sup> <a name="buildRunSource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.buildRunSource"></a>

```java
public DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList getBuildRunSource();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList</a>

---

##### `commitInfo`<sup>Required</sup> <a name="commitInfo" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.commitInfo"></a>

```java
public DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList getCommitInfo();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciDevopsBuildRunsBuildRunSummaryCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItems">DataOciDevopsBuildRunsBuildRunSummaryCollectionItems</a>

---


### DataOciDevopsBuildRunsBuildRunSummaryCollectionList <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_build_runs.DataOciDevopsBuildRunsBuildRunSummaryCollectionList;

new DataOciDevopsBuildRunsBuildRunSummaryCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.get"></a>

```java
public DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_build_runs.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference;

new DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollection">DataOciDevopsBuildRunsBuildRunSummaryCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.property.items"></a>

```java
public DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.property.internalValue"></a>

```java
public DataOciDevopsBuildRunsBuildRunSummaryCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollection">DataOciDevopsBuildRunsBuildRunSummaryCollection</a>

---


### DataOciDevopsBuildRunsFilterList <a name="DataOciDevopsBuildRunsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_build_runs.DataOciDevopsBuildRunsFilterList;

new DataOciDevopsBuildRunsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.get"></a>

```java
public DataOciDevopsBuildRunsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilter">DataOciDevopsBuildRunsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilter">DataOciDevopsBuildRunsFilter</a>>

---


### DataOciDevopsBuildRunsFilterOutputReference <a name="DataOciDevopsBuildRunsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_build_runs.DataOciDevopsBuildRunsFilterOutputReference;

new DataOciDevopsBuildRunsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilter">DataOciDevopsBuildRunsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilter">DataOciDevopsBuildRunsFilter</a>

---



