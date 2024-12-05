# `coreVolumeAttachment` Submodule <a name="`coreVolumeAttachment` Submodule" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreVolumeAttachment <a name="CoreVolumeAttachment" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment oci_core_volume_attachment}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_volume_attachment

coreVolumeAttachment.CoreVolumeAttachment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  attachment_type: str,
  instance_id: str,
  volume_id: str,
  compartment_id: str = None,
  device: str = None,
  display_name: str = None,
  encryption_in_transit_type: str = None,
  id: str = None,
  is_agent_auto_iscsi_login_enabled: typing.Union[bool, IResolvable] = None,
  is_pv_encryption_in_transit_enabled: typing.Union[bool, IResolvable] = None,
  is_read_only: typing.Union[bool, IResolvable] = None,
  is_shareable: typing.Union[bool, IResolvable] = None,
  timeouts: CoreVolumeAttachmentTimeouts = None,
  use_chap: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.Initializer.parameter.attachmentType">attachment_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#attachment_type CoreVolumeAttachment#attachment_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.Initializer.parameter.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#instance_id CoreVolumeAttachment#instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.Initializer.parameter.volumeId">volume_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#volume_id CoreVolumeAttachment#volume_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#compartment_id CoreVolumeAttachment#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.Initializer.parameter.device">device</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#device CoreVolumeAttachment#device}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#display_name CoreVolumeAttachment#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.Initializer.parameter.encryptionInTransitType">encryption_in_transit_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#encryption_in_transit_type CoreVolumeAttachment#encryption_in_transit_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#id CoreVolumeAttachment#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.Initializer.parameter.isAgentAutoIscsiLoginEnabled">is_agent_auto_iscsi_login_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#is_agent_auto_iscsi_login_enabled CoreVolumeAttachment#is_agent_auto_iscsi_login_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.Initializer.parameter.isPvEncryptionInTransitEnabled">is_pv_encryption_in_transit_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#is_pv_encryption_in_transit_enabled CoreVolumeAttachment#is_pv_encryption_in_transit_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.Initializer.parameter.isReadOnly">is_read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#is_read_only CoreVolumeAttachment#is_read_only}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.Initializer.parameter.isShareable">is_shareable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#is_shareable CoreVolumeAttachment#is_shareable}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeouts">CoreVolumeAttachmentTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.Initializer.parameter.useChap">use_chap</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#use_chap CoreVolumeAttachment#use_chap}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `attachment_type`<sup>Required</sup> <a name="attachment_type" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.Initializer.parameter.attachmentType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#attachment_type CoreVolumeAttachment#attachment_type}.

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.Initializer.parameter.instanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#instance_id CoreVolumeAttachment#instance_id}.

---

##### `volume_id`<sup>Required</sup> <a name="volume_id" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.Initializer.parameter.volumeId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#volume_id CoreVolumeAttachment#volume_id}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#compartment_id CoreVolumeAttachment#compartment_id}.

---

##### `device`<sup>Optional</sup> <a name="device" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.Initializer.parameter.device"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#device CoreVolumeAttachment#device}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#display_name CoreVolumeAttachment#display_name}.

---

##### `encryption_in_transit_type`<sup>Optional</sup> <a name="encryption_in_transit_type" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.Initializer.parameter.encryptionInTransitType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#encryption_in_transit_type CoreVolumeAttachment#encryption_in_transit_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#id CoreVolumeAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_agent_auto_iscsi_login_enabled`<sup>Optional</sup> <a name="is_agent_auto_iscsi_login_enabled" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.Initializer.parameter.isAgentAutoIscsiLoginEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#is_agent_auto_iscsi_login_enabled CoreVolumeAttachment#is_agent_auto_iscsi_login_enabled}.

---

##### `is_pv_encryption_in_transit_enabled`<sup>Optional</sup> <a name="is_pv_encryption_in_transit_enabled" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.Initializer.parameter.isPvEncryptionInTransitEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#is_pv_encryption_in_transit_enabled CoreVolumeAttachment#is_pv_encryption_in_transit_enabled}.

