# `dataOciFileStorageFilesystemSnapshotPolicy` Submodule <a name="`dataOciFileStorageFilesystemSnapshotPolicy` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFileStorageFilesystemSnapshotPolicy <a name="DataOciFileStorageFilesystemSnapshotPolicy" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_filesystem_snapshot_policy oci_file_storage_filesystem_snapshot_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_file_storage_filesystem_snapshot_policy.DataOciFileStorageFilesystemSnapshotPolicy;

DataOciFileStorageFilesystemSnapshotPolicy.Builder.create(Construct scope, java.lang.String id)
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
    .filesystemSnapshotPolicyId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.Initializer.parameter.filesystemSnapshotPolicyId">filesystemSnapshotPolicyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_filesystem_snapshot_policy#filesystem_snapshot_policy_id DataOciFileStorageFilesystemSnapshotPolicy#filesystem_snapshot_policy_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filesystemSnapshotPolicyId`<sup>Required</sup> <a name="filesystemSnapshotPolicyId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.Initializer.parameter.filesystemSnapshotPolicyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_filesystem_snapshot_policy#filesystem_snapshot_policy_id DataOciFileStorageFilesystemSnapshotPolicy#filesystem_snapshot_policy_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciFileStorageFilesystemSnapshotPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_file_storage_filesystem_snapshot_policy.DataOciFileStorageFilesystemSnapshotPolicy;

DataOciFileStorageFilesystemSnapshotPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_file_storage_filesystem_snapshot_policy.DataOciFileStorageFilesystemSnapshotPolicy;

DataOciFileStorageFilesystemSnapshotPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_file_storage_filesystem_snapshot_policy.DataOciFileStorageFilesystemSnapshotPolicy;

DataOciFileStorageFilesystemSnapshotPolicy.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_file_storage_filesystem_snapshot_policy.DataOciFileStorageFilesystemSnapshotPolicy;

DataOciFileStorageFilesystemSnapshotPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciFileStorageFilesystemSnapshotPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciFileStorageFilesystemSnapshotPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciFileStorageFilesystemSnapshotPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciFileStorageFilesystemSnapshotPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_filesystem_snapshot_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFileStorageFilesystemSnapshotPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.isLockOverride">isLockOverride</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.locks">locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList">DataOciFileStorageFilesystemSnapshotPolicyLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.policyPrefix">policyPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.schedules">schedules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList">DataOciFileStorageFilesystemSnapshotPolicySchedulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.filesystemSnapshotPolicyIdInput">filesystemSnapshotPolicyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.filesystemSnapshotPolicyId">filesystemSnapshotPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isLockOverride`<sup>Required</sup> <a name="isLockOverride" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.isLockOverride"></a>

```java
public IResolvable getIsLockOverride();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `locks`<sup>Required</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.locks"></a>

```java
public DataOciFileStorageFilesystemSnapshotPolicyLocksList getLocks();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList">DataOciFileStorageFilesystemSnapshotPolicyLocksList</a>

---

##### `policyPrefix`<sup>Required</sup> <a name="policyPrefix" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.policyPrefix"></a>

```java
public java.lang.String getPolicyPrefix();
```

- *Type:* java.lang.String

---

##### `schedules`<sup>Required</sup> <a name="schedules" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.schedules"></a>

```java
public DataOciFileStorageFilesystemSnapshotPolicySchedulesList getSchedules();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList">DataOciFileStorageFilesystemSnapshotPolicySchedulesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `filesystemSnapshotPolicyIdInput`<sup>Optional</sup> <a name="filesystemSnapshotPolicyIdInput" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.filesystemSnapshotPolicyIdInput"></a>

```java
public java.lang.String getFilesystemSnapshotPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `filesystemSnapshotPolicyId`<sup>Required</sup> <a name="filesystemSnapshotPolicyId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.filesystemSnapshotPolicyId"></a>

```java
public java.lang.String getFilesystemSnapshotPolicyId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFileStorageFilesystemSnapshotPolicyConfig <a name="DataOciFileStorageFilesystemSnapshotPolicyConfig" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_file_storage_filesystem_snapshot_policy.DataOciFileStorageFilesystemSnapshotPolicyConfig;

DataOciFileStorageFilesystemSnapshotPolicyConfig.builder()
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
    .filesystemSnapshotPolicyId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyConfig.property.filesystemSnapshotPolicyId">filesystemSnapshotPolicyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_filesystem_snapshot_policy#filesystem_snapshot_policy_id DataOciFileStorageFilesystemSnapshotPolicy#filesystem_snapshot_policy_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filesystemSnapshotPolicyId`<sup>Required</sup> <a name="filesystemSnapshotPolicyId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyConfig.property.filesystemSnapshotPolicyId"></a>

