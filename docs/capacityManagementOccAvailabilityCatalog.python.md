# `capacityManagementOccAvailabilityCatalog` Submodule <a name="`capacityManagementOccAvailabilityCatalog` Submodule" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CapacityManagementOccAvailabilityCatalog <a name="CapacityManagementOccAvailabilityCatalog" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog oci_capacity_management_occ_availability_catalog}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import capacity_management_occ_availability_catalog

capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  base64_encoded_catalog_details: str,
  compartment_id: str,
  display_name: str,
  namespace: str,
  occ_customer_group_id: str,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  metadata_details: CapacityManagementOccAvailabilityCatalogMetadataDetails = None,
  timeouts: CapacityManagementOccAvailabilityCatalogTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.Initializer.parameter.base64EncodedCatalogDetails">base64_encoded_catalog_details</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#base64encoded_catalog_details CapacityManagementOccAvailabilityCatalog#base64encoded_catalog_details}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#compartment_id CapacityManagementOccAvailabilityCatalog#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#display_name CapacityManagementOccAvailabilityCatalog#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#namespace CapacityManagementOccAvailabilityCatalog#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.Initializer.parameter.occCustomerGroupId">occ_customer_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#occ_customer_group_id CapacityManagementOccAvailabilityCatalog#occ_customer_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#defined_tags CapacityManagementOccAvailabilityCatalog#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#description CapacityManagementOccAvailabilityCatalog#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#freeform_tags CapacityManagementOccAvailabilityCatalog#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#id CapacityManagementOccAvailabilityCatalog#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.Initializer.parameter.metadataDetails">metadata_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetails">CapacityManagementOccAvailabilityCatalogMetadataDetails</a></code> | metadata_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeouts">CapacityManagementOccAvailabilityCatalogTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `base64_encoded_catalog_details`<sup>Required</sup> <a name="base64_encoded_catalog_details" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.Initializer.parameter.base64EncodedCatalogDetails"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#base64encoded_catalog_details CapacityManagementOccAvailabilityCatalog#base64encoded_catalog_details}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#compartment_id CapacityManagementOccAvailabilityCatalog#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#display_name CapacityManagementOccAvailabilityCatalog#display_name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.Initializer.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#namespace CapacityManagementOccAvailabilityCatalog#namespace}.

---

##### `occ_customer_group_id`<sup>Required</sup> <a name="occ_customer_group_id" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.Initializer.parameter.occCustomerGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#occ_customer_group_id CapacityManagementOccAvailabilityCatalog#occ_customer_group_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#defined_tags CapacityManagementOccAvailabilityCatalog#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#description CapacityManagementOccAvailabilityCatalog#description}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#freeform_tags CapacityManagementOccAvailabilityCatalog#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#id CapacityManagementOccAvailabilityCatalog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata_details`<sup>Optional</sup> <a name="metadata_details" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.Initializer.parameter.metadataDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetails">CapacityManagementOccAvailabilityCatalogMetadataDetails</a>

metadata_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#metadata_details CapacityManagementOccAvailabilityCatalog#metadata_details}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeouts">CapacityManagementOccAvailabilityCatalogTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#timeouts CapacityManagementOccAvailabilityCatalog#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.putMetadataDetails">put_metadata_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.resetMetadataDetails">reset_metadata_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_metadata_details` <a name="put_metadata_details" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.putMetadataDetails"></a>

```python
def put_metadata_details(
  format_version: str
) -> None
```

###### `format_version`<sup>Required</sup> <a name="format_version" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.putMetadataDetails.parameter.formatVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#format_version CapacityManagementOccAvailabilityCatalog#format_version}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#create CapacityManagementOccAvailabilityCatalog#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#delete CapacityManagementOccAvailabilityCatalog#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#update CapacityManagementOccAvailabilityCatalog#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_metadata_details` <a name="reset_metadata_details" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.resetMetadataDetails"></a>

```python
def reset_metadata_details() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CapacityManagementOccAvailabilityCatalog resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import capacity_management_occ_availability_catalog

capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import capacity_management_occ_availability_catalog

capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import capacity_management_occ_availability_catalog

capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import capacity_management_occ_availability_catalog

capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CapacityManagementOccAvailabilityCatalog resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CapacityManagementOccAvailabilityCatalog to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CapacityManagementOccAvailabilityCatalog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CapacityManagementOccAvailabilityCatalog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.catalogState">catalog_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.details">details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList">CapacityManagementOccAvailabilityCatalogDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.metadataDetails">metadata_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference">CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference">CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.base64EncodedCatalogDetailsInput">base64_encoded_catalog_details_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.metadataDetailsInput">metadata_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetails">CapacityManagementOccAvailabilityCatalogMetadataDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.occCustomerGroupIdInput">occ_customer_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeouts">CapacityManagementOccAvailabilityCatalogTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.base64EncodedCatalogDetails">base64_encoded_catalog_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.occCustomerGroupId">occ_customer_group_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `catalog_state`<sup>Required</sup> <a name="catalog_state" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.catalogState"></a>

```python
catalog_state: str
```

- *Type:* str

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.details"></a>

```python
details: CapacityManagementOccAvailabilityCatalogDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList">CapacityManagementOccAvailabilityCatalogDetailsList</a>

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `metadata_details`<sup>Required</sup> <a name="metadata_details" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.metadataDetails"></a>

