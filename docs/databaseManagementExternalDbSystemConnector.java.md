# `databaseManagementExternalDbSystemConnector` Submodule <a name="`databaseManagementExternalDbSystemConnector` Submodule" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseManagementExternalDbSystemConnector <a name="DatabaseManagementExternalDbSystemConnector" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector oci_database_management_external_db_system_connector}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_external_db_system_connector.DatabaseManagementExternalDbSystemConnector;

DatabaseManagementExternalDbSystemConnector.Builder.create(Construct scope, java.lang.String id)
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
    .connectorType(java.lang.String)
    .externalDbSystemId(java.lang.String)
//  .agentId(java.lang.String)
//  .connectionInfo(IResolvable)
//  .connectionInfo(java.util.List<DatabaseManagementExternalDbSystemConnectorConnectionInfo>)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .timeouts(DatabaseManagementExternalDbSystemConnectorTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.Initializer.parameter.connectorType">connectorType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#connector_type DatabaseManagementExternalDbSystemConnector#connector_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.Initializer.parameter.externalDbSystemId">externalDbSystemId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#external_db_system_id DatabaseManagementExternalDbSystemConnector#external_db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.Initializer.parameter.agentId">agentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#agent_id DatabaseManagementExternalDbSystemConnector#agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.Initializer.parameter.connectionInfo">connectionInfo</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfo">DatabaseManagementExternalDbSystemConnectorConnectionInfo</a>></code> | connection_info block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#defined_tags DatabaseManagementExternalDbSystemConnector#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#display_name DatabaseManagementExternalDbSystemConnector#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#freeform_tags DatabaseManagementExternalDbSystemConnector#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#id DatabaseManagementExternalDbSystemConnector#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeouts">DatabaseManagementExternalDbSystemConnectorTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `connectorType`<sup>Required</sup> <a name="connectorType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.Initializer.parameter.connectorType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#connector_type DatabaseManagementExternalDbSystemConnector#connector_type}.

---

##### `externalDbSystemId`<sup>Required</sup> <a name="externalDbSystemId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.Initializer.parameter.externalDbSystemId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#external_db_system_id DatabaseManagementExternalDbSystemConnector#external_db_system_id}.

---

##### `agentId`<sup>Optional</sup> <a name="agentId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.Initializer.parameter.agentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#agent_id DatabaseManagementExternalDbSystemConnector#agent_id}.

---

##### `connectionInfo`<sup>Optional</sup> <a name="connectionInfo" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.Initializer.parameter.connectionInfo"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfo">DatabaseManagementExternalDbSystemConnectorConnectionInfo</a>>

connection_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#connection_info DatabaseManagementExternalDbSystemConnector#connection_info}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#defined_tags DatabaseManagementExternalDbSystemConnector#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#display_name DatabaseManagementExternalDbSystemConnector#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#freeform_tags DatabaseManagementExternalDbSystemConnector#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#id DatabaseManagementExternalDbSystemConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeouts">DatabaseManagementExternalDbSystemConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#timeouts DatabaseManagementExternalDbSystemConnector#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.putConnectionInfo">putConnectionInfo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.resetAgentId">resetAgentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.resetConnectionInfo">resetConnectionInfo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConnectionInfo` <a name="putConnectionInfo" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.putConnectionInfo"></a>