---

##### `is_read_only`<sup>Optional</sup> <a name="is_read_only" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.Initializer.parameter.isReadOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#is_read_only CoreVolumeAttachment#is_read_only}.

---

##### `is_shareable`<sup>Optional</sup> <a name="is_shareable" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.Initializer.parameter.isShareable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#is_shareable CoreVolumeAttachment#is_shareable}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeouts">CoreVolumeAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#timeouts CoreVolumeAttachment#timeouts}

---

##### `use_chap`<sup>Optional</sup> <a name="use_chap" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.Initializer.parameter.useChap"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#use_chap CoreVolumeAttachment#use_chap}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.resetDevice">reset_device</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.resetEncryptionInTransitType">reset_encryption_in_transit_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.resetIsAgentAutoIscsiLoginEnabled">reset_is_agent_auto_iscsi_login_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.resetIsPvEncryptionInTransitEnabled">reset_is_pv_encryption_in_transit_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.resetIsReadOnly">reset_is_read_only</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.resetIsShareable">reset_is_shareable</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.resetUseChap">reset_use_chap</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#create CoreVolumeAttachment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#delete CoreVolumeAttachment#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#update CoreVolumeAttachment#update}.

---

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_device` <a name="reset_device" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.resetDevice"></a>

```python
def reset_device() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_encryption_in_transit_type` <a name="reset_encryption_in_transit_type" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.resetEncryptionInTransitType"></a>

```python
def reset_encryption_in_transit_type() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_agent_auto_iscsi_login_enabled` <a name="reset_is_agent_auto_iscsi_login_enabled" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.resetIsAgentAutoIscsiLoginEnabled"></a>

```python
def reset_is_agent_auto_iscsi_login_enabled() -> None
```

##### `reset_is_pv_encryption_in_transit_enabled` <a name="reset_is_pv_encryption_in_transit_enabled" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.resetIsPvEncryptionInTransitEnabled"></a>

```python
def reset_is_pv_encryption_in_transit_enabled() -> None
```

##### `reset_is_read_only` <a name="reset_is_read_only" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.resetIsReadOnly"></a>

```python
def reset_is_read_only() -> None
```

##### `reset_is_shareable` <a name="reset_is_shareable" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.resetIsShareable"></a>

```python
def reset_is_shareable() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_use_chap` <a name="reset_use_chap" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.resetUseChap"></a>

```python
def reset_use_chap() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CoreVolumeAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import core_volume_attachment

coreVolumeAttachment.CoreVolumeAttachment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import core_volume_attachment

coreVolumeAttachment.CoreVolumeAttachment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import core_volume_attachment

coreVolumeAttachment.CoreVolumeAttachment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import core_volume_attachment

coreVolumeAttachment.CoreVolumeAttachment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CoreVolumeAttachment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CoreVolumeAttachment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CoreVolumeAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CoreVolumeAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.chapSecret">chap_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.chapUsername">chap_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.ipv4">ipv4</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.iqn">iqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.iscsiLoginState">iscsi_login_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.isMultipath">is_multipath</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.isVolumeCreatedDuringLaunch">is_volume_created_during_launch</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.multipathDevices">multipath_devices</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesList">CoreVolumeAttachmentMultipathDevicesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference">CoreVolumeAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.attachmentTypeInput">attachment_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.deviceInput">device_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.encryptionInTransitTypeInput">encryption_in_transit_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.isAgentAutoIscsiLoginEnabledInput">is_agent_auto_iscsi_login_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.isPvEncryptionInTransitEnabledInput">is_pv_encryption_in_transit_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.isReadOnlyInput">is_read_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.isShareableInput">is_shareable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeouts">CoreVolumeAttachmentTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.useChapInput">use_chap_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.volumeIdInput">volume_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.attachmentType">attachment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.device">device</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.encryptionInTransitType">encryption_in_transit_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.isAgentAutoIscsiLoginEnabled">is_agent_auto_iscsi_login_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.isPvEncryptionInTransitEnabled">is_pv_encryption_in_transit_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.isReadOnly">is_read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.isShareable">is_shareable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.useChap">use_chap</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.volumeId">volume_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `chap_secret`<sup>Required</sup> <a name="chap_secret" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.chapSecret"></a>

