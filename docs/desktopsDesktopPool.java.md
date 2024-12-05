# `desktopsDesktopPool` Submodule <a name="`desktopsDesktopPool` Submodule" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DesktopsDesktopPool <a name="DesktopsDesktopPool" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool oci_desktops_desktop_pool}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.desktops_desktop_pool.DesktopsDesktopPool;

DesktopsDesktopPool.Builder.create(Construct scope, java.lang.String id)
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
    .arePrivilegedUsers(java.lang.Boolean)
    .arePrivilegedUsers(IResolvable)
    .availabilityDomain(java.lang.String)
    .availabilityPolicy(DesktopsDesktopPoolAvailabilityPolicy)
    .compartmentId(java.lang.String)
    .contactDetails(java.lang.String)
    .devicePolicy(DesktopsDesktopPoolDevicePolicy)
    .displayName(java.lang.String)
    .image(DesktopsDesktopPoolImage)
    .isStorageEnabled(java.lang.Boolean)
    .isStorageEnabled(IResolvable)
    .maximumSize(java.lang.Number)
    .networkConfiguration(DesktopsDesktopPoolNetworkConfiguration)
    .shapeName(java.lang.String)
    .standbySize(java.lang.Number)
    .storageBackupPolicyId(java.lang.String)
    .storageSizeInGbs(java.lang.Number)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .nsgIds(java.util.List<java.lang.String>)
//  .privateAccessDetails(DesktopsDesktopPoolPrivateAccessDetails)
//  .sessionLifecycleActions(DesktopsDesktopPoolSessionLifecycleActions)
//  .shapeConfig(DesktopsDesktopPoolShapeConfig)
//  .timeouts(DesktopsDesktopPoolTimeouts)
//  .timeStartScheduled(java.lang.String)
//  .timeStopScheduled(java.lang.String)
//  .useDedicatedVmHost(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.arePrivilegedUsers">arePrivilegedUsers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#are_privileged_users DesktopsDesktopPool#are_privileged_users}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#availability_domain DesktopsDesktopPool#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.availabilityPolicy">availabilityPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicy">DesktopsDesktopPoolAvailabilityPolicy</a></code> | availability_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#compartment_id DesktopsDesktopPool#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.contactDetails">contactDetails</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#contact_details DesktopsDesktopPool#contact_details}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.devicePolicy">devicePolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy">DesktopsDesktopPoolDevicePolicy</a></code> | device_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#display_name DesktopsDesktopPool#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.image">image</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImage">DesktopsDesktopPoolImage</a></code> | image block. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.isStorageEnabled">isStorageEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#is_storage_enabled DesktopsDesktopPool#is_storage_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.maximumSize">maximumSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#maximum_size DesktopsDesktopPool#maximum_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.networkConfiguration">networkConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfiguration">DesktopsDesktopPoolNetworkConfiguration</a></code> | network_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.shapeName">shapeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#shape_name DesktopsDesktopPool#shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.standbySize">standbySize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#standby_size DesktopsDesktopPool#standby_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.storageBackupPolicyId">storageBackupPolicyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#storage_backup_policy_id DesktopsDesktopPool#storage_backup_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.storageSizeInGbs">storageSizeInGbs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#storage_size_in_gbs DesktopsDesktopPool#storage_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#defined_tags DesktopsDesktopPool#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#description DesktopsDesktopPool#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#freeform_tags DesktopsDesktopPool#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#id DesktopsDesktopPool#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#nsg_ids DesktopsDesktopPool#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.privateAccessDetails">privateAccessDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetails">DesktopsDesktopPoolPrivateAccessDetails</a></code> | private_access_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.sessionLifecycleActions">sessionLifecycleActions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActions">DesktopsDesktopPoolSessionLifecycleActions</a></code> | session_lifecycle_actions block. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.shapeConfig">shapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfig">DesktopsDesktopPoolShapeConfig</a></code> | shape_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeouts">DesktopsDesktopPoolTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.timeStartScheduled">timeStartScheduled</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#time_start_scheduled DesktopsDesktopPool#time_start_scheduled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.timeStopScheduled">timeStopScheduled</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#time_stop_scheduled DesktopsDesktopPool#time_stop_scheduled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.useDedicatedVmHost">useDedicatedVmHost</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#use_dedicated_vm_host DesktopsDesktopPool#use_dedicated_vm_host}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arePrivilegedUsers`<sup>Required</sup> <a name="arePrivilegedUsers" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.arePrivilegedUsers"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#are_privileged_users DesktopsDesktopPool#are_privileged_users}.

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.availabilityDomain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#availability_domain DesktopsDesktopPool#availability_domain}.

---

##### `availabilityPolicy`<sup>Required</sup> <a name="availabilityPolicy" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.availabilityPolicy"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicy">DesktopsDesktopPoolAvailabilityPolicy</a>

availability_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#availability_policy DesktopsDesktopPool#availability_policy}

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#compartment_id DesktopsDesktopPool#compartment_id}.

---

##### `contactDetails`<sup>Required</sup> <a name="contactDetails" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.contactDetails"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#contact_details DesktopsDesktopPool#contact_details}.

---

##### `devicePolicy`<sup>Required</sup> <a name="devicePolicy" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.devicePolicy"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy">DesktopsDesktopPoolDevicePolicy</a>

device_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#device_policy DesktopsDesktopPool#device_policy}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#display_name DesktopsDesktopPool#display_name}.

---

##### `image`<sup>Required</sup> <a name="image" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.image"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImage">DesktopsDesktopPoolImage</a>

image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#image DesktopsDesktopPool#image}

---

##### `isStorageEnabled`<sup>Required</sup> <a name="isStorageEnabled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.isStorageEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#is_storage_enabled DesktopsDesktopPool#is_storage_enabled}.

---

##### `maximumSize`<sup>Required</sup> <a name="maximumSize" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.maximumSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#maximum_size DesktopsDesktopPool#maximum_size}.

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.networkConfiguration"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfiguration">DesktopsDesktopPoolNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#network_configuration DesktopsDesktopPool#network_configuration}

---

##### `shapeName`<sup>Required</sup> <a name="shapeName" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.shapeName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#shape_name DesktopsDesktopPool#shape_name}.

---

##### `standbySize`<sup>Required</sup> <a name="standbySize" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.standbySize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#standby_size DesktopsDesktopPool#standby_size}.

---

##### `storageBackupPolicyId`<sup>Required</sup> <a name="storageBackupPolicyId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.storageBackupPolicyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#storage_backup_policy_id DesktopsDesktopPool#storage_backup_policy_id}.

---

##### `storageSizeInGbs`<sup>Required</sup> <a name="storageSizeInGbs" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.storageSizeInGbs"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#storage_size_in_gbs DesktopsDesktopPool#storage_size_in_gbs}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#defined_tags DesktopsDesktopPool#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#description DesktopsDesktopPool#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#freeform_tags DesktopsDesktopPool#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#id DesktopsDesktopPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nsgIds`<sup>Optional</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.nsgIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#nsg_ids DesktopsDesktopPool#nsg_ids}.

---

##### `privateAccessDetails`<sup>Optional</sup> <a name="privateAccessDetails" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.privateAccessDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetails">DesktopsDesktopPoolPrivateAccessDetails</a>

private_access_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#private_access_details DesktopsDesktopPool#private_access_details}

---

##### `sessionLifecycleActions`<sup>Optional</sup> <a name="sessionLifecycleActions" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.sessionLifecycleActions"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActions">DesktopsDesktopPoolSessionLifecycleActions</a>

session_lifecycle_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#session_lifecycle_actions DesktopsDesktopPool#session_lifecycle_actions}

---

##### `shapeConfig`<sup>Optional</sup> <a name="shapeConfig" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.shapeConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfig">DesktopsDesktopPoolShapeConfig</a>

shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#shape_config DesktopsDesktopPool#shape_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeouts">DesktopsDesktopPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#timeouts DesktopsDesktopPool#timeouts}

---

##### `timeStartScheduled`<sup>Optional</sup> <a name="timeStartScheduled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.timeStartScheduled"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#time_start_scheduled DesktopsDesktopPool#time_start_scheduled}.

---

##### `timeStopScheduled`<sup>Optional</sup> <a name="timeStopScheduled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.timeStopScheduled"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#time_stop_scheduled DesktopsDesktopPool#time_stop_scheduled}.

---

