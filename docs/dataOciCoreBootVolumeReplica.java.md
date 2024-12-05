# `dataOciCoreBootVolumeReplica` Submodule <a name="`dataOciCoreBootVolumeReplica` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreBootVolumeReplica <a name="DataOciCoreBootVolumeReplica" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_boot_volume_replica oci_core_boot_volume_replica}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_boot_volume_replica.DataOciCoreBootVolumeReplica;

DataOciCoreBootVolumeReplica.Builder.create(Construct scope, java.lang.String id)
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
    .bootVolumeReplicaId(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.Initializer.parameter.bootVolumeReplicaId">bootVolumeReplicaId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_boot_volume_replica#boot_volume_replica_id DataOciCoreBootVolumeReplica#boot_volume_replica_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_boot_volume_replica#id DataOciCoreBootVolumeReplica#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bootVolumeReplicaId`<sup>Required</sup> <a name="bootVolumeReplicaId" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.Initializer.parameter.bootVolumeReplicaId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_boot_volume_replica#boot_volume_replica_id DataOciCoreBootVolumeReplica#boot_volume_replica_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_boot_volume_replica#id DataOciCoreBootVolumeReplica#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreBootVolumeReplica resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_boot_volume_replica.DataOciCoreBootVolumeReplica;

DataOciCoreBootVolumeReplica.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_boot_volume_replica.DataOciCoreBootVolumeReplica;

DataOciCoreBootVolumeReplica.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_boot_volume_replica.DataOciCoreBootVolumeReplica;

DataOciCoreBootVolumeReplica.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_boot_volume_replica.DataOciCoreBootVolumeReplica;

DataOciCoreBootVolumeReplica.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciCoreBootVolumeReplica.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciCoreBootVolumeReplica resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciCoreBootVolumeReplica to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciCoreBootVolumeReplica that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_boot_volume_replica#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreBootVolumeReplica to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.property.bootVolumeId">bootVolumeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.property.imageId">imageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.property.sizeInGbs">sizeInGbs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.property.timeLastSynced">timeLastSynced</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.property.volumeGroupReplicaId">volumeGroupReplicaId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.property.bootVolumeReplicaIdInput">bootVolumeReplicaIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.property.bootVolumeReplicaId">bootVolumeReplicaId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `bootVolumeId`<sup>Required</sup> <a name="bootVolumeId" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.property.bootVolumeId"></a>

```java
public java.lang.String getBootVolumeId();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.property.imageId"></a>

```java
public java.lang.String getImageId();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `sizeInGbs`<sup>Required</sup> <a name="sizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.property.sizeInGbs"></a>

```java
public java.lang.String getSizeInGbs();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeLastSynced`<sup>Required</sup> <a name="timeLastSynced" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.property.timeLastSynced"></a>

```java
public java.lang.String getTimeLastSynced();
```

- *Type:* java.lang.String

---

##### `volumeGroupReplicaId`<sup>Required</sup> <a name="volumeGroupReplicaId" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.property.volumeGroupReplicaId"></a>

```java
public java.lang.String getVolumeGroupReplicaId();
```

- *Type:* java.lang.String

---

##### `bootVolumeReplicaIdInput`<sup>Optional</sup> <a name="bootVolumeReplicaIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.property.bootVolumeReplicaIdInput"></a>

```java
public java.lang.String getBootVolumeReplicaIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `bootVolumeReplicaId`<sup>Required</sup> <a name="bootVolumeReplicaId" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.property.bootVolumeReplicaId"></a>

```java
public java.lang.String getBootVolumeReplicaId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplica.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreBootVolumeReplicaConfig <a name="DataOciCoreBootVolumeReplicaConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplicaConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplicaConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_boot_volume_replica.DataOciCoreBootVolumeReplicaConfig;

DataOciCoreBootVolumeReplicaConfig.builder()
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
    .bootVolumeReplicaId(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplicaConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplicaConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplicaConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplicaConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplicaConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplicaConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplicaConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplicaConfig.property.bootVolumeReplicaId">bootVolumeReplicaId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_boot_volume_replica#boot_volume_replica_id DataOciCoreBootVolumeReplica#boot_volume_replica_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplicaConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_boot_volume_replica#id DataOciCoreBootVolumeReplica#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplicaConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplicaConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplicaConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplicaConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplicaConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplicaConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplicaConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bootVolumeReplicaId`<sup>Required</sup> <a name="bootVolumeReplicaId" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplicaConfig.property.bootVolumeReplicaId"></a>

```java
public java.lang.String getBootVolumeReplicaId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_boot_volume_replica#boot_volume_replica_id DataOciCoreBootVolumeReplica#boot_volume_replica_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplica.DataOciCoreBootVolumeReplicaConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_boot_volume_replica#id DataOciCoreBootVolumeReplica#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---


