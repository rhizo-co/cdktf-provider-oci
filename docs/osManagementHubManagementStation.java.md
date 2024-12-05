# `osManagementHubManagementStation` Submodule <a name="`osManagementHubManagementStation` Submodule" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsManagementHubManagementStation <a name="OsManagementHubManagementStation" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station oci_os_management_hub_management_station}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_management_station.OsManagementHubManagementStation;

OsManagementHubManagementStation.Builder.create(Construct scope, java.lang.String id)
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
    .hostname(java.lang.String)
    .mirror(OsManagementHubManagementStationMirror)
    .proxy(OsManagementHubManagementStationProxy)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .refreshTrigger(java.lang.Number)
//  .timeouts(OsManagementHubManagementStationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#compartment_id OsManagementHubManagementStation#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#display_name OsManagementHubManagementStation#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.hostname">hostname</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#hostname OsManagementHubManagementStation#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.mirror">mirror</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirror">OsManagementHubManagementStationMirror</a></code> | mirror block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.proxy">proxy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxy">OsManagementHubManagementStationProxy</a></code> | proxy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#defined_tags OsManagementHubManagementStation#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#description OsManagementHubManagementStation#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#freeform_tags OsManagementHubManagementStation#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#id OsManagementHubManagementStation#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.refreshTrigger">refreshTrigger</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#refresh_trigger OsManagementHubManagementStation#refresh_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeouts">OsManagementHubManagementStationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#compartment_id OsManagementHubManagementStation#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#display_name OsManagementHubManagementStation#display_name}.

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.hostname"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#hostname OsManagementHubManagementStation#hostname}.

---

##### `mirror`<sup>Required</sup> <a name="mirror" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.mirror"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirror">OsManagementHubManagementStationMirror</a>

mirror block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#mirror OsManagementHubManagementStation#mirror}

---

##### `proxy`<sup>Required</sup> <a name="proxy" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.proxy"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxy">OsManagementHubManagementStationProxy</a>

proxy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#proxy OsManagementHubManagementStation#proxy}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#defined_tags OsManagementHubManagementStation#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#description OsManagementHubManagementStation#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#freeform_tags OsManagementHubManagementStation#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#id OsManagementHubManagementStation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `refreshTrigger`<sup>Optional</sup> <a name="refreshTrigger" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.refreshTrigger"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#refresh_trigger OsManagementHubManagementStation#refresh_trigger}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeouts">OsManagementHubManagementStationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#timeouts OsManagementHubManagementStation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.putMirror">putMirror</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.putProxy">putProxy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.resetRefreshTrigger">resetRefreshTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMirror` <a name="putMirror" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.putMirror"></a>

