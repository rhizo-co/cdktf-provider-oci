# `osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement` Submodule <a name="`osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement` Submodule" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement <a name="OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management oci_os_management_hub_managed_instance_group_install_windows_updates_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_managed_instance_group_install_windows_updates_management.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement;

OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.Builder.create(Construct scope, java.lang.String id)
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
    .managedInstanceGroupId(java.lang.String)
    .windowsUpdateTypes(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .timeouts(OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts)
//  .workRequestDetails(OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.Initializer.parameter.managedInstanceGroupId">managedInstanceGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#managed_instance_group_id OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#managed_instance_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.Initializer.parameter.windowsUpdateTypes">windowsUpdateTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#windows_update_types OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#windows_update_types}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#id OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts">OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.Initializer.parameter.workRequestDetails">workRequestDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails</a></code> | work_request_details block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `managedInstanceGroupId`<sup>Required</sup> <a name="managedInstanceGroupId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.Initializer.parameter.managedInstanceGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#managed_instance_group_id OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#managed_instance_group_id}.

---

##### `windowsUpdateTypes`<sup>Required</sup> <a name="windowsUpdateTypes" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.Initializer.parameter.windowsUpdateTypes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#windows_update_types OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#windows_update_types}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#id OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts">OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#timeouts OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#timeouts}

---

##### `workRequestDetails`<sup>Optional</sup> <a name="workRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.Initializer.parameter.workRequestDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails</a>

work_request_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#work_request_details OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#work_request_details}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.putWorkRequestDetails">putWorkRequestDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.resetWorkRequestDetails">resetWorkRequestDetails</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.putTimeouts"></a>

```java
public void putTimeouts(OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts">OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts</a>

---

##### `putWorkRequestDetails` <a name="putWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.putWorkRequestDetails"></a>

```java
public void putWorkRequestDetails(OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.putWorkRequestDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetWorkRequestDetails` <a name="resetWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.resetWorkRequestDetails"></a>

```java
public void resetWorkRequestDetails()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_managed_instance_group_install_windows_updates_management.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement;

OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_managed_instance_group_install_windows_updates_management.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement;

OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_managed_instance_group_install_windows_updates_management.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement;

OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_managed_instance_group_install_windows_updates_management.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement;

OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference">OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.workRequestDetails">workRequestDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference">OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.managedInstanceGroupIdInput">managedInstanceGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts">OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.windowsUpdateTypesInput">windowsUpdateTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.workRequestDetailsInput">workRequestDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.managedInstanceGroupId">managedInstanceGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.windowsUpdateTypes">windowsUpdateTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.timeouts"></a>

```java
public OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference">OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference</a>

---

##### `workRequestDetails`<sup>Required</sup> <a name="workRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.workRequestDetails"></a>

```java
public OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference getWorkRequestDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference">OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `managedInstanceGroupIdInput`<sup>Optional</sup> <a name="managedInstanceGroupIdInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.managedInstanceGroupIdInput"></a>

```java
public java.lang.String getManagedInstanceGroupIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts">OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts</a>

---

##### `windowsUpdateTypesInput`<sup>Optional</sup> <a name="windowsUpdateTypesInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.windowsUpdateTypesInput"></a>

```java
public java.util.List<java.lang.String> getWindowsUpdateTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `workRequestDetailsInput`<sup>Optional</sup> <a name="workRequestDetailsInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.workRequestDetailsInput"></a>

```java
public OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails getWorkRequestDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `managedInstanceGroupId`<sup>Required</sup> <a name="managedInstanceGroupId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.managedInstanceGroupId"></a>

```java
public java.lang.String getManagedInstanceGroupId();
```

- *Type:* java.lang.String

---

##### `windowsUpdateTypes`<sup>Required</sup> <a name="windowsUpdateTypes" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.windowsUpdateTypes"></a>

```java
public java.util.List<java.lang.String> getWindowsUpdateTypes();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig <a name="OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_managed_instance_group_install_windows_updates_management.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig;

OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.builder()
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
    .managedInstanceGroupId(java.lang.String)
    .windowsUpdateTypes(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .timeouts(OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts)
//  .workRequestDetails(OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.managedInstanceGroupId">managedInstanceGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#managed_instance_group_id OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#managed_instance_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.windowsUpdateTypes">windowsUpdateTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#windows_update_types OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#windows_update_types}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#id OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts">OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.workRequestDetails">workRequestDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails</a></code> | work_request_details block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `managedInstanceGroupId`<sup>Required</sup> <a name="managedInstanceGroupId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.managedInstanceGroupId"></a>

```java
public java.lang.String getManagedInstanceGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#managed_instance_group_id OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#managed_instance_group_id}.

---

##### `windowsUpdateTypes`<sup>Required</sup> <a name="windowsUpdateTypes" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.windowsUpdateTypes"></a>

```java
public java.util.List<java.lang.String> getWindowsUpdateTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#windows_update_types OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#windows_update_types}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#id OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.timeouts"></a>

```java
public OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts">OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#timeouts OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#timeouts}

---

##### `workRequestDetails`<sup>Optional</sup> <a name="workRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.workRequestDetails"></a>

```java
public OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails getWorkRequestDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails</a>

work_request_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#work_request_details OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#work_request_details}

---

### OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts <a name="OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_managed_instance_group_install_windows_updates_management.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts;

OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#create OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#delete OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#update OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#create OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#delete OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#update OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#update}.

---

### OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails <a name="OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_managed_instance_group_install_windows_updates_management.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails;

OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails.builder()
//  .description(java.lang.String)
//  .displayName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#description OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#display_name OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#display_name}. |

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#description OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#display_name OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#display_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference <a name="OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_managed_instance_group_install_windows_updates_management.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference;

new OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts">OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts">OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts</a>

---


### OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference <a name="OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_managed_instance_group_install_windows_updates_management.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference;

new OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.internalValue"></a>

```java
public OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails</a>

---



