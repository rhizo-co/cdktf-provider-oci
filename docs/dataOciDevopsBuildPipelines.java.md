# `dataOciDevopsBuildPipelines` Submodule <a name="`dataOciDevopsBuildPipelines` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDevopsBuildPipelines <a name="DataOciDevopsBuildPipelines" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipelines oci_devops_build_pipelines}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_build_pipelines.DataOciDevopsBuildPipelines;

DataOciDevopsBuildPipelines.Builder.create(Construct scope, java.lang.String id)
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
//  .compartmentId(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDevopsBuildPipelinesFilter>)
//  .id(java.lang.String)
//  .projectId(java.lang.String)
//  .state(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipelines#compartment_id DataOciDevopsBuildPipelines#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipelines#display_name DataOciDevopsBuildPipelines#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilter">DataOciDevopsBuildPipelinesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipelines#id DataOciDevopsBuildPipelines#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipelines#project_id DataOciDevopsBuildPipelines#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipelines#state DataOciDevopsBuildPipelines#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipelines#compartment_id DataOciDevopsBuildPipelines#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipelines#display_name DataOciDevopsBuildPipelines#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilter">DataOciDevopsBuildPipelinesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipelines#filter DataOciDevopsBuildPipelines#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipelines#id DataOciDevopsBuildPipelines#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipelines#project_id DataOciDevopsBuildPipelines#project_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipelines#state DataOciDevopsBuildPipelines#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciDevopsBuildPipelinesFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilter">DataOciDevopsBuildPipelinesFilter</a>>

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.resetCompartmentId"></a>

```java
public void resetCompartmentId()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.resetId"></a>

```java
public void resetId()
```

##### `resetProjectId` <a name="resetProjectId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.resetProjectId"></a>

```java
public void resetProjectId()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.resetState"></a>

```java
public void resetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDevopsBuildPipelines resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_build_pipelines.DataOciDevopsBuildPipelines;

DataOciDevopsBuildPipelines.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_build_pipelines.DataOciDevopsBuildPipelines;

DataOciDevopsBuildPipelines.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_build_pipelines.DataOciDevopsBuildPipelines;

DataOciDevopsBuildPipelines.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_build_pipelines.DataOciDevopsBuildPipelines;

DataOciDevopsBuildPipelines.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDevopsBuildPipelines.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDevopsBuildPipelines resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDevopsBuildPipelines to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDevopsBuildPipelines that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipelines#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDevopsBuildPipelines to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.property.buildPipelineCollection">buildPipelineCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionList">DataOciDevopsBuildPipelinesBuildPipelineCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterList">DataOciDevopsBuildPipelinesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilter">DataOciDevopsBuildPipelinesFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `buildPipelineCollection`<sup>Required</sup> <a name="buildPipelineCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.property.buildPipelineCollection"></a>

```java
public DataOciDevopsBuildPipelinesBuildPipelineCollectionList getBuildPipelineCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionList">DataOciDevopsBuildPipelinesBuildPipelineCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.property.filter"></a>

```java
public DataOciDevopsBuildPipelinesFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterList">DataOciDevopsBuildPipelinesFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilter">DataOciDevopsBuildPipelinesFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelines.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDevopsBuildPipelinesBuildPipelineCollection <a name="DataOciDevopsBuildPipelinesBuildPipelineCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_build_pipelines.DataOciDevopsBuildPipelinesBuildPipelineCollection;

DataOciDevopsBuildPipelinesBuildPipelineCollection.builder()
    .build();
```


### DataOciDevopsBuildPipelinesBuildPipelineCollectionItems <a name="DataOciDevopsBuildPipelinesBuildPipelineCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_build_pipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItems;

DataOciDevopsBuildPipelinesBuildPipelineCollectionItems.builder()
    .build();
```


### DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParameters <a name="DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParameters" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParameters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_build_pipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParameters;

DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParameters.builder()
    .build();
```


### DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItems <a name="DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_build_pipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItems;

DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItems.builder()
    .build();
