# `databaseExternalcontainerdatabasesStackMonitoring` Submodule <a name="`databaseExternalcontainerdatabasesStackMonitoring` Submodule" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseExternalcontainerdatabasesStackMonitoring <a name="DatabaseExternalcontainerdatabasesStackMonitoring" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalcontainerdatabases_stack_monitoring oci_database_externalcontainerdatabases_stack_monitoring}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_externalcontainerdatabases_stack_monitoring.DatabaseExternalcontainerdatabasesStackMonitoring;

DatabaseExternalcontainerdatabasesStackMonitoring.Builder.create(Construct scope, java.lang.String id)
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
    .externalContainerDatabaseId(java.lang.String)
    .externalDatabaseConnectorId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DatabaseExternalcontainerdatabasesStackMonitoringTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.Initializer.parameter.enableStackMonitoring">enableStackMonitoring</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalcontainerdatabases_stack_monitoring#enable_stack_monitoring DatabaseExternalcontainerdatabasesStackMonitoring#enable_stack_monitoring}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.Initializer.parameter.externalContainerDatabaseId">externalContainerDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalcontainerdatabases_stack_monitoring#external_container_database_id DatabaseExternalcontainerdatabasesStackMonitoring#external_container_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.Initializer.parameter.externalDatabaseConnectorId">externalDatabaseConnectorId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalcontainerdatabases_stack_monitoring#external_database_connector_id DatabaseExternalcontainerdatabasesStackMonitoring#external_database_connector_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalcontainerdatabases_stack_monitoring#id DatabaseExternalcontainerdatabasesStackMonitoring#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeouts">DatabaseExternalcontainerdatabasesStackMonitoringTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `enableStackMonitoring`<sup>Required</sup> <a name="enableStackMonitoring" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.Initializer.parameter.enableStackMonitoring"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalcontainerdatabases_stack_monitoring#enable_stack_monitoring DatabaseExternalcontainerdatabasesStackMonitoring#enable_stack_monitoring}.

---

##### `externalContainerDatabaseId`<sup>Required</sup> <a name="externalContainerDatabaseId" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.Initializer.parameter.externalContainerDatabaseId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalcontainerdatabases_stack_monitoring#external_container_database_id DatabaseExternalcontainerdatabasesStackMonitoring#external_container_database_id}.

---

##### `externalDatabaseConnectorId`<sup>Required</sup> <a name="externalDatabaseConnectorId" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.Initializer.parameter.externalDatabaseConnectorId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalcontainerdatabases_stack_monitoring#external_database_connector_id DatabaseExternalcontainerdatabasesStackMonitoring#external_database_connector_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalcontainerdatabases_stack_monitoring#id DatabaseExternalcontainerdatabasesStackMonitoring#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeouts">DatabaseExternalcontainerdatabasesStackMonitoringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalcontainerdatabases_stack_monitoring#timeouts DatabaseExternalcontainerdatabasesStackMonitoring#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.putTimeouts"></a>

```java
public void putTimeouts(DatabaseExternalcontainerdatabasesStackMonitoringTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeouts">DatabaseExternalcontainerdatabasesStackMonitoringTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseExternalcontainerdatabasesStackMonitoring resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_externalcontainerdatabases_stack_monitoring.DatabaseExternalcontainerdatabasesStackMonitoring;

DatabaseExternalcontainerdatabasesStackMonitoring.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_externalcontainerdatabases_stack_monitoring.DatabaseExternalcontainerdatabasesStackMonitoring;

DatabaseExternalcontainerdatabasesStackMonitoring.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_externalcontainerdatabases_stack_monitoring.DatabaseExternalcontainerdatabasesStackMonitoring;

DatabaseExternalcontainerdatabasesStackMonitoring.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_externalcontainerdatabases_stack_monitoring.DatabaseExternalcontainerdatabasesStackMonitoring;

DatabaseExternalcontainerdatabasesStackMonitoring.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatabaseExternalcontainerdatabasesStackMonitoring.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DatabaseExternalcontainerdatabasesStackMonitoring resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatabaseExternalcontainerdatabasesStackMonitoring to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatabaseExternalcontainerdatabasesStackMonitoring that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalcontainerdatabases_stack_monitoring#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseExternalcontainerdatabasesStackMonitoring to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference">DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.enableStackMonitoringInput">enableStackMonitoringInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.externalContainerDatabaseIdInput">externalContainerDatabaseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.externalDatabaseConnectorIdInput">externalDatabaseConnectorIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeouts">DatabaseExternalcontainerdatabasesStackMonitoringTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.enableStackMonitoring">enableStackMonitoring</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.externalContainerDatabaseId">externalContainerDatabaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.externalDatabaseConnectorId">externalDatabaseConnectorId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.timeouts"></a>

```java
public DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference">DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference</a>

---

##### `enableStackMonitoringInput`<sup>Optional</sup> <a name="enableStackMonitoringInput" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.enableStackMonitoringInput"></a>