##### `useDedicatedVmHost`<sup>Optional</sup> <a name="useDedicatedVmHost" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.useDedicatedVmHost"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#use_dedicated_vm_host DesktopsDesktopPool#use_dedicated_vm_host}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putAvailabilityPolicy">putAvailabilityPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putDevicePolicy">putDevicePolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putImage">putImage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putNetworkConfiguration">putNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putPrivateAccessDetails">putPrivateAccessDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putSessionLifecycleActions">putSessionLifecycleActions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putShapeConfig">putShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetNsgIds">resetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetPrivateAccessDetails">resetPrivateAccessDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetSessionLifecycleActions">resetSessionLifecycleActions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetShapeConfig">resetShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetTimeStartScheduled">resetTimeStartScheduled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetTimeStopScheduled">resetTimeStopScheduled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetUseDedicatedVmHost">resetUseDedicatedVmHost</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAvailabilityPolicy` <a name="putAvailabilityPolicy" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putAvailabilityPolicy"></a>

```java
public void putAvailabilityPolicy(DesktopsDesktopPoolAvailabilityPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putAvailabilityPolicy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicy">DesktopsDesktopPoolAvailabilityPolicy</a>

---

##### `putDevicePolicy` <a name="putDevicePolicy" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putDevicePolicy"></a>

```java
public void putDevicePolicy(DesktopsDesktopPoolDevicePolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putDevicePolicy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy">DesktopsDesktopPoolDevicePolicy</a>

---

##### `putImage` <a name="putImage" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putImage"></a>

```java
public void putImage(DesktopsDesktopPoolImage value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putImage.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImage">DesktopsDesktopPoolImage</a>

---

##### `putNetworkConfiguration` <a name="putNetworkConfiguration" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putNetworkConfiguration"></a>

```java
public void putNetworkConfiguration(DesktopsDesktopPoolNetworkConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfiguration">DesktopsDesktopPoolNetworkConfiguration</a>

---

##### `putPrivateAccessDetails` <a name="putPrivateAccessDetails" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putPrivateAccessDetails"></a>

```java
public void putPrivateAccessDetails(DesktopsDesktopPoolPrivateAccessDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putPrivateAccessDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetails">DesktopsDesktopPoolPrivateAccessDetails</a>

---

##### `putSessionLifecycleActions` <a name="putSessionLifecycleActions" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putSessionLifecycleActions"></a>

```java
public void putSessionLifecycleActions(DesktopsDesktopPoolSessionLifecycleActions value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putSessionLifecycleActions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActions">DesktopsDesktopPoolSessionLifecycleActions</a>

---

##### `putShapeConfig` <a name="putShapeConfig" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putShapeConfig"></a>

```java
public void putShapeConfig(DesktopsDesktopPoolShapeConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putShapeConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfig">DesktopsDesktopPoolShapeConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putTimeouts"></a>

```java
public void putTimeouts(DesktopsDesktopPoolTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeouts">DesktopsDesktopPoolTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetId"></a>

```java
public void resetId()
```

##### `resetNsgIds` <a name="resetNsgIds" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetNsgIds"></a>

```java
public void resetNsgIds()
```

##### `resetPrivateAccessDetails` <a name="resetPrivateAccessDetails" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetPrivateAccessDetails"></a>

```java
public void resetPrivateAccessDetails()
```

##### `resetSessionLifecycleActions` <a name="resetSessionLifecycleActions" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetSessionLifecycleActions"></a>

```java
public void resetSessionLifecycleActions()
```

##### `resetShapeConfig` <a name="resetShapeConfig" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetShapeConfig"></a>

```java
public void resetShapeConfig()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTimeStartScheduled` <a name="resetTimeStartScheduled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetTimeStartScheduled"></a>

```java
public void resetTimeStartScheduled()
```

##### `resetTimeStopScheduled` <a name="resetTimeStopScheduled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetTimeStopScheduled"></a>

```java
public void resetTimeStopScheduled()
```

##### `resetUseDedicatedVmHost` <a name="resetUseDedicatedVmHost" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetUseDedicatedVmHost"></a>

```java
public void resetUseDedicatedVmHost()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DesktopsDesktopPool resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.desktops_desktop_pool.DesktopsDesktopPool;

DesktopsDesktopPool.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.desktops_desktop_pool.DesktopsDesktopPool;

DesktopsDesktopPool.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.desktops_desktop_pool.DesktopsDesktopPool;

DesktopsDesktopPool.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.desktops_desktop_pool.DesktopsDesktopPool;

DesktopsDesktopPool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DesktopsDesktopPool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DesktopsDesktopPool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DesktopsDesktopPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DesktopsDesktopPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DesktopsDesktopPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.activeDesktops">activeDesktops</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.availabilityPolicy">availabilityPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference">DesktopsDesktopPoolAvailabilityPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.devicePolicy">devicePolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference">DesktopsDesktopPoolDevicePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.image">image</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference">DesktopsDesktopPoolImageOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference">DesktopsDesktopPoolNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.privateAccessDetails">privateAccessDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference">DesktopsDesktopPoolPrivateAccessDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.sessionLifecycleActions">sessionLifecycleActions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference">DesktopsDesktopPoolSessionLifecycleActionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.shapeConfig">shapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference">DesktopsDesktopPoolShapeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference">DesktopsDesktopPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.arePrivilegedUsersInput">arePrivilegedUsersInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.availabilityPolicyInput">availabilityPolicyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicy">DesktopsDesktopPoolAvailabilityPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.contactDetailsInput">contactDetailsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.devicePolicyInput">devicePolicyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy">DesktopsDesktopPoolDevicePolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.imageInput">imageInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImage">DesktopsDesktopPoolImage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.isStorageEnabledInput">isStorageEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.maximumSizeInput">maximumSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.networkConfigurationInput">networkConfigurationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfiguration">DesktopsDesktopPoolNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.nsgIdsInput">nsgIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.privateAccessDetailsInput">privateAccessDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetails">DesktopsDesktopPoolPrivateAccessDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.sessionLifecycleActionsInput">sessionLifecycleActionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActions">DesktopsDesktopPoolSessionLifecycleActions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.shapeConfigInput">shapeConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfig">DesktopsDesktopPoolShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.shapeNameInput">shapeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.standbySizeInput">standbySizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.storageBackupPolicyIdInput">storageBackupPolicyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.storageSizeInGbsInput">storageSizeInGbsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeouts">DesktopsDesktopPoolTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.timeStartScheduledInput">timeStartScheduledInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.timeStopScheduledInput">timeStopScheduledInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.useDedicatedVmHostInput">useDedicatedVmHostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.arePrivilegedUsers">arePrivilegedUsers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.contactDetails">contactDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.isStorageEnabled">isStorageEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.maximumSize">maximumSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.shapeName">shapeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.standbySize">standbySize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.storageBackupPolicyId">storageBackupPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.storageSizeInGbs">storageSizeInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.timeStartScheduled">timeStartScheduled</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.timeStopScheduled">timeStopScheduled</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.useDedicatedVmHost">useDedicatedVmHost</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `activeDesktops`<sup>Required</sup> <a name="activeDesktops" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.activeDesktops"></a>

```java
public java.lang.Number getActiveDesktops();
```

- *Type:* java.lang.Number

---

##### `availabilityPolicy`<sup>Required</sup> <a name="availabilityPolicy" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.availabilityPolicy"></a>

```java
public DesktopsDesktopPoolAvailabilityPolicyOutputReference getAvailabilityPolicy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference">DesktopsDesktopPoolAvailabilityPolicyOutputReference</a>

---

##### `devicePolicy`<sup>Required</sup> <a name="devicePolicy" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.devicePolicy"></a>

```java
public DesktopsDesktopPoolDevicePolicyOutputReference getDevicePolicy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference">DesktopsDesktopPoolDevicePolicyOutputReference</a>

---

##### `image`<sup>Required</sup> <a name="image" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.image"></a>

```java
public DesktopsDesktopPoolImageOutputReference getImage();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference">DesktopsDesktopPoolImageOutputReference</a>

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.networkConfiguration"></a>

```java
public DesktopsDesktopPoolNetworkConfigurationOutputReference getNetworkConfiguration();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference">DesktopsDesktopPoolNetworkConfigurationOutputReference</a>

---

##### `privateAccessDetails`<sup>Required</sup> <a name="privateAccessDetails" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.privateAccessDetails"></a>

```java
public DesktopsDesktopPoolPrivateAccessDetailsOutputReference getPrivateAccessDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference">DesktopsDesktopPoolPrivateAccessDetailsOutputReference</a>

---

##### `sessionLifecycleActions`<sup>Required</sup> <a name="sessionLifecycleActions" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.sessionLifecycleActions"></a>

```java
public DesktopsDesktopPoolSessionLifecycleActionsOutputReference getSessionLifecycleActions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference">DesktopsDesktopPoolSessionLifecycleActionsOutputReference</a>

---

##### `shapeConfig`<sup>Required</sup> <a name="shapeConfig" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.shapeConfig"></a>

```java
public DesktopsDesktopPoolShapeConfigOutputReference getShapeConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference">DesktopsDesktopPoolShapeConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.timeouts"></a>

```java
public DesktopsDesktopPoolTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference">DesktopsDesktopPoolTimeoutsOutputReference</a>

---

##### `arePrivilegedUsersInput`<sup>Optional</sup> <a name="arePrivilegedUsersInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.arePrivilegedUsersInput"></a>

```java
public java.lang.Object getArePrivilegedUsersInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.availabilityDomainInput"></a>

```java
public java.lang.String getAvailabilityDomainInput();
```

- *Type:* java.lang.String

---

##### `availabilityPolicyInput`<sup>Optional</sup> <a name="availabilityPolicyInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.availabilityPolicyInput"></a>

```java
public DesktopsDesktopPoolAvailabilityPolicy getAvailabilityPolicyInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicy">DesktopsDesktopPoolAvailabilityPolicy</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `contactDetailsInput`<sup>Optional</sup> <a name="contactDetailsInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.contactDetailsInput"></a>

```java
public java.lang.String getContactDetailsInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `devicePolicyInput`<sup>Optional</sup> <a name="devicePolicyInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.devicePolicyInput"></a>

```java
public DesktopsDesktopPoolDevicePolicy getDevicePolicyInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy">DesktopsDesktopPoolDevicePolicy</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.imageInput"></a>

```java
public DesktopsDesktopPoolImage getImageInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImage">DesktopsDesktopPoolImage</a>

---

##### `isStorageEnabledInput`<sup>Optional</sup> <a name="isStorageEnabledInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.isStorageEnabledInput"></a>

```java
public java.lang.Object getIsStorageEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maximumSizeInput`<sup>Optional</sup> <a name="maximumSizeInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.maximumSizeInput"></a>

```java
public java.lang.Number getMaximumSizeInput();
```

- *Type:* java.lang.Number

---

##### `networkConfigurationInput`<sup>Optional</sup> <a name="networkConfigurationInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.networkConfigurationInput"></a>

```java
public DesktopsDesktopPoolNetworkConfiguration getNetworkConfigurationInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfiguration">DesktopsDesktopPoolNetworkConfiguration</a>

---

##### `nsgIdsInput`<sup>Optional</sup> <a name="nsgIdsInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.nsgIdsInput"></a>

```java
public java.util.List<java.lang.String> getNsgIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `privateAccessDetailsInput`<sup>Optional</sup> <a name="privateAccessDetailsInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.privateAccessDetailsInput"></a>

```java
public DesktopsDesktopPoolPrivateAccessDetails getPrivateAccessDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetails">DesktopsDesktopPoolPrivateAccessDetails</a>

---

##### `sessionLifecycleActionsInput`<sup>Optional</sup> <a name="sessionLifecycleActionsInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.sessionLifecycleActionsInput"></a>

```java
public DesktopsDesktopPoolSessionLifecycleActions getSessionLifecycleActionsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActions">DesktopsDesktopPoolSessionLifecycleActions</a>

---

##### `shapeConfigInput`<sup>Optional</sup> <a name="shapeConfigInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.shapeConfigInput"></a>

```java
public DesktopsDesktopPoolShapeConfig getShapeConfigInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfig">DesktopsDesktopPoolShapeConfig</a>

---

##### `shapeNameInput`<sup>Optional</sup> <a name="shapeNameInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.shapeNameInput"></a>

```java
public java.lang.String getShapeNameInput();
```

- *Type:* java.lang.String

---

##### `standbySizeInput`<sup>Optional</sup> <a name="standbySizeInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.standbySizeInput"></a>

```java
public java.lang.Number getStandbySizeInput();
```

- *Type:* java.lang.Number

---

##### `storageBackupPolicyIdInput`<sup>Optional</sup> <a name="storageBackupPolicyIdInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.storageBackupPolicyIdInput"></a>

```java
public java.lang.String getStorageBackupPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `storageSizeInGbsInput`<sup>Optional</sup> <a name="storageSizeInGbsInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.storageSizeInGbsInput"></a>

```java
public java.lang.Number getStorageSizeInGbsInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeouts">DesktopsDesktopPoolTimeouts</a>

---

##### `timeStartScheduledInput`<sup>Optional</sup> <a name="timeStartScheduledInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.timeStartScheduledInput"></a>

```java
public java.lang.String getTimeStartScheduledInput();
```

- *Type:* java.lang.String

---

##### `timeStopScheduledInput`<sup>Optional</sup> <a name="timeStopScheduledInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.timeStopScheduledInput"></a>

```java
public java.lang.String getTimeStopScheduledInput();
```

- *Type:* java.lang.String

---

##### `useDedicatedVmHostInput`<sup>Optional</sup> <a name="useDedicatedVmHostInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.useDedicatedVmHostInput"></a>

```java
public java.lang.String getUseDedicatedVmHostInput();
```

- *Type:* java.lang.String

---

##### `arePrivilegedUsers`<sup>Required</sup> <a name="arePrivilegedUsers" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.arePrivilegedUsers"></a>

```java
public java.lang.Object getArePrivilegedUsers();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `contactDetails`<sup>Required</sup> <a name="contactDetails" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.contactDetails"></a>

```java
public java.lang.String getContactDetails();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isStorageEnabled`<sup>Required</sup> <a name="isStorageEnabled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.isStorageEnabled"></a>

```java
public java.lang.Object getIsStorageEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maximumSize`<sup>Required</sup> <a name="maximumSize" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.maximumSize"></a>

```java
public java.lang.Number getMaximumSize();
```

- *Type:* java.lang.Number

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `shapeName`<sup>Required</sup> <a name="shapeName" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.shapeName"></a>

```java
public java.lang.String getShapeName();
```

- *Type:* java.lang.String

---

##### `standbySize`<sup>Required</sup> <a name="standbySize" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.standbySize"></a>

```java
public java.lang.Number getStandbySize();
```

- *Type:* java.lang.Number

---

##### `storageBackupPolicyId`<sup>Required</sup> <a name="storageBackupPolicyId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.storageBackupPolicyId"></a>

```java
public java.lang.String getStorageBackupPolicyId();
```

- *Type:* java.lang.String

---

##### `storageSizeInGbs`<sup>Required</sup> <a name="storageSizeInGbs" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.storageSizeInGbs"></a>

```java
public java.lang.Number getStorageSizeInGbs();
```

- *Type:* java.lang.Number

---

##### `timeStartScheduled`<sup>Required</sup> <a name="timeStartScheduled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.timeStartScheduled"></a>

```java
public java.lang.String getTimeStartScheduled();
```

- *Type:* java.lang.String

---

##### `timeStopScheduled`<sup>Required</sup> <a name="timeStopScheduled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.timeStopScheduled"></a>

```java
public java.lang.String getTimeStopScheduled();
```

- *Type:* java.lang.String

---

##### `useDedicatedVmHost`<sup>Required</sup> <a name="useDedicatedVmHost" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.useDedicatedVmHost"></a>

```java
public java.lang.String getUseDedicatedVmHost();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DesktopsDesktopPoolAvailabilityPolicy <a name="DesktopsDesktopPoolAvailabilityPolicy" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.desktops_desktop_pool.DesktopsDesktopPoolAvailabilityPolicy;

DesktopsDesktopPoolAvailabilityPolicy.builder()
//  .startSchedule(DesktopsDesktopPoolAvailabilityPolicyStartSchedule)
//  .stopSchedule(DesktopsDesktopPoolAvailabilityPolicyStopSchedule)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicy.property.startSchedule">startSchedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartSchedule">DesktopsDesktopPoolAvailabilityPolicyStartSchedule</a></code> | start_schedule block. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicy.property.stopSchedule">stopSchedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopSchedule">DesktopsDesktopPoolAvailabilityPolicyStopSchedule</a></code> | stop_schedule block. |

---

##### `startSchedule`<sup>Optional</sup> <a name="startSchedule" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicy.property.startSchedule"></a>

```java
public DesktopsDesktopPoolAvailabilityPolicyStartSchedule getStartSchedule();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartSchedule">DesktopsDesktopPoolAvailabilityPolicyStartSchedule</a>

start_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#start_schedule DesktopsDesktopPool#start_schedule}

---

##### `stopSchedule`<sup>Optional</sup> <a name="stopSchedule" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicy.property.stopSchedule"></a>

```java
public DesktopsDesktopPoolAvailabilityPolicyStopSchedule getStopSchedule();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopSchedule">DesktopsDesktopPoolAvailabilityPolicyStopSchedule</a>

stop_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#stop_schedule DesktopsDesktopPool#stop_schedule}

---

### DesktopsDesktopPoolAvailabilityPolicyStartSchedule <a name="DesktopsDesktopPoolAvailabilityPolicyStartSchedule" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartSchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.desktops_desktop_pool.DesktopsDesktopPoolAvailabilityPolicyStartSchedule;

DesktopsDesktopPoolAvailabilityPolicyStartSchedule.builder()
    .cronExpression(java.lang.String)
    .timezone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartSchedule.property.cronExpression">cronExpression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#cron_expression DesktopsDesktopPool#cron_expression}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartSchedule.property.timezone">timezone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#timezone DesktopsDesktopPool#timezone}. |

---

##### `cronExpression`<sup>Required</sup> <a name="cronExpression" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartSchedule.property.cronExpression"></a>

```java
public java.lang.String getCronExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#cron_expression DesktopsDesktopPool#cron_expression}.

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartSchedule.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#timezone DesktopsDesktopPool#timezone}.

---

### DesktopsDesktopPoolAvailabilityPolicyStopSchedule <a name="DesktopsDesktopPoolAvailabilityPolicyStopSchedule" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopSchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.desktops_desktop_pool.DesktopsDesktopPoolAvailabilityPolicyStopSchedule;

DesktopsDesktopPoolAvailabilityPolicyStopSchedule.builder()
    .cronExpression(java.lang.String)
    .timezone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopSchedule.property.cronExpression">cronExpression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#cron_expression DesktopsDesktopPool#cron_expression}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopSchedule.property.timezone">timezone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#timezone DesktopsDesktopPool#timezone}. |

---

##### `cronExpression`<sup>Required</sup> <a name="cronExpression" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopSchedule.property.cronExpression"></a>

```java
public java.lang.String getCronExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#cron_expression DesktopsDesktopPool#cron_expression}.

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopSchedule.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#timezone DesktopsDesktopPool#timezone}.

---

### DesktopsDesktopPoolConfig <a name="DesktopsDesktopPoolConfig" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.desktops_desktop_pool.DesktopsDesktopPoolConfig;

DesktopsDesktopPoolConfig.builder()
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
    .arePrivilegedUsers(java.lang.Boolean)
    .arePrivilegedUsers(IResolvable)
    .availabilityDomain(java.lang.String)
    .availabilityPolicy(DesktopsDesktopPoolAvailabilityPolicy)
    .compartmentId(java.lang.String)
    .contactDetails(java.lang.String)
    .devicePolicy(DesktopsDesktopPoolDevicePolicy)
    .displayName(java.lang.String)
    .image(DesktopsDesktopPoolImage)
    .isStorageEnabled(java.lang.Boolean)
    .isStorageEnabled(IResolvable)
    .maximumSize(java.lang.Number)
    .networkConfiguration(DesktopsDesktopPoolNetworkConfiguration)
    .shapeName(java.lang.String)
    .standbySize(java.lang.Number)
    .storageBackupPolicyId(java.lang.String)
    .storageSizeInGbs(java.lang.Number)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .nsgIds(java.util.List<java.lang.String>)
//  .privateAccessDetails(DesktopsDesktopPoolPrivateAccessDetails)
//  .sessionLifecycleActions(DesktopsDesktopPoolSessionLifecycleActions)
//  .shapeConfig(DesktopsDesktopPoolShapeConfig)
//  .timeouts(DesktopsDesktopPoolTimeouts)
//  .timeStartScheduled(java.lang.String)
//  .timeStopScheduled(java.lang.String)
//  .useDedicatedVmHost(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.arePrivilegedUsers">arePrivilegedUsers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#are_privileged_users DesktopsDesktopPool#are_privileged_users}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#availability_domain DesktopsDesktopPool#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.availabilityPolicy">availabilityPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicy">DesktopsDesktopPoolAvailabilityPolicy</a></code> | availability_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#compartment_id DesktopsDesktopPool#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.contactDetails">contactDetails</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#contact_details DesktopsDesktopPool#contact_details}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.devicePolicy">devicePolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy">DesktopsDesktopPoolDevicePolicy</a></code> | device_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#display_name DesktopsDesktopPool#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.image">image</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImage">DesktopsDesktopPoolImage</a></code> | image block. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.isStorageEnabled">isStorageEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#is_storage_enabled DesktopsDesktopPool#is_storage_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.maximumSize">maximumSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#maximum_size DesktopsDesktopPool#maximum_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfiguration">DesktopsDesktopPoolNetworkConfiguration</a></code> | network_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.shapeName">shapeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#shape_name DesktopsDesktopPool#shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.standbySize">standbySize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#standby_size DesktopsDesktopPool#standby_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.storageBackupPolicyId">storageBackupPolicyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#storage_backup_policy_id DesktopsDesktopPool#storage_backup_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.storageSizeInGbs">storageSizeInGbs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#storage_size_in_gbs DesktopsDesktopPool#storage_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#defined_tags DesktopsDesktopPool#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#description DesktopsDesktopPool#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#freeform_tags DesktopsDesktopPool#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#id DesktopsDesktopPool#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#nsg_ids DesktopsDesktopPool#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.privateAccessDetails">privateAccessDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetails">DesktopsDesktopPoolPrivateAccessDetails</a></code> | private_access_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.sessionLifecycleActions">sessionLifecycleActions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActions">DesktopsDesktopPoolSessionLifecycleActions</a></code> | session_lifecycle_actions block. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.shapeConfig">shapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfig">DesktopsDesktopPoolShapeConfig</a></code> | shape_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeouts">DesktopsDesktopPoolTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.timeStartScheduled">timeStartScheduled</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#time_start_scheduled DesktopsDesktopPool#time_start_scheduled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.timeStopScheduled">timeStopScheduled</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#time_stop_scheduled DesktopsDesktopPool#time_stop_scheduled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.useDedicatedVmHost">useDedicatedVmHost</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#use_dedicated_vm_host DesktopsDesktopPool#use_dedicated_vm_host}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arePrivilegedUsers`<sup>Required</sup> <a name="arePrivilegedUsers" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.arePrivilegedUsers"></a>

```java
public java.lang.Object getArePrivilegedUsers();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#are_privileged_users DesktopsDesktopPool#are_privileged_users}.

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#availability_domain DesktopsDesktopPool#availability_domain}.

---

##### `availabilityPolicy`<sup>Required</sup> <a name="availabilityPolicy" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.availabilityPolicy"></a>

```java
public DesktopsDesktopPoolAvailabilityPolicy getAvailabilityPolicy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicy">DesktopsDesktopPoolAvailabilityPolicy</a>

availability_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#availability_policy DesktopsDesktopPool#availability_policy}

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#compartment_id DesktopsDesktopPool#compartment_id}.

---

##### `contactDetails`<sup>Required</sup> <a name="contactDetails" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.contactDetails"></a>

```java
public java.lang.String getContactDetails();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#contact_details DesktopsDesktopPool#contact_details}.

---

##### `devicePolicy`<sup>Required</sup> <a name="devicePolicy" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.devicePolicy"></a>

```java
public DesktopsDesktopPoolDevicePolicy getDevicePolicy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy">DesktopsDesktopPoolDevicePolicy</a>

device_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#device_policy DesktopsDesktopPool#device_policy}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#display_name DesktopsDesktopPool#display_name}.

---

##### `image`<sup>Required</sup> <a name="image" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.image"></a>

```java
public DesktopsDesktopPoolImage getImage();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImage">DesktopsDesktopPoolImage</a>

image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#image DesktopsDesktopPool#image}

---

##### `isStorageEnabled`<sup>Required</sup> <a name="isStorageEnabled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.isStorageEnabled"></a>

```java
public java.lang.Object getIsStorageEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#is_storage_enabled DesktopsDesktopPool#is_storage_enabled}.

---

##### `maximumSize`<sup>Required</sup> <a name="maximumSize" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.maximumSize"></a>

```java
public java.lang.Number getMaximumSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#maximum_size DesktopsDesktopPool#maximum_size}.

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.networkConfiguration"></a>

```java
public DesktopsDesktopPoolNetworkConfiguration getNetworkConfiguration();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfiguration">DesktopsDesktopPoolNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#network_configuration DesktopsDesktopPool#network_configuration}

---

##### `shapeName`<sup>Required</sup> <a name="shapeName" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.shapeName"></a>

```java
public java.lang.String getShapeName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#shape_name DesktopsDesktopPool#shape_name}.

---

##### `standbySize`<sup>Required</sup> <a name="standbySize" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.standbySize"></a>

```java
public java.lang.Number getStandbySize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#standby_size DesktopsDesktopPool#standby_size}.

---

##### `storageBackupPolicyId`<sup>Required</sup> <a name="storageBackupPolicyId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.storageBackupPolicyId"></a>

```java
public java.lang.String getStorageBackupPolicyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#storage_backup_policy_id DesktopsDesktopPool#storage_backup_policy_id}.

---

##### `storageSizeInGbs`<sup>Required</sup> <a name="storageSizeInGbs" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.storageSizeInGbs"></a>

```java
public java.lang.Number getStorageSizeInGbs();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#storage_size_in_gbs DesktopsDesktopPool#storage_size_in_gbs}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#defined_tags DesktopsDesktopPool#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#description DesktopsDesktopPool#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#freeform_tags DesktopsDesktopPool#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#id DesktopsDesktopPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nsgIds`<sup>Optional</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#nsg_ids DesktopsDesktopPool#nsg_ids}.

---

##### `privateAccessDetails`<sup>Optional</sup> <a name="privateAccessDetails" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.privateAccessDetails"></a>

```java
public DesktopsDesktopPoolPrivateAccessDetails getPrivateAccessDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetails">DesktopsDesktopPoolPrivateAccessDetails</a>

private_access_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#private_access_details DesktopsDesktopPool#private_access_details}

---

##### `sessionLifecycleActions`<sup>Optional</sup> <a name="sessionLifecycleActions" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.sessionLifecycleActions"></a>

```java
public DesktopsDesktopPoolSessionLifecycleActions getSessionLifecycleActions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActions">DesktopsDesktopPoolSessionLifecycleActions</a>

session_lifecycle_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#session_lifecycle_actions DesktopsDesktopPool#session_lifecycle_actions}

---

##### `shapeConfig`<sup>Optional</sup> <a name="shapeConfig" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.shapeConfig"></a>

```java
public DesktopsDesktopPoolShapeConfig getShapeConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfig">DesktopsDesktopPoolShapeConfig</a>

shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#shape_config DesktopsDesktopPool#shape_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.timeouts"></a>

```java
public DesktopsDesktopPoolTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeouts">DesktopsDesktopPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#timeouts DesktopsDesktopPool#timeouts}

---

##### `timeStartScheduled`<sup>Optional</sup> <a name="timeStartScheduled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.timeStartScheduled"></a>

```java
public java.lang.String getTimeStartScheduled();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#time_start_scheduled DesktopsDesktopPool#time_start_scheduled}.

---

##### `timeStopScheduled`<sup>Optional</sup> <a name="timeStopScheduled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.timeStopScheduled"></a>

```java
public java.lang.String getTimeStopScheduled();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#time_stop_scheduled DesktopsDesktopPool#time_stop_scheduled}.

---

##### `useDedicatedVmHost`<sup>Optional</sup> <a name="useDedicatedVmHost" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.useDedicatedVmHost"></a>

```java
public java.lang.String getUseDedicatedVmHost();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#use_dedicated_vm_host DesktopsDesktopPool#use_dedicated_vm_host}.

---

### DesktopsDesktopPoolDevicePolicy <a name="DesktopsDesktopPoolDevicePolicy" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.desktops_desktop_pool.DesktopsDesktopPoolDevicePolicy;

DesktopsDesktopPoolDevicePolicy.builder()
    .audioMode(java.lang.String)
    .cdmMode(java.lang.String)
    .clipboardMode(java.lang.String)
    .isDisplayEnabled(java.lang.Boolean)
    .isDisplayEnabled(IResolvable)
    .isKeyboardEnabled(java.lang.Boolean)
    .isKeyboardEnabled(IResolvable)
    .isPointerEnabled(java.lang.Boolean)
    .isPointerEnabled(IResolvable)
    .isPrintingEnabled(java.lang.Boolean)
    .isPrintingEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy.property.audioMode">audioMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#audio_mode DesktopsDesktopPool#audio_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy.property.cdmMode">cdmMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#cdm_mode DesktopsDesktopPool#cdm_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy.property.clipboardMode">clipboardMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#clipboard_mode DesktopsDesktopPool#clipboard_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy.property.isDisplayEnabled">isDisplayEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#is_display_enabled DesktopsDesktopPool#is_display_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy.property.isKeyboardEnabled">isKeyboardEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#is_keyboard_enabled DesktopsDesktopPool#is_keyboard_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy.property.isPointerEnabled">isPointerEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#is_pointer_enabled DesktopsDesktopPool#is_pointer_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy.property.isPrintingEnabled">isPrintingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#is_printing_enabled DesktopsDesktopPool#is_printing_enabled}. |

---

##### `audioMode`<sup>Required</sup> <a name="audioMode" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy.property.audioMode"></a>

```java
public java.lang.String getAudioMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#audio_mode DesktopsDesktopPool#audio_mode}.

---

##### `cdmMode`<sup>Required</sup> <a name="cdmMode" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy.property.cdmMode"></a>

```java
public java.lang.String getCdmMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#cdm_mode DesktopsDesktopPool#cdm_mode}.

---

##### `clipboardMode`<sup>Required</sup> <a name="clipboardMode" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy.property.clipboardMode"></a>

```java
public java.lang.String getClipboardMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#clipboard_mode DesktopsDesktopPool#clipboard_mode}.

---

##### `isDisplayEnabled`<sup>Required</sup> <a name="isDisplayEnabled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy.property.isDisplayEnabled"></a>

```java
public java.lang.Object getIsDisplayEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#is_display_enabled DesktopsDesktopPool#is_display_enabled}.

---

##### `isKeyboardEnabled`<sup>Required</sup> <a name="isKeyboardEnabled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy.property.isKeyboardEnabled"></a>

```java
public java.lang.Object getIsKeyboardEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#is_keyboard_enabled DesktopsDesktopPool#is_keyboard_enabled}.

---

##### `isPointerEnabled`<sup>Required</sup> <a name="isPointerEnabled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy.property.isPointerEnabled"></a>

```java
public java.lang.Object getIsPointerEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#is_pointer_enabled DesktopsDesktopPool#is_pointer_enabled}.

---

##### `isPrintingEnabled`<sup>Required</sup> <a name="isPrintingEnabled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy.property.isPrintingEnabled"></a>

```java
public java.lang.Object getIsPrintingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#is_printing_enabled DesktopsDesktopPool#is_printing_enabled}.

---

### DesktopsDesktopPoolImage <a name="DesktopsDesktopPoolImage" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.desktops_desktop_pool.DesktopsDesktopPoolImage;

DesktopsDesktopPoolImage.builder()
    .imageId(java.lang.String)
    .imageName(java.lang.String)
//  .operatingSystem(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImage.property.imageId">imageId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#image_id DesktopsDesktopPool#image_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImage.property.imageName">imageName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#image_name DesktopsDesktopPool#image_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImage.property.operatingSystem">operatingSystem</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#operating_system DesktopsDesktopPool#operating_system}. |

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImage.property.imageId"></a>

```java
public java.lang.String getImageId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#image_id DesktopsDesktopPool#image_id}.

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImage.property.imageName"></a>

```java
public java.lang.String getImageName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#image_name DesktopsDesktopPool#image_name}.

---

##### `operatingSystem`<sup>Optional</sup> <a name="operatingSystem" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImage.property.operatingSystem"></a>

```java
public java.lang.String getOperatingSystem();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#operating_system DesktopsDesktopPool#operating_system}.

---

### DesktopsDesktopPoolNetworkConfiguration <a name="DesktopsDesktopPoolNetworkConfiguration" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.desktops_desktop_pool.DesktopsDesktopPoolNetworkConfiguration;

DesktopsDesktopPoolNetworkConfiguration.builder()
    .subnetId(java.lang.String)
    .vcnId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfiguration.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#subnet_id DesktopsDesktopPool#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfiguration.property.vcnId">vcnId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#vcn_id DesktopsDesktopPool#vcn_id}. |

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfiguration.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#subnet_id DesktopsDesktopPool#subnet_id}.

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfiguration.property.vcnId"></a>

```java
public java.lang.String getVcnId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#vcn_id DesktopsDesktopPool#vcn_id}.

---

### DesktopsDesktopPoolPrivateAccessDetails <a name="DesktopsDesktopPoolPrivateAccessDetails" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.desktops_desktop_pool.DesktopsDesktopPoolPrivateAccessDetails;

DesktopsDesktopPoolPrivateAccessDetails.builder()
    .subnetId(java.lang.String)
//  .nsgIds(java.util.List<java.lang.String>)
//  .privateIp(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetails.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#subnet_id DesktopsDesktopPool#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetails.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#nsg_ids DesktopsDesktopPool#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetails.property.privateIp">privateIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#private_ip DesktopsDesktopPool#private_ip}. |

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetails.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#subnet_id DesktopsDesktopPool#subnet_id}.

---

##### `nsgIds`<sup>Optional</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetails.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#nsg_ids DesktopsDesktopPool#nsg_ids}.

---

##### `privateIp`<sup>Optional</sup> <a name="privateIp" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetails.property.privateIp"></a>

```java
public java.lang.String getPrivateIp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#private_ip DesktopsDesktopPool#private_ip}.

---

### DesktopsDesktopPoolSessionLifecycleActions <a name="DesktopsDesktopPoolSessionLifecycleActions" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.desktops_desktop_pool.DesktopsDesktopPoolSessionLifecycleActions;

DesktopsDesktopPoolSessionLifecycleActions.builder()
//  .disconnect(DesktopsDesktopPoolSessionLifecycleActionsDisconnect)
//  .inactivity(DesktopsDesktopPoolSessionLifecycleActionsInactivity)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActions.property.disconnect">disconnect</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnect">DesktopsDesktopPoolSessionLifecycleActionsDisconnect</a></code> | disconnect block. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActions.property.inactivity">inactivity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivity">DesktopsDesktopPoolSessionLifecycleActionsInactivity</a></code> | inactivity block. |

---

##### `disconnect`<sup>Optional</sup> <a name="disconnect" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActions.property.disconnect"></a>

```java
public DesktopsDesktopPoolSessionLifecycleActionsDisconnect getDisconnect();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnect">DesktopsDesktopPoolSessionLifecycleActionsDisconnect</a>

disconnect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#disconnect DesktopsDesktopPool#disconnect}

---

##### `inactivity`<sup>Optional</sup> <a name="inactivity" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActions.property.inactivity"></a>

```java
public DesktopsDesktopPoolSessionLifecycleActionsInactivity getInactivity();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivity">DesktopsDesktopPoolSessionLifecycleActionsInactivity</a>

inactivity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#inactivity DesktopsDesktopPool#inactivity}

---

### DesktopsDesktopPoolSessionLifecycleActionsDisconnect <a name="DesktopsDesktopPoolSessionLifecycleActionsDisconnect" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnect"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnect.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.desktops_desktop_pool.DesktopsDesktopPoolSessionLifecycleActionsDisconnect;

DesktopsDesktopPoolSessionLifecycleActionsDisconnect.builder()
    .action(java.lang.String)
//  .gracePeriodInMinutes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnect.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#action DesktopsDesktopPool#action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnect.property.gracePeriodInMinutes">gracePeriodInMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#grace_period_in_minutes DesktopsDesktopPool#grace_period_in_minutes}. |

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnect.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#action DesktopsDesktopPool#action}.

---

##### `gracePeriodInMinutes`<sup>Optional</sup> <a name="gracePeriodInMinutes" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnect.property.gracePeriodInMinutes"></a>

```java
public java.lang.Number getGracePeriodInMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#grace_period_in_minutes DesktopsDesktopPool#grace_period_in_minutes}.

---

### DesktopsDesktopPoolSessionLifecycleActionsInactivity <a name="DesktopsDesktopPoolSessionLifecycleActionsInactivity" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivity"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.desktops_desktop_pool.DesktopsDesktopPoolSessionLifecycleActionsInactivity;

DesktopsDesktopPoolSessionLifecycleActionsInactivity.builder()
    .action(java.lang.String)
//  .gracePeriodInMinutes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivity.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#action DesktopsDesktopPool#action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivity.property.gracePeriodInMinutes">gracePeriodInMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#grace_period_in_minutes DesktopsDesktopPool#grace_period_in_minutes}. |

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivity.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#action DesktopsDesktopPool#action}.

---

##### `gracePeriodInMinutes`<sup>Optional</sup> <a name="gracePeriodInMinutes" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivity.property.gracePeriodInMinutes"></a>

```java
public java.lang.Number getGracePeriodInMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#grace_period_in_minutes DesktopsDesktopPool#grace_period_in_minutes}.

---

### DesktopsDesktopPoolShapeConfig <a name="DesktopsDesktopPoolShapeConfig" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.desktops_desktop_pool.DesktopsDesktopPoolShapeConfig;

DesktopsDesktopPoolShapeConfig.builder()
//  .baselineOcpuUtilization(java.lang.String)
//  .memoryInGbs(java.lang.String)
//  .ocpus(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfig.property.baselineOcpuUtilization">baselineOcpuUtilization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#baseline_ocpu_utilization DesktopsDesktopPool#baseline_ocpu_utilization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfig.property.memoryInGbs">memoryInGbs</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#memory_in_gbs DesktopsDesktopPool#memory_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfig.property.ocpus">ocpus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#ocpus DesktopsDesktopPool#ocpus}. |

---

##### `baselineOcpuUtilization`<sup>Optional</sup> <a name="baselineOcpuUtilization" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfig.property.baselineOcpuUtilization"></a>

```java
public java.lang.String getBaselineOcpuUtilization();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#baseline_ocpu_utilization DesktopsDesktopPool#baseline_ocpu_utilization}.

---

##### `memoryInGbs`<sup>Optional</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfig.property.memoryInGbs"></a>

```java
public java.lang.String getMemoryInGbs();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#memory_in_gbs DesktopsDesktopPool#memory_in_gbs}.

---

##### `ocpus`<sup>Optional</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfig.property.ocpus"></a>

```java
public java.lang.String getOcpus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#ocpus DesktopsDesktopPool#ocpus}.

---

### DesktopsDesktopPoolTimeouts <a name="DesktopsDesktopPoolTimeouts" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.desktops_desktop_pool.DesktopsDesktopPoolTimeouts;

DesktopsDesktopPoolTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#create DesktopsDesktopPool#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#delete DesktopsDesktopPool#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#update DesktopsDesktopPool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#create DesktopsDesktopPool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#delete DesktopsDesktopPool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#update DesktopsDesktopPool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DesktopsDesktopPoolAvailabilityPolicyOutputReference <a name="DesktopsDesktopPoolAvailabilityPolicyOutputReference" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.desktops_desktop_pool.DesktopsDesktopPoolAvailabilityPolicyOutputReference;

new DesktopsDesktopPoolAvailabilityPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.putStartSchedule">putStartSchedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.putStopSchedule">putStopSchedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.resetStartSchedule">resetStartSchedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.resetStopSchedule">resetStopSchedule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStartSchedule` <a name="putStartSchedule" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.putStartSchedule"></a>

```java
public void putStartSchedule(DesktopsDesktopPoolAvailabilityPolicyStartSchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.putStartSchedule.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartSchedule">DesktopsDesktopPoolAvailabilityPolicyStartSchedule</a>

---

##### `putStopSchedule` <a name="putStopSchedule" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.putStopSchedule"></a>

```java
public void putStopSchedule(DesktopsDesktopPoolAvailabilityPolicyStopSchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.putStopSchedule.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopSchedule">DesktopsDesktopPoolAvailabilityPolicyStopSchedule</a>

---

##### `resetStartSchedule` <a name="resetStartSchedule" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.resetStartSchedule"></a>

```java
public void resetStartSchedule()
```

##### `resetStopSchedule` <a name="resetStopSchedule" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.resetStopSchedule"></a>

```java
public void resetStopSchedule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.property.startSchedule">startSchedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference">DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.property.stopSchedule">stopSchedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference">DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.property.startScheduleInput">startScheduleInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartSchedule">DesktopsDesktopPoolAvailabilityPolicyStartSchedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.property.stopScheduleInput">stopScheduleInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopSchedule">DesktopsDesktopPoolAvailabilityPolicyStopSchedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicy">DesktopsDesktopPoolAvailabilityPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `startSchedule`<sup>Required</sup> <a name="startSchedule" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.property.startSchedule"></a>

```java
public DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference getStartSchedule();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference">DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference</a>

---

##### `stopSchedule`<sup>Required</sup> <a name="stopSchedule" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.property.stopSchedule"></a>

```java
public DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference getStopSchedule();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference">DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference</a>

---

##### `startScheduleInput`<sup>Optional</sup> <a name="startScheduleInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.property.startScheduleInput"></a>

```java
public DesktopsDesktopPoolAvailabilityPolicyStartSchedule getStartScheduleInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartSchedule">DesktopsDesktopPoolAvailabilityPolicyStartSchedule</a>

---

##### `stopScheduleInput`<sup>Optional</sup> <a name="stopScheduleInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.property.stopScheduleInput"></a>

```java
public DesktopsDesktopPoolAvailabilityPolicyStopSchedule getStopScheduleInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopSchedule">DesktopsDesktopPoolAvailabilityPolicyStopSchedule</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.property.internalValue"></a>

```java
public DesktopsDesktopPoolAvailabilityPolicy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicy">DesktopsDesktopPoolAvailabilityPolicy</a>

---


### DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference <a name="DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.desktops_desktop_pool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference;

new DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.cronExpressionInput">cronExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.timezoneInput">timezoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.cronExpression">cronExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.timezone">timezone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartSchedule">DesktopsDesktopPoolAvailabilityPolicyStartSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cronExpressionInput`<sup>Optional</sup> <a name="cronExpressionInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.cronExpressionInput"></a>

```java
public java.lang.String getCronExpressionInput();
```

- *Type:* java.lang.String

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.timezoneInput"></a>

```java
public java.lang.String getTimezoneInput();
```

- *Type:* java.lang.String

---

##### `cronExpression`<sup>Required</sup> <a name="cronExpression" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.cronExpression"></a>

```java
public java.lang.String getCronExpression();
```

- *Type:* java.lang.String

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.internalValue"></a>

```java
public DesktopsDesktopPoolAvailabilityPolicyStartSchedule getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartSchedule">DesktopsDesktopPoolAvailabilityPolicyStartSchedule</a>

---


### DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference <a name="DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.desktops_desktop_pool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference;

new DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.cronExpressionInput">cronExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.timezoneInput">timezoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.cronExpression">cronExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.timezone">timezone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopSchedule">DesktopsDesktopPoolAvailabilityPolicyStopSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cronExpressionInput`<sup>Optional</sup> <a name="cronExpressionInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.cronExpressionInput"></a>

```java
public java.lang.String getCronExpressionInput();
```

- *Type:* java.lang.String

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.timezoneInput"></a>

```java
public java.lang.String getTimezoneInput();
```

- *Type:* java.lang.String

---

##### `cronExpression`<sup>Required</sup> <a name="cronExpression" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.cronExpression"></a>

```java
public java.lang.String getCronExpression();
```

- *Type:* java.lang.String

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.internalValue"></a>

```java
public DesktopsDesktopPoolAvailabilityPolicyStopSchedule getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopSchedule">DesktopsDesktopPoolAvailabilityPolicyStopSchedule</a>

---


### DesktopsDesktopPoolDevicePolicyOutputReference <a name="DesktopsDesktopPoolDevicePolicyOutputReference" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.desktops_desktop_pool.DesktopsDesktopPoolDevicePolicyOutputReference;

new DesktopsDesktopPoolDevicePolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.audioModeInput">audioModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.cdmModeInput">cdmModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.clipboardModeInput">clipboardModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.isDisplayEnabledInput">isDisplayEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.isKeyboardEnabledInput">isKeyboardEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.isPointerEnabledInput">isPointerEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.isPrintingEnabledInput">isPrintingEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.audioMode">audioMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.cdmMode">cdmMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.clipboardMode">clipboardMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.isDisplayEnabled">isDisplayEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.isKeyboardEnabled">isKeyboardEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.isPointerEnabled">isPointerEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.isPrintingEnabled">isPrintingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy">DesktopsDesktopPoolDevicePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `audioModeInput`<sup>Optional</sup> <a name="audioModeInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.audioModeInput"></a>

```java
public java.lang.String getAudioModeInput();
```

- *Type:* java.lang.String

---

##### `cdmModeInput`<sup>Optional</sup> <a name="cdmModeInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.cdmModeInput"></a>

```java
public java.lang.String getCdmModeInput();
```

- *Type:* java.lang.String

---

##### `clipboardModeInput`<sup>Optional</sup> <a name="clipboardModeInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.clipboardModeInput"></a>

```java
public java.lang.String getClipboardModeInput();
```

- *Type:* java.lang.String

---

##### `isDisplayEnabledInput`<sup>Optional</sup> <a name="isDisplayEnabledInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.isDisplayEnabledInput"></a>

```java
public java.lang.Object getIsDisplayEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isKeyboardEnabledInput`<sup>Optional</sup> <a name="isKeyboardEnabledInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.isKeyboardEnabledInput"></a>

```java
public java.lang.Object getIsKeyboardEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isPointerEnabledInput`<sup>Optional</sup> <a name="isPointerEnabledInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.isPointerEnabledInput"></a>

```java
public java.lang.Object getIsPointerEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isPrintingEnabledInput`<sup>Optional</sup> <a name="isPrintingEnabledInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.isPrintingEnabledInput"></a>

```java
public java.lang.Object getIsPrintingEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `audioMode`<sup>Required</sup> <a name="audioMode" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.audioMode"></a>

```java
public java.lang.String getAudioMode();
```

- *Type:* java.lang.String

---

##### `cdmMode`<sup>Required</sup> <a name="cdmMode" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.cdmMode"></a>

```java
public java.lang.String getCdmMode();
```

- *Type:* java.lang.String

---

##### `clipboardMode`<sup>Required</sup> <a name="clipboardMode" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.clipboardMode"></a>

```java
public java.lang.String getClipboardMode();
```

- *Type:* java.lang.String

---

##### `isDisplayEnabled`<sup>Required</sup> <a name="isDisplayEnabled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.isDisplayEnabled"></a>

```java
public java.lang.Object getIsDisplayEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isKeyboardEnabled`<sup>Required</sup> <a name="isKeyboardEnabled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.isKeyboardEnabled"></a>

```java
public java.lang.Object getIsKeyboardEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isPointerEnabled`<sup>Required</sup> <a name="isPointerEnabled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.isPointerEnabled"></a>

```java
public java.lang.Object getIsPointerEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isPrintingEnabled`<sup>Required</sup> <a name="isPrintingEnabled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.isPrintingEnabled"></a>

```java
public java.lang.Object getIsPrintingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.internalValue"></a>

```java
public DesktopsDesktopPoolDevicePolicy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy">DesktopsDesktopPoolDevicePolicy</a>

---


### DesktopsDesktopPoolImageOutputReference <a name="DesktopsDesktopPoolImageOutputReference" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.desktops_desktop_pool.DesktopsDesktopPoolImageOutputReference;

new DesktopsDesktopPoolImageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.resetOperatingSystem">resetOperatingSystem</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOperatingSystem` <a name="resetOperatingSystem" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.resetOperatingSystem"></a>

```java
public void resetOperatingSystem()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.imageIdInput">imageIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.imageNameInput">imageNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.operatingSystemInput">operatingSystemInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.imageId">imageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.imageName">imageName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.operatingSystem">operatingSystem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImage">DesktopsDesktopPoolImage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `imageIdInput`<sup>Optional</sup> <a name="imageIdInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.imageIdInput"></a>

```java
public java.lang.String getImageIdInput();
```

- *Type:* java.lang.String

---

##### `imageNameInput`<sup>Optional</sup> <a name="imageNameInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.imageNameInput"></a>

```java
public java.lang.String getImageNameInput();
```

- *Type:* java.lang.String

---

##### `operatingSystemInput`<sup>Optional</sup> <a name="operatingSystemInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.operatingSystemInput"></a>

```java
public java.lang.String getOperatingSystemInput();
```

- *Type:* java.lang.String

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.imageId"></a>

```java
public java.lang.String getImageId();
```

- *Type:* java.lang.String

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.imageName"></a>

```java
public java.lang.String getImageName();
```

- *Type:* java.lang.String

---

##### `operatingSystem`<sup>Required</sup> <a name="operatingSystem" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.operatingSystem"></a>

```java
public java.lang.String getOperatingSystem();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.internalValue"></a>

```java
public DesktopsDesktopPoolImage getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImage">DesktopsDesktopPoolImage</a>

---


### DesktopsDesktopPoolNetworkConfigurationOutputReference <a name="DesktopsDesktopPoolNetworkConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.desktops_desktop_pool.DesktopsDesktopPoolNetworkConfigurationOutputReference;

new DesktopsDesktopPoolNetworkConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.property.vcnIdInput">vcnIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.property.vcnId">vcnId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfiguration">DesktopsDesktopPoolNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `vcnIdInput`<sup>Optional</sup> <a name="vcnIdInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.property.vcnIdInput"></a>

```java
public java.lang.String getVcnIdInput();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.property.vcnId"></a>

```java
public java.lang.String getVcnId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.property.internalValue"></a>

```java
public DesktopsDesktopPoolNetworkConfiguration getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfiguration">DesktopsDesktopPoolNetworkConfiguration</a>

---


### DesktopsDesktopPoolPrivateAccessDetailsOutputReference <a name="DesktopsDesktopPoolPrivateAccessDetailsOutputReference" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.desktops_desktop_pool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference;

new DesktopsDesktopPoolPrivateAccessDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.resetNsgIds">resetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.resetPrivateIp">resetPrivateIp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNsgIds` <a name="resetNsgIds" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.resetNsgIds"></a>

```java
public void resetNsgIds()
```

##### `resetPrivateIp` <a name="resetPrivateIp" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.resetPrivateIp"></a>

```java
public void resetPrivateIp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.endpointFqdn">endpointFqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.vcnId">vcnId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.nsgIdsInput">nsgIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.privateIpInput">privateIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.privateIp">privateIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetails">DesktopsDesktopPoolPrivateAccessDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endpointFqdn`<sup>Required</sup> <a name="endpointFqdn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.endpointFqdn"></a>

```java
public java.lang.String getEndpointFqdn();
```

- *Type:* java.lang.String

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.vcnId"></a>

```java
public java.lang.String getVcnId();
```

- *Type:* java.lang.String

---

##### `nsgIdsInput`<sup>Optional</sup> <a name="nsgIdsInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.nsgIdsInput"></a>

```java
public java.util.List<java.lang.String> getNsgIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `privateIpInput`<sup>Optional</sup> <a name="privateIpInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.privateIpInput"></a>

```java
public java.lang.String getPrivateIpInput();
```

- *Type:* java.lang.String

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.privateIp"></a>

```java
public java.lang.String getPrivateIp();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.internalValue"></a>

```java
public DesktopsDesktopPoolPrivateAccessDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetails">DesktopsDesktopPoolPrivateAccessDetails</a>

---


### DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference <a name="DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.desktops_desktop_pool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference;

new DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.resetGracePeriodInMinutes">resetGracePeriodInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGracePeriodInMinutes` <a name="resetGracePeriodInMinutes" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.resetGracePeriodInMinutes"></a>

```java
public void resetGracePeriodInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.gracePeriodInMinutesInput">gracePeriodInMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.gracePeriodInMinutes">gracePeriodInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnect">DesktopsDesktopPoolSessionLifecycleActionsDisconnect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `gracePeriodInMinutesInput`<sup>Optional</sup> <a name="gracePeriodInMinutesInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.gracePeriodInMinutesInput"></a>

```java
public java.lang.Number getGracePeriodInMinutesInput();
```

- *Type:* java.lang.Number

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `gracePeriodInMinutes`<sup>Required</sup> <a name="gracePeriodInMinutes" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.gracePeriodInMinutes"></a>

```java
public java.lang.Number getGracePeriodInMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.internalValue"></a>

```java
public DesktopsDesktopPoolSessionLifecycleActionsDisconnect getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnect">DesktopsDesktopPoolSessionLifecycleActionsDisconnect</a>

---


### DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference <a name="DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.desktops_desktop_pool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference;

new DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.resetGracePeriodInMinutes">resetGracePeriodInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGracePeriodInMinutes` <a name="resetGracePeriodInMinutes" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.resetGracePeriodInMinutes"></a>

```java
public void resetGracePeriodInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.gracePeriodInMinutesInput">gracePeriodInMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.gracePeriodInMinutes">gracePeriodInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivity">DesktopsDesktopPoolSessionLifecycleActionsInactivity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `gracePeriodInMinutesInput`<sup>Optional</sup> <a name="gracePeriodInMinutesInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.gracePeriodInMinutesInput"></a>

```java
public java.lang.Number getGracePeriodInMinutesInput();
```

- *Type:* java.lang.Number

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `gracePeriodInMinutes`<sup>Required</sup> <a name="gracePeriodInMinutes" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.gracePeriodInMinutes"></a>

```java
public java.lang.Number getGracePeriodInMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.internalValue"></a>

```java
public DesktopsDesktopPoolSessionLifecycleActionsInactivity getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivity">DesktopsDesktopPoolSessionLifecycleActionsInactivity</a>

---


### DesktopsDesktopPoolSessionLifecycleActionsOutputReference <a name="DesktopsDesktopPoolSessionLifecycleActionsOutputReference" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.desktops_desktop_pool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference;

new DesktopsDesktopPoolSessionLifecycleActionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.putDisconnect">putDisconnect</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.putInactivity">putInactivity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.resetDisconnect">resetDisconnect</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.resetInactivity">resetInactivity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDisconnect` <a name="putDisconnect" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.putDisconnect"></a>

```java
public void putDisconnect(DesktopsDesktopPoolSessionLifecycleActionsDisconnect value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.putDisconnect.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnect">DesktopsDesktopPoolSessionLifecycleActionsDisconnect</a>

---

##### `putInactivity` <a name="putInactivity" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.putInactivity"></a>

```java
public void putInactivity(DesktopsDesktopPoolSessionLifecycleActionsInactivity value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.putInactivity.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivity">DesktopsDesktopPoolSessionLifecycleActionsInactivity</a>

---

##### `resetDisconnect` <a name="resetDisconnect" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.resetDisconnect"></a>

```java
public void resetDisconnect()
```

##### `resetInactivity` <a name="resetInactivity" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.resetInactivity"></a>

```java
public void resetInactivity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.disconnect">disconnect</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference">DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.inactivity">inactivity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference">DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.disconnectInput">disconnectInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnect">DesktopsDesktopPoolSessionLifecycleActionsDisconnect</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.inactivityInput">inactivityInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivity">DesktopsDesktopPoolSessionLifecycleActionsInactivity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActions">DesktopsDesktopPoolSessionLifecycleActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `disconnect`<sup>Required</sup> <a name="disconnect" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.disconnect"></a>

```java
public DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference getDisconnect();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference">DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference</a>

---

##### `inactivity`<sup>Required</sup> <a name="inactivity" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.inactivity"></a>

```java
public DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference getInactivity();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference">DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference</a>

---

##### `disconnectInput`<sup>Optional</sup> <a name="disconnectInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.disconnectInput"></a>

```java
public DesktopsDesktopPoolSessionLifecycleActionsDisconnect getDisconnectInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnect">DesktopsDesktopPoolSessionLifecycleActionsDisconnect</a>

---

##### `inactivityInput`<sup>Optional</sup> <a name="inactivityInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.inactivityInput"></a>

```java
public DesktopsDesktopPoolSessionLifecycleActionsInactivity getInactivityInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivity">DesktopsDesktopPoolSessionLifecycleActionsInactivity</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.internalValue"></a>

```java
public DesktopsDesktopPoolSessionLifecycleActions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActions">DesktopsDesktopPoolSessionLifecycleActions</a>

---


### DesktopsDesktopPoolShapeConfigOutputReference <a name="DesktopsDesktopPoolShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.desktops_desktop_pool.DesktopsDesktopPoolShapeConfigOutputReference;

new DesktopsDesktopPoolShapeConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.resetBaselineOcpuUtilization">resetBaselineOcpuUtilization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.resetMemoryInGbs">resetMemoryInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.resetOcpus">resetOcpus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBaselineOcpuUtilization` <a name="resetBaselineOcpuUtilization" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.resetBaselineOcpuUtilization"></a>

```java
public void resetBaselineOcpuUtilization()
```

##### `resetMemoryInGbs` <a name="resetMemoryInGbs" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.resetMemoryInGbs"></a>

```java
public void resetMemoryInGbs()
```

##### `resetOcpus` <a name="resetOcpus" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.resetOcpus"></a>

```java
public void resetOcpus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.baselineOcpuUtilizationInput">baselineOcpuUtilizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.memoryInGbsInput">memoryInGbsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.ocpusInput">ocpusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.baselineOcpuUtilization">baselineOcpuUtilization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.memoryInGbs">memoryInGbs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfig">DesktopsDesktopPoolShapeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `baselineOcpuUtilizationInput`<sup>Optional</sup> <a name="baselineOcpuUtilizationInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.baselineOcpuUtilizationInput"></a>

```java
public java.lang.String getBaselineOcpuUtilizationInput();
```

- *Type:* java.lang.String

---

##### `memoryInGbsInput`<sup>Optional</sup> <a name="memoryInGbsInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.memoryInGbsInput"></a>

```java
public java.lang.String getMemoryInGbsInput();
```

- *Type:* java.lang.String

---

##### `ocpusInput`<sup>Optional</sup> <a name="ocpusInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.ocpusInput"></a>

```java
public java.lang.String getOcpusInput();
```

- *Type:* java.lang.String

---

##### `baselineOcpuUtilization`<sup>Required</sup> <a name="baselineOcpuUtilization" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.baselineOcpuUtilization"></a>

```java
public java.lang.String getBaselineOcpuUtilization();
```

- *Type:* java.lang.String

---

##### `memoryInGbs`<sup>Required</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.memoryInGbs"></a>

```java
public java.lang.String getMemoryInGbs();
```

- *Type:* java.lang.String

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.ocpus"></a>

```java
public java.lang.String getOcpus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.internalValue"></a>

```java
public DesktopsDesktopPoolShapeConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfig">DesktopsDesktopPoolShapeConfig</a>

---


### DesktopsDesktopPoolTimeoutsOutputReference <a name="DesktopsDesktopPoolTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.desktops_desktop_pool.DesktopsDesktopPoolTimeoutsOutputReference;

new DesktopsDesktopPoolTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeouts">DesktopsDesktopPoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeouts">DesktopsDesktopPoolTimeouts</a>

---



