# `dataOciDatabaseAutonomousDatabaseBackups` Submodule <a name="`dataOciDatabaseAutonomousDatabaseBackups` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseAutonomousDatabaseBackups <a name="DataOciDatabaseAutonomousDatabaseBackups" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups oci_database_autonomous_database_backups}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_autonomous_database_backups.DataOciDatabaseAutonomousDatabaseBackups;

DataOciDatabaseAutonomousDatabaseBackups.Builder.create(Construct scope, java.lang.String id)
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
//  .autonomousDatabaseId(java.lang.String)
//  .compartmentId(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDatabaseAutonomousDatabaseBackupsFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
//  .type(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.autonomousDatabaseId">autonomousDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#autonomous_database_id DataOciDatabaseAutonomousDatabaseBackups#autonomous_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#compartment_id DataOciDatabaseAutonomousDatabaseBackups#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#display_name DataOciDatabaseAutonomousDatabaseBackups#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilter">DataOciDatabaseAutonomousDatabaseBackupsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#id DataOciDatabaseAutonomousDatabaseBackups#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#state DataOciDatabaseAutonomousDatabaseBackups#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#type DataOciDatabaseAutonomousDatabaseBackups#type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autonomousDatabaseId`<sup>Optional</sup> <a name="autonomousDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.autonomousDatabaseId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#autonomous_database_id DataOciDatabaseAutonomousDatabaseBackups#autonomous_database_id}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#compartment_id DataOciDatabaseAutonomousDatabaseBackups#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#display_name DataOciDatabaseAutonomousDatabaseBackups#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilter">DataOciDatabaseAutonomousDatabaseBackupsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#filter DataOciDatabaseAutonomousDatabaseBackups#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#id DataOciDatabaseAutonomousDatabaseBackups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#state DataOciDatabaseAutonomousDatabaseBackups#state}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#type DataOciDatabaseAutonomousDatabaseBackups#type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.resetAutonomousDatabaseId">resetAutonomousDatabaseId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciDatabaseAutonomousDatabaseBackupsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilter">DataOciDatabaseAutonomousDatabaseBackupsFilter</a>>

---

##### `resetAutonomousDatabaseId` <a name="resetAutonomousDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.resetAutonomousDatabaseId"></a>

```java
public void resetAutonomousDatabaseId()
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.resetCompartmentId"></a>

```java
public void resetCompartmentId()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.resetId"></a>

```java
public void resetId()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.resetState"></a>

```java
public void resetState()
```

##### `resetType` <a name="resetType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseAutonomousDatabaseBackups resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_autonomous_database_backups.DataOciDatabaseAutonomousDatabaseBackups;

DataOciDatabaseAutonomousDatabaseBackups.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_autonomous_database_backups.DataOciDatabaseAutonomousDatabaseBackups;

DataOciDatabaseAutonomousDatabaseBackups.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_autonomous_database_backups.DataOciDatabaseAutonomousDatabaseBackups;

DataOciDatabaseAutonomousDatabaseBackups.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_autonomous_database_backups.DataOciDatabaseAutonomousDatabaseBackups;

DataOciDatabaseAutonomousDatabaseBackups.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDatabaseAutonomousDatabaseBackups.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDatabaseAutonomousDatabaseBackups resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDatabaseAutonomousDatabaseBackups to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDatabaseAutonomousDatabaseBackups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseAutonomousDatabaseBackups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.autonomousDatabaseBackups">autonomousDatabaseBackups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList">DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList">DataOciDatabaseAutonomousDatabaseBackupsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.autonomousDatabaseIdInput">autonomousDatabaseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilter">DataOciDatabaseAutonomousDatabaseBackupsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.autonomousDatabaseId">autonomousDatabaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `autonomousDatabaseBackups`<sup>Required</sup> <a name="autonomousDatabaseBackups" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.autonomousDatabaseBackups"></a>

```java
public DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList getAutonomousDatabaseBackups();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList">DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.filter"></a>

