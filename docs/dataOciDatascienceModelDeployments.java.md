# `dataOciDatascienceModelDeployments` Submodule <a name="`dataOciDatascienceModelDeployments` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatascienceModelDeployments <a name="DataOciDatascienceModelDeployments" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments oci_datascience_model_deployments}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_model_deployments.DataOciDatascienceModelDeployments;

DataOciDatascienceModelDeployments.Builder.create(Construct scope, java.lang.String id)
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
//  .filter(java.util.List<DataOciDatascienceModelDeploymentsFilter>)
//  .id(java.lang.String)
//  .projectId(java.lang.String)
//  .state(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments#compartment_id DataOciDatascienceModelDeployments#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.Initializer.parameter.createdBy">createdBy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments#created_by DataOciDatascienceModelDeployments#created_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments#display_name DataOciDatascienceModelDeployments#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilter">DataOciDatascienceModelDeploymentsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments#id DataOciDatascienceModelDeployments#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments#project_id DataOciDatascienceModelDeployments#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments#state DataOciDatascienceModelDeployments#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments#compartment_id DataOciDatascienceModelDeployments#compartment_id}.

---

##### `createdBy`<sup>Optional</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.Initializer.parameter.createdBy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments#created_by DataOciDatascienceModelDeployments#created_by}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments#display_name DataOciDatascienceModelDeployments#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilter">DataOciDatascienceModelDeploymentsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments#filter DataOciDatascienceModelDeployments#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments#id DataOciDatascienceModelDeployments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments#project_id DataOciDatascienceModelDeployments#project_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments#state DataOciDatascienceModelDeployments#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.resetCreatedBy">resetCreatedBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciDatascienceModelDeploymentsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilter">DataOciDatascienceModelDeploymentsFilter</a>>

---

##### `resetCreatedBy` <a name="resetCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.resetCreatedBy"></a>

```java
public void resetCreatedBy()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.resetId"></a>

```java
public void resetId()
```

##### `resetProjectId` <a name="resetProjectId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.resetProjectId"></a>

```java
public void resetProjectId()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.resetState"></a>

```java
public void resetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatascienceModelDeployments resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_model_deployments.DataOciDatascienceModelDeployments;

DataOciDatascienceModelDeployments.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_model_deployments.DataOciDatascienceModelDeployments;

DataOciDatascienceModelDeployments.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_model_deployments.DataOciDatascienceModelDeployments;

DataOciDatascienceModelDeployments.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_model_deployments.DataOciDatascienceModelDeployments;

DataOciDatascienceModelDeployments.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDatascienceModelDeployments.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDatascienceModelDeployments resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDatascienceModelDeployments to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDatascienceModelDeployments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatascienceModelDeployments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterList">DataOciDatascienceModelDeploymentsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.modelDeployments">modelDeployments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsList">DataOciDatascienceModelDeploymentsModelDeploymentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.createdByInput">createdByInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilter">DataOciDatascienceModelDeploymentsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.filter"></a>

```java
public DataOciDatascienceModelDeploymentsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterList">DataOciDatascienceModelDeploymentsFilterList</a>

---

##### `modelDeployments`<sup>Required</sup> <a name="modelDeployments" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.modelDeployments"></a>

```java
public DataOciDatascienceModelDeploymentsModelDeploymentsList getModelDeployments();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsList">DataOciDatascienceModelDeploymentsModelDeploymentsList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `createdByInput`<sup>Optional</sup> <a name="createdByInput" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.createdByInput"></a>

```java
public java.lang.String getCreatedByInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilter">DataOciDatascienceModelDeploymentsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatascienceModelDeploymentsConfig <a name="DataOciDatascienceModelDeploymentsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_model_deployments.DataOciDatascienceModelDeploymentsConfig;

DataOciDatascienceModelDeploymentsConfig.builder()
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
//  .filter(java.util.List<DataOciDatascienceModelDeploymentsFilter>)
//  .id(java.lang.String)
//  .projectId(java.lang.String)
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments#compartment_id DataOciDatascienceModelDeployments#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsConfig.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments#created_by DataOciDatascienceModelDeployments#created_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments#display_name DataOciDatascienceModelDeployments#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilter">DataOciDatascienceModelDeploymentsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments#id DataOciDatascienceModelDeployments#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments#project_id DataOciDatascienceModelDeployments#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments#state DataOciDatascienceModelDeployments#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments#compartment_id DataOciDatascienceModelDeployments#compartment_id}.

