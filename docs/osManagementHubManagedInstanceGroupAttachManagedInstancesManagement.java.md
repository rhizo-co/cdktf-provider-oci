# `osManagementHubManagedInstanceGroupAttachManagedInstancesManagement` Submodule <a name="`osManagementHubManagedInstanceGroupAttachManagedInstancesManagement` Submodule" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement <a name="OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management oci_os_management_hub_managed_instance_group_attach_managed_instances_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_managed_instance_group_attach_managed_instances_management.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement;

OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.Builder.create(Construct scope, java.lang.String id)
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
    .managedInstances(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .timeouts(OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts)
//  .workRequestDetails(OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.Initializer.parameter.managedInstanceGroupId">managedInstanceGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#managed_instance_group_id OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#managed_instance_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.Initializer.parameter.managedInstances">managedInstances</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#managed_instances OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#managed_instances}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#id OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts">OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.Initializer.parameter.workRequestDetails">workRequestDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails</a></code> | work_request_details block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `managedInstanceGroupId`<sup>Required</sup> <a name="managedInstanceGroupId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.Initializer.parameter.managedInstanceGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#managed_instance_group_id OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#managed_instance_group_id}.

---

##### `managedInstances`<sup>Required</sup> <a name="managedInstances" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.Initializer.parameter.managedInstances"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#managed_instances OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#managed_instances}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#id OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts">OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#timeouts OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#timeouts}

---

##### `workRequestDetails`<sup>Optional</sup> <a name="workRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.Initializer.parameter.workRequestDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails</a>

work_request_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#work_request_details OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#work_request_details}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.putWorkRequestDetails">putWorkRequestDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.resetWorkRequestDetails">resetWorkRequestDetails</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.putTimeouts"></a>

```java
public void putTimeouts(OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts">OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts</a>

---

##### `putWorkRequestDetails` <a name="putWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.putWorkRequestDetails"></a>

```java
public void putWorkRequestDetails(OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.putWorkRequestDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetWorkRequestDetails` <a name="resetWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.resetWorkRequestDetails"></a>

```java
public void resetWorkRequestDetails()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_managed_instance_group_attach_managed_instances_management.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement;

OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_managed_instance_group_attach_managed_instances_management.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement;

OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_managed_instance_group_attach_managed_instances_management.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement;

OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_managed_instance_group_attach_managed_instances_management.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement;

OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference">OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.workRequestDetails">workRequestDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference">OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.managedInstanceGroupIdInput">managedInstanceGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.managedInstancesInput">managedInstancesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts">OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.workRequestDetailsInput">workRequestDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.managedInstanceGroupId">managedInstanceGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.managedInstances">managedInstances</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.timeouts"></a>

```java
public OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference">OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference</a>

---

##### `workRequestDetails`<sup>Required</sup> <a name="workRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.workRequestDetails"></a>

```java
public OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference getWorkRequestDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference">OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `managedInstanceGroupIdInput`<sup>Optional</sup> <a name="managedInstanceGroupIdInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.managedInstanceGroupIdInput"></a>

```java
public java.lang.String getManagedInstanceGroupIdInput();
```

- *Type:* java.lang.String

---

##### `managedInstancesInput`<sup>Optional</sup> <a name="managedInstancesInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.managedInstancesInput"></a>

```java
public java.util.List<java.lang.String> getManagedInstancesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts">OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts</a>

---

##### `workRequestDetailsInput`<sup>Optional</sup> <a name="workRequestDetailsInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.workRequestDetailsInput"></a>

```java
public OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails getWorkRequestDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `managedInstanceGroupId`<sup>Required</sup> <a name="managedInstanceGroupId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.managedInstanceGroupId"></a>

```java
public java.lang.String getManagedInstanceGroupId();
```

- *Type:* java.lang.String

---

##### `managedInstances`<sup>Required</sup> <a name="managedInstances" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.managedInstances"></a>

```java
public java.util.List<java.lang.String> getManagedInstances();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig <a name="OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_managed_instance_group_attach_managed_instances_management.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig;

OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.builder()
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
    .managedInstances(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .timeouts(OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts)
//  .workRequestDetails(OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.managedInstanceGroupId">managedInstanceGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#managed_instance_group_id OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#managed_instance_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.managedInstances">managedInstances</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#managed_instances OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#managed_instances}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#id OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts">OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.workRequestDetails">workRequestDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails</a></code> | work_request_details block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `managedInstanceGroupId`<sup>Required</sup> <a name="managedInstanceGroupId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.managedInstanceGroupId"></a>

```java
public java.lang.String getManagedInstanceGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#managed_instance_group_id OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#managed_instance_group_id}.

---

##### `managedInstances`<sup>Required</sup> <a name="managedInstances" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.managedInstances"></a>

```java
public java.util.List<java.lang.String> getManagedInstances();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#managed_instances OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#managed_instances}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#id OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.timeouts"></a>

```java
public OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts">OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#timeouts OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#timeouts}

---

##### `workRequestDetails`<sup>Optional</sup> <a name="workRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.workRequestDetails"></a>

```java
public OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails getWorkRequestDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails</a>

work_request_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#work_request_details OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#work_request_details}

---

### OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts <a name="OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_managed_instance_group_attach_managed_instances_management.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts;

OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#create OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#delete OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#update OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#create OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#delete OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#update OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#update}.

---

### OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails <a name="OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_managed_instance_group_attach_managed_instances_management.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails;

OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails.builder()
//  .description(java.lang.String)
//  .displayName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#description OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#display_name OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#display_name}. |

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#description OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#display_name OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#display_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference <a name="OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_managed_instance_group_attach_managed_instances_management.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference;

new OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts">OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts">OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts</a>

---


### OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference <a name="OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_managed_instance_group_attach_managed_instances_management.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference;

new OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.property.internalValue"></a>

```java
public OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails</a>

---



