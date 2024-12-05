# `dataOciDatabaseMigrationMigrationObjectTypes` Submodule <a name="`dataOciDatabaseMigrationMigrationObjectTypes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseMigrationMigrationObjectTypes <a name="DataOciDatabaseMigrationMigrationObjectTypes" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_migration_object_types oci_database_migration_migration_object_types}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_migration_migration_object_types.DataOciDatabaseMigrationMigrationObjectTypes;

DataOciDatabaseMigrationMigrationObjectTypes.Builder.create(Construct scope, java.lang.String id)
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
    .connectionType(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDatabaseMigrationMigrationObjectTypesFilter>)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.Initializer.parameter.connectionType">connectionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_migration_object_types#connection_type DataOciDatabaseMigrationMigrationObjectTypes#connection_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilter">DataOciDatabaseMigrationMigrationObjectTypesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_migration_object_types#id DataOciDatabaseMigrationMigrationObjectTypes#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.Initializer.parameter.connectionType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_migration_object_types#connection_type DataOciDatabaseMigrationMigrationObjectTypes#connection_type}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilter">DataOciDatabaseMigrationMigrationObjectTypesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_migration_object_types#filter DataOciDatabaseMigrationMigrationObjectTypes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_migration_object_types#id DataOciDatabaseMigrationMigrationObjectTypes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciDatabaseMigrationMigrationObjectTypesFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilter">DataOciDatabaseMigrationMigrationObjectTypesFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseMigrationMigrationObjectTypes resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_migration_migration_object_types.DataOciDatabaseMigrationMigrationObjectTypes;

DataOciDatabaseMigrationMigrationObjectTypes.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_migration_migration_object_types.DataOciDatabaseMigrationMigrationObjectTypes;

DataOciDatabaseMigrationMigrationObjectTypes.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_migration_migration_object_types.DataOciDatabaseMigrationMigrationObjectTypes;

DataOciDatabaseMigrationMigrationObjectTypes.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_migration_migration_object_types.DataOciDatabaseMigrationMigrationObjectTypes;

DataOciDatabaseMigrationMigrationObjectTypes.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDatabaseMigrationMigrationObjectTypes.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDatabaseMigrationMigrationObjectTypes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDatabaseMigrationMigrationObjectTypes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDatabaseMigrationMigrationObjectTypes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_migration_object_types#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseMigrationMigrationObjectTypes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList">DataOciDatabaseMigrationMigrationObjectTypesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.migrationObjectTypeSummaryCollection">migrationObjectTypeSummaryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList">DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.connectionTypeInput">connectionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilter">DataOciDatabaseMigrationMigrationObjectTypesFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.connectionType">connectionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.filter"></a>

```java
public DataOciDatabaseMigrationMigrationObjectTypesFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList">DataOciDatabaseMigrationMigrationObjectTypesFilterList</a>

---

##### `migrationObjectTypeSummaryCollection`<sup>Required</sup> <a name="migrationObjectTypeSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.migrationObjectTypeSummaryCollection"></a>

```java
public DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList getMigrationObjectTypeSummaryCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList">DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList</a>

---

##### `connectionTypeInput`<sup>Optional</sup> <a name="connectionTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.connectionTypeInput"></a>

```java
public java.lang.String getConnectionTypeInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilter">DataOciDatabaseMigrationMigrationObjectTypesFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.connectionType"></a>

```java
public java.lang.String getConnectionType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseMigrationMigrationObjectTypesConfig <a name="DataOciDatabaseMigrationMigrationObjectTypesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_migration_migration_object_types.DataOciDatabaseMigrationMigrationObjectTypesConfig;

DataOciDatabaseMigrationMigrationObjectTypesConfig.builder()
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
    .connectionType(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDatabaseMigrationMigrationObjectTypesFilter>)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig.property.connectionType">connectionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_migration_object_types#connection_type DataOciDatabaseMigrationMigrationObjectTypes#connection_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilter">DataOciDatabaseMigrationMigrationObjectTypesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_migration_object_types#id DataOciDatabaseMigrationMigrationObjectTypes#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig.property.connectionType"></a>

```java
public java.lang.String getConnectionType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_migration_object_types#connection_type DataOciDatabaseMigrationMigrationObjectTypes#connection_type}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilter">DataOciDatabaseMigrationMigrationObjectTypesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_migration_object_types#filter DataOciDatabaseMigrationMigrationObjectTypes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_migration_object_types#id DataOciDatabaseMigrationMigrationObjectTypes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseMigrationMigrationObjectTypesFilter <a name="DataOciDatabaseMigrationMigrationObjectTypesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_migration_migration_object_types.DataOciDatabaseMigrationMigrationObjectTypesFilter;

DataOciDatabaseMigrationMigrationObjectTypesFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_migration_object_types#name DataOciDatabaseMigrationMigrationObjectTypes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_migration_object_types#values DataOciDatabaseMigrationMigrationObjectTypes#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_migration_object_types#regex DataOciDatabaseMigrationMigrationObjectTypes#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_migration_object_types#name DataOciDatabaseMigrationMigrationObjectTypes#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_migration_object_types#values DataOciDatabaseMigrationMigrationObjectTypes#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_migration_object_types#regex DataOciDatabaseMigrationMigrationObjectTypes#regex}.

---

### DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollection <a name="DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_migration_migration_object_types.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollection;

DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollection.builder()
    .build();
```


### DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItems <a name="DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_migration_migration_object_types.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItems;

DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItems.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseMigrationMigrationObjectTypesFilterList <a name="DataOciDatabaseMigrationMigrationObjectTypesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_migration_migration_object_types.DataOciDatabaseMigrationMigrationObjectTypesFilterList;

new DataOciDatabaseMigrationMigrationObjectTypesFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.get"></a>

```java
public DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilter">DataOciDatabaseMigrationMigrationObjectTypesFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilter">DataOciDatabaseMigrationMigrationObjectTypesFilter</a>>

---


### DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference <a name="DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_migration_migration_object_types.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference;

new DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilter">DataOciDatabaseMigrationMigrationObjectTypesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilter">DataOciDatabaseMigrationMigrationObjectTypesFilter</a>

---


### DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList <a name="DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_migration_migration_object_types.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList;

new DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.get"></a>

```java
public DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference <a name="DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_migration_migration_object_types.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference;

new DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItems">DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItems">DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItems</a>

---


### DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList <a name="DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_migration_migration_object_types.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList;

new DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.get"></a>

```java
public DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference <a name="DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_migration_migration_object_types.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference;

new DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList">DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollection">DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.property.items"></a>

```java
public DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList">DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollection">DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollection</a>

---