---

##### `createdBy`<sup>Optional</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsConfig.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments#created_by DataOciDatascienceModelDeployments#created_by}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments#display_name DataOciDatascienceModelDeployments#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilter">DataOciDatascienceModelDeploymentsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments#filter DataOciDatascienceModelDeployments#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments#id DataOciDatascienceModelDeployments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments#project_id DataOciDatascienceModelDeployments#project_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments#state DataOciDatascienceModelDeployments#state}.

---

### DataOciDatascienceModelDeploymentsFilter <a name="DataOciDatascienceModelDeploymentsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_model_deployments.DataOciDatascienceModelDeploymentsFilter;

DataOciDatascienceModelDeploymentsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments#name DataOciDatascienceModelDeployments#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments#values DataOciDatascienceModelDeployments#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments#regex DataOciDatascienceModelDeployments#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments#name DataOciDatascienceModelDeployments#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments#values DataOciDatascienceModelDeployments#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments#regex DataOciDatascienceModelDeployments#regex}.

---

### DataOciDatascienceModelDeploymentsModelDeployments <a name="DataOciDatascienceModelDeploymentsModelDeployments" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeployments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeployments.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_model_deployments.DataOciDatascienceModelDeploymentsModelDeployments;

DataOciDatascienceModelDeploymentsModelDeployments.builder()
    .build();
```


### DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetails <a name="DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_model_deployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetails;

DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetails.builder()
    .build();
```


### DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccess <a name="DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccess" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccess"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccess.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_model_deployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccess;

DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccess.builder()
    .build();
```


### DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredict <a name="DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredict" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredict"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredict.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_model_deployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredict;

DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredict.builder()
    .build();
```


### DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetails <a name="DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_model_deployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetails;

DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetails.builder()
    .build();
```


### DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetails <a name="DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_model_deployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetails;

DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetails.builder()
    .build();
```


### DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetails <a name="DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_model_deployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetails;

DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetails.builder()
    .build();
```


### DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfiguration <a name="DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_model_deployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfiguration;

DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfiguration.builder()
    .build();
```


### DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetails <a name="DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_model_deployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetails;

DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetails.builder()
    .build();
```


### DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicy <a name="DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicy" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_model_deployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicy;

DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicy.builder()
    .build();
```


### DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPolicies <a name="DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPolicies" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPolicies"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPolicies.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_model_deployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPolicies;

DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPolicies.builder()
    .build();
```


### DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRules <a name="DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRules" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_model_deployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRules;

DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRules.builder()
    .build();
```


### DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfiguration <a name="DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_model_deployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfiguration;

DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfiguration.builder()
    .build();
```


### DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfiguration <a name="DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_model_deployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfiguration;

DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfiguration.builder()
    .build();
```


### DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemData <a name="DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemData" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemData.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_model_deployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemData;

DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemData.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatascienceModelDeploymentsFilterList <a name="DataOciDatascienceModelDeploymentsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_model_deployments.DataOciDatascienceModelDeploymentsFilterList;

new DataOciDatascienceModelDeploymentsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterList.get"></a>

```java
public DataOciDatascienceModelDeploymentsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilter">DataOciDatascienceModelDeploymentsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilter">DataOciDatascienceModelDeploymentsFilter</a>>

---


### DataOciDatascienceModelDeploymentsFilterOutputReference <a name="DataOciDatascienceModelDeploymentsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_model_deployments.DataOciDatascienceModelDeploymentsFilterOutputReference;

new DataOciDatascienceModelDeploymentsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilter">DataOciDatascienceModelDeploymentsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilter">DataOciDatascienceModelDeploymentsFilter</a>

---


### DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList <a name="DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_model_deployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList;

new DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList.get"></a>

```java
public DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference <a name="DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_model_deployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference;

new DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.property.logGroupId">logGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.property.logId">logId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccess">DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `logGroupId`<sup>Required</sup> <a name="logGroupId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.property.logGroupId"></a>

```java
public java.lang.String getLogGroupId();
```

- *Type:* java.lang.String

---

##### `logId`<sup>Required</sup> <a name="logId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.property.logId"></a>

```java
public java.lang.String getLogId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.property.internalValue"></a>

```java
public DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccess getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccess">DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccess</a>

---


### DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList <a name="DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_model_deployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList;

new DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList.get"></a>

```java
public DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference <a name="DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_model_deployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference;

new DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.property.access">access</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList">DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.property.predict">predict</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList">DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetails">DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `access`<sup>Required</sup> <a name="access" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.property.access"></a>

```java
public DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList getAccess();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList">DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList</a>

---

##### `predict`<sup>Required</sup> <a name="predict" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.property.predict"></a>

```java
public DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList getPredict();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList">DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.property.internalValue"></a>

```java
public DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetails">DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetails</a>

---


### DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList <a name="DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_model_deployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList;

new DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList.get"></a>

```java
public DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference <a name="DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_model_deployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference;

new DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.property.logGroupId">logGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.property.logId">logId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredict">DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredict</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `logGroupId`<sup>Required</sup> <a name="logGroupId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.property.logGroupId"></a>

```java
public java.lang.String getLogGroupId();
```

- *Type:* java.lang.String

---

##### `logId`<sup>Required</sup> <a name="logId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.property.logId"></a>

```java
public java.lang.String getLogId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.property.internalValue"></a>

```java
public DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredict getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredict">DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredict</a>

---


### DataOciDatascienceModelDeploymentsModelDeploymentsList <a name="DataOciDatascienceModelDeploymentsModelDeploymentsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_model_deployments.DataOciDatascienceModelDeploymentsModelDeploymentsList;

new DataOciDatascienceModelDeploymentsModelDeploymentsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsList.get"></a>

```java
public DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList <a name="DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_model_deployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList;

new DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList.get"></a>

```java
public DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference <a name="DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_model_deployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference;

new DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.property.cmd">cmd</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.property.entrypoint">entrypoint</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.property.environmentConfigurationType">environmentConfigurationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.property.environmentVariables">environmentVariables</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.property.healthCheckPort">healthCheckPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.property.image">image</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.property.imageDigest">imageDigest</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.property.serverPort">serverPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetails">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cmd`<sup>Required</sup> <a name="cmd" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.property.cmd"></a>

```java
public java.util.List<java.lang.String> getCmd();
```

- *Type:* java.util.List<java.lang.String>

---

##### `entrypoint`<sup>Required</sup> <a name="entrypoint" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.property.entrypoint"></a>

```java
public java.util.List<java.lang.String> getEntrypoint();
```

- *Type:* java.util.List<java.lang.String>

---

##### `environmentConfigurationType`<sup>Required</sup> <a name="environmentConfigurationType" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.property.environmentConfigurationType"></a>

```java
public java.lang.String getEnvironmentConfigurationType();
```

- *Type:* java.lang.String

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.property.environmentVariables"></a>

```java
public StringMap getEnvironmentVariables();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `healthCheckPort`<sup>Required</sup> <a name="healthCheckPort" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.property.healthCheckPort"></a>

```java
public java.lang.Number getHealthCheckPort();
```

- *Type:* java.lang.Number

---

##### `image`<sup>Required</sup> <a name="image" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

---

##### `imageDigest`<sup>Required</sup> <a name="imageDigest" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.property.imageDigest"></a>

```java
public java.lang.String getImageDigest();
```

- *Type:* java.lang.String

---

##### `serverPort`<sup>Required</sup> <a name="serverPort" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.property.serverPort"></a>

```java
public java.lang.Number getServerPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.property.internalValue"></a>

```java
public DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetails">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetails</a>

---


### DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList <a name="DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_model_deployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList;

new DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList.get"></a>

```java
public DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList <a name="DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_model_deployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList;

new DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList.get"></a>

