# `dataOciCapacityManagementInternalOccHandoverResourceBlocks` Submodule <a name="`dataOciCapacityManagementInternalOccHandoverResourceBlocks` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCapacityManagementInternalOccHandoverResourceBlocks <a name="DataOciCapacityManagementInternalOccHandoverResourceBlocks" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks oci_capacity_management_internal_occ_handover_resource_blocks}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_occ_handover_resource_blocks

dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  namespace: str,
  occ_customer_group_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter]] = None,
  handover_date_greater_than_or_equal_to: str = None,
  handover_date_less_than_or_equal_to: str = None,
  handover_resource_name: str = None,
  id: str = None,
  occ_handover_resource_block_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#compartment_id DataOciCapacityManagementInternalOccHandoverResourceBlocks#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#namespace DataOciCapacityManagementInternalOccHandoverResourceBlocks#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.occCustomerGroupId">occ_customer_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#occ_customer_group_id DataOciCapacityManagementInternalOccHandoverResourceBlocks#occ_customer_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter">DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.handoverDateGreaterThanOrEqualTo">handover_date_greater_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#handover_date_greater_than_or_equal_to DataOciCapacityManagementInternalOccHandoverResourceBlocks#handover_date_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.handoverDateLessThanOrEqualTo">handover_date_less_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#handover_date_less_than_or_equal_to DataOciCapacityManagementInternalOccHandoverResourceBlocks#handover_date_less_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.handoverResourceName">handover_resource_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#handover_resource_name DataOciCapacityManagementInternalOccHandoverResourceBlocks#handover_resource_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#id DataOciCapacityManagementInternalOccHandoverResourceBlocks#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.occHandoverResourceBlockId">occ_handover_resource_block_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#occ_handover_resource_block_id DataOciCapacityManagementInternalOccHandoverResourceBlocks#occ_handover_resource_block_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#compartment_id DataOciCapacityManagementInternalOccHandoverResourceBlocks#compartment_id}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#namespace DataOciCapacityManagementInternalOccHandoverResourceBlocks#namespace}.

---

##### `occ_customer_group_id`<sup>Required</sup> <a name="occ_customer_group_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.occCustomerGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#occ_customer_group_id DataOciCapacityManagementInternalOccHandoverResourceBlocks#occ_customer_group_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter">DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#filter DataOciCapacityManagementInternalOccHandoverResourceBlocks#filter}

---

##### `handover_date_greater_than_or_equal_to`<sup>Optional</sup> <a name="handover_date_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.handoverDateGreaterThanOrEqualTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#handover_date_greater_than_or_equal_to DataOciCapacityManagementInternalOccHandoverResourceBlocks#handover_date_greater_than_or_equal_to}.

---

##### `handover_date_less_than_or_equal_to`<sup>Optional</sup> <a name="handover_date_less_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.handoverDateLessThanOrEqualTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#handover_date_less_than_or_equal_to DataOciCapacityManagementInternalOccHandoverResourceBlocks#handover_date_less_than_or_equal_to}.

---

##### `handover_resource_name`<sup>Optional</sup> <a name="handover_resource_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.handoverResourceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#handover_resource_name DataOciCapacityManagementInternalOccHandoverResourceBlocks#handover_resource_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#id DataOciCapacityManagementInternalOccHandoverResourceBlocks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `occ_handover_resource_block_id`<sup>Optional</sup> <a name="occ_handover_resource_block_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.occHandoverResourceBlockId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#occ_handover_resource_block_id DataOciCapacityManagementInternalOccHandoverResourceBlocks#occ_handover_resource_block_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.resetHandoverDateGreaterThanOrEqualTo">reset_handover_date_greater_than_or_equal_to</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.resetHandoverDateLessThanOrEqualTo">reset_handover_date_less_than_or_equal_to</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.resetHandoverResourceName">reset_handover_resource_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.resetOccHandoverResourceBlockId">reset_occ_handover_resource_block_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter">DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_handover_date_greater_than_or_equal_to` <a name="reset_handover_date_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.resetHandoverDateGreaterThanOrEqualTo"></a>

