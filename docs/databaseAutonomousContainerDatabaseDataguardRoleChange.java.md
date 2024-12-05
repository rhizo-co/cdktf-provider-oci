# `databaseAutonomousContainerDatabaseDataguardRoleChange` Submodule <a name="`databaseAutonomousContainerDatabaseDataguardRoleChange` Submodule" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseAutonomousContainerDatabaseDataguardRoleChange <a name="DatabaseAutonomousContainerDatabaseDataguardRoleChange" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_role_change oci_database_autonomous_container_database_dataguard_role_change}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_container_database_dataguard_role_change.DatabaseAutonomousContainerDatabaseDataguardRoleChange;

DatabaseAutonomousContainerDatabaseDataguardRoleChange.Builder.create(Construct scope, java.lang.String id)
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
    .autonomousContainerDatabaseDataguardAssociationId(java.lang.String)
    .autonomousContainerDatabaseId(java.lang.String)
    .role(java.lang.String)
//  .connectionStringsType(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.Initializer.parameter.autonomousContainerDatabaseDataguardAssociationId">autonomousContainerDatabaseDataguardAssociationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_role_change#autonomous_container_database_dataguard_association_id DatabaseAutonomousContainerDatabaseDataguardRoleChange#autonomous_container_database_dataguard_association_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.Initializer.parameter.autonomousContainerDatabaseId">autonomousContainerDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_role_change#autonomous_container_database_id DatabaseAutonomousContainerDatabaseDataguardRoleChange#autonomous_container_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_role_change#role DatabaseAutonomousContainerDatabaseDataguardRoleChange#role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.Initializer.parameter.connectionStringsType">connectionStringsType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_role_change#connection_strings_type DatabaseAutonomousContainerDatabaseDataguardRoleChange#connection_strings_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_role_change#id DatabaseAutonomousContainerDatabaseDataguardRoleChange#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts">DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autonomousContainerDatabaseDataguardAssociationId`<sup>Required</sup> <a name="autonomousContainerDatabaseDataguardAssociationId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.Initializer.parameter.autonomousContainerDatabaseDataguardAssociationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_role_change#autonomous_container_database_dataguard_association_id DatabaseAutonomousContainerDatabaseDataguardRoleChange#autonomous_container_database_dataguard_association_id}.

---

##### `autonomousContainerDatabaseId`<sup>Required</sup> <a name="autonomousContainerDatabaseId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.Initializer.parameter.autonomousContainerDatabaseId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_role_change#autonomous_container_database_id DatabaseAutonomousContainerDatabaseDataguardRoleChange#autonomous_container_database_id}.

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_role_change#role DatabaseAutonomousContainerDatabaseDataguardRoleChange#role}.

---

##### `connectionStringsType`<sup>Optional</sup> <a name="connectionStringsType" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.Initializer.parameter.connectionStringsType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_role_change#connection_strings_type DatabaseAutonomousContainerDatabaseDataguardRoleChange#connection_strings_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_role_change#id DatabaseAutonomousContainerDatabaseDataguardRoleChange#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts">DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_role_change#timeouts DatabaseAutonomousContainerDatabaseDataguardRoleChange#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.resetConnectionStringsType">resetConnectionStringsType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.putTimeouts"></a>

```java
public void putTimeouts(DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts">DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts</a>

---

##### `resetConnectionStringsType` <a name="resetConnectionStringsType" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.resetConnectionStringsType"></a>

```java
public void resetConnectionStringsType()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseAutonomousContainerDatabaseDataguardRoleChange resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_container_database_dataguard_role_change.DatabaseAutonomousContainerDatabaseDataguardRoleChange;

DatabaseAutonomousContainerDatabaseDataguardRoleChange.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_container_database_dataguard_role_change.DatabaseAutonomousContainerDatabaseDataguardRoleChange;

DatabaseAutonomousContainerDatabaseDataguardRoleChange.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_container_database_dataguard_role_change.DatabaseAutonomousContainerDatabaseDataguardRoleChange;

DatabaseAutonomousContainerDatabaseDataguardRoleChange.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_container_database_dataguard_role_change.DatabaseAutonomousContainerDatabaseDataguardRoleChange;

DatabaseAutonomousContainerDatabaseDataguardRoleChange.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatabaseAutonomousContainerDatabaseDataguardRoleChange.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DatabaseAutonomousContainerDatabaseDataguardRoleChange resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatabaseAutonomousContainerDatabaseDataguardRoleChange to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatabaseAutonomousContainerDatabaseDataguardRoleChange that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_role_change#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseAutonomousContainerDatabaseDataguardRoleChange to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference">DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.autonomousContainerDatabaseDataguardAssociationIdInput">autonomousContainerDatabaseDataguardAssociationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.autonomousContainerDatabaseIdInput">autonomousContainerDatabaseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.connectionStringsTypeInput">connectionStringsTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts">DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.autonomousContainerDatabaseDataguardAssociationId">autonomousContainerDatabaseDataguardAssociationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.autonomousContainerDatabaseId">autonomousContainerDatabaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.connectionStringsType">connectionStringsType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.timeouts"></a>