```java
public DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList <a name="DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_model_deployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList;

new DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList.get"></a>

```java
public DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference <a name="DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_model_deployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference;

new DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.property.cpuBaseline">cpuBaseline</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.property.memoryInGbs">memoryInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.property.ocpus">ocpus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetails">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cpuBaseline`<sup>Required</sup> <a name="cpuBaseline" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.property.cpuBaseline"></a>

```java
public java.lang.String getCpuBaseline();
```

- *Type:* java.lang.String

---

##### `memoryInGbs`<sup>Required</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.property.memoryInGbs"></a>

```java
public java.lang.Number getMemoryInGbs();
```

- *Type:* java.lang.Number

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.property.ocpus"></a>

```java
public java.lang.Number getOcpus();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.property.internalValue"></a>

```java
public DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetails">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetails</a>

---


### DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference <a name="DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_model_deployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference;

new DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.property.instanceShapeName">instanceShapeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.property.modelDeploymentInstanceShapeConfigDetails">modelDeploymentInstanceShapeConfigDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfiguration">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `instanceShapeName`<sup>Required</sup> <a name="instanceShapeName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.property.instanceShapeName"></a>

```java
public java.lang.String getInstanceShapeName();
```

- *Type:* java.lang.String

---

##### `modelDeploymentInstanceShapeConfigDetails`<sup>Required</sup> <a name="modelDeploymentInstanceShapeConfigDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.property.modelDeploymentInstanceShapeConfigDetails"></a>

```java
public DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList getModelDeploymentInstanceShapeConfigDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList</a>

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.property.internalValue"></a>

```java
public DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfiguration getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfiguration">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfiguration</a>

---


### DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList <a name="DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_model_deployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList;

new DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList.get"></a>

```java
public DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference <a name="DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_model_deployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference;

new DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.property.bandwidthMbps">bandwidthMbps</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.property.instanceConfiguration">instanceConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.property.maximumBandwidthMbps">maximumBandwidthMbps</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.property.modelId">modelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.property.scalingPolicy">scalingPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetails">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bandwidthMbps`<sup>Required</sup> <a name="bandwidthMbps" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.property.bandwidthMbps"></a>

```java
public java.lang.Number getBandwidthMbps();
```

- *Type:* java.lang.Number

---

##### `instanceConfiguration`<sup>Required</sup> <a name="instanceConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.property.instanceConfiguration"></a>

```java
public DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList getInstanceConfiguration();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList</a>

---

##### `maximumBandwidthMbps`<sup>Required</sup> <a name="maximumBandwidthMbps" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.property.maximumBandwidthMbps"></a>

```java
public java.lang.Number getMaximumBandwidthMbps();
```

- *Type:* java.lang.Number

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.property.modelId"></a>

```java
public java.lang.String getModelId();
```

- *Type:* java.lang.String

---

##### `scalingPolicy`<sup>Required</sup> <a name="scalingPolicy" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.property.scalingPolicy"></a>

```java
public DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList getScalingPolicy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.property.internalValue"></a>

```java
public DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetails">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetails</a>

---


### DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList <a name="DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_model_deployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList;

new DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList.get"></a>

```java
public DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference <a name="DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_model_deployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference;

new DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.property.autoScalingPolicyType">autoScalingPolicyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.property.initialInstanceCount">initialInstanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.property.maximumInstanceCount">maximumInstanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.property.minimumInstanceCount">minimumInstanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.property.rules">rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPolicies">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoScalingPolicyType`<sup>Required</sup> <a name="autoScalingPolicyType" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.property.autoScalingPolicyType"></a>

```java
public java.lang.String getAutoScalingPolicyType();
```

- *Type:* java.lang.String

---

##### `initialInstanceCount`<sup>Required</sup> <a name="initialInstanceCount" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.property.initialInstanceCount"></a>

```java
public java.lang.Number getInitialInstanceCount();
```

- *Type:* java.lang.Number

---

##### `maximumInstanceCount`<sup>Required</sup> <a name="maximumInstanceCount" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.property.maximumInstanceCount"></a>

```java
public java.lang.Number getMaximumInstanceCount();
```

- *Type:* java.lang.Number

---

