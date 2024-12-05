# `dataOciDatabaseCloudVmCluster` Submodule <a name="`dataOciDatabaseCloudVmCluster` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseCloudVmCluster <a name="DataOciDatabaseCloudVmCluster" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_vm_cluster oci_database_cloud_vm_cluster}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_cloud_vm_cluster.DataOciDatabaseCloudVmCluster;

DataOciDatabaseCloudVmCluster.Builder.create(Construct scope, java.lang.String id)
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
    .cloudVmClusterId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.Initializer.parameter.cloudVmClusterId">cloudVmClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_vm_cluster#cloud_vm_cluster_id DataOciDatabaseCloudVmCluster#cloud_vm_cluster_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cloudVmClusterId`<sup>Required</sup> <a name="cloudVmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.Initializer.parameter.cloudVmClusterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_vm_cluster#cloud_vm_cluster_id DataOciDatabaseCloudVmCluster#cloud_vm_cluster_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseCloudVmCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_cloud_vm_cluster.DataOciDatabaseCloudVmCluster;

DataOciDatabaseCloudVmCluster.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_cloud_vm_cluster.DataOciDatabaseCloudVmCluster;

DataOciDatabaseCloudVmCluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_cloud_vm_cluster.DataOciDatabaseCloudVmCluster;

DataOciDatabaseCloudVmCluster.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_cloud_vm_cluster.DataOciDatabaseCloudVmCluster;

DataOciDatabaseCloudVmCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDatabaseCloudVmCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDatabaseCloudVmCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDatabaseCloudVmCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDatabaseCloudVmCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_vm_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseCloudVmCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.backupNetworkNsgIds">backupNetworkNsgIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.backupSubnetId">backupSubnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.cloudAutomationUpdateDetails">cloudAutomationUpdateDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsList">DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.cloudExadataInfrastructureId">cloudExadataInfrastructureId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.cpuCoreCount">cpuCoreCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.createAsync">createAsync</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.dataCollectionOptions">dataCollectionOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsList">DataOciDatabaseCloudVmClusterDataCollectionOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.dataStoragePercentage">dataStoragePercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.dataStorageSizeInTbs">dataStorageSizeInTbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.dbNodeStorageSizeInGbs">dbNodeStorageSizeInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.dbServers">dbServers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.diskRedundancy">diskRedundancy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.fileSystemConfigurationDetails">fileSystemConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsList">DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.giVersion">giVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.iormConfigCache">iormConfigCache</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheList">DataOciDatabaseCloudVmClusterIormConfigCacheList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.isLocalBackupEnabled">isLocalBackupEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.isSparseDiskgroupEnabled">isSparseDiskgroupEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.lastUpdateHistoryEntryId">lastUpdateHistoryEntryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.listenerPort">listenerPort</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.memorySizeInGbs">memorySizeInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.ocpuCount">ocpuCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.privateZoneId">privateZoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.scanDnsName">scanDnsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.scanDnsRecordId">scanDnsRecordId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.scanIpIds">scanIpIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.scanListenerPortTcp">scanListenerPortTcp</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.scanListenerPortTcpSsl">scanListenerPortTcpSsl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.securityAttributes">securityAttributes</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.shape">shape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.sshPublicKeys">sshPublicKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.storageSizeInGbs">storageSizeInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.systemVersion">systemVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.vipIds">vipIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.cloudVmClusterIdInput">cloudVmClusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.cloudVmClusterId">cloudVmClusterId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `backupNetworkNsgIds`<sup>Required</sup> <a name="backupNetworkNsgIds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.backupNetworkNsgIds"></a>

```java
public java.util.List<java.lang.String> getBackupNetworkNsgIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `backupSubnetId`<sup>Required</sup> <a name="backupSubnetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.backupSubnetId"></a>

```java
public java.lang.String getBackupSubnetId();
```

- *Type:* java.lang.String

---

##### `cloudAutomationUpdateDetails`<sup>Required</sup> <a name="cloudAutomationUpdateDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.cloudAutomationUpdateDetails"></a>

```java
public DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsList getCloudAutomationUpdateDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsList">DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsList</a>

---