```java
public void putConnectionInfo(IResolvable OR java.util.List<DatabaseManagementExternalDbSystemConnectorConnectionInfo> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.putConnectionInfo.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfo">DatabaseManagementExternalDbSystemConnectorConnectionInfo</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.putTimeouts"></a>

```java
public void putTimeouts(DatabaseManagementExternalDbSystemConnectorTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeouts">DatabaseManagementExternalDbSystemConnectorTimeouts</a>

---

##### `resetAgentId` <a name="resetAgentId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.resetAgentId"></a>

```java
public void resetAgentId()
```

##### `resetConnectionInfo` <a name="resetConnectionInfo" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.resetConnectionInfo"></a>

```java
public void resetConnectionInfo()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseManagementExternalDbSystemConnector resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_external_db_system_connector.DatabaseManagementExternalDbSystemConnector;

DatabaseManagementExternalDbSystemConnector.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_external_db_system_connector.DatabaseManagementExternalDbSystemConnector;

DatabaseManagementExternalDbSystemConnector.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_external_db_system_connector.DatabaseManagementExternalDbSystemConnector;

DatabaseManagementExternalDbSystemConnector.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_external_db_system_connector.DatabaseManagementExternalDbSystemConnector;

DatabaseManagementExternalDbSystemConnector.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatabaseManagementExternalDbSystemConnector.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DatabaseManagementExternalDbSystemConnector resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatabaseManagementExternalDbSystemConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatabaseManagementExternalDbSystemConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseManagementExternalDbSystemConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.connectionFailureMessage">connectionFailureMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.connectionInfo">connectionInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoList">DatabaseManagementExternalDbSystemConnectorConnectionInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.connectionStatus">connectionStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.timeConnectionStatusLastUpdated">timeConnectionStatusLastUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference">DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.agentIdInput">agentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.connectionInfoInput">connectionInfoInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfo">DatabaseManagementExternalDbSystemConnectorConnectionInfo</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.connectorTypeInput">connectorTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.externalDbSystemIdInput">externalDbSystemIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeouts">DatabaseManagementExternalDbSystemConnectorTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.agentId">agentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.connectorType">connectorType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.externalDbSystemId">externalDbSystemId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `connectionFailureMessage`<sup>Required</sup> <a name="connectionFailureMessage" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.connectionFailureMessage"></a>

```java
public java.lang.String getConnectionFailureMessage();
```

- *Type:* java.lang.String

---

##### `connectionInfo`<sup>Required</sup> <a name="connectionInfo" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.connectionInfo"></a>

```java
public DatabaseManagementExternalDbSystemConnectorConnectionInfoList getConnectionInfo();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoList">DatabaseManagementExternalDbSystemConnectorConnectionInfoList</a>

---

##### `connectionStatus`<sup>Required</sup> <a name="connectionStatus" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.connectionStatus"></a>

```java
public java.lang.String getConnectionStatus();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeConnectionStatusLastUpdated`<sup>Required</sup> <a name="timeConnectionStatusLastUpdated" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.timeConnectionStatusLastUpdated"></a>

```java
public java.lang.String getTimeConnectionStatusLastUpdated();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.timeouts"></a>

```java
public DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference">DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `agentIdInput`<sup>Optional</sup> <a name="agentIdInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.agentIdInput"></a>

```java
public java.lang.String getAgentIdInput();
```

- *Type:* java.lang.String

---

##### `connectionInfoInput`<sup>Optional</sup> <a name="connectionInfoInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.connectionInfoInput"></a>

```java
public java.lang.Object getConnectionInfoInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfo">DatabaseManagementExternalDbSystemConnectorConnectionInfo</a>>

---

##### `connectorTypeInput`<sup>Optional</sup> <a name="connectorTypeInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.connectorTypeInput"></a>

```java
public java.lang.String getConnectorTypeInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `externalDbSystemIdInput`<sup>Optional</sup> <a name="externalDbSystemIdInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.externalDbSystemIdInput"></a>

```java
public java.lang.String getExternalDbSystemIdInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeouts">DatabaseManagementExternalDbSystemConnectorTimeouts</a>

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.agentId"></a>

```java
public java.lang.String getAgentId();
```

- *Type:* java.lang.String

---

##### `connectorType`<sup>Required</sup> <a name="connectorType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.connectorType"></a>

```java
public java.lang.String getConnectorType();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `externalDbSystemId`<sup>Required</sup> <a name="externalDbSystemId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.externalDbSystemId"></a>

```java
public java.lang.String getExternalDbSystemId();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseManagementExternalDbSystemConnectorConfig <a name="DatabaseManagementExternalDbSystemConnectorConfig" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_external_db_system_connector.DatabaseManagementExternalDbSystemConnectorConfig;

DatabaseManagementExternalDbSystemConnectorConfig.builder()
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
    .connectorType(java.lang.String)
    .externalDbSystemId(java.lang.String)
//  .agentId(java.lang.String)
//  .connectionInfo(IResolvable)
//  .connectionInfo(java.util.List<DatabaseManagementExternalDbSystemConnectorConnectionInfo>)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .timeouts(DatabaseManagementExternalDbSystemConnectorTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig.property.connectorType">connectorType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#connector_type DatabaseManagementExternalDbSystemConnector#connector_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig.property.externalDbSystemId">externalDbSystemId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#external_db_system_id DatabaseManagementExternalDbSystemConnector#external_db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig.property.agentId">agentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#agent_id DatabaseManagementExternalDbSystemConnector#agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig.property.connectionInfo">connectionInfo</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfo">DatabaseManagementExternalDbSystemConnectorConnectionInfo</a>></code> | connection_info block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#defined_tags DatabaseManagementExternalDbSystemConnector#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#display_name DatabaseManagementExternalDbSystemConnector#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#freeform_tags DatabaseManagementExternalDbSystemConnector#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#id DatabaseManagementExternalDbSystemConnector#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeouts">DatabaseManagementExternalDbSystemConnectorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `connectorType`<sup>Required</sup> <a name="connectorType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig.property.connectorType"></a>

```java
public java.lang.String getConnectorType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#connector_type DatabaseManagementExternalDbSystemConnector#connector_type}.

---

##### `externalDbSystemId`<sup>Required</sup> <a name="externalDbSystemId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig.property.externalDbSystemId"></a>

```java
public java.lang.String getExternalDbSystemId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#external_db_system_id DatabaseManagementExternalDbSystemConnector#external_db_system_id}.

---

##### `agentId`<sup>Optional</sup> <a name="agentId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig.property.agentId"></a>

```java
public java.lang.String getAgentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#agent_id DatabaseManagementExternalDbSystemConnector#agent_id}.

---

##### `connectionInfo`<sup>Optional</sup> <a name="connectionInfo" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig.property.connectionInfo"></a>

```java
public java.lang.Object getConnectionInfo();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfo">DatabaseManagementExternalDbSystemConnectorConnectionInfo</a>>

connection_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#connection_info DatabaseManagementExternalDbSystemConnector#connection_info}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#defined_tags DatabaseManagementExternalDbSystemConnector#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#display_name DatabaseManagementExternalDbSystemConnector#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#freeform_tags DatabaseManagementExternalDbSystemConnector#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#id DatabaseManagementExternalDbSystemConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig.property.timeouts"></a>

```java
public DatabaseManagementExternalDbSystemConnectorTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeouts">DatabaseManagementExternalDbSystemConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#timeouts DatabaseManagementExternalDbSystemConnector#timeouts}

---

### DatabaseManagementExternalDbSystemConnectorConnectionInfo <a name="DatabaseManagementExternalDbSystemConnectorConnectionInfo" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_external_db_system_connector.DatabaseManagementExternalDbSystemConnectorConnectionInfo;

DatabaseManagementExternalDbSystemConnectorConnectionInfo.builder()
    .componentType(java.lang.String)
//  .connectionCredentials(IResolvable)
//  .connectionCredentials(java.util.List<DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentials>)
//  .connectionString(IResolvable)
//  .connectionString(java.util.List<DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionString>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfo.property.componentType">componentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#component_type DatabaseManagementExternalDbSystemConnector#component_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfo.property.connectionCredentials">connectionCredentials</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentials">DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentials</a>></code> | connection_credentials block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfo.property.connectionString">connectionString</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionString">DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionString</a>></code> | connection_string block. |

---

##### `componentType`<sup>Required</sup> <a name="componentType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfo.property.componentType"></a>

```java
public java.lang.String getComponentType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#component_type DatabaseManagementExternalDbSystemConnector#component_type}.

---

##### `connectionCredentials`<sup>Optional</sup> <a name="connectionCredentials" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfo.property.connectionCredentials"></a>

```java
public java.lang.Object getConnectionCredentials();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentials">DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentials</a>>

connection_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#connection_credentials DatabaseManagementExternalDbSystemConnector#connection_credentials}

---

##### `connectionString`<sup>Optional</sup> <a name="connectionString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfo.property.connectionString"></a>

```java
public java.lang.Object getConnectionString();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionString">DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionString</a>>

connection_string block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#connection_string DatabaseManagementExternalDbSystemConnector#connection_string}

---

### DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentials <a name="DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentials" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentials.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_external_db_system_connector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentials;

DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentials.builder()
//  .credentialName(java.lang.String)
//  .credentialType(java.lang.String)
//  .passwordSecretId(java.lang.String)
//  .role(java.lang.String)
//  .sslSecretId(java.lang.String)
//  .userName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentials.property.credentialName">credentialName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#credential_name DatabaseManagementExternalDbSystemConnector#credential_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentials.property.credentialType">credentialType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#credential_type DatabaseManagementExternalDbSystemConnector#credential_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentials.property.passwordSecretId">passwordSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#password_secret_id DatabaseManagementExternalDbSystemConnector#password_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentials.property.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#role DatabaseManagementExternalDbSystemConnector#role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentials.property.sslSecretId">sslSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#ssl_secret_id DatabaseManagementExternalDbSystemConnector#ssl_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentials.property.userName">userName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#user_name DatabaseManagementExternalDbSystemConnector#user_name}. |

---

##### `credentialName`<sup>Optional</sup> <a name="credentialName" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentials.property.credentialName"></a>

```java
public java.lang.String getCredentialName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#credential_name DatabaseManagementExternalDbSystemConnector#credential_name}.

---

##### `credentialType`<sup>Optional</sup> <a name="credentialType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentials.property.credentialType"></a>

```java
public java.lang.String getCredentialType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#credential_type DatabaseManagementExternalDbSystemConnector#credential_type}.

---

##### `passwordSecretId`<sup>Optional</sup> <a name="passwordSecretId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentials.property.passwordSecretId"></a>

```java
public java.lang.String getPasswordSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#password_secret_id DatabaseManagementExternalDbSystemConnector#password_secret_id}.

---

##### `role`<sup>Optional</sup> <a name="role" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentials.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#role DatabaseManagementExternalDbSystemConnector#role}.

---

##### `sslSecretId`<sup>Optional</sup> <a name="sslSecretId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentials.property.sslSecretId"></a>

```java
public java.lang.String getSslSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#ssl_secret_id DatabaseManagementExternalDbSystemConnector#ssl_secret_id}.

---

##### `userName`<sup>Optional</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentials.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#user_name DatabaseManagementExternalDbSystemConnector#user_name}.

---

### DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionString <a name="DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionString"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionString.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_external_db_system_connector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionString;

DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionString.builder()
//  .hostName(java.lang.String)
//  .hosts(java.util.List<java.lang.String>)
//  .port(java.lang.Number)
//  .protocol(java.lang.String)
//  .service(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionString.property.hostName">hostName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#host_name DatabaseManagementExternalDbSystemConnector#host_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionString.property.hosts">hosts</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#hosts DatabaseManagementExternalDbSystemConnector#hosts}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionString.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#port DatabaseManagementExternalDbSystemConnector#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionString.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#protocol DatabaseManagementExternalDbSystemConnector#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionString.property.service">service</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#service DatabaseManagementExternalDbSystemConnector#service}. |

---

##### `hostName`<sup>Optional</sup> <a name="hostName" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionString.property.hostName"></a>

```java
public java.lang.String getHostName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#host_name DatabaseManagementExternalDbSystemConnector#host_name}.

---

##### `hosts`<sup>Optional</sup> <a name="hosts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionString.property.hosts"></a>

```java
public java.util.List<java.lang.String> getHosts();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#hosts DatabaseManagementExternalDbSystemConnector#hosts}.

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionString.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#port DatabaseManagementExternalDbSystemConnector#port}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionString.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#protocol DatabaseManagementExternalDbSystemConnector#protocol}.

---

##### `service`<sup>Optional</sup> <a name="service" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionString.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#service DatabaseManagementExternalDbSystemConnector#service}.

---

### DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredential <a name="DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredential" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredential"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredential.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_external_db_system_connector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredential;

DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredential.builder()
    .build();
```


### DatabaseManagementExternalDbSystemConnectorTimeouts <a name="DatabaseManagementExternalDbSystemConnectorTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_external_db_system_connector.DatabaseManagementExternalDbSystemConnectorTimeouts;

DatabaseManagementExternalDbSystemConnectorTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#create DatabaseManagementExternalDbSystemConnector#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#delete DatabaseManagementExternalDbSystemConnector#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#update DatabaseManagementExternalDbSystemConnector#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#create DatabaseManagementExternalDbSystemConnector#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#delete DatabaseManagementExternalDbSystemConnector#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#update DatabaseManagementExternalDbSystemConnector#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList <a name="DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_external_db_system_connector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList;

new DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.get"></a>

```java
public DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentials">DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentials</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentials">DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentials</a>>

---


### DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference <a name="DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_external_db_system_connector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference;

new DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.resetCredentialName">resetCredentialName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.resetCredentialType">resetCredentialType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.resetPasswordSecretId">resetPasswordSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.resetRole">resetRole</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.resetSslSecretId">resetSslSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.resetUserName">resetUserName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCredentialName` <a name="resetCredentialName" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.resetCredentialName"></a>

```java
public void resetCredentialName()
```

##### `resetCredentialType` <a name="resetCredentialType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.resetCredentialType"></a>

```java
public void resetCredentialType()
```

##### `resetPasswordSecretId` <a name="resetPasswordSecretId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.resetPasswordSecretId"></a>

```java
public void resetPasswordSecretId()
```

##### `resetRole` <a name="resetRole" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.resetRole"></a>

```java
public void resetRole()
```

##### `resetSslSecretId` <a name="resetSslSecretId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.resetSslSecretId"></a>

```java
public void resetSslSecretId()
```

##### `resetUserName` <a name="resetUserName" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.resetUserName"></a>

```java
public void resetUserName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.namedCredentialId">namedCredentialId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.credentialNameInput">credentialNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.credentialTypeInput">credentialTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.passwordSecretIdInput">passwordSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.sslSecretIdInput">sslSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.userNameInput">userNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.credentialName">credentialName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.credentialType">credentialType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.passwordSecretId">passwordSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.sslSecretId">sslSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.userName">userName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentials">DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `namedCredentialId`<sup>Required</sup> <a name="namedCredentialId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.namedCredentialId"></a>

```java
public java.lang.String getNamedCredentialId();
```

- *Type:* java.lang.String

---

##### `credentialNameInput`<sup>Optional</sup> <a name="credentialNameInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.credentialNameInput"></a>

```java
public java.lang.String getCredentialNameInput();
```

- *Type:* java.lang.String

---

##### `credentialTypeInput`<sup>Optional</sup> <a name="credentialTypeInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.credentialTypeInput"></a>

```java
public java.lang.String getCredentialTypeInput();
```

- *Type:* java.lang.String

---

##### `passwordSecretIdInput`<sup>Optional</sup> <a name="passwordSecretIdInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.passwordSecretIdInput"></a>

```java
public java.lang.String getPasswordSecretIdInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `sslSecretIdInput`<sup>Optional</sup> <a name="sslSecretIdInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.sslSecretIdInput"></a>

```java
public java.lang.String getSslSecretIdInput();
```

- *Type:* java.lang.String

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.userNameInput"></a>

```java
public java.lang.String getUserNameInput();
```

- *Type:* java.lang.String

---

##### `credentialName`<sup>Required</sup> <a name="credentialName" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.credentialName"></a>

```java
public java.lang.String getCredentialName();
```

- *Type:* java.lang.String

---

##### `credentialType`<sup>Required</sup> <a name="credentialType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.credentialType"></a>

```java
public java.lang.String getCredentialType();
```

- *Type:* java.lang.String

---

##### `passwordSecretId`<sup>Required</sup> <a name="passwordSecretId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.passwordSecretId"></a>

```java
public java.lang.String getPasswordSecretId();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `sslSecretId`<sup>Required</sup> <a name="sslSecretId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.sslSecretId"></a>

```java
public java.lang.String getSslSecretId();
```

- *Type:* java.lang.String

---

##### `userName`<sup>Required</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentials">DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentials</a>

---


### DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList <a name="DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_external_db_system_connector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList;

new DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.get"></a>

```java
public DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionString">DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionString</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionString">DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionString</a>>

---


### DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference <a name="DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_external_db_system_connector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference;

new DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.resetHostName">resetHostName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.resetHosts">resetHosts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.resetService">resetService</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHostName` <a name="resetHostName" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.resetHostName"></a>

```java
public void resetHostName()
```

##### `resetHosts` <a name="resetHosts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.resetHosts"></a>

```java
public void resetHosts()
```

##### `resetPort` <a name="resetPort" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetProtocol` <a name="resetProtocol" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.resetProtocol"></a>

```java
public void resetProtocol()
```

##### `resetService` <a name="resetService" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.resetService"></a>

```java
public void resetService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.hostNameInput">hostNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.hostsInput">hostsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.hostName">hostName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.hosts">hosts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionString">DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionString</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostNameInput`<sup>Optional</sup> <a name="hostNameInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.hostNameInput"></a>

```java
public java.lang.String getHostNameInput();
```

- *Type:* java.lang.String

---

##### `hostsInput`<sup>Optional</sup> <a name="hostsInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.hostsInput"></a>

```java
public java.util.List<java.lang.String> getHostsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.hostName"></a>

```java
public java.lang.String getHostName();
```

- *Type:* java.lang.String

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.hosts"></a>

```java
public java.util.List<java.lang.String> getHosts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionString">DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionString</a>

---


### DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList <a name="DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_external_db_system_connector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList;

new DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.get"></a>

```java
public DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference <a name="DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_external_db_system_connector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference;

new DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.property.credentialType">credentialType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.property.namedCredentialId">namedCredentialId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.property.passwordSecretId">passwordSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredential">DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `credentialType`<sup>Required</sup> <a name="credentialType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.property.credentialType"></a>

```java
public java.lang.String getCredentialType();
```

- *Type:* java.lang.String

---

##### `namedCredentialId`<sup>Required</sup> <a name="namedCredentialId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.property.namedCredentialId"></a>

```java
public java.lang.String getNamedCredentialId();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `passwordSecretId`<sup>Required</sup> <a name="passwordSecretId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.property.passwordSecretId"></a>

```java
public java.lang.String getPasswordSecretId();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.property.internalValue"></a>

```java
public DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredential getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredential">DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredential</a>

---


### DatabaseManagementExternalDbSystemConnectorConnectionInfoList <a name="DatabaseManagementExternalDbSystemConnectorConnectionInfoList" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_external_db_system_connector.DatabaseManagementExternalDbSystemConnectorConnectionInfoList;

new DatabaseManagementExternalDbSystemConnectorConnectionInfoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoList.get"></a>

```java
public DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfo">DatabaseManagementExternalDbSystemConnectorConnectionInfo</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfo">DatabaseManagementExternalDbSystemConnectorConnectionInfo</a>>

---


### DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference <a name="DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_external_db_system_connector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference;

new DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.putConnectionCredentials">putConnectionCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.putConnectionString">putConnectionString</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.resetConnectionCredentials">resetConnectionCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.resetConnectionString">resetConnectionString</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConnectionCredentials` <a name="putConnectionCredentials" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.putConnectionCredentials"></a>

```java
public void putConnectionCredentials(IResolvable OR java.util.List<DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentials> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.putConnectionCredentials.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentials">DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentials</a>>

---

##### `putConnectionString` <a name="putConnectionString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.putConnectionString"></a>

```java
public void putConnectionString(IResolvable OR java.util.List<DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionString> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.putConnectionString.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionString">DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionString</a>>

---

##### `resetConnectionCredentials` <a name="resetConnectionCredentials" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.resetConnectionCredentials"></a>

```java
public void resetConnectionCredentials()
```

##### `resetConnectionString` <a name="resetConnectionString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.resetConnectionString"></a>

```java
public void resetConnectionString()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.property.connectionCredentials">connectionCredentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList">DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.property.connectionString">connectionString</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList">DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.property.databaseCredential">databaseCredential</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList">DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.property.componentTypeInput">componentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.property.connectionCredentialsInput">connectionCredentialsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentials">DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentials</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.property.connectionStringInput">connectionStringInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionString">DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionString</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.property.componentType">componentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfo">DatabaseManagementExternalDbSystemConnectorConnectionInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectionCredentials`<sup>Required</sup> <a name="connectionCredentials" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.property.connectionCredentials"></a>

```java
public DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList getConnectionCredentials();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList">DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList</a>

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.property.connectionString"></a>

```java
public DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList getConnectionString();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList">DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList</a>

---

##### `databaseCredential`<sup>Required</sup> <a name="databaseCredential" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.property.databaseCredential"></a>

```java
public DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList getDatabaseCredential();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList">DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList</a>

---

##### `componentTypeInput`<sup>Optional</sup> <a name="componentTypeInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.property.componentTypeInput"></a>

```java
public java.lang.String getComponentTypeInput();
```

- *Type:* java.lang.String

---

##### `connectionCredentialsInput`<sup>Optional</sup> <a name="connectionCredentialsInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.property.connectionCredentialsInput"></a>

```java
public java.lang.Object getConnectionCredentialsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentials">DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentials</a>>

---

##### `connectionStringInput`<sup>Optional</sup> <a name="connectionStringInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.property.connectionStringInput"></a>

```java
public java.lang.Object getConnectionStringInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionString">DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionString</a>>

---

##### `componentType`<sup>Required</sup> <a name="componentType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.property.componentType"></a>

```java
public java.lang.String getComponentType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfo">DatabaseManagementExternalDbSystemConnectorConnectionInfo</a>

---


### DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference <a name="DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_external_db_system_connector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference;

new DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeouts">DatabaseManagementExternalDbSystemConnectorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeouts">DatabaseManagementExternalDbSystemConnectorTimeouts</a>

---



