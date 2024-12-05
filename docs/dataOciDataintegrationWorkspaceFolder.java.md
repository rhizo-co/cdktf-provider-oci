# `dataOciDataintegrationWorkspaceFolder` Submodule <a name="`dataOciDataintegrationWorkspaceFolder` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataintegrationWorkspaceFolder <a name="DataOciDataintegrationWorkspaceFolder" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_folder oci_dataintegration_workspace_folder}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_folder.DataOciDataintegrationWorkspaceFolder;

DataOciDataintegrationWorkspaceFolder.Builder.create(Construct scope, java.lang.String id)
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
    .folderKey(java.lang.String)
    .workspaceId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.Initializer.parameter.folderKey">folderKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_folder#folder_key DataOciDataintegrationWorkspaceFolder#folder_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.Initializer.parameter.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_folder#workspace_id DataOciDataintegrationWorkspaceFolder#workspace_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `folderKey`<sup>Required</sup> <a name="folderKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.Initializer.parameter.folderKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_folder#folder_key DataOciDataintegrationWorkspaceFolder#folder_key}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.Initializer.parameter.workspaceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_folder#workspace_id DataOciDataintegrationWorkspaceFolder#workspace_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataintegrationWorkspaceFolder resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_folder.DataOciDataintegrationWorkspaceFolder;

DataOciDataintegrationWorkspaceFolder.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_folder.DataOciDataintegrationWorkspaceFolder;

DataOciDataintegrationWorkspaceFolder.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_folder.DataOciDataintegrationWorkspaceFolder;

DataOciDataintegrationWorkspaceFolder.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_folder.DataOciDataintegrationWorkspaceFolder;

DataOciDataintegrationWorkspaceFolder.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDataintegrationWorkspaceFolder.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDataintegrationWorkspaceFolder resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDataintegrationWorkspaceFolder to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDataintegrationWorkspaceFolder that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_folder#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataintegrationWorkspaceFolder to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.property.categoryName">categoryName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.property.identifier">identifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.property.keyMap">keyMap</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.property.metadata">metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataList">DataOciDataintegrationWorkspaceFolderMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.property.modelType">modelType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.property.modelVersion">modelVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.property.objectStatus">objectStatus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.property.objectVersion">objectVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.property.parentRef">parentRef</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefList">DataOciDataintegrationWorkspaceFolderParentRefList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.property.registryMetadata">registryMetadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataList">DataOciDataintegrationWorkspaceFolderRegistryMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.property.folderKeyInput">folderKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.property.folderKey">folderKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `categoryName`<sup>Required</sup> <a name="categoryName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.property.categoryName"></a>

```java
public java.lang.String getCategoryName();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.property.identifier"></a>

```java
public java.lang.String getIdentifier();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `keyMap`<sup>Required</sup> <a name="keyMap" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.property.keyMap"></a>

```java
public StringMap getKeyMap();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.property.metadata"></a>

```java
public DataOciDataintegrationWorkspaceFolderMetadataList getMetadata();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataList">DataOciDataintegrationWorkspaceFolderMetadataList</a>

---

##### `modelType`<sup>Required</sup> <a name="modelType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.property.modelType"></a>

```java
public java.lang.String getModelType();
```

- *Type:* java.lang.String

---

##### `modelVersion`<sup>Required</sup> <a name="modelVersion" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.property.modelVersion"></a>

```java
public java.lang.String getModelVersion();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `objectStatus`<sup>Required</sup> <a name="objectStatus" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.property.objectStatus"></a>

```java
public java.lang.Number getObjectStatus();
```

- *Type:* java.lang.Number

---

##### `objectVersion`<sup>Required</sup> <a name="objectVersion" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.property.objectVersion"></a>

```java
public java.lang.Number getObjectVersion();
```

- *Type:* java.lang.Number

---

##### `parentRef`<sup>Required</sup> <a name="parentRef" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.property.parentRef"></a>

```java
public DataOciDataintegrationWorkspaceFolderParentRefList getParentRef();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefList">DataOciDataintegrationWorkspaceFolderParentRefList</a>

---

##### `registryMetadata`<sup>Required</sup> <a name="registryMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.property.registryMetadata"></a>

```java
public DataOciDataintegrationWorkspaceFolderRegistryMetadataList getRegistryMetadata();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataList">DataOciDataintegrationWorkspaceFolderRegistryMetadataList</a>

---

##### `folderKeyInput`<sup>Optional</sup> <a name="folderKeyInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.property.folderKeyInput"></a>

```java
public java.lang.String getFolderKeyInput();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `folderKey`<sup>Required</sup> <a name="folderKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.property.folderKey"></a>

```java
public java.lang.String getFolderKey();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolder.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataintegrationWorkspaceFolderConfig <a name="DataOciDataintegrationWorkspaceFolderConfig" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_folder.DataOciDataintegrationWorkspaceFolderConfig;

DataOciDataintegrationWorkspaceFolderConfig.builder()
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
    .folderKey(java.lang.String)
    .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderConfig.property.folderKey">folderKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_folder#folder_key DataOciDataintegrationWorkspaceFolder#folder_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_folder#workspace_id DataOciDataintegrationWorkspaceFolder#workspace_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `folderKey`<sup>Required</sup> <a name="folderKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderConfig.property.folderKey"></a>

```java
public java.lang.String getFolderKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_folder#folder_key DataOciDataintegrationWorkspaceFolder#folder_key}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_folder#workspace_id DataOciDataintegrationWorkspaceFolder#workspace_id}.