##### `cloudExadataInfrastructureId`<sup>Required</sup> <a name="cloudExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.cloudExadataInfrastructureId"></a>

```java
public java.lang.String getCloudExadataInfrastructureId();
```

- *Type:* java.lang.String

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `cpuCoreCount`<sup>Required</sup> <a name="cpuCoreCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.cpuCoreCount"></a>

```java
public java.lang.Number getCpuCoreCount();
```

- *Type:* java.lang.Number

---

##### `createAsync`<sup>Required</sup> <a name="createAsync" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.createAsync"></a>

```java
public IResolvable getCreateAsync();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `dataCollectionOptions`<sup>Required</sup> <a name="dataCollectionOptions" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.dataCollectionOptions"></a>

```java
public DataOciDatabaseCloudVmClusterDataCollectionOptionsList getDataCollectionOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsList">DataOciDatabaseCloudVmClusterDataCollectionOptionsList</a>

---

##### `dataStoragePercentage`<sup>Required</sup> <a name="dataStoragePercentage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.dataStoragePercentage"></a>

```java
public java.lang.Number getDataStoragePercentage();
```

- *Type:* java.lang.Number

---

##### `dataStorageSizeInTbs`<sup>Required</sup> <a name="dataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.dataStorageSizeInTbs"></a>

```java
public java.lang.Number getDataStorageSizeInTbs();
```

- *Type:* java.lang.Number

---

##### `dbNodeStorageSizeInGbs`<sup>Required</sup> <a name="dbNodeStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.dbNodeStorageSizeInGbs"></a>

```java
public java.lang.Number getDbNodeStorageSizeInGbs();
```

- *Type:* java.lang.Number

---

##### `dbServers`<sup>Required</sup> <a name="dbServers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.dbServers"></a>

```java
public java.util.List<java.lang.String> getDbServers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `diskRedundancy`<sup>Required</sup> <a name="diskRedundancy" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.diskRedundancy"></a>

```java
public java.lang.String getDiskRedundancy();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `fileSystemConfigurationDetails`<sup>Required</sup> <a name="fileSystemConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.fileSystemConfigurationDetails"></a>

```java
public DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsList getFileSystemConfigurationDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsList">DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsList</a>

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `giVersion`<sup>Required</sup> <a name="giVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.giVersion"></a>

```java
public java.lang.String getGiVersion();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `iormConfigCache`<sup>Required</sup> <a name="iormConfigCache" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.iormConfigCache"></a>

```java
public DataOciDatabaseCloudVmClusterIormConfigCacheList getIormConfigCache();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheList">DataOciDatabaseCloudVmClusterIormConfigCacheList</a>

---

##### `isLocalBackupEnabled`<sup>Required</sup> <a name="isLocalBackupEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.isLocalBackupEnabled"></a>

```java
public IResolvable getIsLocalBackupEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isSparseDiskgroupEnabled`<sup>Required</sup> <a name="isSparseDiskgroupEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.isSparseDiskgroupEnabled"></a>

```java
public IResolvable getIsSparseDiskgroupEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `lastUpdateHistoryEntryId`<sup>Required</sup> <a name="lastUpdateHistoryEntryId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.lastUpdateHistoryEntryId"></a>

```java
public java.lang.String getLastUpdateHistoryEntryId();
```

- *Type:* java.lang.String

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.licenseModel"></a>

```java
public java.lang.String getLicenseModel();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `listenerPort`<sup>Required</sup> <a name="listenerPort" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.listenerPort"></a>

```java
public java.lang.String getListenerPort();
```

- *Type:* java.lang.String

---

##### `memorySizeInGbs`<sup>Required</sup> <a name="memorySizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.memorySizeInGbs"></a>

```java
public java.lang.Number getMemorySizeInGbs();
```

- *Type:* java.lang.Number

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.nodeCount"></a>

```java
public java.lang.Number getNodeCount();
```

- *Type:* java.lang.Number

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ocpuCount`<sup>Required</sup> <a name="ocpuCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.ocpuCount"></a>

```java
public java.lang.Number getOcpuCount();
```

- *Type:* java.lang.Number

---

##### `privateZoneId`<sup>Required</sup> <a name="privateZoneId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.privateZoneId"></a>

