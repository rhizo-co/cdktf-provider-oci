# `desktopsDesktopPool` Submodule <a name="`desktopsDesktopPool` Submodule" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DesktopsDesktopPool <a name="DesktopsDesktopPool" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool oci_desktops_desktop_pool}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import desktops_desktop_pool

desktopsDesktopPool.DesktopsDesktopPool(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  are_privileged_users: typing.Union[bool, IResolvable],
  availability_domain: str,
  availability_policy: DesktopsDesktopPoolAvailabilityPolicy,
  compartment_id: str,
  contact_details: str,
  device_policy: DesktopsDesktopPoolDevicePolicy,
  display_name: str,
  image: DesktopsDesktopPoolImage,
  is_storage_enabled: typing.Union[bool, IResolvable],
  maximum_size: typing.Union[int, float],
  network_configuration: DesktopsDesktopPoolNetworkConfiguration,
  shape_name: str,
  standby_size: typing.Union[int, float],
  storage_backup_policy_id: str,
  storage_size_in_gbs: typing.Union[int, float],
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  nsg_ids: typing.List[str] = None,
  private_access_details: DesktopsDesktopPoolPrivateAccessDetails = None,
  session_lifecycle_actions: DesktopsDesktopPoolSessionLifecycleActions = None,
  shape_config: DesktopsDesktopPoolShapeConfig = None,
  timeouts: DesktopsDesktopPoolTimeouts = None,
  time_start_scheduled: str = None,
  time_stop_scheduled: str = None,
  use_dedicated_vm_host: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.arePrivilegedUsers">are_privileged_users</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#are_privileged_users DesktopsDesktopPool#are_privileged_users}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#availability_domain DesktopsDesktopPool#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.availabilityPolicy">availability_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicy">DesktopsDesktopPoolAvailabilityPolicy</a></code> | availability_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#compartment_id DesktopsDesktopPool#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.contactDetails">contact_details</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#contact_details DesktopsDesktopPool#contact_details}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.devicePolicy">device_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy">DesktopsDesktopPoolDevicePolicy</a></code> | device_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#display_name DesktopsDesktopPool#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.image">image</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImage">DesktopsDesktopPoolImage</a></code> | image block. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.isStorageEnabled">is_storage_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#is_storage_enabled DesktopsDesktopPool#is_storage_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.maximumSize">maximum_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#maximum_size DesktopsDesktopPool#maximum_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.networkConfiguration">network_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfiguration">DesktopsDesktopPoolNetworkConfiguration</a></code> | network_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.shapeName">shape_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#shape_name DesktopsDesktopPool#shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.standbySize">standby_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#standby_size DesktopsDesktopPool#standby_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.storageBackupPolicyId">storage_backup_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#storage_backup_policy_id DesktopsDesktopPool#storage_backup_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.storageSizeInGbs">storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#storage_size_in_gbs DesktopsDesktopPool#storage_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#defined_tags DesktopsDesktopPool#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#description DesktopsDesktopPool#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#freeform_tags DesktopsDesktopPool#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#id DesktopsDesktopPool#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#nsg_ids DesktopsDesktopPool#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.privateAccessDetails">private_access_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetails">DesktopsDesktopPoolPrivateAccessDetails</a></code> | private_access_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.sessionLifecycleActions">session_lifecycle_actions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActions">DesktopsDesktopPoolSessionLifecycleActions</a></code> | session_lifecycle_actions block. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.shapeConfig">shape_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfig">DesktopsDesktopPoolShapeConfig</a></code> | shape_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeouts">DesktopsDesktopPoolTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.timeStartScheduled">time_start_scheduled</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#time_start_scheduled DesktopsDesktopPool#time_start_scheduled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.timeStopScheduled">time_stop_scheduled</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#time_stop_scheduled DesktopsDesktopPool#time_stop_scheduled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.useDedicatedVmHost">use_dedicated_vm_host</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#use_dedicated_vm_host DesktopsDesktopPool#use_dedicated_vm_host}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `are_privileged_users`<sup>Required</sup> <a name="are_privileged_users" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.arePrivilegedUsers"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#are_privileged_users DesktopsDesktopPool#are_privileged_users}.

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.availabilityDomain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#availability_domain DesktopsDesktopPool#availability_domain}.

---

##### `availability_policy`<sup>Required</sup> <a name="availability_policy" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.availabilityPolicy"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicy">DesktopsDesktopPoolAvailabilityPolicy</a>

availability_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#availability_policy DesktopsDesktopPool#availability_policy}

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#compartment_id DesktopsDesktopPool#compartment_id}.

---

##### `contact_details`<sup>Required</sup> <a name="contact_details" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.contactDetails"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#contact_details DesktopsDesktopPool#contact_details}.

---

##### `device_policy`<sup>Required</sup> <a name="device_policy" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.devicePolicy"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy">DesktopsDesktopPoolDevicePolicy</a>

device_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#device_policy DesktopsDesktopPool#device_policy}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#display_name DesktopsDesktopPool#display_name}.

---

##### `image`<sup>Required</sup> <a name="image" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.image"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImage">DesktopsDesktopPoolImage</a>

image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#image DesktopsDesktopPool#image}

---

##### `is_storage_enabled`<sup>Required</sup> <a name="is_storage_enabled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.isStorageEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#is_storage_enabled DesktopsDesktopPool#is_storage_enabled}.

---

##### `maximum_size`<sup>Required</sup> <a name="maximum_size" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.maximumSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#maximum_size DesktopsDesktopPool#maximum_size}.

---

##### `network_configuration`<sup>Required</sup> <a name="network_configuration" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.networkConfiguration"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfiguration">DesktopsDesktopPoolNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#network_configuration DesktopsDesktopPool#network_configuration}

---

##### `shape_name`<sup>Required</sup> <a name="shape_name" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.shapeName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#shape_name DesktopsDesktopPool#shape_name}.

---

##### `standby_size`<sup>Required</sup> <a name="standby_size" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.standbySize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#standby_size DesktopsDesktopPool#standby_size}.

---

##### `storage_backup_policy_id`<sup>Required</sup> <a name="storage_backup_policy_id" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.storageBackupPolicyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#storage_backup_policy_id DesktopsDesktopPool#storage_backup_policy_id}.

---

##### `storage_size_in_gbs`<sup>Required</sup> <a name="storage_size_in_gbs" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.storageSizeInGbs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#storage_size_in_gbs DesktopsDesktopPool#storage_size_in_gbs}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#defined_tags DesktopsDesktopPool#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#description DesktopsDesktopPool#description}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#freeform_tags DesktopsDesktopPool#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#id DesktopsDesktopPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nsg_ids`<sup>Optional</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.nsgIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#nsg_ids DesktopsDesktopPool#nsg_ids}.

---

##### `private_access_details`<sup>Optional</sup> <a name="private_access_details" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.privateAccessDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetails">DesktopsDesktopPoolPrivateAccessDetails</a>

private_access_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#private_access_details DesktopsDesktopPool#private_access_details}

---

##### `session_lifecycle_actions`<sup>Optional</sup> <a name="session_lifecycle_actions" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.sessionLifecycleActions"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActions">DesktopsDesktopPoolSessionLifecycleActions</a>

session_lifecycle_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#session_lifecycle_actions DesktopsDesktopPool#session_lifecycle_actions}

---

##### `shape_config`<sup>Optional</sup> <a name="shape_config" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.shapeConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfig">DesktopsDesktopPoolShapeConfig</a>

shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#shape_config DesktopsDesktopPool#shape_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeouts">DesktopsDesktopPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#timeouts DesktopsDesktopPool#timeouts}

---

##### `time_start_scheduled`<sup>Optional</sup> <a name="time_start_scheduled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.timeStartScheduled"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#time_start_scheduled DesktopsDesktopPool#time_start_scheduled}.

---

##### `time_stop_scheduled`<sup>Optional</sup> <a name="time_stop_scheduled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.timeStopScheduled"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#time_stop_scheduled DesktopsDesktopPool#time_stop_scheduled}.

---

##### `use_dedicated_vm_host`<sup>Optional</sup> <a name="use_dedicated_vm_host" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.useDedicatedVmHost"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#use_dedicated_vm_host DesktopsDesktopPool#use_dedicated_vm_host}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putAvailabilityPolicy">put_availability_policy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putDevicePolicy">put_device_policy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putImage">put_image</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putNetworkConfiguration">put_network_configuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putPrivateAccessDetails">put_private_access_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putSessionLifecycleActions">put_session_lifecycle_actions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putShapeConfig">put_shape_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetNsgIds">reset_nsg_ids</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetPrivateAccessDetails">reset_private_access_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetSessionLifecycleActions">reset_session_lifecycle_actions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetShapeConfig">reset_shape_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetTimeStartScheduled">reset_time_start_scheduled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetTimeStopScheduled">reset_time_stop_scheduled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetUseDedicatedVmHost">reset_use_dedicated_vm_host</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_availability_policy` <a name="put_availability_policy" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putAvailabilityPolicy"></a>

```python
def put_availability_policy(
  start_schedule: DesktopsDesktopPoolAvailabilityPolicyStartSchedule = None,
  stop_schedule: DesktopsDesktopPoolAvailabilityPolicyStopSchedule = None
) -> None
```

###### `start_schedule`<sup>Optional</sup> <a name="start_schedule" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putAvailabilityPolicy.parameter.startSchedule"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartSchedule">DesktopsDesktopPoolAvailabilityPolicyStartSchedule</a>

start_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#start_schedule DesktopsDesktopPool#start_schedule}

---

###### `stop_schedule`<sup>Optional</sup> <a name="stop_schedule" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putAvailabilityPolicy.parameter.stopSchedule"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopSchedule">DesktopsDesktopPoolAvailabilityPolicyStopSchedule</a>

stop_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#stop_schedule DesktopsDesktopPool#stop_schedule}

---

##### `put_device_policy` <a name="put_device_policy" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putDevicePolicy"></a>

```python
def put_device_policy(
  audio_mode: str,
  cdm_mode: str,
  clipboard_mode: str,
  is_display_enabled: typing.Union[bool, IResolvable],
  is_keyboard_enabled: typing.Union[bool, IResolvable],
  is_pointer_enabled: typing.Union[bool, IResolvable],
  is_printing_enabled: typing.Union[bool, IResolvable]
) -> None
```

###### `audio_mode`<sup>Required</sup> <a name="audio_mode" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putDevicePolicy.parameter.audioMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#audio_mode DesktopsDesktopPool#audio_mode}.

---

###### `cdm_mode`<sup>Required</sup> <a name="cdm_mode" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putDevicePolicy.parameter.cdmMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#cdm_mode DesktopsDesktopPool#cdm_mode}.

---

###### `clipboard_mode`<sup>Required</sup> <a name="clipboard_mode" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putDevicePolicy.parameter.clipboardMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#clipboard_mode DesktopsDesktopPool#clipboard_mode}.

---

###### `is_display_enabled`<sup>Required</sup> <a name="is_display_enabled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putDevicePolicy.parameter.isDisplayEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#is_display_enabled DesktopsDesktopPool#is_display_enabled}.

---

###### `is_keyboard_enabled`<sup>Required</sup> <a name="is_keyboard_enabled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putDevicePolicy.parameter.isKeyboardEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#is_keyboard_enabled DesktopsDesktopPool#is_keyboard_enabled}.

---

###### `is_pointer_enabled`<sup>Required</sup> <a name="is_pointer_enabled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putDevicePolicy.parameter.isPointerEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#is_pointer_enabled DesktopsDesktopPool#is_pointer_enabled}.

---

###### `is_printing_enabled`<sup>Required</sup> <a name="is_printing_enabled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putDevicePolicy.parameter.isPrintingEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#is_printing_enabled DesktopsDesktopPool#is_printing_enabled}.

---

##### `put_image` <a name="put_image" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putImage"></a>

```python
def put_image(
  image_id: str,
  image_name: str,
  operating_system: str = None
) -> None
```

###### `image_id`<sup>Required</sup> <a name="image_id" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putImage.parameter.imageId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#image_id DesktopsDesktopPool#image_id}.

---

###### `image_name`<sup>Required</sup> <a name="image_name" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putImage.parameter.imageName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#image_name DesktopsDesktopPool#image_name}.

---

###### `operating_system`<sup>Optional</sup> <a name="operating_system" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putImage.parameter.operatingSystem"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#operating_system DesktopsDesktopPool#operating_system}.

---

##### `put_network_configuration` <a name="put_network_configuration" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putNetworkConfiguration"></a>

```python
def put_network_configuration(
  subnet_id: str,
  vcn_id: str
) -> None
```

###### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putNetworkConfiguration.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#subnet_id DesktopsDesktopPool#subnet_id}.

---

###### `vcn_id`<sup>Required</sup> <a name="vcn_id" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putNetworkConfiguration.parameter.vcnId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#vcn_id DesktopsDesktopPool#vcn_id}.

---

##### `put_private_access_details` <a name="put_private_access_details" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putPrivateAccessDetails"></a>

```python
def put_private_access_details(
  subnet_id: str,
  nsg_ids: typing.List[str] = None,
  private_ip: str = None
) -> None
```

###### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putPrivateAccessDetails.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#subnet_id DesktopsDesktopPool#subnet_id}.

---

###### `nsg_ids`<sup>Optional</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putPrivateAccessDetails.parameter.nsgIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#nsg_ids DesktopsDesktopPool#nsg_ids}.

---

###### `private_ip`<sup>Optional</sup> <a name="private_ip" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putPrivateAccessDetails.parameter.privateIp"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#private_ip DesktopsDesktopPool#private_ip}.

---

##### `put_session_lifecycle_actions` <a name="put_session_lifecycle_actions" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putSessionLifecycleActions"></a>

```python
def put_session_lifecycle_actions(
  disconnect: DesktopsDesktopPoolSessionLifecycleActionsDisconnect = None,
  inactivity: DesktopsDesktopPoolSessionLifecycleActionsInactivity = None
) -> None
```

###### `disconnect`<sup>Optional</sup> <a name="disconnect" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putSessionLifecycleActions.parameter.disconnect"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnect">DesktopsDesktopPoolSessionLifecycleActionsDisconnect</a>

disconnect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#disconnect DesktopsDesktopPool#disconnect}

---

###### `inactivity`<sup>Optional</sup> <a name="inactivity" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putSessionLifecycleActions.parameter.inactivity"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivity">DesktopsDesktopPoolSessionLifecycleActionsInactivity</a>

inactivity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#inactivity DesktopsDesktopPool#inactivity}

---

##### `put_shape_config` <a name="put_shape_config" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putShapeConfig"></a>

```python
def put_shape_config(
  baseline_ocpu_utilization: str = None,
  memory_in_gbs: str = None,
  ocpus: str = None
) -> None
```

###### `baseline_ocpu_utilization`<sup>Optional</sup> <a name="baseline_ocpu_utilization" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putShapeConfig.parameter.baselineOcpuUtilization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#baseline_ocpu_utilization DesktopsDesktopPool#baseline_ocpu_utilization}.

---

###### `memory_in_gbs`<sup>Optional</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putShapeConfig.parameter.memoryInGbs"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#memory_in_gbs DesktopsDesktopPool#memory_in_gbs}.

---

###### `ocpus`<sup>Optional</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putShapeConfig.parameter.ocpus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#ocpus DesktopsDesktopPool#ocpus}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#create DesktopsDesktopPool#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#delete DesktopsDesktopPool#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#update DesktopsDesktopPool#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_nsg_ids` <a name="reset_nsg_ids" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetNsgIds"></a>

```python
def reset_nsg_ids() -> None
```

##### `reset_private_access_details` <a name="reset_private_access_details" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetPrivateAccessDetails"></a>

```python
def reset_private_access_details() -> None
```

##### `reset_session_lifecycle_actions` <a name="reset_session_lifecycle_actions" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetSessionLifecycleActions"></a>

```python
def reset_session_lifecycle_actions() -> None
```

##### `reset_shape_config` <a name="reset_shape_config" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetShapeConfig"></a>

```python
def reset_shape_config() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_time_start_scheduled` <a name="reset_time_start_scheduled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetTimeStartScheduled"></a>

```python
def reset_time_start_scheduled() -> None
```

##### `reset_time_stop_scheduled` <a name="reset_time_stop_scheduled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetTimeStopScheduled"></a>

```python
def reset_time_stop_scheduled() -> None
```

##### `reset_use_dedicated_vm_host` <a name="reset_use_dedicated_vm_host" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetUseDedicatedVmHost"></a>

```python
def reset_use_dedicated_vm_host() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DesktopsDesktopPool resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import desktops_desktop_pool

desktopsDesktopPool.DesktopsDesktopPool.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import desktops_desktop_pool

desktopsDesktopPool.DesktopsDesktopPool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import desktops_desktop_pool

desktopsDesktopPool.DesktopsDesktopPool.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import desktops_desktop_pool

desktopsDesktopPool.DesktopsDesktopPool.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DesktopsDesktopPool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DesktopsDesktopPool to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DesktopsDesktopPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DesktopsDesktopPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.activeDesktops">active_desktops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.availabilityPolicy">availability_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference">DesktopsDesktopPoolAvailabilityPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.devicePolicy">device_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference">DesktopsDesktopPoolDevicePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.image">image</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference">DesktopsDesktopPoolImageOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.networkConfiguration">network_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference">DesktopsDesktopPoolNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.privateAccessDetails">private_access_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference">DesktopsDesktopPoolPrivateAccessDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.sessionLifecycleActions">session_lifecycle_actions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference">DesktopsDesktopPoolSessionLifecycleActionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.shapeConfig">shape_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference">DesktopsDesktopPoolShapeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference">DesktopsDesktopPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.arePrivilegedUsersInput">are_privileged_users_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.availabilityDomainInput">availability_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.availabilityPolicyInput">availability_policy_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicy">DesktopsDesktopPoolAvailabilityPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.contactDetailsInput">contact_details_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.devicePolicyInput">device_policy_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy">DesktopsDesktopPoolDevicePolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.imageInput">image_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImage">DesktopsDesktopPoolImage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.isStorageEnabledInput">is_storage_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.maximumSizeInput">maximum_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.networkConfigurationInput">network_configuration_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfiguration">DesktopsDesktopPoolNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.nsgIdsInput">nsg_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.privateAccessDetailsInput">private_access_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetails">DesktopsDesktopPoolPrivateAccessDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.sessionLifecycleActionsInput">session_lifecycle_actions_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActions">DesktopsDesktopPoolSessionLifecycleActions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.shapeConfigInput">shape_config_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfig">DesktopsDesktopPoolShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.shapeNameInput">shape_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.standbySizeInput">standby_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.storageBackupPolicyIdInput">storage_backup_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.storageSizeInGbsInput">storage_size_in_gbs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeouts">DesktopsDesktopPoolTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.timeStartScheduledInput">time_start_scheduled_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.timeStopScheduledInput">time_stop_scheduled_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.useDedicatedVmHostInput">use_dedicated_vm_host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.arePrivilegedUsers">are_privileged_users</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.contactDetails">contact_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.isStorageEnabled">is_storage_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.maximumSize">maximum_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.shapeName">shape_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.standbySize">standby_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.storageBackupPolicyId">storage_backup_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.storageSizeInGbs">storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.timeStartScheduled">time_start_scheduled</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.timeStopScheduled">time_stop_scheduled</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.useDedicatedVmHost">use_dedicated_vm_host</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `active_desktops`<sup>Required</sup> <a name="active_desktops" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.activeDesktops"></a>

```python
active_desktops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `availability_policy`<sup>Required</sup> <a name="availability_policy" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.availabilityPolicy"></a>

```python
availability_policy: DesktopsDesktopPoolAvailabilityPolicyOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference">DesktopsDesktopPoolAvailabilityPolicyOutputReference</a>

---

##### `device_policy`<sup>Required</sup> <a name="device_policy" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.devicePolicy"></a>

```python
device_policy: DesktopsDesktopPoolDevicePolicyOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference">DesktopsDesktopPoolDevicePolicyOutputReference</a>

---

##### `image`<sup>Required</sup> <a name="image" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.image"></a>

```python
image: DesktopsDesktopPoolImageOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference">DesktopsDesktopPoolImageOutputReference</a>

---

##### `network_configuration`<sup>Required</sup> <a name="network_configuration" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.networkConfiguration"></a>

```python
network_configuration: DesktopsDesktopPoolNetworkConfigurationOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference">DesktopsDesktopPoolNetworkConfigurationOutputReference</a>

---

##### `private_access_details`<sup>Required</sup> <a name="private_access_details" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.privateAccessDetails"></a>

```python
private_access_details: DesktopsDesktopPoolPrivateAccessDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference">DesktopsDesktopPoolPrivateAccessDetailsOutputReference</a>

---

##### `session_lifecycle_actions`<sup>Required</sup> <a name="session_lifecycle_actions" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.sessionLifecycleActions"></a>

```python
session_lifecycle_actions: DesktopsDesktopPoolSessionLifecycleActionsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference">DesktopsDesktopPoolSessionLifecycleActionsOutputReference</a>

---

##### `shape_config`<sup>Required</sup> <a name="shape_config" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.shapeConfig"></a>

```python
shape_config: DesktopsDesktopPoolShapeConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference">DesktopsDesktopPoolShapeConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.timeouts"></a>

```python
timeouts: DesktopsDesktopPoolTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference">DesktopsDesktopPoolTimeoutsOutputReference</a>

---

##### `are_privileged_users_input`<sup>Optional</sup> <a name="are_privileged_users_input" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.arePrivilegedUsersInput"></a>

```python
are_privileged_users_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `availability_domain_input`<sup>Optional</sup> <a name="availability_domain_input" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.availabilityDomainInput"></a>

```python
availability_domain_input: str
```

- *Type:* str

---

##### `availability_policy_input`<sup>Optional</sup> <a name="availability_policy_input" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.availabilityPolicyInput"></a>

```python
availability_policy_input: DesktopsDesktopPoolAvailabilityPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicy">DesktopsDesktopPoolAvailabilityPolicy</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `contact_details_input`<sup>Optional</sup> <a name="contact_details_input" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.contactDetailsInput"></a>

```python
contact_details_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `device_policy_input`<sup>Optional</sup> <a name="device_policy_input" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.devicePolicyInput"></a>

```python
device_policy_input: DesktopsDesktopPoolDevicePolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy">DesktopsDesktopPoolDevicePolicy</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `image_input`<sup>Optional</sup> <a name="image_input" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.imageInput"></a>

```python
image_input: DesktopsDesktopPoolImage
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImage">DesktopsDesktopPoolImage</a>

---

##### `is_storage_enabled_input`<sup>Optional</sup> <a name="is_storage_enabled_input" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.isStorageEnabledInput"></a>

```python
is_storage_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `maximum_size_input`<sup>Optional</sup> <a name="maximum_size_input" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.maximumSizeInput"></a>

```python
maximum_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `network_configuration_input`<sup>Optional</sup> <a name="network_configuration_input" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.networkConfigurationInput"></a>

```python
network_configuration_input: DesktopsDesktopPoolNetworkConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfiguration">DesktopsDesktopPoolNetworkConfiguration</a>

---

##### `nsg_ids_input`<sup>Optional</sup> <a name="nsg_ids_input" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.nsgIdsInput"></a>

```python
nsg_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `private_access_details_input`<sup>Optional</sup> <a name="private_access_details_input" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.privateAccessDetailsInput"></a>

```python
private_access_details_input: DesktopsDesktopPoolPrivateAccessDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetails">DesktopsDesktopPoolPrivateAccessDetails</a>

---

##### `session_lifecycle_actions_input`<sup>Optional</sup> <a name="session_lifecycle_actions_input" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.sessionLifecycleActionsInput"></a>

```python
session_lifecycle_actions_input: DesktopsDesktopPoolSessionLifecycleActions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActions">DesktopsDesktopPoolSessionLifecycleActions</a>

---

##### `shape_config_input`<sup>Optional</sup> <a name="shape_config_input" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.shapeConfigInput"></a>

```python
shape_config_input: DesktopsDesktopPoolShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfig">DesktopsDesktopPoolShapeConfig</a>

---

##### `shape_name_input`<sup>Optional</sup> <a name="shape_name_input" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.shapeNameInput"></a>

```python
shape_name_input: str
```

- *Type:* str

---

##### `standby_size_input`<sup>Optional</sup> <a name="standby_size_input" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.standbySizeInput"></a>

```python
standby_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_backup_policy_id_input`<sup>Optional</sup> <a name="storage_backup_policy_id_input" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.storageBackupPolicyIdInput"></a>

```python
storage_backup_policy_id_input: str
```

- *Type:* str

---

##### `storage_size_in_gbs_input`<sup>Optional</sup> <a name="storage_size_in_gbs_input" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.storageSizeInGbsInput"></a>

```python
storage_size_in_gbs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DesktopsDesktopPoolTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeouts">DesktopsDesktopPoolTimeouts</a>]

---

##### `time_start_scheduled_input`<sup>Optional</sup> <a name="time_start_scheduled_input" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.timeStartScheduledInput"></a>

```python
time_start_scheduled_input: str
```

- *Type:* str

---

##### `time_stop_scheduled_input`<sup>Optional</sup> <a name="time_stop_scheduled_input" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.timeStopScheduledInput"></a>

```python
time_stop_scheduled_input: str
```

- *Type:* str

---

##### `use_dedicated_vm_host_input`<sup>Optional</sup> <a name="use_dedicated_vm_host_input" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.useDedicatedVmHostInput"></a>

```python
use_dedicated_vm_host_input: str
```

- *Type:* str

---

##### `are_privileged_users`<sup>Required</sup> <a name="are_privileged_users" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.arePrivilegedUsers"></a>

```python
are_privileged_users: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `contact_details`<sup>Required</sup> <a name="contact_details" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.contactDetails"></a>

```python
contact_details: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_storage_enabled`<sup>Required</sup> <a name="is_storage_enabled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.isStorageEnabled"></a>

```python
is_storage_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `maximum_size`<sup>Required</sup> <a name="maximum_size" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.maximumSize"></a>

```python
maximum_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nsg_ids`<sup>Required</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `shape_name`<sup>Required</sup> <a name="shape_name" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.shapeName"></a>

```python
shape_name: str
```

- *Type:* str

---

##### `standby_size`<sup>Required</sup> <a name="standby_size" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.standbySize"></a>

```python
standby_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_backup_policy_id`<sup>Required</sup> <a name="storage_backup_policy_id" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.storageBackupPolicyId"></a>

```python
storage_backup_policy_id: str
```

- *Type:* str

---

##### `storage_size_in_gbs`<sup>Required</sup> <a name="storage_size_in_gbs" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.storageSizeInGbs"></a>

```python
storage_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_start_scheduled`<sup>Required</sup> <a name="time_start_scheduled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.timeStartScheduled"></a>

```python
time_start_scheduled: str
```

- *Type:* str

---

##### `time_stop_scheduled`<sup>Required</sup> <a name="time_stop_scheduled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.timeStopScheduled"></a>

```python
time_stop_scheduled: str
```

- *Type:* str

---

##### `use_dedicated_vm_host`<sup>Required</sup> <a name="use_dedicated_vm_host" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.useDedicatedVmHost"></a>

```python
use_dedicated_vm_host: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DesktopsDesktopPoolAvailabilityPolicy <a name="DesktopsDesktopPoolAvailabilityPolicy" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import desktops_desktop_pool

desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicy(
  start_schedule: DesktopsDesktopPoolAvailabilityPolicyStartSchedule = None,
  stop_schedule: DesktopsDesktopPoolAvailabilityPolicyStopSchedule = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicy.property.startSchedule">start_schedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartSchedule">DesktopsDesktopPoolAvailabilityPolicyStartSchedule</a></code> | start_schedule block. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicy.property.stopSchedule">stop_schedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopSchedule">DesktopsDesktopPoolAvailabilityPolicyStopSchedule</a></code> | stop_schedule block. |

---

##### `start_schedule`<sup>Optional</sup> <a name="start_schedule" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicy.property.startSchedule"></a>

```python
start_schedule: DesktopsDesktopPoolAvailabilityPolicyStartSchedule
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartSchedule">DesktopsDesktopPoolAvailabilityPolicyStartSchedule</a>

start_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#start_schedule DesktopsDesktopPool#start_schedule}

---

##### `stop_schedule`<sup>Optional</sup> <a name="stop_schedule" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicy.property.stopSchedule"></a>

```python
stop_schedule: DesktopsDesktopPoolAvailabilityPolicyStopSchedule
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopSchedule">DesktopsDesktopPoolAvailabilityPolicyStopSchedule</a>

stop_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#stop_schedule DesktopsDesktopPool#stop_schedule}

---

### DesktopsDesktopPoolAvailabilityPolicyStartSchedule <a name="DesktopsDesktopPoolAvailabilityPolicyStartSchedule" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartSchedule.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import desktops_desktop_pool

desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartSchedule(
  cron_expression: str,
  timezone: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartSchedule.property.cronExpression">cron_expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#cron_expression DesktopsDesktopPool#cron_expression}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartSchedule.property.timezone">timezone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#timezone DesktopsDesktopPool#timezone}. |

---

##### `cron_expression`<sup>Required</sup> <a name="cron_expression" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartSchedule.property.cronExpression"></a>

```python
cron_expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#cron_expression DesktopsDesktopPool#cron_expression}.

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartSchedule.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#timezone DesktopsDesktopPool#timezone}.

---

### DesktopsDesktopPoolAvailabilityPolicyStopSchedule <a name="DesktopsDesktopPoolAvailabilityPolicyStopSchedule" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopSchedule.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import desktops_desktop_pool

desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopSchedule(
  cron_expression: str,
  timezone: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopSchedule.property.cronExpression">cron_expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#cron_expression DesktopsDesktopPool#cron_expression}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopSchedule.property.timezone">timezone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#timezone DesktopsDesktopPool#timezone}. |

---

##### `cron_expression`<sup>Required</sup> <a name="cron_expression" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopSchedule.property.cronExpression"></a>

```python
cron_expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#cron_expression DesktopsDesktopPool#cron_expression}.

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopSchedule.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#timezone DesktopsDesktopPool#timezone}.

---

### DesktopsDesktopPoolConfig <a name="DesktopsDesktopPoolConfig" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import desktops_desktop_pool

desktopsDesktopPool.DesktopsDesktopPoolConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  are_privileged_users: typing.Union[bool, IResolvable],
  availability_domain: str,
  availability_policy: DesktopsDesktopPoolAvailabilityPolicy,
  compartment_id: str,
  contact_details: str,
  device_policy: DesktopsDesktopPoolDevicePolicy,
  display_name: str,
  image: DesktopsDesktopPoolImage,
  is_storage_enabled: typing.Union[bool, IResolvable],
  maximum_size: typing.Union[int, float],
  network_configuration: DesktopsDesktopPoolNetworkConfiguration,
  shape_name: str,
  standby_size: typing.Union[int, float],
  storage_backup_policy_id: str,
  storage_size_in_gbs: typing.Union[int, float],
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  nsg_ids: typing.List[str] = None,
  private_access_details: DesktopsDesktopPoolPrivateAccessDetails = None,
  session_lifecycle_actions: DesktopsDesktopPoolSessionLifecycleActions = None,
  shape_config: DesktopsDesktopPoolShapeConfig = None,
  timeouts: DesktopsDesktopPoolTimeouts = None,
  time_start_scheduled: str = None,
  time_stop_scheduled: str = None,
  use_dedicated_vm_host: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.arePrivilegedUsers">are_privileged_users</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#are_privileged_users DesktopsDesktopPool#are_privileged_users}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#availability_domain DesktopsDesktopPool#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.availabilityPolicy">availability_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicy">DesktopsDesktopPoolAvailabilityPolicy</a></code> | availability_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#compartment_id DesktopsDesktopPool#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.contactDetails">contact_details</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#contact_details DesktopsDesktopPool#contact_details}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.devicePolicy">device_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy">DesktopsDesktopPoolDevicePolicy</a></code> | device_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#display_name DesktopsDesktopPool#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.image">image</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImage">DesktopsDesktopPoolImage</a></code> | image block. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.isStorageEnabled">is_storage_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#is_storage_enabled DesktopsDesktopPool#is_storage_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.maximumSize">maximum_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#maximum_size DesktopsDesktopPool#maximum_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.networkConfiguration">network_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfiguration">DesktopsDesktopPoolNetworkConfiguration</a></code> | network_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.shapeName">shape_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#shape_name DesktopsDesktopPool#shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.standbySize">standby_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#standby_size DesktopsDesktopPool#standby_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.storageBackupPolicyId">storage_backup_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#storage_backup_policy_id DesktopsDesktopPool#storage_backup_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.storageSizeInGbs">storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#storage_size_in_gbs DesktopsDesktopPool#storage_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#defined_tags DesktopsDesktopPool#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#description DesktopsDesktopPool#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#freeform_tags DesktopsDesktopPool#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#id DesktopsDesktopPool#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#nsg_ids DesktopsDesktopPool#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.privateAccessDetails">private_access_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetails">DesktopsDesktopPoolPrivateAccessDetails</a></code> | private_access_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.sessionLifecycleActions">session_lifecycle_actions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActions">DesktopsDesktopPoolSessionLifecycleActions</a></code> | session_lifecycle_actions block. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.shapeConfig">shape_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfig">DesktopsDesktopPoolShapeConfig</a></code> | shape_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeouts">DesktopsDesktopPoolTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.timeStartScheduled">time_start_scheduled</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#time_start_scheduled DesktopsDesktopPool#time_start_scheduled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.timeStopScheduled">time_stop_scheduled</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#time_stop_scheduled DesktopsDesktopPool#time_stop_scheduled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.useDedicatedVmHost">use_dedicated_vm_host</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#use_dedicated_vm_host DesktopsDesktopPool#use_dedicated_vm_host}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `are_privileged_users`<sup>Required</sup> <a name="are_privileged_users" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.arePrivilegedUsers"></a>

```python
are_privileged_users: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#are_privileged_users DesktopsDesktopPool#are_privileged_users}.

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#availability_domain DesktopsDesktopPool#availability_domain}.

---

##### `availability_policy`<sup>Required</sup> <a name="availability_policy" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.availabilityPolicy"></a>

```python
availability_policy: DesktopsDesktopPoolAvailabilityPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicy">DesktopsDesktopPoolAvailabilityPolicy</a>

availability_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#availability_policy DesktopsDesktopPool#availability_policy}

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#compartment_id DesktopsDesktopPool#compartment_id}.

---

##### `contact_details`<sup>Required</sup> <a name="contact_details" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.contactDetails"></a>

```python
contact_details: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#contact_details DesktopsDesktopPool#contact_details}.

---

##### `device_policy`<sup>Required</sup> <a name="device_policy" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.devicePolicy"></a>

```python
device_policy: DesktopsDesktopPoolDevicePolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy">DesktopsDesktopPoolDevicePolicy</a>

device_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#device_policy DesktopsDesktopPool#device_policy}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#display_name DesktopsDesktopPool#display_name}.

---

##### `image`<sup>Required</sup> <a name="image" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.image"></a>

```python
image: DesktopsDesktopPoolImage
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImage">DesktopsDesktopPoolImage</a>

image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#image DesktopsDesktopPool#image}

---

##### `is_storage_enabled`<sup>Required</sup> <a name="is_storage_enabled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.isStorageEnabled"></a>

```python
is_storage_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#is_storage_enabled DesktopsDesktopPool#is_storage_enabled}.

---

##### `maximum_size`<sup>Required</sup> <a name="maximum_size" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.maximumSize"></a>

```python
maximum_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#maximum_size DesktopsDesktopPool#maximum_size}.

---

##### `network_configuration`<sup>Required</sup> <a name="network_configuration" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.networkConfiguration"></a>

```python
network_configuration: DesktopsDesktopPoolNetworkConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfiguration">DesktopsDesktopPoolNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#network_configuration DesktopsDesktopPool#network_configuration}

---

##### `shape_name`<sup>Required</sup> <a name="shape_name" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.shapeName"></a>

```python
shape_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#shape_name DesktopsDesktopPool#shape_name}.

---

##### `standby_size`<sup>Required</sup> <a name="standby_size" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.standbySize"></a>

```python
standby_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#standby_size DesktopsDesktopPool#standby_size}.

---

##### `storage_backup_policy_id`<sup>Required</sup> <a name="storage_backup_policy_id" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.storageBackupPolicyId"></a>

```python
storage_backup_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#storage_backup_policy_id DesktopsDesktopPool#storage_backup_policy_id}.

---

##### `storage_size_in_gbs`<sup>Required</sup> <a name="storage_size_in_gbs" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.storageSizeInGbs"></a>

```python
storage_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#storage_size_in_gbs DesktopsDesktopPool#storage_size_in_gbs}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#defined_tags DesktopsDesktopPool#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#description DesktopsDesktopPool#description}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#freeform_tags DesktopsDesktopPool#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#id DesktopsDesktopPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nsg_ids`<sup>Optional</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#nsg_ids DesktopsDesktopPool#nsg_ids}.

---

##### `private_access_details`<sup>Optional</sup> <a name="private_access_details" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.privateAccessDetails"></a>

```python
private_access_details: DesktopsDesktopPoolPrivateAccessDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetails">DesktopsDesktopPoolPrivateAccessDetails</a>

private_access_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#private_access_details DesktopsDesktopPool#private_access_details}

---

##### `session_lifecycle_actions`<sup>Optional</sup> <a name="session_lifecycle_actions" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.sessionLifecycleActions"></a>

```python
session_lifecycle_actions: DesktopsDesktopPoolSessionLifecycleActions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActions">DesktopsDesktopPoolSessionLifecycleActions</a>

session_lifecycle_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#session_lifecycle_actions DesktopsDesktopPool#session_lifecycle_actions}

---

##### `shape_config`<sup>Optional</sup> <a name="shape_config" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.shapeConfig"></a>

```python
shape_config: DesktopsDesktopPoolShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfig">DesktopsDesktopPoolShapeConfig</a>

shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#shape_config DesktopsDesktopPool#shape_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.timeouts"></a>

```python
timeouts: DesktopsDesktopPoolTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeouts">DesktopsDesktopPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#timeouts DesktopsDesktopPool#timeouts}

---

##### `time_start_scheduled`<sup>Optional</sup> <a name="time_start_scheduled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.timeStartScheduled"></a>

```python
time_start_scheduled: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#time_start_scheduled DesktopsDesktopPool#time_start_scheduled}.

---

##### `time_stop_scheduled`<sup>Optional</sup> <a name="time_stop_scheduled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.timeStopScheduled"></a>

```python
time_stop_scheduled: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#time_stop_scheduled DesktopsDesktopPool#time_stop_scheduled}.

---

##### `use_dedicated_vm_host`<sup>Optional</sup> <a name="use_dedicated_vm_host" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.useDedicatedVmHost"></a>

```python
use_dedicated_vm_host: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#use_dedicated_vm_host DesktopsDesktopPool#use_dedicated_vm_host}.

---

### DesktopsDesktopPoolDevicePolicy <a name="DesktopsDesktopPoolDevicePolicy" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import desktops_desktop_pool

desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy(
  audio_mode: str,
  cdm_mode: str,
  clipboard_mode: str,
  is_display_enabled: typing.Union[bool, IResolvable],
  is_keyboard_enabled: typing.Union[bool, IResolvable],
  is_pointer_enabled: typing.Union[bool, IResolvable],
  is_printing_enabled: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy.property.audioMode">audio_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#audio_mode DesktopsDesktopPool#audio_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy.property.cdmMode">cdm_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#cdm_mode DesktopsDesktopPool#cdm_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy.property.clipboardMode">clipboard_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#clipboard_mode DesktopsDesktopPool#clipboard_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy.property.isDisplayEnabled">is_display_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#is_display_enabled DesktopsDesktopPool#is_display_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy.property.isKeyboardEnabled">is_keyboard_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#is_keyboard_enabled DesktopsDesktopPool#is_keyboard_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy.property.isPointerEnabled">is_pointer_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#is_pointer_enabled DesktopsDesktopPool#is_pointer_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy.property.isPrintingEnabled">is_printing_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#is_printing_enabled DesktopsDesktopPool#is_printing_enabled}. |

---

##### `audio_mode`<sup>Required</sup> <a name="audio_mode" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy.property.audioMode"></a>

```python
audio_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#audio_mode DesktopsDesktopPool#audio_mode}.

---

##### `cdm_mode`<sup>Required</sup> <a name="cdm_mode" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy.property.cdmMode"></a>

```python
cdm_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#cdm_mode DesktopsDesktopPool#cdm_mode}.

---

##### `clipboard_mode`<sup>Required</sup> <a name="clipboard_mode" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy.property.clipboardMode"></a>

```python
clipboard_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#clipboard_mode DesktopsDesktopPool#clipboard_mode}.

---

##### `is_display_enabled`<sup>Required</sup> <a name="is_display_enabled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy.property.isDisplayEnabled"></a>

```python
is_display_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#is_display_enabled DesktopsDesktopPool#is_display_enabled}.

---

##### `is_keyboard_enabled`<sup>Required</sup> <a name="is_keyboard_enabled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy.property.isKeyboardEnabled"></a>

```python
is_keyboard_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#is_keyboard_enabled DesktopsDesktopPool#is_keyboard_enabled}.

---

##### `is_pointer_enabled`<sup>Required</sup> <a name="is_pointer_enabled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy.property.isPointerEnabled"></a>

```python
is_pointer_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#is_pointer_enabled DesktopsDesktopPool#is_pointer_enabled}.

---

##### `is_printing_enabled`<sup>Required</sup> <a name="is_printing_enabled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy.property.isPrintingEnabled"></a>

```python
is_printing_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#is_printing_enabled DesktopsDesktopPool#is_printing_enabled}.

---

### DesktopsDesktopPoolImage <a name="DesktopsDesktopPoolImage" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImage.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import desktops_desktop_pool

desktopsDesktopPool.DesktopsDesktopPoolImage(
  image_id: str,
  image_name: str,
  operating_system: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImage.property.imageId">image_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#image_id DesktopsDesktopPool#image_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImage.property.imageName">image_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#image_name DesktopsDesktopPool#image_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImage.property.operatingSystem">operating_system</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#operating_system DesktopsDesktopPool#operating_system}. |

---

##### `image_id`<sup>Required</sup> <a name="image_id" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImage.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#image_id DesktopsDesktopPool#image_id}.

---

##### `image_name`<sup>Required</sup> <a name="image_name" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImage.property.imageName"></a>

```python
image_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#image_name DesktopsDesktopPool#image_name}.

---

##### `operating_system`<sup>Optional</sup> <a name="operating_system" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImage.property.operatingSystem"></a>

```python
operating_system: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#operating_system DesktopsDesktopPool#operating_system}.

---

### DesktopsDesktopPoolNetworkConfiguration <a name="DesktopsDesktopPoolNetworkConfiguration" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import desktops_desktop_pool

desktopsDesktopPool.DesktopsDesktopPoolNetworkConfiguration(
  subnet_id: str,
  vcn_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfiguration.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#subnet_id DesktopsDesktopPool#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfiguration.property.vcnId">vcn_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#vcn_id DesktopsDesktopPool#vcn_id}. |

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfiguration.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#subnet_id DesktopsDesktopPool#subnet_id}.

---

##### `vcn_id`<sup>Required</sup> <a name="vcn_id" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfiguration.property.vcnId"></a>

```python
vcn_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#vcn_id DesktopsDesktopPool#vcn_id}.

---

### DesktopsDesktopPoolPrivateAccessDetails <a name="DesktopsDesktopPoolPrivateAccessDetails" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import desktops_desktop_pool

desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetails(
  subnet_id: str,
  nsg_ids: typing.List[str] = None,
  private_ip: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetails.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#subnet_id DesktopsDesktopPool#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetails.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#nsg_ids DesktopsDesktopPool#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetails.property.privateIp">private_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#private_ip DesktopsDesktopPool#private_ip}. |

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetails.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#subnet_id DesktopsDesktopPool#subnet_id}.

---

##### `nsg_ids`<sup>Optional</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetails.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#nsg_ids DesktopsDesktopPool#nsg_ids}.

---

##### `private_ip`<sup>Optional</sup> <a name="private_ip" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetails.property.privateIp"></a>

```python
private_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#private_ip DesktopsDesktopPool#private_ip}.

---

### DesktopsDesktopPoolSessionLifecycleActions <a name="DesktopsDesktopPoolSessionLifecycleActions" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import desktops_desktop_pool

desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActions(
  disconnect: DesktopsDesktopPoolSessionLifecycleActionsDisconnect = None,
  inactivity: DesktopsDesktopPoolSessionLifecycleActionsInactivity = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActions.property.disconnect">disconnect</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnect">DesktopsDesktopPoolSessionLifecycleActionsDisconnect</a></code> | disconnect block. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActions.property.inactivity">inactivity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivity">DesktopsDesktopPoolSessionLifecycleActionsInactivity</a></code> | inactivity block. |

---

##### `disconnect`<sup>Optional</sup> <a name="disconnect" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActions.property.disconnect"></a>

```python
disconnect: DesktopsDesktopPoolSessionLifecycleActionsDisconnect
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnect">DesktopsDesktopPoolSessionLifecycleActionsDisconnect</a>

disconnect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#disconnect DesktopsDesktopPool#disconnect}

---

##### `inactivity`<sup>Optional</sup> <a name="inactivity" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActions.property.inactivity"></a>

```python
inactivity: DesktopsDesktopPoolSessionLifecycleActionsInactivity
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivity">DesktopsDesktopPoolSessionLifecycleActionsInactivity</a>

inactivity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#inactivity DesktopsDesktopPool#inactivity}

---

### DesktopsDesktopPoolSessionLifecycleActionsDisconnect <a name="DesktopsDesktopPoolSessionLifecycleActionsDisconnect" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnect"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnect.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import desktops_desktop_pool

desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnect(
  action: str,
  grace_period_in_minutes: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnect.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#action DesktopsDesktopPool#action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnect.property.gracePeriodInMinutes">grace_period_in_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#grace_period_in_minutes DesktopsDesktopPool#grace_period_in_minutes}. |

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnect.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#action DesktopsDesktopPool#action}.

---

##### `grace_period_in_minutes`<sup>Optional</sup> <a name="grace_period_in_minutes" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnect.property.gracePeriodInMinutes"></a>

```python
grace_period_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#grace_period_in_minutes DesktopsDesktopPool#grace_period_in_minutes}.

---

### DesktopsDesktopPoolSessionLifecycleActionsInactivity <a name="DesktopsDesktopPoolSessionLifecycleActionsInactivity" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivity"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivity.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import desktops_desktop_pool

desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivity(
  action: str,
  grace_period_in_minutes: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivity.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#action DesktopsDesktopPool#action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivity.property.gracePeriodInMinutes">grace_period_in_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#grace_period_in_minutes DesktopsDesktopPool#grace_period_in_minutes}. |

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivity.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#action DesktopsDesktopPool#action}.

---

##### `grace_period_in_minutes`<sup>Optional</sup> <a name="grace_period_in_minutes" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivity.property.gracePeriodInMinutes"></a>

```python
grace_period_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#grace_period_in_minutes DesktopsDesktopPool#grace_period_in_minutes}.

---

### DesktopsDesktopPoolShapeConfig <a name="DesktopsDesktopPoolShapeConfig" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import desktops_desktop_pool

desktopsDesktopPool.DesktopsDesktopPoolShapeConfig(
  baseline_ocpu_utilization: str = None,
  memory_in_gbs: str = None,
  ocpus: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfig.property.baselineOcpuUtilization">baseline_ocpu_utilization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#baseline_ocpu_utilization DesktopsDesktopPool#baseline_ocpu_utilization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfig.property.memoryInGbs">memory_in_gbs</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#memory_in_gbs DesktopsDesktopPool#memory_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfig.property.ocpus">ocpus</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#ocpus DesktopsDesktopPool#ocpus}. |

---

##### `baseline_ocpu_utilization`<sup>Optional</sup> <a name="baseline_ocpu_utilization" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfig.property.baselineOcpuUtilization"></a>

```python
baseline_ocpu_utilization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#baseline_ocpu_utilization DesktopsDesktopPool#baseline_ocpu_utilization}.

---

##### `memory_in_gbs`<sup>Optional</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfig.property.memoryInGbs"></a>

```python
memory_in_gbs: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#memory_in_gbs DesktopsDesktopPool#memory_in_gbs}.

---

##### `ocpus`<sup>Optional</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfig.property.ocpus"></a>

```python
ocpus: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#ocpus DesktopsDesktopPool#ocpus}.

---

### DesktopsDesktopPoolTimeouts <a name="DesktopsDesktopPoolTimeouts" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import desktops_desktop_pool

desktopsDesktopPool.DesktopsDesktopPoolTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#create DesktopsDesktopPool#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#delete DesktopsDesktopPool#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#update DesktopsDesktopPool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#create DesktopsDesktopPool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#delete DesktopsDesktopPool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#update DesktopsDesktopPool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DesktopsDesktopPoolAvailabilityPolicyOutputReference <a name="DesktopsDesktopPoolAvailabilityPolicyOutputReference" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import desktops_desktop_pool

desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.putStartSchedule">put_start_schedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.putStopSchedule">put_stop_schedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.resetStartSchedule">reset_start_schedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.resetStopSchedule">reset_stop_schedule</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_start_schedule` <a name="put_start_schedule" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.putStartSchedule"></a>

```python
def put_start_schedule(
  cron_expression: str,
  timezone: str
) -> None
```

###### `cron_expression`<sup>Required</sup> <a name="cron_expression" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.putStartSchedule.parameter.cronExpression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#cron_expression DesktopsDesktopPool#cron_expression}.

---

###### `timezone`<sup>Required</sup> <a name="timezone" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.putStartSchedule.parameter.timezone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#timezone DesktopsDesktopPool#timezone}.

---

##### `put_stop_schedule` <a name="put_stop_schedule" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.putStopSchedule"></a>

```python
def put_stop_schedule(
  cron_expression: str,
  timezone: str
) -> None
```

###### `cron_expression`<sup>Required</sup> <a name="cron_expression" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.putStopSchedule.parameter.cronExpression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#cron_expression DesktopsDesktopPool#cron_expression}.

---

###### `timezone`<sup>Required</sup> <a name="timezone" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.putStopSchedule.parameter.timezone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#timezone DesktopsDesktopPool#timezone}.

---

##### `reset_start_schedule` <a name="reset_start_schedule" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.resetStartSchedule"></a>

```python
def reset_start_schedule() -> None
```

##### `reset_stop_schedule` <a name="reset_stop_schedule" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.resetStopSchedule"></a>

```python
def reset_stop_schedule() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.property.startSchedule">start_schedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference">DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.property.stopSchedule">stop_schedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference">DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.property.startScheduleInput">start_schedule_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartSchedule">DesktopsDesktopPoolAvailabilityPolicyStartSchedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.property.stopScheduleInput">stop_schedule_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopSchedule">DesktopsDesktopPoolAvailabilityPolicyStopSchedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicy">DesktopsDesktopPoolAvailabilityPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `start_schedule`<sup>Required</sup> <a name="start_schedule" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.property.startSchedule"></a>

```python
start_schedule: DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference">DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference</a>

---

##### `stop_schedule`<sup>Required</sup> <a name="stop_schedule" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.property.stopSchedule"></a>

```python
stop_schedule: DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference">DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference</a>

---

##### `start_schedule_input`<sup>Optional</sup> <a name="start_schedule_input" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.property.startScheduleInput"></a>

```python
start_schedule_input: DesktopsDesktopPoolAvailabilityPolicyStartSchedule
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartSchedule">DesktopsDesktopPoolAvailabilityPolicyStartSchedule</a>

---

##### `stop_schedule_input`<sup>Optional</sup> <a name="stop_schedule_input" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.property.stopScheduleInput"></a>

```python
stop_schedule_input: DesktopsDesktopPoolAvailabilityPolicyStopSchedule
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopSchedule">DesktopsDesktopPoolAvailabilityPolicyStopSchedule</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DesktopsDesktopPoolAvailabilityPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicy">DesktopsDesktopPoolAvailabilityPolicy</a>

---


### DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference <a name="DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import desktops_desktop_pool

desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.cronExpressionInput">cron_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.timezoneInput">timezone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.cronExpression">cron_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartSchedule">DesktopsDesktopPoolAvailabilityPolicyStartSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cron_expression_input`<sup>Optional</sup> <a name="cron_expression_input" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.cronExpressionInput"></a>

```python
cron_expression_input: str
```

- *Type:* str

---

##### `timezone_input`<sup>Optional</sup> <a name="timezone_input" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.timezoneInput"></a>

```python
timezone_input: str
```

- *Type:* str

---

##### `cron_expression`<sup>Required</sup> <a name="cron_expression" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.cronExpression"></a>

```python
cron_expression: str
```

- *Type:* str

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.internalValue"></a>

```python
internal_value: DesktopsDesktopPoolAvailabilityPolicyStartSchedule
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartSchedule">DesktopsDesktopPoolAvailabilityPolicyStartSchedule</a>

---


### DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference <a name="DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import desktops_desktop_pool

desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.cronExpressionInput">cron_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.timezoneInput">timezone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.cronExpression">cron_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopSchedule">DesktopsDesktopPoolAvailabilityPolicyStopSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cron_expression_input`<sup>Optional</sup> <a name="cron_expression_input" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.cronExpressionInput"></a>

```python
cron_expression_input: str
```

- *Type:* str

---

##### `timezone_input`<sup>Optional</sup> <a name="timezone_input" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.timezoneInput"></a>

```python
timezone_input: str
```

- *Type:* str

---

##### `cron_expression`<sup>Required</sup> <a name="cron_expression" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.cronExpression"></a>

```python
cron_expression: str
```

- *Type:* str

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.internalValue"></a>

```python
internal_value: DesktopsDesktopPoolAvailabilityPolicyStopSchedule
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopSchedule">DesktopsDesktopPoolAvailabilityPolicyStopSchedule</a>

---


### DesktopsDesktopPoolDevicePolicyOutputReference <a name="DesktopsDesktopPoolDevicePolicyOutputReference" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import desktops_desktop_pool

desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.audioModeInput">audio_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.cdmModeInput">cdm_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.clipboardModeInput">clipboard_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.isDisplayEnabledInput">is_display_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.isKeyboardEnabledInput">is_keyboard_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.isPointerEnabledInput">is_pointer_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.isPrintingEnabledInput">is_printing_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.audioMode">audio_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.cdmMode">cdm_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.clipboardMode">clipboard_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.isDisplayEnabled">is_display_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.isKeyboardEnabled">is_keyboard_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.isPointerEnabled">is_pointer_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.isPrintingEnabled">is_printing_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy">DesktopsDesktopPoolDevicePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audio_mode_input`<sup>Optional</sup> <a name="audio_mode_input" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.audioModeInput"></a>

```python
audio_mode_input: str
```

- *Type:* str

---

##### `cdm_mode_input`<sup>Optional</sup> <a name="cdm_mode_input" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.cdmModeInput"></a>

```python
cdm_mode_input: str
```

- *Type:* str

---

##### `clipboard_mode_input`<sup>Optional</sup> <a name="clipboard_mode_input" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.clipboardModeInput"></a>

```python
clipboard_mode_input: str
```

- *Type:* str

---

##### `is_display_enabled_input`<sup>Optional</sup> <a name="is_display_enabled_input" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.isDisplayEnabledInput"></a>

```python
is_display_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_keyboard_enabled_input`<sup>Optional</sup> <a name="is_keyboard_enabled_input" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.isKeyboardEnabledInput"></a>

```python
is_keyboard_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_pointer_enabled_input`<sup>Optional</sup> <a name="is_pointer_enabled_input" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.isPointerEnabledInput"></a>

```python
is_pointer_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_printing_enabled_input`<sup>Optional</sup> <a name="is_printing_enabled_input" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.isPrintingEnabledInput"></a>

```python
is_printing_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `audio_mode`<sup>Required</sup> <a name="audio_mode" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.audioMode"></a>

```python
audio_mode: str
```

- *Type:* str

---

##### `cdm_mode`<sup>Required</sup> <a name="cdm_mode" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.cdmMode"></a>

```python
cdm_mode: str
```

- *Type:* str

---

##### `clipboard_mode`<sup>Required</sup> <a name="clipboard_mode" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.clipboardMode"></a>

```python
clipboard_mode: str
```

- *Type:* str

---

##### `is_display_enabled`<sup>Required</sup> <a name="is_display_enabled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.isDisplayEnabled"></a>

```python
is_display_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_keyboard_enabled`<sup>Required</sup> <a name="is_keyboard_enabled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.isKeyboardEnabled"></a>

```python
is_keyboard_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_pointer_enabled`<sup>Required</sup> <a name="is_pointer_enabled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.isPointerEnabled"></a>

```python
is_pointer_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_printing_enabled`<sup>Required</sup> <a name="is_printing_enabled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.isPrintingEnabled"></a>

```python
is_printing_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.internalValue"></a>

```python
internal_value: DesktopsDesktopPoolDevicePolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy">DesktopsDesktopPoolDevicePolicy</a>

---


### DesktopsDesktopPoolImageOutputReference <a name="DesktopsDesktopPoolImageOutputReference" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import desktops_desktop_pool

desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.resetOperatingSystem">reset_operating_system</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_operating_system` <a name="reset_operating_system" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.resetOperatingSystem"></a>

```python
def reset_operating_system() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.imageIdInput">image_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.imageNameInput">image_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.operatingSystemInput">operating_system_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.imageId">image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.imageName">image_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.operatingSystem">operating_system</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImage">DesktopsDesktopPoolImage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `image_id_input`<sup>Optional</sup> <a name="image_id_input" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.imageIdInput"></a>

```python
image_id_input: str
```

- *Type:* str

---

##### `image_name_input`<sup>Optional</sup> <a name="image_name_input" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.imageNameInput"></a>

```python
image_name_input: str
```

- *Type:* str

---

##### `operating_system_input`<sup>Optional</sup> <a name="operating_system_input" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.operatingSystemInput"></a>

```python
operating_system_input: str
```

- *Type:* str

---

##### `image_id`<sup>Required</sup> <a name="image_id" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

---

##### `image_name`<sup>Required</sup> <a name="image_name" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.imageName"></a>

```python
image_name: str
```

- *Type:* str

---

##### `operating_system`<sup>Required</sup> <a name="operating_system" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.operatingSystem"></a>

```python
operating_system: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.internalValue"></a>

```python
internal_value: DesktopsDesktopPoolImage
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImage">DesktopsDesktopPoolImage</a>

---


### DesktopsDesktopPoolNetworkConfigurationOutputReference <a name="DesktopsDesktopPoolNetworkConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import desktops_desktop_pool

desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.property.vcnIdInput">vcn_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.property.vcnId">vcn_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfiguration">DesktopsDesktopPoolNetworkConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `vcn_id_input`<sup>Optional</sup> <a name="vcn_id_input" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.property.vcnIdInput"></a>

```python
vcn_id_input: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `vcn_id`<sup>Required</sup> <a name="vcn_id" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.property.vcnId"></a>

```python
vcn_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DesktopsDesktopPoolNetworkConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfiguration">DesktopsDesktopPoolNetworkConfiguration</a>

---


### DesktopsDesktopPoolPrivateAccessDetailsOutputReference <a name="DesktopsDesktopPoolPrivateAccessDetailsOutputReference" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import desktops_desktop_pool

desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.resetNsgIds">reset_nsg_ids</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.resetPrivateIp">reset_private_ip</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_nsg_ids` <a name="reset_nsg_ids" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.resetNsgIds"></a>

```python
def reset_nsg_ids() -> None
```

##### `reset_private_ip` <a name="reset_private_ip" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.resetPrivateIp"></a>

```python
def reset_private_ip() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.endpointFqdn">endpoint_fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.vcnId">vcn_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.nsgIdsInput">nsg_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.privateIpInput">private_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.privateIp">private_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetails">DesktopsDesktopPoolPrivateAccessDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `endpoint_fqdn`<sup>Required</sup> <a name="endpoint_fqdn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.endpointFqdn"></a>

```python
endpoint_fqdn: str
```

- *Type:* str

---

##### `vcn_id`<sup>Required</sup> <a name="vcn_id" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.vcnId"></a>

```python
vcn_id: str
```

- *Type:* str

---

##### `nsg_ids_input`<sup>Optional</sup> <a name="nsg_ids_input" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.nsgIdsInput"></a>

```python
nsg_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `private_ip_input`<sup>Optional</sup> <a name="private_ip_input" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.privateIpInput"></a>

```python
private_ip_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `nsg_ids`<sup>Required</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `private_ip`<sup>Required</sup> <a name="private_ip" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.privateIp"></a>

```python
private_ip: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DesktopsDesktopPoolPrivateAccessDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetails">DesktopsDesktopPoolPrivateAccessDetails</a>

---


### DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference <a name="DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import desktops_desktop_pool

desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.resetGracePeriodInMinutes">reset_grace_period_in_minutes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_grace_period_in_minutes` <a name="reset_grace_period_in_minutes" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.resetGracePeriodInMinutes"></a>

```python
def reset_grace_period_in_minutes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.gracePeriodInMinutesInput">grace_period_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.gracePeriodInMinutes">grace_period_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnect">DesktopsDesktopPoolSessionLifecycleActionsDisconnect</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `grace_period_in_minutes_input`<sup>Optional</sup> <a name="grace_period_in_minutes_input" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.gracePeriodInMinutesInput"></a>

```python
grace_period_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `grace_period_in_minutes`<sup>Required</sup> <a name="grace_period_in_minutes" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.gracePeriodInMinutes"></a>

```python
grace_period_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.internalValue"></a>

```python
internal_value: DesktopsDesktopPoolSessionLifecycleActionsDisconnect
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnect">DesktopsDesktopPoolSessionLifecycleActionsDisconnect</a>

---


### DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference <a name="DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import desktops_desktop_pool

desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.resetGracePeriodInMinutes">reset_grace_period_in_minutes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_grace_period_in_minutes` <a name="reset_grace_period_in_minutes" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.resetGracePeriodInMinutes"></a>

```python
def reset_grace_period_in_minutes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.gracePeriodInMinutesInput">grace_period_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.gracePeriodInMinutes">grace_period_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivity">DesktopsDesktopPoolSessionLifecycleActionsInactivity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `grace_period_in_minutes_input`<sup>Optional</sup> <a name="grace_period_in_minutes_input" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.gracePeriodInMinutesInput"></a>

```python
grace_period_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `grace_period_in_minutes`<sup>Required</sup> <a name="grace_period_in_minutes" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.gracePeriodInMinutes"></a>

```python
grace_period_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.internalValue"></a>

```python
internal_value: DesktopsDesktopPoolSessionLifecycleActionsInactivity
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivity">DesktopsDesktopPoolSessionLifecycleActionsInactivity</a>

---


### DesktopsDesktopPoolSessionLifecycleActionsOutputReference <a name="DesktopsDesktopPoolSessionLifecycleActionsOutputReference" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import desktops_desktop_pool

desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.putDisconnect">put_disconnect</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.putInactivity">put_inactivity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.resetDisconnect">reset_disconnect</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.resetInactivity">reset_inactivity</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_disconnect` <a name="put_disconnect" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.putDisconnect"></a>

```python
def put_disconnect(
  action: str,
  grace_period_in_minutes: typing.Union[int, float] = None
) -> None
```

###### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.putDisconnect.parameter.action"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#action DesktopsDesktopPool#action}.

---

###### `grace_period_in_minutes`<sup>Optional</sup> <a name="grace_period_in_minutes" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.putDisconnect.parameter.gracePeriodInMinutes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#grace_period_in_minutes DesktopsDesktopPool#grace_period_in_minutes}.

---

##### `put_inactivity` <a name="put_inactivity" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.putInactivity"></a>

```python
def put_inactivity(
  action: str,
  grace_period_in_minutes: typing.Union[int, float] = None
) -> None
```

###### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.putInactivity.parameter.action"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#action DesktopsDesktopPool#action}.

---

###### `grace_period_in_minutes`<sup>Optional</sup> <a name="grace_period_in_minutes" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.putInactivity.parameter.gracePeriodInMinutes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#grace_period_in_minutes DesktopsDesktopPool#grace_period_in_minutes}.

---

##### `reset_disconnect` <a name="reset_disconnect" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.resetDisconnect"></a>

```python
def reset_disconnect() -> None
```

##### `reset_inactivity` <a name="reset_inactivity" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.resetInactivity"></a>

```python
def reset_inactivity() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.disconnect">disconnect</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference">DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.inactivity">inactivity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference">DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.disconnectInput">disconnect_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnect">DesktopsDesktopPoolSessionLifecycleActionsDisconnect</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.inactivityInput">inactivity_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivity">DesktopsDesktopPoolSessionLifecycleActionsInactivity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActions">DesktopsDesktopPoolSessionLifecycleActions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disconnect`<sup>Required</sup> <a name="disconnect" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.disconnect"></a>

```python
disconnect: DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference">DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference</a>

---

##### `inactivity`<sup>Required</sup> <a name="inactivity" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.inactivity"></a>

```python
inactivity: DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference">DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference</a>

---

##### `disconnect_input`<sup>Optional</sup> <a name="disconnect_input" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.disconnectInput"></a>

```python
disconnect_input: DesktopsDesktopPoolSessionLifecycleActionsDisconnect
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnect">DesktopsDesktopPoolSessionLifecycleActionsDisconnect</a>

---

##### `inactivity_input`<sup>Optional</sup> <a name="inactivity_input" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.inactivityInput"></a>

```python
inactivity_input: DesktopsDesktopPoolSessionLifecycleActionsInactivity
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivity">DesktopsDesktopPoolSessionLifecycleActionsInactivity</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.internalValue"></a>

```python
internal_value: DesktopsDesktopPoolSessionLifecycleActions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActions">DesktopsDesktopPoolSessionLifecycleActions</a>

---


### DesktopsDesktopPoolShapeConfigOutputReference <a name="DesktopsDesktopPoolShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import desktops_desktop_pool

desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.resetBaselineOcpuUtilization">reset_baseline_ocpu_utilization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.resetMemoryInGbs">reset_memory_in_gbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.resetOcpus">reset_ocpus</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_baseline_ocpu_utilization` <a name="reset_baseline_ocpu_utilization" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.resetBaselineOcpuUtilization"></a>

```python
def reset_baseline_ocpu_utilization() -> None
```

##### `reset_memory_in_gbs` <a name="reset_memory_in_gbs" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.resetMemoryInGbs"></a>

```python
def reset_memory_in_gbs() -> None
```

##### `reset_ocpus` <a name="reset_ocpus" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.resetOcpus"></a>

```python
def reset_ocpus() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.baselineOcpuUtilizationInput">baseline_ocpu_utilization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.memoryInGbsInput">memory_in_gbs_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.ocpusInput">ocpus_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.baselineOcpuUtilization">baseline_ocpu_utilization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.memoryInGbs">memory_in_gbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfig">DesktopsDesktopPoolShapeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `baseline_ocpu_utilization_input`<sup>Optional</sup> <a name="baseline_ocpu_utilization_input" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.baselineOcpuUtilizationInput"></a>

```python
baseline_ocpu_utilization_input: str
```

- *Type:* str

---

##### `memory_in_gbs_input`<sup>Optional</sup> <a name="memory_in_gbs_input" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.memoryInGbsInput"></a>

```python
memory_in_gbs_input: str
```

- *Type:* str

---

##### `ocpus_input`<sup>Optional</sup> <a name="ocpus_input" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.ocpusInput"></a>

```python
ocpus_input: str
```

- *Type:* str

---

##### `baseline_ocpu_utilization`<sup>Required</sup> <a name="baseline_ocpu_utilization" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.baselineOcpuUtilization"></a>

```python
baseline_ocpu_utilization: str
```

- *Type:* str

---

##### `memory_in_gbs`<sup>Required</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.memoryInGbs"></a>

```python
memory_in_gbs: str
```

- *Type:* str

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.ocpus"></a>

```python
ocpus: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.internalValue"></a>

```python
internal_value: DesktopsDesktopPoolShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfig">DesktopsDesktopPoolShapeConfig</a>

---


### DesktopsDesktopPoolTimeoutsOutputReference <a name="DesktopsDesktopPoolTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import desktops_desktop_pool

desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeouts">DesktopsDesktopPoolTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DesktopsDesktopPoolTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeouts">DesktopsDesktopPoolTimeouts</a>]

---