```python
metadata_details: CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference">CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.timeouts"></a>

```python
timeouts: CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference">CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `base64_encoded_catalog_details_input`<sup>Optional</sup> <a name="base64_encoded_catalog_details_input" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.base64EncodedCatalogDetailsInput"></a>

```python
base64_encoded_catalog_details_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metadata_details_input`<sup>Optional</sup> <a name="metadata_details_input" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.metadataDetailsInput"></a>

```python
metadata_details_input: CapacityManagementOccAvailabilityCatalogMetadataDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetails">CapacityManagementOccAvailabilityCatalogMetadataDetails</a>

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `occ_customer_group_id_input`<sup>Optional</sup> <a name="occ_customer_group_id_input" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.occCustomerGroupIdInput"></a>

```python
occ_customer_group_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CapacityManagementOccAvailabilityCatalogTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeouts">CapacityManagementOccAvailabilityCatalogTimeouts</a>]

---

##### `base64_encoded_catalog_details`<sup>Required</sup> <a name="base64_encoded_catalog_details" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.base64EncodedCatalogDetails"></a>

```python
base64_encoded_catalog_details: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `occ_customer_group_id`<sup>Required</sup> <a name="occ_customer_group_id" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.occCustomerGroupId"></a>

```python
occ_customer_group_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CapacityManagementOccAvailabilityCatalogConfig <a name="CapacityManagementOccAvailabilityCatalogConfig" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import capacity_management_occ_availability_catalog

capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  base64_encoded_catalog_details: str,
  compartment_id: str,
  display_name: str,
  namespace: str,
  occ_customer_group_id: str,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  metadata_details: CapacityManagementOccAvailabilityCatalogMetadataDetails = None,
  timeouts: CapacityManagementOccAvailabilityCatalogTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.base64EncodedCatalogDetails">base64_encoded_catalog_details</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#base64encoded_catalog_details CapacityManagementOccAvailabilityCatalog#base64encoded_catalog_details}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#compartment_id CapacityManagementOccAvailabilityCatalog#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#display_name CapacityManagementOccAvailabilityCatalog#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#namespace CapacityManagementOccAvailabilityCatalog#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.occCustomerGroupId">occ_customer_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#occ_customer_group_id CapacityManagementOccAvailabilityCatalog#occ_customer_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#defined_tags CapacityManagementOccAvailabilityCatalog#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#description CapacityManagementOccAvailabilityCatalog#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#freeform_tags CapacityManagementOccAvailabilityCatalog#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#id CapacityManagementOccAvailabilityCatalog#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.metadataDetails">metadata_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetails">CapacityManagementOccAvailabilityCatalogMetadataDetails</a></code> | metadata_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeouts">CapacityManagementOccAvailabilityCatalogTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `base64_encoded_catalog_details`<sup>Required</sup> <a name="base64_encoded_catalog_details" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.base64EncodedCatalogDetails"></a>

```python
base64_encoded_catalog_details: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#base64encoded_catalog_details CapacityManagementOccAvailabilityCatalog#base64encoded_catalog_details}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#compartment_id CapacityManagementOccAvailabilityCatalog#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#display_name CapacityManagementOccAvailabilityCatalog#display_name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#namespace CapacityManagementOccAvailabilityCatalog#namespace}.

---

##### `occ_customer_group_id`<sup>Required</sup> <a name="occ_customer_group_id" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.occCustomerGroupId"></a>

```python
occ_customer_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#occ_customer_group_id CapacityManagementOccAvailabilityCatalog#occ_customer_group_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#defined_tags CapacityManagementOccAvailabilityCatalog#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#description CapacityManagementOccAvailabilityCatalog#description}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#freeform_tags CapacityManagementOccAvailabilityCatalog#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#id CapacityManagementOccAvailabilityCatalog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata_details`<sup>Optional</sup> <a name="metadata_details" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.metadataDetails"></a>

