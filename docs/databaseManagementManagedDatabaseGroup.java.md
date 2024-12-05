# `databaseManagementManagedDatabaseGroup` Submodule <a name="`databaseManagementManagedDatabaseGroup` Submodule" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseManagementManagedDatabaseGroup <a name="DatabaseManagementManagedDatabaseGroup" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database_group oci_database_management_managed_database_group}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_managed_database_group.DatabaseManagementManagedDatabaseGroup;

DatabaseManagementManagedDatabaseGroup.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .managedDatabases(IResolvable)
//  .managedDatabases(java.util.List<DatabaseManagementManagedDatabaseGroupManagedDatabases>)
//  .timeouts(DatabaseManagementManagedDatabaseGroupTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database_group#compartment_id DatabaseManagementManagedDatabaseGroup#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database_group#name DatabaseManagementManagedDatabaseGroup#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database_group#defined_tags DatabaseManagementManagedDatabaseGroup#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database_group#description DatabaseManagementManagedDatabaseGroup#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database_group#freeform_tags DatabaseManagementManagedDatabaseGroup#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database_group#id DatabaseManagementManagedDatabaseGroup#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.Initializer.parameter.managedDatabases">managedDatabases</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabases">DatabaseManagementManagedDatabaseGroupManagedDatabases</a>></code> | managed_databases block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeouts">DatabaseManagementManagedDatabaseGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database_group#compartment_id DatabaseManagementManagedDatabaseGroup#compartment_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database_group#name DatabaseManagementManagedDatabaseGroup#name}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database_group#defined_tags DatabaseManagementManagedDatabaseGroup#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database_group#description DatabaseManagementManagedDatabaseGroup#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database_group#freeform_tags DatabaseManagementManagedDatabaseGroup#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database_group#id DatabaseManagementManagedDatabaseGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managedDatabases`<sup>Optional</sup> <a name="managedDatabases" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.Initializer.parameter.managedDatabases"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabases">DatabaseManagementManagedDatabaseGroupManagedDatabases</a>>

managed_databases block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database_group#managed_databases DatabaseManagementManagedDatabaseGroup#managed_databases}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeouts">DatabaseManagementManagedDatabaseGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database_group#timeouts DatabaseManagementManagedDatabaseGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.putManagedDatabases">putManagedDatabases</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.resetManagedDatabases">resetManagedDatabases</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putManagedDatabases` <a name="putManagedDatabases" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.putManagedDatabases"></a>

