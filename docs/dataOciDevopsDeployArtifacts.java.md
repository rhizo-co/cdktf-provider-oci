# `dataOciDevopsDeployArtifacts` Submodule <a name="`dataOciDevopsDeployArtifacts` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDevopsDeployArtifacts <a name="DataOciDevopsDeployArtifacts" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_artifacts oci_devops_deploy_artifacts}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_artifacts.DataOciDevopsDeployArtifacts;

DataOciDevopsDeployArtifacts.Builder.create(Construct scope, java.lang.String id)
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
//  .filter(java.util.List<DataOciDevopsDeployArtifactsFilter>)
//  .id(java.lang.String)
//  .projectId(java.lang.String)
//  .state(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_artifacts#compartment_id DataOciDevopsDeployArtifacts#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_artifacts#display_name DataOciDevopsDeployArtifacts#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilter">DataOciDevopsDeployArtifactsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_artifacts#id DataOciDevopsDeployArtifacts#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_artifacts#project_id DataOciDevopsDeployArtifacts#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_artifacts#state DataOciDevopsDeployArtifacts#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_artifacts#compartment_id DataOciDevopsDeployArtifacts#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_artifacts#display_name DataOciDevopsDeployArtifacts#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilter">DataOciDevopsDeployArtifactsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_artifacts#filter DataOciDevopsDeployArtifacts#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_artifacts#id DataOciDevopsDeployArtifacts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_artifacts#project_id DataOciDevopsDeployArtifacts#project_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_artifacts#state DataOciDevopsDeployArtifacts#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciDevopsDeployArtifactsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilter">DataOciDevopsDeployArtifactsFilter</a>>

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.resetCompartmentId"></a>

```java
public void resetCompartmentId()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.resetId"></a>

```java
public void resetId()
```

##### `resetProjectId` <a name="resetProjectId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.resetProjectId"></a>

```java
public void resetProjectId()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.resetState"></a>

```java
public void resetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDevopsDeployArtifacts resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_artifacts.DataOciDevopsDeployArtifacts;

DataOciDevopsDeployArtifacts.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_artifacts.DataOciDevopsDeployArtifacts;

DataOciDevopsDeployArtifacts.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_artifacts.DataOciDevopsDeployArtifacts;

DataOciDevopsDeployArtifacts.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_artifacts.DataOciDevopsDeployArtifacts;

DataOciDevopsDeployArtifacts.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDevopsDeployArtifacts.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDevopsDeployArtifacts resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDevopsDeployArtifacts to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDevopsDeployArtifacts that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_artifacts#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDevopsDeployArtifacts to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.deployArtifactCollection">deployArtifactCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionList">DataOciDevopsDeployArtifactsDeployArtifactCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterList">DataOciDevopsDeployArtifactsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilter">DataOciDevopsDeployArtifactsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `deployArtifactCollection`<sup>Required</sup> <a name="deployArtifactCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.deployArtifactCollection"></a>

```java
public DataOciDevopsDeployArtifactsDeployArtifactCollectionList getDeployArtifactCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionList">DataOciDevopsDeployArtifactsDeployArtifactCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.filter"></a>

```java
public DataOciDevopsDeployArtifactsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterList">DataOciDevopsDeployArtifactsFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilter">DataOciDevopsDeployArtifactsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDevopsDeployArtifactsConfig <a name="DataOciDevopsDeployArtifactsConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_artifacts.DataOciDevopsDeployArtifactsConfig;

DataOciDevopsDeployArtifactsConfig.builder()
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
//  .filter(java.util.List<DataOciDevopsDeployArtifactsFilter>)
//  .id(java.lang.String)
//  .projectId(java.lang.String)
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_artifacts#compartment_id DataOciDevopsDeployArtifacts#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_artifacts#display_name DataOciDevopsDeployArtifacts#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilter">DataOciDevopsDeployArtifactsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_artifacts#id DataOciDevopsDeployArtifacts#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_artifacts#project_id DataOciDevopsDeployArtifacts#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_artifacts#state DataOciDevopsDeployArtifacts#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_artifacts#compartment_id DataOciDevopsDeployArtifacts#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_artifacts#display_name DataOciDevopsDeployArtifacts#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilter">DataOciDevopsDeployArtifactsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_artifacts#filter DataOciDevopsDeployArtifacts#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_artifacts#id DataOciDevopsDeployArtifacts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_artifacts#project_id DataOciDevopsDeployArtifacts#project_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_artifacts#state DataOciDevopsDeployArtifacts#state}.

---

### DataOciDevopsDeployArtifactsDeployArtifactCollection <a name="DataOciDevopsDeployArtifactsDeployArtifactCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_artifacts.DataOciDevopsDeployArtifactsDeployArtifactCollection;

DataOciDevopsDeployArtifactsDeployArtifactCollection.builder()
    .build();
```