```python
chap_secret: str
```

- *Type:* str

---

##### `chap_username`<sup>Required</sup> <a name="chap_username" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.chapUsername"></a>

```python
chap_username: str
```

- *Type:* str

---

##### `ipv4`<sup>Required</sup> <a name="ipv4" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.ipv4"></a>

```python
ipv4: str
```

- *Type:* str

---

##### `iqn`<sup>Required</sup> <a name="iqn" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.iqn"></a>

```python
iqn: str
```

- *Type:* str

---

##### `iscsi_login_state`<sup>Required</sup> <a name="iscsi_login_state" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.iscsiLoginState"></a>

```python
iscsi_login_state: str
```

- *Type:* str

---

##### `is_multipath`<sup>Required</sup> <a name="is_multipath" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.isMultipath"></a>

```python
is_multipath: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_volume_created_during_launch`<sup>Required</sup> <a name="is_volume_created_during_launch" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.isVolumeCreatedDuringLaunch"></a>

```python
is_volume_created_during_launch: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `multipath_devices`<sup>Required</sup> <a name="multipath_devices" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.multipathDevices"></a>

```python
multipath_devices: CoreVolumeAttachmentMultipathDevicesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesList">CoreVolumeAttachmentMultipathDevicesList</a>

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.timeouts"></a>

```python
timeouts: CoreVolumeAttachmentTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference">CoreVolumeAttachmentTimeoutsOutputReference</a>

---

##### `attachment_type_input`<sup>Optional</sup> <a name="attachment_type_input" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.attachmentTypeInput"></a>

```python
attachment_type_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `device_input`<sup>Optional</sup> <a name="device_input" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.deviceInput"></a>

```python
device_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `encryption_in_transit_type_input`<sup>Optional</sup> <a name="encryption_in_transit_type_input" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.encryptionInTransitTypeInput"></a>

```python
encryption_in_transit_type_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `is_agent_auto_iscsi_login_enabled_input`<sup>Optional</sup> <a name="is_agent_auto_iscsi_login_enabled_input" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.isAgentAutoIscsiLoginEnabledInput"></a>

```python
is_agent_auto_iscsi_login_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_pv_encryption_in_transit_enabled_input`<sup>Optional</sup> <a name="is_pv_encryption_in_transit_enabled_input" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.isPvEncryptionInTransitEnabledInput"></a>

```python
is_pv_encryption_in_transit_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_read_only_input`<sup>Optional</sup> <a name="is_read_only_input" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.isReadOnlyInput"></a>

```python
is_read_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_shareable_input`<sup>Optional</sup> <a name="is_shareable_input" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.isShareableInput"></a>

```python
is_shareable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CoreVolumeAttachmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeouts">CoreVolumeAttachmentTimeouts</a>]

---

##### `use_chap_input`<sup>Optional</sup> <a name="use_chap_input" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.useChapInput"></a>

```python
use_chap_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `volume_id_input`<sup>Optional</sup> <a name="volume_id_input" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.volumeIdInput"></a>

```python
volume_id_input: str
```

- *Type:* str

---

##### `attachment_type`<sup>Required</sup> <a name="attachment_type" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.attachmentType"></a>

```python
attachment_type: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `device`<sup>Required</sup> <a name="device" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.device"></a>

```python
device: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `encryption_in_transit_type`<sup>Required</sup> <a name="encryption_in_transit_type" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.encryptionInTransitType"></a>

