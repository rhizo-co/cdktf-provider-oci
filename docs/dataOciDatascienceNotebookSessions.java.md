# `dataOciDatascienceNotebookSessions` Submodule <a name="`dataOciDatascienceNotebookSessions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatascienceNotebookSessions <a name="DataOciDatascienceNotebookSessions" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions oci_datascience_notebook_sessions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_notebook_sessions.DataOciDatascienceNotebookSessions;

DataOciDatascienceNotebookSessions.Builder.create(Construct scope, java.lang.String id)
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
//  .filter(java.util.List<DataOciDatascienceNotebookSessionsFilter>)
//  .id(java.lang.String)
//  .projectId(java.lang.String)
//  .state(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#compartment_id DataOciDatascienceNotebookSessions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.createdBy">createdBy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#created_by DataOciDatascienceNotebookSessions#created_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#display_name DataOciDatascienceNotebookSessions#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilter">DataOciDatascienceNotebookSessionsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#id DataOciDatascienceNotebookSessions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#project_id DataOciDatascienceNotebookSessions#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#state DataOciDatascienceNotebookSessions#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#compartment_id DataOciDatascienceNotebookSessions#compartment_id}.

---

##### `createdBy`<sup>Optional</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.createdBy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#created_by DataOciDatascienceNotebookSessions#created_by}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#display_name DataOciDatascienceNotebookSessions#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilter">DataOciDatascienceNotebookSessionsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#filter DataOciDatascienceNotebookSessions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#id DataOciDatascienceNotebookSessions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#project_id DataOciDatascienceNotebookSessions#project_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#state DataOciDatascienceNotebookSessions#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.resetCreatedBy">resetCreatedBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciDatascienceNotebookSessionsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilter">DataOciDatascienceNotebookSessionsFilter</a>>

---

##### `resetCreatedBy` <a name="resetCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.resetCreatedBy"></a>

```java
public void resetCreatedBy()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.resetId"></a>

```java
public void resetId()
```

##### `resetProjectId` <a name="resetProjectId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.resetProjectId"></a>

```java
public void resetProjectId()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.resetState"></a>

```java
public void resetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatascienceNotebookSessions resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_notebook_sessions.DataOciDatascienceNotebookSessions;

DataOciDatascienceNotebookSessions.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_notebook_sessions.DataOciDatascienceNotebookSessions;

DataOciDatascienceNotebookSessions.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_notebook_sessions.DataOciDatascienceNotebookSessions;

DataOciDatascienceNotebookSessions.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_notebook_sessions.DataOciDatascienceNotebookSessions;

DataOciDatascienceNotebookSessions.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDatascienceNotebookSessions.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDatascienceNotebookSessions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDatascienceNotebookSessions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDatascienceNotebookSessions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatascienceNotebookSessions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList">DataOciDatascienceNotebookSessionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.notebookSessions">notebookSessions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList">DataOciDatascienceNotebookSessionsNotebookSessionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.createdByInput">createdByInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilter">DataOciDatascienceNotebookSessionsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.filter"></a>

```java
public DataOciDatascienceNotebookSessionsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList">DataOciDatascienceNotebookSessionsFilterList</a>

---

##### `notebookSessions`<sup>Required</sup> <a name="notebookSessions" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.notebookSessions"></a>

```java
public DataOciDatascienceNotebookSessionsNotebookSessionsList getNotebookSessions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList">DataOciDatascienceNotebookSessionsNotebookSessionsList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `createdByInput`<sup>Optional</sup> <a name="createdByInput" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.createdByInput"></a>

```java
public java.lang.String getCreatedByInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilter">DataOciDatascienceNotebookSessionsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatascienceNotebookSessionsConfig <a name="DataOciDatascienceNotebookSessionsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_notebook_sessions.DataOciDatascienceNotebookSessionsConfig;

DataOciDatascienceNotebookSessionsConfig.builder()
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
//  .filter(java.util.List<DataOciDatascienceNotebookSessionsFilter>)
//  .id(java.lang.String)
//  .projectId(java.lang.String)
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#compartment_id DataOciDatascienceNotebookSessions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#created_by DataOciDatascienceNotebookSessions#created_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#display_name DataOciDatascienceNotebookSessions#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilter">DataOciDatascienceNotebookSessionsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#id DataOciDatascienceNotebookSessions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#project_id DataOciDatascienceNotebookSessions#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#state DataOciDatascienceNotebookSessions#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#compartment_id DataOciDatascienceNotebookSessions#compartment_id}.

---

##### `createdBy`<sup>Optional</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#created_by DataOciDatascienceNotebookSessions#created_by}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#display_name DataOciDatascienceNotebookSessions#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilter">DataOciDatascienceNotebookSessionsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#filter DataOciDatascienceNotebookSessions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#id DataOciDatascienceNotebookSessions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#project_id DataOciDatascienceNotebookSessions#project_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#state DataOciDatascienceNotebookSessions#state}.

---

### DataOciDatascienceNotebookSessionsFilter <a name="DataOciDatascienceNotebookSessionsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_notebook_sessions.DataOciDatascienceNotebookSessionsFilter;

DataOciDatascienceNotebookSessionsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#name DataOciDatascienceNotebookSessions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#values DataOciDatascienceNotebookSessions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#regex DataOciDatascienceNotebookSessions#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#name DataOciDatascienceNotebookSessions#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#values DataOciDatascienceNotebookSessions#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#regex DataOciDatascienceNotebookSessions#regex}.

---

### DataOciDatascienceNotebookSessionsNotebookSessions <a name="DataOciDatascienceNotebookSessionsNotebookSessions" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_notebook_sessions.DataOciDatascienceNotebookSessionsNotebookSessions;

DataOciDatascienceNotebookSessionsNotebookSessions.builder()
    .build();
```


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetails <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_notebook_sessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetails;

DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetails.builder()
    .build();
```


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_notebook_sessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails;

DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails.builder()
    .build();
```


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetails <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_notebook_sessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetails;

DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetails.builder()
    .build();
```


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_notebook_sessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails;

DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails.builder()
    .build();
```


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetails <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_notebook_sessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetails;

DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetails.builder()
    .build();
```


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_notebook_sessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails;

DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails.builder()
    .build();
```


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_notebook_sessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection;

DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection.builder()
    .build();
```


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStruct <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStruct" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStruct.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_notebook_sessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStruct;

DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStruct.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatascienceNotebookSessionsFilterList <a name="DataOciDatascienceNotebookSessionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_notebook_sessions.DataOciDatascienceNotebookSessionsFilterList;

new DataOciDatascienceNotebookSessionsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.get"></a>

```java
public DataOciDatascienceNotebookSessionsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilter">DataOciDatascienceNotebookSessionsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilter">DataOciDatascienceNotebookSessionsFilter</a>>

---


### DataOciDatascienceNotebookSessionsFilterOutputReference <a name="DataOciDatascienceNotebookSessionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_notebook_sessions.DataOciDatascienceNotebookSessionsFilterOutputReference;

new DataOciDatascienceNotebookSessionsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilter">DataOciDatascienceNotebookSessionsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilter">DataOciDatascienceNotebookSessionsFilter</a>

---


### DataOciDatascienceNotebookSessionsNotebookSessionsList <a name="DataOciDatascienceNotebookSessionsNotebookSessionsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_notebook_sessions.DataOciDatascienceNotebookSessionsNotebookSessionsList;

new DataOciDatascienceNotebookSessionsNotebookSessionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.get"></a>

```java
public DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_notebook_sessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList;

new DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.get"></a>

```java
public DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_notebook_sessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList;

new DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.get"></a>

```java
public DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_notebook_sessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference;

new DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.memoryInGbs">memoryInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.ocpus">ocpus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `memoryInGbs`<sup>Required</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.memoryInGbs"></a>

```java
public java.lang.Number getMemoryInGbs();
```

- *Type:* java.lang.Number

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.ocpus"></a>

```java
public java.lang.Number getOcpus();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.internalValue"></a>

```java
public DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails</a>

---


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_notebook_sessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference;

new DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.property.blockStorageSizeInGbs">blockStorageSizeInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.property.notebookSessionShapeConfigDetails">notebookSessionShapeConfigDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.property.privateEndpointId">privateEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.property.shape">shape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetails">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `blockStorageSizeInGbs`<sup>Required</sup> <a name="blockStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.property.blockStorageSizeInGbs"></a>

```java
public java.lang.Number getBlockStorageSizeInGbs();
```

- *Type:* java.lang.Number

---

##### `notebookSessionShapeConfigDetails`<sup>Required</sup> <a name="notebookSessionShapeConfigDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.property.notebookSessionShapeConfigDetails"></a>

```java
public DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList getNotebookSessionShapeConfigDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList</a>

---

##### `privateEndpointId`<sup>Required</sup> <a name="privateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.property.privateEndpointId"></a>

```java
public java.lang.String getPrivateEndpointId();
```

- *Type:* java.lang.String

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.property.internalValue"></a>

```java
public DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetails">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetails</a>

---


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_notebook_sessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList;

new DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.get"></a>

```java
public DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_notebook_sessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList;

new DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.get"></a>

```java
public DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_notebook_sessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference;

new DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.memoryInGbs">memoryInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.ocpus">ocpus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `memoryInGbs`<sup>Required</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.memoryInGbs"></a>

```java
public java.lang.Number getMemoryInGbs();
```

- *Type:* java.lang.Number

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.ocpus"></a>

```java
public java.lang.Number getOcpus();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.internalValue"></a>

```java
public DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails</a>

---


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_notebook_sessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference;

new DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.property.blockStorageSizeInGbs">blockStorageSizeInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.property.notebookSessionShapeConfigDetails">notebookSessionShapeConfigDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.property.privateEndpointId">privateEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.property.shape">shape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetails">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `blockStorageSizeInGbs`<sup>Required</sup> <a name="blockStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.property.blockStorageSizeInGbs"></a>

```java
public java.lang.Number getBlockStorageSizeInGbs();
```