### DataOciDevopsDeployArtifactsDeployArtifactCollectionItems <a name="DataOciDevopsDeployArtifactsDeployArtifactCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_artifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItems;

DataOciDevopsDeployArtifactsDeployArtifactCollectionItems.builder()
    .build();
```


### DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSource <a name="DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_artifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSource;

DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSource.builder()
    .build();
```


### DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySource <a name="DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_artifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySource;

DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySource.builder()
    .build();
```


### DataOciDevopsDeployArtifactsFilter <a name="DataOciDevopsDeployArtifactsFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_artifacts.DataOciDevopsDeployArtifactsFilter;

DataOciDevopsDeployArtifactsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_artifacts#name DataOciDevopsDeployArtifacts#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_artifacts#values DataOciDevopsDeployArtifacts#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_artifacts#regex DataOciDevopsDeployArtifacts#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_artifacts#name DataOciDevopsDeployArtifacts#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_artifacts#values DataOciDevopsDeployArtifacts#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_artifacts#regex DataOciDevopsDeployArtifacts#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList <a name="DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_artifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList;

new DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList.get"></a>

```java
public DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference <a name="DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_artifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference;

new DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.currentPublicKey">currentPublicKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.previousPublicKey">previousPublicKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.vaultSecretId">vaultSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.verificationKeySourceType">verificationKeySourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySource">DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `currentPublicKey`<sup>Required</sup> <a name="currentPublicKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.currentPublicKey"></a>

```java
public java.lang.String getCurrentPublicKey();
```

- *Type:* java.lang.String

---

##### `previousPublicKey`<sup>Required</sup> <a name="previousPublicKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.previousPublicKey"></a>

```java
public java.lang.String getPreviousPublicKey();
```

- *Type:* java.lang.String

---

##### `vaultSecretId`<sup>Required</sup> <a name="vaultSecretId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.vaultSecretId"></a>

```java
public java.lang.String getVaultSecretId();
```

- *Type:* java.lang.String

---

##### `verificationKeySourceType`<sup>Required</sup> <a name="verificationKeySourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.verificationKeySourceType"></a>

```java
public java.lang.String getVerificationKeySourceType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.internalValue"></a>

```java
public DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySource getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySource">DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySource</a>

---


### DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList <a name="DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_artifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList;

new DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList.get"></a>

```java
public DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference <a name="DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_artifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference;

new DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.property.base64EncodedContent">base64EncodedContent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.property.chartUrl">chartUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.property.deployArtifactPath">deployArtifactPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.property.deployArtifactSourceType">deployArtifactSourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.property.deployArtifactVersion">deployArtifactVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.property.helmArtifactSourceType">helmArtifactSourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.property.helmVerificationKeySource">helmVerificationKeySource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList">DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.property.imageDigest">imageDigest</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.property.imageUri">imageUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.property.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSource">DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `base64EncodedContent`<sup>Required</sup> <a name="base64EncodedContent" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.property.base64EncodedContent"></a>

```java
public java.lang.String getBase64EncodedContent();
```

- *Type:* java.lang.String

---

##### `chartUrl`<sup>Required</sup> <a name="chartUrl" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.property.chartUrl"></a>

```java
public java.lang.String getChartUrl();
```

- *Type:* java.lang.String

---

##### `deployArtifactPath`<sup>Required</sup> <a name="deployArtifactPath" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.property.deployArtifactPath"></a>

```java
public java.lang.String getDeployArtifactPath();
```

- *Type:* java.lang.String

---

##### `deployArtifactSourceType`<sup>Required</sup> <a name="deployArtifactSourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.property.deployArtifactSourceType"></a>

```java
public java.lang.String getDeployArtifactSourceType();
```

- *Type:* java.lang.String

---

##### `deployArtifactVersion`<sup>Required</sup> <a name="deployArtifactVersion" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.property.deployArtifactVersion"></a>

```java
public java.lang.String getDeployArtifactVersion();
```

- *Type:* java.lang.String

---

##### `helmArtifactSourceType`<sup>Required</sup> <a name="helmArtifactSourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.property.helmArtifactSourceType"></a>

```java
public java.lang.String getHelmArtifactSourceType();
```

- *Type:* java.lang.String

---

##### `helmVerificationKeySource`<sup>Required</sup> <a name="helmVerificationKeySource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.property.helmVerificationKeySource"></a>

```java
public DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList getHelmVerificationKeySource();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList">DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList</a>