```python
def reset_handover_date_greater_than_or_equal_to() -> None
```

##### `reset_handover_date_less_than_or_equal_to` <a name="reset_handover_date_less_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.resetHandoverDateLessThanOrEqualTo"></a>

```python
def reset_handover_date_less_than_or_equal_to() -> None
```

##### `reset_handover_resource_name` <a name="reset_handover_resource_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.resetHandoverResourceName"></a>

```python
def reset_handover_resource_name() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_occ_handover_resource_block_id` <a name="reset_occ_handover_resource_block_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.resetOccHandoverResourceBlockId"></a>

```python
def reset_occ_handover_resource_block_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCapacityManagementInternalOccHandoverResourceBlocks resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_occ_handover_resource_blocks

dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_occ_handover_resource_blocks

dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_occ_handover_resource_blocks

dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_occ_handover_resource_blocks

dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCapacityManagementInternalOccHandoverResourceBlocks resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCapacityManagementInternalOccHandoverResourceBlocks to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCapacityManagementInternalOccHandoverResourceBlocks that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCapacityManagementInternalOccHandoverResourceBlocks to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList">DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.occHandoverResourceBlockCollection">occ_handover_resource_block_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList">DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter">DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.handoverDateGreaterThanOrEqualToInput">handover_date_greater_than_or_equal_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.handoverDateLessThanOrEqualToInput">handover_date_less_than_or_equal_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.handoverResourceNameInput">handover_resource_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.occCustomerGroupIdInput">occ_customer_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.occHandoverResourceBlockIdInput">occ_handover_resource_block_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.handoverDateGreaterThanOrEqualTo">handover_date_greater_than_or_equal_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.handoverDateLessThanOrEqualTo">handover_date_less_than_or_equal_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.handoverResourceName">handover_resource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.occCustomerGroupId">occ_customer_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.occHandoverResourceBlockId">occ_handover_resource_block_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.filter"></a>

```python
filter: DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList">DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList</a>

---

##### `occ_handover_resource_block_collection`<sup>Required</sup> <a name="occ_handover_resource_block_collection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.occHandoverResourceBlockCollection"></a>

```python
occ_handover_resource_block_collection: DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList">DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter">DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter</a>]]

---

##### `handover_date_greater_than_or_equal_to_input`<sup>Optional</sup> <a name="handover_date_greater_than_or_equal_to_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.handoverDateGreaterThanOrEqualToInput"></a>

```python
handover_date_greater_than_or_equal_to_input: str
```

- *Type:* str

---

##### `handover_date_less_than_or_equal_to_input`<sup>Optional</sup> <a name="handover_date_less_than_or_equal_to_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.handoverDateLessThanOrEqualToInput"></a>

```python
handover_date_less_than_or_equal_to_input: str
```

- *Type:* str

---

##### `handover_resource_name_input`<sup>Optional</sup> <a name="handover_resource_name_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.handoverResourceNameInput"></a>

```python
handover_resource_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `occ_customer_group_id_input`<sup>Optional</sup> <a name="occ_customer_group_id_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.occCustomerGroupIdInput"></a>

```python
occ_customer_group_id_input: str
```

- *Type:* str

---

##### `occ_handover_resource_block_id_input`<sup>Optional</sup> <a name="occ_handover_resource_block_id_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.occHandoverResourceBlockIdInput"></a>

```python
occ_handover_resource_block_id_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `handover_date_greater_than_or_equal_to`<sup>Required</sup> <a name="handover_date_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.handoverDateGreaterThanOrEqualTo"></a>

```python
handover_date_greater_than_or_equal_to: str
```

- *Type:* str

---

##### `handover_date_less_than_or_equal_to`<sup>Required</sup> <a name="handover_date_less_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.handoverDateLessThanOrEqualTo"></a>

```python
handover_date_less_than_or_equal_to: str
```

- *Type:* str

---

##### `handover_resource_name`<sup>Required</sup> <a name="handover_resource_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.handoverResourceName"></a>

```python
handover_resource_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `occ_customer_group_id`<sup>Required</sup> <a name="occ_customer_group_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.occCustomerGroupId"></a>

