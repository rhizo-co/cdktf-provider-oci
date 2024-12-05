# `coreDrgAttachmentManagement` Submodule <a name="`coreDrgAttachmentManagement` Submodule" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreDrgAttachmentManagement <a name="CoreDrgAttachmentManagement" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management oci_core_drg_attachment_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_drg_attachment_management

coreDrgAttachmentManagement.CoreDrgAttachmentManagement(
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
  compartment_id: str,
  drg_id: str,
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  drg_route_table_id: str = None,
  export_drg_route_distribution_id: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  network_details: CoreDrgAttachmentManagementNetworkDetails = None,
  network_id: str = None,
  remove_export_drg_route_distribution_trigger: typing.Union[bool, IResolvable] = None,
  route_table_id: str = None,
  timeouts: CoreDrgAttachmentManagementTimeouts = None,
  vcn_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.Initializer.parameter.attachmentType">attachment_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#attachment_type CoreDrgAttachmentManagement#attachment_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#compartment_id CoreDrgAttachmentManagement#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.Initializer.parameter.drgId">drg_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#drg_id CoreDrgAttachmentManagement#drg_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#defined_tags CoreDrgAttachmentManagement#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#display_name CoreDrgAttachmentManagement#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.Initializer.parameter.drgRouteTableId">drg_route_table_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#drg_route_table_id CoreDrgAttachmentManagement#drg_route_table_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.Initializer.parameter.exportDrgRouteDistributionId">export_drg_route_distribution_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#export_drg_route_distribution_id CoreDrgAttachmentManagement#export_drg_route_distribution_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#freeform_tags CoreDrgAttachmentManagement#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#id CoreDrgAttachmentManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.Initializer.parameter.networkDetails">network_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetails">CoreDrgAttachmentManagementNetworkDetails</a></code> | network_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.Initializer.parameter.networkId">network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#network_id CoreDrgAttachmentManagement#network_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.Initializer.parameter.removeExportDrgRouteDistributionTrigger">remove_export_drg_route_distribution_trigger</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#remove_export_drg_route_distribution_trigger CoreDrgAttachmentManagement#remove_export_drg_route_distribution_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.Initializer.parameter.routeTableId">route_table_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#route_table_id CoreDrgAttachmentManagement#route_table_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeouts">CoreDrgAttachmentManagementTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.Initializer.parameter.vcnId">vcn_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#vcn_id CoreDrgAttachmentManagement#vcn_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `attachment_type`<sup>Required</sup> <a name="attachment_type" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.Initializer.parameter.attachmentType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#attachment_type CoreDrgAttachmentManagement#attachment_type}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#compartment_id CoreDrgAttachmentManagement#compartment_id}.

---

##### `drg_id`<sup>Required</sup> <a name="drg_id" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.Initializer.parameter.drgId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#drg_id CoreDrgAttachmentManagement#drg_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#defined_tags CoreDrgAttachmentManagement#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#display_name CoreDrgAttachmentManagement#display_name}.

---

##### `drg_route_table_id`<sup>Optional</sup> <a name="drg_route_table_id" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.Initializer.parameter.drgRouteTableId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#drg_route_table_id CoreDrgAttachmentManagement#drg_route_table_id}.

---

##### `export_drg_route_distribution_id`<sup>Optional</sup> <a name="export_drg_route_distribution_id" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.Initializer.parameter.exportDrgRouteDistributionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#export_drg_route_distribution_id CoreDrgAttachmentManagement#export_drg_route_distribution_id}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#freeform_tags CoreDrgAttachmentManagement#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#id CoreDrgAttachmentManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `network_details`<sup>Optional</sup> <a name="network_details" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.Initializer.parameter.networkDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetails">CoreDrgAttachmentManagementNetworkDetails</a>

network_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#network_details CoreDrgAttachmentManagement#network_details}

---

##### `network_id`<sup>Optional</sup> <a name="network_id" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.Initializer.parameter.networkId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#network_id CoreDrgAttachmentManagement#network_id}.

---

##### `remove_export_drg_route_distribution_trigger`<sup>Optional</sup> <a name="remove_export_drg_route_distribution_trigger" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.Initializer.parameter.removeExportDrgRouteDistributionTrigger"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#remove_export_drg_route_distribution_trigger CoreDrgAttachmentManagement#remove_export_drg_route_distribution_trigger}.

---

##### `route_table_id`<sup>Optional</sup> <a name="route_table_id" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.Initializer.parameter.routeTableId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#route_table_id CoreDrgAttachmentManagement#route_table_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeouts">CoreDrgAttachmentManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#timeouts CoreDrgAttachmentManagement#timeouts}

---

##### `vcn_id`<sup>Optional</sup> <a name="vcn_id" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.Initializer.parameter.vcnId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#vcn_id CoreDrgAttachmentManagement#vcn_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.putNetworkDetails">put_network_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetDrgRouteTableId">reset_drg_route_table_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetExportDrgRouteDistributionId">reset_export_drg_route_distribution_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetNetworkDetails">reset_network_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetNetworkId">reset_network_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetRemoveExportDrgRouteDistributionTrigger">reset_remove_export_drg_route_distribution_trigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetRouteTableId">reset_route_table_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetVcnId">reset_vcn_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_network_details` <a name="put_network_details" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.putNetworkDetails"></a>

```python
def put_network_details(
  id: str,
  type: str,
  route_table_id: str = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.putNetworkDetails.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#id CoreDrgAttachmentManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.putNetworkDetails.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#type CoreDrgAttachmentManagement#type}.

---

###### `route_table_id`<sup>Optional</sup> <a name="route_table_id" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.putNetworkDetails.parameter.routeTableId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#route_table_id CoreDrgAttachmentManagement#route_table_id}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#create CoreDrgAttachmentManagement#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#delete CoreDrgAttachmentManagement#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#update CoreDrgAttachmentManagement#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_drg_route_table_id` <a name="reset_drg_route_table_id" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetDrgRouteTableId"></a>

```python
def reset_drg_route_table_id() -> None
```

##### `reset_export_drg_route_distribution_id` <a name="reset_export_drg_route_distribution_id" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetExportDrgRouteDistributionId"></a>

```python
def reset_export_drg_route_distribution_id() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_network_details` <a name="reset_network_details" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetNetworkDetails"></a>

```python
def reset_network_details() -> None
```

##### `reset_network_id` <a name="reset_network_id" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetNetworkId"></a>

```python
def reset_network_id() -> None
```

##### `reset_remove_export_drg_route_distribution_trigger` <a name="reset_remove_export_drg_route_distribution_trigger" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetRemoveExportDrgRouteDistributionTrigger"></a>

```python
def reset_remove_export_drg_route_distribution_trigger() -> None
```

##### `reset_route_table_id` <a name="reset_route_table_id" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetRouteTableId"></a>

```python
def reset_route_table_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_vcn_id` <a name="reset_vcn_id" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetVcnId"></a>

```python
def reset_vcn_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CoreDrgAttachmentManagement resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import core_drg_attachment_management

coreDrgAttachmentManagement.CoreDrgAttachmentManagement.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import core_drg_attachment_management

coreDrgAttachmentManagement.CoreDrgAttachmentManagement.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import core_drg_attachment_management

coreDrgAttachmentManagement.CoreDrgAttachmentManagement.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import core_drg_attachment_management

coreDrgAttachmentManagement.CoreDrgAttachmentManagement.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CoreDrgAttachmentManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CoreDrgAttachmentManagement to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CoreDrgAttachmentManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CoreDrgAttachmentManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.isCrossTenancy">is_cross_tenancy</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.networkDetails">network_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference">CoreDrgAttachmentManagementNetworkDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference">CoreDrgAttachmentManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.attachmentTypeInput">attachment_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.drgIdInput">drg_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.drgRouteTableIdInput">drg_route_table_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.exportDrgRouteDistributionIdInput">export_drg_route_distribution_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.networkDetailsInput">network_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetails">CoreDrgAttachmentManagementNetworkDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.networkIdInput">network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.removeExportDrgRouteDistributionTriggerInput">remove_export_drg_route_distribution_trigger_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.routeTableIdInput">route_table_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeouts">CoreDrgAttachmentManagementTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.vcnIdInput">vcn_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.attachmentType">attachment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.drgId">drg_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.drgRouteTableId">drg_route_table_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.exportDrgRouteDistributionId">export_drg_route_distribution_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.networkId">network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.removeExportDrgRouteDistributionTrigger">remove_export_drg_route_distribution_trigger</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.routeTableId">route_table_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.vcnId">vcn_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `is_cross_tenancy`<sup>Required</sup> <a name="is_cross_tenancy" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.isCrossTenancy"></a>

```python
is_cross_tenancy: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `network_details`<sup>Required</sup> <a name="network_details" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.networkDetails"></a>

```python
network_details: CoreDrgAttachmentManagementNetworkDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference">CoreDrgAttachmentManagementNetworkDetailsOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.timeouts"></a>

```python
timeouts: CoreDrgAttachmentManagementTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference">CoreDrgAttachmentManagementTimeoutsOutputReference</a>

---

##### `attachment_type_input`<sup>Optional</sup> <a name="attachment_type_input" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.attachmentTypeInput"></a>

```python
attachment_type_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `drg_id_input`<sup>Optional</sup> <a name="drg_id_input" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.drgIdInput"></a>

```python
drg_id_input: str
```

- *Type:* str

---

##### `drg_route_table_id_input`<sup>Optional</sup> <a name="drg_route_table_id_input" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.drgRouteTableIdInput"></a>

```python
drg_route_table_id_input: str
```

- *Type:* str

---

##### `export_drg_route_distribution_id_input`<sup>Optional</sup> <a name="export_drg_route_distribution_id_input" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.exportDrgRouteDistributionIdInput"></a>

```python
export_drg_route_distribution_id_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `network_details_input`<sup>Optional</sup> <a name="network_details_input" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.networkDetailsInput"></a>

```python
network_details_input: CoreDrgAttachmentManagementNetworkDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetails">CoreDrgAttachmentManagementNetworkDetails</a>

---

##### `network_id_input`<sup>Optional</sup> <a name="network_id_input" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.networkIdInput"></a>

```python
network_id_input: str
```

- *Type:* str

---

##### `remove_export_drg_route_distribution_trigger_input`<sup>Optional</sup> <a name="remove_export_drg_route_distribution_trigger_input" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.removeExportDrgRouteDistributionTriggerInput"></a>

```python
remove_export_drg_route_distribution_trigger_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `route_table_id_input`<sup>Optional</sup> <a name="route_table_id_input" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.routeTableIdInput"></a>

```python
route_table_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CoreDrgAttachmentManagementTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeouts">CoreDrgAttachmentManagementTimeouts</a>]

---

##### `vcn_id_input`<sup>Optional</sup> <a name="vcn_id_input" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.vcnIdInput"></a>

```python
vcn_id_input: str
```

- *Type:* str

---

##### `attachment_type`<sup>Required</sup> <a name="attachment_type" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.attachmentType"></a>

```python
attachment_type: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `drg_id`<sup>Required</sup> <a name="drg_id" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.drgId"></a>

```python
drg_id: str
```

- *Type:* str

---

##### `drg_route_table_id`<sup>Required</sup> <a name="drg_route_table_id" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.drgRouteTableId"></a>

```python
drg_route_table_id: str
```

- *Type:* str

---

##### `export_drg_route_distribution_id`<sup>Required</sup> <a name="export_drg_route_distribution_id" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.exportDrgRouteDistributionId"></a>

```python
export_drg_route_distribution_id: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `network_id`<sup>Required</sup> <a name="network_id" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.networkId"></a>

```python
network_id: str
```

- *Type:* str

---

##### `remove_export_drg_route_distribution_trigger`<sup>Required</sup> <a name="remove_export_drg_route_distribution_trigger" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.removeExportDrgRouteDistributionTrigger"></a>

```python
remove_export_drg_route_distribution_trigger: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `route_table_id`<sup>Required</sup> <a name="route_table_id" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.routeTableId"></a>

```python
route_table_id: str
```

- *Type:* str

---

##### `vcn_id`<sup>Required</sup> <a name="vcn_id" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.vcnId"></a>

```python
vcn_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CoreDrgAttachmentManagementConfig <a name="CoreDrgAttachmentManagementConfig" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_drg_attachment_management

coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  attachment_type: str,
  compartment_id: str,
  drg_id: str,
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  drg_route_table_id: str = None,
  export_drg_route_distribution_id: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  network_details: CoreDrgAttachmentManagementNetworkDetails = None,
  network_id: str = None,
  remove_export_drg_route_distribution_trigger: typing.Union[bool, IResolvable] = None,
  route_table_id: str = None,
  timeouts: CoreDrgAttachmentManagementTimeouts = None,
  vcn_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.attachmentType">attachment_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#attachment_type CoreDrgAttachmentManagement#attachment_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#compartment_id CoreDrgAttachmentManagement#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.drgId">drg_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#drg_id CoreDrgAttachmentManagement#drg_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#defined_tags CoreDrgAttachmentManagement#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#display_name CoreDrgAttachmentManagement#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.drgRouteTableId">drg_route_table_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#drg_route_table_id CoreDrgAttachmentManagement#drg_route_table_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.exportDrgRouteDistributionId">export_drg_route_distribution_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#export_drg_route_distribution_id CoreDrgAttachmentManagement#export_drg_route_distribution_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#freeform_tags CoreDrgAttachmentManagement#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#id CoreDrgAttachmentManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.networkDetails">network_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetails">CoreDrgAttachmentManagementNetworkDetails</a></code> | network_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.networkId">network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#network_id CoreDrgAttachmentManagement#network_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.removeExportDrgRouteDistributionTrigger">remove_export_drg_route_distribution_trigger</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#remove_export_drg_route_distribution_trigger CoreDrgAttachmentManagement#remove_export_drg_route_distribution_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.routeTableId">route_table_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#route_table_id CoreDrgAttachmentManagement#route_table_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeouts">CoreDrgAttachmentManagementTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.vcnId">vcn_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#vcn_id CoreDrgAttachmentManagement#vcn_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `attachment_type`<sup>Required</sup> <a name="attachment_type" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.attachmentType"></a>

```python
attachment_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#attachment_type CoreDrgAttachmentManagement#attachment_type}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#compartment_id CoreDrgAttachmentManagement#compartment_id}.

---

##### `drg_id`<sup>Required</sup> <a name="drg_id" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.drgId"></a>

```python
drg_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#drg_id CoreDrgAttachmentManagement#drg_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#defined_tags CoreDrgAttachmentManagement#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#display_name CoreDrgAttachmentManagement#display_name}.

---

##### `drg_route_table_id`<sup>Optional</sup> <a name="drg_route_table_id" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.drgRouteTableId"></a>

```python
drg_route_table_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#drg_route_table_id CoreDrgAttachmentManagement#drg_route_table_id}.

---

##### `export_drg_route_distribution_id`<sup>Optional</sup> <a name="export_drg_route_distribution_id" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.exportDrgRouteDistributionId"></a>

```python
export_drg_route_distribution_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#export_drg_route_distribution_id CoreDrgAttachmentManagement#export_drg_route_distribution_id}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#freeform_tags CoreDrgAttachmentManagement#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#id CoreDrgAttachmentManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `network_details`<sup>Optional</sup> <a name="network_details" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.networkDetails"></a>

```python
network_details: CoreDrgAttachmentManagementNetworkDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetails">CoreDrgAttachmentManagementNetworkDetails</a>

network_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#network_details CoreDrgAttachmentManagement#network_details}

---

##### `network_id`<sup>Optional</sup> <a name="network_id" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.networkId"></a>

```python
network_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#network_id CoreDrgAttachmentManagement#network_id}.

---

##### `remove_export_drg_route_distribution_trigger`<sup>Optional</sup> <a name="remove_export_drg_route_distribution_trigger" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.removeExportDrgRouteDistributionTrigger"></a>

```python
remove_export_drg_route_distribution_trigger: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#remove_export_drg_route_distribution_trigger CoreDrgAttachmentManagement#remove_export_drg_route_distribution_trigger}.

---

##### `route_table_id`<sup>Optional</sup> <a name="route_table_id" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.routeTableId"></a>

```python
route_table_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#route_table_id CoreDrgAttachmentManagement#route_table_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.timeouts"></a>

```python
timeouts: CoreDrgAttachmentManagementTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeouts">CoreDrgAttachmentManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#timeouts CoreDrgAttachmentManagement#timeouts}

---

##### `vcn_id`<sup>Optional</sup> <a name="vcn_id" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.vcnId"></a>

```python
vcn_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#vcn_id CoreDrgAttachmentManagement#vcn_id}.

---

### CoreDrgAttachmentManagementNetworkDetails <a name="CoreDrgAttachmentManagementNetworkDetails" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_drg_attachment_management

coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetails(
  id: str,
  type: str,
  route_table_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetails.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#id CoreDrgAttachmentManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetails.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#type CoreDrgAttachmentManagement#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetails.property.routeTableId">route_table_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#route_table_id CoreDrgAttachmentManagement#route_table_id}. |

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetails.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#id CoreDrgAttachmentManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetails.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#type CoreDrgAttachmentManagement#type}.

---

##### `route_table_id`<sup>Optional</sup> <a name="route_table_id" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetails.property.routeTableId"></a>

```python
route_table_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#route_table_id CoreDrgAttachmentManagement#route_table_id}.

---

### CoreDrgAttachmentManagementTimeouts <a name="CoreDrgAttachmentManagementTimeouts" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_drg_attachment_management

coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#create CoreDrgAttachmentManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#delete CoreDrgAttachmentManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#update CoreDrgAttachmentManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#create CoreDrgAttachmentManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#delete CoreDrgAttachmentManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#update CoreDrgAttachmentManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreDrgAttachmentManagementNetworkDetailsOutputReference <a name="CoreDrgAttachmentManagementNetworkDetailsOutputReference" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_drg_attachment_management

coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.resetRouteTableId">reset_route_table_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_route_table_id` <a name="reset_route_table_id" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.resetRouteTableId"></a>

```python
def reset_route_table_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.property.ipsecConnectionId">ipsec_connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.property.routeTableIdInput">route_table_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.property.routeTableId">route_table_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetails">CoreDrgAttachmentManagementNetworkDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ipsec_connection_id`<sup>Required</sup> <a name="ipsec_connection_id" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.property.ipsecConnectionId"></a>

```python
ipsec_connection_id: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `route_table_id_input`<sup>Optional</sup> <a name="route_table_id_input" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.property.routeTableIdInput"></a>

```python
route_table_id_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `route_table_id`<sup>Required</sup> <a name="route_table_id" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.property.routeTableId"></a>

```python
route_table_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.property.internalValue"></a>

```python
internal_value: CoreDrgAttachmentManagementNetworkDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetails">CoreDrgAttachmentManagementNetworkDetails</a>

---


### CoreDrgAttachmentManagementTimeoutsOutputReference <a name="CoreDrgAttachmentManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_drg_attachment_management

coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeouts">CoreDrgAttachmentManagementTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CoreDrgAttachmentManagementTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeouts">CoreDrgAttachmentManagementTimeouts</a>]

---