```java
public DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference">DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference</a>

---

##### `autonomousContainerDatabaseDataguardAssociationIdInput`<sup>Optional</sup> <a name="autonomousContainerDatabaseDataguardAssociationIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.autonomousContainerDatabaseDataguardAssociationIdInput"></a>

```java
public java.lang.String getAutonomousContainerDatabaseDataguardAssociationIdInput();
```

- *Type:* java.lang.String

---

##### `autonomousContainerDatabaseIdInput`<sup>Optional</sup> <a name="autonomousContainerDatabaseIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.autonomousContainerDatabaseIdInput"></a>

```java
public java.lang.String getAutonomousContainerDatabaseIdInput();
```

- *Type:* java.lang.String

---

##### `connectionStringsTypeInput`<sup>Optional</sup> <a name="connectionStringsTypeInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.connectionStringsTypeInput"></a>

```java
public java.lang.String getConnectionStringsTypeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts">DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts</a>

---

##### `autonomousContainerDatabaseDataguardAssociationId`<sup>Required</sup> <a name="autonomousContainerDatabaseDataguardAssociationId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.autonomousContainerDatabaseDataguardAssociationId"></a>

```java
public java.lang.String getAutonomousContainerDatabaseDataguardAssociationId();
```

- *Type:* java.lang.String

---

##### `autonomousContainerDatabaseId`<sup>Required</sup> <a name="autonomousContainerDatabaseId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.autonomousContainerDatabaseId"></a>

```java
public java.lang.String getAutonomousContainerDatabaseId();
```

- *Type:* java.lang.String

---

##### `connectionStringsType`<sup>Required</sup> <a name="connectionStringsType" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.connectionStringsType"></a>

```java
public java.lang.String getConnectionStringsType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig <a name="DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_container_database_dataguard_role_change.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig;

DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.builder()
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
    .autonomousContainerDatabaseDataguardAssociationId(java.lang.String)
    .autonomousContainerDatabaseId(java.lang.String)
    .role(java.lang.String)
//  .connectionStringsType(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.autonomousContainerDatabaseDataguardAssociationId">autonomousContainerDatabaseDataguardAssociationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_role_change#autonomous_container_database_dataguard_association_id DatabaseAutonomousContainerDatabaseDataguardRoleChange#autonomous_container_database_dataguard_association_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.autonomousContainerDatabaseId">autonomousContainerDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_role_change#autonomous_container_database_id DatabaseAutonomousContainerDatabaseDataguardRoleChange#autonomous_container_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_role_change#role DatabaseAutonomousContainerDatabaseDataguardRoleChange#role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.connectionStringsType">connectionStringsType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_role_change#connection_strings_type DatabaseAutonomousContainerDatabaseDataguardRoleChange#connection_strings_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_role_change#id DatabaseAutonomousContainerDatabaseDataguardRoleChange#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts">DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autonomousContainerDatabaseDataguardAssociationId`<sup>Required</sup> <a name="autonomousContainerDatabaseDataguardAssociationId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.autonomousContainerDatabaseDataguardAssociationId"></a>

```java
public java.lang.String getAutonomousContainerDatabaseDataguardAssociationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_role_change#autonomous_container_database_dataguard_association_id DatabaseAutonomousContainerDatabaseDataguardRoleChange#autonomous_container_database_dataguard_association_id}.

---

##### `autonomousContainerDatabaseId`<sup>Required</sup> <a name="autonomousContainerDatabaseId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.autonomousContainerDatabaseId"></a>

```java
public java.lang.String getAutonomousContainerDatabaseId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_role_change#autonomous_container_database_id DatabaseAutonomousContainerDatabaseDataguardRoleChange#autonomous_container_database_id}.

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_role_change#role DatabaseAutonomousContainerDatabaseDataguardRoleChange#role}.

---

##### `connectionStringsType`<sup>Optional</sup> <a name="connectionStringsType" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.connectionStringsType"></a>

```java
public java.lang.String getConnectionStringsType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_role_change#connection_strings_type DatabaseAutonomousContainerDatabaseDataguardRoleChange#connection_strings_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_role_change#id DatabaseAutonomousContainerDatabaseDataguardRoleChange#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.timeouts"></a>

```java
public DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts">DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_role_change#timeouts DatabaseAutonomousContainerDatabaseDataguardRoleChange#timeouts}

---

### DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts <a name="DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_container_database_dataguard_role_change.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts;

DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_role_change#create DatabaseAutonomousContainerDatabaseDataguardRoleChange#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_role_change#delete DatabaseAutonomousContainerDatabaseDataguardRoleChange#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_role_change#create DatabaseAutonomousContainerDatabaseDataguardRoleChange#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_role_change#delete DatabaseAutonomousContainerDatabaseDataguardRoleChange#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference <a name="DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_container_database_dataguard_role_change.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference;

new DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts">DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts">DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts</a>

---