```java
public java.lang.String getPrivateZoneId();
```

- *Type:* java.lang.String

---

##### `scanDnsName`<sup>Required</sup> <a name="scanDnsName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.scanDnsName"></a>

```java
public java.lang.String getScanDnsName();
```

- *Type:* java.lang.String

---

##### `scanDnsRecordId`<sup>Required</sup> <a name="scanDnsRecordId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.scanDnsRecordId"></a>

```java
public java.lang.String getScanDnsRecordId();
```

- *Type:* java.lang.String

---

##### `scanIpIds`<sup>Required</sup> <a name="scanIpIds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.scanIpIds"></a>

```java
public java.util.List<java.lang.String> getScanIpIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scanListenerPortTcp`<sup>Required</sup> <a name="scanListenerPortTcp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.scanListenerPortTcp"></a>

```java
public java.lang.Number getScanListenerPortTcp();
```

- *Type:* java.lang.Number

---

##### `scanListenerPortTcpSsl`<sup>Required</sup> <a name="scanListenerPortTcpSsl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.scanListenerPortTcpSsl"></a>

```java
public java.lang.Number getScanListenerPortTcpSsl();
```

- *Type:* java.lang.Number

---

##### `securityAttributes`<sup>Required</sup> <a name="securityAttributes" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.securityAttributes"></a>

```java
public StringMap getSecurityAttributes();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

---

##### `sshPublicKeys`<sup>Required</sup> <a name="sshPublicKeys" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.sshPublicKeys"></a>

```java
public java.util.List<java.lang.String> getSshPublicKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `storageSizeInGbs`<sup>Required</sup> <a name="storageSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.storageSizeInGbs"></a>

```java
public java.lang.Number getStorageSizeInGbs();
```

- *Type:* java.lang.Number

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `systemVersion`<sup>Required</sup> <a name="systemVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.systemVersion"></a>

```java
public java.lang.String getSystemVersion();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

##### `vipIds`<sup>Required</sup> <a name="vipIds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.vipIds"></a>

```java
public java.util.List<java.lang.String> getVipIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

##### `cloudVmClusterIdInput`<sup>Optional</sup> <a name="cloudVmClusterIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.cloudVmClusterIdInput"></a>

```java
public java.lang.String getCloudVmClusterIdInput();
```

- *Type:* java.lang.String

---

##### `cloudVmClusterId`<sup>Required</sup> <a name="cloudVmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.cloudVmClusterId"></a>

```java
public java.lang.String getCloudVmClusterId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmCluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetails <a name="DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_cloud_vm_cluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetails;

DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetails.builder()
    .build();
```


### DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference <a name="DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_cloud_vm_cluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference;

DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference.builder()
    .build();
```


### DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod <a name="DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_cloud_vm_cluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod;

DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod.builder()
    .build();
```


### DataOciDatabaseCloudVmClusterConfig <a name="DataOciDatabaseCloudVmClusterConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_cloud_vm_cluster.DataOciDatabaseCloudVmClusterConfig;

DataOciDatabaseCloudVmClusterConfig.builder()
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
    .cloudVmClusterId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterConfig.property.cloudVmClusterId">cloudVmClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_vm_cluster#cloud_vm_cluster_id DataOciDatabaseCloudVmCluster#cloud_vm_cluster_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cloudVmClusterId`<sup>Required</sup> <a name="cloudVmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterConfig.property.cloudVmClusterId"></a>

```java
public java.lang.String getCloudVmClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_vm_cluster#cloud_vm_cluster_id DataOciDatabaseCloudVmCluster#cloud_vm_cluster_id}.

---

### DataOciDatabaseCloudVmClusterDataCollectionOptions <a name="DataOciDatabaseCloudVmClusterDataCollectionOptions" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_cloud_vm_cluster.DataOciDatabaseCloudVmClusterDataCollectionOptions;

DataOciDatabaseCloudVmClusterDataCollectionOptions.builder()
    .build();
```


### DataOciDatabaseCloudVmClusterFileSystemConfigurationDetails <a name="DataOciDatabaseCloudVmClusterFileSystemConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_cloud_vm_cluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetails;

DataOciDatabaseCloudVmClusterFileSystemConfigurationDetails.builder()
    .build();
