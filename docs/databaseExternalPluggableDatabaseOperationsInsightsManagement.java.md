# `databaseExternalPluggableDatabaseOperationsInsightsManagement` Submodule <a name="`databaseExternalPluggableDatabaseOperationsInsightsManagement` Submodule" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseExternalPluggableDatabaseOperationsInsightsManagement <a name="DatabaseExternalPluggableDatabaseOperationsInsightsManagement" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database_operations_insights_management oci_database_external_pluggable_database_operations_insights_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_external_pluggable_database_operations_insights_management.DatabaseExternalPluggableDatabaseOperationsInsightsManagement;

DatabaseExternalPluggableDatabaseOperationsInsightsManagement.Builder.create(Construct scope, java.lang.String id)
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
    .enableOperationsInsights(java.lang.Boolean)
    .enableOperationsInsights(IResolvable)
    .externalDatabaseConnectorId(java.lang.String)
    .externalPluggableDatabaseId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.Initializer.parameter.enableOperationsInsights">enableOperationsInsights</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database_operations_insights_management#enable_operations_insights DatabaseExternalPluggableDatabaseOperationsInsightsManagement#enable_operations_insights}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.Initializer.parameter.externalDatabaseConnectorId">externalDatabaseConnectorId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database_operations_insights_management#external_database_connector_id DatabaseExternalPluggableDatabaseOperationsInsightsManagement#external_database_connector_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.Initializer.parameter.externalPluggableDatabaseId">externalPluggableDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database_operations_insights_management#external_pluggable_database_id DatabaseExternalPluggableDatabaseOperationsInsightsManagement#external_pluggable_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database_operations_insights_management#id DatabaseExternalPluggableDatabaseOperationsInsightsManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts">DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `enableOperationsInsights`<sup>Required</sup> <a name="enableOperationsInsights" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.Initializer.parameter.enableOperationsInsights"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database_operations_insights_management#enable_operations_insights DatabaseExternalPluggableDatabaseOperationsInsightsManagement#enable_operations_insights}.

---

##### `externalDatabaseConnectorId`<sup>Required</sup> <a name="externalDatabaseConnectorId" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.Initializer.parameter.externalDatabaseConnectorId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database_operations_insights_management#external_database_connector_id DatabaseExternalPluggableDatabaseOperationsInsightsManagement#external_database_connector_id}.

---

##### `externalPluggableDatabaseId`<sup>Required</sup> <a name="externalPluggableDatabaseId" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.Initializer.parameter.externalPluggableDatabaseId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database_operations_insights_management#external_pluggable_database_id DatabaseExternalPluggableDatabaseOperationsInsightsManagement#external_pluggable_database_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database_operations_insights_management#id DatabaseExternalPluggableDatabaseOperationsInsightsManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts">DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database_operations_insights_management#timeouts DatabaseExternalPluggableDatabaseOperationsInsightsManagement#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.putTimeouts"></a>

```java
public void putTimeouts(DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts">DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseExternalPluggableDatabaseOperationsInsightsManagement resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_external_pluggable_database_operations_insights_management.DatabaseExternalPluggableDatabaseOperationsInsightsManagement;

DatabaseExternalPluggableDatabaseOperationsInsightsManagement.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_external_pluggable_database_operations_insights_management.DatabaseExternalPluggableDatabaseOperationsInsightsManagement;

DatabaseExternalPluggableDatabaseOperationsInsightsManagement.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_external_pluggable_database_operations_insights_management.DatabaseExternalPluggableDatabaseOperationsInsightsManagement;

DatabaseExternalPluggableDatabaseOperationsInsightsManagement.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_external_pluggable_database_operations_insights_management.DatabaseExternalPluggableDatabaseOperationsInsightsManagement;

DatabaseExternalPluggableDatabaseOperationsInsightsManagement.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatabaseExternalPluggableDatabaseOperationsInsightsManagement.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DatabaseExternalPluggableDatabaseOperationsInsightsManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatabaseExternalPluggableDatabaseOperationsInsightsManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatabaseExternalPluggableDatabaseOperationsInsightsManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database_operations_insights_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseExternalPluggableDatabaseOperationsInsightsManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference">DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.enableOperationsInsightsInput">enableOperationsInsightsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.externalDatabaseConnectorIdInput">externalDatabaseConnectorIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.externalPluggableDatabaseIdInput">externalPluggableDatabaseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts">DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.enableOperationsInsights">enableOperationsInsights</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.externalDatabaseConnectorId">externalDatabaseConnectorId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.externalPluggableDatabaseId">externalPluggableDatabaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.timeouts"></a>

```java
public DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference">DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference</a>

