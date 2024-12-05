# `databaseManagementExternalDbSystemStackMonitoringsManagement` Submodule <a name="`databaseManagementExternalDbSystemStackMonitoringsManagement` Submodule" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseManagementExternalDbSystemStackMonitoringsManagement <a name="DatabaseManagementExternalDbSystemStackMonitoringsManagement" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management oci_database_management_external_db_system_stack_monitorings_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_external_db_system_stack_monitorings_management.DatabaseManagementExternalDbSystemStackMonitoringsManagement;

DatabaseManagementExternalDbSystemStackMonitoringsManagement.Builder.create(Construct scope, java.lang.String id)
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
    .enableStackMonitoring(java.lang.Boolean)
    .enableStackMonitoring(IResolvable)
    .externalDbSystemId(java.lang.String)
//  .id(java.lang.String)
//  .isEnabled(java.lang.Boolean)
//  .isEnabled(IResolvable)
//  .metadata(java.lang.String)
//  .timeouts(DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.Initializer.parameter.enableStackMonitoring">enableStackMonitoring</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management#enable_stack_monitoring DatabaseManagementExternalDbSystemStackMonitoringsManagement#enable_stack_monitoring}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.Initializer.parameter.externalDbSystemId">externalDbSystemId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management#external_db_system_id DatabaseManagementExternalDbSystemStackMonitoringsManagement#external_db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management#id DatabaseManagementExternalDbSystemStackMonitoringsManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.Initializer.parameter.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management#is_enabled DatabaseManagementExternalDbSystemStackMonitoringsManagement#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.Initializer.parameter.metadata">metadata</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management#metadata DatabaseManagementExternalDbSystemStackMonitoringsManagement#metadata}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts">DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `enableStackMonitoring`<sup>Required</sup> <a name="enableStackMonitoring" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.Initializer.parameter.enableStackMonitoring"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management#enable_stack_monitoring DatabaseManagementExternalDbSystemStackMonitoringsManagement#enable_stack_monitoring}.

---

##### `externalDbSystemId`<sup>Required</sup> <a name="externalDbSystemId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.Initializer.parameter.externalDbSystemId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management#external_db_system_id DatabaseManagementExternalDbSystemStackMonitoringsManagement#external_db_system_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management#id DatabaseManagementExternalDbSystemStackMonitoringsManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.Initializer.parameter.isEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management#is_enabled DatabaseManagementExternalDbSystemStackMonitoringsManagement#is_enabled}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.Initializer.parameter.metadata"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management#metadata DatabaseManagementExternalDbSystemStackMonitoringsManagement#metadata}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts">DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management#timeouts DatabaseManagementExternalDbSystemStackMonitoringsManagement#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.putTimeouts"></a>

```java
public void putTimeouts(DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts">DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.resetId"></a>

```java
public void resetId()
```

##### `resetIsEnabled` <a name="resetIsEnabled" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.resetIsEnabled"></a>

```java
public void resetIsEnabled()
```

##### `resetMetadata` <a name="resetMetadata" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseManagementExternalDbSystemStackMonitoringsManagement resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_external_db_system_stack_monitorings_management.DatabaseManagementExternalDbSystemStackMonitoringsManagement;

DatabaseManagementExternalDbSystemStackMonitoringsManagement.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_external_db_system_stack_monitorings_management.DatabaseManagementExternalDbSystemStackMonitoringsManagement;

DatabaseManagementExternalDbSystemStackMonitoringsManagement.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_external_db_system_stack_monitorings_management.DatabaseManagementExternalDbSystemStackMonitoringsManagement;

DatabaseManagementExternalDbSystemStackMonitoringsManagement.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_external_db_system_stack_monitorings_management.DatabaseManagementExternalDbSystemStackMonitoringsManagement;

DatabaseManagementExternalDbSystemStackMonitoringsManagement.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatabaseManagementExternalDbSystemStackMonitoringsManagement.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DatabaseManagementExternalDbSystemStackMonitoringsManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatabaseManagementExternalDbSystemStackMonitoringsManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatabaseManagementExternalDbSystemStackMonitoringsManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseManagementExternalDbSystemStackMonitoringsManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference">DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.enableStackMonitoringInput">enableStackMonitoringInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.externalDbSystemIdInput">externalDbSystemIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.isEnabledInput">isEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.metadataInput">metadataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts">DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.enableStackMonitoring">enableStackMonitoring</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.externalDbSystemId">externalDbSystemId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.metadata">metadata</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.timeouts"></a>

```java
public DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference">DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference</a>