```python
metadata_details: CapacityManagementOccAvailabilityCatalogMetadataDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetails">CapacityManagementOccAvailabilityCatalogMetadataDetails</a>

metadata_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#metadata_details CapacityManagementOccAvailabilityCatalog#metadata_details}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.timeouts"></a>

```python
timeouts: CapacityManagementOccAvailabilityCatalogTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeouts">CapacityManagementOccAvailabilityCatalogTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#timeouts CapacityManagementOccAvailabilityCatalog#timeouts}

---

### CapacityManagementOccAvailabilityCatalogDetails <a name="CapacityManagementOccAvailabilityCatalogDetails" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import capacity_management_occ_availability_catalog

capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetails()
```


### CapacityManagementOccAvailabilityCatalogMetadataDetails <a name="CapacityManagementOccAvailabilityCatalogMetadataDetails" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import capacity_management_occ_availability_catalog

capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetails(
  format_version: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetails.property.formatVersion">format_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#format_version CapacityManagementOccAvailabilityCatalog#format_version}. |

---

##### `format_version`<sup>Required</sup> <a name="format_version" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetails.property.formatVersion"></a>

```python
format_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#format_version CapacityManagementOccAvailabilityCatalog#format_version}.

---

### CapacityManagementOccAvailabilityCatalogTimeouts <a name="CapacityManagementOccAvailabilityCatalogTimeouts" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import capacity_management_occ_availability_catalog

capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#create CapacityManagementOccAvailabilityCatalog#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#delete CapacityManagementOccAvailabilityCatalog#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#update CapacityManagementOccAvailabilityCatalog#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#create CapacityManagementOccAvailabilityCatalog#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#delete CapacityManagementOccAvailabilityCatalog#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#update CapacityManagementOccAvailabilityCatalog#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CapacityManagementOccAvailabilityCatalogDetailsList <a name="CapacityManagementOccAvailabilityCatalogDetailsList" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import capacity_management_occ_availability_catalog

capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CapacityManagementOccAvailabilityCatalogDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CapacityManagementOccAvailabilityCatalogDetailsOutputReference <a name="CapacityManagementOccAvailabilityCatalogDetailsOutputReference" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import capacity_management_occ_availability_catalog

capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.availableQuantity">available_quantity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.dateExpectedCapacityHandover">date_expected_capacity_handover</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.dateFinalCustomerOrder">date_final_customer_order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.demandedQuantity">demanded_quantity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.resourceName">resource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.totalAvailableQuantity">total_available_quantity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.workloadType">workload_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetails">CapacityManagementOccAvailabilityCatalogDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `available_quantity`<sup>Required</sup> <a name="available_quantity" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.availableQuantity"></a>

```python
available_quantity: str
```

- *Type:* str

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `date_expected_capacity_handover`<sup>Required</sup> <a name="date_expected_capacity_handover" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.dateExpectedCapacityHandover"></a>

```python
date_expected_capacity_handover: str
```

- *Type:* str

---

##### `date_final_customer_order`<sup>Required</sup> <a name="date_final_customer_order" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.dateFinalCustomerOrder"></a>

```python
date_final_customer_order: str
```

- *Type:* str

---

##### `demanded_quantity`<sup>Required</sup> <a name="demanded_quantity" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.demandedQuantity"></a>

```python
demanded_quantity: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `resource_name`<sup>Required</sup> <a name="resource_name" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.resourceName"></a>

```python
resource_name: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `total_available_quantity`<sup>Required</sup> <a name="total_available_quantity" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.totalAvailableQuantity"></a>

```python
total_available_quantity: str
```

- *Type:* str

---

##### `unit`<sup>Required</sup> <a name="unit" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `workload_type`<sup>Required</sup> <a name="workload_type" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.workloadType"></a>

```python
workload_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.internalValue"></a>

```python
internal_value: CapacityManagementOccAvailabilityCatalogDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetails">CapacityManagementOccAvailabilityCatalogDetails</a>

---


### CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference <a name="CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import capacity_management_occ_availability_catalog

capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.property.formatVersionInput">format_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.property.formatVersion">format_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetails">CapacityManagementOccAvailabilityCatalogMetadataDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `format_version_input`<sup>Optional</sup> <a name="format_version_input" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.property.formatVersionInput"></a>

```python
format_version_input: str
```

- *Type:* str

---

##### `format_version`<sup>Required</sup> <a name="format_version" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.property.formatVersion"></a>

```python
format_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.property.internalValue"></a>

```python
internal_value: CapacityManagementOccAvailabilityCatalogMetadataDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetails">CapacityManagementOccAvailabilityCatalogMetadataDetails</a>

---


### CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference <a name="CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import capacity_management_occ_availability_catalog

capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeouts">CapacityManagementOccAvailabilityCatalogTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CapacityManagementOccAvailabilityCatalogTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeouts">CapacityManagementOccAvailabilityCatalogTimeouts</a>]

---