```java
public java.lang.String getFilesystemSnapshotPolicyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_filesystem_snapshot_policy#filesystem_snapshot_policy_id DataOciFileStorageFilesystemSnapshotPolicy#filesystem_snapshot_policy_id}.

---

### DataOciFileStorageFilesystemSnapshotPolicyLocks <a name="DataOciFileStorageFilesystemSnapshotPolicyLocks" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_file_storage_filesystem_snapshot_policy.DataOciFileStorageFilesystemSnapshotPolicyLocks;

DataOciFileStorageFilesystemSnapshotPolicyLocks.builder()
    .build();
```


### DataOciFileStorageFilesystemSnapshotPolicySchedules <a name="DataOciFileStorageFilesystemSnapshotPolicySchedules" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_file_storage_filesystem_snapshot_policy.DataOciFileStorageFilesystemSnapshotPolicySchedules;

DataOciFileStorageFilesystemSnapshotPolicySchedules.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFileStorageFilesystemSnapshotPolicyLocksList <a name="DataOciFileStorageFilesystemSnapshotPolicyLocksList" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_file_storage_filesystem_snapshot_policy.DataOciFileStorageFilesystemSnapshotPolicyLocksList;

new DataOciFileStorageFilesystemSnapshotPolicyLocksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.get"></a>

```java
public DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference <a name="DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_file_storage_filesystem_snapshot_policy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference;

new DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.property.relatedResourceId">relatedResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocks">DataOciFileStorageFilesystemSnapshotPolicyLocks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `relatedResourceId`<sup>Required</sup> <a name="relatedResourceId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.property.relatedResourceId"></a>

```java
public java.lang.String getRelatedResourceId();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.property.internalValue"></a>

```java
public DataOciFileStorageFilesystemSnapshotPolicyLocks getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocks">DataOciFileStorageFilesystemSnapshotPolicyLocks</a>

---


### DataOciFileStorageFilesystemSnapshotPolicySchedulesList <a name="DataOciFileStorageFilesystemSnapshotPolicySchedulesList" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_file_storage_filesystem_snapshot_policy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList;

new DataOciFileStorageFilesystemSnapshotPolicySchedulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.get"></a>

```java
public DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference <a name="DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_file_storage_filesystem_snapshot_policy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference;

new DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.dayOfMonth">dayOfMonth</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.hourOfDay">hourOfDay</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.month">month</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.period">period</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.retentionDurationInSeconds">retentionDurationInSeconds</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.schedulePrefix">schedulePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.timeScheduleStart">timeScheduleStart</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedules">DataOciFileStorageFilesystemSnapshotPolicySchedules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dayOfMonth`<sup>Required</sup> <a name="dayOfMonth" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.dayOfMonth"></a>

```java
public java.lang.Number getDayOfMonth();
```

- *Type:* java.lang.Number

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.dayOfWeek"></a>

```java
public java.lang.String getDayOfWeek();
```

- *Type:* java.lang.String

---

##### `hourOfDay`<sup>Required</sup> <a name="hourOfDay" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.hourOfDay"></a>

```java
public java.lang.Number getHourOfDay();
```

- *Type:* java.lang.Number

---

##### `month`<sup>Required</sup> <a name="month" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.month"></a>

```java
public java.lang.String getMonth();
```

- *Type:* java.lang.String

---

##### `period`<sup>Required</sup> <a name="period" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.period"></a>

```java
public java.lang.String getPeriod();
```

- *Type:* java.lang.String

---

##### `retentionDurationInSeconds`<sup>Required</sup> <a name="retentionDurationInSeconds" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.retentionDurationInSeconds"></a>

```java
public java.lang.String getRetentionDurationInSeconds();
```

- *Type:* java.lang.String

---

##### `schedulePrefix`<sup>Required</sup> <a name="schedulePrefix" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.schedulePrefix"></a>

```java
public java.lang.String getSchedulePrefix();
```

- *Type:* java.lang.String

---

##### `timeScheduleStart`<sup>Required</sup> <a name="timeScheduleStart" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.timeScheduleStart"></a>

```java
public java.lang.String getTimeScheduleStart();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.internalValue"></a>

```java
public DataOciFileStorageFilesystemSnapshotPolicySchedules getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedules">DataOciFileStorageFilesystemSnapshotPolicySchedules</a>

---



