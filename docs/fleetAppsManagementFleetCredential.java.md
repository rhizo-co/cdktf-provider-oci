# `fleetAppsManagementFleetCredential` Submodule <a name="`fleetAppsManagementFleetCredential` Submodule" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FleetAppsManagementFleetCredential <a name="FleetAppsManagementFleetCredential" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential oci_fleet_apps_management_fleet_credential}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_fleet_credential.FleetAppsManagementFleetCredential;

FleetAppsManagementFleetCredential.Builder.create(Construct scope, java.lang.String id)
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
    .displayName(java.lang.String)
    .entitySpecifics(FleetAppsManagementFleetCredentialEntitySpecifics)
    .fleetId(java.lang.String)
    .password(FleetAppsManagementFleetCredentialPassword)
    .user(FleetAppsManagementFleetCredentialUser)
//  .id(java.lang.String)
//  .timeouts(FleetAppsManagementFleetCredentialTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#compartment_id FleetAppsManagementFleetCredential#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#display_name FleetAppsManagementFleetCredential#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.entitySpecifics">entitySpecifics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecifics">FleetAppsManagementFleetCredentialEntitySpecifics</a></code> | entity_specifics block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.fleetId">fleetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#fleet_id FleetAppsManagementFleetCredential#fleet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.password">password</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword">FleetAppsManagementFleetCredentialPassword</a></code> | password block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.user">user</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser">FleetAppsManagementFleetCredentialUser</a></code> | user block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#id FleetAppsManagementFleetCredential#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeouts">FleetAppsManagementFleetCredentialTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#compartment_id FleetAppsManagementFleetCredential#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#display_name FleetAppsManagementFleetCredential#display_name}.

---

##### `entitySpecifics`<sup>Required</sup> <a name="entitySpecifics" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.entitySpecifics"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecifics">FleetAppsManagementFleetCredentialEntitySpecifics</a>

entity_specifics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#entity_specifics FleetAppsManagementFleetCredential#entity_specifics}

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.fleetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#fleet_id FleetAppsManagementFleetCredential#fleet_id}.

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.password"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword">FleetAppsManagementFleetCredentialPassword</a>

password block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#password FleetAppsManagementFleetCredential#password}

---

##### `user`<sup>Required</sup> <a name="user" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.user"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser">FleetAppsManagementFleetCredentialUser</a>

user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#user FleetAppsManagementFleetCredential#user}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#id FleetAppsManagementFleetCredential#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeouts">FleetAppsManagementFleetCredentialTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#timeouts FleetAppsManagementFleetCredential#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.putEntitySpecifics">putEntitySpecifics</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.putPassword">putPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.putUser">putUser</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEntitySpecifics` <a name="putEntitySpecifics" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.putEntitySpecifics"></a>

