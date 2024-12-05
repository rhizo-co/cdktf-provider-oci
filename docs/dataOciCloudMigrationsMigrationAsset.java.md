# `dataOciCloudMigrationsMigrationAsset` Submodule <a name="`dataOciCloudMigrationsMigrationAsset` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCloudMigrationsMigrationAsset <a name="DataOciCloudMigrationsMigrationAsset" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_asset oci_cloud_migrations_migration_asset}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_migrations_migration_asset.DataOciCloudMigrationsMigrationAsset;

DataOciCloudMigrationsMigrationAsset.Builder.create(Construct scope, java.lang.String id)
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
    .migrationAssetId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.Initializer.parameter.migrationAssetId">migrationAssetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_asset#migration_asset_id DataOciCloudMigrationsMigrationAsset#migration_asset_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `migrationAssetId`<sup>Required</sup> <a name="migrationAssetId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.Initializer.parameter.migrationAssetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_asset#migration_asset_id DataOciCloudMigrationsMigrationAsset#migration_asset_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCloudMigrationsMigrationAsset resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_migrations_migration_asset.DataOciCloudMigrationsMigrationAsset;

DataOciCloudMigrationsMigrationAsset.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_migrations_migration_asset.DataOciCloudMigrationsMigrationAsset;

DataOciCloudMigrationsMigrationAsset.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_migrations_migration_asset.DataOciCloudMigrationsMigrationAsset;

DataOciCloudMigrationsMigrationAsset.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_migrations_migration_asset.DataOciCloudMigrationsMigrationAsset;

DataOciCloudMigrationsMigrationAsset.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciCloudMigrationsMigrationAsset.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciCloudMigrationsMigrationAsset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciCloudMigrationsMigrationAsset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciCloudMigrationsMigrationAsset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_asset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCloudMigrationsMigrationAsset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.dependedOnBy">dependedOnBy</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.inventoryAssetId">inventoryAssetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.migrationAssetDependsOn">migrationAssetDependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.migrationId">migrationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.notifications">notifications</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.parentSnapshot">parentSnapshot</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.replicationCompartmentId">replicationCompartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.replicationScheduleId">replicationScheduleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.snapShotBucketName">snapShotBucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.snapshots">snapshots</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.sourceAssetId">sourceAssetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.tenancyId">tenancyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.migrationAssetIdInput">migrationAssetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.migrationAssetId">migrationAssetId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `dependedOnBy`<sup>Required</sup> <a name="dependedOnBy" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.dependedOnBy"></a>

```java
public java.util.List<java.lang.String> getDependedOnBy();
```

- *Type:* java.util.List<java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `inventoryAssetId`<sup>Required</sup> <a name="inventoryAssetId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.inventoryAssetId"></a>

```java
public java.lang.String getInventoryAssetId();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `migrationAssetDependsOn`<sup>Required</sup> <a name="migrationAssetDependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.migrationAssetDependsOn"></a>

```java
public java.util.List<java.lang.String> getMigrationAssetDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `migrationId`<sup>Required</sup> <a name="migrationId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.migrationId"></a>

```java
public java.lang.String getMigrationId();
```

- *Type:* java.lang.String

---

##### `notifications`<sup>Required</sup> <a name="notifications" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.notifications"></a>

```java
public java.util.List<java.lang.String> getNotifications();
```

- *Type:* java.util.List<java.lang.String>

---

##### `parentSnapshot`<sup>Required</sup> <a name="parentSnapshot" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.parentSnapshot"></a>

```java
public java.lang.String getParentSnapshot();
```

- *Type:* java.lang.String

---

##### `replicationCompartmentId`<sup>Required</sup> <a name="replicationCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.replicationCompartmentId"></a>

```java
public java.lang.String getReplicationCompartmentId();
```

- *Type:* java.lang.String

---

##### `replicationScheduleId`<sup>Required</sup> <a name="replicationScheduleId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.replicationScheduleId"></a>

```java
public java.lang.String getReplicationScheduleId();
```

- *Type:* java.lang.String

---

##### `snapShotBucketName`<sup>Required</sup> <a name="snapShotBucketName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.snapShotBucketName"></a>

```java
public java.lang.String getSnapShotBucketName();
```

- *Type:* java.lang.String

---

##### `snapshots`<sup>Required</sup> <a name="snapshots" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.snapshots"></a>

```java
public StringMap getSnapshots();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `sourceAssetId`<sup>Required</sup> <a name="sourceAssetId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.sourceAssetId"></a>

```java
public java.lang.String getSourceAssetId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `tenancyId`<sup>Required</sup> <a name="tenancyId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.tenancyId"></a>

```java
public java.lang.String getTenancyId();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `migrationAssetIdInput`<sup>Optional</sup> <a name="migrationAssetIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.migrationAssetIdInput"></a>

```java
public java.lang.String getMigrationAssetIdInput();
```

- *Type:* java.lang.String

---

##### `migrationAssetId`<sup>Required</sup> <a name="migrationAssetId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.migrationAssetId"></a>

```java
public java.lang.String getMigrationAssetId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCloudMigrationsMigrationAssetConfig <a name="DataOciCloudMigrationsMigrationAssetConfig" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAssetConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAssetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_migrations_migration_asset.DataOciCloudMigrationsMigrationAssetConfig;

DataOciCloudMigrationsMigrationAssetConfig.builder()
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
    .migrationAssetId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAssetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAssetConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAssetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAssetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAssetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAssetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAssetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAssetConfig.property.migrationAssetId">migrationAssetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_asset#migration_asset_id DataOciCloudMigrationsMigrationAsset#migration_asset_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAssetConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAssetConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAssetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAssetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAssetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAssetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAssetConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `migrationAssetId`<sup>Required</sup> <a name="migrationAssetId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAssetConfig.property.migrationAssetId"></a>

```java
public java.lang.String getMigrationAssetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_asset#migration_asset_id DataOciCloudMigrationsMigrationAsset#migration_asset_id}.

---



