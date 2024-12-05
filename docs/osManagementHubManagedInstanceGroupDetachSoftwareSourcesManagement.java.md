# `osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement` Submodule <a name="`osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement` Submodule" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement <a name="OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_software_sources_management oci_os_management_hub_managed_instance_group_detach_software_sources_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_managed_instance_group_detach_software_sources_management.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement;

OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.Builder.create(Construct scope, java.lang.String id)
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
    .softwareSources(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .timeouts(OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeouts)
//  .workRequestDetails(OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetails)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.Initializer.parameter.managedInstanceGroupId">managedInstanceGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_software_sources_management#managed_instance_group_id OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement#managed_instance_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.Initializer.parameter.softwareSources">softwareSources</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_software_sources_management#software_sources OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement#software_sources}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_software_sources_management#id OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeouts">OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.Initializer.parameter.workRequestDetails">workRequestDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetails</a></code> | work_request_details block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `managedInstanceGroupId`<sup>Required</sup> <a name="managedInstanceGroupId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.Initializer.parameter.managedInstanceGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_software_sources_management#managed_instance_group_id OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement#managed_instance_group_id}.

---

##### `softwareSources`<sup>Required</sup> <a name="softwareSources" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.Initializer.parameter.softwareSources"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_software_sources_management#software_sources OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement#software_sources}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_software_sources_management#id OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeouts">OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_software_sources_management#timeouts OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement#timeouts}

---

##### `workRequestDetails`<sup>Optional</sup> <a name="workRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.Initializer.parameter.workRequestDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetails</a>

work_request_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_software_sources_management#work_request_details OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement#work_request_details}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.putWorkRequestDetails">putWorkRequestDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.resetWorkRequestDetails">resetWorkRequestDetails</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.putTimeouts"></a>

```java
public void putTimeouts(OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeouts">OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeouts</a>

---

##### `putWorkRequestDetails` <a name="putWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.putWorkRequestDetails"></a>

```java
public void putWorkRequestDetails(OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.putWorkRequestDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetails</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetWorkRequestDetails` <a name="resetWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.resetWorkRequestDetails"></a>

```java
public void resetWorkRequestDetails()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_managed_instance_group_detach_software_sources_management.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement;

OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_managed_instance_group_detach_software_sources_management.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement;

OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_managed_instance_group_detach_software_sources_management.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement;

OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_managed_instance_group_detach_software_sources_management.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement;

OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_software_sources_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference">OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.workRequestDetails">workRequestDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference">OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.managedInstanceGroupIdInput">managedInstanceGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.softwareSourcesInput">softwareSourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeouts">OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.workRequestDetailsInput">workRequestDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.managedInstanceGroupId">managedInstanceGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.softwareSources">softwareSources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.timeouts"></a>

```java
public OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference">OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference</a>

---

##### `workRequestDetails`<sup>Required</sup> <a name="workRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.workRequestDetails"></a>

```java
public OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference getWorkRequestDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference">OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `managedInstanceGroupIdInput`<sup>Optional</sup> <a name="managedInstanceGroupIdInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.managedInstanceGroupIdInput"></a>

```java
public java.lang.String getManagedInstanceGroupIdInput();
```

- *Type:* java.lang.String

---

##### `softwareSourcesInput`<sup>Optional</sup> <a name="softwareSourcesInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.softwareSourcesInput"></a>

```java
public java.util.List<java.lang.String> getSoftwareSourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeouts">OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeouts</a>

---

##### `workRequestDetailsInput`<sup>Optional</sup> <a name="workRequestDetailsInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.workRequestDetailsInput"></a>

```java
public OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetails getWorkRequestDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetails</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `managedInstanceGroupId`<sup>Required</sup> <a name="managedInstanceGroupId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.managedInstanceGroupId"></a>

```java
public java.lang.String getManagedInstanceGroupId();
```

- *Type:* java.lang.String

---

##### `softwareSources`<sup>Required</sup> <a name="softwareSources" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.softwareSources"></a>

```java
public java.util.List<java.lang.String> getSoftwareSources();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementConfig <a name="OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementConfig" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_managed_instance_group_detach_software_sources_management.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementConfig;

OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementConfig.builder()
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
    .softwareSources(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .timeouts(OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeouts)
//  .workRequestDetails(OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetails)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementConfig.property.managedInstanceGroupId">managedInstanceGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_software_sources_management#managed_instance_group_id OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement#managed_instance_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementConfig.property.softwareSources">softwareSources</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_software_sources_management#software_sources OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement#software_sources}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_software_sources_management#id OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeouts">OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementConfig.property.workRequestDetails">workRequestDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetails</a></code> | work_request_details block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `managedInstanceGroupId`<sup>Required</sup> <a name="managedInstanceGroupId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementConfig.property.managedInstanceGroupId"></a>

```java
public java.lang.String getManagedInstanceGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_software_sources_management#managed_instance_group_id OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement#managed_instance_group_id}.

---

##### `softwareSources`<sup>Required</sup> <a name="softwareSources" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementConfig.property.softwareSources"></a>

```java
public java.util.List<java.lang.String> getSoftwareSources();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_software_sources_management#software_sources OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement#software_sources}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_software_sources_management#id OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementConfig.property.timeouts"></a>

```java
public OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeouts">OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_software_sources_management#timeouts OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement#timeouts}

---

##### `workRequestDetails`<sup>Optional</sup> <a name="workRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementConfig.property.workRequestDetails"></a>

```java
public OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetails getWorkRequestDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetails</a>

work_request_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_software_sources_management#work_request_details OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement#work_request_details}

---

### OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeouts <a name="OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_managed_instance_group_detach_software_sources_management.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeouts;

OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_software_sources_management#create OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_software_sources_management#delete OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_software_sources_management#update OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_software_sources_management#create OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_software_sources_management#delete OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_software_sources_management#update OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement#update}.

---

### OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetails <a name="OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_managed_instance_group_detach_software_sources_management.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetails;

OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetails.builder()
//  .description(java.lang.String)
//  .displayName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetails.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_software_sources_management#description OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetails.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_software_sources_management#display_name OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement#display_name}. |

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetails.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_software_sources_management#description OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetails.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_software_sources_management#display_name OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement#display_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference <a name="OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_managed_instance_group_detach_software_sources_management.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference;

new OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeouts">OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeouts">OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeouts</a>

---


### OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference <a name="OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_managed_instance_group_detach_software_sources_management.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference;

new OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.property.internalValue"></a>

```java
public OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetails</a>

---