```java
public void putMirror(OsManagementHubManagementStationMirror value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.putMirror.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirror">OsManagementHubManagementStationMirror</a>

---

##### `putProxy` <a name="putProxy" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.putProxy"></a>

```java
public void putProxy(OsManagementHubManagementStationProxy value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.putProxy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxy">OsManagementHubManagementStationProxy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.putTimeouts"></a>

```java
public void putTimeouts(OsManagementHubManagementStationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeouts">OsManagementHubManagementStationTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.resetId"></a>

```java
public void resetId()
```

##### `resetRefreshTrigger` <a name="resetRefreshTrigger" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.resetRefreshTrigger"></a>

```java
public void resetRefreshTrigger()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OsManagementHubManagementStation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_management_station.OsManagementHubManagementStation;

OsManagementHubManagementStation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_management_station.OsManagementHubManagementStation;

OsManagementHubManagementStation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_management_station.OsManagementHubManagementStation;

OsManagementHubManagementStation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_management_station.OsManagementHubManagementStation;

OsManagementHubManagementStation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OsManagementHubManagementStation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a OsManagementHubManagementStation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OsManagementHubManagementStation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OsManagementHubManagementStation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the OsManagementHubManagementStation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.health">health</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList">OsManagementHubManagementStationHealthList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.managedInstanceId">managedInstanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.mirror">mirror</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference">OsManagementHubManagementStationMirrorOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.mirrorCapacity">mirrorCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.mirrorSyncStatus">mirrorSyncStatus</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList">OsManagementHubManagementStationMirrorSyncStatusList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.overallPercentage">overallPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.overallState">overallState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.profileId">profileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.proxy">proxy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference">OsManagementHubManagementStationProxyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.scheduledJobId">scheduledJobId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference">OsManagementHubManagementStationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.totalMirrors">totalMirrors</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.mirrorInput">mirrorInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirror">OsManagementHubManagementStationMirror</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.proxyInput">proxyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxy">OsManagementHubManagementStationProxy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.refreshTriggerInput">refreshTriggerInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeouts">OsManagementHubManagementStationTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.refreshTrigger">refreshTrigger</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `health`<sup>Required</sup> <a name="health" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.health"></a>

```java
public OsManagementHubManagementStationHealthList getHealth();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList">OsManagementHubManagementStationHealthList</a>

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.managedInstanceId"></a>

```java
public java.lang.String getManagedInstanceId();
```

- *Type:* java.lang.String

---

##### `mirror`<sup>Required</sup> <a name="mirror" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.mirror"></a>

```java
public OsManagementHubManagementStationMirrorOutputReference getMirror();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference">OsManagementHubManagementStationMirrorOutputReference</a>

---

##### `mirrorCapacity`<sup>Required</sup> <a name="mirrorCapacity" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.mirrorCapacity"></a>

```java
public java.lang.Number getMirrorCapacity();
```

- *Type:* java.lang.Number

---

##### `mirrorSyncStatus`<sup>Required</sup> <a name="mirrorSyncStatus" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.mirrorSyncStatus"></a>

```java
public OsManagementHubManagementStationMirrorSyncStatusList getMirrorSyncStatus();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList">OsManagementHubManagementStationMirrorSyncStatusList</a>

---

##### `overallPercentage`<sup>Required</sup> <a name="overallPercentage" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.overallPercentage"></a>

```java
public java.lang.Number getOverallPercentage();
```

- *Type:* java.lang.Number

---

##### `overallState`<sup>Required</sup> <a name="overallState" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.overallState"></a>

```java
public java.lang.String getOverallState();
```

- *Type:* java.lang.String

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.profileId"></a>

```java
public java.lang.String getProfileId();
```

- *Type:* java.lang.String

---

##### `proxy`<sup>Required</sup> <a name="proxy" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.proxy"></a>

```java
public OsManagementHubManagementStationProxyOutputReference getProxy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference">OsManagementHubManagementStationProxyOutputReference</a>

---

##### `scheduledJobId`<sup>Required</sup> <a name="scheduledJobId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.scheduledJobId"></a>

```java
public java.lang.String getScheduledJobId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.timeouts"></a>

```java
public OsManagementHubManagementStationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference">OsManagementHubManagementStationTimeoutsOutputReference</a>

---

##### `totalMirrors`<sup>Required</sup> <a name="totalMirrors" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.totalMirrors"></a>

```java
public java.lang.Number getTotalMirrors();
```

- *Type:* java.lang.Number

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `mirrorInput`<sup>Optional</sup> <a name="mirrorInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.mirrorInput"></a>

```java
public OsManagementHubManagementStationMirror getMirrorInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirror">OsManagementHubManagementStationMirror</a>

---

##### `proxyInput`<sup>Optional</sup> <a name="proxyInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.proxyInput"></a>

```java
public OsManagementHubManagementStationProxy getProxyInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxy">OsManagementHubManagementStationProxy</a>

---

##### `refreshTriggerInput`<sup>Optional</sup> <a name="refreshTriggerInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.refreshTriggerInput"></a>

```java
public java.lang.Number getRefreshTriggerInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeouts">OsManagementHubManagementStationTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `refreshTrigger`<sup>Required</sup> <a name="refreshTrigger" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.refreshTrigger"></a>

```java
public java.lang.Number getRefreshTrigger();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OsManagementHubManagementStationConfig <a name="OsManagementHubManagementStationConfig" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_management_station.OsManagementHubManagementStationConfig;

OsManagementHubManagementStationConfig.builder()
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
    .hostname(java.lang.String)
    .mirror(OsManagementHubManagementStationMirror)
    .proxy(OsManagementHubManagementStationProxy)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .refreshTrigger(java.lang.Number)
//  .timeouts(OsManagementHubManagementStationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#compartment_id OsManagementHubManagementStation#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#display_name OsManagementHubManagementStation#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.hostname">hostname</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#hostname OsManagementHubManagementStation#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.mirror">mirror</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirror">OsManagementHubManagementStationMirror</a></code> | mirror block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.proxy">proxy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxy">OsManagementHubManagementStationProxy</a></code> | proxy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#defined_tags OsManagementHubManagementStation#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#description OsManagementHubManagementStation#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#freeform_tags OsManagementHubManagementStation#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#id OsManagementHubManagementStation#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.refreshTrigger">refreshTrigger</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#refresh_trigger OsManagementHubManagementStation#refresh_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeouts">OsManagementHubManagementStationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#compartment_id OsManagementHubManagementStation#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#display_name OsManagementHubManagementStation#display_name}.

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#hostname OsManagementHubManagementStation#hostname}.

---

##### `mirror`<sup>Required</sup> <a name="mirror" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.mirror"></a>

```java
public OsManagementHubManagementStationMirror getMirror();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirror">OsManagementHubManagementStationMirror</a>

mirror block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#mirror OsManagementHubManagementStation#mirror}

---

##### `proxy`<sup>Required</sup> <a name="proxy" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.proxy"></a>

```java
public OsManagementHubManagementStationProxy getProxy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxy">OsManagementHubManagementStationProxy</a>

proxy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#proxy OsManagementHubManagementStation#proxy}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#defined_tags OsManagementHubManagementStation#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#description OsManagementHubManagementStation#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#freeform_tags OsManagementHubManagementStation#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#id OsManagementHubManagementStation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `refreshTrigger`<sup>Optional</sup> <a name="refreshTrigger" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.refreshTrigger"></a>

```java
public java.lang.Number getRefreshTrigger();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#refresh_trigger OsManagementHubManagementStation#refresh_trigger}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.timeouts"></a>

```java
public OsManagementHubManagementStationTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeouts">OsManagementHubManagementStationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#timeouts OsManagementHubManagementStation#timeouts}

---

### OsManagementHubManagementStationHealth <a name="OsManagementHubManagementStationHealth" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealth"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealth.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_management_station.OsManagementHubManagementStationHealth;

OsManagementHubManagementStationHealth.builder()
    .build();
```


### OsManagementHubManagementStationMirror <a name="OsManagementHubManagementStationMirror" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirror"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirror.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_management_station.OsManagementHubManagementStationMirror;

OsManagementHubManagementStationMirror.builder()
    .directory(java.lang.String)
    .port(java.lang.String)
    .sslport(java.lang.String)
//  .sslcert(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirror.property.directory">directory</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#directory OsManagementHubManagementStation#directory}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirror.property.port">port</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#port OsManagementHubManagementStation#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirror.property.sslport">sslport</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#sslport OsManagementHubManagementStation#sslport}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirror.property.sslcert">sslcert</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#sslcert OsManagementHubManagementStation#sslcert}. |

---

##### `directory`<sup>Required</sup> <a name="directory" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirror.property.directory"></a>

```java
public java.lang.String getDirectory();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#directory OsManagementHubManagementStation#directory}.

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirror.property.port"></a>

```java
public java.lang.String getPort();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#port OsManagementHubManagementStation#port}.

---

##### `sslport`<sup>Required</sup> <a name="sslport" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirror.property.sslport"></a>

```java
public java.lang.String getSslport();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#sslport OsManagementHubManagementStation#sslport}.

---

##### `sslcert`<sup>Optional</sup> <a name="sslcert" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirror.property.sslcert"></a>

```java
public java.lang.String getSslcert();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#sslcert OsManagementHubManagementStation#sslcert}.

---

### OsManagementHubManagementStationMirrorSyncStatus <a name="OsManagementHubManagementStationMirrorSyncStatus" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatus"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatus.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_management_station.OsManagementHubManagementStationMirrorSyncStatus;

OsManagementHubManagementStationMirrorSyncStatus.builder()
    .build();
```


### OsManagementHubManagementStationProxy <a name="OsManagementHubManagementStationProxy" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_management_station.OsManagementHubManagementStationProxy;

OsManagementHubManagementStationProxy.builder()
    .isEnabled(java.lang.Boolean)
    .isEnabled(IResolvable)
//  .forward(java.lang.String)
//  .hosts(java.util.List<java.lang.String>)
//  .port(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxy.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#is_enabled OsManagementHubManagementStation#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxy.property.forward">forward</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#forward OsManagementHubManagementStation#forward}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxy.property.hosts">hosts</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#hosts OsManagementHubManagementStation#hosts}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxy.property.port">port</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#port OsManagementHubManagementStation#port}. |

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxy.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#is_enabled OsManagementHubManagementStation#is_enabled}.

---

##### `forward`<sup>Optional</sup> <a name="forward" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxy.property.forward"></a>

```java
public java.lang.String getForward();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#forward OsManagementHubManagementStation#forward}.

---

##### `hosts`<sup>Optional</sup> <a name="hosts" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxy.property.hosts"></a>

```java
public java.util.List<java.lang.String> getHosts();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#hosts OsManagementHubManagementStation#hosts}.

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxy.property.port"></a>

```java
public java.lang.String getPort();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#port OsManagementHubManagementStation#port}.

---

### OsManagementHubManagementStationTimeouts <a name="OsManagementHubManagementStationTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_management_station.OsManagementHubManagementStationTimeouts;

OsManagementHubManagementStationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#create OsManagementHubManagementStation#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#delete OsManagementHubManagementStation#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#update OsManagementHubManagementStation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#create OsManagementHubManagementStation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#delete OsManagementHubManagementStation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#update OsManagementHubManagementStation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsManagementHubManagementStationHealthList <a name="OsManagementHubManagementStationHealthList" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_management_station.OsManagementHubManagementStationHealthList;

new OsManagementHubManagementStationHealthList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.get"></a>

```java
public OsManagementHubManagementStationHealthOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OsManagementHubManagementStationHealthOutputReference <a name="OsManagementHubManagementStationHealthOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_management_station.OsManagementHubManagementStationHealthOutputReference;

new OsManagementHubManagementStationHealthOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealth">OsManagementHubManagementStationHealth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.property.internalValue"></a>

```java
public OsManagementHubManagementStationHealth getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealth">OsManagementHubManagementStationHealth</a>

---


### OsManagementHubManagementStationMirrorOutputReference <a name="OsManagementHubManagementStationMirrorOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_management_station.OsManagementHubManagementStationMirrorOutputReference;

new OsManagementHubManagementStationMirrorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.resetSslcert">resetSslcert</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSslcert` <a name="resetSslcert" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.resetSslcert"></a>

```java
public void resetSslcert()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.property.directoryInput">directoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.property.portInput">portInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.property.sslcertInput">sslcertInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.property.sslportInput">sslportInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.property.directory">directory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.property.port">port</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.property.sslcert">sslcert</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.property.sslport">sslport</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirror">OsManagementHubManagementStationMirror</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `directoryInput`<sup>Optional</sup> <a name="directoryInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.property.directoryInput"></a>

```java
public java.lang.String getDirectoryInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.property.portInput"></a>

```java
public java.lang.String getPortInput();
```

- *Type:* java.lang.String

---

##### `sslcertInput`<sup>Optional</sup> <a name="sslcertInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.property.sslcertInput"></a>

```java
public java.lang.String getSslcertInput();
```

- *Type:* java.lang.String

---

##### `sslportInput`<sup>Optional</sup> <a name="sslportInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.property.sslportInput"></a>

```java
public java.lang.String getSslportInput();
```

- *Type:* java.lang.String

---

##### `directory`<sup>Required</sup> <a name="directory" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.property.directory"></a>

```java
public java.lang.String getDirectory();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.property.port"></a>

```java
public java.lang.String getPort();
```

- *Type:* java.lang.String

---

##### `sslcert`<sup>Required</sup> <a name="sslcert" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.property.sslcert"></a>

```java
public java.lang.String getSslcert();
```

- *Type:* java.lang.String

---

##### `sslport`<sup>Required</sup> <a name="sslport" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.property.sslport"></a>

```java
public java.lang.String getSslport();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.property.internalValue"></a>

```java
public OsManagementHubManagementStationMirror getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirror">OsManagementHubManagementStationMirror</a>

---


### OsManagementHubManagementStationMirrorSyncStatusList <a name="OsManagementHubManagementStationMirrorSyncStatusList" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_management_station.OsManagementHubManagementStationMirrorSyncStatusList;

new OsManagementHubManagementStationMirrorSyncStatusList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.get"></a>

```java
public OsManagementHubManagementStationMirrorSyncStatusOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OsManagementHubManagementStationMirrorSyncStatusOutputReference <a name="OsManagementHubManagementStationMirrorSyncStatusOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_management_station.OsManagementHubManagementStationMirrorSyncStatusOutputReference;

new OsManagementHubManagementStationMirrorSyncStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.property.failed">failed</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.property.queued">queued</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.property.synced">synced</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.property.syncing">syncing</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.property.unsynced">unsynced</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatus">OsManagementHubManagementStationMirrorSyncStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `failed`<sup>Required</sup> <a name="failed" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.property.failed"></a>

```java
public java.lang.Number getFailed();
```

- *Type:* java.lang.Number

---

##### `queued`<sup>Required</sup> <a name="queued" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.property.queued"></a>

```java
public java.lang.Number getQueued();
```

- *Type:* java.lang.Number

---

##### `synced`<sup>Required</sup> <a name="synced" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.property.synced"></a>

```java
public java.lang.Number getSynced();
```

- *Type:* java.lang.Number

---

##### `syncing`<sup>Required</sup> <a name="syncing" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.property.syncing"></a>

```java
public java.lang.Number getSyncing();
```

- *Type:* java.lang.Number

---

##### `unsynced`<sup>Required</sup> <a name="unsynced" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.property.unsynced"></a>

```java
public java.lang.Number getUnsynced();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.property.internalValue"></a>

```java
public OsManagementHubManagementStationMirrorSyncStatus getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatus">OsManagementHubManagementStationMirrorSyncStatus</a>

---


### OsManagementHubManagementStationProxyOutputReference <a name="OsManagementHubManagementStationProxyOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_management_station.OsManagementHubManagementStationProxyOutputReference;

new OsManagementHubManagementStationProxyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.resetForward">resetForward</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.resetHosts">resetHosts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetForward` <a name="resetForward" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.resetForward"></a>

```java
public void resetForward()
```

##### `resetHosts` <a name="resetHosts" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.resetHosts"></a>

```java
public void resetHosts()
```

##### `resetPort` <a name="resetPort" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.resetPort"></a>

```java
public void resetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.property.forwardInput">forwardInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.property.hostsInput">hostsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.property.portInput">portInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.property.forward">forward</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.property.hosts">hosts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.property.port">port</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxy">OsManagementHubManagementStationProxy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `forwardInput`<sup>Optional</sup> <a name="forwardInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.property.forwardInput"></a>

```java
public java.lang.String getForwardInput();
```

- *Type:* java.lang.String

---

##### `hostsInput`<sup>Optional</sup> <a name="hostsInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.property.hostsInput"></a>

```java
public java.util.List<java.lang.String> getHostsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.property.isEnabledInput"></a>

```java
public java.lang.Object getIsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.property.portInput"></a>

```java
public java.lang.String getPortInput();
```

- *Type:* java.lang.String

---

##### `forward`<sup>Required</sup> <a name="forward" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.property.forward"></a>

```java
public java.lang.String getForward();
```

- *Type:* java.lang.String

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.property.hosts"></a>

```java
public java.util.List<java.lang.String> getHosts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.property.port"></a>

```java
public java.lang.String getPort();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.property.internalValue"></a>

```java
public OsManagementHubManagementStationProxy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxy">OsManagementHubManagementStationProxy</a>

---


### OsManagementHubManagementStationTimeoutsOutputReference <a name="OsManagementHubManagementStationTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_management_station.OsManagementHubManagementStationTimeoutsOutputReference;

new OsManagementHubManagementStationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeouts">OsManagementHubManagementStationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeouts">OsManagementHubManagementStationTimeouts</a>

---



