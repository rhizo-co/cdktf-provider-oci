# `fleetSoftwareUpdateFsuCollection` Submodule <a name="`fleetSoftwareUpdateFsuCollection` Submodule" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FleetSoftwareUpdateFsuCollection <a name="FleetSoftwareUpdateFsuCollection" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection oci_fleet_software_update_fsu_collection}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_software_update_fsu_collection.FleetSoftwareUpdateFsuCollection;

FleetSoftwareUpdateFsuCollection.Builder.create(Construct scope, java.lang.String id)
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
    .serviceType(java.lang.String)
    .sourceMajorVersion(java.lang.String)
    .type(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .fleetDiscovery(FleetSoftwareUpdateFsuCollectionFleetDiscovery)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .timeouts(FleetSoftwareUpdateFsuCollectionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#compartment_id FleetSoftwareUpdateFsuCollection#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.serviceType">serviceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#service_type FleetSoftwareUpdateFsuCollection#service_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.sourceMajorVersion">sourceMajorVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#source_major_version FleetSoftwareUpdateFsuCollection#source_major_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#type FleetSoftwareUpdateFsuCollection#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#defined_tags FleetSoftwareUpdateFsuCollection#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#display_name FleetSoftwareUpdateFsuCollection#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.fleetDiscovery">fleetDiscovery</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscovery">FleetSoftwareUpdateFsuCollectionFleetDiscovery</a></code> | fleet_discovery block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#freeform_tags FleetSoftwareUpdateFsuCollection#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#id FleetSoftwareUpdateFsuCollection#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeouts">FleetSoftwareUpdateFsuCollectionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#compartment_id FleetSoftwareUpdateFsuCollection#compartment_id}.

---

##### `serviceType`<sup>Required</sup> <a name="serviceType" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.serviceType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#service_type FleetSoftwareUpdateFsuCollection#service_type}.

---

##### `sourceMajorVersion`<sup>Required</sup> <a name="sourceMajorVersion" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.sourceMajorVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#source_major_version FleetSoftwareUpdateFsuCollection#source_major_version}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#type FleetSoftwareUpdateFsuCollection#type}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#defined_tags FleetSoftwareUpdateFsuCollection#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#display_name FleetSoftwareUpdateFsuCollection#display_name}.

---

##### `fleetDiscovery`<sup>Optional</sup> <a name="fleetDiscovery" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.fleetDiscovery"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscovery">FleetSoftwareUpdateFsuCollectionFleetDiscovery</a>

fleet_discovery block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#fleet_discovery FleetSoftwareUpdateFsuCollection#fleet_discovery}

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#freeform_tags FleetSoftwareUpdateFsuCollection#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#id FleetSoftwareUpdateFsuCollection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeouts">FleetSoftwareUpdateFsuCollectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#timeouts FleetSoftwareUpdateFsuCollection#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.putFleetDiscovery">putFleetDiscovery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.resetFleetDiscovery">resetFleetDiscovery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFleetDiscovery` <a name="putFleetDiscovery" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.putFleetDiscovery"></a>

```java
public void putFleetDiscovery(FleetSoftwareUpdateFsuCollectionFleetDiscovery value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.putFleetDiscovery.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscovery">FleetSoftwareUpdateFsuCollectionFleetDiscovery</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.putTimeouts"></a>

```java
public void putTimeouts(FleetSoftwareUpdateFsuCollectionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeouts">FleetSoftwareUpdateFsuCollectionTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFleetDiscovery` <a name="resetFleetDiscovery" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.resetFleetDiscovery"></a>

```java
public void resetFleetDiscovery()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FleetSoftwareUpdateFsuCollection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_software_update_fsu_collection.FleetSoftwareUpdateFsuCollection;

FleetSoftwareUpdateFsuCollection.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_software_update_fsu_collection.FleetSoftwareUpdateFsuCollection;

FleetSoftwareUpdateFsuCollection.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_software_update_fsu_collection.FleetSoftwareUpdateFsuCollection;

FleetSoftwareUpdateFsuCollection.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_software_update_fsu_collection.FleetSoftwareUpdateFsuCollection;

FleetSoftwareUpdateFsuCollection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),FleetSoftwareUpdateFsuCollection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a FleetSoftwareUpdateFsuCollection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the FleetSoftwareUpdateFsuCollection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing FleetSoftwareUpdateFsuCollection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the FleetSoftwareUpdateFsuCollection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.activeFsuCycle">activeFsuCycle</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList">FleetSoftwareUpdateFsuCollectionActiveFsuCycleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.fleetDiscovery">fleetDiscovery</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference">FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.targetCount">targetCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference">FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.fleetDiscoveryInput">fleetDiscoveryInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscovery">FleetSoftwareUpdateFsuCollectionFleetDiscovery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.serviceTypeInput">serviceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.sourceMajorVersionInput">sourceMajorVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeouts">FleetSoftwareUpdateFsuCollectionTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.serviceType">serviceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.sourceMajorVersion">sourceMajorVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `activeFsuCycle`<sup>Required</sup> <a name="activeFsuCycle" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.activeFsuCycle"></a>

```java
public FleetSoftwareUpdateFsuCollectionActiveFsuCycleList getActiveFsuCycle();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList">FleetSoftwareUpdateFsuCollectionActiveFsuCycleList</a>

---

##### `fleetDiscovery`<sup>Required</sup> <a name="fleetDiscovery" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.fleetDiscovery"></a>

```java
public FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference getFleetDiscovery();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference">FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `targetCount`<sup>Required</sup> <a name="targetCount" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.targetCount"></a>

```java
public java.lang.Number getTargetCount();
```

- *Type:* java.lang.Number

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.timeouts"></a>

```java
public FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference">FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `fleetDiscoveryInput`<sup>Optional</sup> <a name="fleetDiscoveryInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.fleetDiscoveryInput"></a>

```java
public FleetSoftwareUpdateFsuCollectionFleetDiscovery getFleetDiscoveryInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscovery">FleetSoftwareUpdateFsuCollectionFleetDiscovery</a>

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `serviceTypeInput`<sup>Optional</sup> <a name="serviceTypeInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.serviceTypeInput"></a>

```java
public java.lang.String getServiceTypeInput();
```

- *Type:* java.lang.String

---

##### `sourceMajorVersionInput`<sup>Optional</sup> <a name="sourceMajorVersionInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.sourceMajorVersionInput"></a>

```java
public java.lang.String getSourceMajorVersionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeouts">FleetSoftwareUpdateFsuCollectionTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `serviceType`<sup>Required</sup> <a name="serviceType" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.serviceType"></a>

```java
public java.lang.String getServiceType();
```

- *Type:* java.lang.String

---

##### `sourceMajorVersion`<sup>Required</sup> <a name="sourceMajorVersion" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.sourceMajorVersion"></a>

```java
public java.lang.String getSourceMajorVersion();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FleetSoftwareUpdateFsuCollectionActiveFsuCycle <a name="FleetSoftwareUpdateFsuCollectionActiveFsuCycle" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycle"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycle.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_software_update_fsu_collection.FleetSoftwareUpdateFsuCollectionActiveFsuCycle;

FleetSoftwareUpdateFsuCollectionActiveFsuCycle.builder()
    .build();
```


### FleetSoftwareUpdateFsuCollectionConfig <a name="FleetSoftwareUpdateFsuCollectionConfig" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_software_update_fsu_collection.FleetSoftwareUpdateFsuCollectionConfig;

FleetSoftwareUpdateFsuCollectionConfig.builder()
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
    .serviceType(java.lang.String)
    .sourceMajorVersion(java.lang.String)
    .type(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .fleetDiscovery(FleetSoftwareUpdateFsuCollectionFleetDiscovery)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .timeouts(FleetSoftwareUpdateFsuCollectionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#compartment_id FleetSoftwareUpdateFsuCollection#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.serviceType">serviceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#service_type FleetSoftwareUpdateFsuCollection#service_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.sourceMajorVersion">sourceMajorVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#source_major_version FleetSoftwareUpdateFsuCollection#source_major_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#type FleetSoftwareUpdateFsuCollection#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#defined_tags FleetSoftwareUpdateFsuCollection#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#display_name FleetSoftwareUpdateFsuCollection#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.fleetDiscovery">fleetDiscovery</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscovery">FleetSoftwareUpdateFsuCollectionFleetDiscovery</a></code> | fleet_discovery block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#freeform_tags FleetSoftwareUpdateFsuCollection#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#id FleetSoftwareUpdateFsuCollection#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeouts">FleetSoftwareUpdateFsuCollectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#compartment_id FleetSoftwareUpdateFsuCollection#compartment_id}.

---

##### `serviceType`<sup>Required</sup> <a name="serviceType" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.serviceType"></a>

```java
public java.lang.String getServiceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#service_type FleetSoftwareUpdateFsuCollection#service_type}.

---

##### `sourceMajorVersion`<sup>Required</sup> <a name="sourceMajorVersion" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.sourceMajorVersion"></a>

```java
public java.lang.String getSourceMajorVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#source_major_version FleetSoftwareUpdateFsuCollection#source_major_version}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#type FleetSoftwareUpdateFsuCollection#type}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#defined_tags FleetSoftwareUpdateFsuCollection#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#display_name FleetSoftwareUpdateFsuCollection#display_name}.

---

##### `fleetDiscovery`<sup>Optional</sup> <a name="fleetDiscovery" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.fleetDiscovery"></a>

```java
public FleetSoftwareUpdateFsuCollectionFleetDiscovery getFleetDiscovery();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscovery">FleetSoftwareUpdateFsuCollectionFleetDiscovery</a>

fleet_discovery block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#fleet_discovery FleetSoftwareUpdateFsuCollection#fleet_discovery}

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#freeform_tags FleetSoftwareUpdateFsuCollection#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#id FleetSoftwareUpdateFsuCollection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.timeouts"></a>

```java
public FleetSoftwareUpdateFsuCollectionTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeouts">FleetSoftwareUpdateFsuCollectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#timeouts FleetSoftwareUpdateFsuCollection#timeouts}

---

### FleetSoftwareUpdateFsuCollectionFleetDiscovery <a name="FleetSoftwareUpdateFsuCollectionFleetDiscovery" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscovery"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscovery.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_software_update_fsu_collection.FleetSoftwareUpdateFsuCollectionFleetDiscovery;

FleetSoftwareUpdateFsuCollectionFleetDiscovery.builder()
    .strategy(java.lang.String)
//  .filters(IResolvable)
//  .filters(java.util.List<FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters>)
//  .fsuDiscoveryId(java.lang.String)
//  .query(java.lang.String)
//  .targets(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscovery.property.strategy">strategy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#strategy FleetSoftwareUpdateFsuCollection#strategy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscovery.property.filters">filters</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters">FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters</a>></code> | filters block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscovery.property.fsuDiscoveryId">fsuDiscoveryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#fsu_discovery_id FleetSoftwareUpdateFsuCollection#fsu_discovery_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscovery.property.query">query</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#query FleetSoftwareUpdateFsuCollection#query}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscovery.property.targets">targets</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#targets FleetSoftwareUpdateFsuCollection#targets}. |

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscovery.property.strategy"></a>

```java
public java.lang.String getStrategy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#strategy FleetSoftwareUpdateFsuCollection#strategy}.

---

##### `filters`<sup>Optional</sup> <a name="filters" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscovery.property.filters"></a>

```java
public java.lang.Object getFilters();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters">FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters</a>>

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#filters FleetSoftwareUpdateFsuCollection#filters}

---

##### `fsuDiscoveryId`<sup>Optional</sup> <a name="fsuDiscoveryId" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscovery.property.fsuDiscoveryId"></a>

```java
public java.lang.String getFsuDiscoveryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#fsu_discovery_id FleetSoftwareUpdateFsuCollection#fsu_discovery_id}.

---

##### `query`<sup>Optional</sup> <a name="query" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscovery.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#query FleetSoftwareUpdateFsuCollection#query}.

---

##### `targets`<sup>Optional</sup> <a name="targets" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscovery.property.targets"></a>

```java
public java.util.List<java.lang.String> getTargets();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#targets FleetSoftwareUpdateFsuCollection#targets}.

---

### FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters <a name="FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_software_update_fsu_collection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters;

FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters.builder()
    .type(java.lang.String)
//  .entityType(java.lang.String)
//  .identifiers(java.util.List<java.lang.String>)
//  .mode(java.lang.String)
//  .names(java.util.List<java.lang.String>)
//  .operator(java.lang.String)
//  .tags(IResolvable)
//  .tags(java.util.List<FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags>)
//  .versions(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#type FleetSoftwareUpdateFsuCollection#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters.property.entityType">entityType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#entity_type FleetSoftwareUpdateFsuCollection#entity_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters.property.identifiers">identifiers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#identifiers FleetSoftwareUpdateFsuCollection#identifiers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters.property.mode">mode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#mode FleetSoftwareUpdateFsuCollection#mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters.property.names">names</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#names FleetSoftwareUpdateFsuCollection#names}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#operator FleetSoftwareUpdateFsuCollection#operator}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters.property.tags">tags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags">FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags</a>></code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters.property.versions">versions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#versions FleetSoftwareUpdateFsuCollection#versions}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#type FleetSoftwareUpdateFsuCollection#type}.

---

##### `entityType`<sup>Optional</sup> <a name="entityType" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters.property.entityType"></a>

```java
public java.lang.String getEntityType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#entity_type FleetSoftwareUpdateFsuCollection#entity_type}.

---

##### `identifiers`<sup>Optional</sup> <a name="identifiers" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters.property.identifiers"></a>

```java
public java.util.List<java.lang.String> getIdentifiers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#identifiers FleetSoftwareUpdateFsuCollection#identifiers}.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#mode FleetSoftwareUpdateFsuCollection#mode}.

---

##### `names`<sup>Optional</sup> <a name="names" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters.property.names"></a>

```java
public java.util.List<java.lang.String> getNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#names FleetSoftwareUpdateFsuCollection#names}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#operator FleetSoftwareUpdateFsuCollection#operator}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters.property.tags"></a>

```java
public java.lang.Object getTags();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags">FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags</a>>

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#tags FleetSoftwareUpdateFsuCollection#tags}

---

##### `versions`<sup>Optional</sup> <a name="versions" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters.property.versions"></a>

```java
public java.util.List<java.lang.String> getVersions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#versions FleetSoftwareUpdateFsuCollection#versions}.

---

### FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags <a name="FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_software_update_fsu_collection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags;

FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags.builder()
    .key(java.lang.String)
    .value(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#key FleetSoftwareUpdateFsuCollection#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#value FleetSoftwareUpdateFsuCollection#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#namespace FleetSoftwareUpdateFsuCollection#namespace}. |

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#key FleetSoftwareUpdateFsuCollection#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#value FleetSoftwareUpdateFsuCollection#value}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#namespace FleetSoftwareUpdateFsuCollection#namespace}.

---

### FleetSoftwareUpdateFsuCollectionTimeouts <a name="FleetSoftwareUpdateFsuCollectionTimeouts" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_software_update_fsu_collection.FleetSoftwareUpdateFsuCollectionTimeouts;

FleetSoftwareUpdateFsuCollectionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#create FleetSoftwareUpdateFsuCollection#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#delete FleetSoftwareUpdateFsuCollection#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#update FleetSoftwareUpdateFsuCollection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#create FleetSoftwareUpdateFsuCollection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#delete FleetSoftwareUpdateFsuCollection#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#update FleetSoftwareUpdateFsuCollection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FleetSoftwareUpdateFsuCollectionActiveFsuCycleList <a name="FleetSoftwareUpdateFsuCollectionActiveFsuCycleList" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_software_update_fsu_collection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList;

new FleetSoftwareUpdateFsuCollectionActiveFsuCycleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.get"></a>

```java
public FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference <a name="FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_software_update_fsu_collection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference;

new FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycle">FleetSoftwareUpdateFsuCollectionActiveFsuCycle</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.property.internalValue"></a>

```java
public FleetSoftwareUpdateFsuCollectionActiveFsuCycle getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycle">FleetSoftwareUpdateFsuCollectionActiveFsuCycle</a>

---


### FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList <a name="FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_software_update_fsu_collection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList;

new FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.get"></a>

```java
public FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters">FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters">FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters</a>>

---


### FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference <a name="FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_software_update_fsu_collection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference;

new FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.resetEntityType">resetEntityType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.resetIdentifiers">resetIdentifiers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.resetNames">resetNames</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.resetVersions">resetVersions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTags` <a name="putTags" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.putTags"></a>

```java
public void putTags(IResolvable OR java.util.List<FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.putTags.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags">FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags</a>>

---

##### `resetEntityType` <a name="resetEntityType" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.resetEntityType"></a>

```java
public void resetEntityType()
```

##### `resetIdentifiers` <a name="resetIdentifiers" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.resetIdentifiers"></a>

```java
public void resetIdentifiers()
```

##### `resetMode` <a name="resetMode" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.resetMode"></a>

```java
public void resetMode()
```

##### `resetNames` <a name="resetNames" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.resetNames"></a>

```java
public void resetNames()
```

##### `resetOperator` <a name="resetOperator" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.resetOperator"></a>

```java
public void resetOperator()
```

##### `resetTags` <a name="resetTags" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.resetTags"></a>

```java
public void resetTags()
```

##### `resetVersions` <a name="resetVersions" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.resetVersions"></a>

```java
public void resetVersions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList">FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.entityTypeInput">entityTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.identifiersInput">identifiersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.namesInput">namesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.tagsInput">tagsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags">FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.versionsInput">versionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.entityType">entityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.identifiers">identifiers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.names">names</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.versions">versions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters">FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.tags"></a>

```java
public FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList getTags();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList">FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList</a>

---

##### `entityTypeInput`<sup>Optional</sup> <a name="entityTypeInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.entityTypeInput"></a>

```java
public java.lang.String getEntityTypeInput();
```

- *Type:* java.lang.String

---

##### `identifiersInput`<sup>Optional</sup> <a name="identifiersInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.identifiersInput"></a>

```java
public java.util.List<java.lang.String> getIdentifiersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `namesInput`<sup>Optional</sup> <a name="namesInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.namesInput"></a>

```java
public java.util.List<java.lang.String> getNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.tagsInput"></a>

```java
public java.lang.Object getTagsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags">FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags</a>>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `versionsInput`<sup>Optional</sup> <a name="versionsInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.versionsInput"></a>

```java
public java.util.List<java.lang.String> getVersionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.entityType"></a>

```java
public java.lang.String getEntityType();
```

- *Type:* java.lang.String

---

##### `identifiers`<sup>Required</sup> <a name="identifiers" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.identifiers"></a>

```java
public java.util.List<java.lang.String> getIdentifiers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `mode`<sup>Required</sup> <a name="mode" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `names`<sup>Required</sup> <a name="names" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.names"></a>

```java
public java.util.List<java.lang.String> getNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `operator`<sup>Required</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `versions`<sup>Required</sup> <a name="versions" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.versions"></a>

```java
public java.util.List<java.lang.String> getVersions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters">FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters</a>

---


### FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList <a name="FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_software_update_fsu_collection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList;

new FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.get"></a>

```java
public FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags">FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags">FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags</a>>

---


### FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference <a name="FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_software_update_fsu_collection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference;

new FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNamespace` <a name="resetNamespace" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags">FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags">FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags</a>

---


### FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference <a name="FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_software_update_fsu_collection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference;

new FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.putFilters">putFilters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.resetFilters">resetFilters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.resetFsuDiscoveryId">resetFsuDiscoveryId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.resetQuery">resetQuery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.resetTargets">resetTargets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFilters` <a name="putFilters" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.putFilters"></a>

```java
public void putFilters(IResolvable OR java.util.List<FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.putFilters.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters">FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters</a>>

---

##### `resetFilters` <a name="resetFilters" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.resetFilters"></a>

```java
public void resetFilters()
```

##### `resetFsuDiscoveryId` <a name="resetFsuDiscoveryId" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.resetFsuDiscoveryId"></a>

```java
public void resetFsuDiscoveryId()
```

##### `resetQuery` <a name="resetQuery" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.resetQuery"></a>

```java
public void resetQuery()
```

##### `resetTargets` <a name="resetTargets" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.resetTargets"></a>

```java
public void resetTargets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.filters">filters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList">FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.filtersInput">filtersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters">FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.fsuDiscoveryIdInput">fsuDiscoveryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.queryInput">queryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.strategyInput">strategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.targetsInput">targetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.fsuDiscoveryId">fsuDiscoveryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.strategy">strategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.targets">targets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscovery">FleetSoftwareUpdateFsuCollectionFleetDiscovery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `filters`<sup>Required</sup> <a name="filters" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.filters"></a>

```java
public FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList getFilters();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList">FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList</a>

---

##### `filtersInput`<sup>Optional</sup> <a name="filtersInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.filtersInput"></a>

```java
public java.lang.Object getFiltersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters">FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters</a>>

---

##### `fsuDiscoveryIdInput`<sup>Optional</sup> <a name="fsuDiscoveryIdInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.fsuDiscoveryIdInput"></a>

```java
public java.lang.String getFsuDiscoveryIdInput();
```

- *Type:* java.lang.String

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.queryInput"></a>

```java
public java.lang.String getQueryInput();
```

- *Type:* java.lang.String

---

##### `strategyInput`<sup>Optional</sup> <a name="strategyInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.strategyInput"></a>

```java
public java.lang.String getStrategyInput();
```

- *Type:* java.lang.String

---

##### `targetsInput`<sup>Optional</sup> <a name="targetsInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.targetsInput"></a>

```java
public java.util.List<java.lang.String> getTargetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fsuDiscoveryId`<sup>Required</sup> <a name="fsuDiscoveryId" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.fsuDiscoveryId"></a>

```java
public java.lang.String getFsuDiscoveryId();
```

- *Type:* java.lang.String

---

##### `query`<sup>Required</sup> <a name="query" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.strategy"></a>

```java
public java.lang.String getStrategy();
```

- *Type:* java.lang.String

---

##### `targets`<sup>Required</sup> <a name="targets" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.targets"></a>

```java
public java.util.List<java.lang.String> getTargets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.internalValue"></a>

```java
public FleetSoftwareUpdateFsuCollectionFleetDiscovery getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscovery">FleetSoftwareUpdateFsuCollectionFleetDiscovery</a>

---


### FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference <a name="FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_software_update_fsu_collection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference;

new FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeouts">FleetSoftwareUpdateFsuCollectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeouts">FleetSoftwareUpdateFsuCollectionTimeouts</a>

---