```java
public void putManagedDatabases(IResolvable OR java.util.List<DatabaseManagementManagedDatabaseGroupManagedDatabases> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.putManagedDatabases.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabases">DatabaseManagementManagedDatabaseGroupManagedDatabases</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.putTimeouts"></a>

```java
public void putTimeouts(DatabaseManagementManagedDatabaseGroupTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeouts">DatabaseManagementManagedDatabaseGroupTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.resetId"></a>

```java
public void resetId()
```

##### `resetManagedDatabases` <a name="resetManagedDatabases" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.resetManagedDatabases"></a>

```java
public void resetManagedDatabases()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseManagementManagedDatabaseGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_managed_database_group.DatabaseManagementManagedDatabaseGroup;

DatabaseManagementManagedDatabaseGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_managed_database_group.DatabaseManagementManagedDatabaseGroup;

DatabaseManagementManagedDatabaseGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_managed_database_group.DatabaseManagementManagedDatabaseGroup;

DatabaseManagementManagedDatabaseGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_managed_database_group.DatabaseManagementManagedDatabaseGroup;

DatabaseManagementManagedDatabaseGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatabaseManagementManagedDatabaseGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DatabaseManagementManagedDatabaseGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatabaseManagementManagedDatabaseGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatabaseManagementManagedDatabaseGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseManagementManagedDatabaseGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.managedDatabases">managedDatabases</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesList">DatabaseManagementManagedDatabaseGroupManagedDatabasesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference">DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.managedDatabasesInput">managedDatabasesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabases">DatabaseManagementManagedDatabaseGroupManagedDatabases</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeouts">DatabaseManagementManagedDatabaseGroupTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `managedDatabases`<sup>Required</sup> <a name="managedDatabases" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.managedDatabases"></a>

```java
public DatabaseManagementManagedDatabaseGroupManagedDatabasesList getManagedDatabases();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesList">DatabaseManagementManagedDatabaseGroupManagedDatabasesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.timeouts"></a>

```java
public DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference">DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `managedDatabasesInput`<sup>Optional</sup> <a name="managedDatabasesInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.managedDatabasesInput"></a>

```java
public java.lang.Object getManagedDatabasesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabases">DatabaseManagementManagedDatabaseGroupManagedDatabases</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeouts">DatabaseManagementManagedDatabaseGroupTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseManagementManagedDatabaseGroupConfig <a name="DatabaseManagementManagedDatabaseGroupConfig" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_managed_database_group.DatabaseManagementManagedDatabaseGroupConfig;

DatabaseManagementManagedDatabaseGroupConfig.builder()
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
    .name(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .managedDatabases(IResolvable)
//  .managedDatabases(java.util.List<DatabaseManagementManagedDatabaseGroupManagedDatabases>)
//  .timeouts(DatabaseManagementManagedDatabaseGroupTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database_group#compartment_id DatabaseManagementManagedDatabaseGroup#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database_group#name DatabaseManagementManagedDatabaseGroup#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database_group#defined_tags DatabaseManagementManagedDatabaseGroup#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database_group#description DatabaseManagementManagedDatabaseGroup#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database_group#freeform_tags DatabaseManagementManagedDatabaseGroup#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database_group#id DatabaseManagementManagedDatabaseGroup#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupConfig.property.managedDatabases">managedDatabases</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabases">DatabaseManagementManagedDatabaseGroupManagedDatabases</a>></code> | managed_databases block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeouts">DatabaseManagementManagedDatabaseGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database_group#compartment_id DatabaseManagementManagedDatabaseGroup#compartment_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database_group#name DatabaseManagementManagedDatabaseGroup#name}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database_group#defined_tags DatabaseManagementManagedDatabaseGroup#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database_group#description DatabaseManagementManagedDatabaseGroup#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database_group#freeform_tags DatabaseManagementManagedDatabaseGroup#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database_group#id DatabaseManagementManagedDatabaseGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managedDatabases`<sup>Optional</sup> <a name="managedDatabases" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupConfig.property.managedDatabases"></a>

```java
public java.lang.Object getManagedDatabases();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabases">DatabaseManagementManagedDatabaseGroupManagedDatabases</a>>

managed_databases block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database_group#managed_databases DatabaseManagementManagedDatabaseGroup#managed_databases}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupConfig.property.timeouts"></a>

```java
public DatabaseManagementManagedDatabaseGroupTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeouts">DatabaseManagementManagedDatabaseGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database_group#timeouts DatabaseManagementManagedDatabaseGroup#timeouts}

---

### DatabaseManagementManagedDatabaseGroupManagedDatabases <a name="DatabaseManagementManagedDatabaseGroupManagedDatabases" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabases"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabases.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_managed_database_group.DatabaseManagementManagedDatabaseGroupManagedDatabases;

DatabaseManagementManagedDatabaseGroupManagedDatabases.builder()
//  .compartmentId(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabases.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database_group#compartment_id DatabaseManagementManagedDatabaseGroup#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabases.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database_group#id DatabaseManagementManagedDatabaseGroup#id}. |

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabases.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database_group#compartment_id DatabaseManagementManagedDatabaseGroup#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabases.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database_group#id DatabaseManagementManagedDatabaseGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DatabaseManagementManagedDatabaseGroupTimeouts <a name="DatabaseManagementManagedDatabaseGroupTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_managed_database_group.DatabaseManagementManagedDatabaseGroupTimeouts;

DatabaseManagementManagedDatabaseGroupTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database_group#create DatabaseManagementManagedDatabaseGroup#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database_group#delete DatabaseManagementManagedDatabaseGroup#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database_group#update DatabaseManagementManagedDatabaseGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database_group#create DatabaseManagementManagedDatabaseGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database_group#delete DatabaseManagementManagedDatabaseGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database_group#update DatabaseManagementManagedDatabaseGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseManagementManagedDatabaseGroupManagedDatabasesList <a name="DatabaseManagementManagedDatabaseGroupManagedDatabasesList" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_managed_database_group.DatabaseManagementManagedDatabaseGroupManagedDatabasesList;

new DatabaseManagementManagedDatabaseGroupManagedDatabasesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesList.get"></a>

```java
public DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabases">DatabaseManagementManagedDatabaseGroupManagedDatabases</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabases">DatabaseManagementManagedDatabaseGroupManagedDatabases</a>>

---


### DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference <a name="DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_managed_database_group.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference;

new DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.resetId">resetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.resetCompartmentId"></a>

```java
public void resetCompartmentId()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.resetId"></a>

```java
public void resetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.property.databaseSubType">databaseSubType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.property.databaseType">databaseType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.property.deploymentType">deploymentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.property.timeAdded">timeAdded</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.property.workloadType">workloadType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabases">DatabaseManagementManagedDatabaseGroupManagedDatabases</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `databaseSubType`<sup>Required</sup> <a name="databaseSubType" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.property.databaseSubType"></a>

```java
public java.lang.String getDatabaseSubType();
```

- *Type:* java.lang.String

---

##### `databaseType`<sup>Required</sup> <a name="databaseType" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.property.databaseType"></a>

```java
public java.lang.String getDatabaseType();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `deploymentType`<sup>Required</sup> <a name="deploymentType" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.property.deploymentType"></a>

```java
public java.lang.String getDeploymentType();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeAdded`<sup>Required</sup> <a name="timeAdded" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.property.timeAdded"></a>

```java
public java.lang.String getTimeAdded();
```

- *Type:* java.lang.String

---

##### `workloadType`<sup>Required</sup> <a name="workloadType" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.property.workloadType"></a>

```java
public java.lang.String getWorkloadType();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabases">DatabaseManagementManagedDatabaseGroupManagedDatabases</a>

---


### DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference <a name="DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_managed_database_group.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference;

new DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeouts">DatabaseManagementManagedDatabaseGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeouts">DatabaseManagementManagedDatabaseGroupTimeouts</a>

---