```java
public java.lang.Object getEnableStackMonitoringInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `externalContainerDatabaseIdInput`<sup>Optional</sup> <a name="externalContainerDatabaseIdInput" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.externalContainerDatabaseIdInput"></a>

```java
public java.lang.String getExternalContainerDatabaseIdInput();
```

- *Type:* java.lang.String

---

##### `externalDatabaseConnectorIdInput`<sup>Optional</sup> <a name="externalDatabaseConnectorIdInput" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.externalDatabaseConnectorIdInput"></a>

```java
public java.lang.String getExternalDatabaseConnectorIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeouts">DatabaseExternalcontainerdatabasesStackMonitoringTimeouts</a>

---

##### `enableStackMonitoring`<sup>Required</sup> <a name="enableStackMonitoring" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.enableStackMonitoring"></a>

```java
public java.lang.Object getEnableStackMonitoring();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `externalContainerDatabaseId`<sup>Required</sup> <a name="externalContainerDatabaseId" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.externalContainerDatabaseId"></a>

```java
public java.lang.String getExternalContainerDatabaseId();
```

- *Type:* java.lang.String

---

##### `externalDatabaseConnectorId`<sup>Required</sup> <a name="externalDatabaseConnectorId" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.externalDatabaseConnectorId"></a>

```java
public java.lang.String getExternalDatabaseConnectorId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseExternalcontainerdatabasesStackMonitoringConfig <a name="DatabaseExternalcontainerdatabasesStackMonitoringConfig" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_externalcontainerdatabases_stack_monitoring.DatabaseExternalcontainerdatabasesStackMonitoringConfig;

DatabaseExternalcontainerdatabasesStackMonitoringConfig.builder()
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
    .externalContainerDatabaseId(java.lang.String)
    .externalDatabaseConnectorId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DatabaseExternalcontainerdatabasesStackMonitoringTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringConfig.property.enableStackMonitoring">enableStackMonitoring</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalcontainerdatabases_stack_monitoring#enable_stack_monitoring DatabaseExternalcontainerdatabasesStackMonitoring#enable_stack_monitoring}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringConfig.property.externalContainerDatabaseId">externalContainerDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalcontainerdatabases_stack_monitoring#external_container_database_id DatabaseExternalcontainerdatabasesStackMonitoring#external_container_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringConfig.property.externalDatabaseConnectorId">externalDatabaseConnectorId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalcontainerdatabases_stack_monitoring#external_database_connector_id DatabaseExternalcontainerdatabasesStackMonitoring#external_database_connector_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalcontainerdatabases_stack_monitoring#id DatabaseExternalcontainerdatabasesStackMonitoring#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeouts">DatabaseExternalcontainerdatabasesStackMonitoringTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `enableStackMonitoring`<sup>Required</sup> <a name="enableStackMonitoring" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringConfig.property.enableStackMonitoring"></a>

```java
public java.lang.Object getEnableStackMonitoring();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalcontainerdatabases_stack_monitoring#enable_stack_monitoring DatabaseExternalcontainerdatabasesStackMonitoring#enable_stack_monitoring}.

---

##### `externalContainerDatabaseId`<sup>Required</sup> <a name="externalContainerDatabaseId" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringConfig.property.externalContainerDatabaseId"></a>

```java
public java.lang.String getExternalContainerDatabaseId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalcontainerdatabases_stack_monitoring#external_container_database_id DatabaseExternalcontainerdatabasesStackMonitoring#external_container_database_id}.

---

##### `externalDatabaseConnectorId`<sup>Required</sup> <a name="externalDatabaseConnectorId" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringConfig.property.externalDatabaseConnectorId"></a>

```java
public java.lang.String getExternalDatabaseConnectorId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalcontainerdatabases_stack_monitoring#external_database_connector_id DatabaseExternalcontainerdatabasesStackMonitoring#external_database_connector_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalcontainerdatabases_stack_monitoring#id DatabaseExternalcontainerdatabasesStackMonitoring#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringConfig.property.timeouts"></a>

```java
public DatabaseExternalcontainerdatabasesStackMonitoringTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeouts">DatabaseExternalcontainerdatabasesStackMonitoringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalcontainerdatabases_stack_monitoring#timeouts DatabaseExternalcontainerdatabasesStackMonitoring#timeouts}

---

### DatabaseExternalcontainerdatabasesStackMonitoringTimeouts <a name="DatabaseExternalcontainerdatabasesStackMonitoringTimeouts" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_externalcontainerdatabases_stack_monitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeouts;

DatabaseExternalcontainerdatabasesStackMonitoringTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalcontainerdatabases_stack_monitoring#create DatabaseExternalcontainerdatabasesStackMonitoring#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalcontainerdatabases_stack_monitoring#delete DatabaseExternalcontainerdatabasesStackMonitoring#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalcontainerdatabases_stack_monitoring#update DatabaseExternalcontainerdatabasesStackMonitoring#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalcontainerdatabases_stack_monitoring#create DatabaseExternalcontainerdatabasesStackMonitoring#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalcontainerdatabases_stack_monitoring#delete DatabaseExternalcontainerdatabasesStackMonitoring#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalcontainerdatabases_stack_monitoring#update DatabaseExternalcontainerdatabasesStackMonitoring#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference <a name="DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_externalcontainerdatabases_stack_monitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference;

new DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeouts">DatabaseExternalcontainerdatabasesStackMonitoringTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeouts">DatabaseExternalcontainerdatabasesStackMonitoringTimeouts</a>

---