```python
encryption_in_transit_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `is_agent_auto_iscsi_login_enabled`<sup>Required</sup> <a name="is_agent_auto_iscsi_login_enabled" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.isAgentAutoIscsiLoginEnabled"></a>

```python
is_agent_auto_iscsi_login_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_pv_encryption_in_transit_enabled`<sup>Required</sup> <a name="is_pv_encryption_in_transit_enabled" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.isPvEncryptionInTransitEnabled"></a>

```python
is_pv_encryption_in_transit_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_read_only`<sup>Required</sup> <a name="is_read_only" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.isReadOnly"></a>

```python
is_read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_shareable`<sup>Required</sup> <a name="is_shareable" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.isShareable"></a>

```python
is_shareable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use_chap`<sup>Required</sup> <a name="use_chap" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.useChap"></a>

```python
use_chap: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `volume_id`<sup>Required</sup> <a name="volume_id" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.volumeId"></a>

```python
volume_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CoreVolumeAttachmentConfig <a name="CoreVolumeAttachmentConfig" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_volume_attachment

coreVolumeAttachment.CoreVolumeAttachmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  attachment_type: str,
  instance_id: str,
  volume_id: str,
  compartment_id: str = None,
  device: str = None,
  display_name: str = None,
  encryption_in_transit_type: str = None,
  id: str = None,
  is_agent_auto_iscsi_login_enabled: typing.Union[bool, IResolvable] = None,
  is_pv_encryption_in_transit_enabled: typing.Union[bool, IResolvable] = None,
  is_read_only: typing.Union[bool, IResolvable] = None,
  is_shareable: typing.Union[bool, IResolvable] = None,
  timeouts: CoreVolumeAttachmentTimeouts = None,
  use_chap: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentConfig.property.attachmentType">attachment_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#attachment_type CoreVolumeAttachment#attachment_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentConfig.property.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#instance_id CoreVolumeAttachment#instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentConfig.property.volumeId">volume_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#volume_id CoreVolumeAttachment#volume_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#compartment_id CoreVolumeAttachment#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentConfig.property.device">device</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#device CoreVolumeAttachment#device}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#display_name CoreVolumeAttachment#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentConfig.property.encryptionInTransitType">encryption_in_transit_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#encryption_in_transit_type CoreVolumeAttachment#encryption_in_transit_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#id CoreVolumeAttachment#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentConfig.property.isAgentAutoIscsiLoginEnabled">is_agent_auto_iscsi_login_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#is_agent_auto_iscsi_login_enabled CoreVolumeAttachment#is_agent_auto_iscsi_login_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentConfig.property.isPvEncryptionInTransitEnabled">is_pv_encryption_in_transit_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#is_pv_encryption_in_transit_enabled CoreVolumeAttachment#is_pv_encryption_in_transit_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentConfig.property.isReadOnly">is_read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#is_read_only CoreVolumeAttachment#is_read_only}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentConfig.property.isShareable">is_shareable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#is_shareable CoreVolumeAttachment#is_shareable}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeouts">CoreVolumeAttachmentTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentConfig.property.useChap">use_chap</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#use_chap CoreVolumeAttachment#use_chap}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `attachment_type`<sup>Required</sup> <a name="attachment_type" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentConfig.property.attachmentType"></a>

```python
attachment_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#attachment_type CoreVolumeAttachment#attachment_type}.

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentConfig.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#instance_id CoreVolumeAttachment#instance_id}.

---

##### `volume_id`<sup>Required</sup> <a name="volume_id" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentConfig.property.volumeId"></a>

```python
volume_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#volume_id CoreVolumeAttachment#volume_id}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#compartment_id CoreVolumeAttachment#compartment_id}.

---

##### `device`<sup>Optional</sup> <a name="device" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentConfig.property.device"></a>

```python
device: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#device CoreVolumeAttachment#device}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#display_name CoreVolumeAttachment#display_name}.

