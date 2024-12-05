# `databaseExternalDatabaseConnector` Submodule <a name="`databaseExternalDatabaseConnector` Submodule" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseExternalDatabaseConnector <a name="DatabaseExternalDatabaseConnector" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector oci_database_external_database_connector}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_external_database_connector.DatabaseExternalDatabaseConnector;

DatabaseExternalDatabaseConnector.Builder.create(Construct scope, java.lang.String id)
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
    .connectionCredentials(DatabaseExternalDatabaseConnectorConnectionCredentials)
    .connectionString(DatabaseExternalDatabaseConnectorConnectionString)
    .connectorAgentId(java.lang.String)
    .displayName(java.lang.String)
    .externalDatabaseId(java.lang.String)
//  .connectorType(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .timeouts(DatabaseExternalDatabaseConnectorTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.Initializer.parameter.connectionCredentials">connectionCredentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentials">DatabaseExternalDatabaseConnectorConnectionCredentials</a></code> | connection_credentials block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.Initializer.parameter.connectionString">connectionString</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionString">DatabaseExternalDatabaseConnectorConnectionString</a></code> | connection_string block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.Initializer.parameter.connectorAgentId">connectorAgentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#connector_agent_id DatabaseExternalDatabaseConnector#connector_agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#display_name DatabaseExternalDatabaseConnector#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.Initializer.parameter.externalDatabaseId">externalDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#external_database_id DatabaseExternalDatabaseConnector#external_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.Initializer.parameter.connectorType">connectorType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#connector_type DatabaseExternalDatabaseConnector#connector_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#defined_tags DatabaseExternalDatabaseConnector#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#freeform_tags DatabaseExternalDatabaseConnector#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#id DatabaseExternalDatabaseConnector#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeouts">DatabaseExternalDatabaseConnectorTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `connectionCredentials`<sup>Required</sup> <a name="connectionCredentials" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.Initializer.parameter.connectionCredentials"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentials">DatabaseExternalDatabaseConnectorConnectionCredentials</a>

connection_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#connection_credentials DatabaseExternalDatabaseConnector#connection_credentials}

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.Initializer.parameter.connectionString"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionString">DatabaseExternalDatabaseConnectorConnectionString</a>

connection_string block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#connection_string DatabaseExternalDatabaseConnector#connection_string}

---

##### `connectorAgentId`<sup>Required</sup> <a name="connectorAgentId" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.Initializer.parameter.connectorAgentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#connector_agent_id DatabaseExternalDatabaseConnector#connector_agent_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#display_name DatabaseExternalDatabaseConnector#display_name}.

---

##### `externalDatabaseId`<sup>Required</sup> <a name="externalDatabaseId" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.Initializer.parameter.externalDatabaseId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#external_database_id DatabaseExternalDatabaseConnector#external_database_id}.

---

##### `connectorType`<sup>Optional</sup> <a name="connectorType" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.Initializer.parameter.connectorType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#connector_type DatabaseExternalDatabaseConnector#connector_type}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#defined_tags DatabaseExternalDatabaseConnector#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#freeform_tags DatabaseExternalDatabaseConnector#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#id DatabaseExternalDatabaseConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeouts">DatabaseExternalDatabaseConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#timeouts DatabaseExternalDatabaseConnector#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.putConnectionCredentials">putConnectionCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.putConnectionString">putConnectionString</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.resetConnectorType">resetConnectorType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConnectionCredentials` <a name="putConnectionCredentials" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.putConnectionCredentials"></a>