---

### DataOciDataintegrationWorkspaceFolderMetadata <a name="DataOciDataintegrationWorkspaceFolderMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadata.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_folder.DataOciDataintegrationWorkspaceFolderMetadata;

DataOciDataintegrationWorkspaceFolderMetadata.builder()
    .build();
```


### DataOciDataintegrationWorkspaceFolderMetadataAggregator <a name="DataOciDataintegrationWorkspaceFolderMetadataAggregator" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregator"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregator.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_folder.DataOciDataintegrationWorkspaceFolderMetadataAggregator;

DataOciDataintegrationWorkspaceFolderMetadataAggregator.builder()
    .build();
```


### DataOciDataintegrationWorkspaceFolderMetadataCountStatistics <a name="DataOciDataintegrationWorkspaceFolderMetadataCountStatistics" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatistics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatistics.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_folder.DataOciDataintegrationWorkspaceFolderMetadataCountStatistics;

DataOciDataintegrationWorkspaceFolderMetadataCountStatistics.builder()
    .build();
```


### DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStruct <a name="DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStruct" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStruct.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_folder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStruct;

DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStruct.builder()
    .build();
```


### DataOciDataintegrationWorkspaceFolderParentRef <a name="DataOciDataintegrationWorkspaceFolderParentRef" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRef"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRef.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_folder.DataOciDataintegrationWorkspaceFolderParentRef;

DataOciDataintegrationWorkspaceFolderParentRef.builder()
    .build();
```


### DataOciDataintegrationWorkspaceFolderRegistryMetadata <a name="DataOciDataintegrationWorkspaceFolderRegistryMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadata.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_folder.DataOciDataintegrationWorkspaceFolderRegistryMetadata;

DataOciDataintegrationWorkspaceFolderRegistryMetadata.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataintegrationWorkspaceFolderMetadataAggregatorList <a name="DataOciDataintegrationWorkspaceFolderMetadataAggregatorList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_folder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorList;

new DataOciDataintegrationWorkspaceFolderMetadataAggregatorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorList.get"></a>

```java
public DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference <a name="DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_folder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference;

new DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference.property.identifier">identifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregator">DataOciDataintegrationWorkspaceFolderMetadataAggregator</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference.property.identifier"></a>

```java
public java.lang.String getIdentifier();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorOutputReference.property.internalValue"></a>

```java
public DataOciDataintegrationWorkspaceFolderMetadataAggregator getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregator">DataOciDataintegrationWorkspaceFolderMetadataAggregator</a>

---


### DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsList <a name="DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_folder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsList;

new DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsList.get"></a>

```java
public DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList <a name="DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_folder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList;

new DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList.get"></a>

```java
public DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference <a name="DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_folder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference;

new DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectCount">objectCount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectType">objectType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStruct">DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `objectCount`<sup>Required</sup> <a name="objectCount" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectCount"></a>

```java
public java.lang.String getObjectCount();
```

- *Type:* java.lang.String

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectType"></a>

```java
public java.lang.String getObjectType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.internalValue"></a>

```java
public DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStruct getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStruct">DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStruct</a>

---


### DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference <a name="DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_folder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference;

new DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.property.objectTypeCountList">objectTypeCountList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList">DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatistics">DataOciDataintegrationWorkspaceFolderMetadataCountStatistics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `objectTypeCountList`<sup>Required</sup> <a name="objectTypeCountList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.property.objectTypeCountList"></a>

```java
public DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList getObjectTypeCountList();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList">DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.property.internalValue"></a>

```java
public DataOciDataintegrationWorkspaceFolderMetadataCountStatistics getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatistics">DataOciDataintegrationWorkspaceFolderMetadataCountStatistics</a>

---


### DataOciDataintegrationWorkspaceFolderMetadataList <a name="DataOciDataintegrationWorkspaceFolderMetadataList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_folder.DataOciDataintegrationWorkspaceFolderMetadataList;

new DataOciDataintegrationWorkspaceFolderMetadataList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataList.get"></a>

```java
public DataOciDataintegrationWorkspaceFolderMetadataOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataintegrationWorkspaceFolderMetadataOutputReference <a name="DataOciDataintegrationWorkspaceFolderMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_folder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference;

new DataOciDataintegrationWorkspaceFolderMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.property.aggregator">aggregator</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorList">DataOciDataintegrationWorkspaceFolderMetadataAggregatorList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.property.aggregatorKey">aggregatorKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.property.countStatistics">countStatistics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsList">DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.property.createdByName">createdByName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.property.identifierPath">identifierPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.property.infoFields">infoFields</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.property.isFavorite">isFavorite</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.property.labels">labels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.property.registryVersion">registryVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.property.updatedBy">updatedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.property.updatedByName">updatedByName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadata">DataOciDataintegrationWorkspaceFolderMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aggregator`<sup>Required</sup> <a name="aggregator" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.property.aggregator"></a>