---

##### `encryption_in_transit_type`<sup>Optional</sup> <a name="encryption_in_transit_type" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentConfig.property.encryptionInTransitType"></a>

```python
encryption_in_transit_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#encryption_in_transit_type CoreVolumeAttachment#encryption_in_transit_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#id CoreVolumeAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_agent_auto_iscsi_login_enabled`<sup>Optional</sup> <a name="is_agent_auto_iscsi_login_enabled" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentConfig.property.isAgentAutoIscsiLoginEnabled"></a>

```python
is_agent_auto_iscsi_login_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#is_agent_auto_iscsi_login_enabled CoreVolumeAttachment#is_agent_auto_iscsi_login_enabled}.

---

##### `is_pv_encryption_in_transit_enabled`<sup>Optional</sup> <a name="is_pv_encryption_in_transit_enabled" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentConfig.property.isPvEncryptionInTransitEnabled"></a>

```python
is_pv_encryption_in_transit_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#is_pv_encryption_in_transit_enabled CoreVolumeAttachment#is_pv_encryption_in_transit_enabled}.

---

##### `is_read_only`<sup>Optional</sup> <a name="is_read_only" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentConfig.property.isReadOnly"></a>

```python
is_read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#is_read_only CoreVolumeAttachment#is_read_only}.

---

##### `is_shareable`<sup>Optional</sup> <a name="is_shareable" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentConfig.property.isShareable"></a>

```python
is_shareable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#is_shareable CoreVolumeAttachment#is_shareable}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentConfig.property.timeouts"></a>

```python
timeouts: CoreVolumeAttachmentTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeouts">CoreVolumeAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#timeouts CoreVolumeAttachment#timeouts}

---

##### `use_chap`<sup>Optional</sup> <a name="use_chap" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentConfig.property.useChap"></a>

```python
use_chap: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#use_chap CoreVolumeAttachment#use_chap}.

---

### CoreVolumeAttachmentMultipathDevices <a name="CoreVolumeAttachmentMultipathDevices" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevices"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevices.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_volume_attachment

coreVolumeAttachment.CoreVolumeAttachmentMultipathDevices()
```


### CoreVolumeAttachmentTimeouts <a name="CoreVolumeAttachmentTimeouts" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_volume_attachment

coreVolumeAttachment.CoreVolumeAttachmentTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#create CoreVolumeAttachment#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#delete CoreVolumeAttachment#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#update CoreVolumeAttachment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#create CoreVolumeAttachment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#delete CoreVolumeAttachment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#update CoreVolumeAttachment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreVolumeAttachmentMultipathDevicesList <a name="CoreVolumeAttachmentMultipathDevicesList" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_volume_attachment

coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CoreVolumeAttachmentMultipathDevicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CoreVolumeAttachmentMultipathDevicesOutputReference <a name="CoreVolumeAttachmentMultipathDevicesOutputReference" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_volume_attachment

coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesOutputReference.property.ipv4">ipv4</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesOutputReference.property.iqn">iqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevices">CoreVolumeAttachmentMultipathDevices</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ipv4`<sup>Required</sup> <a name="ipv4" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesOutputReference.property.ipv4"></a>

```python
ipv4: str
```

- *Type:* str

---

##### `iqn`<sup>Required</sup> <a name="iqn" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesOutputReference.property.iqn"></a>

```python
iqn: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevicesOutputReference.property.internalValue"></a>

```python
internal_value: CoreVolumeAttachmentMultipathDevices
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentMultipathDevices">CoreVolumeAttachmentMultipathDevices</a>

---


### CoreVolumeAttachmentTimeoutsOutputReference <a name="CoreVolumeAttachmentTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_volume_attachment

coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeouts">CoreVolumeAttachmentTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CoreVolumeAttachmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreVolumeAttachment.CoreVolumeAttachmentTimeouts">CoreVolumeAttachmentTimeouts</a>]

---