---

##### `enableStackMonitoringInput`<sup>Optional</sup> <a name="enableStackMonitoringInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.enableStackMonitoringInput"></a>

```java
public java.lang.Object getEnableStackMonitoringInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `externalDbSystemIdInput`<sup>Optional</sup> <a name="externalDbSystemIdInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.externalDbSystemIdInput"></a>

```java
public java.lang.String getExternalDbSystemIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.isEnabledInput"></a>

```java
public java.lang.Object getIsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.metadataInput"></a>

```java
public java.lang.String getMetadataInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts">DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts</a>

---

##### `enableStackMonitoring`<sup>Required</sup> <a name="enableStackMonitoring" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.enableStackMonitoring"></a>

```java
public java.lang.Object getEnableStackMonitoring();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `externalDbSystemId`<sup>Required</sup> <a name="externalDbSystemId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.externalDbSystemId"></a>

```java
public java.lang.String getExternalDbSystemId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.metadata"></a>

```java
public java.lang.String getMetadata();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig <a name="DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_external_db_system_stack_monitorings_management.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig;

DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.builder()
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
    .enableStackMonitoring(java.lang.Boolean)
    .enableStackMonitoring(IResolvable)
    .externalDbSystemId(java.lang.String)
//  .id(java.lang.String)
//  .isEnabled(java.lang.Boolean)
//  .isEnabled(IResolvable)
//  .metadata(java.lang.String)
//  .timeouts(DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.enableStackMonitoring">enableStackMonitoring</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management#enable_stack_monitoring DatabaseManagementExternalDbSystemStackMonitoringsManagement#enable_stack_monitoring}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.externalDbSystemId">externalDbSystemId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management#external_db_system_id DatabaseManagementExternalDbSystemStackMonitoringsManagement#external_db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management#id DatabaseManagementExternalDbSystemStackMonitoringsManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management#is_enabled DatabaseManagementExternalDbSystemStackMonitoringsManagement#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.metadata">metadata</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management#metadata DatabaseManagementExternalDbSystemStackMonitoringsManagement#metadata}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts">DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `enableStackMonitoring`<sup>Required</sup> <a name="enableStackMonitoring" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.enableStackMonitoring"></a>

```java
public java.lang.Object getEnableStackMonitoring();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management#enable_stack_monitoring DatabaseManagementExternalDbSystemStackMonitoringsManagement#enable_stack_monitoring}.

---

##### `externalDbSystemId`<sup>Required</sup> <a name="externalDbSystemId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.externalDbSystemId"></a>

```java
public java.lang.String getExternalDbSystemId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management#external_db_system_id DatabaseManagementExternalDbSystemStackMonitoringsManagement#external_db_system_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management#id DatabaseManagementExternalDbSystemStackMonitoringsManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management#is_enabled DatabaseManagementExternalDbSystemStackMonitoringsManagement#is_enabled}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.metadata"></a>

```java
public java.lang.String getMetadata();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management#metadata DatabaseManagementExternalDbSystemStackMonitoringsManagement#metadata}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.timeouts"></a>

```java
public DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts">DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management#timeouts DatabaseManagementExternalDbSystemStackMonitoringsManagement#timeouts}

---

### DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts <a name="DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_external_db_system_stack_monitorings_management.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts;

DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management#create DatabaseManagementExternalDbSystemStackMonitoringsManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management#delete DatabaseManagementExternalDbSystemStackMonitoringsManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management#update DatabaseManagementExternalDbSystemStackMonitoringsManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management#create DatabaseManagementExternalDbSystemStackMonitoringsManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management#delete DatabaseManagementExternalDbSystemStackMonitoringsManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management#update DatabaseManagementExternalDbSystemStackMonitoringsManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference <a name="DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_external_db_system_stack_monitorings_management.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference;

new DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts">DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts">DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts</a>

---