```


### DataOciDatabaseCloudVmClusterIormConfigCache <a name="DataOciDatabaseCloudVmClusterIormConfigCache" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCache"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCache.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_cloud_vm_cluster.DataOciDatabaseCloudVmClusterIormConfigCache;

DataOciDatabaseCloudVmClusterIormConfigCache.builder()
    .build();
```


### DataOciDatabaseCloudVmClusterIormConfigCacheDbPlans <a name="DataOciDatabaseCloudVmClusterIormConfigCacheDbPlans" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlans"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlans.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_cloud_vm_cluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlans;

DataOciDatabaseCloudVmClusterIormConfigCacheDbPlans.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList <a name="DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_cloud_vm_cluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList;

new DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.get"></a>

```java
public DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference <a name="DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_cloud_vm_cluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference;

new DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredEndTime">applyUpdatePreferredEndTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredStartTime">applyUpdatePreferredStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference">DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applyUpdatePreferredEndTime`<sup>Required</sup> <a name="applyUpdatePreferredEndTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredEndTime"></a>

```java
public java.lang.String getApplyUpdatePreferredEndTime();
```

- *Type:* java.lang.String

---

##### `applyUpdatePreferredStartTime`<sup>Required</sup> <a name="applyUpdatePreferredStartTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredStartTime"></a>

```java
public java.lang.String getApplyUpdatePreferredStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference">DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference</a>

---


### DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodList <a name="DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_cloud_vm_cluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodList;

new DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodList.get"></a>

```java
public DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference <a name="DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_cloud_vm_cluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference;

new DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodEndTime">freezePeriodEndTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodStartTime">freezePeriodStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod">DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `freezePeriodEndTime`<sup>Required</sup> <a name="freezePeriodEndTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodEndTime"></a>

```java
public java.lang.String getFreezePeriodEndTime();
```

- *Type:* java.lang.String

---

##### `freezePeriodStartTime`<sup>Required</sup> <a name="freezePeriodStartTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodStartTime"></a>

```java
public java.lang.String getFreezePeriodStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod">DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod</a>

---


### DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsList <a name="DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_cloud_vm_cluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsList;

new DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsList.get"></a>

```java
public DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference <a name="DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_cloud_vm_cluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference;

new DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.applyUpdateTimePreference">applyUpdateTimePreference</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList">DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.freezePeriod">freezePeriod</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodList">DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.isEarlyAdoptionEnabled">isEarlyAdoptionEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.isFreezePeriodEnabled">isFreezePeriodEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetails">DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applyUpdateTimePreference`<sup>Required</sup> <a name="applyUpdateTimePreference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.applyUpdateTimePreference"></a>

```java
public DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList getApplyUpdateTimePreference();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList">DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList</a>

---

##### `freezePeriod`<sup>Required</sup> <a name="freezePeriod" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.freezePeriod"></a>

```java
public DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodList getFreezePeriod();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodList">DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodList</a>

---

##### `isEarlyAdoptionEnabled`<sup>Required</sup> <a name="isEarlyAdoptionEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.isEarlyAdoptionEnabled"></a>

```java
public IResolvable getIsEarlyAdoptionEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isFreezePeriodEnabled`<sup>Required</sup> <a name="isFreezePeriodEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.isFreezePeriodEnabled"></a>

```java
public IResolvable getIsFreezePeriodEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetails">DataOciDatabaseCloudVmClusterCloudAutomationUpdateDetails</a>

---


### DataOciDatabaseCloudVmClusterDataCollectionOptionsList <a name="DataOciDatabaseCloudVmClusterDataCollectionOptionsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_cloud_vm_cluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsList;

new DataOciDatabaseCloudVmClusterDataCollectionOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsList.get"></a>

```java
public DataOciDatabaseCloudVmClusterDataCollectionOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseCloudVmClusterDataCollectionOptionsOutputReference <a name="DataOciDatabaseCloudVmClusterDataCollectionOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_cloud_vm_cluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsOutputReference;