```python
occ_customer_group_id: str
```

- *Type:* str

---

##### `occ_handover_resource_block_id`<sup>Required</sup> <a name="occ_handover_resource_block_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.occHandoverResourceBlockId"></a>

```python
occ_handover_resource_block_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig <a name="DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_occ_handover_resource_blocks

dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  namespace: str,
  occ_customer_group_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter]] = None,
  handover_date_greater_than_or_equal_to: str = None,
  handover_date_less_than_or_equal_to: str = None,
  handover_resource_name: str = None,
  id: str = None,
  occ_handover_resource_block_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#compartment_id DataOciCapacityManagementInternalOccHandoverResourceBlocks#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#namespace DataOciCapacityManagementInternalOccHandoverResourceBlocks#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.property.occCustomerGroupId">occ_customer_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#occ_customer_group_id DataOciCapacityManagementInternalOccHandoverResourceBlocks#occ_customer_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter">DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.property.handoverDateGreaterThanOrEqualTo">handover_date_greater_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#handover_date_greater_than_or_equal_to DataOciCapacityManagementInternalOccHandoverResourceBlocks#handover_date_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.property.handoverDateLessThanOrEqualTo">handover_date_less_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#handover_date_less_than_or_equal_to DataOciCapacityManagementInternalOccHandoverResourceBlocks#handover_date_less_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.property.handoverResourceName">handover_resource_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#handover_resource_name DataOciCapacityManagementInternalOccHandoverResourceBlocks#handover_resource_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#id DataOciCapacityManagementInternalOccHandoverResourceBlocks#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.property.occHandoverResourceBlockId">occ_handover_resource_block_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#occ_handover_resource_block_id DataOciCapacityManagementInternalOccHandoverResourceBlocks#occ_handover_resource_block_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#compartment_id DataOciCapacityManagementInternalOccHandoverResourceBlocks#compartment_id}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#namespace DataOciCapacityManagementInternalOccHandoverResourceBlocks#namespace}.

---

##### `occ_customer_group_id`<sup>Required</sup> <a name="occ_customer_group_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.property.occCustomerGroupId"></a>

```python
occ_customer_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#occ_customer_group_id DataOciCapacityManagementInternalOccHandoverResourceBlocks#occ_customer_group_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter">DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#filter DataOciCapacityManagementInternalOccHandoverResourceBlocks#filter}

---

##### `handover_date_greater_than_or_equal_to`<sup>Optional</sup> <a name="handover_date_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.property.handoverDateGreaterThanOrEqualTo"></a>

```python
handover_date_greater_than_or_equal_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#handover_date_greater_than_or_equal_to DataOciCapacityManagementInternalOccHandoverResourceBlocks#handover_date_greater_than_or_equal_to}.

---

##### `handover_date_less_than_or_equal_to`<sup>Optional</sup> <a name="handover_date_less_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.property.handoverDateLessThanOrEqualTo"></a>

```python
handover_date_less_than_or_equal_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#handover_date_less_than_or_equal_to DataOciCapacityManagementInternalOccHandoverResourceBlocks#handover_date_less_than_or_equal_to}.

---

##### `handover_resource_name`<sup>Optional</sup> <a name="handover_resource_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.property.handoverResourceName"></a>

```python
handover_resource_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#handover_resource_name DataOciCapacityManagementInternalOccHandoverResourceBlocks#handover_resource_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#id DataOciCapacityManagementInternalOccHandoverResourceBlocks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `occ_handover_resource_block_id`<sup>Optional</sup> <a name="occ_handover_resource_block_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.property.occHandoverResourceBlockId"></a>

```python
occ_handover_resource_block_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#occ_handover_resource_block_id DataOciCapacityManagementInternalOccHandoverResourceBlocks#occ_handover_resource_block_id}.

---

### DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter <a name="DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_occ_handover_resource_blocks

dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#name DataOciCapacityManagementInternalOccHandoverResourceBlocks#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#values DataOciCapacityManagementInternalOccHandoverResourceBlocks#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#regex DataOciCapacityManagementInternalOccHandoverResourceBlocks#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#name DataOciCapacityManagementInternalOccHandoverResourceBlocks#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#values DataOciCapacityManagementInternalOccHandoverResourceBlocks#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#regex DataOciCapacityManagementInternalOccHandoverResourceBlocks#regex}.

---

### DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollection <a name="DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_occ_handover_resource_blocks

dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollection()
```


### DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItems <a name="DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_occ_handover_resource_blocks

dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItems()
```


### DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequests <a name="DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequests" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequests"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequests.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_occ_handover_resource_blocks

dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequests()
```


### DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetails <a name="DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetails" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_occ_handover_resource_blocks

dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetails()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList <a name="DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_occ_handover_resource_blocks

dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter">DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter">DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter</a>]]

---


### DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference <a name="DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_occ_handover_resource_blocks

dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter">DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter">DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter</a>]

---


### DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList <a name="DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_occ_handover_resource_blocks

dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference <a name="DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_occ_handover_resource_blocks

dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.property.handoverQuantity">handover_quantity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.property.occCapacityRequestId">occ_capacity_request_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequests">DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequests</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `handover_quantity`<sup>Required</sup> <a name="handover_quantity" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.property.handoverQuantity"></a>

```python
handover_quantity: str
```

- *Type:* str

---

##### `occ_capacity_request_id`<sup>Required</sup> <a name="occ_capacity_request_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.property.occCapacityRequestId"></a>

```python
occ_capacity_request_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequests
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequests">DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequests</a>

---


### DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList <a name="DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_occ_handover_resource_blocks

dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference <a name="DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_occ_handover_resource_blocks

dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.associatedCapacityRequests">associated_capacity_requests</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList">DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.handoverDate">handover_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.handoverResourceName">handover_resource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.occCustomerGroupId">occ_customer_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.placementDetails">placement_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList">DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.totalHandoverQuantity">total_handover_quantity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItems">DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `associated_capacity_requests`<sup>Required</sup> <a name="associated_capacity_requests" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.associatedCapacityRequests"></a>

```python
associated_capacity_requests: DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList">DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList</a>

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `handover_date`<sup>Required</sup> <a name="handover_date" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.handoverDate"></a>

```python
handover_date: str
```

- *Type:* str

---

##### `handover_resource_name`<sup>Required</sup> <a name="handover_resource_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.handoverResourceName"></a>

```python
handover_resource_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `occ_customer_group_id`<sup>Required</sup> <a name="occ_customer_group_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.occCustomerGroupId"></a>

```python
occ_customer_group_id: str
```

- *Type:* str

---

##### `placement_details`<sup>Required</sup> <a name="placement_details" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.placementDetails"></a>

```python
placement_details: DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList">DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList</a>

---

##### `total_handover_quantity`<sup>Required</sup> <a name="total_handover_quantity" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.totalHandoverQuantity"></a>

```python
total_handover_quantity: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItems">DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItems</a>

---


### DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList <a name="DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_occ_handover_resource_blocks

dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference <a name="DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_occ_handover_resource_blocks

dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.block">block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.building">building</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.room">room</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.workloadType">workload_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetails">DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `block`<sup>Required</sup> <a name="block" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.block"></a>

```python
block: str
```

- *Type:* str

---

##### `building`<sup>Required</sup> <a name="building" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.building"></a>

```python
building: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `room`<sup>Required</sup> <a name="room" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.room"></a>

```python
room: str
```

- *Type:* str

---

##### `workload_type`<sup>Required</sup> <a name="workload_type" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.workloadType"></a>

```python
workload_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetails">DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetails</a>

---


### DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList <a name="DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_occ_handover_resource_blocks

dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference <a name="DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_occ_handover_resource_blocks

dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList">DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollection">DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.property.items"></a>

```python
items: DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList">DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollection">DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollection</a>

---