---

##### `imageDigest`<sup>Required</sup> <a name="imageDigest" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.property.imageDigest"></a>

```java
public java.lang.String getImageDigest();
```

- *Type:* java.lang.String

---

##### `imageUri`<sup>Required</sup> <a name="imageUri" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.property.imageUri"></a>

```java
public java.lang.String getImageUri();
```

- *Type:* java.lang.String

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.property.repositoryId"></a>

```java
public java.lang.String getRepositoryId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.property.internalValue"></a>

```java
public DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSource getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSource">DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSource</a>

---


### DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList <a name="DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_artifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList;

new DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList.get"></a>

```java
public DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference <a name="DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_artifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference;

new DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.argumentSubstitutionMode">argumentSubstitutionMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.deployArtifactSource">deployArtifactSource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList">DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.deployArtifactType">deployArtifactType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItems">DataOciDevopsDeployArtifactsDeployArtifactCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `argumentSubstitutionMode`<sup>Required</sup> <a name="argumentSubstitutionMode" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.argumentSubstitutionMode"></a>

```java
public java.lang.String getArgumentSubstitutionMode();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `deployArtifactSource`<sup>Required</sup> <a name="deployArtifactSource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.deployArtifactSource"></a>

```java
public DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList getDeployArtifactSource();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList">DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList</a>

---

##### `deployArtifactType`<sup>Required</sup> <a name="deployArtifactType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.deployArtifactType"></a>

```java
public java.lang.String getDeployArtifactType();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciDevopsDeployArtifactsDeployArtifactCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItems">DataOciDevopsDeployArtifactsDeployArtifactCollectionItems</a>

---


### DataOciDevopsDeployArtifactsDeployArtifactCollectionList <a name="DataOciDevopsDeployArtifactsDeployArtifactCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_artifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionList;

new DataOciDevopsDeployArtifactsDeployArtifactCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionList.get"></a>

```java
public DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference <a name="DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_artifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference;

new DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList">DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollection">DataOciDevopsDeployArtifactsDeployArtifactCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.property.items"></a>

```java
public DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList">DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.property.internalValue"></a>

```java
public DataOciDevopsDeployArtifactsDeployArtifactCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollection">DataOciDevopsDeployArtifactsDeployArtifactCollection</a>

---


### DataOciDevopsDeployArtifactsFilterList <a name="DataOciDevopsDeployArtifactsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_artifacts.DataOciDevopsDeployArtifactsFilterList;

new DataOciDevopsDeployArtifactsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterList.get"></a>

```java
public DataOciDevopsDeployArtifactsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilter">DataOciDevopsDeployArtifactsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilter">DataOciDevopsDeployArtifactsFilter</a>>

---


### DataOciDevopsDeployArtifactsFilterOutputReference <a name="DataOciDevopsDeployArtifactsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_artifacts.DataOciDevopsDeployArtifactsFilterOutputReference;

new DataOciDevopsDeployArtifactsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilter">DataOciDevopsDeployArtifactsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilter">DataOciDevopsDeployArtifactsFilter</a>

---