new DataOciDatabaseCloudVmClusterDataCollectionOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled">isDiagnosticsEventsEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled">isHealthMonitoringEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled">isIncidentLogsEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptions">DataOciDatabaseCloudVmClusterDataCollectionOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isDiagnosticsEventsEnabled`<sup>Required</sup> <a name="isDiagnosticsEventsEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled"></a>

```java
public IResolvable getIsDiagnosticsEventsEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isHealthMonitoringEnabled`<sup>Required</sup> <a name="isHealthMonitoringEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled"></a>

```java
public IResolvable getIsHealthMonitoringEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isIncidentLogsEnabled`<sup>Required</sup> <a name="isIncidentLogsEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled"></a>

```java
public IResolvable getIsIncidentLogsEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptionsOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseCloudVmClusterDataCollectionOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterDataCollectionOptions">DataOciDatabaseCloudVmClusterDataCollectionOptions</a>

---


### DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsList <a name="DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_cloud_vm_cluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsList;

new DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsList.get"></a>

```java
public DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference <a name="DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_cloud_vm_cluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference;

new DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.property.fileSystemSizeGb">fileSystemSizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.property.mountPoint">mountPoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetails">DataOciDatabaseCloudVmClusterFileSystemConfigurationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fileSystemSizeGb`<sup>Required</sup> <a name="fileSystemSizeGb" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.property.fileSystemSizeGb"></a>

```java
public java.lang.Number getFileSystemSizeGb();
```

- *Type:* java.lang.Number

---

##### `mountPoint`<sup>Required</sup> <a name="mountPoint" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.property.mountPoint"></a>

```java
public java.lang.String getMountPoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseCloudVmClusterFileSystemConfigurationDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterFileSystemConfigurationDetails">DataOciDatabaseCloudVmClusterFileSystemConfigurationDetails</a>

---


### DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansList <a name="DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_cloud_vm_cluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansList;

new DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansList.get"></a>

```java
public DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference <a name="DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_cloud_vm_cluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference;

new DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.property.dbName">dbName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.property.flashCacheLimit">flashCacheLimit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.property.share">share</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlans">DataOciDatabaseCloudVmClusterIormConfigCacheDbPlans</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.property.dbName"></a>

```java
public java.lang.String getDbName();
```

- *Type:* java.lang.String

---

##### `flashCacheLimit`<sup>Required</sup> <a name="flashCacheLimit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.property.flashCacheLimit"></a>

```java
public java.lang.String getFlashCacheLimit();
```

- *Type:* java.lang.String

---

##### `share`<sup>Required</sup> <a name="share" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.property.share"></a>

```java
public java.lang.Number getShare();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseCloudVmClusterIormConfigCacheDbPlans getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlans">DataOciDatabaseCloudVmClusterIormConfigCacheDbPlans</a>

---


### DataOciDatabaseCloudVmClusterIormConfigCacheList <a name="DataOciDatabaseCloudVmClusterIormConfigCacheList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_cloud_vm_cluster.DataOciDatabaseCloudVmClusterIormConfigCacheList;

new DataOciDatabaseCloudVmClusterIormConfigCacheList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheList.get"></a>

```java
public DataOciDatabaseCloudVmClusterIormConfigCacheOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseCloudVmClusterIormConfigCacheOutputReference <a name="DataOciDatabaseCloudVmClusterIormConfigCacheOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_cloud_vm_cluster.DataOciDatabaseCloudVmClusterIormConfigCacheOutputReference;

new DataOciDatabaseCloudVmClusterIormConfigCacheOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheOutputReference.property.dbPlans">dbPlans</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansList">DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheOutputReference.property.objective">objective</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCache">DataOciDatabaseCloudVmClusterIormConfigCache</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dbPlans`<sup>Required</sup> <a name="dbPlans" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheOutputReference.property.dbPlans"></a>

```java
public DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansList getDbPlans();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansList">DataOciDatabaseCloudVmClusterIormConfigCacheDbPlansList</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `objective`<sup>Required</sup> <a name="objective" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheOutputReference.property.objective"></a>

```java
public java.lang.String getObjective();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCacheOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseCloudVmClusterIormConfigCache getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmCluster.DataOciDatabaseCloudVmClusterIormConfigCache">DataOciDatabaseCloudVmClusterIormConfigCache</a>

---