```java
public DataOciDataintegrationWorkspaceFolderMetadataAggregatorList getAggregator();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataAggregatorList">DataOciDataintegrationWorkspaceFolderMetadataAggregatorList</a>

---

##### `aggregatorKey`<sup>Required</sup> <a name="aggregatorKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.property.aggregatorKey"></a>

```java
public java.lang.String getAggregatorKey();
```

- *Type:* java.lang.String

---

##### `countStatistics`<sup>Required</sup> <a name="countStatistics" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.property.countStatistics"></a>

```java
public DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsList getCountStatistics();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsList">DataOciDataintegrationWorkspaceFolderMetadataCountStatisticsList</a>

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

---

##### `createdByName`<sup>Required</sup> <a name="createdByName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.property.createdByName"></a>

```java
public java.lang.String getCreatedByName();
```

- *Type:* java.lang.String

---

##### `identifierPath`<sup>Required</sup> <a name="identifierPath" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.property.identifierPath"></a>

```java
public java.lang.String getIdentifierPath();
```

- *Type:* java.lang.String

---

##### `infoFields`<sup>Required</sup> <a name="infoFields" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.property.infoFields"></a>

```java
public StringMap getInfoFields();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `isFavorite`<sup>Required</sup> <a name="isFavorite" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.property.isFavorite"></a>

```java
public IResolvable getIsFavorite();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.property.labels"></a>

```java
public java.util.List<java.lang.String> getLabels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `registryVersion`<sup>Required</sup> <a name="registryVersion" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.property.registryVersion"></a>

```java
public java.lang.Number getRegistryVersion();
```

- *Type:* java.lang.Number

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.property.updatedBy"></a>

```java
public java.lang.String getUpdatedBy();
```

- *Type:* java.lang.String

---

##### `updatedByName`<sup>Required</sup> <a name="updatedByName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.property.updatedByName"></a>

```java
public java.lang.String getUpdatedByName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadataOutputReference.property.internalValue"></a>

```java
public DataOciDataintegrationWorkspaceFolderMetadata getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderMetadata">DataOciDataintegrationWorkspaceFolderMetadata</a>

---


### DataOciDataintegrationWorkspaceFolderParentRefList <a name="DataOciDataintegrationWorkspaceFolderParentRefList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_folder.DataOciDataintegrationWorkspaceFolderParentRefList;

new DataOciDataintegrationWorkspaceFolderParentRefList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefList.get"></a>

```java
public DataOciDataintegrationWorkspaceFolderParentRefOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataintegrationWorkspaceFolderParentRefOutputReference <a name="DataOciDataintegrationWorkspaceFolderParentRefOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_folder.DataOciDataintegrationWorkspaceFolderParentRefOutputReference;

new DataOciDataintegrationWorkspaceFolderParentRefOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefOutputReference.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefOutputReference.property.rootDocId">rootDocId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRef">DataOciDataintegrationWorkspaceFolderParentRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefOutputReference.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

##### `rootDocId`<sup>Required</sup> <a name="rootDocId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefOutputReference.property.rootDocId"></a>

```java
public java.lang.String getRootDocId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRefOutputReference.property.internalValue"></a>

```java
public DataOciDataintegrationWorkspaceFolderParentRef getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderParentRef">DataOciDataintegrationWorkspaceFolderParentRef</a>

---


### DataOciDataintegrationWorkspaceFolderRegistryMetadataList <a name="DataOciDataintegrationWorkspaceFolderRegistryMetadataList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_folder.DataOciDataintegrationWorkspaceFolderRegistryMetadataList;

new DataOciDataintegrationWorkspaceFolderRegistryMetadataList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataList.get"></a>

```java
public DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference <a name="DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_folder.DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference;

new DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference.property.aggregatorKey">aggregatorKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference.property.isFavorite">isFavorite</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference.property.labels">labels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference.property.registryVersion">registryVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadata">DataOciDataintegrationWorkspaceFolderRegistryMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aggregatorKey`<sup>Required</sup> <a name="aggregatorKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference.property.aggregatorKey"></a>

```java
public java.lang.String getAggregatorKey();
```

- *Type:* java.lang.String

---

##### `isFavorite`<sup>Required</sup> <a name="isFavorite" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference.property.isFavorite"></a>

```java
public IResolvable getIsFavorite();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference.property.labels"></a>

```java
public java.util.List<java.lang.String> getLabels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `registryVersion`<sup>Required</sup> <a name="registryVersion" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference.property.registryVersion"></a>

```java
public java.lang.Number getRegistryVersion();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadataOutputReference.property.internalValue"></a>

```java
public DataOciDataintegrationWorkspaceFolderRegistryMetadata getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolder.DataOciDataintegrationWorkspaceFolderRegistryMetadata">DataOciDataintegrationWorkspaceFolderRegistryMetadata</a>

---