---

##### `enableOperationsInsightsInput`<sup>Optional</sup> <a name="enableOperationsInsightsInput" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.enableOperationsInsightsInput"></a>

```java
public java.lang.Object getEnableOperationsInsightsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `externalDatabaseConnectorIdInput`<sup>Optional</sup> <a name="externalDatabaseConnectorIdInput" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.externalDatabaseConnectorIdInput"></a>

```java
public java.lang.String getExternalDatabaseConnectorIdInput();
```

- *Type:* java.lang.String

---

##### `externalPluggableDatabaseIdInput`<sup>Optional</sup> <a name="externalPluggableDatabaseIdInput" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.externalPluggableDatabaseIdInput"></a>

```java
public java.lang.String getExternalPluggableDatabaseIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts">DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts</a>

---

##### `enableOperationsInsights`<sup>Required</sup> <a name="enableOperationsInsights" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.enableOperationsInsights"></a>

```java
public java.lang.Object getEnableOperationsInsights();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `externalDatabaseConnectorId`<sup>Required</sup> <a name="externalDatabaseConnectorId" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.externalDatabaseConnectorId"></a>

```java
public java.lang.String getExternalDatabaseConnectorId();
```

- *Type:* java.lang.String

---

##### `externalPluggableDatabaseId`<sup>Required</sup> <a name="externalPluggableDatabaseId" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.externalPluggableDatabaseId"></a>

```java
public java.lang.String getExternalPluggableDatabaseId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig <a name="DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_external_pluggable_database_operations_insights_management.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig;

DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.builder()
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
    .enableOperationsInsights(java.lang.Boolean)
    .enableOperationsInsights(IResolvable)
    .externalDatabaseConnectorId(java.lang.String)
    .externalPluggableDatabaseId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.enableOperationsInsights">enableOperationsInsights</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database_operations_insights_management#enable_operations_insights DatabaseExternalPluggableDatabaseOperationsInsightsManagement#enable_operations_insights}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.externalDatabaseConnectorId">externalDatabaseConnectorId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database_operations_insights_management#external_database_connector_id DatabaseExternalPluggableDatabaseOperationsInsightsManagement#external_database_connector_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.externalPluggableDatabaseId">externalPluggableDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database_operations_insights_management#external_pluggable_database_id DatabaseExternalPluggableDatabaseOperationsInsightsManagement#external_pluggable_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database_operations_insights_management#id DatabaseExternalPluggableDatabaseOperationsInsightsManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts">DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `enableOperationsInsights`<sup>Required</sup> <a name="enableOperationsInsights" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.enableOperationsInsights"></a>

```java
public java.lang.Object getEnableOperationsInsights();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database_operations_insights_management#enable_operations_insights DatabaseExternalPluggableDatabaseOperationsInsightsManagement#enable_operations_insights}.

---

##### `externalDatabaseConnectorId`<sup>Required</sup> <a name="externalDatabaseConnectorId" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.externalDatabaseConnectorId"></a>

```java
public java.lang.String getExternalDatabaseConnectorId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database_operations_insights_management#external_database_connector_id DatabaseExternalPluggableDatabaseOperationsInsightsManagement#external_database_connector_id}.

---

##### `externalPluggableDatabaseId`<sup>Required</sup> <a name="externalPluggableDatabaseId" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.externalPluggableDatabaseId"></a>

```java
public java.lang.String getExternalPluggableDatabaseId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database_operations_insights_management#external_pluggable_database_id DatabaseExternalPluggableDatabaseOperationsInsightsManagement#external_pluggable_database_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database_operations_insights_management#id DatabaseExternalPluggableDatabaseOperationsInsightsManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.timeouts"></a>

```java
public DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts">DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database_operations_insights_management#timeouts DatabaseExternalPluggableDatabaseOperationsInsightsManagement#timeouts}

---

### DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts <a name="DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_external_pluggable_database_operations_insights_management.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts;

DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database_operations_insights_management#create DatabaseExternalPluggableDatabaseOperationsInsightsManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database_operations_insights_management#delete DatabaseExternalPluggableDatabaseOperationsInsightsManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database_operations_insights_management#update DatabaseExternalPluggableDatabaseOperationsInsightsManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database_operations_insights_management#create DatabaseExternalPluggableDatabaseOperationsInsightsManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database_operations_insights_management#delete DatabaseExternalPluggableDatabaseOperationsInsightsManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database_operations_insights_management#update DatabaseExternalPluggableDatabaseOperationsInsightsManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference <a name="DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_external_pluggable_database_operations_insights_management.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference;

new DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts">DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts">DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts</a>

---