- *Type:* java.lang.Number

---

##### `notebookSessionShapeConfigDetails`<sup>Required</sup> <a name="notebookSessionShapeConfigDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.property.notebookSessionShapeConfigDetails"></a>

```java
public DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList getNotebookSessionShapeConfigDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList</a>

---

##### `privateEndpointId`<sup>Required</sup> <a name="privateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.property.privateEndpointId"></a>

```java
public java.lang.String getPrivateEndpointId();
```

- *Type:* java.lang.String

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.property.internalValue"></a>

```java
public DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetails">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetails</a>

---


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_notebook_sessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList;

new DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.get"></a>

```java
public DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_notebook_sessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList;

new DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.get"></a>

```java
public DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_notebook_sessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList;

new DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.get"></a>

```java
public DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_notebook_sessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference;

new DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.property.internalValue"></a>

```java
public DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection</a>

---


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_notebook_sessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference;

new DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.property.notebookSessionGitRepoConfigCollection">notebookSessionGitRepoConfigCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `notebookSessionGitRepoConfigCollection`<sup>Required</sup> <a name="notebookSessionGitRepoConfigCollection" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.property.notebookSessionGitRepoConfigCollection"></a>

```java
public DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList getNotebookSessionGitRepoConfigCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.property.internalValue"></a>

```java
public DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails</a>

---


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_notebook_sessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference;

new DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.property.customEnvironmentVariables">customEnvironmentVariables</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.property.notebookSessionGitConfigDetails">notebookSessionGitConfigDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetails">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customEnvironmentVariables`<sup>Required</sup> <a name="customEnvironmentVariables" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.property.customEnvironmentVariables"></a>

```java
public StringMap getCustomEnvironmentVariables();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `notebookSessionGitConfigDetails`<sup>Required</sup> <a name="notebookSessionGitConfigDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.property.notebookSessionGitConfigDetails"></a>

```java
public DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList getNotebookSessionGitConfigDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.property.internalValue"></a>

```java
public DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetails">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetails</a>

---


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_notebook_sessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList;

new DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.get"></a>

```java
public DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_notebook_sessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference;

new DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.destinationDirectoryName">destinationDirectoryName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.destinationPath">destinationPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.exportId">exportId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.mountTargetId">mountTargetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.storageType">storageType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStruct">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `destinationDirectoryName`<sup>Required</sup> <a name="destinationDirectoryName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.destinationDirectoryName"></a>

```java
public java.lang.String getDestinationDirectoryName();
```

- *Type:* java.lang.String

---

##### `destinationPath`<sup>Required</sup> <a name="destinationPath" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.destinationPath"></a>

```java
public java.lang.String getDestinationPath();
```

- *Type:* java.lang.String

---

##### `exportId`<sup>Required</sup> <a name="exportId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.exportId"></a>

```java
public java.lang.String getExportId();
```

- *Type:* java.lang.String

---

##### `mountTargetId`<sup>Required</sup> <a name="mountTargetId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.mountTargetId"></a>

```java
public java.lang.String getMountTargetId();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.storageType"></a>

```java
public java.lang.String getStorageType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.internalValue"></a>

```java
public DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStruct getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStruct">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStruct</a>

---


### DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference <a name="DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datascience_notebook_sessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference;

new DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.notebookSessionConfigDetails">notebookSessionConfigDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.notebookSessionConfigurationDetails">notebookSessionConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.notebookSessionRuntimeConfigDetails">notebookSessionRuntimeConfigDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.notebookSessionStorageMountConfigurationDetailsList">notebookSessionStorageMountConfigurationDetailsList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.notebookSessionUrl">notebookSessionUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessions">DataOciDatascienceNotebookSessionsNotebookSessions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `notebookSessionConfigDetails`<sup>Required</sup> <a name="notebookSessionConfigDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.notebookSessionConfigDetails"></a>

```java
public DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList getNotebookSessionConfigDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList</a>

---

##### `notebookSessionConfigurationDetails`<sup>Required</sup> <a name="notebookSessionConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.notebookSessionConfigurationDetails"></a>

```java
public DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList getNotebookSessionConfigurationDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList</a>

---

##### `notebookSessionRuntimeConfigDetails`<sup>Required</sup> <a name="notebookSessionRuntimeConfigDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.notebookSessionRuntimeConfigDetails"></a>

```java
public DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList getNotebookSessionRuntimeConfigDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList</a>

---

##### `notebookSessionStorageMountConfigurationDetailsList`<sup>Required</sup> <a name="notebookSessionStorageMountConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.notebookSessionStorageMountConfigurationDetailsList"></a>

```java
public DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList getNotebookSessionStorageMountConfigurationDetailsList();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList</a>

---

##### `notebookSessionUrl`<sup>Required</sup> <a name="notebookSessionUrl" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.notebookSessionUrl"></a>

```java
public java.lang.String getNotebookSessionUrl();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.internalValue"></a>

```java
public DataOciDatascienceNotebookSessionsNotebookSessions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessions">DataOciDatascienceNotebookSessionsNotebookSessions</a>

---