##### `minimumInstanceCount`<sup>Required</sup> <a name="minimumInstanceCount" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.property.minimumInstanceCount"></a>

```java
public java.lang.Number getMinimumInstanceCount();
```

- *Type:* java.lang.Number

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.property.rules"></a>

```java
public DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList getRules();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.property.internalValue"></a>

```java
public DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPolicies getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPolicies">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPolicies</a>

---


### DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList <a name="DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_model_deployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList;

new DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList.get"></a>

```java
public DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference <a name="DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_model_deployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference;

new DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.property.metricExpressionRuleType">metricExpressionRuleType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.property.metricType">metricType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.property.scaleInConfiguration">scaleInConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.property.scaleOutConfiguration">scaleOutConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRules">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metricExpressionRuleType`<sup>Required</sup> <a name="metricExpressionRuleType" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.property.metricExpressionRuleType"></a>

```java
public java.lang.String getMetricExpressionRuleType();
```

- *Type:* java.lang.String

---

##### `metricType`<sup>Required</sup> <a name="metricType" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.property.metricType"></a>

```java
public java.lang.String getMetricType();
```

- *Type:* java.lang.String

---

##### `scaleInConfiguration`<sup>Required</sup> <a name="scaleInConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.property.scaleInConfiguration"></a>

```java
public DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList getScaleInConfiguration();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList</a>

---

##### `scaleOutConfiguration`<sup>Required</sup> <a name="scaleOutConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.property.scaleOutConfiguration"></a>

```java
public DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList getScaleOutConfiguration();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.property.internalValue"></a>

```java
public DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRules getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRules">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRules</a>

---


### DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList <a name="DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_model_deployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList;

new DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList.get"></a>

```java
public DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference <a name="DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_model_deployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference;

new DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.property.instanceCountAdjustment">instanceCountAdjustment</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.property.pendingDuration">pendingDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.property.scalingConfigurationType">scalingConfigurationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfiguration">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `instanceCountAdjustment`<sup>Required</sup> <a name="instanceCountAdjustment" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.property.instanceCountAdjustment"></a>

```java
public java.lang.Number getInstanceCountAdjustment();
```

- *Type:* java.lang.Number

---

##### `pendingDuration`<sup>Required</sup> <a name="pendingDuration" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.property.pendingDuration"></a>

```java
public java.lang.String getPendingDuration();
```

- *Type:* java.lang.String

---

##### `query`<sup>Required</sup> <a name="query" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `scalingConfigurationType`<sup>Required</sup> <a name="scalingConfigurationType" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.property.scalingConfigurationType"></a>

```java
public java.lang.String getScalingConfigurationType();
```

- *Type:* java.lang.String

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.property.internalValue"></a>

```java
public DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfiguration getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfiguration">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfiguration</a>

---


### DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList <a name="DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_model_deployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList;

new DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList.get"></a>

```java
public DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference <a name="DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_model_deployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference;

new DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.property.instanceCountAdjustment">instanceCountAdjustment</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.property.pendingDuration">pendingDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.property.scalingConfigurationType">scalingConfigurationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfiguration">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `instanceCountAdjustment`<sup>Required</sup> <a name="instanceCountAdjustment" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.property.instanceCountAdjustment"></a>

```java
public java.lang.Number getInstanceCountAdjustment();
```

- *Type:* java.lang.Number

---

##### `pendingDuration`<sup>Required</sup> <a name="pendingDuration" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.property.pendingDuration"></a>

```java
public java.lang.String getPendingDuration();
```

- *Type:* java.lang.String

---

##### `query`<sup>Required</sup> <a name="query" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `scalingConfigurationType`<sup>Required</sup> <a name="scalingConfigurationType" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.property.scalingConfigurationType"></a>

```java
public java.lang.String getScalingConfigurationType();
```

- *Type:* java.lang.String

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.property.internalValue"></a>

```java
public DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfiguration getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfiguration">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfiguration</a>

---


### DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList <a name="DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_model_deployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList;

new DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList.get"></a>

```java
public DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference <a name="DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_model_deployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference;

new DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.property.autoScalingPolicies">autoScalingPolicies</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.property.coolDownInSeconds">coolDownInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.property.instanceCount">instanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.property.isEnabled">isEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.property.policyType">policyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicy">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoScalingPolicies`<sup>Required</sup> <a name="autoScalingPolicies" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.property.autoScalingPolicies"></a>

```java
public DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList getAutoScalingPolicies();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList</a>

---

##### `coolDownInSeconds`<sup>Required</sup> <a name="coolDownInSeconds" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.property.coolDownInSeconds"></a>

```java
public java.lang.Number getCoolDownInSeconds();
```

- *Type:* java.lang.Number

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.property.instanceCount"></a>

```java
public java.lang.Number getInstanceCount();
```

- *Type:* java.lang.Number

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.property.isEnabled"></a>

```java
public IResolvable getIsEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.property.policyType"></a>

```java
public java.lang.String getPolicyType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.property.internalValue"></a>

```java
public DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicy">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicy</a>

---


### DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference <a name="DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_model_deployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference;

new DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.property.deploymentType">deploymentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.property.environmentConfigurationDetails">environmentConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.property.modelConfigurationDetails">modelConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetails">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deploymentType`<sup>Required</sup> <a name="deploymentType" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.property.deploymentType"></a>

```java
public java.lang.String getDeploymentType();
```

- *Type:* java.lang.String

---

##### `environmentConfigurationDetails`<sup>Required</sup> <a name="environmentConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.property.environmentConfigurationDetails"></a>

```java
public DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList getEnvironmentConfigurationDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList</a>

---

##### `modelConfigurationDetails`<sup>Required</sup> <a name="modelConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.property.modelConfigurationDetails"></a>

```java
public DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList getModelConfigurationDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.property.internalValue"></a>

```java
public DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetails">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetails</a>

---


### DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList <a name="DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_model_deployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList;

new DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList.get"></a>

```java
public DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference <a name="DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_model_deployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference;

new DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.property.currentInstanceCount">currentInstanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.property.systemInfraType">systemInfraType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemData">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `currentInstanceCount`<sup>Required</sup> <a name="currentInstanceCount" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.property.currentInstanceCount"></a>

```java
public java.lang.Number getCurrentInstanceCount();
```

- *Type:* java.lang.Number

---

##### `systemInfraType`<sup>Required</sup> <a name="systemInfraType" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.property.systemInfraType"></a>

```java
public java.lang.String getSystemInfraType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.property.internalValue"></a>

```java
public DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemData getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemData">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemData</a>

---


### DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference <a name="DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_model_deployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference;

new DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.categoryLogDetails">categoryLogDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList">DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.modelDeploymentConfigurationDetails">modelDeploymentConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.modelDeploymentSystemData">modelDeploymentSystemData</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.modelDeploymentUrl">modelDeploymentUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.opcParentRptUrl">opcParentRptUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeployments">DataOciDatascienceModelDeploymentsModelDeployments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `categoryLogDetails`<sup>Required</sup> <a name="categoryLogDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.categoryLogDetails"></a>

```java
public DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList getCategoryLogDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList">DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `modelDeploymentConfigurationDetails`<sup>Required</sup> <a name="modelDeploymentConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.modelDeploymentConfigurationDetails"></a>

```java
public DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList getModelDeploymentConfigurationDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList</a>

---

##### `modelDeploymentSystemData`<sup>Required</sup> <a name="modelDeploymentSystemData" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.modelDeploymentSystemData"></a>

```java
public DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList getModelDeploymentSystemData();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList</a>

---

##### `modelDeploymentUrl`<sup>Required</sup> <a name="modelDeploymentUrl" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.modelDeploymentUrl"></a>

```java
public java.lang.String getModelDeploymentUrl();
```

- *Type:* java.lang.String

---

##### `opcParentRptUrl`<sup>Required</sup> <a name="opcParentRptUrl" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.opcParentRptUrl"></a>

```java
public java.lang.String getOpcParentRptUrl();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.internalValue"></a>

```java
public DataOciDatascienceModelDeploymentsModelDeployments getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeployments">DataOciDatascienceModelDeploymentsModelDeployments</a>

---