```java
public void putConnectionCredentials(DatabaseExternalDatabaseConnectorConnectionCredentials value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.putConnectionCredentials.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentials">DatabaseExternalDatabaseConnectorConnectionCredentials</a>

---

##### `putConnectionString` <a name="putConnectionString" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.putConnectionString"></a>

```java
public void putConnectionString(DatabaseExternalDatabaseConnectorConnectionString value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.putConnectionString.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionString">DatabaseExternalDatabaseConnectorConnectionString</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.putTimeouts"></a>

```java
public void putTimeouts(DatabaseExternalDatabaseConnectorTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeouts">DatabaseExternalDatabaseConnectorTimeouts</a>

---

##### `resetConnectorType` <a name="resetConnectorType" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.resetConnectorType"></a>

```java
public void resetConnectorType()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseExternalDatabaseConnector resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_external_database_connector.DatabaseExternalDatabaseConnector;

DatabaseExternalDatabaseConnector.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_external_database_connector.DatabaseExternalDatabaseConnector;

DatabaseExternalDatabaseConnector.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_external_database_connector.DatabaseExternalDatabaseConnector;

DatabaseExternalDatabaseConnector.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_external_database_connector.DatabaseExternalDatabaseConnector;

DatabaseExternalDatabaseConnector.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatabaseExternalDatabaseConnector.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DatabaseExternalDatabaseConnector resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatabaseExternalDatabaseConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatabaseExternalDatabaseConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseExternalDatabaseConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.connectionCredentials">connectionCredentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference">DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.connectionStatus">connectionStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.connectionString">connectionString</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference">DatabaseExternalDatabaseConnectorConnectionStringOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.timeConnectionStatusLastUpdated">timeConnectionStatusLastUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference">DatabaseExternalDatabaseConnectorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.connectionCredentialsInput">connectionCredentialsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentials">DatabaseExternalDatabaseConnectorConnectionCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.connectionStringInput">connectionStringInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionString">DatabaseExternalDatabaseConnectorConnectionString</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.connectorAgentIdInput">connectorAgentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.connectorTypeInput">connectorTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.externalDatabaseIdInput">externalDatabaseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeouts">DatabaseExternalDatabaseConnectorTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.connectorAgentId">connectorAgentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.connectorType">connectorType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.externalDatabaseId">externalDatabaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `connectionCredentials`<sup>Required</sup> <a name="connectionCredentials" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.connectionCredentials"></a>

```java
public DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference getConnectionCredentials();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference">DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference</a>

---

##### `connectionStatus`<sup>Required</sup> <a name="connectionStatus" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.connectionStatus"></a>

```java
public java.lang.String getConnectionStatus();
```

- *Type:* java.lang.String

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.connectionString"></a>

```java
public DatabaseExternalDatabaseConnectorConnectionStringOutputReference getConnectionString();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference">DatabaseExternalDatabaseConnectorConnectionStringOutputReference</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeConnectionStatusLastUpdated`<sup>Required</sup> <a name="timeConnectionStatusLastUpdated" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.timeConnectionStatusLastUpdated"></a>

```java
public java.lang.String getTimeConnectionStatusLastUpdated();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.timeouts"></a>

```java
public DatabaseExternalDatabaseConnectorTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference">DatabaseExternalDatabaseConnectorTimeoutsOutputReference</a>

---

##### `connectionCredentialsInput`<sup>Optional</sup> <a name="connectionCredentialsInput" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.connectionCredentialsInput"></a>

```java
public DatabaseExternalDatabaseConnectorConnectionCredentials getConnectionCredentialsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentials">DatabaseExternalDatabaseConnectorConnectionCredentials</a>

---

##### `connectionStringInput`<sup>Optional</sup> <a name="connectionStringInput" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.connectionStringInput"></a>

```java
public DatabaseExternalDatabaseConnectorConnectionString getConnectionStringInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionString">DatabaseExternalDatabaseConnectorConnectionString</a>

---

##### `connectorAgentIdInput`<sup>Optional</sup> <a name="connectorAgentIdInput" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.connectorAgentIdInput"></a>

```java
public java.lang.String getConnectorAgentIdInput();
```

- *Type:* java.lang.String

---

##### `connectorTypeInput`<sup>Optional</sup> <a name="connectorTypeInput" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.connectorTypeInput"></a>

```java
public java.lang.String getConnectorTypeInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `externalDatabaseIdInput`<sup>Optional</sup> <a name="externalDatabaseIdInput" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.externalDatabaseIdInput"></a>

```java
public java.lang.String getExternalDatabaseIdInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeouts">DatabaseExternalDatabaseConnectorTimeouts</a>

---

##### `connectorAgentId`<sup>Required</sup> <a name="connectorAgentId" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.connectorAgentId"></a>

```java
public java.lang.String getConnectorAgentId();
```

- *Type:* java.lang.String

---

##### `connectorType`<sup>Required</sup> <a name="connectorType" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.connectorType"></a>

```java
public java.lang.String getConnectorType();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `externalDatabaseId`<sup>Required</sup> <a name="externalDatabaseId" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.externalDatabaseId"></a>

```java
public java.lang.String getExternalDatabaseId();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseExternalDatabaseConnectorConfig <a name="DatabaseExternalDatabaseConnectorConfig" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_external_database_connector.DatabaseExternalDatabaseConnectorConfig;

DatabaseExternalDatabaseConnectorConfig.builder()
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
    .connectionCredentials(DatabaseExternalDatabaseConnectorConnectionCredentials)
    .connectionString(DatabaseExternalDatabaseConnectorConnectionString)
    .connectorAgentId(java.lang.String)
    .displayName(java.lang.String)
    .externalDatabaseId(java.lang.String)
//  .connectorType(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .timeouts(DatabaseExternalDatabaseConnectorTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.connectionCredentials">connectionCredentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentials">DatabaseExternalDatabaseConnectorConnectionCredentials</a></code> | connection_credentials block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.connectionString">connectionString</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionString">DatabaseExternalDatabaseConnectorConnectionString</a></code> | connection_string block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.connectorAgentId">connectorAgentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#connector_agent_id DatabaseExternalDatabaseConnector#connector_agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#display_name DatabaseExternalDatabaseConnector#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.externalDatabaseId">externalDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#external_database_id DatabaseExternalDatabaseConnector#external_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.connectorType">connectorType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#connector_type DatabaseExternalDatabaseConnector#connector_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#defined_tags DatabaseExternalDatabaseConnector#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#freeform_tags DatabaseExternalDatabaseConnector#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#id DatabaseExternalDatabaseConnector#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeouts">DatabaseExternalDatabaseConnectorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `connectionCredentials`<sup>Required</sup> <a name="connectionCredentials" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.connectionCredentials"></a>

```java
public DatabaseExternalDatabaseConnectorConnectionCredentials getConnectionCredentials();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentials">DatabaseExternalDatabaseConnectorConnectionCredentials</a>

connection_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#connection_credentials DatabaseExternalDatabaseConnector#connection_credentials}

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.connectionString"></a>

```java
public DatabaseExternalDatabaseConnectorConnectionString getConnectionString();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionString">DatabaseExternalDatabaseConnectorConnectionString</a>

connection_string block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#connection_string DatabaseExternalDatabaseConnector#connection_string}

---

##### `connectorAgentId`<sup>Required</sup> <a name="connectorAgentId" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.connectorAgentId"></a>

```java
public java.lang.String getConnectorAgentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#connector_agent_id DatabaseExternalDatabaseConnector#connector_agent_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#display_name DatabaseExternalDatabaseConnector#display_name}.

---

##### `externalDatabaseId`<sup>Required</sup> <a name="externalDatabaseId" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.externalDatabaseId"></a>

```java
public java.lang.String getExternalDatabaseId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#external_database_id DatabaseExternalDatabaseConnector#external_database_id}.

---

##### `connectorType`<sup>Optional</sup> <a name="connectorType" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.connectorType"></a>

```java
public java.lang.String getConnectorType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#connector_type DatabaseExternalDatabaseConnector#connector_type}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#defined_tags DatabaseExternalDatabaseConnector#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#freeform_tags DatabaseExternalDatabaseConnector#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#id DatabaseExternalDatabaseConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.timeouts"></a>

```java
public DatabaseExternalDatabaseConnectorTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeouts">DatabaseExternalDatabaseConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#timeouts DatabaseExternalDatabaseConnector#timeouts}

---

### DatabaseExternalDatabaseConnectorConnectionCredentials <a name="DatabaseExternalDatabaseConnectorConnectionCredentials" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentials.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_external_database_connector.DatabaseExternalDatabaseConnectorConnectionCredentials;

DatabaseExternalDatabaseConnectorConnectionCredentials.builder()
//  .credentialName(java.lang.String)
//  .credentialType(java.lang.String)
//  .password(java.lang.String)
//  .role(java.lang.String)
//  .sslSecretId(java.lang.String)
//  .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentials.property.credentialName">credentialName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#credential_name DatabaseExternalDatabaseConnector#credential_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentials.property.credentialType">credentialType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#credential_type DatabaseExternalDatabaseConnector#credential_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentials.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#password DatabaseExternalDatabaseConnector#password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentials.property.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#role DatabaseExternalDatabaseConnector#role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentials.property.sslSecretId">sslSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#ssl_secret_id DatabaseExternalDatabaseConnector#ssl_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentials.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#username DatabaseExternalDatabaseConnector#username}. |

---

##### `credentialName`<sup>Optional</sup> <a name="credentialName" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentials.property.credentialName"></a>

```java
public java.lang.String getCredentialName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#credential_name DatabaseExternalDatabaseConnector#credential_name}.

---

##### `credentialType`<sup>Optional</sup> <a name="credentialType" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentials.property.credentialType"></a>

```java
public java.lang.String getCredentialType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#credential_type DatabaseExternalDatabaseConnector#credential_type}.

---

##### `password`<sup>Optional</sup> <a name="password" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentials.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#password DatabaseExternalDatabaseConnector#password}.

---

##### `role`<sup>Optional</sup> <a name="role" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentials.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#role DatabaseExternalDatabaseConnector#role}.

---

##### `sslSecretId`<sup>Optional</sup> <a name="sslSecretId" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentials.property.sslSecretId"></a>

```java
public java.lang.String getSslSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#ssl_secret_id DatabaseExternalDatabaseConnector#ssl_secret_id}.

---

##### `username`<sup>Optional</sup> <a name="username" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentials.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#username DatabaseExternalDatabaseConnector#username}.

---

### DatabaseExternalDatabaseConnectorConnectionString <a name="DatabaseExternalDatabaseConnectorConnectionString" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionString"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionString.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_external_database_connector.DatabaseExternalDatabaseConnectorConnectionString;

DatabaseExternalDatabaseConnectorConnectionString.builder()
    .hostname(java.lang.String)
    .port(java.lang.Number)
    .protocol(java.lang.String)
    .service(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionString.property.hostname">hostname</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#hostname DatabaseExternalDatabaseConnector#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionString.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#port DatabaseExternalDatabaseConnector#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionString.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#protocol DatabaseExternalDatabaseConnector#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionString.property.service">service</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#service DatabaseExternalDatabaseConnector#service}. |

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionString.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#hostname DatabaseExternalDatabaseConnector#hostname}.

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionString.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#port DatabaseExternalDatabaseConnector#port}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionString.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#protocol DatabaseExternalDatabaseConnector#protocol}.

---

##### `service`<sup>Required</sup> <a name="service" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionString.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#service DatabaseExternalDatabaseConnector#service}.

---

### DatabaseExternalDatabaseConnectorTimeouts <a name="DatabaseExternalDatabaseConnectorTimeouts" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_external_database_connector.DatabaseExternalDatabaseConnectorTimeouts;

DatabaseExternalDatabaseConnectorTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#create DatabaseExternalDatabaseConnector#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#delete DatabaseExternalDatabaseConnector#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#update DatabaseExternalDatabaseConnector#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#create DatabaseExternalDatabaseConnector#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#delete DatabaseExternalDatabaseConnector#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#update DatabaseExternalDatabaseConnector#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference <a name="DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_external_database_connector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference;

new DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.resetCredentialName">resetCredentialName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.resetCredentialType">resetCredentialType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.resetRole">resetRole</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.resetSslSecretId">resetSslSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCredentialName` <a name="resetCredentialName" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.resetCredentialName"></a>

```java
public void resetCredentialName()
```

##### `resetCredentialType` <a name="resetCredentialType" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.resetCredentialType"></a>

```java
public void resetCredentialType()
```

##### `resetPassword` <a name="resetPassword" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetRole` <a name="resetRole" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.resetRole"></a>

```java
public void resetRole()
```

##### `resetSslSecretId` <a name="resetSslSecretId" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.resetSslSecretId"></a>

```java
public void resetSslSecretId()
```

##### `resetUsername` <a name="resetUsername" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.resetUsername"></a>

```java
public void resetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.property.credentialNameInput">credentialNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.property.credentialTypeInput">credentialTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.property.sslSecretIdInput">sslSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.property.credentialName">credentialName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.property.credentialType">credentialType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.property.sslSecretId">sslSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentials">DatabaseExternalDatabaseConnectorConnectionCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `credentialNameInput`<sup>Optional</sup> <a name="credentialNameInput" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.property.credentialNameInput"></a>

```java
public java.lang.String getCredentialNameInput();
```

- *Type:* java.lang.String

---

##### `credentialTypeInput`<sup>Optional</sup> <a name="credentialTypeInput" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.property.credentialTypeInput"></a>

```java
public java.lang.String getCredentialTypeInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `sslSecretIdInput`<sup>Optional</sup> <a name="sslSecretIdInput" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.property.sslSecretIdInput"></a>

```java
public java.lang.String getSslSecretIdInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `credentialName`<sup>Required</sup> <a name="credentialName" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.property.credentialName"></a>

```java
public java.lang.String getCredentialName();
```

- *Type:* java.lang.String

---

##### `credentialType`<sup>Required</sup> <a name="credentialType" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.property.credentialType"></a>

```java
public java.lang.String getCredentialType();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `sslSecretId`<sup>Required</sup> <a name="sslSecretId" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.property.sslSecretId"></a>

```java
public java.lang.String getSslSecretId();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.property.internalValue"></a>

```java
public DatabaseExternalDatabaseConnectorConnectionCredentials getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentials">DatabaseExternalDatabaseConnectorConnectionCredentials</a>

---


### DatabaseExternalDatabaseConnectorConnectionStringOutputReference <a name="DatabaseExternalDatabaseConnectorConnectionStringOutputReference" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_external_database_connector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference;

new DatabaseExternalDatabaseConnectorConnectionStringOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionString">DatabaseExternalDatabaseConnectorConnectionString</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.property.internalValue"></a>

```java
public DatabaseExternalDatabaseConnectorConnectionString getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionString">DatabaseExternalDatabaseConnectorConnectionString</a>

---


### DatabaseExternalDatabaseConnectorTimeoutsOutputReference <a name="DatabaseExternalDatabaseConnectorTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_external_database_connector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference;

new DatabaseExternalDatabaseConnectorTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeouts">DatabaseExternalDatabaseConnectorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeouts">DatabaseExternalDatabaseConnectorTimeouts</a>

---