```java
public void putEntitySpecifics(FleetAppsManagementFleetCredentialEntitySpecifics value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.putEntitySpecifics.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecifics">FleetAppsManagementFleetCredentialEntitySpecifics</a>

---

##### `putPassword` <a name="putPassword" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.putPassword"></a>

```java
public void putPassword(FleetAppsManagementFleetCredentialPassword value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.putPassword.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword">FleetAppsManagementFleetCredentialPassword</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.putTimeouts"></a>

```java
public void putTimeouts(FleetAppsManagementFleetCredentialTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeouts">FleetAppsManagementFleetCredentialTimeouts</a>

---

##### `putUser` <a name="putUser" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.putUser"></a>

```java
public void putUser(FleetAppsManagementFleetCredentialUser value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.putUser.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser">FleetAppsManagementFleetCredentialUser</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FleetAppsManagementFleetCredential resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_fleet_credential.FleetAppsManagementFleetCredential;

FleetAppsManagementFleetCredential.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_fleet_credential.FleetAppsManagementFleetCredential;

FleetAppsManagementFleetCredential.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_fleet_credential.FleetAppsManagementFleetCredential;

FleetAppsManagementFleetCredential.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_fleet_credential.FleetAppsManagementFleetCredential;

FleetAppsManagementFleetCredential.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),FleetAppsManagementFleetCredential.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a FleetAppsManagementFleetCredential resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the FleetAppsManagementFleetCredential to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing FleetAppsManagementFleetCredential that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the FleetAppsManagementFleetCredential to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.entitySpecifics">entitySpecifics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference">FleetAppsManagementFleetCredentialEntitySpecificsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.password">password</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference">FleetAppsManagementFleetCredentialPasswordOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference">FleetAppsManagementFleetCredentialTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.user">user</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference">FleetAppsManagementFleetCredentialUserOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.entitySpecificsInput">entitySpecificsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecifics">FleetAppsManagementFleetCredentialEntitySpecifics</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.fleetIdInput">fleetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.passwordInput">passwordInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword">FleetAppsManagementFleetCredentialPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeouts">FleetAppsManagementFleetCredentialTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.userInput">userInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser">FleetAppsManagementFleetCredentialUser</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.fleetId">fleetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `entitySpecifics`<sup>Required</sup> <a name="entitySpecifics" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.entitySpecifics"></a>

```java
public FleetAppsManagementFleetCredentialEntitySpecificsOutputReference getEntitySpecifics();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference">FleetAppsManagementFleetCredentialEntitySpecificsOutputReference</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.password"></a>

```java
public FleetAppsManagementFleetCredentialPasswordOutputReference getPassword();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference">FleetAppsManagementFleetCredentialPasswordOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.timeouts"></a>

```java
public FleetAppsManagementFleetCredentialTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference">FleetAppsManagementFleetCredentialTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `user`<sup>Required</sup> <a name="user" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.user"></a>

```java
public FleetAppsManagementFleetCredentialUserOutputReference getUser();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference">FleetAppsManagementFleetCredentialUserOutputReference</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `entitySpecificsInput`<sup>Optional</sup> <a name="entitySpecificsInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.entitySpecificsInput"></a>

```java
public FleetAppsManagementFleetCredentialEntitySpecifics getEntitySpecificsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecifics">FleetAppsManagementFleetCredentialEntitySpecifics</a>

---

##### `fleetIdInput`<sup>Optional</sup> <a name="fleetIdInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.fleetIdInput"></a>

```java
public java.lang.String getFleetIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.passwordInput"></a>

```java
public FleetAppsManagementFleetCredentialPassword getPasswordInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword">FleetAppsManagementFleetCredentialPassword</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeouts">FleetAppsManagementFleetCredentialTimeouts</a>

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.userInput"></a>

```java
public FleetAppsManagementFleetCredentialUser getUserInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser">FleetAppsManagementFleetCredentialUser</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.fleetId"></a>

```java
public java.lang.String getFleetId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FleetAppsManagementFleetCredentialConfig <a name="FleetAppsManagementFleetCredentialConfig" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_fleet_credential.FleetAppsManagementFleetCredentialConfig;

FleetAppsManagementFleetCredentialConfig.builder()
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
    .displayName(java.lang.String)
    .entitySpecifics(FleetAppsManagementFleetCredentialEntitySpecifics)
    .fleetId(java.lang.String)
    .password(FleetAppsManagementFleetCredentialPassword)
    .user(FleetAppsManagementFleetCredentialUser)
//  .id(java.lang.String)
//  .timeouts(FleetAppsManagementFleetCredentialTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#compartment_id FleetAppsManagementFleetCredential#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#display_name FleetAppsManagementFleetCredential#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.entitySpecifics">entitySpecifics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecifics">FleetAppsManagementFleetCredentialEntitySpecifics</a></code> | entity_specifics block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.fleetId">fleetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#fleet_id FleetAppsManagementFleetCredential#fleet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.password">password</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword">FleetAppsManagementFleetCredentialPassword</a></code> | password block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.user">user</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser">FleetAppsManagementFleetCredentialUser</a></code> | user block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#id FleetAppsManagementFleetCredential#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeouts">FleetAppsManagementFleetCredentialTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#compartment_id FleetAppsManagementFleetCredential#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#display_name FleetAppsManagementFleetCredential#display_name}.

---

##### `entitySpecifics`<sup>Required</sup> <a name="entitySpecifics" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.entitySpecifics"></a>

```java
public FleetAppsManagementFleetCredentialEntitySpecifics getEntitySpecifics();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecifics">FleetAppsManagementFleetCredentialEntitySpecifics</a>

entity_specifics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#entity_specifics FleetAppsManagementFleetCredential#entity_specifics}

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.fleetId"></a>

```java
public java.lang.String getFleetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#fleet_id FleetAppsManagementFleetCredential#fleet_id}.

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.password"></a>

```java
public FleetAppsManagementFleetCredentialPassword getPassword();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword">FleetAppsManagementFleetCredentialPassword</a>

password block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#password FleetAppsManagementFleetCredential#password}

---

##### `user`<sup>Required</sup> <a name="user" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.user"></a>

```java
public FleetAppsManagementFleetCredentialUser getUser();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser">FleetAppsManagementFleetCredentialUser</a>

user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#user FleetAppsManagementFleetCredential#user}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#id FleetAppsManagementFleetCredential#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.timeouts"></a>

```java
public FleetAppsManagementFleetCredentialTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeouts">FleetAppsManagementFleetCredentialTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#timeouts FleetAppsManagementFleetCredential#timeouts}

---

### FleetAppsManagementFleetCredentialEntitySpecifics <a name="FleetAppsManagementFleetCredentialEntitySpecifics" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecifics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecifics.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_fleet_credential.FleetAppsManagementFleetCredentialEntitySpecifics;

FleetAppsManagementFleetCredentialEntitySpecifics.builder()
    .credentialLevel(java.lang.String)
    .resourceId(java.lang.String)
    .target(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecifics.property.credentialLevel">credentialLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#credential_level FleetAppsManagementFleetCredential#credential_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecifics.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#resource_id FleetAppsManagementFleetCredential#resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecifics.property.target">target</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#target FleetAppsManagementFleetCredential#target}. |

---

##### `credentialLevel`<sup>Required</sup> <a name="credentialLevel" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecifics.property.credentialLevel"></a>

```java
public java.lang.String getCredentialLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#credential_level FleetAppsManagementFleetCredential#credential_level}.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecifics.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#resource_id FleetAppsManagementFleetCredential#resource_id}.

---

##### `target`<sup>Required</sup> <a name="target" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecifics.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#target FleetAppsManagementFleetCredential#target}.

---

### FleetAppsManagementFleetCredentialPassword <a name="FleetAppsManagementFleetCredentialPassword" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_fleet_credential.FleetAppsManagementFleetCredentialPassword;

FleetAppsManagementFleetCredentialPassword.builder()
    .credentialType(java.lang.String)
//  .keyId(java.lang.String)
//  .keyVersion(java.lang.String)
//  .secretId(java.lang.String)
//  .secretVersion(java.lang.String)
//  .value(java.lang.String)
//  .vaultId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword.property.credentialType">credentialType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#credential_type FleetAppsManagementFleetCredential#credential_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword.property.keyId">keyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#key_id FleetAppsManagementFleetCredential#key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword.property.keyVersion">keyVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#key_version FleetAppsManagementFleetCredential#key_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword.property.secretId">secretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#secret_id FleetAppsManagementFleetCredential#secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword.property.secretVersion">secretVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#secret_version FleetAppsManagementFleetCredential#secret_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#value FleetAppsManagementFleetCredential#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword.property.vaultId">vaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#vault_id FleetAppsManagementFleetCredential#vault_id}. |

---

##### `credentialType`<sup>Required</sup> <a name="credentialType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword.property.credentialType"></a>

```java
public java.lang.String getCredentialType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#credential_type FleetAppsManagementFleetCredential#credential_type}.

---

##### `keyId`<sup>Optional</sup> <a name="keyId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#key_id FleetAppsManagementFleetCredential#key_id}.

---

##### `keyVersion`<sup>Optional</sup> <a name="keyVersion" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword.property.keyVersion"></a>

```java
public java.lang.String getKeyVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#key_version FleetAppsManagementFleetCredential#key_version}.

---

##### `secretId`<sup>Optional</sup> <a name="secretId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#secret_id FleetAppsManagementFleetCredential#secret_id}.

---

##### `secretVersion`<sup>Optional</sup> <a name="secretVersion" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword.property.secretVersion"></a>

```java
public java.lang.String getSecretVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#secret_version FleetAppsManagementFleetCredential#secret_version}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#value FleetAppsManagementFleetCredential#value}.

---

##### `vaultId`<sup>Optional</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword.property.vaultId"></a>

```java
public java.lang.String getVaultId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#vault_id FleetAppsManagementFleetCredential#vault_id}.

---

### FleetAppsManagementFleetCredentialTimeouts <a name="FleetAppsManagementFleetCredentialTimeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_fleet_credential.FleetAppsManagementFleetCredentialTimeouts;

FleetAppsManagementFleetCredentialTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#create FleetAppsManagementFleetCredential#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#delete FleetAppsManagementFleetCredential#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#update FleetAppsManagementFleetCredential#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#create FleetAppsManagementFleetCredential#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#delete FleetAppsManagementFleetCredential#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#update FleetAppsManagementFleetCredential#update}.

---

### FleetAppsManagementFleetCredentialUser <a name="FleetAppsManagementFleetCredentialUser" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_fleet_credential.FleetAppsManagementFleetCredentialUser;

FleetAppsManagementFleetCredentialUser.builder()
    .credentialType(java.lang.String)
//  .keyId(java.lang.String)
//  .keyVersion(java.lang.String)
//  .secretId(java.lang.String)
//  .secretVersion(java.lang.String)
//  .value(java.lang.String)
//  .vaultId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser.property.credentialType">credentialType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#credential_type FleetAppsManagementFleetCredential#credential_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser.property.keyId">keyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#key_id FleetAppsManagementFleetCredential#key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser.property.keyVersion">keyVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#key_version FleetAppsManagementFleetCredential#key_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser.property.secretId">secretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#secret_id FleetAppsManagementFleetCredential#secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser.property.secretVersion">secretVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#secret_version FleetAppsManagementFleetCredential#secret_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#value FleetAppsManagementFleetCredential#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser.property.vaultId">vaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#vault_id FleetAppsManagementFleetCredential#vault_id}. |

---

##### `credentialType`<sup>Required</sup> <a name="credentialType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser.property.credentialType"></a>

```java
public java.lang.String getCredentialType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#credential_type FleetAppsManagementFleetCredential#credential_type}.

---

##### `keyId`<sup>Optional</sup> <a name="keyId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#key_id FleetAppsManagementFleetCredential#key_id}.

---

##### `keyVersion`<sup>Optional</sup> <a name="keyVersion" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser.property.keyVersion"></a>

```java
public java.lang.String getKeyVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#key_version FleetAppsManagementFleetCredential#key_version}.

---

##### `secretId`<sup>Optional</sup> <a name="secretId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#secret_id FleetAppsManagementFleetCredential#secret_id}.

---

##### `secretVersion`<sup>Optional</sup> <a name="secretVersion" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser.property.secretVersion"></a>

```java
public java.lang.String getSecretVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#secret_version FleetAppsManagementFleetCredential#secret_version}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#value FleetAppsManagementFleetCredential#value}.

---

##### `vaultId`<sup>Optional</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser.property.vaultId"></a>

```java
public java.lang.String getVaultId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#vault_id FleetAppsManagementFleetCredential#vault_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### FleetAppsManagementFleetCredentialEntitySpecificsOutputReference <a name="FleetAppsManagementFleetCredentialEntitySpecificsOutputReference" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_fleet_credential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference;

new FleetAppsManagementFleetCredentialEntitySpecificsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.property.credentialLevelInput">credentialLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.property.resourceIdInput">resourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.property.targetInput">targetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.property.credentialLevel">credentialLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecifics">FleetAppsManagementFleetCredentialEntitySpecifics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `credentialLevelInput`<sup>Optional</sup> <a name="credentialLevelInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.property.credentialLevelInput"></a>

```java
public java.lang.String getCredentialLevelInput();
```

- *Type:* java.lang.String

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.property.resourceIdInput"></a>

```java
public java.lang.String getResourceIdInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.property.targetInput"></a>

```java
public java.lang.String getTargetInput();
```

- *Type:* java.lang.String

---

##### `credentialLevel`<sup>Required</sup> <a name="credentialLevel" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.property.credentialLevel"></a>

```java
public java.lang.String getCredentialLevel();
```

- *Type:* java.lang.String

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.property.internalValue"></a>

```java
public FleetAppsManagementFleetCredentialEntitySpecifics getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecifics">FleetAppsManagementFleetCredentialEntitySpecifics</a>

---


### FleetAppsManagementFleetCredentialPasswordOutputReference <a name="FleetAppsManagementFleetCredentialPasswordOutputReference" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_fleet_credential.FleetAppsManagementFleetCredentialPasswordOutputReference;

new FleetAppsManagementFleetCredentialPasswordOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.resetKeyId">resetKeyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.resetKeyVersion">resetKeyVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.resetSecretId">resetSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.resetSecretVersion">resetSecretVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.resetValue">resetValue</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.resetVaultId">resetVaultId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKeyId` <a name="resetKeyId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.resetKeyId"></a>

```java
public void resetKeyId()
```

##### `resetKeyVersion` <a name="resetKeyVersion" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.resetKeyVersion"></a>

```java
public void resetKeyVersion()
```

##### `resetSecretId` <a name="resetSecretId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.resetSecretId"></a>

```java
public void resetSecretId()
```

##### `resetSecretVersion` <a name="resetSecretVersion" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.resetSecretVersion"></a>

```java
public void resetSecretVersion()
```

##### `resetValue` <a name="resetValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.resetValue"></a>

```java
public void resetValue()
```

##### `resetVaultId` <a name="resetVaultId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.resetVaultId"></a>

```java
public void resetVaultId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.credentialTypeInput">credentialTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.keyIdInput">keyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.keyVersionInput">keyVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.secretIdInput">secretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.secretVersionInput">secretVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.vaultIdInput">vaultIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.credentialType">credentialType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.keyId">keyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.keyVersion">keyVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.secretId">secretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.secretVersion">secretVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.vaultId">vaultId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword">FleetAppsManagementFleetCredentialPassword</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `credentialTypeInput`<sup>Optional</sup> <a name="credentialTypeInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.credentialTypeInput"></a>

```java
public java.lang.String getCredentialTypeInput();
```

- *Type:* java.lang.String

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.keyIdInput"></a>

```java
public java.lang.String getKeyIdInput();
```

- *Type:* java.lang.String

---

##### `keyVersionInput`<sup>Optional</sup> <a name="keyVersionInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.keyVersionInput"></a>

```java
public java.lang.String getKeyVersionInput();
```

- *Type:* java.lang.String

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.secretIdInput"></a>

```java
public java.lang.String getSecretIdInput();
```

- *Type:* java.lang.String

---

##### `secretVersionInput`<sup>Optional</sup> <a name="secretVersionInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.secretVersionInput"></a>

```java
public java.lang.String getSecretVersionInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `vaultIdInput`<sup>Optional</sup> <a name="vaultIdInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.vaultIdInput"></a>

```java
public java.lang.String getVaultIdInput();
```

- *Type:* java.lang.String

---

##### `credentialType`<sup>Required</sup> <a name="credentialType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.credentialType"></a>

```java
public java.lang.String getCredentialType();
```

- *Type:* java.lang.String

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

---

##### `keyVersion`<sup>Required</sup> <a name="keyVersion" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.keyVersion"></a>

```java
public java.lang.String getKeyVersion();
```

- *Type:* java.lang.String

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

---

##### `secretVersion`<sup>Required</sup> <a name="secretVersion" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.secretVersion"></a>

```java
public java.lang.String getSecretVersion();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.vaultId"></a>

```java
public java.lang.String getVaultId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.internalValue"></a>

```java
public FleetAppsManagementFleetCredentialPassword getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword">FleetAppsManagementFleetCredentialPassword</a>

---


### FleetAppsManagementFleetCredentialTimeoutsOutputReference <a name="FleetAppsManagementFleetCredentialTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_fleet_credential.FleetAppsManagementFleetCredentialTimeoutsOutputReference;

new FleetAppsManagementFleetCredentialTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeouts">FleetAppsManagementFleetCredentialTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeouts">FleetAppsManagementFleetCredentialTimeouts</a>

---


### FleetAppsManagementFleetCredentialUserOutputReference <a name="FleetAppsManagementFleetCredentialUserOutputReference" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_fleet_credential.FleetAppsManagementFleetCredentialUserOutputReference;

new FleetAppsManagementFleetCredentialUserOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.resetKeyId">resetKeyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.resetKeyVersion">resetKeyVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.resetSecretId">resetSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.resetSecretVersion">resetSecretVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.resetValue">resetValue</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.resetVaultId">resetVaultId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKeyId` <a name="resetKeyId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.resetKeyId"></a>

```java
public void resetKeyId()
```

##### `resetKeyVersion` <a name="resetKeyVersion" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.resetKeyVersion"></a>

```java
public void resetKeyVersion()
```

##### `resetSecretId` <a name="resetSecretId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.resetSecretId"></a>

```java
public void resetSecretId()
```

##### `resetSecretVersion` <a name="resetSecretVersion" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.resetSecretVersion"></a>

```java
public void resetSecretVersion()
```

##### `resetValue` <a name="resetValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.resetValue"></a>

```java
public void resetValue()
```

##### `resetVaultId` <a name="resetVaultId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.resetVaultId"></a>

```java
public void resetVaultId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.credentialTypeInput">credentialTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.keyIdInput">keyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.keyVersionInput">keyVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.secretIdInput">secretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.secretVersionInput">secretVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.vaultIdInput">vaultIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.credentialType">credentialType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.keyId">keyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.keyVersion">keyVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.secretId">secretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.secretVersion">secretVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.vaultId">vaultId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser">FleetAppsManagementFleetCredentialUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `credentialTypeInput`<sup>Optional</sup> <a name="credentialTypeInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.credentialTypeInput"></a>

```java
public java.lang.String getCredentialTypeInput();
```

- *Type:* java.lang.String

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.keyIdInput"></a>

```java
public java.lang.String getKeyIdInput();
```

- *Type:* java.lang.String

---

##### `keyVersionInput`<sup>Optional</sup> <a name="keyVersionInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.keyVersionInput"></a>

```java
public java.lang.String getKeyVersionInput();
```

- *Type:* java.lang.String

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.secretIdInput"></a>

```java
public java.lang.String getSecretIdInput();
```

- *Type:* java.lang.String

---

##### `secretVersionInput`<sup>Optional</sup> <a name="secretVersionInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.secretVersionInput"></a>

```java
public java.lang.String getSecretVersionInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `vaultIdInput`<sup>Optional</sup> <a name="vaultIdInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.vaultIdInput"></a>

```java
public java.lang.String getVaultIdInput();
```

- *Type:* java.lang.String

---

##### `credentialType`<sup>Required</sup> <a name="credentialType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.credentialType"></a>

```java
public java.lang.String getCredentialType();
```

- *Type:* java.lang.String

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

---

##### `keyVersion`<sup>Required</sup> <a name="keyVersion" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.keyVersion"></a>

```java
public java.lang.String getKeyVersion();
```

- *Type:* java.lang.String

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

---

##### `secretVersion`<sup>Required</sup> <a name="secretVersion" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.secretVersion"></a>

```java
public java.lang.String getSecretVersion();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.vaultId"></a>

```java
public java.lang.String getVaultId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.internalValue"></a>

```java
public FleetAppsManagementFleetCredentialUser getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser">FleetAppsManagementFleetCredentialUser</a>

---