```java
public DataOciDatabaseAutonomousDatabaseBackupsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList">DataOciDatabaseAutonomousDatabaseBackupsFilterList</a>

---

##### `autonomousDatabaseIdInput`<sup>Optional</sup> <a name="autonomousDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.autonomousDatabaseIdInput"></a>

```java
public java.lang.String getAutonomousDatabaseIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilter">DataOciDatabaseAutonomousDatabaseBackupsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `autonomousDatabaseId`<sup>Required</sup> <a name="autonomousDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.autonomousDatabaseId"></a>

```java
public java.lang.String getAutonomousDatabaseId();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackups <a name="DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackups" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackups.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_autonomous_database_backups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackups;

DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackups.builder()
    .build();
```


### DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetails <a name="DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_autonomous_database_backups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetails;

DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetails.builder()
    .build();
```


### DataOciDatabaseAutonomousDatabaseBackupsConfig <a name="DataOciDatabaseAutonomousDatabaseBackupsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_autonomous_database_backups.DataOciDatabaseAutonomousDatabaseBackupsConfig;

DataOciDatabaseAutonomousDatabaseBackupsConfig.builder()
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
//  .autonomousDatabaseId(java.lang.String)
//  .compartmentId(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDatabaseAutonomousDatabaseBackupsFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.autonomousDatabaseId">autonomousDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#autonomous_database_id DataOciDatabaseAutonomousDatabaseBackups#autonomous_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#compartment_id DataOciDatabaseAutonomousDatabaseBackups#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#display_name DataOciDatabaseAutonomousDatabaseBackups#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilter">DataOciDatabaseAutonomousDatabaseBackupsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#id DataOciDatabaseAutonomousDatabaseBackups#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#state DataOciDatabaseAutonomousDatabaseBackups#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#type DataOciDatabaseAutonomousDatabaseBackups#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autonomousDatabaseId`<sup>Optional</sup> <a name="autonomousDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.autonomousDatabaseId"></a>

```java
public java.lang.String getAutonomousDatabaseId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#autonomous_database_id DataOciDatabaseAutonomousDatabaseBackups#autonomous_database_id}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#compartment_id DataOciDatabaseAutonomousDatabaseBackups#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#display_name DataOciDatabaseAutonomousDatabaseBackups#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilter">DataOciDatabaseAutonomousDatabaseBackupsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#filter DataOciDatabaseAutonomousDatabaseBackups#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#id DataOciDatabaseAutonomousDatabaseBackups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#state DataOciDatabaseAutonomousDatabaseBackups#state}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#type DataOciDatabaseAutonomousDatabaseBackups#type}.

---

### DataOciDatabaseAutonomousDatabaseBackupsFilter <a name="DataOciDatabaseAutonomousDatabaseBackupsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_autonomous_database_backups.DataOciDatabaseAutonomousDatabaseBackupsFilter;

DataOciDatabaseAutonomousDatabaseBackupsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#name DataOciDatabaseAutonomousDatabaseBackups#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#values DataOciDatabaseAutonomousDatabaseBackups#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#regex DataOciDatabaseAutonomousDatabaseBackups#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#name DataOciDatabaseAutonomousDatabaseBackups#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#values DataOciDatabaseAutonomousDatabaseBackups#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#regex DataOciDatabaseAutonomousDatabaseBackups#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList <a name="DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_autonomous_database_backups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList;

new DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.get"></a>

```java
public DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference <a name="DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_autonomous_database_backups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference;

new DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.property.internetProxy">internetProxy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.property.vpcPassword">vpcPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.property.vpcUser">vpcUser</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetails">DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internetProxy`<sup>Required</sup> <a name="internetProxy" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.property.internetProxy"></a>

```java
public java.lang.String getInternetProxy();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `vpcPassword`<sup>Required</sup> <a name="vpcPassword" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.property.vpcPassword"></a>

```java
public java.lang.String getVpcPassword();
```

- *Type:* java.lang.String

---

##### `vpcUser`<sup>Required</sup> <a name="vpcUser" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.property.vpcUser"></a>

```java
public java.lang.String getVpcUser();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetails">DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetails</a>

---


### DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList <a name="DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_autonomous_database_backups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList;

new DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.get"></a>

```java
public DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference <a name="DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_autonomous_database_backups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference;

new DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.autonomousDatabaseId">autonomousDatabaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.backupDestinationDetails">backupDestinationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList">DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.databaseSizeInTbs">databaseSizeInTbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.dbVersion">dbVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.isAutomatic">isAutomatic</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.isLongTermBackup">isLongTermBackup</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.isRestorable">isRestorable</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.keyStoreId">keyStoreId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.keyStoreWalletName">keyStoreWalletName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.kmsKeyVersionId">kmsKeyVersionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.retentionPeriodInDays">retentionPeriodInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.sizeInTbs">sizeInTbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.timeAvailableTill">timeAvailableTill</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.timeEnded">timeEnded</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.timeStarted">timeStarted</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.vaultId">vaultId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackups">DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autonomousDatabaseId`<sup>Required</sup> <a name="autonomousDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.autonomousDatabaseId"></a>

```java
public java.lang.String getAutonomousDatabaseId();
```

- *Type:* java.lang.String

---

##### `backupDestinationDetails`<sup>Required</sup> <a name="backupDestinationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.backupDestinationDetails"></a>

```java
public DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList getBackupDestinationDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList">DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `databaseSizeInTbs`<sup>Required</sup> <a name="databaseSizeInTbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.databaseSizeInTbs"></a>

```java
public java.lang.Number getDatabaseSizeInTbs();
```

- *Type:* java.lang.Number

---

##### `dbVersion`<sup>Required</sup> <a name="dbVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.dbVersion"></a>

```java
public java.lang.String getDbVersion();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isAutomatic`<sup>Required</sup> <a name="isAutomatic" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.isAutomatic"></a>

```java
public IResolvable getIsAutomatic();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isLongTermBackup`<sup>Required</sup> <a name="isLongTermBackup" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.isLongTermBackup"></a>

```java
public IResolvable getIsLongTermBackup();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isRestorable`<sup>Required</sup> <a name="isRestorable" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.isRestorable"></a>

```java
public IResolvable getIsRestorable();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `keyStoreId`<sup>Required</sup> <a name="keyStoreId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.keyStoreId"></a>

```java
public java.lang.String getKeyStoreId();
```

- *Type:* java.lang.String

---

##### `keyStoreWalletName`<sup>Required</sup> <a name="keyStoreWalletName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.keyStoreWalletName"></a>

```java
public java.lang.String getKeyStoreWalletName();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `kmsKeyVersionId`<sup>Required</sup> <a name="kmsKeyVersionId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.kmsKeyVersionId"></a>

```java
public java.lang.String getKmsKeyVersionId();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `retentionPeriodInDays`<sup>Required</sup> <a name="retentionPeriodInDays" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.retentionPeriodInDays"></a>

```java
public java.lang.Number getRetentionPeriodInDays();
```

- *Type:* java.lang.Number

---

##### `sizeInTbs`<sup>Required</sup> <a name="sizeInTbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.sizeInTbs"></a>

```java
public java.lang.Number getSizeInTbs();
```

- *Type:* java.lang.Number

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeAvailableTill`<sup>Required</sup> <a name="timeAvailableTill" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.timeAvailableTill"></a>

```java
public java.lang.String getTimeAvailableTill();
```

- *Type:* java.lang.String

---

##### `timeEnded`<sup>Required</sup> <a name="timeEnded" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.timeEnded"></a>

```java
public java.lang.String getTimeEnded();
```

- *Type:* java.lang.String

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.timeStarted"></a>

```java
public java.lang.String getTimeStarted();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.vaultId"></a>

```java
public java.lang.String getVaultId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackups getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackups">DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackups</a>

---


### DataOciDatabaseAutonomousDatabaseBackupsFilterList <a name="DataOciDatabaseAutonomousDatabaseBackupsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_autonomous_database_backups.DataOciDatabaseAutonomousDatabaseBackupsFilterList;

new DataOciDatabaseAutonomousDatabaseBackupsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.get"></a>

```java
public DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilter">DataOciDatabaseAutonomousDatabaseBackupsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilter">DataOciDatabaseAutonomousDatabaseBackupsFilter</a>>

---


### DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference <a name="DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_autonomous_database_backups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference;

new DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilter">DataOciDatabaseAutonomousDatabaseBackupsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilter">DataOciDatabaseAutonomousDatabaseBackupsFilter</a>

---