```


### DataOciDevopsBuildPipelinesConfig <a name="DataOciDevopsBuildPipelinesConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_build_pipelines.DataOciDevopsBuildPipelinesConfig;

DataOciDevopsBuildPipelinesConfig.builder()
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
//  .compartmentId(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDevopsBuildPipelinesFilter>)
//  .id(java.lang.String)
//  .projectId(java.lang.String)
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipelines#compartment_id DataOciDevopsBuildPipelines#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipelines#display_name DataOciDevopsBuildPipelines#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilter">DataOciDevopsBuildPipelinesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipelines#id DataOciDevopsBuildPipelines#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipelines#project_id DataOciDevopsBuildPipelines#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipelines#state DataOciDevopsBuildPipelines#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipelines#compartment_id DataOciDevopsBuildPipelines#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipelines#display_name DataOciDevopsBuildPipelines#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilter">DataOciDevopsBuildPipelinesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipelines#filter DataOciDevopsBuildPipelines#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipelines#id DataOciDevopsBuildPipelines#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipelines#project_id DataOciDevopsBuildPipelines#project_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipelines#state DataOciDevopsBuildPipelines#state}.

---

### DataOciDevopsBuildPipelinesFilter <a name="DataOciDevopsBuildPipelinesFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_build_pipelines.DataOciDevopsBuildPipelinesFilter;

DataOciDevopsBuildPipelinesFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipelines#name DataOciDevopsBuildPipelines#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipelines#values DataOciDevopsBuildPipelines#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipelines#regex DataOciDevopsBuildPipelines#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipelines#name DataOciDevopsBuildPipelines#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipelines#values DataOciDevopsBuildPipelines#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipelines#regex DataOciDevopsBuildPipelines#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsList <a name="DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_build_pipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsList;

new DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsList.get"></a>

```java
public DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsOutputReference <a name="DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_build_pipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsOutputReference;

new DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsOutputReference.property.defaultValue">defaultValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItems">DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsOutputReference.property.defaultValue"></a>

```java
public java.lang.String getDefaultValue();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsOutputReference.property.internalValue"></a>

```java
public DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItems">DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItems</a>

---


### DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersList <a name="DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_build_pipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersList;

new DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersList.get"></a>

```java
public DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersOutputReference <a name="DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_build_pipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersOutputReference;

new DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsList">DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParameters">DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersOutputReference.property.items"></a>

```java
public DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsList">DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersOutputReference.property.internalValue"></a>

```java
public DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParameters getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParameters">DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParameters</a>

---


### DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsList <a name="DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_build_pipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsList;

new DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsList.get"></a>

```java
public DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference <a name="DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_build_pipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference;

new DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.property.buildPipelineParameters">buildPipelineParameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersList">DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItems">DataOciDevopsBuildPipelinesBuildPipelineCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `buildPipelineParameters`<sup>Required</sup> <a name="buildPipelineParameters" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.property.buildPipelineParameters"></a>

```java
public DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersList getBuildPipelineParameters();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersList">DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsBuildPipelineParametersList</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciDevopsBuildPipelinesBuildPipelineCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItems">DataOciDevopsBuildPipelinesBuildPipelineCollectionItems</a>

---


### DataOciDevopsBuildPipelinesBuildPipelineCollectionList <a name="DataOciDevopsBuildPipelinesBuildPipelineCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_build_pipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionList;

new DataOciDevopsBuildPipelinesBuildPipelineCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionList.get"></a>

```java
public DataOciDevopsBuildPipelinesBuildPipelineCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsBuildPipelinesBuildPipelineCollectionOutputReference <a name="DataOciDevopsBuildPipelinesBuildPipelineCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_build_pipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionOutputReference;

new DataOciDevopsBuildPipelinesBuildPipelineCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsList">DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollection">DataOciDevopsBuildPipelinesBuildPipelineCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionOutputReference.property.items"></a>

```java
public DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsList">DataOciDevopsBuildPipelinesBuildPipelineCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollectionOutputReference.property.internalValue"></a>

```java
public DataOciDevopsBuildPipelinesBuildPipelineCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesBuildPipelineCollection">DataOciDevopsBuildPipelinesBuildPipelineCollection</a>

---


### DataOciDevopsBuildPipelinesFilterList <a name="DataOciDevopsBuildPipelinesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_build_pipelines.DataOciDevopsBuildPipelinesFilterList;

new DataOciDevopsBuildPipelinesFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterList.get"></a>

```java
public DataOciDevopsBuildPipelinesFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilter">DataOciDevopsBuildPipelinesFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilter">DataOciDevopsBuildPipelinesFilter</a>>

---


### DataOciDevopsBuildPipelinesFilterOutputReference <a name="DataOciDevopsBuildPipelinesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_build_pipelines.DataOciDevopsBuildPipelinesFilterOutputReference;

new DataOciDevopsBuildPipelinesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilter">DataOciDevopsBuildPipelinesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelines.DataOciDevopsBuildPipelinesFilter">DataOciDevopsBuildPipelinesFilter</a>

---



